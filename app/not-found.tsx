import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/content/services";
import { serviceHeadTerm } from "@/content/serviceHub";
import { guidesIndexPath, orterIndexPath, servicePath, servicesIndexPath } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false, follow: true },
};

/** Swedish 404 with paths back into the site, instead of Next's bare
 * English default (a dead end for both visitors and crawlers). */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <main className="pt-40 pb-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="section-heading-eyebrow">404</span>
          <h1 className="section-heading mb-4">Sidan hittades inte</h1>
          <p className="text-muted-foreground leading-relaxed font-sans mb-10">
            Sidan du letar efter finns inte, eller har flyttats. Här är några vägar vidare.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link href="/" className="px-6 py-3 bg-brand-navy text-white text-sm font-semibold rounded-xl hover:bg-brand-navy-light transition-colors">
              Till startsidan
            </Link>
            <Link href={servicesIndexPath()} className="px-6 py-3 border border-border text-brand-navy text-sm font-semibold rounded-xl hover:border-brand-amber transition-colors">
              Alla tjänster
            </Link>
            <Link href={orterIndexPath()} className="px-6 py-3 border border-border text-brand-navy text-sm font-semibold rounded-xl hover:border-brand-amber transition-colors">
              Områden
            </Link>
            <Link href={guidesIndexPath()} className="px-6 py-3 border border-border text-brand-navy text-sm font-semibold rounded-xl hover:border-brand-amber transition-colors">
              Guider
            </Link>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm font-sans" role="list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(s.slug)} className="text-muted-foreground hover:text-brand-amber transition-colors">
                  {serviceHeadTerm(s)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
