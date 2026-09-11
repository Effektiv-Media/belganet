import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { ScrollButton } from "@/components/shared/ScrollButton";

export function LandingCta({ ctaHeading, ctaSubtext }: { ctaHeading: string; ctaSubtext: string }) {
  return (
    <section className="relative py-20 bg-brand-navy overflow-hidden" aria-label={ctaHeading}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-amber/8 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-amber to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          {ctaHeading}
        </h2>
        <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed mb-8 font-sans text-pretty">
          {ctaSubtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ScrollButton
            targetId="lp-contact-form"
            className="px-8 py-4 bg-brand-amber text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-brand-amber-light hover:shadow-xl hover:shadow-brand-amber/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Begär kostnadsfri offert
          </ScrollButton>
          <a
            href={BUSINESS.phoneHref}
            className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white/15 hover:border-white/60 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} aria-hidden="true" />
            Ring oss direkt
          </a>
        </div>
      </div>
    </section>
  );
}
