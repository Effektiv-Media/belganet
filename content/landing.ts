import { SERVICES, SERVICE_BY_SLUG } from "./services";
import { ORTER, ORT_BY_SLUG } from "./orter";
import type { LandingPageData } from "./types";
import originalLandingData from "./original/all-landing.json";

type OriginalLanding = {
  slug: string;
  title: string;
  keyword: string;
  area: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheading: string;
  usps: { title: string; desc: string }[];
  services: { title: string; desc: string }[];
  about: string;
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaSubtext: string;
};

const ORIGINAL_LANDING = originalLandingData as Record<string, OriginalLanding>;

/** Maps the original site's slugs (e.g. "stadforetag-ronneby") to our new
 * canonical slugs (e.g. "stadfirma-ronneby") so we can reuse the client's
 * already-approved copy verbatim for those 20 combinations. */
const ORIGINAL_SERVICE_SLUG_MAP: Record<string, string> = {
  stadforetag: "stadfirma",
  hemstad: "hemstad",
  flyttstad: "flyttstad",
  kontorsstad: "kontorsstad",
  fonsterputs: "fonsterputs",
};

function originalSlugFor(serviceSlug: string, ortSlug: string): string | null {
  const legacyService = Object.entries(ORIGINAL_SERVICE_SLUG_MAP).find(
    ([, v]) => v === serviceSlug,
  )?.[0];
  if (!legacyService) return null;
  const candidate = `${legacyService}-${ortSlug}`;
  return ORIGINAL_LANDING[candidate] ? candidate : null;
}

/** Universal, non-service-specific USPs recovered from the original site —
 * shown on every landing page (with {area} substituted), matching the
 * client-approved homepage/landing-page copy. */
const UNIVERSAL_USPS_TEMPLATE = [
  {
    title: "Erfaren & pålitlig personal",
    desc: "Alla våra städare är noggrant utvalda och erfarna. Vi levererar alltid hög kvalitet i {area}.",
  },
  {
    title: "Miljögodkänt",
    desc: "Vi använder enbart miljögodkända rengöringsmedel som är skonsamma mot hem och miljö.",
  },
  {
    title: "RUT-avdrag möjligt",
    desc: "Privatpersoner kan använda RUT-avdrag och betala halva priset. Vi hanterar ansökan.",
  },
  {
    title: "Flexibla tider",
    desc: "Vi anpassar oss efter ditt schema och dina behov i {area}. Du bestämmer när vi kommer.",
  },
  {
    title: "Kostnadsfri offert",
    desc: "Kontakta oss och få en kostnadsfri offert anpassad för din situation i {area}.",
  },
  {
    title: "Trygg & försäkrad",
    desc: "Vi är fullt försäkrade och du kan alltid lita på att vi tar hand om din bostad eller lokal.",
  },
];

function fill(template: string, area: string, keywordLower: string): string {
  return template.replaceAll("{area}", area).replaceAll("{keywordLower}", keywordLower);
}

/** Simple deterministic string hash so FAQ/rotation selection is stable
 * across builds without needing a random seed file. */
function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** Picks `count` items from `pool`, starting at a deterministic offset
 * derived from `seed`, wrapping around — so different (service, ort) pairs
 * surface different subsets of the same FAQ pool. */
function pickRotated<T>(pool: T[], count: number, seed: number): T[] {
  const offset = seed % pool.length;
  const picked: T[] = [];
  for (let i = 0; i < count; i++) {
    picked.push(pool[(offset + i) % pool.length]!);
  }
  return picked;
}

export function buildLandingPage(
  serviceSlug: string,
  ortSlug: string,
): LandingPageData | null {
  const service = SERVICE_BY_SLUG[serviceSlug];
  const ort = ORT_BY_SLUG[ortSlug];
  if (!service || !ort) return null;

  const slug = `${serviceSlug}-${ortSlug}`;
  const area = ort.name;
  const ortIndex = ORTER.findIndex((o) => o.slug === ortSlug);

  // Reuse the client-approved original copy verbatim where it exists.
  const legacySlug = originalSlugFor(serviceSlug, ortSlug);
  if (legacySlug) {
    const original = ORIGINAL_LANDING[legacySlug]!;
    const nearby = ort.nearby.map((n) => ({
      ...n,
      slug: ORTER.find((o) => o.name === n.name)?.slug ?? "",
    }));
    return {
      slug,
      serviceSlug,
      ortSlug,
      keyword: original.keyword,
      area: original.area,
      title: original.title,
      metaTitle: original.metaTitle,
      metaDescription: original.metaDescription,
      h1: original.h1,
      heroSubheading: original.heroSubheading,
      intro: fill(service.shortDesc, area, service.keywordLower),
      usps: original.usps,
      services: original.services,
      about: original.about,
      localParagraph: ort.colorFact,
      faqs: original.faqs,
      ctaHeading: original.ctaHeading,
      ctaSubtext: original.ctaSubtext,
      nearby,
    };
  }

  // Otherwise compose fresh copy from the service + ort building blocks.
  const heroSubheading = fill(
    service.heroTemplates[ortIndex % service.heroTemplates.length]!,
    area,
    service.keywordLower,
  );
  const about = fill(
    service.aboutTemplates[(ortIndex + 1) % service.aboutTemplates.length]!,
    area,
    service.keywordLower,
  );
  const ctaSubtext = fill(
    service.ctaTemplates[(ortIndex + 2) % service.ctaTemplates.length]!,
    area,
    service.keywordLower,
  );
  const usps = UNIVERSAL_USPS_TEMPLATE.map((u) => ({
    title: u.title,
    desc: fill(u.desc, area, service.keywordLower),
  }));
  const services = service.subServices.map((s) => ({
    title: s.title,
    desc: fill(s.desc, area, service.keywordLower),
  }));
  const faqs = pickRotated(service.faqPool, 6, hash(slug)).map((f) => ({
    q: fill(f.q, area, service.keywordLower),
    a: fill(f.a, area, service.keywordLower),
  }));

  const nearby = ort.nearby.map((n) => ({
    ...n,
    slug: ORTER.find((o) => o.name === n.name)?.slug ?? "",
  }));

  return {
    slug,
    serviceSlug,
    ortSlug,
    keyword: service.keyword,
    area,
    title: `${service.keyword} i ${area}`,
    metaTitle: `${service.keyword} i ${area} – Pris & offert | Belganet Städ`,
    metaDescription: `Letar du efter ${service.keywordLower} i ${area}? Belganet Städ och Allservice erbjuder professionell ${service.keywordLower} med hög kvalitet. RUT-avdrag tillgängligt. Begär offert idag!`,
    h1: `${service.keyword} i ${area}`,
    heroSubheading,
    intro: fill(service.shortDesc, area, service.keywordLower),
    usps,
    services,
    about,
    localParagraph: ort.colorFact,
    faqs,
    ctaHeading: `Boka ${service.keywordLower} i ${area} idag`,
    ctaSubtext,
    nearby,
  };
}

export interface LandingPageRef {
  slug: string;
  serviceSlug: string;
  ortSlug: string;
  keyword: string;
  area: string;
}

/** All (service × ort) combinations — the full page set for /landningssidor. */
export const ALL_LANDING_PAGES: LandingPageRef[] = SERVICES.flatMap((service) =>
  ORTER.map((ort) => ({
    slug: `${service.slug}-${ort.slug}`,
    serviceSlug: service.slug,
    ortSlug: ort.slug,
    keyword: service.keyword,
    area: ort.name,
  })),
);

export function getLandingPageBySlug(slug: string): LandingPageData | null {
  const ref = ALL_LANDING_PAGES.find((p) => p.slug === slug);
  if (!ref) return null;
  return buildLandingPage(ref.serviceSlug, ref.ortSlug);
}
