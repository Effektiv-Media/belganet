/**
 * Which service × ort landing pages are offered to Google.
 *
 * All 120 combinations stay live for visitors (and for internal linking),
 * but on a brand-new domain a large set of near-template pages risks being
 * classed as scaled/doorway content, which can hold back the whole site.
 * So only combinations with verified search demand are indexable; the rest
 * are served `noindex, follow` and left out of the sitemap.
 *
 * Seeded from the DataForSEO keyword research in the project plan
 * (Sverige/sv, Sept 2026). To promote a page: give it genuinely unique
 * local content first, then add it here.
 */

/** Monthly search volume per "{service} {ort}" query (0 = none measured). */
const DEMAND: Record<string, Record<string, number>> = {
  flyttstad: { kalmar: 590, karlskrona: 390, vaxjo: 320, nybro: 140, ronneby: 110, karlshamn: 110 },
  stadfirma: { vaxjo: 480, kalmar: 320, karlskrona: 210, solvesborg: 110, karlshamn: 90, nybro: 90, ronneby: 70 },
  fonsterputs: { vaxjo: 320, kalmar: 210, karlskrona: 210, karlshamn: 70, nybro: 70, solvesborg: 50, ronneby: 20 },
  hemstad: { vaxjo: 170, kalmar: 140, karlskrona: 70, ronneby: 20 },
  // No measured volume, but these were live on the original site (existing
  // URLs, client-approved copy) — keep them indexable.
  kontorsstad: { vaxjo: 10, kalmar: 10, karlskrona: 10, ronneby: 10 },
  storstadning: { vaxjo: 50 },
  // Core offering on the homepage; no measured volume per town yet.
  tradgardsskotsel: { vaxjo: 10, kalmar: 10, karlskrona: 10, ronneby: 10 },
};

/** Fallback town order (largest first) for services without demand data. */
const DEFAULT_ORT_ORDER = [
  "vaxjo",
  "kalmar",
  "karlskrona",
  "karlshamn",
  "ronneby",
  "oskarshamn",
  "nybro",
  "solvesborg",
  "olofstrom",
  "emmaboda",
];

export const INDEXED_LP_SLUGS: ReadonlySet<string> = new Set(
  Object.entries(DEMAND).flatMap(([service, orter]) =>
    Object.keys(orter).map((ort) => `${service}-${ort}`),
  ),
);

export function isLandingPageIndexed(serviceSlug: string, ortSlug: string): boolean {
  return INDEXED_LP_SLUGS.has(`${serviceSlug}-${ortSlug}`);
}

/**
 * Town slugs for a service, ordered by search demand (highest first), then
 * by town size. Used to decide where guides and hubs point their links.
 */
export function topOrterForService(serviceSlug: string): string[] {
  const demand = DEMAND[serviceSlug] ?? {};
  return [...DEFAULT_ORT_ORDER].sort(
    (a, b) =>
      (demand[b] ?? 0) - (demand[a] ?? 0) ||
      DEFAULT_ORT_ORDER.indexOf(a) - DEFAULT_ORT_ORDER.indexOf(b),
  );
}
