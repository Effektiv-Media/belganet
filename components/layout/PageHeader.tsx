"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export interface PageHeaderNavItem {
  id: string;
  label: string;
}

interface PageHeaderProps {
  navItems: PageHeaderNavItem[];
  /** Element id on the current page to scroll to when clicking "Boka
   * städning". Ignored if `ctaHref` is provided. */
  ctaSectionId?: string;
  /** Use instead of `ctaSectionId` on pages with no on-page contact section
   * (index/hub pages) — renders the CTA as a normal link instead. */
  ctaHref?: string;
}

/**
 * The header used on every page other than the homepage (landing pages, ort
 * hubs, guides). The logo returns to "/"; nav items scroll to sections
 * within the current page — matching the original landing-page header,
 * which used the same in-page scroll-button pattern.
 */
export function PageHeader({ navItems, ctaSectionId, ctaHref }: PageHeaderProps) {
  const [open, setOpen] = useState(false);

  function scrollTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const CtaButton = ({ className }: { className: string }) =>
    ctaHref ? (
      <Link href={ctaHref} className={className} onClick={() => setOpen(false)}>
        Boka städning
      </Link>
    ) : (
      <button type="button" onClick={() => scrollTo(ctaSectionId!)} className={className}>
        Boka städning
      </button>
    );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-md shadow-xl shadow-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link href="/" aria-label="Tillbaka till startsidan">
          <Image
            src="/logo.jpg"
            alt="Belganet Städ och Allservice"
            width={140}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Sidnavigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
          <CtaButton className="ml-2 px-5 py-2.5 bg-brand-amber text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-brand-amber-light transition-all hover:scale-105 active:scale-95" />
        </nav>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-expanded={open}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {open && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 shadow-xl">
            <nav aria-label="Mobilnavigation" className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="py-3 text-left text-sm font-medium text-white/80 hover:text-white uppercase tracking-wider border-b border-white/5 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <CtaButton className="mt-4 px-5 py-2.5 bg-brand-amber text-white text-sm font-bold uppercase tracking-wider rounded-lg text-center" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
