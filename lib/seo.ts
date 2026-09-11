import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/landningssidor/hemstad-ronneby". */
  path: string;
}

/**
 * Builds a consistent, complete Metadata object for a page: absolute
 * self-referencing canonical, full OpenGraph + Twitter card. The original
 * site emitted neither (no canonical tags, no og:image) — every page on this
 * site gets both by construction.
 *
 * Note: per-route `opengraph-image.tsx` files (next/og) are picked up by
 * Next.js automatically and merged into the resolved metadata, so we don't
 * set `openGraph.images` / `twitter.images` here to avoid duplicating them.
 */
export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "sv_SE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
