import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_LANDING_PAGES, getLandingPage } from "@/content/landing";
import { SERVICE_BY_SLUG, SERVICES } from "@/content/services";
import { ORT_BY_SLUG } from "@/content/orter";
import { GUIDES } from "@/content/guides";
import { isLandingPageIndexed, topOrterForService } from "@/content/indexing";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, faqPageSchema, breadcrumbListSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { guidePath, lpPath, ortPath, servicePath, servicesIndexPath } from "@/lib/routes";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingServices } from "@/components/landing/LandingServices";
import { LandingUsps } from "@/components/landing/LandingUsps";
import { LandingAbout } from "@/components/landing/LandingAbout";
import { LandingCta } from "@/components/landing/LandingCta";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingContact } from "@/components/landing/LandingContact";
import { RelatedLinks, type RelatedLinkGroup } from "@/components/shared/RelatedLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_LANDING_PAGES.map((p) => ({ service: p.serviceSlug, ort: p.ortSlug }));
}

interface PageProps {
  params: Promise<{ service: string; ort: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, ort } = await params;
  const data = getLandingPage(service, ort);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: lpPath(service, ort),
    noindex: !data.indexed,
  });
}

/** Indexed pages first, so link equity flows to the pages that can rank. */
const indexedFirst = <T extends { href: string; indexed: boolean }>(links: T[]) =>
  [...links].sort((a, b) => Number(b.indexed) - Number(a.indexed));

export default async function LandingPage({ params }: PageProps) {
  const { service: serviceSlug, ort: ortSlug } = await params;
  const data = getLandingPage(serviceSlug, ortSlug);
  if (!data) notFound();

  const service = SERVICE_BY_SLUG[serviceSlug]!;
  const ort = ORT_BY_SLUG[ortSlug]!;
  const path = lpPath(serviceSlug, ortSlug);

  const siblingServices = indexedFirst(
    SERVICES.filter((s) => s.slug !== serviceSlug).map((s) => ({
      label: `${s.keyword} i ${ort.name}`,
      href: lpPath(s.slug, ortSlug),
      indexed: isLandingPageIndexed(s.slug, ortSlug),
    })),
  ).slice(0, 6);

  const nearbySlugs = data.nearby.map((n) => n.slug).filter(Boolean);
  const otherOrter = [
    ...nearbySlugs,
    ...topOrterForService(serviceSlug).filter((o) => !nearbySlugs.includes(o)),
  ]
    .filter((o) => o !== ortSlug)
    .slice(0, 5)
    .map((o) => ({
      label: `${service.keyword} i ${ORT_BY_SLUG[o]!.name}`,
      href: lpPath(serviceSlug, o),
      indexed: isLandingPageIndexed(serviceSlug, o),
    }));

  const relatedGuides = GUIDES.filter((g) => g.relatedServiceSlugs.includes(serviceSlug)).slice(0, 3);

  const relatedGroups: RelatedLinkGroup[] = [
    { heading: `Fler tjänster i ${ort.name}`, links: siblingServices },
    { heading: `${service.keyword} i fler orter`, links: indexedFirst(otherOrter) },
    {
      heading: "Läs mer",
      links: [
        { label: `Städning i ${ort.name} – alla tjänster`, href: ortPath(ortSlug) },
        { label: `${service.altKeyword} – alla orter`, href: servicePath(serviceSlug) },
        ...relatedGuides.map((g) => ({ label: g.title, href: guidePath(g.slug) })),
      ],
    },
  ];

  const breadcrumbs = [
    { name: "Hem", path: "/" },
    { name: "Tjänster", path: servicesIndexPath() },
    { name: service.keyword, path: servicePath(serviceSlug) },
    { name: data.title, path },
  ];

  return (
    <>
      <Jsonld
        data={[
          serviceSchema({
            serviceName: data.title,
            serviceType: service.keyword,
            description: data.metaDescription,
            areas: [{ name: ort.name, lan: ort.lan }],
            url: `${SITE_URL}${path}`,
          }),
          faqPageSchema(data.faqs),
          breadcrumbListSchema(breadcrumbs),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader ctaSectionId="lp-contact-form" />
        <main>
          <LandingHero h1={data.h1} heroSubheading={data.heroSubheading} rut={data.rut} />
          <div className="bg-brand-navy/95 py-3 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>
          <LandingServices heading={data.servicesHeading} intro={data.intro} services={data.services} />
          <LandingUsps usps={data.usps} />
          <LandingAbout
            area={data.area}
            ortSlug={ortSlug}
            heading={data.aboutHeading}
            about={data.about}
            localParagraph={data.localParagraph}
            nearby={data.nearby}
            serviceSlug={serviceSlug}
            keyword={service.keyword}
            rut={data.rut}
          />
          <LandingCta ctaHeading={data.ctaHeading} ctaSubtext={data.ctaSubtext} />
          <LandingFaq keyword={data.keyword} area={data.area} faqs={data.faqs} />
          <LandingContact keyword={data.keyword} area={data.area} rut={data.rut} />
          <RelatedLinks groups={relatedGroups} />
        </main>
        <Footer />
      </div>
    </>
  );
}
