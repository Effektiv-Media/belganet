import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { RevealDiv } from "./RevealDiv";

const ABOUT_POINTS = [
  "Certifierade och erfarna städare",
  "Miljögodkända rengöringsmedel",
  "RUT-avdrag för privatpersoner",
  "Flexibla städscheman",
  "Försäkrat och tryggt utfört",
  "Städ och trädgård under ett tak",
];

export function About() {
  return (
    <section id="section-4" className="relative py-24 bg-brand-navy overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-bg.jpg"
          alt="Belganet Städ och Allservice – professionell städning"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-brand-navy/95 to-brand-navy" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <RevealDiv>
            <span className="section-heading-eyebrow">Om oss</span>
            <h2 id="about-heading" className="section-heading text-white">
              Jag städar med hjärtat – varje gång
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed font-sans">
              Jag på Belganet Städ och Allservice är ett lokalt städföretag grundat
              av Angelica, med en passion för ordning, renlighet och att hjälpa
              människor i vardagen. Jag betjänar privatpersoner och företag i
              Ronneby, Karlskrona, Växjö och Kalmar.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed font-sans">
              Min styrka är min bredd – utöver professionell städning erbjuder jag
              trädgårdsservice och allehanda praktiska tjänster. Med mig får du en
              partner som tar hand om det du inte hinner, så att du kan fokusera
              på det som är viktigast för dig.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {ABOUT_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-white/80 text-sm font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </RevealDiv>

          <RevealDiv delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8 text-center">
              <span className="inline-block font-serif text-3xl font-bold text-brand-amber mb-1">
                Angelica
              </span>
              <p className="text-white/60 text-sm uppercase tracking-wider font-sans">
                Grundare &amp; städproffs
              </p>
            </div>
          </RevealDiv>
        </div>

        <RevealDiv className="text-center border-t border-white/10 pt-16">
          <span className="section-heading-eyebrow">Kontakta oss</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Kom igång idag
          </h3>
          <p className="text-white/70 mb-4 font-sans">
            Låt oss sköta städningen – du fokuserar på livet
          </p>
          <p className="text-white/50 mb-8 max-w-xl mx-auto font-sans">
            Vi erbjuder kostnadsfri offert och flexibla upplägg. Hör av dig så
            hjälper vi dig snabbt.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#section-5"
              className="px-8 py-3.5 bg-brand-amber text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber-light transition-colors"
            >
              Begär kostnadsfri offert
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-white font-medium hover:text-brand-amber transition-colors"
            >
              <Phone size={18} aria-hidden="true" />
              Ring oss direkt
            </a>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
