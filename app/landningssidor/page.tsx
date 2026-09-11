import type { Metadata } from "next";
import Link from "next/link";
import { ORTER } from "@/content/orter";
import { SERVICES } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbListSchema, itemListSchema } from "@/lib/schema";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";

export const metadata: Metadata = buildMetadata({
  title: "Alla tjänster & orter – landningssidor",
  description:
    "Bläddra bland alla Belganets tjänster och orter: hemstäd, flyttstäd, kontorsstäd, fönsterputs, trädgårdsskötsel och mer i Ronneby, Karlskrona, Växjö, Kalmar och fler städer i Sydsverige.",
  path: "/landningssidor",
});

export default function LandningssidorIndexPage() {
  const allItems = ORTER.flatMap((ort) =>
    SERVICES.map((s) => ({
      name: `${s.keyword} i ${ort.name}`,
      path: `/landningssidor/${s.slug}-${ort.slug}`,
    })),
  );

  return (
    <>
      <Jsonld
        data={[
          breadcrumbListSchema([
            { name: "Hem", path: "/" },
            { name: "Landningssidor", path: "/landningssidor" },
          ]),
          itemListSchema(allItems),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader navItems={[]} ctaHref="/#contact-form" />
        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs
                items={[
                  { name: "Hem", path: "/" },
                  { name: "Landningssidor", path: "/landningssidor" },
                ]}
              />
            </div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-heading-eyebrow">Alla sidor</span>
              <h1 className="section-heading">Tjänster i alla våra orter</h1>
              <p className="section-subheading">
                Belganet Städ och Allservice erbjuder {SERVICES.length} tjänster i{" "}
                {ORTER.length} orter i Sydsverige. Hitta din ort nedan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {ORTER.map((ort) => (
                <div key={ort.slug} id={ort.slug} className="rounded-2xl border border-border p-8">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="font-serif text-2xl font-bold text-brand-navy">{ort.name}</h2>
                    <Link
                      href={`/omraden/${ort.slug}`}
                      className="text-brand-amber text-sm font-semibold hover:text-brand-amber-light transition-colors"
                    >
                      Se område →
                    </Link>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2" role="list">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/landningssidor/${s.slug}-${ort.slug}`}
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
        <LandingFooter />
      </div>
    </>
  );
}
