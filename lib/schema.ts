import { BUSINESS, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./site";
import type { Faq } from "@/content/types";

/** Generic JSON-LD value — schema.org objects are just nested plain objects. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type JsonLd = Record<string, any>;

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

/** Reference to the single LocalBusiness node emitted by the root layout. */
export const businessRef = () => ({ "@id": BUSINESS_ID });

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
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
    publisher: { "@id": ORG_ID },
  };
}

/**
 * The one LocalBusiness node for the whole site (emitted once, by the root
 * layout). Pages reference it via `businessRef()` instead of re-emitting a
 * second node with the same @id, which would give Google conflicting data.
 *
 * TODO(client): no street address or organisationsnummer is published. We
 * only state the country rather than fabricate an address — add
 * streetAddress/postalCode/addressLocality + geo once the client shares it.
 */
export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    // schema.org has no dedicated cleaning-company subtype; plain
    // LocalBusiness is the correct, valid choice.
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.jpg`,
    logo: `${SITE_URL}/logo.jpg`,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: { "@type": "PostalAddress", addressCountry: "SE" },
    areaServed: BUSINESS.areaServedNames.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS.openingHoursSpec.dayOfWeek,
      opens: BUSINESS.openingHoursSpec.opens,
      closes: BUSINESS.openingHoursSpec.closes,
    },
    founder: { "@type": "Person", name: BUSINESS.founder },
    parentOrganization: { "@id": ORG_ID },
    ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS } : {}),
  };
}

interface ServiceSchemaArgs {
  serviceName: string;
  serviceType: string;
  description: string;
  /** Towns served; `lan` adds a containedInPlace AdministrativeArea. */
  areas: { name: string; lan?: string }[];
  url: string;
}

export function serviceSchema({
  serviceName,
  serviceType,
  description,
  areas,
  url,
}: ServiceSchemaArgs): JsonLd {
  const areaServed = areas.map((a) => ({
    "@type": "City",
    name: a.name,
    ...(a.lan ? { containedInPlace: { "@type": "AdministrativeArea", name: a.lan } } : {}),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType,
    description,
    url,
    provider: businessRef(),
    areaServed: areaServed.length === 1 ? areaServed[0] : areaServed,
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
  dateModified: string;
  /** Absolute URL of the article's OG image. */
  image: string;
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaArgs): JsonLd {
  const url = new URL(path, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    image,
    inLanguage: "sv-SE",
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: BUSINESS.founder,
      url: `${SITE_URL}/#section-4`,
    },
    publisher: { "@id": ORG_ID },
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
