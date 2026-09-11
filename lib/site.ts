/**
 * Single source of truth for the business's NAP (Name/Address/Phone) and
 * other site-wide constants. Pulled verbatim from the live original site.
 */

export const SITE_NAME = "Belganet Städ och Allservice";
export const SITE_URL = "https://www.belganetstadochallservice.se";

export const BUSINESS = {
  name: SITE_NAME,
  legalName: SITE_NAME,
  founder: "Angelica",
  phone: "+46 73 823 35 31",
  phoneHref: "tel:+46738233531",
  email: "angelica88lundberg@gmail.com",
  emailHref: "mailto:angelica88lundberg@gmail.com",
  // No street address is published anywhere on the current site. Emitting a
  // fabricated one would be worse for local SEO than omitting it — ask the
  // client for their registered business address (and org. number) to add
  // a full postalAddress + geo to the LocalBusiness JSON-LD.
  areaServedNames: ["Ronneby", "Karlskrona", "Växjö", "Kalmar"],
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
  // No social profiles are linked from the current site. Add Facebook/
  // Instagram/Google Business Profile URLs here (feeds `sameAs` in JSON-LD)
  // once the client shares them.
];

export const NAV_LINKS = [
  { href: "/#section-1", label: "Hem" },
  { href: "/#section-2", label: "Varför oss" },
  { href: "/#section-3", label: "Tjänster" },
  { href: "/#section-4", label: "Om oss" },
  { href: "/#section-5", label: "Kontakt" },
] as const;
