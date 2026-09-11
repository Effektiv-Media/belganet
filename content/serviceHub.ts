import type { Faq, Service, SubService } from "./types";
import { fitTitle } from "@/lib/seo";

/** Region wording used where a service hub has no single town. */
export const REGION_TEXT = "Blekinge, Kalmar & Växjö";

/**
 * The regional head term for a service hub. "Hemstäd/Flyttstäd/Kontorsstäd"
 * and "Fönsterputs" are the short forms; their "-ning" variants are the
 * higher-volume generic terms, so the hub leads with those.
 */
export function serviceHeadTerm(service: Service): string {
  return service.keyword.endsWith("städ") || service.slug === "fonsterputs"
    ? service.altKeyword
    : service.keyword;
}

export function serviceHubTitle(service: Service): string {
  const head = serviceHeadTerm(service);
  return fitTitle([
    `${head} i ${REGION_TEXT}`,
    `${head} i Blekinge & Kalmar län`,
    `${head} – pris & offert`,
    head,
  ]);
}

export function serviceHubDescription(service: Service): string {
  const head = serviceHeadTerm(service);
  const tail =
    service.rut === "yes"
      ? "RUT-avdrag direkt på fakturan."
      : service.rut === "partial"
        ? "RUT kan gälla vid privat renovering."
        : "Tydliga avtal och fast pris.";
  return `${head} i Ronneby, Karlskrona, Växjö, Kalmar och sex orter till i sydöstra Sverige. ${tail} Begär en kostnadsfri offert!`;
}

/**
 * Turns a town-templated string into region-neutral copy for the hub:
 * "i {area} och omnejd" → "i hela regionen", " i {area}" → "", any other
 * "{area}" → "regionen".
 */
export function regionalize(text: string): string {
  return text
    .replaceAll("{area} och omnejd", "hela regionen")
    .replaceAll(" i {area}", "")
    .replaceAll("{area}", "regionen")
    .replaceAll("{keywordLower}", "");
}

export function serviceHubSubServices(service: Service): SubService[] {
  return service.subServices.map((s) => ({ title: s.title, desc: regionalize(s.desc) }));
}

export function serviceHubFaqs(service: Service): Faq[] {
  return service.faqPool.map((f) => ({ q: regionalize(f.q), a: regionalize(f.a) }));
}
