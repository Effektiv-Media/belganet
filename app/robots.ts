import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** The original site's /robots.txt returned a 404. This fixes that. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
