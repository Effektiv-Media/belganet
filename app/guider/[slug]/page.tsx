import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { GUIDES, GUIDE_BY_SLUG } from "@/content/guides";
import { SERVICE_BY_SLUG } from "@/content/services";
import { ORT_BY_SLUG } from "@/content/orter";
import { topOrterForService } from "@/content/indexing";
import { serviceHeadTerm } from "@/content/serviceHub";
import type { GuideSection } from "@/content/types";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, faqPageSchema, breadcrumbListSchema } from "@/lib/schema";
import { BUSINESS, SITE_URL } from "@/lib/site";
import { guidePath, guidesIndexPath, lpPath, servicePath, servicesIndexPath } from "@/lib/routes";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ContactForm } from "@/components/shared/ContactForm";
import { RelatedLinks, type RelatedLinkGroup } from "@/components/shared/RelatedLinks";

export const dynamicParams = false;

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
    path: guidePath(slug),
    article: { publishedTime: guide.published, modifiedTime: guide.updated },
  });
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function SectionBody({ section }: { section: GuideSection }) {
  const ListTag = section.list?.ordered ? "ol" : "ul";
  return (
    <>
      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed font-sans mb-4">
          {p}
        </p>
      ))}
      {section.list && (
        <ListTag
          className={`mb-6 space-y-2 pl-6 text-muted-foreground font-sans leading-relaxed ${
            section.list.ordered ? "list-decimal" : "list-disc"
          } marker:text-brand-amber`}
        >
          {section.list.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListTag>
      )}
      {section.table && (
        <figure className="mb-6">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[28rem] text-left text-sm font-sans">
              <caption className="caption-top px-4 pt-4 pb-2 text-left font-semibold text-brand-navy">
                {section.table.caption}
              </caption>
              <thead className="bg-brand-surface text-brand-navy">
                <tr>
                  {section.table.headers.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                {section.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) =>
                      j === 0 ? (
                        <th key={j} scope="row" className="px-4 py-3 font-medium text-brand-navy">
                          {cell}
                        </th>
                      ) : (
                        <td key={j} className="px-4 py-3">
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.table.note && (
            <figcaption className="mt-2 text-xs text-muted-foreground font-sans">
              {section.table.note}
            </figcaption>
          )}
        </figure>
      )}
    </>
  );
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = GUIDE_BY_SLUG[slug];
  if (!guide) notFound();

  const path = guidePath(slug);
  const relatedServices = guide.relatedServiceSlugs
    .map((s) => SERVICE_BY_SLUG[s])
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherGuides = GUIDES.filter((g) => g.slug !== slug)
    .sort(
      (a, b) =>
        Number(b.relatedServiceSlugs.some((s) => guide.relatedServiceSlugs.includes(s))) -
        Number(a.relatedServiceSlugs.some((s) => guide.relatedServiceSlugs.includes(s))),
    )
    .slice(0, 4);

  // Link each related service to its hub and to the towns with the most
  // search demand for it (not just the first towns in the list).
  const relatedGroups: RelatedLinkGroup[] = [
    {
      heading: "Relaterade tjänster",
      links: relatedServices.flatMap((s) => [
        { label: `${serviceHeadTerm(s)} – alla orter`, href: servicePath(s.slug) },
        ...topOrterForService(s.slug)
          .slice(0, relatedServices.length > 2 ? 1 : 3)
          .map((o) => ({ label: `${s.keyword} i ${ORT_BY_SLUG[o]!.name}`, href: lpPath(s.slug, o) })),
      ]),
    },
    {
      heading: "Fler guider",
      links: otherGuides.map((g) => ({ label: g.title, href: guidePath(g.slug) })),
    },
    {
      heading: "Läs mer",
      links: [
        { label: "Alla guider", href: guidesIndexPath() },
        { label: "Alla tjänster", href: servicesIndexPath() },
        { label: "Alla områden", href: "/omraden" },
      ],
    },
  ];

  const breadcrumbs = [
    { name: "Hem", path: "/" },
    { name: "Guider", path: guidesIndexPath() },
    { name: guide.title, path },
  ];

  return (
    <>
      <Jsonld
        data={[
          articleSchema({
            headline: guide.title,
            description: guide.metaDescription,
            path,
            datePublished: guide.published,
            dateModified: guide.updated,
            image: `${SITE_URL}${path}/opengraph-image`,
          }),
          ...(guide.faqs.length > 0 ? [faqPageSchema(guide.faqs)] : []),
          breadcrumbListSchema(breadcrumbs),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader ctaSectionId="guide-contact-form" />
        <main className="pt-32 pb-24">
          <article className="max-w-3xl mx-auto px-6">
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} tone="light" />
            </div>

            <span className="section-heading-eyebrow">Guide</span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-4">
              {guide.title}
            </h1>
            <p className="text-sm text-muted-foreground font-sans mb-8">
              Av {BUSINESS.founder}, Belganet Städ och Allservice · Publicerad{" "}
              <time dateTime={guide.published}>{formatDate(guide.published)}</time>
              {guide.updated !== guide.published && (
                <>
                  {" "}· Uppdaterad <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
                </>
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-sans">{guide.intro}</p>

            <div className="space-y-10 mb-16">
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">{section.heading}</h2>
                  <SectionBody section={section} />
                </section>
              ))}
            </div>

            {guide.faqs.length > 0 && (
              <section className="mb-16">
                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Vanliga frågor</h2>
                <FaqAccordion faqs={guide.faqs} idPrefix={`guide-${slug}`} />
              </section>
            )}

            {relatedServices.length > 0 && (
              <div className="mb-16 p-8 rounded-2xl bg-brand-surface border border-border">
                <h2 className="font-serif text-xl font-bold text-brand-navy mb-4">
                  Behöver du hjälp med {relatedServices.map((s) => s.keywordLower).join(" eller ")}?
                </h2>
                <p className="text-muted-foreground font-sans mb-5">
                  Belganet Städ och Allservice hjälper dig gärna i Blekinge, Kalmar län och Växjö –
                  begär en kostnadsfri offert för exakt pris.
                </p>
                <div className="flex flex-wrap gap-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={servicePath(s.slug)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-navy-light transition-colors"
                    >
                      {serviceHeadTerm(s)}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div
              id="guide-contact-form"
              className="p-8 rounded-2xl bg-white border border-border shadow-xl shadow-brand-amber/8 scroll-mt-24"
            >
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
        <Footer />
      </div>
    </>
  );
}
