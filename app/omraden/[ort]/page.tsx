import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ORTER, ORT_BY_SLUG } from "@/content/orter";
import { SERVICES } from "@/content/services";
import { isLandingPageIndexed } from "@/content/indexing";
import { buildMetadata, fitTitle } from "@/lib/seo";
import { breadcrumbListSchema, itemListSchema } from "@/lib/schema";
import { guidesIndexPath, lpPath, ortPath, orterIndexPath, servicesIndexPath } from "@/lib/routes";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { HubHero } from "@/components/shared/HubHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { RelatedLinks, type RelatedLinkGroup } from "@/components/shared/RelatedLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return ORTER.map((o) => ({ ort: o.slug }));
}

interface PageProps {
  params: Promise<{ ort: string }>;
}

/**
 * Town hubs target "städning {ort}" / "städhjälp {ort}". The high-value
 * "städfirma {ort}" query is owned by /tjanster/stadfirma/{ort} — the hub
 * links to it prominently instead of competing with it.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ort: ortSlug } = await params;
  const ort = ORT_BY_SLUG[ortSlug];
  if (!ort) return {};
  const district = ort.districts[0] ?? ort.name;
  return buildMetadata({
    title: fitTitle([
      `Städning i ${ort.name} – alla städtjänster & RUT`,
      `Städning i ${ort.name} – alla städtjänster`,
      `Städning i ${ort.name}`,
    ]),
    description: `Städning i ${ort.name} och ${district}: hemstäd, flyttstäd, fönsterputs, kontorsstäd och trädgårdsskötsel hos en lokal leverantör. RUT-avdrag för privatpersoner.`,
    path: ortPath(ortSlug),
  });
}

export default async function OrtHubPage({ params }: PageProps) {
  const { ort: ortSlug } = await params;
  const ort = ORT_BY_SLUG[ortSlug];
  if (!ort) notFound();

  const path = ortPath(ortSlug);
  // Indexed (search-demand) services first.
  const services = [...SERVICES].sort(
    (a, b) =>
      Number(isLandingPageIndexed(b.slug, ortSlug)) - Number(isLandingPageIndexed(a.slug, ortSlug)),
  );
  const serviceItems = services.map((s) => ({
    name: `${s.keyword} i ${ort.name}`,
    path: lpPath(s.slug, ortSlug),
  }));

  const neighbours = ort.nearby
    .map((n) => ({ ...n, slug: ORTER.find((o) => o.name === n.name)?.slug }))
    .filter((n): n is typeof n & { slug: string } => Boolean(n.slug));

  const relatedGroups: RelatedLinkGroup[] = [
    {
      heading: "Grannorter",
      links: neighbours.map((n) => ({
        label: `Städning i ${n.name} (~${n.km} km)`,
        href: ortPath(n.slug),
      })),
    },
    {
      heading: "Läs mer",
      links: [
        { label: "Alla områden", href: orterIndexPath() },
        { label: "Alla tjänster", href: servicesIndexPath() },
        { label: "Guider & priser", href: guidesIndexPath() },
      ],
    },
  ];

  const breadcrumbs = [
    { name: "Hem", path: "/" },
    { name: "Områden", path: orterIndexPath() },
    { name: `Städning i ${ort.name}`, path },
  ];

  return (
    <>
      <Jsonld data={[breadcrumbListSchema(breadcrumbs), itemListSchema(serviceItems)]} />
      <div className="min-h-screen bg-background">
        <PageHeader ctaSectionId="hub-contact-form" />
        <main>
          <HubHero
            eyebrow={`${ort.kommun} · ${ort.lan}`}
            h1={`Städning i ${ort.name}`}
            text={`Hemstäd, flyttstäd, kontorsstäd, fönsterputs, trädgårdsskötsel och mer – Belganet Städ och Allservice finns i ${ort.name} och omnejd.`}
            ctaTargetId="hub-contact-form"
          />

          <div className="bg-brand-navy/95 py-3 px-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>

          <section id="hub-services" className="py-24 bg-background" aria-labelledby="hub-services-heading">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <span className="section-heading-eyebrow">Våra tjänster i {ort.name}</span>
                <h2 id="hub-services-heading" className="section-heading">
                  All städning i {ort.name} – under ett tak
                </h2>
                <p className="section-subheading">
                  Välj en tjänst nedan för pris, innehåll och en kostnadsfri offert
                  anpassad för {ort.name}.
                </p>
              </div>

              <Link
                href={lpPath("stadfirma", ortSlug)}
                className="group mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-brand-navy p-7 text-white hover:shadow-xl hover:shadow-brand-amber/20 transition-all"
              >
                <span>
                  <span className="block font-serif text-2xl font-bold">Städfirma i {ort.name}</span>
                  <span className="mt-1 block text-sm text-white/65 font-sans">
                    Söker du en städfirma som sköter allt – hem, kontor, fönster och trädgård? Läs mer här.
                  </span>
                </span>
                <ArrowRight
                  size={22}
                  className="shrink-0 text-brand-amber group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter((s) => s.slug !== "stadfirma")
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={lpPath(s.slug, ortSlug)}
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
                  Städhjälp i {ort.name} med omnejd
                </h2>
              </div>
              <div className="bg-white rounded-2xl border border-border p-8 md:p-10">
                <p className="text-muted-foreground leading-relaxed font-sans mb-6">{ort.colorFact}</p>
                <p className="text-muted-foreground leading-relaxed font-sans mb-6">
                  Belganet Städ och Allservice är verksamma i hela {ort.kommun}
                  {ort.districts.length > 0 && <>, inklusive {ort.districts.join(" och ")}</>}. Vi anpassar
                  alltid tjänsten efter din bostad eller lokal, oavsett var i {ort.name} du befinner dig.
                </p>
                {neighbours.length > 0 && (
                  <p className="text-muted-foreground leading-relaxed font-sans mb-8">
                    Vi städar också i grannorterna{" "}
                    {neighbours.map((n, i) => (
                      <span key={n.slug}>
                        {i > 0 && (i === neighbours.length - 1 ? " och " : ", ")}
                        <Link href={ortPath(n.slug)} className="text-brand-amber hover:underline">
                          {n.name}
                        </Link>{" "}
                        (~{n.km} km)
                      </span>
                    ))}
                    .
                  </p>
                )}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {[
                    "Lokalt & personligt",
                    "Miljögodkänt",
                    "RUT-avdrag för privatpersoner",
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
        <Footer />
      </div>
    </>
  );
}
