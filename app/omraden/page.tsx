import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ORTER } from "@/content/orter";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbListSchema, itemListSchema } from "@/lib/schema";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";

export const metadata: Metadata = buildMetadata({
  title: "Våra områden – städfirma i Sydsverige",
  description:
    "Belganet Städ och Allservice är verksamma i Ronneby, Karlskrona, Växjö, Kalmar, Karlshamn, Sölvesborg, Olofström, Nybro, Emmaboda och Oskarshamn.",
  path: "/omraden",
});

export default function OmradenIndexPage() {
  const items = ORTER.map((o) => ({ name: o.name, path: `/omraden/${o.slug}` }));

  return (
    <>
      <Jsonld
        data={[
          breadcrumbListSchema([
            { name: "Hem", path: "/" },
            { name: "Områden", path: "/omraden" },
          ]),
          itemListSchema(items),
        ]}
      />
      <div className="min-h-screen bg-background">
        <PageHeader navItems={[]} ctaHref="/#contact-form" />
        <main className="pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs
                items={[
                  { name: "Hem", path: "/" },
                  { name: "Områden", path: "/omraden" },
                ]}
              />
            </div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-heading-eyebrow">Våra områden</span>
              <h1 className="section-heading">Städfirma i {ORTER.length} orter</h1>
              <p className="section-subheading">
                Vi erbjuder hemstäd, flyttstäd, kontorsstäd, fönsterputs och
                trädgårdsskötsel i Blekinge och Kalmar län.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ORTER.map((ort) => (
                <Link
                  key={ort.slug}
                  href={`/omraden/${ort.slug}`}
                  className="group flex flex-col p-7 rounded-2xl bg-brand-surface border border-border hover:border-brand-amber/40 hover:shadow-xl hover:shadow-brand-amber/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-amber transition-colors duration-300">
                    <MapPin
                      size={20}
                      className="text-brand-amber group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-serif text-lg font-bold text-brand-navy mb-1">{ort.name}</h2>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-sans">
                    {ort.lan}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <LandingFooter />
      </div>
    </>
  );
}
