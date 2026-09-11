import { FaqAccordion } from "@/components/shared/FaqAccordion";
import type { Faq } from "@/content/types";

export function LandingFaq({
  keyword,
  area,
  faqs,
}: {
  keyword: string;
  area: string;
  faqs: Faq[];
}) {
  return (
    <section id="lp-faq" className="py-24 bg-background" aria-labelledby="lp-faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading-eyebrow">Vanliga frågor</span>
          <h2 id="lp-faq-heading" className="section-heading">
            Frågor om {keyword.toLowerCase()} i {area}
          </h2>
        </div>
        <FaqAccordion faqs={faqs} idPrefix="lp-faq" />
      </div>
    </section>
  );
}
