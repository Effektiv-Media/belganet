import {
  Sparkles,
  Home,
  Truck,
  Building2,
  Droplets,
  SprayCan,
  Trees,
  HardHat,
  KeyRound,
  HeartHandshake,
  Footprints,
  Wrench,
} from "lucide-react";
import type { Service } from "./types";

/**
 * The 12 service categories. Fields ending in "Templates" contain {area}
 * placeholders and are rotated per-ort by content/landing.ts so that no two
 * pages for the same service read identically. faqPool holds more FAQs than
 * are shown per page (6 are selected per ort via a deterministic hash) so
 * sibling ort pages for the same service don't share an identical FAQ set.
 *
 * The first 6 subServices/hero/about/cta and the first 6 faqPool entries for
 * stadfirma, hemstad, flyttstad, kontorsstad and fonsterputs are the verbatim
 * copy recovered from the original live site (content/original/*.json) — the
 * client already approved this copy. Everything else is new.
 */
export const SERVICES: Service[] = [
  {
    slug: "stadfirma",
    keyword: "Städfirma",
    keywordLower: "städfirma",
    altKeyword: "Städföretag",
    icon: Sparkles,
    rut: "yes",
    hubIntro:
      "Belganet Städ och Allservice är en lokal städfirma för hela Blekinge, Kalmar län och Växjö. Vi samlar hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsskötsel hos en och samma leverantör – med en fast kontaktperson, miljögodkända medel och RUT-avdrag direkt på fakturan för privatpersoner.",
    metaTemplates: [
      "Städfirma i {area} för hem, kontor och trädgård. Hemstäd, flyttstäd och fönsterputs med RUT-avdrag direkt på fakturan. Begär en kostnadsfri offert idag!",
      "Söker du ett städföretag i {area} eller {district}? Vi sköter hemstäd, flyttstäd, kontorsstäd och fönsterputs med fast kontaktperson. Få offert inom 24 h.",
      "Lokal städfirma i {area} – ett och samma företag för städning, fönsterputs och trädgårdsskötsel. Miljögodkända medel och RUT-avdrag. Begär offert idag!",
    ],
    shortDesc:
      "Din lokala helhetsleverantör inom städ i {area} — allt från hemstäd till kontor och trädgård, under ett och samma tak.",
    subServices: [
      {
        title: "Hemstäd",
        desc: "Regelbunden hemstädning i {area} med RUT-avdrag. Veckovis, varannan vecka eller månadsvis.",
      },
      {
        title: "Flyttstäd",
        desc: "Godkänd och noggrann flyttstädning i {area} med återstädningsgaranti.",
      },
      {
        title: "Kontorsstäd",
        desc: "Professionell kontorsstädning och lokalvård i {area} anpassad efter er verksamhet.",
      },
      {
        title: "Fönsterputs",
        desc: "Stråkfri fönsterputs i {area} – insida och utsida, privat och kommersiellt.",
      },
      {
        title: "Trädgårdsservice",
        desc: "Gräsklippning, häckklippning, ogräsrensning och mer – vi sköter din trädgård i {area}.",
      },
      {
        title: "Allservice",
        desc: "Praktiska tjänster utöver städ – storstädning, byggstäd, markarbeten och mer.",
      },
    ],
    faqPool: [
      {
        q: "Vad för tjänster erbjuder ni som städfirma i {area}?",
        a: "Vi erbjuder hemstäd, flyttstäd, kontorsstäd, fönsterputs, trädgårdsservice och allservice i {area}. Kontakta oss så hittar vi en lösning för dina behov.",
      },
      {
        q: "Kan jag använda RUT-avdrag?",
        a: "Ja, privatpersoner kan använda RUT-avdrag på hushållsnära tjänster som hemstäd, fönsterputs och trädgård. Vi sköter ansökan.",
      },
      {
        q: "Hur länge har ni verkat i {area}?",
        a: "Belganet Städ och Allservice är en lokal städfirma med djup kännedom om {area} och omnejd. Vi är stolta över vår nöjda kundkrets i regionen.",
      },
      {
        q: "Är ni försäkrade?",
        a: "Ja, alla uppdrag utförs av erfaren personal och vi är fullt försäkrade. Du kan anlita oss med trygghet.",
      },
      {
        q: "Erbjuder ni akut städning?",
        a: "I mån av kapacitet hjälper vi gärna med akuta behov i {area}. Kontakta oss så ser vi vad vi kan göra.",
      },
      {
        q: "Hur kontaktar jag er som städfirma i {area}?",
        a: "Fyll i formuläret, ring eller maila oss direkt. Vi verkar i {area} och återkommer snabbt med svar och offert.",
      },
      {
        q: "Kan jag boka flera tjänster samtidigt, till exempel hemstäd och trädgård?",
        a: "Ja, många kunder i {area} kombinerar flera av våra tjänster i samma abonnemang. Vi skräddarsyr gärna en helhetslösning åt dig.",
      },
      {
        q: "Har ni fasta priser eller offereras varje uppdrag individuellt?",
        a: "Vi lämnar alltid en individuell offert utifrån uppdragets omfattning i {area}, men strävar efter tydliga och förutsägbara priser.",
      },
      {
        q: "Städar ni även bostadsrättsföreningar och fastighetsbolag?",
        a: "Ja, utöver privatpersoner och företag tar vi gärna uppdrag åt bostadsrättsföreningar och fastighetsägare i {area}.",
      },
    ],
    heroTemplates: [
      "Vi är en lokal städfirma i {area} som erbjuder hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsservice – allt under ett tak.",
      "Söker du en pålitlig städfirma i {area}? Vi samlar hemstäd, flyttstäd, kontorsstäd och fönsterputs hos en och samma leverantör.",
      "Belganet Städ och Allservice är din helhetsleverantör för städ i {area} – från återkommande hemstäd till engångsuppdrag.",
      "En städfirma i {area} som tar hand om helheten: hem, kontor, fönster och trädgård – med personlig service från start till slut.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är en lokal städfirma grundad av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder städning av högsta kvalitet till privatpersoner och företag. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Belganet Städ och Allservice grundades av Angelica utifrån ett genuint intresse för ordning, renlighet och personlig service. Idag är vi verksamma som städfirma i {area}, där vi hjälper både privatpersoner och företag med skräddarsydda städlösningar.",
      "Som lokal städfirma i {area} sätter vi Angelicas grundvärderingar i centrum: noggrannhet, flexibilitet och trygghet i varje uppdrag. Vare sig du behöver hemstäd, kontorsstäd eller fönsterputs finns vi här för dig.",
      "Bakom Belganet Städ och Allservice står grundaren Angelica, med stort engagemang för sina kunder i {area}. Vi kombinerar personlig kontakt med professionell kvalitet i varje städuppdrag, stort som litet.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din städfirma i {area} på bästa sätt.",
      "Kontakta oss idag för en kostnadsfri offert – vi återkommer snabbt och hittar en lösning som passar dig i {area}.",
      "Redo att komma igång? Skicka en förfrågan så hör vi av oss inom 24 timmar med ett skräddarsytt förslag för {area}.",
      "Låt oss ta hand om städningen i {area} – fyll i formuläret nedan så återkommer vi med en kostnadsfri offert.",
    ],
  },
  {
    slug: "hemstad",
    keyword: "Hemstäd",
    keywordLower: "hemstäd",
    altKeyword: "Hemstädning",
    icon: Home,
    rut: "yes",
    hubIntro:
      "Hemstädning är den tjänst som ger mest vardagstid tillbaka. Vi städar villor, radhus och lägenheter i Blekinge, Kalmar län och Växjö – veckovis, varannan vecka eller månadsvis – med samma noggranna rutin varje gång. Som privatperson betalar du bara halva arbetskostnaden tack vare RUT-avdraget, som vi drar direkt på fakturan.",
    metaTemplates: [
      "Hemstädning i {area} och {district} – veckovis, varannan vecka eller månadsvis. Du betalar halva arbetskostnaden med RUT-avdrag. Begär en kostnadsfri offert!",
      "Hemstäd i {area} med fast städare och tydlig checklista. Miljögodkända medel, inga dolda avgifter och RUT-avdrag direkt på fakturan. Få offert inom 24 h.",
      "Behöver du hjälp med hemstäd i {area}? Vi städar lägenheter, radhus och villor efter ditt schema – till halva priset med RUT-avdrag. Begär offert idag!",
    ],
    shortDesc:
      "Pålitlig och noggrann hemstädning i {area} för privatpersoner, med RUT-avdrag som halverar kostnaden.",
    subServices: [
      {
        title: "Regelbunden hemstäd",
        desc: "Vi erbjuder veckovis, varannan vecka eller månadsvis hemstädning i {area} – anpassad helt efter ditt hem och schema.",
      },
      {
        title: "Storstädning",
        desc: "Behöver hemmet ett extra lyft? Vi utför grundlig storstädning av hela bostaden, inklusive skåp och svåråtkomliga ställen.",
      },
      {
        title: "Fönsterputs",
        desc: "Kombinera din hemstäd med fönsterputs och få ett komplett och fräscht hem i {area}.",
      },
      {
        title: "Trädgårdshjälp",
        desc: "Vi erbjuder även trädgårdsservice som tillägg – gräsklippning, lövräfsning och ogräsrensning.",
      },
      {
        title: "Miljövänliga medel",
        desc: "Vi städar alltid med miljögodkända och allergitestade rengöringsmedel för din och familjens hälsa.",
      },
      {
        title: "RUT-avdrag",
        desc: "Som privatperson betalar du halva priset tack vare RUT-avdrag. Vi hanterar ansökan åt dig.",
      },
    ],
    faqPool: [
      {
        q: "Vad ingår i hemstäd i {area}?",
        a: "Vår hemstädning i {area} inkluderar dammsugning och moppning av golv, avtorkning av ytor, städning av kök, badrum och toalett. Vi anpassar efter dina önskemål.",
      },
      {
        q: "Kan jag använda RUT-avdrag?",
        a: "Ja! Som privatperson har du rätt till RUT-avdrag på hemstäd, vilket gör att du betalar halva priset. Vi sköter ansökan direkt med Skatteverket.",
      },
      {
        q: "Hur ofta bör jag boka hemstäd i {area}?",
        a: "De flesta väljer veckovis eller varannan vecka. Vi anpassar oss helt efter ditt schema och behov.",
      },
      {
        q: "Behöver jag vara hemma under städningen?",
        a: "Nej, det krävs inte. Vi kan komma överens om nyckelhantering eller kod om du föredrar att inte vara hemma.",
      },
      {
        q: "Vilka rengöringsmedel använder ni?",
        a: "Vi använder miljögodkända och allergitestade rengöringsmedel som är skonsamma mot både hem och miljö.",
      },
      {
        q: "Hur bokar jag hemstäd i {area}?",
        a: "Fyll i formuläret på sidan eller ring oss direkt. Vi återkommer inom 24 timmar med en offert anpassad för dig i {area}.",
      },
      {
        q: "Kan jag pausa eller ändra min hemstädning vid behov?",
        a: "Absolut. Behöver du hoppa över en vecka eller ändra tid är det bara att höra av dig – vi är flexibla kring schemat i {area}.",
      },
      {
        q: "Tar ni med egna städmaterial och utrustning?",
        a: "Ja, vi har med oss allt som behövs. Vill du att vi använder dina egna produkter går det också bra.",
      },
      {
        q: "Städar ni även lägenheter och radhus, inte bara villor?",
        a: "Ja, vi utför hemstäd i alla typer av boenden i {area} – lägenheter, radhus och villor.",
      },
    ],
    heroTemplates: [
      "Vi erbjuder pålitlig och noggrann hemstädning i {area} för privatpersoner. Med RUT-avdrag halveras kostnaden – vi sköter ansökan åt dig.",
      "Ett rent hem utan att du behöver lyfta ett finger. Vi utför hemstädning i {area} anpassad helt efter dina behov och ditt schema.",
      "Regelbunden hemstäd i {area} – veckovis, varannan vecka eller efter behov. RUT-avdrag gör det enkelt att komma igång.",
      "Vi tar hand om städningen i ditt hem i {area} så att du kan fokusera på annat. Noggrant, flexibelt och till halva priset med RUT.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder hemstäd av högsta kvalitet till privatpersoner och företag. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Hemstädningen i {area} sköts av ett litet, personligt team under ledning av grundaren Angelica. Vi lägger stor vikt vid noggrannhet och lyssnar alltid in vad just ditt hem behöver.",
      "Belganet Städ och Allservice grundades av Angelica med målet att erbjuda hemstäd av högsta kvalitet i {area}. Vi kombinerar personlig service med professionella rutiner i varje hem vi städar.",
      "Som lokalt förankrad aktör i {area} vet vi vad som krävs för att ett hem ska kännas riktigt rent. Angelica och teamet lägger ner samma omsorg i varje hemstädning, oavsett bostadens storlek.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din hemstäd i {area} på bästa sätt.",
      "Boka din hemstädning i {area} redan idag – fyll i formuläret så återkommer vi med en kostnadsfri offert inom 24 timmar.",
      "Vill du slippa tänka på städningen? Skicka en förfrågan så skräddarsyr vi ett upplägg för ditt hem i {area}.",
      "Kontakta oss för en kostnadsfri offert på hemstäd i {area} – vi svarar snabbt och anpassar oss efter dig.",
    ],
  },
  {
    slug: "flyttstad",
    keyword: "Flyttstäd",
    keywordLower: "flyttstäd",
    altKeyword: "Flyttstädning",
    icon: Truck,
    rut: "yes",
    hubIntro:
      "En godkänd flyttstädning är sista steget innan du lämnar över nycklarna – och det steg där flest tvister med hyresvärd eller köpare uppstår. Vi flyttstädar lägenheter och villor i Blekinge, Kalmar län och Växjö enligt en tydlig checklista, med återstädningsgaranti om något skulle anmärkas vid besiktningen och RUT-avdrag direkt på fakturan.",
    metaTemplates: [
      "Flyttstädning i {area} med återstädningsgaranti – vi städar tills hyresvärden eller köparen är nöjd. RUT-avdrag på fakturan. Begär kostnadsfri offert!",
      "Flyttstäd i {area} och {district} enligt besiktningens checklista: kök, vitvaror, badrum och fönster. Garanti och RUT-avdrag ingår. Få offert inom 24 timmar.",
      "Ska du flytta i {area}? Vi utför godkänd flyttstädning med återstädningsgaranti och fast pris efter offert. Du betalar halva arbetskostnaden med RUT-avdrag.",
    ],
    shortDesc:
      "Godkänd flyttstädning i {area} med återstädningsgaranti, så att du kan lämna över nycklarna utan oro.",
    subServices: [
      {
        title: "Komplett flyttstädning",
        desc: "Vi utför godkänd och noggrann flyttstädning i {area} – inklusive ugn, kylskåp, badrum och fönster.",
      },
      {
        title: "Återstädningsgaranti",
        desc: "Är hyresvärden inte nöjd? Vi återkommer och åtgärdar utan extra kostnad.",
      },
      {
        title: "Förråd och garage",
        desc: "Vi kan även städa förråd, garage och källarutrymmen som en del av flyttpaketet.",
      },
      {
        title: "Snabb bokning",
        desc: "Vi förstår att flytt är stressigt. Kontakta oss så ordnar vi snabb bokning i {area}.",
      },
      {
        title: "RUT-avdrag möjligt",
        desc: "Privatpersoner kan använda RUT-avdrag även på flyttstädning. Vi sköter allt.",
      },
      {
        title: "Miljömedveten städning",
        desc: "Vi använder miljögodkända rengöringsmedel som är skonsamma mot bostad och miljö.",
      },
    ],
    faqPool: [
      {
        q: "Vad ingår i en flyttstädning i {area}?",
        a: "Vår flyttstädning i {area} inkluderar rengöring av alla rum, insida skåp, kylskåp, ugn och frys, badrum, toalett, fönster och karmar samt golv och tak.",
      },
      {
        q: "Är ni garanti för godkänd städning?",
        a: "Ja, vi erbjuder återstädningsgaranti. Om hyresvärden inte är nöjd kommer vi tillbaka och åtgärdar utan extra kostnad.",
      },
      {
        q: "Kan ni också tömma och städa förråd och garage?",
        a: "Ja, vi kan hjälpa till med både förråd, garage och källarutrymmen. Hör av dig så skräddarsyr vi offerten.",
      },
      {
        q: "Hur lång tid tar en flyttstädning?",
        a: "Det beror på bostadens storlek och skick. En normal 3:a tar vanligtvis 4–6 timmar. Vi ger en uppskattning i samband med offerten.",
      },
      {
        q: "Kan RUT-avdrag användas på flyttstäd?",
        a: "Ja, privatpersoner kan använda RUT-avdrag även på flyttstädning i {area}. Vi sköter ansökan åt dig.",
      },
      {
        q: "Hur bokar jag flyttstäd i {area}?",
        a: "Kontakta oss via formuläret eller telefon. Vi är verksamma i {area} och svarar snabbt på din förfrågan.",
      },
      {
        q: "Hur nära inflyttningsdagen kan jag boka flyttstädning?",
        a: "Vi rekommenderar att boka så snart datumet är känt, men försöker alltid lösa akuta behov i {area} i mån av lediga tider.",
      },
      {
        q: "Behöver bostaden vara tom när ni städar?",
        a: "Ja, för bästa resultat bör flytten vara klar och bostaden tömd innan vi utför flyttstädningen.",
      },
      {
        q: "Städar ni även efter hantverkare eller renovering i samband med flytt?",
        a: "Ja, vi kan kombinera flyttstädning med byggstädning om bostaden i {area} nyligen renoverats.",
      },
    ],
    heroTemplates: [
      "Vi utför professionell flyttstädning i {area} som uppfyller hyresvärdens krav. Vi tar hand om allt från kök och badrum till fönster och förråd.",
      "Slipp stressen inför flytten – vi sköter flyttstädningen i {area} med återstädningsgaranti om något skulle missas.",
      "Godkänd flyttstädning i {area}, från kök och vitvaror till fönster och golv. Vi lämnar bostaden redo för besiktning.",
      "Flyttstäd i {area} med fast pris och tydlig checklista – så att du kan lämna över nycklarna utan oro.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder flyttstäd av högsta kvalitet till privatpersoner och företag. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Flyttstädningen i {area} genomförs enligt en tydlig checklista som Angelica och teamet har finslipat genom många uppdrag. Målet är alltid en godkänd besiktning utan krångel.",
      "Belganet Städ och Allservice grundades av Angelica för att erbjuda trygg och pålitlig städning i {area} – inte minst i den ofta stressiga flyttprocessen.",
      "Vi vet att en flytt i {area} innebär mycket att hålla koll på. Därför tar Angelica och teamet hela ansvaret för flyttstädningen, med garanti om något behöver åtgärdas i efterhand.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din flyttstäd i {area} på bästa sätt.",
      "Boka din flyttstädning i {area} redan idag – vi återkommer inom 24 timmar med en offert och ett förslag på tid.",
      "Har du redan ett flyttdatum? Skicka en förfrågan så bokar vi in flyttstädningen i {area} innan det blir stressigt.",
      "Kontakta oss för en kostnadsfri offert på flyttstäd i {area} – med återstädningsgaranti ingår tryggheten redan från start.",
    ],
  },
  {
    slug: "kontorsstad",
    keyword: "Kontorsstäd",
    keywordLower: "kontorsstäd",
    altKeyword: "Kontorsstädning",
    icon: Building2,
    rut: "no",
    hubIntro:
      "Ett rent kontor syns både för kunder och medarbetare. Vi sköter kontorsstädning och lokalvård åt företag i Blekinge, Kalmar län och Växjö – kontor, butiker, mottagningar och mindre verksamhetslokaler – med löpande avtal, fast månadspris och städning på tider som inte stör verksamheten.",
    metaTemplates: [
      "Kontorsstädning i {area} för företag – löpande städavtal med fast månadspris och städning före eller efter kontorstid. Kostnadsfri genomgång av er lokal.",
      "Kontorsstäd i {area} och {district}: kontor, butiker och verksamhetslokaler. Fast kontaktperson, miljögodkända medel och flexibla tider. Begär offert idag!",
      "Söker ni kontorsstädning i {area}? Vi städar kontor och lokaler dagligen, veckovis eller efter behov – med tydligt avtal och fast pris. Få offert inom 24 h.",
    ],
    shortDesc:
      "Vi håller kontor, butiker och verksamhetslokaler i {area} rena och välkomnande, på tider som passar er verksamhet.",
    subServices: [
      {
        title: "Daglig eller periodisk städning",
        desc: "Vi anpassar städfrekvensen helt efter er verksamhet i {area} – dagligen, veckovis eller vid behov.",
      },
      {
        title: "Toaletter och pentryn",
        desc: "Alla gemensamma utrymmen ingår – toaletter, kök och pentryn hålls alltid fräscha.",
      },
      {
        title: "Städning utanför kontorstid",
        desc: "Vi utför städningen tidigt eller sent för att inte störa er arbetsdag.",
      },
      {
        title: "Löpande städavtal",
        desc: "Fast pris och förutsägbara kostnader med ett löpande städavtal anpassat för er.",
      },
      {
        title: "Fönsterputs och specialstäd",
        desc: "Vi kan komplettera med fönsterputs, storstädning och andra tjänster efter behov.",
      },
      {
        title: "Professionell personal",
        desc: "Alla städare är erfarna, pålitliga och diskreta – viktigt i en professionell miljö.",
      },
    ],
    faqPool: [
      {
        q: "Vilka typer av lokaler städar ni i {area}?",
        a: "Vi städar kontor, butiker, restauranger, skolor och andra verksamhetslokaler i {area}. Vi anpassar tjänsten efter er typ av lokal.",
      },
      {
        q: "Hur ofta kan ni komma?",
        a: "Vi erbjuder allt från daglig städning till veckovis eller efter behov. Vi sätter upp ett schema som passar er verksamhet.",
      },
      {
        q: "Städar ni utanför kontorstid?",
        a: "Ja, vi kan utföra städningen tidigt på morgonen, sent på kvällen eller under helger för att inte störa verksamheten.",
      },
      {
        q: "Ingår toaletter och pentry?",
        a: "Ja, toaletter, pentryn och gemensamma utrymmen ingår i vår kontorsstädning. Vi ser till att hela kontoret är välkomnande.",
      },
      {
        q: "Kan vi teckna ett löpande avtal?",
        a: "Absolut. Vi erbjuder löpande städavtal med fast pris och förutsägbara kostnader för er verksamhet i {area}.",
      },
      {
        q: "Hur begär jag offert för kontorsstäd i {area}?",
        a: "Fyll i formuläret eller ring oss. Vi besöker gärna er lokal i {area} för en kostnadsfri genomgång och offert.",
      },
      {
        q: "Kan ni städa flera kontor eller filialer åt samma företag?",
        a: "Ja, vi tar gärna på oss flera lokaler i {area} och omnejd under samma avtal och kontaktperson.",
      },
      {
        q: "Är personalen som städar hos oss alltid densamma?",
        a: "Vi strävar efter kontinuitet och att samma person eller team sköter er lokal i {area}, så att ni får en trygg relation.",
      },
      {
        q: "Vad händer om vi behöver ändra städdag med kort varsel?",
        a: "Hör av dig så snart som möjligt så löser vi det – vi är flexibla och vill att kontorsstädningen ska fungera smidigt för er.",
      },
    ],
    heroTemplates: [
      "Vi håller er arbetsplats i {area} ren, fräsch och välkomnande. Vi anpassar städschema och tjänster efter er verksamhet.",
      "Professionell kontorsstädning i {area} – vi städar diskret utanför ordinarie arbetstid så att verksamheten inte störs.",
      "Ett rent kontor gör intryck. Vi sköter kontorsstädningen i {area} med löpande avtal och fast pris.",
      "Kontorsstäd i {area} för företag som vill kunna lita på att lokalen alltid är i toppskick.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder kontorsstäd av högsta kvalitet till privatpersoner och företag. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Belganet Städ och Allservice grundades av Angelica med ambitionen att bli en pålitlig samarbetspartner för företag i {area}. Idag städar vi allt från enskilda kontor till hela fastigheter.",
      "För verksamheter i {area} innebär ett samarbete med oss en fast kontaktperson och ett städschema som verkligen följs. Angelica och teamet värnar om långsiktiga kundrelationer.",
      "Vi vet att ett rent kontor i {area} bidrar till både trivsel och intryck gentemot kunder. Därför lägger Belganet Städ och Allservice stor vikt vid noggrannhet i varje lokal vi ansvarar för.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din kontorsstäd i {area} på bästa sätt.",
      "Kontakta oss för en kostnadsfri genomgång av er lokal i {area} och ett skräddarsytt förslag på städavtal.",
      "Vill ni slippa tänka på städningen på kontoret? Skicka en förfrågan så återkommer vi med en offert inom 24 timmar.",
      "Boka ett möte om kontorsstäd i {area} – vi besöker gärna er lokal innan vi lämnar offert.",
    ],
  },
  {
    slug: "fonsterputs",
    keyword: "Fönsterputs",
    keywordLower: "fönsterputs",
    altKeyword: "Fönsterputsning",
    icon: Droplets,
    rut: "yes",
    hubIntro:
      "Rena fönster släpper in mer ljus och gör hela hemmet ljusare. Vi putsar fönster för privatpersoner, bostadsrättsföreningar och företag i Blekinge, Kalmar län och Växjö – insida, utsida, karmar och spröjs – som engångsjobb eller återkommande abonnemang. Privatpersoner betalar halva arbetskostnaden med RUT-avdrag.",
    metaTemplates: [
      "Fönsterputsning i {area} – insida, utsida, karmar och spröjs utan ränder. Som engångsjobb eller abonnemang, med RUT-avdrag på fakturan. Begär offert idag!",
      "Fönsterputs i {area} och {district} för villor, lägenheter och företag. Vi når även höga fönster säkert. Halva arbetskostnaden med RUT. Få offert inom 24 h.",
      "Stråkfri fönsterputs i {area} – vi putsar 2–4 gånger per år eller när du behöver. Fast pris efter offert och RUT-avdrag för privatpersoner. Kontakta oss!",
    ],
    shortDesc:
      "Stråkfri fönsterputs i {area}, insida och utsida, för både privatpersoner och företag.",
    subServices: [
      {
        title: "Insida och utsida",
        desc: "Vi putsar fönster på både insida och utsida för ett perfekt, stråkfritt resultat i {area}.",
      },
      {
        title: "Karmar och fönsterbänkar",
        desc: "Avtorkning av karmar, fönsterbänkar och spröjsar ingår alltid i vår fönsterputs.",
      },
      {
        title: "Höga och svåråtkomliga fönster",
        desc: "Vi har rätt utrustning för att nå höga fönster på ett säkert och effektivt sätt.",
      },
      {
        title: "Privat och kommersiellt",
        desc: "Vi putsar fönster för privatpersoner, bostadsrättsföreningar och företag i {area}.",
      },
      {
        title: "RUT-avdrag",
        desc: "Privatpersoner kan nyttja RUT-avdrag på fönsterputs. Vi hanterar avdraget åt dig.",
      },
      {
        title: "Regelbundet abonnemang",
        desc: "Boka återkommande fönsterputs och håll fönstren klara hela året utan att behöva tänka på det.",
      },
    ],
    faqPool: [
      {
        q: "Vad ingår i fönsterputs i {area}?",
        a: "Vi putsar fönsterglas, karmar och fönsterbänkar – både insida och utsida. Vi använder professionella metoder för ett stråkfritt och klart resultat.",
      },
      {
        q: "Hur ofta bör man putsa fönster?",
        a: "Vi rekommenderar fönsterputs 2–4 gånger per år beroende på miljö och exponering. Kustnära lägen kan behöva oftare.",
      },
      {
        q: "Kan ni putsa höga och svåråtkomliga fönster?",
        a: "Ja, vi har utrustning och kompetens för att nå höga fönster på ett säkert sätt i {area}. Hör av dig för en offert.",
      },
      {
        q: "Ingår balkongräcken och dörrglas?",
        a: "Vi kan inkludera det om du önskar. Berätta vad du vill ha putsat så anpassar vi offerten.",
      },
      {
        q: "Kan RUT-avdrag användas på fönsterputs?",
        a: "Ja, privatpersoner kan använda RUT-avdrag på fönsterputs i hemmet. Vi hanterar avdraget åt dig.",
      },
      {
        q: "Hur bokar jag fönsterputs i {area}?",
        a: "Fyll i formuläret på sidan eller kontakta oss direkt. Vi är verksamma i {area} och återkommer snabbt med en offert.",
      },
      {
        q: "Putsar ni fönster på flerbostadshus och för bostadsrättsföreningar?",
        a: "Ja, vi tar gärna uppdrag åt bostadsrättsföreningar och fastighetsägare i {area}, inklusive trapphus och gemensamma fönster.",
      },
      {
        q: "Behöver jag vara hemma när ni putsar fönstren?",
        a: "Om vi bara putsar utsidan behöver du oftast inte vara hemma. Ska vi in i bostaden går vi igenom det när vi bokar tiden.",
      },
      {
        q: "Vad kostar fönsterputs i {area}?",
        a: "Priset beror på antal fönster och tillgänglighet. Hör av dig så får du en kostnadsfri offert anpassad efter ditt hem eller din lokal.",
      },
    ],
    heroTemplates: [
      "Blanka, klara fönster förändrar hela intrycket av ditt hem eller kontor i {area}. Vi putsar professionellt – både insida och utsida.",
      "Fönsterputs i {area} utan ränder och stråk – vi har utrustningen för att nå både låga och höga fönster säkert.",
      "Låt oss ta hand om fönsterputsen i {area}, som engångsuppdrag eller återkommande abonnemang.",
      "Ett fönster gör stor skillnad för helhetsintrycket. Vi putsar fönster i {area} hos både privatpersoner och företag.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder fönsterputs av högsta kvalitet till privatpersoner och företag. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Belganet Städ och Allservice grundades av Angelica med ett öga för detaljer – något som märks tydligt i vår fönsterputs i {area}.",
      "Fönsterputsen i {area} utförs med samma noggrannhet som alla våra andra tjänster. Angelica och teamet ser till att varje ruta blir stråkfri.",
      "Som lokal aktör i {area} vet vi hur kustklimat och årstider påverkar fönstren. Belganet Städ och Allservice anpassar putsningen därefter.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din fönsterputs i {area} på bästa sätt.",
      "Boka fönsterputs i {area} redan idag – vi återkommer snabbt med en kostnadsfri offert.",
      "Vill du slippa krångliga fönsterputsredskap? Skicka en förfrågan så tar vi hand om det i {area}.",
      "Kontakta oss för en offert på fönsterputs i {area}, som engångsjobb eller regelbundet abonnemang.",
    ],
  },
  {
    slug: "storstadning",
    keyword: "Storstädning",
    keywordLower: "storstädning",
    altKeyword: "Storstäd",
    icon: SprayCan,
    rut: "yes",
    hubIntro:
      "En storstädning når de ytor som vardagsstädningen hoppar över: skåp, lister, vitvaror, element och kakelfogar. Vi storstädar hem i Blekinge, Kalmar län och Växjö inför högtider, säsongsskiften eller bara när hemmet behöver ett rejält lyft – med RUT-avdrag som halverar arbetskostnaden.",
    metaTemplates: [
      "Storstädning i {area} från golv till tak – skåp, lister, vitvaror och badrum. Du betalar halva arbetskostnaden med RUT-avdrag. Begär en kostnadsfri offert!",
      "Storstäd i {area} och {district} inför högtider, säsongsskiften eller försäljning. Grundligt, med checklista och RUT-avdrag på fakturan. Få offert inom 24 h.",
      "Behöver hemmet i {area} ett ordentligt lyft? Vi utför grundlig storstädning med miljögodkända medel och RUT-avdrag för privatpersoner. Begär offert idag!",
    ],
    shortDesc:
      "Grundlig storstädning i {area} som når de ställen vardagsstädningen missar – skåp, list och svåråtkomliga ytor.",
    subServices: [
      {
        title: "Helhetsgenomgång av bostaden",
        desc: "Vi går igenom varje rum i {area} från golv till tak, inklusive skåp, lister och dolda ytor.",
      },
      {
        title: "Kök och vitvaror",
        desc: "Ugn, kylskåp, frys och köksskåp rengörs noggrant både in- och utvändigt.",
      },
      {
        title: "Badrum och våtutrymmen",
        desc: "Kalk, fogar och avlopp får extra uppmärksamhet vid en storstädning.",
      },
      {
        title: "Damm i högt och lågt",
        desc: "Vi dammar taklister, lampor, element och andra ytor som ofta glöms bort i vardagen.",
      },
      {
        title: "Fönster som tillägg",
        desc: "Komplettera gärna storstädningen med fönsterputs för ett riktigt helhetslyft i {area}.",
      },
      {
        title: "RUT-avdrag",
        desc: "Som privatperson kan du använda RUT-avdrag på storstädning i {area}. Vi sköter ansökan åt dig.",
      },
    ],
    faqPool: [
      {
        q: "Vad ingår i en storstädning i {area}?",
        a: "En storstädning omfattar hela bostaden mer grundligt än en vanlig hemstäd – bland annat skåp, lister, vitvaror och svåråtkomliga ytor.",
      },
      {
        q: "Hur skiljer sig storstädning från vanlig hemstäd?",
        a: "Hemstäd är löpande underhåll, medan storstädning i {area} går djupare och tar längre tid eftersom fler ytor och detaljer ingår.",
      },
      {
        q: "Hur ofta bör man storstäda hemmet?",
        a: "De flesta väljer att storstäda en till två gånger per år, gärna inför eller efter en säsong. Vi anpassar oss efter dina behov i {area}.",
      },
      {
        q: "Kan jag använda RUT-avdrag på storstädning?",
        a: "Ja, som privatperson kan du använda RUT-avdrag på storstädning i {area}. Vi hanterar ansökan direkt med Skatteverket.",
      },
      {
        q: "Hur lång tid tar en storstädning?",
        a: "Det beror på bostadens storlek och skick, men räkna med betydligt längre tid än en vanlig hemstäd. Vi ger en uppskattning vid offert.",
      },
      {
        q: "Kan ni storstäda inför en fest eller ett besök?",
        a: "Absolut, många kunder i {area} bokar en storstädning inför högtider eller när de väntar besök. Hör av dig i god tid.",
      },
      {
        q: "Ingår fönsterputs i storstädningen?",
        a: "Fönsterputs kan läggas till som tillägg. Berätta vad du önskar så skräddarsyr vi offerten för din storstädning i {area}.",
      },
      {
        q: "Hur bokar jag storstädning i {area}?",
        a: "Fyll i formuläret på sidan eller ring oss direkt. Vi återkommer inom 24 timmar med en offert anpassad för ditt hem.",
      },
    ],
    heroTemplates: [
      "Behöver hemmet i {area} ett rejält lyft? Vi utför grundlig storstädning som når de ställen vardagsstädningen missar.",
      "Storstädning i {area} från golv till tak – vi tar hand om skåp, lister, vitvaror och andra svåråtkomliga ytor.",
      "Ge bostaden i {area} en ordentlig genomgång. Vi utför noggrann storstädning inför fest, säsongsskifte eller bara för trivselns skull.",
      "En riktig storstädning i {area} gör skillnad. Vi går igenom varje rum grundligt, med möjlighet till RUT-avdrag.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder storstädning av högsta kvalitet till privatpersoner och företag. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Belganet Städ och Allservice grundades av Angelica med ett fokus på grundlighet – något som märks extra tydligt i våra storstädningar i {area}.",
      "En storstädning kräver tid och tålamod. Angelica och teamet i {area} har rutinerna på plats för att inget ska missas.",
      "Vi vet att en ordentlig storstädning i {area} kan kännas övermäktig att göra själv. Därför finns Belganet Städ och Allservice här för att ta hand om helheten.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din storstädning i {area} på bästa sätt.",
      "Boka en storstädning i {area} redan idag – vi återkommer inom 24 timmar med en offert.",
      "Behöver hemmet ett ordentligt lyft? Skicka en förfrågan så skräddarsyr vi en storstädning för dig i {area}.",
      "Kontakta oss för en kostnadsfri offert på storstädning i {area}, med möjlighet till RUT-avdrag.",
    ],
  },
  {
    slug: "tradgardsskotsel",
    keyword: "Trädgårdsskötsel",
    keywordLower: "trädgårdsskötsel",
    altKeyword: "Trädgårdshjälp",
    icon: Trees,
    rut: "yes",
    hubIntro:
      "En välskött trädgård tar tid – särskilt under växtsäsongen. Vi sköter gräsklippning, häckklippning, ogräsrensning och lövräfsning åt villaägare och föreningar i Blekinge, Kalmar län och Växjö, som säsongsavtal eller enstaka insatser. Privatpersoner betalar halva arbetskostnaden med RUT-avdrag.",
    metaTemplates: [
      "Trädgårdsskötsel i {area} – gräsklippning, häckklippning, ogräsrensning och lövräfsning. Säsongsavtal eller enstaka insats, med RUT-avdrag. Begär offert!",
      "Trädgårdshjälp i {area} och {district}: vi klipper gräs och häck, rensar rabatter och forslar bort avfallet. Halva arbetskostnaden med RUT. Få offert idag.",
      "Slipp trädgårdsarbetet i {area}. Vi sköter gräsmatta, häckar och rabatter hela säsongen med egna redskap och RUT-avdrag för privatpersoner. Kontakta oss!",
    ],
    shortDesc:
      "Vi sköter din trädgård i {area} året runt – gräsklippning, häckklippning, ogräsrensning och mer, med RUT-avdrag för privatpersoner.",
    subServices: [
      {
        title: "Gräsklippning",
        desc: "Regelbunden gräsklippning i {area}, veckovis eller varannan vecka under växtsäsongen.",
      },
      {
        title: "Häckklippning",
        desc: "Vi klipper och formar häckar så att trädgården i {area} håller sig fin och välskött.",
      },
      {
        title: "Ogräsrensning",
        desc: "Vi rensar rabatter och gångar från ogräs så att trädgården ser vårdad ut.",
      },
      {
        title: "Lövräfsning och städning",
        desc: "Löv, kvistar och trädgårdsavfall samlas ihop och forslas bort efter behov.",
      },
      {
        title: "Säsongsanpassad skötsel",
        desc: "Vi anpassar insatserna efter årstid – från vårstädning till höstens lövräfsning i {area}.",
      },
      {
        title: "RUT-avdrag",
        desc: "Som privatperson kan du använda RUT-avdrag på trädgårdsarbete. Vi sköter ansökan åt dig.",
      },
    ],
    faqPool: [
      {
        q: "Vilka trädgårdstjänster erbjuder ni i {area}?",
        a: "Vi erbjuder gräsklippning, häckklippning, ogräsrensning, lövräfsning och allmän trädgårdsskötsel i {area}.",
      },
      {
        q: "Kan jag använda RUT-avdrag på trädgårdsarbete?",
        a: "Ja, som privatperson kan du använda RUT-avdrag på trädgårdsskötsel som gräsklippning och häckklippning. Vi hanterar ansökan.",
      },
      {
        q: "Hur ofta kommer ni och klipper gräset?",
        a: "Vanligast är veckovis eller varannan vecka under säsong, men vi anpassar oss efter ditt behov och din tomt i {area}.",
      },
      {
        q: "Tar ni med egna redskap?",
        a: "Ja, vi har med oss den utrustning som behövs för gräsklippning, häckklippning och trädgårdsstädning.",
      },
      {
        q: "Kan ni hjälpa till med en enstaka insats, till exempel inför sommaren?",
        a: "Absolut, vi tar både löpande skötselavtal och enstaka insatser i {area}, till exempel en vårstädning av trädgården.",
      },
      {
        q: "Sköter ni även större tomter och flerfamiljshus?",
        a: "Ja, vi hjälper både privatpersoner med villaträdgårdar och bostadsrättsföreningar med gemensamma grönytor i {area}.",
      },
      {
        q: "Vad gör ni med trädgårdsavfallet?",
        a: "Vi forslar bort löv, gräs och grenar efter arbetet, om inte annat önskas.",
      },
      {
        q: "Hur bokar jag trädgårdsskötsel i {area}?",
        a: "Fyll i formuläret på sidan eller ring oss direkt. Vi återkommer med en offert anpassad efter din trädgård i {area}.",
      },
    ],
    heroTemplates: [
      "Vi sköter din trädgård i {area} året runt – gräsklippning, häckklippning och ogräsrensning, med RUT-avdrag för privatpersoner.",
      "Slipp trädgårdsarbetet i {area} och lämna gräsmattan, häcken och rabatterna till oss.",
      "Trädgårdsskötsel i {area} anpassad efter säsong – från vårens första klippning till höstens lövräfsning.",
      "En välskött trädgård i {area} utan att du själv behöver lägga tid på det. Vi tar hand om det löpande underhållet.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städ- och trädgårdsföretag grundat av Angelica, med stor passion för ordning både inne och ute. Vi är verksamma i {area} och sköter trädgårdar hos privatpersoner och föreningar. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Utöver städning erbjuder Belganet Städ och Allservice trädgårdsskötsel i {area}, med samma noggrannhet som präglar Angelicas övriga tjänster.",
      "Att hålla efter en trädgård tar tid som många i {area} hellre lägger på annat. Därför finns vårt team här, med Angelica i spetsen.",
      "Belganet Städ och Allservice kombinerar städ och trädgård under ett tak i {area} – praktiskt för dig som vill ha allt samlat hos en leverantör.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din trädgårdsskötsel i {area} på bästa sätt.",
      "Boka trädgårdsskötsel i {area} redan idag – vi återkommer med en kostnadsfri offert inom 24 timmar.",
      "Vill du slippa gräsklippningen i sommar? Skicka en förfrågan så tar vi hand om trädgården i {area}.",
      "Kontakta oss för en offert på trädgårdsskötsel i {area}, som löpande abonnemang eller enstaka insats.",
    ],
  },
  {
    slug: "byggstadning",
    keyword: "Byggstädning",
    keywordLower: "byggstädning",
    altKeyword: "Byggstäd",
    icon: HardHat,
    rut: "partial",
    hubIntro:
      "Efter en renovering eller ett nybygge sitter byggdammet överallt – i skåp, ventilationsdon och fönsterkarmar. Vi utför grovstädning under projektet och finstädning inför besiktning och inflyttning i Blekinge, Kalmar län och Växjö, åt både byggföretag och privatpersoner.",
    metaTemplates: [
      "Byggstädning i {area} efter renovering eller nybygge – grovstäd och finstäd inför besiktning. För byggföretag och privatpersoner. Begär en offert idag!",
      "Byggstäd i {area} och {district}: vi tar bort byggdamm, färgstänk och tejprester från golv, skåp och fönster. Anpassat efter projektet. Få offert idag.",
      "Snart klara med renoveringen i {area}? Vi bokar in slutstädningen i tid, så att bostaden eller lokalen är redo att användas. Kostnadsfri offert inom 24 h.",
    ],
    shortDesc:
      "Grundlig byggstädning i {area} efter renovering eller nybygge – vi tar hand om damm, rester och slutstädning.",
    subServices: [
      {
        title: "Grovstädning",
        desc: "Vi tar hand om det första skiktet av byggdamm, spill och emballage efter arbetet i {area}.",
      },
      {
        title: "Finstädning",
        desc: "Noggrann rengöring av alla ytor, inklusive fönster, lister och golv inför inflyttning.",
      },
      {
        title: "Byggdamm i skåp och ventilation",
        desc: "Vi rengör insidan av skåp och synliga ventilationsdon som ofta samlar byggdamm.",
      },
      {
        title: "Fönster och glaspartier",
        desc: "Fönster putsas fria från färgstänk, tejprester och byggdamm.",
      },
      {
        title: "Anpassad efter projektets storlek",
        desc: "Vi städar allt från enskilda rum till hela nybyggda fastigheter i {area}.",
      },
      {
        title: "RUT-avdrag för privatpersoner",
        desc: "Vid privat renovering kan RUT-avdrag ofta användas på slutstädningen. Vi hjälper dig kontrollera vad som gäller.",
      },
    ],
    faqPool: [
      {
        q: "Vad ingår i en byggstädning i {area}?",
        a: "Byggstädning omfattar grovstädning av byggdamm och rester samt en noggrann finstädning av alla ytor, fönster och golv.",
      },
      {
        q: "När i projektet bör jag boka byggstädning?",
        a: "Boka gärna städningen i {area} så snart ni har ett ungefärligt slutdatum, så planerar vi in tiden i god tid.",
      },
      {
        q: "Städar ni efter både renovering och nybyggnation?",
        a: "Ja, vi utför byggstädning både efter mindre renoveringar och efter nybyggda bostäder och lokaler i {area}.",
      },
      {
        q: "Kan RUT-avdrag användas på byggstädning?",
        a: "Vid privat renovering kan RUT-avdrag ofta tillämpas på slutstädningen. Hör av dig så går vi igenom vad som gäller för dig i {area}.",
      },
      {
        q: "Hur hanterar ni grovt byggdamm?",
        a: "Vi har rätt utrustning för att hantera byggdamm effektivt, inklusive dammsugare anpassade för grövre material.",
      },
      {
        q: "Kan ni städa löpande under ett längre byggprojekt?",
        a: "Ja, vi kan boka in återkommande grovstädning under pågående projekt i {area}, och en avslutande finstädning när arbetet är klart.",
      },
      {
        q: "Ingår fönsterputs i byggstädningen?",
        a: "Ja, fönster och glaspartier ingår i vår slutstädning så att färgstänk och byggdamm försvinner helt.",
      },
      {
        q: "Hur bokar jag byggstädning i {area}?",
        a: "Fyll i formuläret på sidan eller ring oss direkt. Vi återkommer med en offert anpassad efter projektets omfattning.",
      },
    ],
    heroTemplates: [
      "Vi utför grundlig byggstädning i {area} efter renovering eller nybygge – redo för besiktning och inflyttning.",
      "Byggdamm i varje skrymsle? Vi tar hand om slutstädningen i {area} så att projektet blir klart på riktigt.",
      "Byggstädning i {area} anpassad efter projektets storlek – från enskilda rum till hela fastigheter.",
      "Låt oss sköta finstädningen efter era hantverkare i {area}, så att lokalen eller bostaden är redo att användas.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder byggstädning av högsta kvalitet till privatpersoner och företag. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Byggstädning kräver tålamod och rätt utrustning. Angelica och teamet i {area} har erfarenheten som krävs för ett fläckfritt resultat.",
      "Belganet Städ och Allservice hjälper hantverkare, byggherrar och privatpersoner i {area} med slutstädningen efter avslutat projekt.",
      "Vi vet att sista steget efter en renovering i {area} ofta glöms bort i tidsplanen. Därför finns vi här för att ta hand om byggstädningen professionellt.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din byggstädning i {area} på bästa sätt.",
      "Boka byggstädning i {area} redan idag – vi återkommer med en offert anpassad efter projektets omfattning.",
      "Snart klara med renoveringen? Skicka en förfrågan så bokar vi in slutstädningen i {area} i tid.",
      "Kontakta oss för en kostnadsfri offert på byggstädning i {area}, oavsett projektets storlek.",
    ],
  },
  {
    slug: "visningsstadning",
    keyword: "Visningsstädning",
    keywordLower: "visningsstädning",
    altKeyword: "Visningsstäd",
    icon: KeyRound,
    rut: "yes",
    hubIntro:
      "Första intrycket avgör mycket vid en bostadsförsäljning. Vi visningsstädar lägenheter och villor i Blekinge, Kalmar län och Växjö inför fotografering och visning, med extra fokus på kök, badrum och fönster – bokat efter mäklarens tidsplan och med RUT-avdrag för dig som säljer ditt eget hem.",
    metaTemplates: [
      "Visningsstädning i {area} inför fotografering och visning – extra fokus på kök, badrum och fönster. Efter mäklarens schema, med RUT-avdrag. Begär offert!",
      "Ska du sälja bostaden i {area} eller {district}? Vi visningsstädar så att hemmet gör bästa möjliga intryck på spekulanter. RUT-avdrag på fakturan. Få offert.",
      "Visningsstäd i {area} med kort varsel – vi gör bostaden ljus, fräsch och redo för bilder och visning. Halva arbetskostnaden med RUT-avdrag. Kontakta oss!",
    ],
    shortDesc:
      "Vi förbereder bostaden i {area} inför visning, så att den gör bästa möjliga intryck på spekulanter.",
    subServices: [
      {
        title: "Helhetsintryck inför visning",
        desc: "Vi städar hela bostaden i {area} med fokus på de detaljer som spekulanter lägger märke till.",
      },
      {
        title: "Kök och badrum i fokus",
        desc: "Kök och badrum får extra uppmärksamhet, eftersom de ofta avgör helhetsintrycket vid en visning.",
      },
      {
        title: "Fönsterputs",
        desc: "Rena, klara fönster släpper in mer ljus och gör bostaden mer inbjudande på bilder och vid visning.",
      },
      {
        title: "Undanplockning och ytstädning",
        desc: "Vi torkar av ytor och ser till att bostaden känns luftig och välstädad inför fotografering och visning.",
      },
      {
        title: "Anpassad tidsplan",
        desc: "Vi bokar in städningen så att den ligger nära inpå visningsdatumet i {area}.",
      },
      {
        title: "RUT-avdrag",
        desc: "Som privatperson kan du använda RUT-avdrag på visningsstädning. Vi sköter ansökan åt dig.",
      },
    ],
    faqPool: [
      {
        q: "Vad ingår i en visningsstädning i {area}?",
        a: "Vi städar hela bostaden med fokus på kök, badrum och de ytor som syns tydligast vid fotografering och visning.",
      },
      {
        q: "Hur nära visningsdatumet bör städningen ske?",
        a: "Vi rekommenderar att boka städningen i {area} så nära visningen som möjligt, gärna samma dag eller dagen innan.",
      },
      {
        q: "Kan ni städa inför både fotografering och den fysiska visningen?",
        a: "Ja, många kunder i {area} bokar en städning inför fotografering och en uppfräschning inför själva visningstillfället.",
      },
      {
        q: "Kan jag använda RUT-avdrag på visningsstädning?",
        a: "Ja, som privatperson kan du använda RUT-avdrag på visningsstädning i {area}. Vi hanterar ansökan direkt med Skatteverket.",
      },
      {
        q: "Ingår fönsterputs i visningsstädningen?",
        a: "Fönsterputs kan läggas till som tillägg för att bostaden ska kännas extra ljus och inbjudande vid visningen.",
      },
      {
        q: "Kan ni städa även om bostaden fortfarande är möblerad?",
        a: "Ja, vi anpassar städningen efter att bostaden i {area} vanligtvis är möblerad och bebodd fram till försäljning.",
      },
      {
        q: "Hjälper ni även till med enklare undanplockning?",
        a: "Vi torkar av och städar ytor grundligt, men för större undanplockning eller styling rekommenderar vi att komplettera med en homestylist.",
      },
      {
        q: "Hur bokar jag visningsstädning i {area}?",
        a: "Fyll i formuläret på sidan eller ring oss direkt. Vi återkommer snabbt med en offert anpassad efter ditt visningsdatum.",
      },
    ],
    heroTemplates: [
      "Vi förbereder bostaden i {area} inför visning, så att den gör bästa möjliga intryck på spekulanter.",
      "En nystädad bostad säljer bättre. Vi utför visningsstädning i {area} inför fotografering och visning.",
      "Låt oss ta hand om visningsstädningen i {area} – med fokus på kök, badrum och de detaljer som märks mest.",
      "Visningsstädning i {area} anpassad efter mäklarens och ditt tidsschema, ofta med kort varsel.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder visningsstädning av högsta kvalitet till privatpersoner. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Belganet Städ och Allservice hjälper säljare i {area} att göra ett så bra intryck som möjligt inför visning, med Angelicas öga för detaljer.",
      "Vi vet att en försäljningsprocess i {area} innebär många moment. Låt oss ta ansvar för åtminstone städningen inför visningen.",
      "Angelica och teamet ser till att bostaden i {area} känns fräsch och välkomnande, oavsett om det gäller fotografering eller den fysiska visningen.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi din visningsstädning i {area} på bästa sätt.",
      "Boka visningsstädning i {area} redan idag – vi anpassar oss efter mäklarens tidsplan.",
      "Har du ett visningsdatum inbokat? Skicka en förfrågan så ser vi till att bostaden i {area} är redo.",
      "Kontakta oss för en kostnadsfri offert på visningsstädning i {area}, gärna med kort varsel.",
    ],
  },
  {
    slug: "dodsbostadning",
    keyword: "Dödsbostädning",
    keywordLower: "dödsbostädning",
    altKeyword: "Städning av dödsbo",
    icon: HeartHandshake,
    rut: "no",
    hubIntro:
      "Att ta hand om ett dödsbo är ofta tungt, både känslomässigt och praktiskt. Vi hjälper anhöriga i Blekinge, Kalmar län och Växjö med en varsam och grundlig städning av bostaden inför överlämning, försäljning eller uthyrning – i den takt som känns rätt för familjen och med en tydlig offert innan vi börjar.",
    metaTemplates: [
      "Dödsbostädning i {area} – varsam och grundlig städning inför överlämning, visning eller försäljning, i den takt som passar familjen. Kostnadsfri offert.",
      "Städning av dödsbo i {area} och {district}. Vi möter anhöriga med respekt och lyhördhet och lämnar alltid en tydlig offert innan vi börjar. Kontakta oss.",
      "Behöver ni hjälp med ett dödsbo i {area}? Vi städar bostaden grundligt och respektfullt inför nästa steg, när det passar er. Vi svarar inom 24 timmar.",
    ],
    shortDesc:
      "Varsam och respektfull städning av dödsbo i {area}, i den takt och omfattning som passar familjen.",
    subServices: [
      {
        title: "Varsam och respektfull hantering",
        desc: "Vi utför städningen av dödsboet i {area} med respekt och lyhördhet för anhörigas önskemål.",
      },
      {
        title: "Grundlig slutstädning",
        desc: "Bostaden städas noggrant inför överlämning, försäljning eller uthyrning.",
      },
      {
        title: "Samordning med anhöriga",
        desc: "Vi anpassar tempo och omfattning efter vad familjen känner sig redo för.",
      },
      {
        title: "Fönsterputs vid behov",
        desc: "Vi kan komplettera städningen med fönsterputs inför visning eller överlämning.",
      },
      {
        title: "Flexibla tider",
        desc: "Vi bokar in städningen i {area} när det passar familjen, utan onödig stress.",
      },
      {
        title: "Tydlig offert innan vi börjar",
        desc: "Ni får alltid en kostnadsfri och tydlig offert, så att dödsboet vet exakt vad städningen kommer att kosta.",
      },
    ],
    faqPool: [
      {
        q: "Hur går en dödsbostädning i {area} till?",
        a: "Vi kontaktar er först för att förstå omfattning och önskemål, och utför sedan städningen varsamt och i den takt som känns rätt för familjen.",
      },
      {
        q: "Kan ni hjälpa till även om bostaden fortfarande innehåller möbler och tillhörigheter?",
        a: "Ja, vi anpassar oss efter situationen i {area} och kan städa runt kvarvarande tillhörigheter, eller efter att boet tömts.",
      },
      {
        q: "Är personalen van vid den här typen av uppdrag?",
        a: "Ja, vi förstår att det är en känslig situation och möter alltid familjen med lyhördhet och respekt.",
      },
      {
        q: "Kan RUT-avdrag användas vid dödsbostädning?",
        a: "Nej, ett dödsbo har inte rätt till RUT-avdrag för arbete som utförs efter dödsfallet. Därför lämnar vi alltid en tydlig offert för hela arbetet i {area}, så att ni vet vad det kostar innan vi börjar.",
      },
      {
        q: "Hur snabbt kan ni komma igång?",
        a: "Vi försöker vara flexibla och anpassa oss efter familjens tidsplan i {area}, oavsett om det brådskar eller inte.",
      },
      {
        q: "Kan ni städa inför en kommande visning eller försäljning av dödsboet?",
        a: "Ja, vi kan utföra en grundlig slutstädning inför visning eller överlämning till ny ägare.",
      },
      {
        q: "Vad kostar en dödsbostädning i {area}?",
        a: "Priset beror på bostadens skick och omfattning. Vi lämnar alltid en tydlig och kostnadsfri offert innan vi börjar.",
      },
      {
        q: "Hur kommer jag i kontakt med er?",
        a: "Ring, maila eller fyll i formuläret på sidan. Vi återkommer varsamt och snabbt med information om nästa steg.",
      },
    ],
    heroTemplates: [
      "Vi utför varsam och respektfull städning av dödsbo i {area}, i den takt och omfattning som passar familjen.",
      "I en svår tid tar vi hand om städningen av dödsboet i {area} – lyhört och utan onödig stress.",
      "Dödsbostädning i {area} med fokus på trygghet och respekt för både bostaden och familjens situation.",
      "Vi hjälper anhöriga i {area} att få dödsboet städat och redo för nästa steg, på det sätt som känns rätt för er.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och omtanke om människor. Vi är verksamma i {area} och hjälper familjer med dödsbostädning på ett värdigt sätt. Med oss får du en trygg, noggrann och flexibel partner i en svår tid.",
      "Belganet Städ och Allservice möter familjer i {area} med lyhördhet i samband med dödsbostädning – ett uppdrag Angelica tar på stort allvar.",
      "Vi förstår att dödsbostädning i {area} sällan handlar bara om städning, utan om att stötta anhöriga genom en process. Det försöker vi göra på bästa sätt.",
      "Angelica och teamet anpassar sig efter varje familjs behov i {area}, med respekt för både hemmet och situationen.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och svarar snabbt. Hör av dig så hjälper vi er med dödsbostädningen i {area} på ett tryggt sätt.",
      "Kontakta oss när ni är redo – vi anpassar oss efter er tidsplan för dödsbostädning i {area}.",
      "Behöver ni hjälp med ett dödsbo i {area}? Skicka en förfrågan så återkommer vi lyhört med information och en offert.",
      "Vi finns här när ni behöver oss. Hör av er för en kostnadsfri och förutsättningslös offert på dödsbostädning i {area}.",
    ],
  },
  {
    slug: "trappstadning",
    keyword: "Trappstädning",
    keywordLower: "trappstädning",
    altKeyword: "Trapphusstädning",
    icon: Footprints,
    rut: "no",
    hubIntro:
      "Ett rent trapphus höjer trivseln för alla som bor i huset. Vi utför trappstädning åt bostadsrättsföreningar och fastighetsägare i Blekinge, Kalmar län och Växjö – trapphus, entréer, hissar och gemensamma utrymmen – enligt ett fast schema och ett tydligt avtal med styrelsen.",
    metaTemplates: [
      "Trappstädning i {area} för bostadsrättsföreningar och fastighetsägare – trapphus, entré, hiss och tvättstuga enligt fast schema. Begär kostnadsfri offert!",
      "Trapphusstädning i {area} och {district} med fast avtal och kontaktperson för styrelsen. Vi städar varje vecka eller oftare. Få offert inom 24 timmar.",
      "Söker er förening trappstädning i {area}? Vi håller trapphus och gemensamma ytor rena med tydliga rutiner och samma städare varje gång. Kontakta oss idag!",
    ],
    shortDesc:
      "Regelbunden trappstädning i {area} för bostadsrättsföreningar och fastighetsägare, med tydligt schema.",
    subServices: [
      {
        title: "Trapphus och entré",
        desc: "Vi städar trapphus, entréer och hissar i {area} enligt ett fast schema.",
      },
      {
        title: "Fönster i gemensamma utrymmen",
        desc: "Fönster i trapphus och entré putsas regelbundet för ett ljust och välkomnande intryck.",
      },
      {
        title: "Postfack och dörrar",
        desc: "Postfack, dörrhandtag och andra ofta berörda ytor rengörs noggrant.",
      },
      {
        title: "Golv och mattor",
        desc: "Golv moppas och entrémattor dammsugs eller skakas ur enligt behov.",
      },
      {
        title: "Fast schema för föreningen",
        desc: "Vi kommer på bestämda dagar så att styrelsen alltid vet vad som ingår och när.",
      },
      {
        title: "Anpassat avtal",
        desc: "Vi skräddarsyr frekvens och omfattning efter fastighetens storlek i {area}.",
      },
    ],
    faqPool: [
      {
        q: "Vad ingår i trappstädning i {area}?",
        a: "Vi städar trapphus, entréer, hissar, postfack och gemensamma ytor enligt ett schema som ni väljer tillsammans med oss.",
      },
      {
        q: "Hur ofta städar ni trapphuset?",
        a: "Vanligast är en till två gånger i veckan, men vi anpassar frekvensen efter fastighetens behov i {area}.",
      },
      {
        q: "Kan ni teckna avtal direkt med vår bostadsrättsförening?",
        a: "Ja, vi tecknar gärna löpande avtal med styrelser och fastighetsägare i {area} för trappstädning.",
      },
      {
        q: "Ingår fönsterputs i gemensamma utrymmen?",
        a: "Fönsterputs i trapphus och entré kan ingå i avtalet eller bokas som tillägg efter behov.",
      },
      {
        q: "Vad händer om en boende har synpunkter på städningen?",
        a: "Hör av er till oss så åtgärdar vi det snabbt. Vi vill att både styrelse och boende i {area} ska vara nöjda.",
      },
      {
        q: "Kan ni även städa källare, tvättstuga och cykelrum?",
        a: "Ja, vi kan inkludera fler gemensamma utrymmen i avtalet, till exempel källare, tvättstuga och cykelrum i {area}.",
      },
      {
        q: "Hur kommer vi i kontakt med er som fastighetsägare eller förening?",
        a: "Fyll i formuläret eller ring oss direkt. Vi tar gärna ett möte för att gå igenom fastigheten i {area} innan vi lämnar offert.",
      },
      {
        q: "Är personalen densamma vid varje besök?",
        a: "Vi strävar efter kontinuitet så att samma person eller team ansvarar för trappstädningen i {area}.",
      },
    ],
    heroTemplates: [
      "Vi utför regelbunden trappstädning i {area} för bostadsrättsföreningar och fastighetsägare, enligt ett tydligt schema.",
      "Ett rent och välkomnande trapphus i {area} gör skillnad för alla boende. Vi sköter städningen löpande.",
      "Trappstädning i {area} anpassad efter fastighetens storlek – trapphus, entré, hiss och gemensamma ytor.",
      "Låt oss ta hand om trapphuset i {area} med ett fast avtal och en pålitlig kontaktperson för er förening.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städföretag grundat av Angelica, med stor passion för ordning och renlighet. Vi är verksamma i {area} och erbjuder trappstädning av högsta kvalitet till bostadsrättsföreningar och fastighetsägare. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Belganet Städ och Allservice samarbetar med flera fastighetsägare och föreningar i {area}, med Angelica som ytterst ansvarig för kvaliteten.",
      "Vi vet att ett rent trapphus i {area} bidrar till trivseln för alla boende. Därför prioriterar vi kontinuitet och tydliga rutiner i varje uppdrag.",
      "Som lokal aktör i {area} känner vi till de vanligaste fastighetstyperna och kan snabbt sätta upp ett fungerande städschema för er förening.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi trappstädningen i {area} på bästa sätt.",
      "Kontakta oss för en kostnadsfri genomgång av fastigheten i {area} och ett förslag på städschema.",
      "Vill er förening ha en pålitlig leverantör för trappstädning? Skicka en förfrågan så återkommer vi inom 24 timmar.",
      "Boka ett möte om trappstädning i {area} – vi besöker gärna fastigheten innan vi lämnar offert.",
    ],
  },
  {
    slug: "fastighetsskotsel",
    keyword: "Fastighetsskötsel",
    keywordLower: "fastighetsskötsel",
    altKeyword: "Fastighetsservice",
    icon: Wrench,
    rut: "no",
    hubIntro:
      "För fastighetsägare och bostadsrättsföreningar är det enklast med en leverantör för flera behov. Vi samlar trappstädning, grönytor, snöskottning och enklare praktiska uppgifter i ett avtal för fastigheter i Blekinge, Kalmar län och Växjö – med en fast kontaktperson och insatser anpassade efter säsong.",
    metaTemplates: [
      "Fastighetsskötsel i {area} – trappstädning, grönytor, snöskottning och allservice i ett avtal. För bostadsrättsföreningar och fastighetsägare. Begär offert!",
      "Fastighetsservice i {area} och {district} med fast kontaktperson och säsongsanpassade insatser, från gräsklippning till halkbekämpning. Få offert inom 24 h.",
      "Samla städ och utemiljö hos en leverantör i {area}. Vi sköter fastighetens gemensamma ytor året om enligt ett tydligt avtal. Kontakta oss för offert idag!",
    ],
    shortDesc:
      "Praktisk fastighetsskötsel i {area} – städ, utemiljö och allservice samlat hos en leverantör för fastighetsägare.",
    subServices: [
      {
        title: "Trappstädning och gemensamma ytor",
        desc: "Vi håller trapphus, entréer och gemensamma utrymmen rena enligt schema.",
      },
      {
        title: "Utemiljö och grönytor",
        desc: "Gräsklippning, häckklippning och lövräfsning kring fastigheten i {area}.",
      },
      {
        title: "Snöskottning och halkbekämpning",
        desc: "Vid behov hjälper vi till att hålla gångar och entréer säkra under vintern.",
      },
      {
        title: "Enklare praktiska tjänster",
        desc: "Mindre allservice-uppgifter som att byta lampor eller hålla koll på gemensamma utrymmen.",
      },
      {
        title: "Fast kontaktperson",
        desc: "Ni får en tydlig kontaktperson hos oss för alla frågor som rör fastigheten.",
      },
      {
        title: "Anpassat avtal",
        desc: "Vi skräddarsyr omfattning och frekvens efter fastighetens behov i {area}.",
      },
    ],
    faqPool: [
      {
        q: "Vad innebär fastighetsskötsel hos er i {area}?",
        a: "Vi kombinerar städ, utemiljö och enklare allservice till en helhetslösning för fastighetsägare och bostadsrättsföreningar.",
      },
      {
        q: "Kan ni sköta både städ och utemiljö åt vår fastighet?",
        a: "Ja, det är precis den typen av helhetsuppdrag vi trivs bäst med i {area} – en leverantör för flera behov.",
      },
      {
        q: "Hjälper ni till med snöskottning på vintern?",
        a: "Ja, vi kan inkludera snöskottning och halkbekämpning av gångar och entréer i avtalet för fastigheter i {area}.",
      },
      {
        q: "Kan avtalet anpassas efter säsong?",
        a: "Absolut, vi anpassar insatserna efter årstid – mer fokus på utemiljö sommartid och snöskottning under vintern.",
      },
      {
        q: "Vem är vår kontaktperson om något behöver åtgärdas?",
        a: "Ni får en tydlig kontaktperson hos oss som känner till er fastighet i {area} och kan svara på frågor löpande.",
      },
      {
        q: "Passar tjänsten både mindre och större fastigheter?",
        a: "Ja, vi anpassar omfattningen efter fastighetens storlek, från mindre flerfamiljshus till större bostadsområden i {area}.",
      },
      {
        q: "Hur kommer vi igång med ett fastighetsskötselavtal?",
        a: "Fyll i formuläret eller ring oss så bokar vi ett möte för att gå igenom fastigheten i {area} och era behov.",
      },
      {
        q: "Kan vi börja med enbart en tjänst och utöka senare?",
        a: "Ja, många börjar med till exempel trappstädning i {area} och utökar sedan med utemiljö eller andra tjänster efter hand.",
      },
    ],
    heroTemplates: [
      "Vi erbjuder praktisk fastighetsskötsel i {area} – städ, utemiljö och allservice samlat hos en leverantör.",
      "En trygg samarbetspartner för er fastighet i {area}: trappstädning, grönytor och enklare praktiska tjänster.",
      "Fastighetsskötsel i {area} anpassad efter säsong, med fast kontaktperson och tydligt avtal.",
      "Låt oss ta ett helhetsgrepp om fastigheten i {area} – från trapphus till utemiljö, året om.",
    ],
    aboutTemplates: [
      "Vi på Belganet Städ och Allservice är ett lokalt städ- och serviceföretag grundat av Angelica, med stor passion för ordning både inne och ute. Vi är verksamma i {area} och erbjuder fastighetsskötsel av högsta kvalitet till fastighetsägare och bostadsrättsföreningar. Med oss får du en trygg, noggrann och flexibel partner som alltid sätter kunden i centrum.",
      "Belganet Städ och Allservice har byggt upp ett brett utbud kring fastighetsskötsel i {area}, med Angelica som ytterst ansvarig för leveransen.",
      "Vi vet att fastighetsägare i {area} ofta behöver flera olika insatser samordnade. Därför samlar vi städ, utemiljö och allservice under ett tak.",
      "Som lokalt förankrat företag i {area} känner vi till de vanligaste utmaningarna för fastighetsägare och föreningar, och löser dem praktiskt.",
    ],
    ctaTemplates: [
      "Vi erbjuder kostnadsfri offert och snabb återkoppling. Hör av dig så löser vi fastighetsskötseln i {area} på bästa sätt.",
      "Kontakta oss för ett möte om fastighetsskötsel i {area} och ett förslag anpassat efter er fastighet.",
      "Vill ni samla städ och utemiljö hos en leverantör? Skicka en förfrågan så återkommer vi inom 24 timmar.",
      "Boka in en genomgång av fastigheten i {area} – vi lämnar en kostnadsfri offert på fastighetsskötsel.",
    ],
  },
];

export const SERVICE_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);
