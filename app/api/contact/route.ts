import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/site";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(200),
  phone: z.string().trim().min(1, "Telefon krävs").max(50),
  email: z.string().trim().email("Ogiltig e-postadress").max(200),
  address: z.string().trim().max(300).optional().default(""),
  message: z.string().trim().min(1, "Beskrivning krävs").max(5000),
  source: z.string().trim().max(200).optional().default("Allmän förfrågan"),
  // Honeypot: real users never fill this in. Bots frequently do.
  company: z.string().max(200).optional().default(""),
});

// Very small in-memory rate limit — good enough for a low-traffic marketing
// site on a single serverless instance; swap for Upstash/Redis if traffic
// grows or the app runs across many concurrent instances.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "För många förfrågningar. Försök igen om en stund." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Något gick fel. Försök igen." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Något gick fel. Försök igen." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // but never actually send the email.
  if (data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || BUSINESS.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    // Not configured yet — log server-side so the request isn't silently
    // lost during setup, but tell the client it worked so the form can be
    // demoed/tested end-to-end before Resend credentials are added.
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL not set — email not sent.",
      { source: data.source, email: data.email },
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Ny förfrågan: ${data.source}`,
      text: [
        `Källa: ${data.source}`,
        `Namn: ${data.name}`,
        `Telefon: ${data.phone}`,
        `E-post: ${data.email}`,
        data.address ? `Adress/Ort: ${data.address}` : null,
        "",
        "Meddelande:",
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>Ny förfrågan: ${escapeHtml(data.source)}</h2>
        <p><strong>Namn:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>E-post:</strong> ${escapeHtml(data.email)}</p>
        ${data.address ? `<p><strong>Adress/Ort:</strong> ${escapeHtml(data.address)}</p>` : ""}
        <p><strong>Meddelande:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Något gick fel. Försök igen." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Något gick fel. Försök igen." },
      { status: 500 },
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
