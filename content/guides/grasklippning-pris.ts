import type { Guide } from "@/content/types";

const MARKET_NOTE =
  "Typiska marknadspriser i Sverige 2026, sammanställda från offerttjänster och företags publicerade prislistor. Inte Belganets fasta priser – begär offert för exakt pris.";

const guide: Guide = {
  slug: "grasklippning-pris",
  title: "Gräsklippning pris 2026 – vad kostar det att få gräset klippt?",
  metaTitle: "Gräsklippning pris 2026 – per gång & säsong",
  metaDescription:
    "Gräsklippning pris 2026: se vad det kostar per gång, per timme och per säsong för olika tomter – före och efter RUT. Räkna på din gräsmatta och begär offert.",
  keyword: "gräsklippning pris",
  published: "2026-09-11",
  updated: "2026-09-11",
  intro:
    "Gräsklippning kostar oftast 300–1 000 kronor per tillfälle efter RUT-avdrag för en vanlig villatomt, beroende på gräsmattans storlek, hur lättklippt den är och om kanterna ska trimmas. Räknat per timme ligger priset på ungefär 225–375 kronor efter avdrag. Här går vi igenom vad gräsklippning kostar 2026 för olika tomter, vad en hel säsong går på och hur du kan hålla nere priset.",
  sections: [
    {
      heading: "Vad kostar gräsklippning per gång?",
      paragraphs: [
        "De flesta trädgårdsföretag räknar på tid, men ger ofta ett fast pris per tillfälle när de väl sett tomten. Ett riktmärke är att en van trädgårdsarbetare klipper 300–500 kvadratmeter öppen gräsmatta i timmen med en stor gåklippare – mer med åkgräsklippare. Kanttrimning runt rabatter, staket och husgrund tar ofta en halvtimme till.",
        "Till klippningen kommer ofta en minimidebitering på en timme eller en framkörningsavgift, vilket gör att små gräsmattor blir dyrare per kvadratmeter än stora. Priserna i tabellen gäller en gräsmatta som klipps regelbundet och där klippet lämnas kvar."
      ],
      table: {
        caption: "Gräsklippning pris per tillfälle 2026",
        headers: ["Gräsmatta", "Ungefärlig tid", "Före RUT", "Efter RUT"],
        rows: [
          ["Under 300 m² (radhus)", "0,5–1 h", "500–900 kr", "250–450 kr"],
          ["300–600 m² (villa)", "1–1,5 h", "600–1 300 kr", "300–650 kr"],
          ["600–1 000 m²", "1,5–2,5 h", "900–1 900 kr", "450–950 kr"],
          ["1 000–2 000 m²", "2–4 h", "1 200–3 000 kr", "600–1 500 kr"],
          ["Kanttrimning, tillägg", "0,25–0,5 h", "150–400 kr", "75–200 kr"],
          ["Bortforsling av gräsklipp", "–", "150–600 kr", "Ingen RUT"]
        ],
        note: MARKET_NOTE
      }
    },
    {
      heading: "Vad kostar gräsklippning per timme?",
      paragraphs: [
        "Timpriset för trädgårdsarbete ligger 2026 oftast på 450–750 kr före RUT, alltså cirka 225–375 kr efter avdrag. Lägre timpriser förekommer, men då ingår ibland inte klippare och trimmer – kunden står själv för maskinerna. Högre priser gäller ofta när företaget har med sig åkgräsklippare eller kraftigare utrustning för stora ytor och slänter.",
        "Fråga alltid om priset gäller per påbörjad timme eller per halvtimme, om framkörning tillkommer och om utrustning och bränsle ingår. Två offerter med samma timpris kan skilja flera hundra kronor per besök beroende på just de villkoren."
      ]
    },
    {
      heading: "Vad kostar gräsklippning en hel säsong?",
      paragraphs: [
        "I södra Sverige växer gräset från april till oktober, och i Blekinge och längs Kalmarkusten ger den milda hösten ofta en lång säsong. Under maj och juni växer gräset snabbast och kan behöva klippas varje vecka, medan det under torra perioder i juli och augusti ofta räcker med varannan vecka. Räkna med ungefär 18–22 klippningar per år om du klipper varje vecka under högsäsong, eller 12–14 om du klipper varannan vecka.",
        "Tabellen visar vad en säsong kan kosta för en villatomt med cirka 500 kvadratmeter gräsmatta, med 300–650 kr per tillfälle efter RUT. Abonnemang för hela säsongen ger ofta 10–20 procent lägre pris per klippning än enstaka bokningar, eftersom företaget kan planera sina rutter. Kontrollera om avtalet gäller ett fast antal besök eller klippning efter behov – det senare anpassar sig bättre till en torr sommar."
      ],
      table: {
        caption: "Gräsklippning säsongspris för 500 m² gräsmatta",
        headers: ["Upplägg", "Antal klippningar", "Säsong efter RUT", "Per månad, april–oktober"],
        rows: [
          ["Varje vecka i högsäsong, annars varannan", "18–22", "5 500–14 000 kr", "800–2 000 kr"],
          ["Varannan vecka hela säsongen", "12–14", "3 500–9 000 kr", "500–1 300 kr"],
          ["Enstaka klippningar vid behov", "5–8", "1 500–5 000 kr", "–"]
        ],
        note: MARKET_NOTE
      }
    },
    {
      heading: "Räkneexempel: villatomt med 500 m² gräsmatta",
      paragraphs: [
        "Så här kan ett besök räknas för en villatomt med 500 kvadratmeter gräsmatta, några rabatter och ett staket längs ena sidan. Företaget tar 600 kr i timmen före RUT, och klippet lämnas kvar på gräsmattan som gödsel:"
      ],
      list: {
        ordered: true,
        items: [
          "Klippning: 1 timme × 600 kr = 600 kr",
          "Kanttrimning runt rabatter och staket: 0,5 timme × 600 kr = 300 kr",
          "Arbetskostnad före RUT: 900 kr",
          "RUT-avdrag 50 procent: –450 kr",
          "Att betala per besök: 450 kr",
          "Säsong med 18 besök: 8 100 kr efter RUT, eller cirka 1 150 kr per månad april–oktober",
          "Säsong med 12 besök varannan vecka: cirka 5 400 kr efter RUT"
        ]
      }
    },
    {
      heading: "Vad påverkar priset på gräsklippning?",
      paragraphs: [
        "Vill du ha gräset uppsamlat och bortforslat blir besöket längre och bortforslingen kostar extra utan RUT. Klipper du varannan vecka kan varje besök ta något längre tid, eftersom gräset hunnit bli högre. Utöver det här avgör följande hur mycket du betalar:"
      ],
      list: {
        items: [
          "Yta – den största faktorn. Öppna, raka ytor går snabbt, medan många små gräsytor kräver fler vändor.",
          "Hinder – träd, lekställning, studsmatta, rabatter och trädgårdsmöbler gör att klipparen måste köras runt och kanterna trimmas för hand.",
          "Lutning och terräng – slänter och ojämn mark kräver gåklippare eller trimmer och tar längre tid.",
          "Gräsets höjd – har gräset vuxit sig högt krävs två vändor eller röjsåg. Därför kostar första vårklippningen och klippningen efter semestern ofta mer.",
          "Uppsamling – att samla upp gräset tar tid. Att låta klippet ligga kvar är både billigare och bra för gräsmattan, så länge det klipps ofta.",
          "Avstånd och frekvens – täta, fasta besök gör det lättare för företaget att planera och ger ofta ett lägre pris per gång."
        ]
      }
    },
    {
      heading: "Robotgräsklippare eller anlita hjälp – vad lönar sig?",
      paragraphs: [
        "En robotgräsklippare kostar från några tusen kronor upp till omkring 30 000 kr för avancerade modeller utan begränsningskabel, och kräver installation, service och vinterförvaring. Den klipper ofta och jämnt, men den trimmar inte kanter och klarar sällan branta slänter eller tomter med många hinder.",
        "Räknat på en villatomt med 500 kvadratmeter gräsmatta motsvarar en robot för 15 000 kr ungefär två till fyra säsonger av professionell klippning varannan vecka efter RUT. Många kombinerar därför: roboten sköter den öppna ytan och en trädgårdsfirma kommer några gånger per säsong för kanttrimning, häckklippning och annat som roboten inte klarar."
      ]
    },
    {
      heading: "RUT-avdrag på gräsklippning – så fungerar det",
      paragraphs: [
        "Gräsklippning räknas som trädgårdsarbete och ger RUT-avdrag med 50 procent av arbetskostnaden, precis som häckklippning, ogräsrensning och lövräfsning. Taket är 75 000 kr per person och år, gemensamt med rotavdraget där rot får vara högst 50 000 kr. En hel säsong gräsklippning ligger alltså långt under taket.",
        "Avdraget gäller bara arbetstiden. Material, utrustning, resekostnader och bortforsling eller tippavgifter ingår inte i underlaget. Du måste vara privatperson, och gräsmattan ska ligga i nära anslutning till din bostad – vid villan, radhuset eller fritidshuset. Bostadsrättsföreningar och företag kan inte få RUT, till exempel för klippning av gemensamma gårdar. Kontrollera aktuella regler på skatteverket.se.",
        "Vi på Belganet Städ och Allservice klipper gräs i Blekinge, Kalmar län och Kronobergs län – bland annat i Ronneby, Karlskrona, Kalmar, Växjö, Nybro och Oskarshamn. Vi tar med egen utrustning, drar av RUT direkt på fakturan och lämnar kostnadsfri offert inom 24 timmar, både för enstaka klippningar och hela säsonger."
      ]
    }
  ],
  faqs: [
    {
      q: "Hur ofta ska gräsmattan klippas?",
      a: "Grundregeln är att aldrig ta bort mer än en tredjedel av grässtråets längd åt gången – annars stressas gräset och gulnar. I praktiken betyder det varje vecka när gräset växer som mest. En klipphöjd på 4–6 centimeter ger en tät gräsmatta som klarar torka bättre och lämnar mindre plats åt mossa och ogräs."
    },
    {
      q: "När är första och sista gräsklippningen?",
      a: "Första klippningen görs när gräset börjat växa ordentligt och är runt 6–8 centimeter högt, i södra Sverige ofta i april. Sista klippningen brukar ske i oktober, till cirka 4–5 centimeter så att gräset inte lägger sig och får snömögel under vintern. Nära kusten kan säsongen bli några veckor längre."
    },
    {
      q: "Ingår kanttrimning i priset?",
      a: "Det varierar. Hos en del företag ingår trimning runt rabatter, husgrund och staket i priset per tillfälle, hos andra är det ett tillägg. På en tomt med många rabatter kan trimningen ta en tredjedel av den totala tiden, så fråga alltid vad som ingår innan du jämför offerter."
    },
    {
      q: "Vad händer om gräset har blivit för högt?",
      a: "Har gräset fått växa i flera veckor, till exempel under semestern, behöver det oftast klippas i två omgångar – först högt, sedan till normal höjd – och ibland med trimmer. Klippet måste då samlas upp för att inte kväva gräsmattan. Räkna med att besöket tar ungefär 1,5–2 gånger så lång tid som vanligt."
    },
    {
      q: "Kan jag få gräsklippning vid sommarstugan när jag inte är där?",
      a: "Ja, det är ett vanligt upplägg. Gräset växer ju även när du är bortrest, och med ett fast schema varannan vecka är gräsmattan klippt när du kommer. Du behöver inte vara på plats, bara se till att grindar går att öppna. RUT-avdraget gäller även vid fritidshus om du är privatperson."
    },
    {
      q: "Kan jag kombinera gräsklippning med annat trädgårdsarbete?",
      a: "Ja. Tar du häckklippning, ogräsrensning eller lövräfsning samma dag som gräsklippningen sparar du framkörning och minimidebitering, och allt ger RUT-avdrag på arbetskostnaden. Många lägger in en häckklippning i juni och en lövräfsning i oktober i sitt säsongsavtal, så att hela trädgården sköts vid samma besök."
    }
  ],
  relatedServiceSlugs: [
    "tradgardsskotsel"
  ]
};

export default guide;
