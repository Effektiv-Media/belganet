import Link from "next/link";
import { BadgeCheck, Clock, Leaf, ShieldCheck, Percent, HeartHandshake } from "lucide-react";
import { RevealDiv } from "./RevealDiv";

const USPS = [
  {
    icon: BadgeCheck,
    title: "Noggrann & professionell",
    desc: "Jag städar med hög precision och använder beprövade metoder för att du alltid ska vara nöjd med resultatet.",
  },
  {
    icon: Clock,
    title: "Flexibla tider",
    desc: "Jag anpassar mig efter ditt schema. Oavsett om du behöver mig varje vecka eller vid enstaka tillfällen ordnar jag det.",
  },
  {
    icon: Leaf,
    title: "Miljövänliga produkter",
    desc: "Jag använder miljögodkända rengöringsmedel som är skonsamma mot både människor och miljö.",
  },
  {
    icon: ShieldCheck,
    title: "Pålitlig & försäkrad",
    desc: "Alla uppdrag utförs av erfaren personal och jag är fullt försäkrad – du kan luta dig tillbaka med trygghet.",
  },
  {
    icon: Percent,
    title: "RUT-avdrag tillgängligt",
    desc: "Jag hjälper dig med RUT-avdrag för privatpersoner, vilket gör städtjänsten halva priset.",
  },
  {
    icon: HeartHandshake,
    title: "Personlig service",
    desc: "Jag bryr mig om varje kund och ser till att bygga ett långsiktigt och förtroendebaserat samarbete.",
  },
];

export function WhyUs() {
  return (
    <section id="section-2" className="py-24 bg-brand-surface" aria-labelledby="whyus-heading">
      <div className="max-w-7xl mx-auto px-6">
        <RevealDiv className="text-center mb-16">
          <span className="section-heading-eyebrow">Varför välja oss</span>
          <h2 id="whyus-heading" className="section-heading">
            Det lilla extra som gör skillnaden
          </h2>
          <p className="section-subheading">
            Jag på Belganet Städ och Allservice sätter alltid kunden i centrum. Här
            är anledningarna till att mina kunder väljer att stanna kvar.
          </p>
        </RevealDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USPS.map((usp, i) => (
            <RevealDiv key={usp.title} delay={i * 0.08}>
              <div className="h-full p-8 rounded-2xl bg-white border border-border hover:border-brand-amber/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-amber/10 flex items-center justify-center mb-5">
                  <usp.icon size={22} className="text-brand-amber" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-2">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {usp.desc}
                </p>
              </div>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">
            Redo för ett fräschare hem eller kontor?
          </h3>
          <p className="text-muted-foreground mb-6 font-sans">
            Kontakta oss idag – vi återkommer snabbt med ett personligt erbjudande.
          </p>
          <Link
            href="/#section-5"
            className="inline-block px-8 py-3.5 bg-brand-navy text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-navy-light transition-colors"
          >
            Begär offert
          </Link>
        </RevealDiv>
      </div>
    </section>
  );
}
