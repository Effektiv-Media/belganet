/**
 * Single source of truth for the business's NAP (Name/Address/Phone) and
 * other site-wide constants. Pulled verbatim from the live original site.
 */
import { ORTER } from "@/content/orter";

export const SITE_NAME = "Belganet Städ och Allservice";
/** Short brand used in <title> suffixes to keep titles under ~60 chars. */
export const SITE_SHORT_NAME = "Belganet Städ";
export const SITE_URL = "https://www.belganetstadochallservice.se";

/**
 * Date of the last substantive content update across the service/ort pages.
 * Drives sitemap `lastmod`. Bump it when page copy actually changes — never
 * set it to "now", or Google learns to ignore lastmod entirely.
 */
export const CONTENT_UPDATED = "2026-09-11";

/** Every town the business serves — the same 10 the site has pages for. */
export const AREA_SERVED_NAMES: string[] = ORTER.map((o) => o.name);

export const BUSINESS = {
  name: SITE_NAME,
  legalName: SITE_NAME,
  founder: "Angelica",
  phone: "+46 73 823 35 31",
  phoneHref: "tel:+46738233531",
  // TODO(client): a domain address (e.g. info@belganetstadochallservice.se)
  // is a stronger trust signal than Gmail — swap once it exists.
  email: "angelica88lundberg@gmail.com",
  emailHref: "mailto:angelica88lundberg@gmail.com",
  // TODO(client): no street address or organisationsnummer is published
  // anywhere. Emitting a fabricated one would be worse for local SEO than
  // omitting it — add a full postalAddress + geo to the LocalBusiness
  // JSON-LD once the client shares their registered address.
  areaServedNames: AREA_SERVED_NAMES,
  /** Human-readable coverage, used in contact boxes and footers. */
  areaServedText: "Blekinge, Kalmar län och Växjö",
  openingHours: "Mån–Fre 07:00–18:00",
  openingHoursSpec: {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
  priceRange: "$$",
} as const;

export const SOCIAL_LINKS: string[] = [
  // TODO(client): no social profiles are linked from the current site. Add
  // Facebook/Instagram/Google Business Profile URLs here — they feed
  // `sameAs` in JSON-LD and the footer icons render only when present.
];

/** Crawlable primary navigation, shared by every header. */
export const NAV_LINKS = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/omraden", label: "Områden" },
  { href: "/guider", label: "Guider" },
  { href: "/#section-4", label: "Om oss" },
  { href: "/#section-5", label: "Kontakt" },
] as const;
