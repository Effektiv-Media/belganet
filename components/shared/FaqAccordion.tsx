"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Faq } from "@/content/types";

/** Reusable accordion used by the homepage FAQ and every landing/guide FAQ
 * section. Renders plain, always-in-the-DOM text for crawlers (good for
 * FAQPage rich results) while animating the open/close visually. */
export function FaqAccordion({ faqs, idPrefix }: { faqs: Faq[]; idPrefix: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-brand-amber/60 shadow-lg shadow-brand-amber/8"
                : "border-border hover:border-brand-navy/25"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-answer-${i}`}
            >
              <span className="font-serif text-lg font-semibold text-brand-navy leading-snug">
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isOpen ? "bg-brand-amber text-white" : "bg-brand-surface text-brand-navy"
                }`}
                aria-hidden="true"
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${idPrefix}-answer-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-sans border-t border-border/60 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
