import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ORTER, ORT_BY_SLUG } from "@/content/orter";
import { SERVICES } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import {
  localBusinessSchema,
  breadcrumbListSchema,
  itemListSchema,
} from "@/lib/schema";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { OrtHero } from "@/components/omraden/OrtHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { RelatedLinks, type RelatedLinkGroup } from "@/components/shared/RelatedLinks";

const NAV_ITEMS = [
  { id: "hub-services", label: "Tjänster" },
  { id: "hub-about", label: "Om området" },
  { id: "hub-contact", label: "Kontakt" },
];

export function generateStaticParams() {
  return ORTER.map((o) => ({ ort: o.slug }));
}

interface PageProps {
  params: Promise<{ ort: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ort: ortSlug } = await params;
  const ort = ORT_BY_SLUG[ortSlug];
  if (!ort) return {};
  return buildMetadata({
    title: `Städfirma i ${ort.name} – Hemstäd, flyttstäd & fönsterputs`,
    description: `Belganet Städ och Allservice är din lokala städfirma i ${ort.name}. Hemstäd, flyttstäd, kontorsstäd, fönsterputs, trädgårdsskötsel och mer, med RUT-avdrag.`,
    path: `/omraden/${ortSlug}`,
  });
}

export default async function OrtHubPage({ params }: PageProps) {
  const { ort: ortSlug } = await params;
  const ort = ORT_BY_SLUG[ortSlug];
  if (!ort) notFound();

  const path = `/omraden/${ortSlug}`;
  const serviceItems = SERVICES.map((s) => ({
    name: `${s.keyword} i ${ort.name}`,
    path: `/landningssidor/${s.slug}-${ort.slug}`,
  }));

  const relatedGroups: RelatedLinkGroup[] = [
    {
      heading: "Grannorter",
      links: ort.nearby
        .filter((n) => ORT_BY_SLUG[ORTER.find((o) => o.name === n.name)?.slug ?? ""])
        .map((n) => {
          const slug = ORTER.find((o) => o.name === n.name)?.slug ?? "";
          return { label: `${n.name} (~${n.km} km)`, href: `/omraden/${slug}` };
        }),
    },
    {
      heading: "Läs mer",
      links: [
        { label: "Alla områden", href: "/omraden" },
        { label: "Alla landningssidor", href: "/landningssidor" },
        { label: "Guider & prisinfo", href: "/guider" },
      ],
    },
  ];

  return (
    <>
      <Jsonld
        data={[
          localBusinessSchema({ areaName: ort.name }),
          breadcrumbListSchema([
            { name: "Hem", path: "/" },
            { name: "Områden", path: "/omraden" },
            { name: ort.name, path },
          ]),
          itemListSchema(serviceItems),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader navItems={NAV_ITEMS} ctaSectionId="hub-contact-form" />
        <main>
          <OrtHero ort={ort} />

          <div className="bg-brand-navy/95 py-3 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
              <Breadcrumbs
                items={[
                  { name: "Hem", path: "/" },
                  { name: "Områden", path: "/omraden" },
                  { name: ort.name, path },
                ]}
              />
            </div>
          </div>

          <section id="hub-services" className="py-24 bg-background" aria-labelledby="hub-services-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="section-heading-eyebrow">Våra tjänster i {ort.name}</span>
                <h2 id="hub-services-heading" className="section-heading">
                  Allt du behöver – under ett tak
                </h2>
                <p className="section-subheading">
                  Välj en tjänst nedan för pris, innehåll och en kostnadsfri offert
                  anpassad för {ort.name}.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/landningssidor/${s.slug}-${ort.slug}`}
                    className="group flex flex-col p-7 rounded-2xl bg-brand-surface border border-border hover:border-brand-amber/40 hover:shadow-xl hover:shadow-brand-amber/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-amber transition-colors duration-300">
                      <s.icon
                        size={20}
                        className="text-brand-amber group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-brand-navy mb-2">
                      {s.keyword} i {ort.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      {s.shortDesc.replaceAll("{area}", ort.name)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="hub-about" className="py-24 bg-brand-surface" aria-labelledby="hub-about-heading">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-12">
                <span className="section-heading-eyebrow">Om {ort.name}</span>
                <h2 id="hub-about-heading" className="section-heading">
                  Ditt lokala städföretag i {ort.name}
                </h2>
              </div>
              <div className="bg-white rounded-2xl border border-border p-8 md:p-10">
                <p className="text-muted-foreground leading-relaxed font-sans mb-6">
                  {ort.colorFact}
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans mb-8">
                  Belganet Städ och Allservice är verksamma i hela {ort.kommun}
                  {ort.districts.length > 0 && (
                    <>
                      , inklusive områden som {ort.districts.join(", ")}
                    </>
                  )}
                  . Vi anpassar alltid tjänsten efter din bostad eller lokal, oavsett
                  var i {ort.name} du befinner dig.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {[
                    "Lokalt & personligt",
                    "Miljögodkänt",
                    "RUT-avdrag",
                    "Fullt försäkrade",
                    "Flexibla tider",
                    "Städ & trädgård",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
                      <span className="text-brand-navy text-sm font-medium font-sans">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="hub-contact" className="py-24 bg-background" aria-labelledby="hub-contact-heading">
            <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="section-heading-eyebrow">Kontakta oss</span>
                <h2 id="hub-contact-heading" className="section-heading">
                  Begär offert i {ort.name}
                </h2>
                <p className="section-subheading">
                  Fyll i formuläret nedan så återkommer vi inom 24 timmar med ett
                  skräddarsytt erbjudande för {ort.name}.
                </p>
              </div>
              <div
                id="hub-contact-form"
                className="bg-white rounded-2xl border border-border p-8 shadow-xl shadow-brand-amber/8 scroll-mt-24"
              >
                <ContactForm source={`Allmän förfrågan – ${ort.name}`} area={ort.name} />
              </div>
            </div>
          </section>

          <RelatedLinks groups={relatedGroups} />
        </main>
        <LandingFooter />
      </div>
    </>
  );
}
