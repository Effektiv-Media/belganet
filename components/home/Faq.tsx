import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { RevealDiv } from "./RevealDiv";

export const HOME_FAQS = [
  {
    q: "Vad ingår i en hemstädning?",
    a: "I vår hemstädning ingår dammsugning och moppning av alla golv, avtorkning av ytor, städning av kök (spis, bänkar, handfat), badrum och toalett. Vi anpassar städningen efter dina önskemål och bostadens behov.",
  },
  {
    q: "Kan jag använda RUT-avdrag?",
    a: "Ja! Som privatperson har du rätt till RUT-avdrag på hushållsnära tjänster som hemstäd, fönsterputs och trädgårdsarbeten. Vi hanterar avdraget direkt med Skatteverket så att du bara betalar halva priset.",
  },
  {
    q: "Hur bokar jag en städning?",
    a: "Du bokar enkelt via vårt kontaktformulär här på sidan, eller genom att ringa eller maila oss direkt. Vi återkommer inom 24 timmar med en offert och förslag på tider.",
  },
  {
    q: "Vilka områden täcker ni?",
    a: "Vi är verksamma i Ronneby, Karlskrona, Växjö och Kalmar – och fler orter i Blekinge, Kalmar och Kronobergs län: Karlshamn, Sölvesborg, Olofström, Nybro, Emmaboda och Oskarshamn. Är du osäker på om vi täcker ditt område – hör av dig så berättar vi mer.",
  },
  {
    q: "Vad krävs av en flyttstädning?",
    a: "En godkänd flyttstädning inkluderar rengöring av alla utrymmen inklusive insidan av skåp, kylskåp, ugn och frys, badrum och toalett, fönster och karmar, samt golv och tak. Vi ser till att allt uppfyller hyresvärdens krav.",
  },
  {
    q: "Erbjuder ni trädgårdsarbeten?",
    a: "Ja, vi erbjuder ett brett utbud av trädgårdsservice – gräsklippning, häckklippning, ogräsrensning, lövräfsning och mer. Vi anpassar tjänsten efter säsong och dina önskemål. Kontakta oss för en offert.",
  },
];

export function Faq() {
  return (
    <section id="section-4b" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <RevealDiv className="text-center mb-16">
          <span className="section-heading-eyebrow">Vanliga frågor</span>
          <h2 id="faq-heading" className="section-heading">
            Frågor &amp; svar
          </h2>
          <p className="section-subheading">
            Här samlar vi de vanligaste frågorna vi får. Hittar du inte svar på
            din fråga – kontakta oss direkt!
          </p>
        </RevealDiv>

        <RevealDiv delay={0.1}>
          <FaqAccordion faqs={HOME_FAQS} idPrefix="home-faq" />
        </RevealDiv>
      </div>
    </section>
  );
}
