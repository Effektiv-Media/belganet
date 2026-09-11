import { ORT_BY_SLUG } from "@/content/orter";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ ort: string }> }) {
  const { ort: ortSlug } = await params;
  const ort = ORT_BY_SLUG[ortSlug];

  return renderOgImage({
    eyebrow: ort ? `${ort.kommun} · ${ort.lan}` : "Belganet Städ och Allservice",
    title: ort ? `Städfirma i ${ort.name}` : "Belganet Städ och Allservice",
    subtitle: "Hemstäd · Flyttstäd · Kontorsstäd · Fönsterputs · Trädgård",
  });
}
