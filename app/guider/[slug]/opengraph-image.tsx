import { GUIDE_BY_SLUG } from "@/content/guides";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDE_BY_SLUG[slug];

  return renderOgImage({
    eyebrow: "Guide",
    title: guide ? guide.title : "Belganet Städ och Allservice",
    subtitle: "belganetstadochallservice.se",
  });
}
