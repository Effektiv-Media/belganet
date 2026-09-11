import type { MetadataRoute } from "next";
import { ALL_LANDING_PAGES } from "@/content/landing";
import { ORTER } from "@/content/orter";
import { SERVICES } from "@/content/services";
import { GUIDES } from "@/content/guides";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";
import {
  guidePath,
  guidesIndexPath,
  lpPath,
  ortPath,
  orterIndexPath,
  servicePath,
  servicesIndexPath,
} from "@/lib/routes";

/**
 * Every indexable URL, on the real domain. Rules:
 * - `lastModified` comes from real content dates, never `new Date()` — a
 *   lastmod that changes on every deploy teaches Google to ignore it.
 * - noindexed landing pages (low-demand service × ort combos) are left out;
 *   a sitemap should only list pages you want indexed.
 * - `priority` / `changeFrequency` are omitted: Google ignores both.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;
  const latestGuideUpdate = GUIDES.map((g) => g.updated).sort().at(-1) ?? CONTENT_UPDATED;

  return [
    { url: url("/"), lastModified: CONTENT_UPDATED },
    { url: url(servicesIndexPath()), lastModified: CONTENT_UPDATED },
    ...SERVICES.map((s) => ({ url: url(servicePath(s.slug)), lastModified: CONTENT_UPDATED })),
    { url: url(orterIndexPath()), lastModified: CONTENT_UPDATED },
    ...ORTER.map((o) => ({ url: url(ortPath(o.slug)), lastModified: CONTENT_UPDATED })),
    ...ALL_LANDING_PAGES.filter((p) => p.indexed).map((p) => ({
      url: url(lpPath(p.serviceSlug, p.ortSlug)),
      lastModified: CONTENT_UPDATED,
    })),
    { url: url(guidesIndexPath()), lastModified: latestGuideUpdate },
    ...GUIDES.map((g) => ({ url: url(guidePath(g.slug)), lastModified: g.updated })),
    { url: url("/integritetspolicy"), lastModified: CONTENT_UPDATED },
  ];
}
