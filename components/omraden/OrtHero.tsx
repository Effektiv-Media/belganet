"use client";

import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import type { Ort } from "@/content/types";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function OrtHero({ ort }: { ort: Ort }) {
  return (
    <section
      id="hub-hero"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
      aria-label={`Städfirma i ${ort.name}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-br from-brand-navy/92 via-brand-navy/68 to-brand-navy/88"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand-amber text-sm uppercase tracking-widest font-medium font-sans mb-4 block">
          {ort.kommun} · {ort.lan}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance mb-6">
          Städfirma i {ort.name}
        </h1>
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          Hemstäd, flyttstäd, kontorsstäd, fönsterputs, trädgårdsskötsel och mer –
          Belganet Städ och Allservice finns i {ort.name} och omnejd.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => scrollTo("hub-contact-form")}
            className="px-8 py-4 bg-brand-amber text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-brand-amber-light transition-all duration-300 hover:scale-105"
          >
            Begär kostnadsfri offert
          </button>
          <a
            href={BUSINESS.phoneHref}
            className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white/15 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
