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
  area: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheading: string;
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
