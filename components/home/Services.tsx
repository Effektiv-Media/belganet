import Image from "next/image";
import Link from "next/link";
import { RevealDiv } from "./RevealDiv";

const HOME_SERVICES = [
  {
    slug: "hemstad",
    image: "/images/service-hemstad.jpg",
    alt: "Hemstäd",
    title: "Hemstäd",
    desc: "Jag erbjuder regelbunden hemstädning anpassad efter dina behov – veckovis, varannan vecka eller månadsvis. Med RUT-avdrag blir det ett prisvärt lyft för vardagen.",
  },
  {
    slug: "flyttstad",
    image: "/images/service-flyttstad.jpg",
    alt: "Flyttstäd",
    title: "Flyttstäd",
    desc: "Jag utför noggrann flyttstädning som uppfyller hyresvärdens krav. Jag tar hand om allt – från kök och badrum till fönster och köksfläkt.",
  },
  {
    slug: "kontorsstad",
    image: "/images/service-kontorsstad.jpg",
    alt: "Kontorsstäd",
    title: "Kontorsstäd",
    desc: "Jag håller er arbetsplats ren, fräsch och välkomnande. Jag anpassar städschema efter era öppettider och behov.",
  },
  {
    slug: "fonsterputs",
    image: "/images/service-fonsterputs.jpg",
    alt: "Fönsterputs",
    title: "Fönsterputs",
    desc: "Blanka och klara fönster förändrar hela intrycket av ett rum. Jag putsar både insida och utsida med professionella metoder.",
  },
  {
    slug: "tradgardsskotsel",
    image: "/images/service-tradgard.jpg",
    alt: "Trädgård",
    title: "Trädgårdsservice",
    desc: "Jag hjälper dig hålla trädgården i toppskick – gräsklippning, häckklippning, ogräsrensning, lövräfsning och mer. Anpassas helt efter säsong och önskemål.",
  },
  {
    slug: "stadfirma",
    image: "/images/service-allservice.jpg",
    alt: "Allservice",
    title: "Allservice & specialstäd",
    desc: "Utöver städ erbjuder jag ett brett utbud av tjänster – storstädning, byggstäd, markarbeten och andra praktiska sysslor. Hör av dig så löser jag det.",
  },
];

export function Services() {
  return (
    <section id="section-3" className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <RevealDiv className="text-center mb-16">
          <span className="section-heading-eyebrow">Våra tjänster</span>
          <h2 id="services-heading" className="section-heading">
            Allt du behöver – under ett tak
          </h2>
          <p className="section-subheading">
            Jag erbjuder ett komplett utbud av städ- och servicetjänster för
            privatpersoner och företag i Sydsverige.
          </p>
        </RevealDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOME_SERVICES.map((s, i) => (
            <RevealDiv key={s.slug} delay={i * 0.06}>
              <div className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-5 flex-1">
                    {s.desc}
                  </p>
                  <Link
                    href={`/landningssidor/${s.slug}-ronneby`}
                    className="text-brand-amber font-semibold text-sm uppercase tracking-wider hover:text-brand-amber-light transition-colors self-start"
                  >
                    Begär offert →
                  </Link>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
