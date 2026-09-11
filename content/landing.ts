import { SERVICES, SERVICE_BY_SLUG } from "./services";
import { ORTER, ORT_BY_SLUG } from "./orter";
import { isLandingPageIndexed } from "./indexing";
import type { LandingPageData, Service, Usp } from "./types";
import { fitTitle } from "@/lib/seo";
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
 * canonical service slugs (e.g. "stadfirma") so we can reuse the client's
 * already-approved body copy verbatim for those 20 combinations. */
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
 * shown on every landing page (with {area} substituted). The RUT item is
 * swapped per service, since B2B services and dödsbo cannot claim RUT. */
const UNIVERSAL_USPS_TEMPLATE: Usp[] = [
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

/** Replacement for the RUT USP on services where RUT does not (always) apply. */
const NON_RUT_USP: Record<Service["rut"], Usp | null> = {
  yes: null,
  partial: {
    title: "RUT i vissa fall",
    desc: "Vid privat renovering av din egen bostad kan RUT-avdrag ofta användas. Vi hjälper dig kontrollera vad som gäller.",
  },
  no: {
    title: "Tydligt pris & avtal",
    desc: "Du får en tydlig offert och, vid löpande uppdrag, ett avtal med fast pris – inga överraskningar på fakturan.",
  },
};

const isRutUsp = (u: Usp) => /RUT/i.test(u.title);

function adaptUsps(usps: Usp[], service: Service): Usp[] {
  const replacement = NON_RUT_USP[service.rut];
  if (!replacement) return usps;
  return usps.map((u) => (isRutUsp(u) ? replacement : u));
}

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

/** Title without brand (the root template appends " | Belganet Städ"),
 * fitted to ~60 chars. Both keyword variants (e.g. flyttstäd +
 * flyttstädning) go in when they fit. */
function landingMetaTitle(service: Service, area: string): string {
  const base = `${service.keyword} i ${area}`;
  const alt = service.altKeyword.toLowerCase();
  if (service.slug === "stadfirma") {
    return fitTitle([
      `${base} – hemstäd, flyttstäd & fönsterputs`,
      `${base} – städning med RUT-avdrag`,
      `${base} – pris & offert`,
      base,
    ]);
  }
  if (service.rut === "yes") {
    return fitTitle([
      `${base} – ${alt} med RUT-avdrag`,
      `${base} – ${alt} med RUT`,
      `${base} – pris & offert med RUT`,
      `${base} – pris & offert`,
      base,
    ]);
  }
  return fitTitle([`${base} – ${alt}`, `${base} – pris & offert`, base]);
}

function landingMetaDescription(service: Service, ortIndex: number): string {
  const ort = ORTER[ortIndex]!;
  const template = service.metaTemplates[ortIndex % service.metaTemplates.length]!;
  return template
    .replaceAll("{area}", ort.name)
    .replaceAll("{district}", ort.districts[0] ?? ort.name)
    .replaceAll("{altLower}", service.altKeyword.toLowerCase());
}

/** "Ditt lokala städföretag i X" used to appear on all 13 pages per ort —
 * vary it by service so sibling pages don't share an identical H2. */
function aboutHeadingFor(service: Service, area: string): string {
  switch (service.slug) {
    case "stadfirma":
      return `Din lokala städfirma i ${area}`;
    case "tradgardsskotsel":
      return `Din lokala trädgårdshjälp i ${area}`;
    case "kontorsstad":
    case "trappstadning":
    case "fastighetsskotsel":
      return `En lokal samarbetspartner i ${area}`;
    case "dodsbostadning":
      return `Lyhörd hjälp i ${area}`;
    default:
      return `${service.altKeyword} i ${area} – lokalt och personligt`;
  }
}

function nearbyFor(ortSlug: string) {
  const ort = ORT_BY_SLUG[ortSlug]!;
  return ort.nearby.map((n) => ({
    ...n,
    slug: ORTER.find((o) => o.name === n.name)?.slug ?? "",
  }));
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
  const keywordTitle = `${service.keyword} i ${area}`;

  const shared = {
    slug,
    serviceSlug,
    ortSlug,
    area,
    altKeyword: service.altKeyword,
    rut: service.rut,
    indexed: isLandingPageIndexed(serviceSlug, ortSlug),
    // The original site targeted "städföretag"; the URL moved to the
    // higher-volume "städfirma", so title/H1/meta follow (body copy keeps
    // "städföretag" as a natural secondary variant).
    title: keywordTitle,
    h1: keywordTitle,
    metaTitle: landingMetaTitle(service, area),
    metaDescription: landingMetaDescription(service, ortIndex),
    servicesHeading: `${service.altKeyword} i ${area} – vad ingår?`,
    aboutHeading: aboutHeadingFor(service, area),
    intro: fill(service.shortDesc, area, service.keywordLower),
    localParagraph: ort.colorFact,
    nearby: nearbyFor(ortSlug),
  };

  // Reuse the client-approved original body copy verbatim where it exists.
  const legacySlug = originalSlugFor(serviceSlug, ortSlug);
  if (legacySlug) {
    const original = ORIGINAL_LANDING[legacySlug]!;
    return {
      ...shared,
      keyword: service.keyword,
      heroSubheading: original.heroSubheading,
      usps: adaptUsps(original.usps, service),
      services: original.services,
      about: original.about,
      faqs: original.faqs,
      ctaHeading: original.ctaHeading,
      ctaSubtext: original.ctaSubtext,
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
  const usps = adaptUsps(
    UNIVERSAL_USPS_TEMPLATE.map((u) => ({
      title: u.title,
      desc: fill(u.desc, area, service.keywordLower),
    })),
    service,
  );
  const services = service.subServices.map((s) => ({
    title: s.title,
    desc: fill(s.desc, area, service.keywordLower),
  }));
  const faqs = pickRotated(service.faqPool, 6, hash(slug)).map((f) => ({
    q: fill(f.q, area, service.keywordLower),
    a: fill(f.a, area, service.keywordLower),
  }));

  return {
    ...shared,
    keyword: service.keyword,
    heroSubheading,
    usps,
    services,
    about,
    faqs,
    ctaHeading: `Boka ${service.keywordLower} i ${area} idag`,
    ctaSubtext,
  };
}

export interface LandingPageRef {
  slug: string;
  serviceSlug: string;
  ortSlug: string;
  keyword: string;
  area: string;
  indexed: boolean;
}

/** All (service × ort) combinations — the full page set under /tjanster. */
export const ALL_LANDING_PAGES: LandingPageRef[] = SERVICES.flatMap((service) =>
  ORTER.map((ort) => ({
    slug: `${service.slug}-${ort.slug}`,
    serviceSlug: service.slug,
    ortSlug: ort.slug,
    keyword: service.keyword,
    area: ort.name,
    indexed: isLandingPageIndexed(service.slug, ort.slug),
  })),
);

export function getLandingPage(serviceSlug: string, ortSlug: string): LandingPageData | null {
  return buildLandingPage(serviceSlug, ortSlug);
}
