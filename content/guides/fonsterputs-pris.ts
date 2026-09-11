import type { Guide } from "@/content/types";

const MARKET_NOTE =
  "Typiska marknadspriser i Sverige 2026, sammanställda från offerttjänster och företags publicerade prislistor. Inte Belganets fasta priser – begär offert för exakt pris.";

const guide: Guide = {
  slug: "fonsterputs-pris",
  title: "Fönsterputs pris 2026 – vad kostar fönsterputsning?",
  metaTitle: "Fönsterputs pris 2026 – per fönster & villa",
  metaDescription:
    "Fönsterputs pris 2026: vad kostar det per fönster, för lägenhet och villa – före och efter RUT? Se tabeller, räkneexempel och tips. Begär gärna offert.",
  keyword: "fönsterputs pris",
  published: "2026-09-11",
  updated: "2026-09-11",
  intro:
    "Fönsterputs kostar i dag oftast mellan 40 och 80 kronor per standardfönster efter RUT-avdrag, men det slutliga priset avgörs av hur många fönster du har, vilken typ de är och hur lätta de är att nå. En tvårumslägenhet landar ofta runt 400–800 kronor, en villa på ett plan runt 800–1 500 kronor. Här är marknadspriserna för 2026, ett räkneexempel och hur RUT-avdraget påverkar vad du betalar.",
  sections: [
    {
      heading: "Vad kostar fönsterputs per fönster?",
      paragraphs: [
        "De flesta fönsterputsare prissätter per fönster, men fråga vad de menar med ett fönster. Oftast räknas en öppningsbar båge med två glassidor – utsida och insida – som ett fönster, så ett tvåluftsfönster blir två. Stora fasta glaspartier prissätts ibland per kvadratmeter.",
        "Till styckpriset kommer nästan alltid en startavgift eller minimidebitering som täcker framkörning och uppstart. Den gör att små jobb blir dyrare per fönster än stora – putsar du bara fem fönster kan startavgiften stå för en tredjedel av fakturan. Om avgiften avser arbetstid omfattas den av RUT, men en ren reseavgift gör det inte, därför varierar beloppet efter avdrag."
      ],
      table: {
        caption: "Fönsterputs pris per fönster 2026",
        headers: ["Typ av fönster", "Före RUT", "Efter RUT"],
        rows: [
          ["Standardfönster, två sidor", "80–160 kr", "40–80 kr"],
          ["Kopplade bågar, fyra sidor inkl. mellanglas", "140–260 kr", "70–130 kr"],
          ["Fönster med fasta spröjs", "150–300 kr", "75–150 kr"],
          ["Fönster på övervåning som kräver stege", "+25–50 %", "+25–50 %"],
          ["Inglasad balkong, ca 6 glaspartier", "400–1 400 kr", "200–700 kr"],
          ["Startavgift eller framkörning", "300–500 kr", "150–500 kr"]
        ],
        note: MARKET_NOTE
      }
    },
    {
      heading: "Vad kostar fönsterputs för lägenhet, radhus och villa?",
      paragraphs: [
        "Eftersom antalet fönster varierar mycket mellan bostäder är det enklare att utgå från typiska hushåll. Tabellen bygger på standardfönster som putsas på båda sidor, normal smutsgrad och startavgift inräknad. Har du många spröjsade eller kopplade fönster hamnar du i den övre delen av spannet – eller över.",
        "En tumregel: räkna dina bågar, multiplicera med 40–80 kronor och lägg till ett par hundralappar i startavgift. Då har du en rimlig uppskattning av priset efter RUT innan du ens har begärt offert."
      ],
      table: {
        caption: "Vad kostar fönsterputs? Typiska bostäder 2026",
        headers: ["Bostad", "Antal fönster", "Före RUT", "Efter RUT"],
        rows: [
          ["Lägenhet, 1–2 rok", "6–8", "800–1 600 kr", "400–800 kr"],
          ["Lägenhet, 3–4 rok", "8–12", "1 000–2 000 kr", "500–1 000 kr"],
          ["Radhus", "12–18", "1 400–2 800 kr", "700–1 400 kr"],
          ["Villa, ett plan", "15–20", "1 600–3 000 kr", "800–1 500 kr"],
          ["Villa, 1,5–2 plan", "25–35", "2 400–4 400 kr", "1 200–2 200 kr"]
        ],
        note: MARKET_NOTE
      }
    },
    {
      heading: "Vad påverkar priset på fönsterputs?",
      paragraphs: [
        "Fönsterputsare räknar i grunden på tid. Allt som gör att varje fönster tar längre tid eller kräver mer utrustning syns i priset:"
      ],
      list: {
        items: [
          "Fönstertyp – kopplade fönster har fyra glassidor i stället för två, och spröjs delar upp glaset i många små rutor som putsas var för sig. Båda kan i praktiken dubbla tiden per fönster.",
          "Höjd och åtkomst – fönster som kräver stege eller ställning tar längre tid och kostar ofta 25–50 procent mer. Behövs skylift kan det tillkomma 800–1 500 kr per påbörjad timme för liften.",
          "Smutsgrad – första putsningen efter flera år, byggdamm, färgstänk eller kalkfläckar från vattenspridare kräver skrapa och mer tid än ett vanligt underhållsputs.",
          "Karmar och bågar – de flesta priser gäller bara glaset. Tvätt av karmar och bågar är ett tillägg som ofta motsvarar en tredjedel till hälften av grundpriset.",
          "Engångsputs eller abonnemang – vid återkommande putsning är startavgiften ofta lägre och fönstren går fortare att få rena, eftersom smutsen inte hunnit sätta sig.",
          "Avstånd – bor du långt från företagets övriga kunder kan framkörningen kosta mer."
        ]
      }
    },
    {
      heading: "Räkneexempel: fönsterputs för en villa med 22 fönster",
      paragraphs: [
        "Så här kan en offert se ut för en villa på ett och ett halvt plan, räknat med marknadspriserna i tabellerna ovan. Huset har 12 vanliga fönster på bottenvåningen, 6 fönster på övervåningen som nås med stege och 4 fönster med fasta spröjs. Allt putsas på insida och utsida.",
        "Lägg märke till hur mycket fönstertypen betyder: de fyra spröjsade fönstren kostar mer än sex vanliga fönster tillsammans. Vill du även ha karmarna tvättade tillkommer ungefär 800–1 200 kr före avdrag."
      ],
      list: {
        ordered: true,
        items: [
          "12 standardfönster à 120 kr = 1 440 kr",
          "6 fönster på övervåningen à 150 kr = 900 kr",
          "4 fönster med fasta spröjs à 220 kr = 880 kr",
          "Startavgift som avser arbetstid = 400 kr",
          "Summa före RUT: 3 620 kr",
          "RUT-avdrag 50 procent: –1 810 kr",
          "Att betala: 1 810 kr, eller drygt 80 kr per fönster"
        ]
      }
    },
    {
      heading: "Hur fungerar RUT-avdraget för fönsterputs?",
      paragraphs: [
        "Fönsterputs räknas som hushållsnära tjänst, och som privatperson får du RUT-avdrag med 50 procent av arbetskostnaden. Taket är 75 000 kr per person och år, och det delas med rotavdraget, där rot får vara högst 50 000 kr. Är ni två som bor i bostaden kan avdraget fördelas på er båda, och då har var och en sitt eget tak.",
        "Avdraget gäller bara själva arbetet. Material, utrustning och resekostnader ingår inte i underlaget. Arbetet ska utföras i eller i nära anslutning till din bostad – villa, radhus, lägenhet eller fritidshus. Bostadsrättsföreningar och företag kan däremot inte få RUT, så beställer föreningen putsning av hela huset betalar den fullt pris. Bokar du putsning av din egen bostadsrätt gäller avdraget som vanligt.",
        "RUT är en skattereduktion och förutsätter att du har betalat tillräckligt med skatt. Vi drar av beloppet direkt på fakturan och sköter ansökan hos Skatteverket. Reglerna kan ändras – kontrollera vad som gäller på skatteverket.se."
      ]
    },
    {
      heading: "Lönar sig abonnemang på fönsterputs?",
      paragraphs: [
        "Vill du ha klara fönster året runt är abonnemang ofta billigast per gång, eftersom startavgiften brukar vara lägre och fönsterputsaren kan planera sina rutter.",
        "Ett räkneexempel: en villa med 20 fönster som putsas tre gånger per år till cirka 1 000 kr per gång efter RUT kostar 3 000 kr om året – ungefär 250 kr i månaden. Bor du nära kusten i Blekinge eller vid Kalmarsund, där salt från havet och pollen från skog och åkrar lägger sig på glaset, kan en fjärde putsning vara värd pengarna. Mer om det hittar du i vår guide om hur ofta man bör putsa fönster.",
        "Vi på Belganet Städ och Allservice putsar fönster i bland annat Ronneby, Karlskrona, Karlshamn, Kalmar och Växjö, både som engångsputs och återkommande. Vi har med oss all utrustning, är fullt försäkrade och svarar på offertförfrågningar inom 24 timmar. Offerten är kostnadsfri."
      ]
    },
    {
      heading: "Så får du rätt pris på fönsterputs – tips inför offerten",
      paragraphs: [
        "Ju mer exakt information du lämnar, desto mer exakt blir offerten – och desto mindre risk för överraskningar på fakturan. Det här är bra att ha koll på innan du hör av dig:"
      ],
      list: {
        items: [
          "Räkna bågar, inte bara fönster, och notera vilka som är kopplade eller har spröjs.",
          "Ange antal våningar och om det går att ställa en stege på marken runt huset.",
          "Tala om ifall karmar, fönsterbänkar eller inglasad balkong ska ingå.",
          "Fråga om startavgift, minimidebitering och eventuell framkörningsavgift.",
          "Jämför alltid totalpriset efter RUT, med alla avgifter inräknade.",
          "Kontrollera att företaget har F-skatt och ansvarsförsäkring – särskilt vid arbete på stege."
        ]
      }
    }
  ],
  faqs: [
    {
      q: "Vad kostar fönsterputs per timme?",
      a: "Timpriset för hushållsnära tjänster ligger oftast på 450–650 kr före RUT, alltså 225–325 kr efter avdrag. De flesta fönsterputsare prissätter ändå per fönster, eftersom det gör kostnaden lättare att förutse. Timpris är vanligare för uterum, stora glaspartier och jobb där fönstren är ovanligt smutsiga."
    },
    {
      q: "Ingår karmar och fönsterbänkar i priset?",
      a: "Oftast inte. Standardpriset gäller i regel bara glasytorna, insida och utsida. Tvätt av karmar och bågar är ett vanligt tillägg, och om fönsterbänkarna torkas av varierar mellan företag. Säg till när du begär offert, så vet du vad som ingår och slipper diskutera det på plats."
    },
    {
      q: "Kan man få RUT-avdrag för fönsterputs i fritidshuset?",
      a: "Ja. RUT-avdraget gäller arbete i eller i nära anslutning till bostaden, och fritidshus räknas dit. Du behöver vara privatperson och själv betala för arbetet. Tänk på att taket på 75 000 kr per person och år är gemensamt för alla RUT- och rottjänster, så putsning av både villa och sommarstuga räknas samman."
    },
    {
      q: "Varför kostar fönster med spröjs mer?",
      a: "Spröjs delar upp glaset i flera små rutor som måste putsas var för sig, med fler hörn där smuts och vatten samlas. Lösa spröjs måste dessutom lyftas ur och sättas tillbaka. Därför kan ett spröjsat fönster ta dubbelt så lång tid som ett vanligt, och priset följer tiden."
    },
    {
      q: "Kan man putsa fönster när det regnar?",
      a: "Lätt regn är sällan något problem – regnvatten är i sig rent, och det är smutsen på glaset som ger fläckar när det torkar. Vid kraftigt regn, blåst eller minusgrader som får vattnet att frysa flyttas utsidan ofta till en annan dag. Insidan kan putsas oavsett väder."
    }
  ],
  relatedServiceSlugs: [
    "fonsterputs"
  ]
};

export default guide;
