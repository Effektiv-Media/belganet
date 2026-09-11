import { getLandingPageBySlug } from "@/content/landing";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getLandingPageBySlug(slug);

  return renderOgImage({
    eyebrow: "Belganet Städ och Allservice",
    title: data ? data.h1 : "Belganet Städ och Allservice",
    subtitle: data ? "Kostnadsfri offert · RUT-avdrag · Fullt försäkrade" : undefined,
  });
}
