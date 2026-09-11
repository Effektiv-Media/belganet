import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="section-1"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-navy"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/70 via-brand-navy/60 to-brand-navy" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="section-heading-eyebrow text-brand-amber">
            Städ &amp; Allservice i Sydsverige
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
            Jag tar hand om din
            <span className="block text-brand-amber mt-2">städning &amp; trädgård</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-8 font-sans">
            Jag på Belganet Städ och Allservice erbjuder professionell hemstäd,
            flyttstäd, kontorsstäd, fönsterputs och trädgårdsservice – alltid med
            omsorg och kvalitet i fokus.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              href="/#section-5"
              className="px-8 py-4 bg-brand-amber text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber-light transition-all hover:scale-105"
            >
              Boka kostnadsfri offert
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-white font-medium hover:text-brand-amber transition-colors"
            >
              <Phone size={18} aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <dt className="sr-only">Nöjda kunder</dt>
              <dd className="font-serif text-3xl font-bold text-white">100%</dd>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1 font-sans">
                Nöjda kunder
              </p>
            </div>
            <div>
              <dt className="sr-only">RUT-avdrag</dt>
              <dd className="font-serif text-3xl font-bold text-white">RUT</dd>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1 font-sans">
                Avdrag möjligt
              </p>
            </div>
            <div>
              <dt className="sr-only">Flexibla tider</dt>
              <dd className="font-serif text-3xl font-bold text-white">Flex</dd>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1 font-sans">
                Tider &amp; upplägg
              </p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
