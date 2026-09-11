import type { Guide } from "@/content/types";

const PRICE_NOTE =
  "Typiska marknadspriser i Sverige 2026, sammanställda från offerttjänster och städföretags publicerade prislistor. Inte Belganets fasta priser – begär offert för exakt pris.";

const guide: Guide = {
  slug: "vad-kostar-hemstadning",
  title: "Vad kostar hemstädning? Priser per timme och tillfälle 2026",
  metaTitle: "Vad kostar hemstädning? Prisguide 2026",
  metaDescription:
    "Vad kostar hemstädning 2026? Se timpris, pris per tillfälle efter bostadsstorlek och frekvens, före och efter RUT-avdrag. Begär gärna en gratis offert.",
  keyword: "vad kostar hemstädning",
  published: "2026-09-11",
  updated: "2026-09-11",
  intro:
    "Hemstädning kostar i regel 450–650 kr i timmen före RUT-avdrag, vilket blir 225–325 kr efter avdraget. För en tvåa eller trea som städas varannan vecka landar de flesta på ungefär 500–950 kr per tillfälle. Här går vi igenom marknadspriserna per timme, per tillfälle och per månad, räknar på ett konkret exempel och visar vilka avgifter som kan tillkomma – så att du vet hur en rimlig offert ser ut.",
  sections: [
    {
      heading: "Vad kostar hemstädning per timme?",
      paragraphs: [
        "De flesta städföretag tar betalt per timme och städare. Timpriset före RUT ligger vanligen på 450–650 kr, och eftersom RUT-avdraget halverar arbetskostnaden betalar du 225–325 kr. Ju oftare du städar, desto lägre brukar timpriset vara – varje besök går snabbare när hemmet hålls i ordning.",
        "Tänk på att två städare i tre timmar blir sex debiterade timmar, även om de bara är hos dig i tre. Fråga därför om offerten anger tid per städare eller totalt."
      ],
      table: {
        caption: "Timpris för hemstädning efter upplägg",
        headers: ["Upplägg", "Före RUT", "Efter RUT"],
        rows: [
          ["Varje vecka", "450–550 kr/h", "225–275 kr/h"],
          ["Varannan vecka", "480–600 kr/h", "240–300 kr/h"],
          ["Var fjärde vecka", "520–650 kr/h", "260–325 kr/h"],
          ["Enstaka tillfälle", "500–650 kr/h", "250–325 kr/h"]
        ],
        note: PRICE_NOTE
      }
    },
    {
      heading: "Vad kostar hemstädning per tillfälle?",
      paragraphs: [
        "Tiden styrs främst av bostadens yta, antal badrum och hur mycket som står framme. Tabellen visar ungefärlig tid och pris per tillfälle vid städning varannan vecka, som är det vanligaste upplägget.",
        "En villa med två badrum, trappa och husdjur hamnar oftast i den övre delen av spannet, medan en lättstädad lägenhet med fria golv kan hamna i den nedre."
      ],
      table: {
        caption: "Pris per tillfälle efter bostadsstorlek, städning varannan vecka",
        headers: ["Bostad", "Ungefärlig tid", "Före RUT", "Efter RUT"],
        rows: [
          ["1:a, ca 30–40 m²", "1,5–2 h", "700–1 200 kr", "350–600 kr"],
          ["2:a, ca 50–60 m²", "2–2,5 h", "1 000–1 500 kr", "500–750 kr"],
          ["3:a, ca 70–80 m²", "2,5–3 h", "1 300–1 900 kr", "650–950 kr"],
          ["4:a, ca 90–100 m²", "3–4 h", "1 500–2 500 kr", "750–1 250 kr"],
          ["Villa, ca 120–150 m²", "4–5 h", "2 000–3 200 kr", "1 000–1 600 kr"]
        ],
        note: PRICE_NOTE
      }
    },
    {
      heading: "Vad kostar hemstädning per månad?",
      paragraphs: [
        "Frekvensen påverkar både timpriset och hur lång tid varje besök tar. Vid veckostädning räcker ofta kortare besök, medan månadsstädning kräver mer tid eftersom smutsen hunnit bygga på. Exemplet nedan gäller en trea på cirka 75 m².",
        "Varannan vecka är det vanligaste valet och ger ett jämnt städat hem till en rimlig månadskostnad. Veckostädning passar barnfamiljer och hem med husdjur, glesare städning den som själv håller undan i vardagen."
      ],
      table: {
        caption: "Månadskostnad för en trea på ca 75 m² efter frekvens",
        headers: ["Frekvens", "Tid per besök", "Per besök efter RUT", "Per månad efter RUT"],
        rows: [
          ["Varje vecka", "2–2,5 h", "500–800 kr", "2 200–3 500 kr"],
          ["Varannan vecka", "2,5–3 h", "650–950 kr", "1 400–2 100 kr"],
          ["Var fjärde vecka", "3–3,5 h", "800–1 150 kr", "850–1 250 kr"],
          ["Enstaka tillfälle", "3–4 h", "900–1 300 kr", "–"]
        ],
        note: PRICE_NOTE
      }
    },
    {
      heading: "Hur fungerar RUT-avdraget för hemstädning?",
      paragraphs: [
        "RUT-avdraget ger 50 procent av arbetskostnaden, och företaget som utför städningen drar av det direkt på fakturan. Du betalar alltså din halva, och företaget begär resten från Skatteverket – vi sköter den ansökan åt dig. Reglerna kan ändras, så kontrollera aktuella belopp på skatteverket.se.",
        "Räkneexempel: en trea städas tre timmar varannan vecka till 560 kr/h före RUT. Det blir 1 680 kr per tillfälle, varav du betalar 840 kr. Med 26 tillfällen på ett år betalar du 21 840 kr och använder lika mycket av ditt RUT-utrymme – långt under taket."
      ],
      list: {
        items: [
          "Avdraget är 50 procent av arbetskostnaden.",
          "Taket är 75 000 kr per person och år, gemensamt med rotavdraget (rot högst 50 000 kr).",
          "Material, utrustning och resekostnader ger inte rätt till avdrag.",
          "Köparen måste vara privatperson och arbetet utföras i eller nära bostaden.",
          "Företag och bostadsrättsföreningar kan inte få RUT."
        ]
      }
    },
    {
      heading: "Vad påverkar priset på hemstädning?",
      paragraphs: [
        "Två bostäder med samma yta kan få helt olika offerter. Det här är de faktorer som oftast förklarar skillnaden:"
      ],
      list: {
        items: [
          "Antal badrum och toaletter – ett extra badrum lägger ofta till 20–30 minuter per besök.",
          "Husdjur och barn – mer hår, smulor och fläckar tar längre tid.",
          "Hur mycket som står framme – fria golv och bänkytor går betydligt snabbare.",
          "Trappor och mattor – tar tid att dammsuga ordentligt.",
          "Frekvens – ju glesare städning, desto längre tid per besök.",
          "Ort – priserna är ofta något högre i storstäderna än på mindre orter."
        ]
      }
    },
    {
      heading: "Vilka extra kostnader kan tillkomma?",
      paragraphs: [
        "Timpriset i en annons är inte alltid hela kostnaden. Kontrollera om något av det här ingår eller debiteras separat innan du tackar ja:"
      ],
      list: {
        items: [
          "Startstädning – den första städningen tar ofta 1,5–2 gånger så lång tid som ett vanligt besök.",
          "Reseavgift – en separat avgift för resa ger inte rätt till RUT.",
          "Materialavgift – de flesta har med medel och utrustning, men vissa tar betalt för det.",
          "Tillval – fönsterputs samt ugn och kyl invändigt ingår sällan i ordinarie hemstädning.",
          "Avbokning – sen avbokning, ofta inom 24–48 timmar, kan debiteras fullt.",
          "Bindningstid och nyckelhantering – fråga om uppsägningstid och eventuell avgift för nyckelförvaring."
        ]
      }
    },
    {
      heading: "Hur får du rätt pris på hemstädning?",
      paragraphs: [
        "Det enklaste sättet att undvika överraskningar är en skriftlig offert där allt framgår. Vi på Belganet Städ och Allservice lämnar kostnadsfri offert, svarar inom 24 timmar och städar bland annat i Ronneby, Karlskrona, Växjö och Kalmar. Oavsett vem du anlitar lönar det sig att gå till väga så här:"
      ],
      list: {
        ordered: true,
        items: [
          "Ange bostadens yta, antal rum och badrum samt om ni har husdjur.",
          "Bestäm frekvens och vad som ska prioriteras vid varje besök.",
          "Be om pris både före och efter RUT, inklusive eventuella avgifter för resa, material och startstädning.",
          "Jämför två eller tre offerter på samma omfattning – inte bara timpriset.",
          "Kontrollera att företaget har ansvarsförsäkring och sköter RUT-avdraget på fakturan."
        ]
      }
    }
  ],
  faqs: [
    {
      q: "Vad kostar hemstädning utan RUT-avdrag?",
      a: "Utan RUT betalar du hela timpriset, vanligen 450–650 kr. Det gäller om du redan har använt hela ditt RUT-utrymme för året, eller om städningen beställs av ett företag eller en bostadsrättsförening. För en trea som städas varannan vecka innebär det ungefär 1 300–1 900 kr per tillfälle i stället för hälften."
    },
    {
      q: "Ingår städmaterial i priset?",
      a: "Hos de flesta städföretag ingår rengöringsmedel, dukar och moppar i timpriset, men vissa tar en separat materialavgift – och den ger inte RUT. Vi har med oss miljömärkta rengöringsmedel och den utrustning som behövs, om du inte hellre vill att vi använder dina egna produkter."
    },
    {
      q: "Hur mycket RUT kan jag få för hemstädning per år?",
      a: "Taket är 75 000 kr i avdrag per person och år, gemensamt med rotavdraget. Om du inte använder rot kan du alltså köpa tjänster för upp till 150 000 kr i arbetskostnad. Hemstädning varannan vecka i en tvåa eller trea använder i regel 13 000–25 000 kr av utrymmet."
    },
    {
      q: "Kan vi dela på RUT-avdraget i hushållet?",
      a: "Ja. Är ni två som betalar för städningen kan ni fördela arbetskostnaden mellan er på fakturan, och då har var och en sitt eget tak på 75 000 kr. Det är användbart om ni även köper andra rut- eller rottjänster under året, som flyttstädning eller en renovering."
    },
    {
      q: "Kan jag få hemstädning till fast pris?",
      a: "Ja, många företag erbjuder fast pris per tillfälle när omfattningen är bestämd, särskilt vid löpande städning. Priset bygger ändå på en uppskattad tid, så det kan justeras om bostaden eller dina önskemål förändras. Be om ett skriftligt pris där både belopp före och efter RUT framgår."
    },
    {
      q: "Vad händer om Skatteverket nekar RUT-avdraget?",
      a: "Då kan företaget fakturera dig den del som Skatteverket inte betalade ut. Vanliga orsaker är att köparen redan har nått taket eller att tjänsten inte räknas som hushållsnära. Kontrollera därför hur mycket utrymme du har kvar i Skatteverkets e-tjänst för rot och rut innan du bokar mycket städning."
    }
  ],
  relatedServiceSlugs: [
    "hemstad",
    "storstadning"
  ]
};

export default guide;
