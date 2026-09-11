import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/site";
import { MobileNav } from "./MobileNav";

/** The homepage header — fixed, with a top contact bar and the site-wide
 * crawlable navigation (hubs + homepage sections). Visual design matches
 * the original site's header. */
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-brand-navy/80 backdrop-blur-sm border-b border-white/5">
      <div className="border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-end gap-6">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-amber transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>
          <a
            href={BUSINESS.emailHref}
            className="text-sm text-white/70 hover:text-brand-amber transition-colors"
          >
            {BUSINESS.email}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link href="/#section-1" aria-label="Belganet Städ och Allservice – gå till toppen">
          <Image
            src="/logo.jpg"
            alt="Belganet Städ och Allservice"
            width={140}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Huvudnavigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-amber group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/#contact-form"
            className="ml-2 px-5 py-2.5 bg-brand-amber text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-brand-amber-light transition-all hover:scale-105"
          >
            Boka städning
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
