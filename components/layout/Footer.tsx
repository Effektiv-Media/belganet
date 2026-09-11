import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Globe } from "lucide-react";
import { BUSINESS, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";
import { SERVICES } from "@/content/services";
import { ORTER } from "@/content/orter";
import {
  guidesIndexPath,
  orterIndexPath,
  ortPath,
  servicePath,
  servicesIndexPath,
} from "@/lib/routes";

const linkClass =
  "text-white/50 text-sm hover:text-brand-amber transition-colors duration-200 font-sans";
const headingClass = "text-white font-bold uppercase tracking-wider text-xs mb-5 font-sans";

function socialIcon(url: string) {
  if (url.includes("facebook.")) return { Icon: Facebook, label: "Besök vår Facebook-sida" };
  if (url.includes("instagram.")) return { Icon: Instagram, label: "Besök vår Instagram-sida" };
  return { Icon: Globe, label: "Besök vår profil" };
}

/**
 * Site-wide footer, used on every page. Besides contact details it is the
 * main crawl path to every service hub and town hub, so no hub depends on
 * in-content links alone.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white" role="contentinfo">
      <div className="h-px bg-linear-to-r from-transparent via-brand-amber to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
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
              företag i {BUSINESS.areaServedText}. Alltid med kvalitet och omsorg i fokus.
            </p>
            {SOCIAL_LINKS.length > 0 && (
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((url) => {
                  const { Icon, label } = socialIcon(url);
                  return (
                    <a
                      key={url}
                      href={url}
                      aria-label={label}
                      rel="noopener"
                      className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center hover:bg-brand-amber hover:text-brand-navy transition-all duration-300 hover:scale-110 text-white"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <nav aria-label="Tjänster i sidfoten">
            <h3 className={headingClass}>Tjänster</h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s.slug)} className={linkClass}>
                    {s.keyword}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Orter i sidfoten">
            <h3 className={headingClass}>Orter</h3>
            <ul className="space-y-3" role="list">
              {ORTER.map((o) => (
                <li key={o.slug}>
                  <Link href={ortPath(o.slug)} className={linkClass}>
                    Städning i {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navigation i sidfoten">
            <h3 className={headingClass}>Navigation</h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link href="/" className={linkClass}>
                  Hem
                </Link>
              </li>
              <li>
                <Link href={servicesIndexPath()} className={linkClass}>
                  Alla tjänster
                </Link>
              </li>
              <li>
                <Link href={orterIndexPath()} className={linkClass}>
                  Områden
                </Link>
              </li>
              <li>
                <Link href={guidesIndexPath()} className={linkClass}>
                  Guider &amp; priser
                </Link>
              </li>
              <li>
                <Link href="/#section-4" className={linkClass}>
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/#section-5" className={linkClass}>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/integritetspolicy" className={linkClass}>
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className={headingClass}>Kontakt</h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className={linkClass}>
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <a href={BUSINESS.emailHref} className={`${linkClass} break-all`}>
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white/50 text-sm font-sans">{BUSINESS.areaServedText}</span>
              </li>
            </ul>
            <Link
              href="/#contact-form"
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
