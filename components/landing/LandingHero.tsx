"use client";

import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const STATS = [
  { value: "100%", label: "Nöjda kunder" },
  { value: "RUT", label: "Avdrag möjligt" },
  { value: "Flex", label: "Tider & upplägg" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function LandingHero({ h1, heroSubheading }: { h1: string; heroSubheading: string }) {
  return (
    <section
      id="lp-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label={h1}
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
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-amber to-transparent"
        aria-hidden="true"
      />
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-linear-to-r from-transparent to-brand-amber" aria-hidden="true" />
          <span className="text-brand-amber text-sm uppercase tracking-widest font-medium font-sans">
            Belganet Städ och Allservice
          </span>
          <span className="h-px w-10 bg-linear-to-l from-transparent to-brand-amber" aria-hidden="true" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance mb-6">
          {h1}
        </h1>
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-pretty font-sans">
          {heroSubheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => scrollTo("lp-contact-form")}
            className="px-8 py-4 bg-brand-amber text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-brand-amber-light hover:shadow-xl hover:shadow-brand-amber/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Begär kostnadsfri offert
          </button>
          <a
            href={BUSINESS.phoneHref}
            className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white/15 hover:border-white/60 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-0 max-w-sm mx-auto">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center px-4 relative">
              {i > 0 && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/20"
                  aria-hidden="true"
                />
              )}
              <div className="font-serif text-3xl font-bold text-brand-amber">{stat.value}</div>
              <div className="text-white/55 text-xs uppercase tracking-wider mt-1 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <button
        type="button"
        onClick={() => scrollTo("lp-services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-brand-amber transition-colors animate-bounce"
        aria-label="Scrolla ned"
      >
        <ChevronDown size={32} aria-hidden="true" />
      </button>
    </section>
  );
}
