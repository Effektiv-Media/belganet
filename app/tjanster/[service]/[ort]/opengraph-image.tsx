import { getLandingPage } from "@/content/landing";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ service: string; ort: string }>;
}) {
  const { service, ort } = await params;
  const data = getLandingPage(service, ort);
  const subtitle =
    data?.rut === "yes"
      ? "Kostnadsfri offert · RUT-avdrag · Fullt försäkrade"
      : "Kostnadsfri offert · Tydliga avtal · Fullt försäkrade";

  return renderOgImage({
    eyebrow: "Belganet Städ och Allservice",
    title: data ? data.h1 : "Belganet Städ och Allservice",
    subtitle: data ? subtitle : undefined,
  });
}
