import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { BUSINESS, SITE_NAME } from "@/lib/site";

/** The simpler single-row footer used on landing pages, ort hubs and guides
 * — matches the original landing-page footer (distinct from the richer
 * 4-column homepage footer). */
export function LandingFooter() {
  return (
    <footer className="bg-brand-navy-dark text-white" role="contentinfo">
      <div className="h-px bg-linear-to-r from-transparent via-brand-amber to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Image
            src="/logo.jpg"
            alt={SITE_NAME}
            width={120}
            height={38}
            className="h-9 w-auto object-contain mb-2"
          />
          <p className="text-white/40 text-xs font-sans">
            © {new Date().getFullYear()} {SITE_NAME}. Alla rättigheter förbehållna.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-white/60 text-sm hover:text-brand-amber transition-colors font-sans"
          >
            <Phone size={14} aria-hidden="true" /> {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.emailHref}
            className="flex items-center gap-2 text-white/60 text-sm hover:text-brand-amber transition-colors font-sans"
          >
            <Mail size={14} aria-hidden="true" /> {BUSINESS.email}
          </a>
          <Link href="/" className="text-white/60 text-sm hover:text-brand-amber transition-colors font-sans">
            Tillbaka till startsidan
          </Link>
          <Link href="/integritetspolicy" className="text-white/60 text-sm hover:text-brand-amber transition-colors font-sans">
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  );
}
