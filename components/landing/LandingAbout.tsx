"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

const ABOUT_POINTS = [
  "Lokalt & personligt",
  "Miljögodkänt",
  "RUT-avdrag",
  "Fullt försäkrade",
  "Flexibla tider",
  "Städ & trädgård",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

interface LandingAboutProps {
  area: string;
  about: string;
  localParagraph: string;
  nearby: { name: string; km: number; slug: string }[];
  serviceSlug: string;
}

export function LandingAbout({
  area,
  about,
  localParagraph,
  nearby,
  serviceSlug,
}: LandingAboutProps) {
  return (
    <section id="lp-about" className="py-24 bg-background" aria-labelledby="lp-about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl bg-brand-navy text-white p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-amber/15 flex items-center justify-center mb-6 border border-brand-amber/20">
              <MapPin size={22} className="text-brand-amber" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">{area} och omnejd</h3>
            <p className="text-white/70 leading-relaxed font-sans mb-8">{localParagraph}</p>

            {nearby.length > 0 && (
              <>
                <p className="text-white/45 text-xs uppercase tracking-wider mb-3 font-sans">
                  Vi städar även i närheten
                </p>
                <ul className="space-y-2" role="list">
                  {nearby.map((n) => (
                    <li key={n.name}>
                      {n.slug ? (
                        <Link
                          href={`/landningssidor/${serviceSlug}-${n.slug}`}
                          className="flex items-center justify-between text-sm text-white/70 hover:text-brand-amber transition-colors font-sans"
                        >
                          <span>{n.name}</span>
                          <span className="text-white/35">~{n.km} km</span>
                        </Link>
                      ) : (
                        <span className="flex items-center justify-between text-sm text-white/70 font-sans">
                          <span>{n.name}</span>
                          <span className="text-white/35">~{n.km} km</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-heading-eyebrow">Om oss</span>
            <h2 id="lp-about-heading" className="section-heading">
              Ditt lokala städföretag i {area}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-sans text-pretty">{about}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="list">
              {ABOUT_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
                  <span className="text-brand-navy text-sm font-medium font-sans">{point}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => scrollTo("lp-contact-form")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-brand-navy-light hover:shadow-xl hover:shadow-brand-amber/15 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Kontakta oss
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
