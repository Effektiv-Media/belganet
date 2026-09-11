import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Städ & Allservice i Sydsverige",
    title: "Belganet Städ och Allservice",
    subtitle: "Hemstäd, flyttstäd, kontorsstäd, fönsterputs & trädgårdsservice",
  });
}
