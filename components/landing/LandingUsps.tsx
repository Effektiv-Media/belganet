"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, BadgePercent, Clock, Phone, CheckCircle2 } from "lucide-react";
import type { Usp } from "@/content/types";

const ICONS = [Sparkles, ShieldCheck, BadgePercent, Clock, Phone, CheckCircle2];

export function LandingUsps({ usps }: { usps: Usp[] }) {
  return (
    <section id="lp-usps" className="py-24 bg-brand-surface" aria-labelledby="lp-usps-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading-eyebrow">Varför välja oss</span>
          <h2 id="lp-usps-heading" className="section-heading">
            Det lilla extra som gör skillnaden
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, i) => {
            const Icon = ICONS[i % ICONS.length]!;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background rounded-2xl p-8 border border-border hover:border-brand-amber/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-amber transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-brand-amber group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">{usp.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm">{usp.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
