import type { Ort } from "./types";

/**
 * The 10 towns Belganet serves. The original site only covered Ronneby,
 * Karlskrona, Växjö and Kalmar — we expand into 6 more towns across Blekinge
 * and Kalmar län with real, verified search volume.
 *
 * Note: an earlier draft of this list included "Blekinge" as a 10th entry,
 * but since 5 of the other 9 towns already sit inside Blekinge län, a
 * region-wide page would just cannibalize its own sibling town pages for
 * near-identical queries. Oskarshamn (Kalmar län) gives better geographic
 * spread and a genuinely distinct audience instead.
 */
export const ORTER: Ort[] = [
  {
    slug: "ronneby",
    name: "Ronneby",
    kommun: "Ronneby kommun",
    lan: "Blekinge län",
    districts: ["Kallinge", "Bräkne-Hoby"],
    nearby: [
      { name: "Karlskrona", km: 25 },
      { name: "Karlshamn", km: 20 },
      { name: "Sölvesborg", km: 35 },
    ],
    colorFact:
      "Ronneby är känt för sin brunnspark och sitt läge vid Ronnebyån, med Kallinge som en av kommunens största tätorter.",
  },
  {
    slug: "karlskrona",
    name: "Karlskrona",
    kommun: "Karlskrona kommun",
    lan: "Blekinge län",
    districts: ["Trossö", "Lyckeby", "Rödeby", "Nättraby"],
    nearby: [
      { name: "Ronneby", km: 25 },
      { name: "Karlshamn", km: 45 },
      { name: "Emmaboda", km: 55 },
    ],
    colorFact:
      "Karlskrona är Blekinges residensstad och örlogsstad med ett örlogsstadslandskap som är upptaget på UNESCO:s världsarvslista, uppdelat på flera öar med Trossö som centrum.",
  },
  {
    slug: "vaxjo",
    name: "Växjö",
    kommun: "Växjö kommun",
    lan: "Kronobergs län",
    districts: ["Teleborg", "Araby", "Hovshaga", "Dalbo"],
    nearby: [
      { name: "Kalmar", km: 95 },
      { name: "Emmaboda", km: 65 },
      { name: "Nybro", km: 75 },
    ],
    colorFact:
      "Växjö är residensstad i Kronobergs län och kallas ofta \"Europas grönaste stad\" tack vare sitt tidiga miljöarbete och läge mellan sjöarna Trummen och Växjösjön.",
  },
  {
    slug: "kalmar",
    name: "Kalmar",
    kommun: "Kalmar kommun",
    lan: "Kalmar län",
    districts: ["Berga", "Norrliden", "Rinkabyholm", "Lindsdal"],
    nearby: [
      { name: "Nybro", km: 30 },
      { name: "Oskarshamn", km: 90 },
      { name: "Emmaboda", km: 45 },
    ],
    colorFact:
      "Kalmar är residensstad i Kalmar län med Kalmar slott och Ölandsbron som landmärken, och en av landets äldsta städer.",
  },
  {
    slug: "karlshamn",
    name: "Karlshamn",
    kommun: "Karlshamns kommun",
    lan: "Blekinge län",
    districts: ["Asarum", "Mörrum", "Svängsta"],
    nearby: [
      { name: "Ronneby", km: 20 },
      { name: "Sölvesborg", km: 20 },
      { name: "Karlskrona", km: 45 },
    ],
    colorFact:
      "Karlshamn är en hamnstad vid Östersjön med Mörrum, känt för sitt laxfiske i Mörrumsån, som en av kommunens tätorter.",
  },
  {
    slug: "solvesborg",
    name: "Sölvesborg",
    kommun: "Sölvesborgs kommun",
    lan: "Blekinge län",
    districts: ["Mjällby", "Hällevik"],
    nearby: [
      { name: "Karlshamn", km: 20 },
      { name: "Karlskrona", km: 55 },
      { name: "Olofström", km: 25 },
    ],
    colorFact:
      "Sölvesborg är en kustnära stad vid Blekinges västra gräns mot Skåne, med Sölvesborgsviken och den medeltida stadskärnan som kännetecken.",
  },
  {
    slug: "olofstrom",
    name: "Olofström",
    kommun: "Olofströms kommun",
    lan: "Blekinge län",
    districts: ["Jämshög", "Vilshult"],
    nearby: [
      { name: "Karlshamn", km: 25 },
      { name: "Sölvesborg", km: 25 },
      { name: "Karlskrona", km: 60 },
    ],
    colorFact:
      "Olofström är en av Blekinges inlandsorter och har historiskt vuxit fram kring bilindustrin, med Jämshög som angränsande tätort.",
  },
  {
    slug: "nybro",
    name: "Nybro",
    kommun: "Nybro kommun",
    lan: "Kalmar län",
    districts: ["Örsjö", "Alsterbro"],
    nearby: [
      { name: "Kalmar", km: 30 },
      { name: "Emmaboda", km: 25 },
      { name: "Växjö", km: 75 },
    ],
    colorFact:
      "Nybro ligger i hjärtat av Glasriket och är historiskt känt för sin glasindustri, med flera äldre glasbruk i trakten.",
  },
  {
    slug: "emmaboda",
    name: "Emmaboda",
    kommun: "Emmaboda kommun",
    lan: "Kalmar län",
    districts: ["Broakulla", "Långasjö"],
    nearby: [
      { name: "Nybro", km: 25 },
      { name: "Kalmar", km: 45 },
      { name: "Växjö", km: 65 },
    ],
    colorFact:
      "Emmaboda är en järnvägsknut i Glasriket, på gränsen mellan Kalmar och Kronobergs län, med ett flertal äldre glasbruksorter i närheten.",
  },
  {
    slug: "oskarshamn",
    name: "Oskarshamn",
    kommun: "Oskarshamns kommun",
    lan: "Kalmar län",
    districts: ["Kristdala", "Figeholm"],
    nearby: [
      { name: "Kalmar", km: 90 },
      { name: "Nybro", km: 60 },
      { name: "Emmaboda", km: 75 },
    ],
    colorFact:
      "Oskarshamn är en hamnstad vid Kalmarsund med kärnkraftverket OKG och en långvarig historia som verkstads- och industristad.",
  },
];

export const ORT_BY_SLUG: Record<string, Ort> = Object.fromEntries(
  ORTER.map((o) => [o.slug, o]),
);
