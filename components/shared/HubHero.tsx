import Image from "next/image";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { ScrollButton } from "./ScrollButton";

/**
 * Hero for hub pages (town hubs and service hubs). Server-rendered and
 * visible immediately; the background is an optimized, preloaded
 * next/image so it doesn't delay LCP.
 */
export function HubHero({
  eyebrow,
  h1,
  text,
  ctaTargetId,
}: {
  eyebrow: string;
  h1: string;
  text: string;
  ctaTargetId: string;
}) {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
      aria-label={h1}
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover scale-105"
      />
      <div
        className="absolute inset-0 bg-linear-to-br from-brand-navy/92 via-brand-navy/68 to-brand-navy/88"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand-amber text-sm uppercase tracking-widest font-medium font-sans mb-4 block">
          {eyebrow}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance mb-6">
          {h1}
        </h1>
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans text-pretty">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ScrollButton
            targetId={ctaTargetId}
            className="px-8 py-4 bg-brand-amber text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-brand-amber-light transition-all duration-300 hover:scale-105"
          >
            Begär kostnadsfri offert
          </ScrollButton>
          <a
            href={BUSINESS.phoneHref}
            className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white/15 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Phone size={16} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
