import type { MetadataRoute } from "next";
import { ALL_LANDING_PAGES } from "@/content/landing";
import { ORTER } from "@/content/orter";
import { GUIDES } from "@/content/guides";
import { SITE_URL } from "@/lib/site";

/**
 * Full sitemap on the correct domain. The original site's sitemap.xml
 * pointed at "https://belganet.se" — a different, dead domain — so every
 * submitted URL 404'd. Every URL here resolves under the real live domain.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/landningssidor`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/omraden`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/guider`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/integritetspolicy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const ortRoutes: MetadataRoute.Sitemap = ORTER.map((ort) => ({
    url: `${SITE_URL}/omraden/${ort.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const landingRoutes: MetadataRoute.Sitemap = ALL_LANDING_PAGES.map((p) => ({
    url: `${SITE_URL}/landningssidor/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${SITE_URL}/guider/${g.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...ortRoutes, ...landingRoutes, ...guideRoutes];
}
