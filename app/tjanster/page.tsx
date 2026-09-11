import type { Metadata } from "next";
import Link from "next/link";
import { ORTER } from "@/content/orter";
import { SERVICES } from "@/content/services";
import { regionalize, serviceHeadTerm } from "@/content/serviceHub";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbListSchema, itemListSchema } from "@/lib/schema";
import { lpPath, ortPath, servicePath, servicesIndexPath } from "@/lib/routes";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Städtjänster i Blekinge, Kalmar & Växjö",
  description:
    "Alla våra tjänster: hemstäd, flyttstäd, kontorsstäd, fönsterputs, storstädning och trädgårdsskötsel i Ronneby, Karlskrona, Växjö, Kalmar och sex orter till.",
  path: servicesIndexPath(),
});

export default function ServicesIndexPage() {
  const breadcrumbs = [
    { name: "Hem", path: "/" },
    { name: "Tjänster", path: servicesIndexPath() },
  ];

  return (
    <>
      <Jsonld
        data={[
          breadcrumbListSchema(breadcrumbs),
          itemListSchema(SERVICES.map((s) => ({ name: serviceHeadTerm(s), path: servicePath(s.slug) }))),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader />
        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} tone="light" />
            </div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-heading-eyebrow">Våra tjänster</span>
              <h1 className="section-heading">Städtjänster i Blekinge, Kalmar län och Växjö</h1>
              <p className="section-subheading">
                Belganet Städ och Allservice erbjuder {SERVICES.length} tjänster i {ORTER.length} orter.
                Välj en tjänst för att läsa vad som ingår, eller hitta din ort längre ned.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24" role="list">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    className="group flex h-full flex-col p-7 rounded-2xl bg-brand-surface border border-border hover:border-brand-amber/40 hover:shadow-xl hover:shadow-brand-amber/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-amber transition-colors duration-300">
                      <s.icon
                        size={20}
                        className="text-brand-amber group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="font-serif text-lg font-bold text-brand-navy mb-2">{serviceHeadTerm(s)}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                      {regionalize(s.shortDesc)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="section-heading">Tjänster per ort</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {ORTER.map((ort) => (
                <div key={ort.slug} id={ort.slug} className="rounded-2xl border border-border p-8">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-serif text-2xl font-bold text-brand-navy">{ort.name}</h3>
                    <Link
                      href={ortPath(ort.slug)}
                      className="text-brand-amber text-sm font-semibold hover:text-brand-amber-light transition-colors"
                    >
                      Städning i {ort.name} →
                    </Link>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2" role="list">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={lpPath(s.slug, ort.slug)}
                          className="text-muted-foreground text-sm hover:text-brand-amber transition-colors font-sans"
                        >
                          {s.keyword} i {ort.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
