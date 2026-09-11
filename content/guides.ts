export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Primary keyword this guide targets (real search volume, see plan). */
  keyword: string;
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Service slugs this guide should link to (drives internal linking). */
  relatedServiceSlugs: string[];
}

/**
 * 16 informational guides targeting high-volume, low-difficulty national
 * keywords (rut avdrag 2026: 1900/mo KD 3, vad kostar flyttstädning: 1600/mo
 * KD 0, etc — see the plan for full keyword data). These feed top-of-funnel
 * traffic and internal-link down into the service × ort landing pages.
 */
export const GUIDES: Guide[] = [
  {
    slug: "rut-avdrag-for-stadning-2026",
    title: "RUT-avdrag för städtjänster 2026 – så fungerar det",
    metaTitle: "RUT-avdrag för städning 2026 – regler & så mycket sparar du",
    metaDescription:
      "Så fungerar RUT-avdraget för hemstäd, flyttstäd, fönsterputs och trädgård 2026. Vi förklarar reglerna och sköter ansökan åt dig som kund hos Belganet.",
    keyword: "rut avdrag 2026",
    intro:
      "RUT-avdraget gör att du som privatperson kan halvera kostnaden för en rad hushållsnära tjänster, däribland städning. Här går vi igenom vad som gäller 2026 och hur det fungerar när du anlitar Belganet Städ och Allservice.",
    sections: [
      {
        heading: "Vad är RUT-avdrag?",
        paragraphs: [
          "RUT-avdrag (Rengöring, Underhåll och Tvätt) är en skattereduktion som gör att privatpersoner betalar en lägre kostnad för hushållsnära tjänster – resten dras av direkt mot din skatt via Skatteverket.",
          "I praktiken betyder det att du som kund bara betalar en del av fakturan själv. Vi som utförare begär resterande belopp direkt från Skatteverket, så du slipper ligga ute med pengar och sedan vänta på återbetalning.",
        ],
      },
      {
        heading: "Vilka städtjänster omfattas?",
        paragraphs: [
          "RUT-avdrag kan normalt användas på hemstädning, flyttstädning, fönsterputs och trädgårdsskötsel som gräsklippning och häckklippning, förutsatt att tjänsten utförs i eller i nära anslutning till din bostad.",
          "Vissa tjänster, som kontorsstädning och fastighetsskötsel åt föreningar, omfattas inte eftersom RUT-avdraget är kopplat till privatpersoners eget hushåll.",
        ],
      },
      {
        heading: "Hur mycket kan jag få i avdrag?",
        paragraphs: [
          "Avdraget uppgår normalt till hälften av arbetskostnaden, upp till ett tak per person och år. Taket och exakta regler kan ändras mellan åren, så vi rekommenderar att alltid stämma av aktuella belopp med Skatteverket eller fråga oss direkt.",
          "Är ni flera personer skrivna på samma adress kan ni ofta dela upp fakturan mellan er för att utnyttja avdraget bättre – vi hjälper gärna till att reda ut vad som passar er situation.",
        ],
      },
      {
        heading: "Så sköter vi ansökan åt dig",
        paragraphs: [
          "När du anlitar Belganet Städ och Allservice för hemstäd, flyttstäd, fönsterputs eller trädgårdsskötsel sköter vi hela RUT-ansökan åt dig. Du behöver bara godkänna fakturan – vi begär resterande belopp direkt från Skatteverket.",
        ],
      },
    ],
    faqs: [
      {
        q: "Måste jag ansöka om RUT-avdraget själv?",
        a: "Nej, vi sköter hela ansökan åt dig och drar av din del direkt på fakturan. Du betalar bara den återstående kostnaden.",
      },
      {
        q: "Gäller RUT-avdrag för företag?",
        a: "Nej, RUT-avdrag gäller privatpersoner för tjänster i det egna hushållet. Kontorsstädning och andra företagstjänster omfattas inte.",
      },
      {
        q: "Kan jag använda RUT-avdrag på flera tjänster samtidigt?",
        a: "Ja, du kan kombinera exempelvis hemstäd, fönsterputs och trädgårdsskötsel under samma år, så länge du håller dig inom det totala taket.",
      },
      {
        q: "Vad händer om jag redan använt hela mitt RUT-avdrag för året?",
        a: "Då betalar du full kostnad för resterande tjänster under året. Vi informerar dig alltid tydligt om vad som gäller på din faktura.",
      },
    ],
    relatedServiceSlugs: ["hemstad", "flyttstad", "fonsterputs", "tradgardsskotsel"],
  },
  {
    slug: "vad-kostar-flyttstadning",
    title: "Vad kostar flyttstädning? Prisguide",
    metaTitle: "Vad kostar flyttstädning? Prisguide 2026 | Belganet Städ",
    metaDescription:
      "Vad kostar flyttstädning egentligen, och vad påverkar priset? Vi förklarar vad som avgör kostnaden och hur RUT-avdraget sänker den för privatpersoner.",
    keyword: "vad kostar flyttstädning",
    intro:
      "Priset på en flyttstädning varierar beroende på bostadens storlek, skick och läge. Här går vi igenom vad som påverkar kostnaden och hur du får en rättvisande offert.",
    sections: [
      {
        heading: "Vad påverkar priset på flyttstädning?",
        paragraphs: [
          "De viktigaste faktorerna är bostadens yta, antal rum, hur många badrum som ska städas samt bostadens allmänna skick. En bostad som hållits ren löpande tar kortare tid att flyttstäda än en som stått orörd länge.",
          "Tillval som förråd, garage, källare eller extra fönsterputs påverkar också den totala kostnaden.",
        ],
      },
      {
        heading: "Fast pris eller timpris?",
        paragraphs: [
          "Vi lämnar alltid en tydlig offert utifrån bostadens storlek och skick innan arbetet börjar, så att du vet vad som gäller. På så sätt slipper du överraskningar på slutfakturan.",
        ],
      },
      {
        heading: "Så sänker RUT-avdraget kostnaden",
        paragraphs: [
          "Som privatperson kan du använda RUT-avdrag på flyttstädning, vilket normalt halverar arbetskostnaden. Vi sköter ansökan åt dig direkt mot Skatteverket – du betalar bara din del av fakturan.",
        ],
      },
      {
        heading: "Så får du en rättvisande offert",
        paragraphs: [
          "Berätta om bostadens storlek, antal rum och badrum samt eventuella tillval när du hör av dig till oss. Ju mer information vi har, desto mer exakt kan offerten bli redan från start.",
        ],
      },
    ],
    faqs: [
      {
        q: "Är flyttstädning dyrare än vanlig hemstädning?",
        a: "Ja, eftersom flyttstädning är mer omfattande och innefattar bland annat skåp, vitvaror och fönster tar den längre tid än en vanlig hemstädning.",
      },
      {
        q: "Ingår återstädningsgaranti i priset?",
        a: "Ja, hos oss ingår återstädningsgaranti – blir hyresvärden inte nöjd återkommer vi och åtgärdar utan extra kostnad.",
      },
      {
        q: "Kan jag få ett fast pris innan städningen börjar?",
        a: "Ja, vi lämnar alltid en tydlig offert baserad på bostadens storlek och skick innan vi bokar in arbetet.",
      },
    ],
    relatedServiceSlugs: ["flyttstad"],
  },
  {
    slug: "vad-ingar-i-flyttstadning",
    title: "Vad ingår i flyttstädning? Så täcker vi hela bostaden",
    metaTitle: "Vad ingår i flyttstädning? Full genomgång | Belganet Städ",
    metaDescription:
      "Vad ingår egentligen i en godkänd flyttstädning? Vi går igenom rum för rum vad som ska städas för att bostaden ska klara besiktning.",
    keyword: "vad ingår i flyttstädning",
    intro:
      "En godkänd flyttstädning omfattar betydligt mer än en vanlig veckostädning. Här går vi igenom vad som ingår rum för rum, så att du vet vad du kan förvänta dig.",
    sections: [
      {
        heading: "Kök",
        paragraphs: [
          "Köket är ofta det mest tidskrävande rummet. Vi rengör insidan av alla skåp och lådor, ugn, spis, kylskåp och frys, samt fläkt, bänkskivor, kakel och golv.",
        ],
      },
      {
        heading: "Badrum och toalett",
        paragraphs: [
          "Vi tar bort kalk och tvålrester från kakel, dusch och wc, rengör golvbrunn, skåp och speglar samt torkar av alla ytor noggrant.",
        ],
      },
      {
        heading: "Övriga rum",
        paragraphs: [
          "I sovrum och vardagsrum ingår dammtorkning av lister, element och fönsterbänkar, tvätt av golv samt rengöring av garderober och förvaring.",
          "Fönster putsas både in- och utvändigt, inklusive karmar och fönsterbleck.",
        ],
      },
      {
        heading: "Tillval utöver grundstädningen",
        paragraphs: [
          "Förråd, garage och källarutrymmen ingår inte alltid som standard men kan enkelt läggas till som tillval om du behöver hjälp med det i samband med flytten.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ingår fönsterputs i flyttstädningen?",
        a: "Ja, fönster putsas både invändigt och utvändigt som en del av vår standardflyttstädning.",
      },
      {
        q: "Vad ingår inte i flyttstädning?",
        a: "Normalt ingår inte bortforsling av kvarlämnade möbler eller större renoveringsarbeten. Hör av dig om du är osäker på vad som gäller för din bostad.",
      },
      {
        q: "Kan ni städa förråd och garage också?",
        a: "Ja, det går bra att lägga till som tillägg till den ordinarie flyttstädningen.",
      },
    ],
    relatedServiceSlugs: ["flyttstad", "fonsterputs"],
  },
  {
    slug: "flyttstadning-checklista",
    title: "Flyttstädning checklista – så förbereder du dig",
    metaTitle: "Flyttstädning checklista 2026 | Belganet Städ",
    metaDescription:
      "En praktisk checklista inför flyttstädning, rum för rum. Så förbereder du bostaden innan städningen och undviker anmärkningar vid besiktning.",
    keyword: "flyttstädning checklista",
    intro:
      "Oavsett om du städar själv eller anlitar oss underlättar det att gå igenom bostaden systematiskt. Här är en checklista rum för rum inför flyttstädningen.",
    sections: [
      {
        heading: "Innan städningen börjar",
        paragraphs: [
          "Se till att bostaden är helt tömd på möbler och personliga tillhörigheter. Det gör städningen både snabbare och mer grundlig, och minskar risken för missade ytor.",
        ],
      },
      {
        heading: "Kök",
        paragraphs: [
          "☐ Töm och rengör kylskåp och frys, ☐ rengör ugn och spis in- och utvändigt, ☐ torka av alla skåp in- och utvändigt, ☐ rengör bänkskivor och stänkskydd, ☐ moppa golvet sist.",
        ],
      },
      {
        heading: "Badrum",
        paragraphs: [
          "☐ Rengör kakel och fogar, ☐ ta bort kalk från dusch och blandare, ☐ rengör toalettstol och handfat noggrant, ☐ torka speglar och skåp.",
        ],
      },
      {
        heading: "Övriga rum och fönster",
        paragraphs: [
          "☐ Dammtorka lister, element och fönsterbänkar, ☐ putsa fönster in- och utvändigt, ☐ tvätta golv i samtliga rum, ☐ kontrollera garderober och förråd.",
        ],
      },
      {
        heading: "Slutkontroll",
        paragraphs: [
          "Gå igenom bostaden en sista gång med hyresvärdens eventuella checklista i handen innan besiktningen, så att inget missas i sista stund.",
        ],
      },
    ],
    faqs: [
      {
        q: "Räcker det att följa en checklista själv, eller bör man anlita proffs?",
        a: "En checklista är ett bra stöd, men en professionell flyttstädning ger ofta ett säkrare resultat och sparar tid – särskilt med en återstädningsgaranti som backup.",
      },
      {
        q: "Vad gör jag om hyresvärden inte godkänner städningen?",
        a: "Anlitar du oss ingår återstädningsgaranti, vilket innebär att vi återkommer och åtgärdar eventuella anmärkningar utan extra kostnad.",
      },
    ],
    relatedServiceSlugs: ["flyttstad"],
  },
  {
    slug: "vad-kostar-hemstadning",
    title: "Vad kostar hemstädning? Så prissätts hemstäd",
    metaTitle: "Vad kostar hemstädning? Prisguide 2026 | Belganet Städ",
    metaDescription:
      "Vad kostar hemstädning per timme eller per tillfälle, och hur påverkar RUT-avdraget priset? Vi reder ut vad som styr kostnaden för hemstäd.",
    keyword: "vad kostar hemstädning",
    intro:
      "Kostnaden för hemstädning styrs framför allt av bostadens storlek och hur ofta du vill ha städat. Här förklarar vi vad som påverkar priset och hur RUT-avdraget fungerar i praktiken.",
    sections: [
      {
        heading: "Vad avgör priset per tillfälle?",
        paragraphs: [
          "Ju större bostad och fler rum, desto längre tid tar städningen och desto högre blir kostnaden per tillfälle. Antal badrum och bostadens allmänna skick spelar också in.",
        ],
      },
      {
        heading: "Löpande abonnemang eller enstaka tillfällen",
        paragraphs: [
          "Många väljer ett löpande abonnemang – veckovis, varannan vecka eller månadsvis – vilket ofta ger ett mer förutsägbart pris över tid jämfört med enstaka bokningar.",
        ],
      },
      {
        heading: "Så påverkar RUT-avdraget priset",
        paragraphs: [
          "Som privatperson får du normalt halva arbetskostnaden avdragen direkt via RUT-avdraget. Vi sköter hela ansökan åt dig, så du bara behöver betala din del av fakturan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Är det billigare att boka löpande städning än enstaka tillfällen?",
        a: "Ofta blir det mer förutsägbart och smidigt med ett löpande abonnemang, men vi lämnar gärna offert på enstaka tillfällen också.",
      },
      {
        q: "Ingår städmaterial i priset?",
        a: "Ja, vi har med oss de rengöringsmedel och den utrustning som behövs, om du inte önskar att vi använder dina egna produkter.",
      },
    ],
    relatedServiceSlugs: ["hemstad", "storstadning"],
  },
  {
    slug: "vad-ingar-i-hemstadning",
    title: "Vad ingår i hemstädning? Det här gör vi varje gång",
    metaTitle: "Vad ingår i hemstädning? | Belganet Städ",
    metaDescription:
      "Vad gör vi egentligen vid en hemstädning? Vi går igenom vad som ingår i den löpande hemstädningen och vad du kan lägga till som tillval.",
    keyword: "vad ingår i hemstädning",
    intro:
      "En regelbunden hemstädning fokuserar på de ytor och sysslor som behöver skötas oftast. Här ser du vad som normalt ingår, och vad som kan läggas till efter behov.",
    sections: [
      {
        heading: "Standardstädning",
        paragraphs: [
          "I en vanlig hemstädning ingår dammsugning och moppning av golv, avtorkning av ytor och möbler, samt städning av kök, badrum och toalett.",
        ],
      },
      {
        heading: "Vad ingår oftast inte som standard?",
        paragraphs: [
          "Insida av ugn och kylskåp, fönsterputs och grundlig skåpstädning brukar inte ingå i den löpande hemstädningen, men kan bokas som tillägg eller vid en storstädning.",
        ],
      },
      {
        heading: "Anpassning efter ditt hem",
        paragraphs: [
          "Vi går alltid igenom vad just du önskar ska prioriteras – vissa vill ha extra fokus på köket, andra på badrummet eller sovrummen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan jag be er fokusera extra på ett visst rum?",
        a: "Ja, vi anpassar alltid städningen efter dina önskemål och prioriteringar.",
      },
      {
        q: "Kan jag lägga till fönsterputs vid samma tillfälle?",
        a: "Ja, fönsterputs kan enkelt läggas till din hemstädning som tillägg.",
      },
    ],
    relatedServiceSlugs: ["hemstad", "fonsterputs"],
  },
  {
    slug: "fonsterputs-pris",
    title: "Vad kostar fönsterputsning? Prisguide",
    metaTitle: "Fönsterputs pris – vad kostar fönsterputsning? | Belganet",
    metaDescription:
      "Vad kostar fönsterputsning för hem, lägenhet eller kontor? Vi förklarar vad som påverkar priset och hur RUT-avdraget sänker kostnaden.",
    keyword: "fönsterputs pris",
    intro:
      "Priset på fönsterputsning beror framför allt på antal fönster, tillgänglighet och hur ofta du vill ha det gjort. Här förklarar vi vad som styr kostnaden.",
    sections: [
      {
        heading: "Vad påverkar priset?",
        paragraphs: [
          "Antalet fönster, om båda sidor ska putsas, samt hur lättillgängliga fönstren är avgör hur lång tid arbetet tar och därmed priset. Höga eller svåråtkomliga fönster kan kräva extra utrustning.",
        ],
      },
      {
        heading: "Engångsputs eller abonnemang",
        paragraphs: [
          "Många väljer att boka fönsterputs 2–4 gånger per år som ett löpande abonnemang, medan andra föredrar enstaka tillfällen inför till exempel en högtid eller visning.",
        ],
      },
      {
        heading: "RUT-avdrag på fönsterputs",
        paragraphs: [
          "Som privatperson kan du använda RUT-avdrag på fönsterputs i hemmet, vilket normalt halverar arbetskostnaden. Vi hanterar ansökan åt dig.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan RUT-avdrag användas på fönsterputs för lägenhet?",
        a: "Ja, så länge det gäller ditt eget boende kan RUT-avdrag normalt användas, oavsett om det är villa, radhus eller lägenhet.",
      },
      {
        q: "Hur ofta bör man putsa fönster?",
        a: "Vi rekommenderar 2–4 gånger per år, oftare i kustnära eller mer exponerade lägen.",
      },
    ],
    relatedServiceSlugs: ["fonsterputs"],
  },
  {
    slug: "hur-ofta-putsa-fonster",
    title: "Hur ofta bör man putsa fönster?",
    metaTitle: "Hur ofta bör man putsa fönster? | Belganet Städ",
    metaDescription:
      "Hur ofta behöver fönster putsas för att hållas klara och rena? Vi går igenom vad som påverkar hur ofta du bör boka fönsterputs.",
    keyword: "vad kostar fönsterputsning",
    intro:
      "Hur ofta fönstren behöver putsas beror på var du bor, väderexponering och dina egna önskemål om hur klara fönstren ska vara. Här ger vi en generell rekommendation.",
    sections: [
      {
        heading: "Allmän rekommendation",
        paragraphs: [
          "För de flesta hem räcker det med fönsterputs 2–4 gånger per år för att hålla fönstren fräscha och klara.",
        ],
      },
      {
        heading: "Läge och väder spelar roll",
        paragraphs: [
          "Bostäder i kustnära lägen eller nära mycket trafik exponeras för mer salt, damm och smuts, och kan behöva putsas oftare än fönster i mer skyddade lägen.",
        ],
      },
      {
        heading: "Boka löpande så slipper du tänka på det",
        paragraphs: [
          "Många av våra kunder väljer att boka fönsterputs som ett återkommande abonnemang, så att det sköts automatiskt utan att de själva behöver hålla koll på det.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan jag boka fönsterputs bara på utsidan?",
        a: "Ja, det går bra att bara boka utsidan, till exempel om insidan sköts löpande i samband med hemstädningen.",
      },
    ],
    relatedServiceSlugs: ["fonsterputs"],
  },
  {
    slug: "storstadning-checklista",
    title: "Storstädning checklista – vad ingår i en storstäd?",
    metaTitle: "Storstädning checklista – vad ingår? | Belganet Städ",
    metaDescription:
      "Vad ingår i en storstädning jämfört med vanlig hemstäd? Här är en checklista över vad som bör ingå när du storstädar hemmet.",
    keyword: "storstädning checklista",
    intro:
      "En storstädning går djupare än den löpande hemstädningen och tar med sig ytor som annars lätt glöms bort. Här är en checklista över vad som bör ingå.",
    sections: [
      {
        heading: "Kök",
        paragraphs: [
          "☐ Rengör ugn och spis grundligt, ☐ rengör insidan av kylskåp och frys, ☐ torka av insidan av alla skåp och lådor, ☐ rengör bakom och under vitvaror om möjligt.",
        ],
      },
      {
        heading: "Badrum",
        paragraphs: [
          "☐ Ta bort kalkavlagringar, ☐ rengör fogar noggrant, ☐ rengör golvbrunn, ☐ torka av skåp in- och utvändigt.",
        ],
      },
      {
        heading: "Övriga ytor som ofta glöms bort",
        paragraphs: [
          "☐ Dammtorka taklister och lampor, ☐ rengör element, ☐ torka av dörrar och dörrkarmar, ☐ dammsug bakom möbler.",
        ],
      },
      {
        heading: "Hur ofta bör man storstäda?",
        paragraphs: [
          "De flesta hushåll mår bra av en till två storstädningar per år, till exempel inför sommaren och inför julen. Vi hjälper gärna till om du vill slippa göra det själv.",
        ],
      },
    ],
    faqs: [
      {
        q: "Skiljer sig storstädning mellan lägenhet och villa?",
        a: "Grundprinciperna är desamma, men en villa har oftast fler ytor och rum, vilket gör att storstädningen tar längre tid totalt sett.",
      },
      {
        q: "Kan jag använda RUT-avdrag på storstädning?",
        a: "Ja, som privatperson kan du använda RUT-avdrag på storstädning precis som på vanlig hemstäd.",
      },
    ],
    relatedServiceSlugs: ["storstadning", "hemstad"],
  },
  {
    slug: "kontorsstadning-pris",
    title: "Vad kostar kontorsstädning?",
    metaTitle: "Vad kostar kontorsstädning? Prisguide | Belganet Städ",
    metaDescription:
      "Vad kostar kontorsstädning och vad påverkar priset för lokalvård? Vi går igenom vad som styr kostnaden för företag.",
    keyword: "kontorsstädning pris",
    intro:
      "Priset för kontorsstädning beror på lokalens storlek, hur ofta ni vill ha städat och vilka utrymmen som ingår. Här förklarar vi vad som påverkar kostnaden för din verksamhet.",
    sections: [
      {
        heading: "Vad påverkar priset?",
        paragraphs: [
          "Lokalens yta, antal arbetsplatser, toaletter och pentryn samt städfrekvens är de viktigaste faktorerna. Ett kontor som städas dagligen kostar mer totalt än ett som städas en gång i veckan, men blir ofta billigare per tillfälle.",
        ],
      },
      {
        heading: "Löpande avtal ger förutsägbara kostnader",
        paragraphs: [
          "De flesta företag tecknar ett löpande städavtal med fast pris, vilket gör det enkelt att budgetera och planera för kontorsstädningen över tid.",
        ],
      },
      {
        heading: "Går det att kombinera med andra tjänster?",
        paragraphs: [
          "Ja, många kunder kompletterar kontorsstädningen med fönsterputs eller periodisk storstädning för ett komplett helhetsgrepp om lokalen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan vi få offert utan bindningstid?",
        a: "Vi diskuterar gärna upplägg som passar er verksamhet, både löpande avtal och mer flexibla lösningar.",
      },
      {
        q: "Ingår fönsterputs i kontorsstädningen?",
        a: "Fönsterputs kan läggas till som tillägg eller bokas separat efter behov.",
      },
    ],
    relatedServiceSlugs: ["kontorsstad", "trappstadning"],
  },
  {
    slug: "byggstadning-pris",
    title: "Vad kostar byggstädning?",
    metaTitle: "Vad kostar byggstädning? Prisguide | Belganet Städ",
    metaDescription:
      "Vad kostar byggstädning efter renovering eller nybygge? Vi går igenom vad som påverkar priset för slutstädning av byggprojekt.",
    keyword: "byggstädning pris",
    intro:
      "Kostnaden för byggstädning styrs av projektets storlek, hur mycket byggdamm som finns och hur grundlig städningen behöver vara. Här förklarar vi vad som påverkar priset.",
    sections: [
      {
        heading: "Vad avgör priset?",
        paragraphs: [
          "Ytan som ska städas, mängden byggdamm och rester samt hur många ytor som behöver finstädning avgör hur lång tid arbetet tar och därmed kostnaden.",
        ],
      },
      {
        heading: "Grovstädning och finstädning",
        paragraphs: [
          "Ofta delas byggstädning upp i en grövre första omgång som tar bort det värsta dammet, och en avslutande finstädning inför inflyttning eller besiktning.",
        ],
      },
      {
        heading: "RUT-avdrag vid privat renovering",
        paragraphs: [
          "Vid privat renovering kan RUT-avdrag ofta användas på slutstädningen. Hör av dig så går vi igenom vad som gäller för just ditt projekt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ni städa löpande under ett längre byggprojekt?",
        a: "Ja, vi kan boka in återkommande grovstädning under projektets gång och en avslutande finstädning när arbetet är klart.",
      },
    ],
    relatedServiceSlugs: ["byggstadning"],
  },
  {
    slug: "visningsstadning-pris",
    title: "Vad kostar visningsstädning inför husförsäljning?",
    metaTitle: "Vad kostar visningsstädning? | Belganet Städ",
    metaDescription:
      "Vad kostar det att städa bostaden inför visning och fotografering? Vi förklarar vad som påverkar priset på visningsstädning.",
    keyword: "visningsstädning pris",
    intro:
      "En nystädad bostad gör ofta ett bättre intryck på spekulanter. Här går vi igenom vad som påverkar priset på visningsstädning inför en försäljning.",
    sections: [
      {
        heading: "Vad ingår och vad kostar det?",
        paragraphs: [
          "Priset beror på bostadens storlek och skick, precis som vid vanlig hemstädning, men med extra fokus på kök, badrum och de ytor som syns tydligast på bilder och vid visning.",
        ],
      },
      {
        heading: "Boka i god tid inför visningen",
        paragraphs: [
          "Vi rekommenderar att boka städningen så nära visningsdatumet som möjligt, gärna samma dag eller dagen innan, för bästa resultat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ni städa både inför fotografering och den fysiska visningen?",
        a: "Ja, många kunder bokar en städning inför fotografering och en uppfräschning inför själva visningstillfället.",
      },
    ],
    relatedServiceSlugs: ["visningsstadning", "hemstad"],
  },
  {
    slug: "hackklippning-pris",
    title: "Vad kostar häckklippning?",
    metaTitle: "Vad kostar häckklippning? Prisguide | Belganet Städ",
    metaDescription:
      "Vad kostar det att få häcken klippt? Vi förklarar vad som påverkar priset och hur RUT-avdrag kan sänka kostnaden för häckklippning.",
    keyword: "häckklippning pris",
    intro:
      "Priset på häckklippning beror på häckens längd, höjd och hur vildvuxen den är. Här förklarar vi vad som styr kostnaden.",
    sections: [
      {
        heading: "Vad påverkar priset?",
        paragraphs: [
          "Häckens totala längd och höjd är de viktigaste faktorerna, men även hur länge sedan den klipptes senast spelar roll – en kraftigt vildvuxen häck tar längre tid att forma.",
        ],
      },
      {
        heading: "RUT-avdrag på häckklippning",
        paragraphs: [
          "Som privatperson kan du normalt använda RUT-avdrag på häckklippning, vilket halverar arbetskostnaden. Vi hanterar ansökan åt dig.",
        ],
      },
      {
        heading: "Löpande skötsel eller enstaka klippning",
        paragraphs: [
          "Många väljer att boka häckklippning en till två gånger per säsong som en del av ett löpande trädgårdsavtal, medan andra bokar en enstaka insats vid behov.",
        ],
      },
    ],
    faqs: [
      {
        q: "Forslar ni bort klippet efteråt?",
        a: "Ja, vi forslar bort ris och klipp efter arbetet, om inte annat önskas.",
      },
    ],
    relatedServiceSlugs: ["tradgardsskotsel"],
  },
  {
    slug: "graskllippning-pris",
    title: "Vad kostar gräsklippning?",
    metaTitle: "Vad kostar gräsklippning? Prisguide | Belganet Städ",
    metaDescription:
      "Vad kostar löpande gräsklippning för villaträdgården? Vi går igenom vad som påverkar priset och hur RUT-avdrag sänker kostnaden.",
    keyword: "gräsklippning pris",
    intro:
      "Kostnaden för gräsklippning beror i första hand på tomtens storlek och hur ofta du vill ha den klippt under säsongen. Här förklarar vi vad som påverkar priset.",
    sections: [
      {
        heading: "Vad avgör priset?",
        paragraphs: [
          "Gräsmattans yta, terrängens svårighetsgrad och hur ofta klippning önskas – veckovis eller varannan vecka – är de faktorer som påverkar priset mest.",
        ],
      },
      {
        heading: "RUT-avdrag på gräsklippning",
        paragraphs: [
          "Som privatperson kan du använda RUT-avdrag på gräsklippning, precis som på övrig trädgårdsskötsel. Vi sköter ansökan direkt mot Skatteverket.",
        ],
      },
      {
        heading: "Löpande skötselavtal",
        paragraphs: [
          "De flesta av våra kunder tecknar ett löpande avtal för hela säsongen, så att gräsmattan hålls fin utan att de själva behöver tänka på det.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan jag boka enstaka klippningar istället för ett helt säsongsavtal?",
        a: "Ja, det går bra – vi anpassar oss efter vad som passar dig bäst.",
      },
    ],
    relatedServiceSlugs: ["tradgardsskotsel"],
  },
  {
    slug: "dodsbo-stadning-guide",
    title: "Städning av dödsbo – en guide för anhöriga",
    metaTitle: "Städning av dödsbo – guide för anhöriga | Belganet Städ",
    metaDescription:
      "En guide för anhöriga om hur städning av dödsbo går till, vad som brukar ingå och hur ni kan gå tillväga i en svår tid.",
    keyword: "dödsbo städning pris",
    intro:
      "Att ta hand om ett dödsbo innebär mycket praktiskt att hålla reda på, ofta mitt i en svår tid. Den här guiden förklarar hur en dödsbostädning vanligtvis går till.",
    sections: [
      {
        heading: "Vad innebär en dödsbostädning?",
        paragraphs: [
          "En dödsbostädning innebär att bostaden städas grundligt, antingen inför överlämning till hyresvärd, försäljning eller inför att boet ska tömmas och nya ägare eller hyresgäster ska flytta in.",
        ],
      },
      {
        heading: "Hur går processen till?",
        paragraphs: [
          "Vi börjar alltid med att lyssna på de anhöriga om vad som önskas och i vilken takt processen ska ske. Vissa vill att allt sker snabbt, andra behöver mer tid – vi anpassar oss efter det.",
        ],
      },
      {
        heading: "Vad kostar det, och kan RUT-avdrag användas?",
        paragraphs: [
          "Priset beror på bostadens skick och omfattning, precis som vid annan städning. Huruvida RUT-avdrag kan användas beror på situationen och vem som är beställare – vi hjälper er reda ut vad som gäller.",
        ],
      },
    ],
    faqs: [
      {
        q: "Måste boet vara tömt innan ni städar?",
        a: "Nej, vi kan anpassa oss efter situationen, oavsett om bostaden fortfarande innehåller möbler eller redan är tömd.",
      },
      {
        q: "Kan ni hjälpa till på kort varsel?",
        a: "Vi försöker alltid vara flexibla och anpassa oss efter familjens tidsplan så gott det går.",
      },
    ],
    relatedServiceSlugs: ["dodsbostadning"],
  },
  {
    slug: "miljovanlig-stadning",
    title: "Miljövänlig städning – därför använder vi det",
    metaTitle: "Miljövänlig städning – så jobbar vi | Belganet Städ",
    metaDescription:
      "Varför använder vi miljögodkända rengöringsmedel vid all städning? Vi förklarar vad miljövänlig städning innebär i praktiken.",
    keyword: "miljövänlig städning",
    intro:
      "Miljövänlig städning handlar om att använda produkter och metoder som är skonsamma både för dig och för miljön, utan att kompromissa med resultatet.",
    sections: [
      {
        heading: "Vad innebär miljögodkända rengöringsmedel?",
        paragraphs: [
          "Vi använder rengöringsmedel som är miljömärkta och allergitestade, vilket minskar belastningen på både inomhusmiljön och naturen jämfört med starkare kemikalier.",
        ],
      },
      {
        heading: "Bra för allergiker och barnfamiljer",
        paragraphs: [
          "Allergitestade produkter är särskilt viktiga i hem med barn, husdjur eller familjemedlemmar med allergier eller känslig hud.",
        ],
      },
      {
        heading: "Samma resultat, mindre påverkan",
        paragraphs: [
          "Miljövänliga produkter håller idag hög städeffekt, vilket betyder att du inte behöver kompromissa mellan ett rent hem och en skonsammare miljöpåverkan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kostar det extra att använda miljövänliga produkter?",
        a: "Nej, vi använder miljögodkända rengöringsmedel som standard i alla våra uppdrag utan extra kostnad.",
      },
    ],
    relatedServiceSlugs: ["hemstad", "flyttstad", "kontorsstad"],
  },
];

export const GUIDE_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);
