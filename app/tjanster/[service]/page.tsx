import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { SERVICES, SERVICE_BY_SLUG } from "@/content/services";
import { ORTER, ORT_BY_SLUG } from "@/content/orter";
import { GUIDES } from "@/content/guides";
import { topOrterForService } from "@/content/indexing";
import {
  serviceHeadTerm,
  serviceHubDescription,
  serviceHubFaqs,
  serviceHubSubServices,
  serviceHubTitle,
} from "@/content/serviceHub";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbListSchema,
  faqPageSchema,
  itemListSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { guidePath, lpPath, servicePath, servicesIndexPath } from "@/lib/routes";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { HubHero } from "@/components/shared/HubHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ContactForm } from "@/components/shared/ContactForm";
import { RelatedLinks, type RelatedLinkGroup } from "@/components/shared/RelatedLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return {};
  return buildMetadata({
    title: serviceHubTitle(service),
    description: serviceHubDescription(service),
    path: servicePath(slug),
  });
}

export default async function ServiceHubPage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) notFound();

  const head = serviceHeadTerm(service);
  const path = servicePath(slug);
  const faqs = serviceHubFaqs(service);
  const subServices = serviceHubSubServices(service);
  // Towns ordered by search demand for this service, so the strongest
  // pages sit at the top of the list (and get the most prominent links).
  const orter = topOrterForService(slug).map((o) => ORT_BY_SLUG[o]!);
  const guides = GUIDES.filter((g) => g.relatedServiceSlugs.includes(slug)).slice(0, 4);

  const breadcrumbs = [
    { name: "Hem", path: "/" },
    { name: "Tjänster", path: servicesIndexPath() },
    { name: service.keyword, path },
  ];

  const relatedGroups: RelatedLinkGroup[] = [
    {
      heading: "Fler tjänster",
      links: SERVICES.filter((s) => s.slug !== slug)
        .slice(0, 8)
        .map((s) => ({ label: serviceHeadTerm(s), href: servicePath(s.slug) })),
    },
    {
      heading: "Guider & priser",
      links: GUIDES.slice(0, 6).map((g) => ({ label: g.title, href: guidePath(g.slug) })),
    },
  ];

  return (
    <>
      <Jsonld
        data={[
          serviceSchema({
            serviceName: `${head} i ${ORTER.map((o) => o.name).join(", ")}`,
            serviceType: service.keyword,
            description: service.hubIntro,
            areas: ORTER.map((o) => ({ name: o.name, lan: o.lan })),
            url: `${SITE_URL}${path}`,
          }),
          faqPageSchema(faqs),
          breadcrumbListSchema(breadcrumbs),
          itemListSchema(orter.map((o) => ({ name: `${service.keyword} i ${o.name}`, path: lpPath(slug, o.slug) }))),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader ctaSectionId="hub-contact-form" />
        <main>
          <HubHero
            eyebrow="Blekinge · Kalmar län · Kronobergs län"
            h1={`${head} i Blekinge, Kalmar län och Växjö`}
            text={service.hubIntro}
            ctaTargetId="hub-contact-form"
          />

          <div className="bg-brand-navy/95 py-3 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>

          <section className="py-24 bg-background" aria-labelledby="svc-included-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="section-heading-eyebrow">{service.keyword}</span>
                <h2 id="svc-included-heading" className="section-heading">
                  Vad ingår i {head.toLowerCase()}?
                </h2>
                <p className="section-subheading">
                  {service.rut === "yes"
                    ? "Tjänsten anpassas alltid efter ditt hem och dina önskemål. Som privatperson betalar du halva arbetskostnaden med RUT-avdrag."
                    : "Tjänsten anpassas alltid efter er lokal, fastighet eller situation – med en tydlig offert innan vi börjar."}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subServices.map((s) => (
                  <div key={s.title} className="reveal bg-brand-surface rounded-2xl p-7 border border-border">
                    <CheckCircle2 size={20} className="text-brand-amber mb-4" aria-hidden="true" />
                    <h3 className="font-serif text-lg font-bold text-brand-navy mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-brand-surface" aria-labelledby="svc-orter-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="section-heading-eyebrow">Välj din ort</span>
                <h2 id="svc-orter-heading" className="section-heading">
                  {service.keyword} i tio orter
                </h2>
                <p className="section-subheading">
                  Vi utför {service.keywordLower} i hela Blekinge, Kalmar län och Växjö.
                  Välj ort för lokal information och en offert anpassad efter just ditt område.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" role="list">
                {orter.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={lpPath(slug, o.slug)}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 hover:border-brand-amber/40 hover:shadow-lg hover:shadow-brand-amber/10 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2 font-serif text-lg font-bold text-brand-navy group-hover:text-brand-amber transition-colors">
                        <MapPin size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
                        {service.keyword} i {o.name}
                      </span>
                      <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground font-sans">
                        {o.lan}
                      </span>
                      {o.districts.length > 0 && (
                        <span className="mt-3 text-sm text-muted-foreground font-sans">
                          Även {o.districts.join(" och ")}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {guides.length > 0 && (
            <section className="py-24 bg-background" aria-labelledby="svc-guides-heading">
              <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                  <span className="section-heading-eyebrow">Guider</span>
                  <h2 id="svc-guides-heading" className="section-heading">
                    Läs mer om {head.toLowerCase()}
                  </h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={guidePath(g.slug)}
                        className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-border bg-brand-surface p-6 hover:border-brand-amber/40 transition-colors"
                      >
                        <span>
                          <span className="block font-serif text-lg font-bold text-brand-navy group-hover:text-brand-amber transition-colors">
                            {g.title}
                          </span>
                          <span className="mt-2 block text-sm text-muted-foreground font-sans">{g.metaDescription}</span>
                        </span>
                        <ArrowRight size={18} className="shrink-0 text-brand-amber mt-1" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="py-24 bg-brand-surface" aria-labelledby="svc-faq-heading">
            <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="section-heading-eyebrow">Vanliga frågor</span>
                <h2 id="svc-faq-heading" className="section-heading">
                  Frågor om {head.toLowerCase()}
                </h2>
              </div>
              <FaqAccordion faqs={faqs} idPrefix={`svc-${slug}`} />
            </div>
          </section>

          <section id="hub-contact" className="py-24 bg-background" aria-labelledby="hub-contact-heading">
            <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="section-heading-eyebrow">Kontakta oss</span>
                <h2 id="hub-contact-heading" className="section-heading">
                  Begär offert på {head.toLowerCase()}
                </h2>
                <p className="section-subheading">
                  Berätta var och vad du behöver hjälp med, så återkommer vi inom 24 timmar med
                  en kostnadsfri offert.
                </p>
              </div>
              <div
                id="hub-contact-form"
                className="bg-white rounded-2xl border border-border p-8 shadow-xl shadow-brand-amber/8 scroll-mt-24"
              >
                <ContactForm source={head} />
              </div>
            </div>
          </section>

          <RelatedLinks groups={relatedGroups} />
        </main>
        <Footer />
      </div>
    </>
  );
}
