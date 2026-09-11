import type { Metadata } from "next";
import { SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "./site";

/** Suffix the root layout's title template appends to every child page. */
export const TITLE_SUFFIX = ` | ${SITE_SHORT_NAME}`;
/** Google truncates around 580px ≈ 60 characters. */
export const MAX_TITLE_LENGTH = 60;

/**
 * Returns the first candidate whose final <title> (candidate + suffix) fits
 * in MAX_TITLE_LENGTH. Candidates should go from most to least descriptive;
 * the last one is returned even if it is too long, so always end the list
 * with the shortest sensible form.
 */
export function fitTitle(candidates: string[]): string {
  for (const c of candidates) {
    if (c.length + TITLE_SUFFIX.length <= MAX_TITLE_LENGTH) return c;
  }
  return candidates[candidates.length - 1]!;
}

interface BuildMetadataArgs {
  /** Title WITHOUT brand — the root layout template appends TITLE_SUFFIX. */
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/tjanster/hemstad/ronneby". */
  path: string;
  /** Emit `noindex, follow` (page stays usable and passes link equity). */
  noindex?: boolean;
  /** Set to "article" for guides, with ISO dates. */
  article?: { publishedTime: string; modifiedTime: string };
  /** Use the title verbatim, bypassing the template (homepage only). */
  absoluteTitle?: boolean;
}

/**
 * Builds a consistent, complete Metadata object for a page: absolute
 * self-referencing canonical, full OpenGraph + Twitter card, optional
 * noindex. Per-route `opengraph-image.tsx` files are merged in by Next.js
 * automatically, so images are not set here.
 */
export function buildMetadata({
  title,
  description,
  path,
  noindex,
  article,
  absoluteTitle,
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const socialTitle = absoluteTitle ? title : `${title}${TITLE_SUFFIX}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "sv_SE",
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
          }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
