import { SERVICE_BY_SLUG } from "@/content/services";
import { serviceHeadTerm } from "@/content/serviceHub";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = SERVICE_BY_SLUG[slug];

  return renderOgImage({
    eyebrow: "Blekinge · Kalmar län · Växjö",
    title: service ? `${serviceHeadTerm(service)} i sydöstra Sverige` : "Belganet Städ och Allservice",
    subtitle:
      service?.rut === "yes"
        ? "Kostnadsfri offert · RUT-avdrag · Fullt försäkrade"
        : "Kostnadsfri offert · Tydliga avtal · Fullt försäkrade",
  });
}
