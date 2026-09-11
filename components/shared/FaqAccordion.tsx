"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/content/types";

/**
 * Reusable accordion used by every FAQ section. Every answer is ALWAYS
 * rendered into the server HTML (collapsed with a CSS grid-rows
 * transition), so crawlers and AI answer engines can read it and the
 * FAQPage JSON-LD matches visible on-page content. Mounting answers only
 * while open would leave them out of the HTML entirely.
 */
export function FaqAccordion({ faqs, idPrefix }: { faqs: Faq[]; idPrefix: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const answerId = `${idPrefix}-answer-${i}`;
        const buttonId = `${idPrefix}-question-${i}`;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-brand-amber/60 shadow-lg shadow-brand-amber/8"
                : "border-border hover:border-brand-navy/25"
            }`}
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className="font-serif text-lg font-semibold text-brand-navy leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-brand-amber text-white rotate-180" : "bg-brand-surface text-brand-navy"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed font-sans border-t border-border/60 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
