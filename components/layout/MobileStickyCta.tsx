"use client";

import { Calendar } from "lucide-react";

/**
 * Fixed bottom CTA bar, mobile only. Scrolls to whichever contact section
 * exists on the current page (homepage, landing page, or ort hub each use a
 * different id), falling back to navigating to the homepage's contact
 * section on pages with no on-page contact form (guides, index pages).
 */
const CONTACT_SECTION_IDS = ["section-5", "lp-contact", "hub-contact"];

export function MobileStickyCta() {
  function handleClick() {
    for (const id of CONTACT_SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.location.href = "/#section-5";
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden bg-brand-navy/95 backdrop-blur-md border-t border-white/10 px-4 pt-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-amber text-white font-bold text-sm uppercase tracking-wider rounded-xl active:scale-95 transition-transform"
      >
        <Calendar size={17} aria-hidden="true" />
        Boka städning
      </button>
    </div>
  );
}
