"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        aria-expanded={open}
        className="p-2 text-white"
      >
        {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 shadow-xl">
          <nav aria-label="Mobilnavigation" className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-white/80 hover:text-white uppercase tracking-wider border-b border-white/5 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#section-5"
              onClick={() => setOpen(false)}
              className="mt-4 px-5 py-2.5 bg-brand-amber text-white text-sm font-bold uppercase tracking-wider rounded-lg text-center"
            >
              Boka städning
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
