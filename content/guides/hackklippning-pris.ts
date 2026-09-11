import type { Guide } from "@/content/types";

const MARKET_NOTE =
  "Typiska marknadspriser i Sverige 2026, sammanställda från offerttjänster och företags publicerade prislistor. Inte Belganets fasta priser – begär offert för exakt pris.";

const guide: Guide = {
  slug: "hackklippning-pris",
  title: "Häckklippning pris 2026 – vad kostar det att klippa häcken?",
  metaTitle: "Häckklippning pris 2026 – per meter & timme",
  metaDescription:
    "Häckklippning pris 2026: vad kostar det per meter och per timme, och vad blir det efter RUT? Se tabeller, räkneexempel och tips – och begär gärna offert.",
  keyword: "häckklippning pris",
  published: "2026-09-11",
  updated: "2026-09-11",
  intro:
    "Att få häcken klippt av ett proffs kostar oftast 25–80 kronor per löpmeter efter RUT-avdrag för en häck upp till två meter, eller cirka 225–375 kronor i timmen. En vanlig villahäck på 30 meter och 1,5 meters höjd landar ofta på 1 000–2 000 kronor efter avdrag, plus eventuell bortforsling. Här går vi igenom vad häckklippning kostar 2026, vad som driver priset och hur du räknar ut din egen kostnad.",
  sections: [
    {
      heading: "Vad kostar häckklippning per meter?",
      paragraphs: [
        "Många trädgårdsföretag prissätter häckklippning per löpmeter, eftersom det är lätt för både kund och företag att mäta. Priset per meter stiger med höjden: en låg häck klipps snabbt från marken, medan en häck på två–tre meter kräver stege eller ställning, tar längre tid och ger betydligt mer klipp att samla ihop. Priserna nedan gäller klippning av båda sidor och toppen på en häck som klipps regelbundet.",
        "Utöver meterpriset tar många ut en minimidebitering, ofta motsvarande en till två timmars arbete eller runt 1 500–2 000 kr före RUT. Det gör att en kort häck på tio meter kan kosta nästan lika mycket som en på tjugo."
      ],
      table: {
        caption: "Häckklippning pris per löpmeter 2026",
        headers: ["Häckens höjd", "Före RUT", "Efter RUT"],
        rows: [
          ["Upp till 1 meter", "50–80 kr/m", "25–40 kr/m"],
          ["1–1,5 meter", "70–130 kr/m", "35–65 kr/m"],
          ["1,5–2 meter", "90–160 kr/m", "45–80 kr/m"],
          ["2–3 meter", "130–250 kr/m", "65–125 kr/m"],
          ["Över 3 meter", "Offert, ofta med lift", "Offert"],
          ["Bortforsling av klipp", "450–1 500 kr per tillfälle", "Ingen RUT"]
        ],
        note: MARKET_NOTE
      }
    },
    {
      heading: "Vad kostar häckklippning per timme?",
      paragraphs: [
        "Andra företag tar betalt per timme i stället. För trädgårdsarbete ligger timpriset 2026 oftast på 450–750 kr före RUT, alltså cirka 225–375 kr efter avdrag. Tillägg för maskiner, framkörning och bortforsling kan tillkomma. Timpris är vanligast när häcken är ojämn eller vildvuxen, eller när klippningen kombineras med annat trädgårdsarbete samma dag.",
        "För att översätta timpris till meterpris kan du räkna med att en välskött häck på 1–1,5 meter klipps i en takt av ungefär 7–12 löpmeter i timmen, båda sidor och topp, inklusive uppsamling av klippet. En igenvuxen häck kan ta tio minuter per meter eller mer."
      ]
    },
    {
      heading: "Vad kostar det att klippa en villahäck? Exempel",
      paragraphs: [
        "Tabellen visar typiska uppdrag med marknadspriser, inklusive uppsamling av klipp men exklusive bortforsling. Tiden avser en person med motorhäcksax och gäller en häck som klipps varje år."
      ],
      table: {
        caption: "Exempel på vad häckklippning kostar 2026",
        headers: ["Häck", "Ungefärlig tid", "Före RUT", "Efter RUT"],
        rows: [
          ["15 m, ca 1 m hög (radhus)", "1,5–2,5 h", "900–1 900 kr", "450–950 kr"],
          ["30 m, ca 1,5 m hög (villa)", "3–5 h", "2 000–3 800 kr", "1 000–1 900 kr"],
          ["60 m, ca 1,5 m hög (hörntomt)", "6–10 h", "4 000–9 000 kr", "2 000–4 500 kr"],
          ["20 m tuja, ca 2,5 m hög", "5–10 h", "3 500–8 000 kr", "1 750–4 000 kr"],
          ["Igenvuxen häck, tillägg", "Längre tid", "+35–100 %", "+35–100 %"]
        ],
        note: MARKET_NOTE
      }
    },
    {
      heading: "Räkneexempel: 30 meter häck, 1,5 meter hög",
      paragraphs: [
        "Ta en vanlig villahäck av liguster eller avenbok som klipps en gång per år: 30 meter lång, 1,5 meter hög och drygt en halv meter bred. Med ett timpris på 600 kr före RUT kan kalkylen se ut så här:"
      ],
      list: {
        ordered: true,
        items: [
          "Klippning av båda sidor och toppen: 3 timmar × 600 kr = 1 800 kr",
          "Uppsamling och räfsning av klipp: 1,5 timmar × 600 kr = 900 kr",
          "Arbetskostnad före RUT: 2 700 kr",
          "RUT-avdrag 50 procent: –1 350 kr",
          "Bortforsling till återvinningscentral: 600 kr (ingen RUT)",
          "Att betala: 1 950 kr"
        ]
      }
    },
    {
      heading: "Vad påverkar priset på häckklippning?",
      paragraphs: [
        "Två häckar med samma längd kan skilja flera tusen kronor i pris. Om häcken i räkneexemplet inte klippts på tre år och behöver tas in 30–40 centimeter på alla sidor kan jobbet ta dubbelt så lång tid. Då hamnar arbetskostnaden efter RUT närmare 2 700 kr, och riset kan kräva en hel släpkärra till återvinningscentralen – därför blir regelbunden klippning nästan alltid billigare över tid.",
        "Det här är de faktorer som avgör priset:"
      ],
      list: {
        items: [
          "Längd och höjd – ju större klippyta, desto längre tid. En häck på 2,5 meter har drygt 60 procent mer sidoyta än en på 1,5 meter och kräver dessutom stege.",
          "Bredd och täthet – en bred tuja- eller granhäck ger mer klipp än en smal liguster, och en bred topp tar längre tid att få jämn.",
          "Skick – en häck som inte klippts på flera år behöver formas om, vilket ofta ger ett tillägg på 35 procent eller mer.",
          "Åtkomst – häckar mot en slänt, ett staket, en rabatt eller grannens tomt tar längre tid att klippa på båda sidor.",
          "Bortforsling – att köra bort riset kostar extra och omfattas inte av RUT. Har du kompost eller kommunens hämtning av trädgårdsavfall kan du spara den kostnaden.",
          "Säsong och avstånd – försommaren är högsäsong, och vissa företag tar ut framkörningsavgift utanför sitt närområde."
        ]
      }
    },
    {
      heading: "När ska häcken klippas – och hur ofta?",
      paragraphs: [
        "De flesta lövhäckar, som liguster, avenbok, bok och häckoxbär, mår bra av en klippning per år, gärna efter midsommar när vårens tillväxt är klar. Vill du ha en riktigt stram form klipper du två gånger: i början av sommaren och en gång till i augusti. Barrhäckar som tuja klipps ofta på försommaren och vid behov igen i augusti. Kontrollera alltid att inga fåglar häckar i häcken innan du klipper under vår och försommar.",
        "I Blekinge och längs Kalmarkusten är växtsäsongen lång, med tidig vår och mild höst nära havet. Snabbväxande häckar som liguster hinner därför ofta skjuta mycket igen efter en klippning i juni, och två klippningar per säsong är vanligt för den som vill ha en prydlig häck hela sommaren. Två lätta klippningar blir sällan mycket dyrare än en kraftig, eftersom varje tillfälle går snabbt och ger lite ris."
      ]
    },
    {
      heading: "RUT-avdrag på häckklippning – det här gäller",
      paragraphs: [
        "Häckklippning är ett trädgårdsarbete som omfattas av RUT-avdraget, precis som gräsklippning, ogräsrensning och lövräfsning. Du får avdrag med 50 procent av arbetskostnaden, upp till 75 000 kr per person och år. Taket är gemensamt med rotavdraget, där rot får vara högst 50 000 kr.",
        "Avdraget gäller bara arbetstiden. Material, utrustning, resekostnader och bortforsling eller tippavgifter ingår inte i underlaget – därför står bortforslingen som en egen rad i räkneexemplet. Du måste vara privatperson, och arbetet ska göras i nära anslutning till din bostad, till exempel på tomten till villan, radhuset eller fritidshuset. Bostadsrättsföreningar och företag kan inte få RUT. Kontrollera alltid aktuella regler på skatteverket.se.",
        "Vi på Belganet Städ och Allservice klipper häckar i bland annat Ronneby, Karlskrona, Karlshamn, Sölvesborg, Kalmar och Växjö. Vi har med oss egen utrustning, forslar bort riset om du vill, drar av RUT direkt på fakturan och lämnar kostnadsfri offert – vi svarar inom 24 timmar."
      ]
    }
  ],
  faqs: [
    {
      q: "Är det billigare att klippa häcken själv?",
      a: "Har du redan häcksax och stege, ja. En bra batteri- eller motorhäcksax kostar ofta från ett par tusen kronor. Men en lång eller hög häck tar gärna en hel helg för den som är ovan, klippet ska ändå tas om hand och arbete på stege med motordrivet verktyg innebär en olycksrisk som är lätt att underskatta."
    },
    {
      q: "Vad gör man med riset efter häckklippningen?",
      a: "Du kan lägga det på komposten, i kommunens kärl för trädgårdsavfall eller låta företaget forsla bort det. Finfördelat klipp från lövhäckar går också att använda som marktäckning i rabatter, där det håller ogräset borta och fukten kvar. Grövre grenar bryts ned långsamt och passar bättre i en rishög i ett hörn av trädgården."
    },
    {
      q: "Hur hårt kan man klippa ner en häck?",
      a: "De flesta lövhäckar, som liguster, avenbok och hagtorn, tål en kraftig föryngring och skjuter nya skott från gamla grenar. Gör den på senvintern, gärna en sida per år. Tuja, en och de flesta andra barrväxter skjuter däremot inte från gammal, brun ved – där ska du bara klippa i den gröna delen. Idegran är ett undantag."
    },
    {
      q: "Vem ansvarar för en häck i tomtgränsen?",
      a: "Står häcken på din tomt ansvarar du för den, men du behöver grannens tillåtelse för att gå in på deras tomt och klippa. Står den mitt i gränsen är det vanligt att dela på arbete och kostnad. Växter mot gata och i korsningar får inte skymma sikten, och många kommuner har regler om hur höga de får vara där."
    },
    {
      q: "Kan jag kombinera häckklippning med annat trädgårdsarbete?",
      a: "Ja, och det blir ofta billigare. Görs flera jobb vid samma besök – till exempel häckklippning, gräsklippning och ogräsrensning – betalar du bara en framkörning och slipper flera minimidebiteringar. Allt räknas som trädgårdsarbete med RUT-avdrag. Vi tar både enstaka insatser och löpande trädgårdsskötsel under säsongen."
    }
  ],
  relatedServiceSlugs: [
    "tradgardsskotsel"
  ]
};

export default guide;
