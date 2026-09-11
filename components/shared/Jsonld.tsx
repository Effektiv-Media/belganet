import type { JsonLd } from "@/lib/schema";

/**
 * Renders one or more JSON-LD blocks as <script type="application/ld+json">
 * tags. The original site emitted zero structured data anywhere — this is
 * the single component every page uses to fix that.
 */
export function Jsonld({ data }: { data: JsonLd | JsonLd[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
