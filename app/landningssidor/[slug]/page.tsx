import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_LANDING_PAGES, getLandingPageBySlug } from "@/content/landing";
import { SERVICE_BY_SLUG, SERVICES } from "@/content/services";
import { ORT_BY_SLUG } from "@/content/orter";
import { GUIDES } from "@/content/guides";
import { buildMetadata } from "@/lib/seo";
import {
  serviceSchema,
  faqPageSchema,
  breadcrumbListSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingServices } from "@/components/landing/LandingServices";
import { LandingUsps } from "@/components/landing/LandingUsps";
import { LandingAbout } from "@/components/landing/LandingAbout";
import { LandingCta } from "@/components/landing/LandingCta";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingContact } from "@/components/landing/LandingContact";
import { RelatedLinks, type RelatedLinkGroup } from "@/components/shared/RelatedLinks";

const NAV_ITEMS = [
  { id: "lp-services", label: "Tjänster" },
  { id: "lp-usps", label: "Varför oss" },
  { id: "lp-about", label: "Om oss" },
  { id: "lp-faq", label: "FAQ" },
  { id: "lp-contact", label: "Kontakt" },
];

export function generateStaticParams() {
  return ALL_LANDING_PAGES.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getLandingPageBySlug(slug);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/landningssidor/${slug}`,
  });
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getLandingPageBySlug(slug);
  if (!data) notFound();

  const service = SERVICE_BY_SLUG[data.serviceSlug]!;
  const ort = ORT_BY_SLUG[data.ortSlug]!;
  const path = `/landningssidor/${slug}`;

  const siblingServices = SERVICES.filter((s) => s.slug !== data.serviceSlug).slice(0, 6);
  const relatedGuides = GUIDES.filter((g) => g.relatedServiceSlugs.includes(data.serviceSlug)).slice(0, 3);

  const relatedGroups: RelatedLinkGroup[] = [
    {
      heading: `Fler tjänster i ${ort.name}`,
      links: siblingServices.map((s) => ({
        label: `${s.keyword} i ${ort.name}`,
        href: `/landningssidor/${s.slug}-${ort.slug}`,
      })),
    },
    {
      heading: `${service.keyword} i fler orter`,
      links: data.nearby
        .filter((n) => n.slug)
        .map((n) => ({
          label: `${service.keyword} i ${n.name}`,
          href: `/landningssidor/${data.serviceSlug}-${n.slug}`,
        })),
    },
    {
      heading: "Läs mer",
      links: [
        { label: `Alla tjänster i ${ort.name}`, href: `/omraden/${ort.slug}` },
        { label: "Alla landningssidor", href: "/landningssidor" },
        ...relatedGuides.map((g) => ({ label: g.title, href: `/guider/${g.slug}` })),
      ],
    },
  ];

  return (
    <>
      <Jsonld
        data={[
          serviceSchema({
            serviceName: data.title,
            serviceType: service.keyword,
            description: data.metaDescription,
            areaName: data.area,
            url: `${SITE_URL}${path}`,
          }),
          faqPageSchema(data.faqs),
          breadcrumbListSchema([
            { name: "Hem", path: "/" },
            { name: "Landningssidor", path: "/landningssidor" },
            { name: data.title, path },
          ]),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader navItems={NAV_ITEMS} ctaSectionId="lp-contact" />
        <main>
          <LandingHero h1={data.h1} heroSubheading={data.heroSubheading} />
          <div className="bg-brand-navy/95 py-3 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
              <Breadcrumbs
                items={[
                  { name: "Hem", path: "/" },
                  { name: "Landningssidor", path: "/landningssidor" },
                  { name: data.title, path },
                ]}
              />
            </div>
          </div>
          <LandingServices
            keyword={data.keyword}
            area={data.area}
            intro={data.intro}
            services={data.services}
          />
          <LandingUsps usps={data.usps} />
          <LandingAbout
            area={data.area}
            about={data.about}
            localParagraph={data.localParagraph}
            nearby={data.nearby}
            serviceSlug={data.serviceSlug}
          />
          <LandingCta ctaHeading={data.ctaHeading} ctaSubtext={data.ctaSubtext} />
          <LandingFaq keyword={data.keyword} area={data.area} faqs={data.faqs} />
          <LandingContact keyword={data.keyword} area={data.area} />
          <RelatedLinks groups={relatedGroups} />
        </main>
        <LandingFooter />
      </div>
    </>
  );
}
