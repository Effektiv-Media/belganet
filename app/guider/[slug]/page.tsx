import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { GUIDES, GUIDE_BY_SLUG } from "@/content/guides";
import { SERVICE_BY_SLUG } from "@/content/services";
import { ORTER } from "@/content/orter";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, faqPageSchema, breadcrumbListSchema } from "@/lib/schema";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ContactForm } from "@/components/shared/ContactForm";
import { RelatedLinks, type RelatedLinkGroup } from "@/components/shared/RelatedLinks";

// The guides were written for this rebuild (2026-01-15) rather than
// recovered from the original site, which had none.
const GUIDE_PUBLISH_DATE = "2026-01-15";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDE_BY_SLUG[slug];
  if (!guide) return {};
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guider/${slug}`,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = GUIDE_BY_SLUG[slug];
  if (!guide) notFound();

  const path = `/guider/${slug}`;
  const relatedServices = guide.relatedServiceSlugs
    .map((s) => SERVICE_BY_SLUG[s])
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherGuides = GUIDES.filter((g) => g.slug !== slug).slice(0, 4);

  const relatedGroups: RelatedLinkGroup[] = [
    {
      heading: "Relaterade tjänster",
      links: relatedServices.flatMap((s) =>
        [ORTER[0]!, ORTER[1]!, ORTER[2]!].map((ort) => ({
          label: `${s.keyword} i ${ort.name}`,
          href: `/landningssidor/${s.slug}-${ort.slug}`,
        })),
      ),
    },
    {
      heading: "Fler guider",
      links: otherGuides.map((g) => ({ label: g.title, href: `/guider/${g.slug}` })),
    },
    {
      heading: "Läs mer",
      links: [
        { label: "Alla guider", href: "/guider" },
        { label: "Alla landningssidor", href: "/landningssidor" },
        { label: "Alla områden", href: "/omraden" },
      ],
    },
  ];

  return (
    <>
      <Jsonld
        data={[
          articleSchema({
            headline: guide.title,
            description: guide.metaDescription,
            path,
            datePublished: GUIDE_PUBLISH_DATE,
          }),
          faqPageSchema(guide.faqs),
          breadcrumbListSchema([
            { name: "Hem", path: "/" },
            { name: "Guider", path: "/guider" },
            { name: guide.title, path },
          ]),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader navItems={[]} ctaHref="/#section-5" />
        <main className="pt-32 pb-24">
          <article className="max-w-3xl mx-auto px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: "Hem", path: "/" },
                  { name: "Guider", path: "/guider" },
                  { name: guide.title, path },
                ]}
              />
            </div>

            <span className="section-heading-eyebrow">Guide</span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-6">
              {guide.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-sans">
              {guide.intro}
            </p>

            <div className="space-y-10 mb-16">
              {guide.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed font-sans mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {guide.faqs.length > 0 && (
              <div className="mb-16">
                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">
                  Vanliga frågor
                </h2>
                <FaqAccordion faqs={guide.faqs} idPrefix={`guide-${slug}`} />
              </div>
            )}

            {relatedServices.length > 0 && (
              <div className="mb-16 p-8 rounded-2xl bg-brand-surface border border-border">
                <h2 className="font-serif text-xl font-bold text-brand-navy mb-4">
                  Behöver du hjälp med{" "}
                  {relatedServices.map((s) => s.keywordLower).join(" eller ")}?
                </h2>
                <p className="text-muted-foreground font-sans mb-5">
                  Belganet Städ och Allservice hjälper dig gärna – begär en
                  kostnadsfri offert idag.
                </p>
                <div className="flex flex-wrap gap-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/landningssidor/${s.slug}-ronneby`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-navy-light transition-colors"
                    >
                      {s.keyword}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="p-8 rounded-2xl bg-white border border-border shadow-xl shadow-black/5">
              <h2 className="font-serif text-xl font-bold text-brand-navy mb-2">
                Har du en fråga eller vill ha en offert?
              </h2>
              <p className="text-muted-foreground font-sans mb-6">
                Fyll i formuläret så återkommer vi inom 24 timmar.
              </p>
              <ContactForm source={`Guide: ${guide.title}`} />
            </div>
          </article>

          <div className="mt-20">
            <RelatedLinks groups={relatedGroups} />
          </div>
        </main>
        <LandingFooter />
      </div>
    </>
  );
}
