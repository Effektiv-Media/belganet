import { CheckCircle2, ArrowRight } from "lucide-react";
import type { SubService } from "@/content/types";
import { ScrollButton } from "@/components/shared/ScrollButton";

export function LandingServices({
  heading,
  intro,
  services,
}: {
  /** e.g. "Flyttstädning i Kalmar – vad ingår?" (uses the alt keyword). */
  heading: string;
  intro: string;
  services: SubService[];
}) {
  return (
    <section id="lp-services" className="py-24 bg-background" aria-labelledby="lp-services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading-eyebrow">Våra tjänster</span>
          <h2 id="lp-services-heading" className="section-heading">
            {heading}
          </h2>
          <p className="section-subheading">{intro}</p>
          <p className="mt-3 text-muted-foreground text-sm max-w-2xl mx-auto font-sans">
            Vi anpassar alltid tjänsten efter dina specifika behov och önskemål.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="reveal bg-brand-surface rounded-2xl p-7 border border-border hover:border-brand-amber/40 hover:shadow-xl hover:shadow-brand-amber/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-amber transition-colors duration-300">
                <CheckCircle2
                  size={20}
                  className="text-brand-amber group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-navy mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ScrollButton
            targetId="lp-contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-amber text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-brand-amber-light hover:shadow-xl hover:shadow-brand-amber/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Begär offert
            <ArrowRight size={16} aria-hidden="true" />
          </ScrollButton>
        </div>
      </div>
    </section>
  );
}
