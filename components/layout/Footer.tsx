import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BUSINESS, SITE_NAME } from "@/lib/site";

const SERVICE_FOOTER_LINKS = [
  { slug: "hemstad", label: "Hemstäd" },
  { slug: "flyttstad", label: "Flyttstäd" },
  { slug: "kontorsstad", label: "Kontorsstäd" },
  { slug: "fonsterputs", label: "Fönsterputs" },
  { slug: "tradgardsskotsel", label: "Trädgårdsservice" },
  { slug: "stadfirma", label: "Allservice" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white" role="contentinfo">
      <div className="h-px bg-linear-to-r from-transparent via-brand-amber to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.jpg"
                alt={SITE_NAME}
                width={140}
                height={44}
                className="h-11 w-auto object-contain mb-3"
              />
              <span className="text-brand-amber text-xs uppercase tracking-widest font-sans">
                Städ &amp; Allservice
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
              Vi erbjuder professionell städning och allservice för privatpersoner och
              företag i Sydsverige. Alltid med kvalitet och omsorg i fokus.
            </p>
            <div className="flex gap-3">
              {/* Placeholder profile links pending real social accounts from the client. */}
              <a
                href="https://facebook.com"
                aria-label="Besök vår Facebook-sida"
                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center hover:bg-brand-amber hover:text-brand-navy transition-all duration-300 hover:scale-110 text-white"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Besök vår Instagram-sida"
                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center hover:bg-brand-amber hover:text-brand-navy transition-all duration-300 hover:scale-110 text-white"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link href="/" className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/landningssidor" className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  Landningssidor
                </Link>
              </li>
              <li>
                <Link href="/omraden" className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  Områden
                </Link>
              </li>
              <li>
                <Link href="/guider" className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  Guider
                </Link>
              </li>
              <li>
                <Link href="/#section-5" className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/integritetspolicy" className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              Tjänster
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICE_FOOTER_LINKS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/landningssidor/${s.slug}-ronneby`}
                    className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans">
              Kontakt
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <a href={BUSINESS.emailHref} className="text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white/50 text-sm font-sans">
                  {BUSINESS.areaServedNames.join(", ")}
                </span>
              </li>
            </ul>
            <Link
              href="/#section-5"
              className="mt-6 inline-block px-5 py-2.5 bg-brand-amber text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-amber-light hover:shadow-md hover:shadow-brand-amber/30 transition-all duration-300"
            >
              Boka städning
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-sans">
            © {year} {SITE_NAME}. Alla rättigheter förbehållna.
          </p>
          <p className="text-white/35 text-xs font-sans">Webbplats av Effektiv Media</p>
        </div>
      </div>
    </footer>
  );
}
