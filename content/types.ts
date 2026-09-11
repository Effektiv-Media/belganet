import type { LucideIcon } from "lucide-react";

export interface Usp {
  title: string;
  desc: string;
}

export interface SubService {
  title: string;
  desc: string;
}

export interface Faq {
  q: string;
  a: string;
}

/**
 * Whether private customers can use RUT-avdrag for a service.
 * - "yes": household service in the buyer's own home (hemstäd, flyttstäd…)
 * - "partial": depends on who orders and where (e.g. byggstädning after a
 *   private renovation vs. a new build for a company)
 * - "no": B2B/association services (kontorsstäd, trappstädning,
 *   fastighetsskötsel) and dödsbo, which cannot claim RUT for work after
 *   the death.
 */
export type RutEligibility = "yes" | "partial" | "no";

/** One of the 12 service categories the company offers. */
export interface Service {
  slug: string;
  /** Display keyword, e.g. "Hemstäd" */
  keyword: string;
  /** Lowercased keyword for mid-sentence use, e.g. "hemstäd" */
  keywordLower: string;
  /** Alternate keyword phrasing with real search volume, e.g. "Hemstädning" */
  altKeyword: string;
  icon: LucideIcon;
  /** Short 1-sentence description used on hub/index pages and cards. */
  shortDesc: string;
  /** 6 sub-offerings shown in the "vad ingår" grid on the landing page. */
  subServices: SubService[];
  /** Pool of FAQs (8-10) this service can draw from; 6 are picked per ort. */
  faqPool: Faq[];
  /** 4 hero-subheading templates rotated by ort index. Use {area} placeholder. */
  heroTemplates: string[];
  /** 4 "about" paragraph templates rotated by ort index. Use {area} placeholder. */
  aboutTemplates: string[];
  /** 4 CTA subtext templates. Use {area} placeholder. */
  ctaTemplates: string[];
  /** Whether RUT-avdrag can be claimed — drives USPs, meta copy and badges. */
  rut: RutEligibility;
  /**
   * 3 meta-description templates, rotated per ort. Placeholders: {area},
   * {district} (first district of the ort) and {altLower} (altKeyword,
   * lowercased). Keep the filled result at 140–158 characters.
   */
  metaTemplates: string[];
  /** Intro paragraph for the /tjanster/[service] hub. No placeholders. */
  hubIntro: string;
}

export interface GuideTable {
  caption: string;
  headers: string[];
  rows: string[][];
  /** Short source/assumption note shown under the table. */
  note?: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet or numbered list rendered after the paragraphs. */
  list?: { ordered?: boolean; items: string[] };
  /** Optional table rendered after the list (price ranges, checklists…). */
  table?: GuideTable;
}

export interface Guide {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> text WITHOUT brand — the root template appends " | Belganet Städ". Max 44 chars. */
  metaTitle: string;
  /** 140–158 characters. */
  metaDescription: string;
  /** Primary keyword this guide targets (real search volume). */
  keyword: string;
  /** ISO date the guide was first published. */
  published: string;
  /** ISO date of the last substantive update (drives sitemap lastmod + Article dateModified). */
  updated: string;
  intro: string;
  sections: GuideSection[];
  faqs: Faq[];
  /** Service slugs this guide should link to (drives internal linking). */
  relatedServiceSlugs: string[];
}

/** One of the towns/areas the company serves. */
export interface Ort {
  slug: string;
  name: string;
  /** Grammatically correct "i {name}" form for towns needing "i Växjö" etc. */
  kommun: string;
  lan: string;
  /** 1-2 well-known real districts/areas within or near the town. */
  districts: string[];
  /** 2-3 nearby towns with approximate driving distance for "vi täcker även" blocks. */
  nearby: { name: string; km: number }[];
  /** A short factual/character sentence about the place (landmark, industry, etc). */
  colorFact: string;
}

export interface LandingPageData {
  slug: string;
  serviceSlug: string;
  ortSlug: string;
  keyword: string;
  /** Secondary keyword variant, e.g. "Flyttstädning" next to "Flyttstäd". */
  altKeyword: string;
  area: string;
  rut: RutEligibility;
  /** False → served `noindex, follow` and left out of the sitemap. */
  indexed: boolean;
  title: string;
  /** Without brand; the root title template appends it. */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheading: string;
  servicesHeading: string;
  aboutHeading: string;
  intro: string;
  usps: Usp[];
  services: SubService[];
  about: string;
  localParagraph: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaSubtext: string;
  nearby: { name: string; km: number; slug: string }[];
}
