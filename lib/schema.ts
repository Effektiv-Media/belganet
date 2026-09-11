import { BUSINESS, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./site";
import type { Faq } from "@/content/types";

/** Generic JSON-LD value — schema.org objects are just nested plain objects. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type JsonLd = Record<string, any>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
    },
    ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS } : {}),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "sv-SE",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/**
 * LocalBusiness / house-cleaning-service schema. No street address or
 * organisationsnummer is published anywhere on the current site — we
 * deliberately omit `address` and `geo` rather than fabricate them (see
 * "Open items" in the project plan) and instead describe coverage via
 * `areaServed`. Ask the client for the real business address to strengthen
 * this further.
 */
export function localBusinessSchema(opts?: { areaName?: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    // schema.org has no dedicated "cleaning company" subtype; plain
    // LocalBusiness is the correct, valid choice rather than forcing an
    // inaccurate subtype like HousePainter or MovingCompany.
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.jpg`,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    areaServed: (opts?.areaName ? [opts.areaName] : BUSINESS.areaServedNames).map(
      (name) => ({ "@type": "City", name }),
    ),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS.openingHoursSpec.dayOfWeek,
      opens: BUSINESS.openingHoursSpec.opens,
      closes: BUSINESS.openingHoursSpec.closes,
    },
    founder: { "@type": "Person", name: BUSINESS.founder },
    ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS } : {}),
  };
}

interface ServiceSchemaArgs {
  serviceName: string;
  serviceType: string;
  description: string;
  areaName: string;
  url: string;
}

export function serviceSchema({
  serviceName,
  serviceType,
  description,
  areaName,
  url,
}: ServiceSchemaArgs): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
    },
    areaServed: {
      "@type": "City",
      name: areaName,
    },
  };
}

export function faqPageSchema(faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbListSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

interface ArticleSchemaArgs {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: ArticleSchemaArgs): JsonLd {
  const url = new URL(path, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: BUSINESS.founder,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function itemListSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: new URL(item.path, SITE_URL).toString(),
    })),
  };
}
