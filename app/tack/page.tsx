import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tack för din förfrågan",
  description: "Tack för din förfrågan till Belganet Städ och Allservice. Vi återkommer inom 24 timmar.",
  path: "/tack",
  // A conversion-only page: no search value, so keep it out of the index.
  noindex: true,
});

/**
 * Standalone thank-you page kept as a conversion-tracking destination for
 * future paid campaigns (Google Ads/Meta conversion pixels fire more
 * reliably on a dedicated URL than on an inline form state change, which is
 * what the on-page forms use by default for a smoother UX).
 */
export default function TackPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <main className="pt-40 pb-24">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-brand-amber/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={44} className="text-brand-amber" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-brand-navy mb-4">
            Tack för din förfrågan!
          </h1>
          <p className="text-muted-foreground leading-relaxed font-sans mb-8">
            Vi har tagit emot din förfrågan och återkommer inom 24 timmar med
            ett skräddarsytt erbjudande.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-brand-navy text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-navy-light transition-colors"
          >
            Till startsidan
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
