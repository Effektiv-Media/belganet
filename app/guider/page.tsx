import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { GUIDES } from "@/content/guides";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbListSchema, itemListSchema } from "@/lib/schema";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";

export const metadata: Metadata = buildMetadata({
  title: "Guider – priser, RUT-avdrag & checklistor för städning",
  description:
    "Läs våra guider om RUT-avdrag, priser på flyttstäd, hemstäd, fönsterputs och trädgårdsskötsel, samt praktiska checklistor inför städning.",
  path: "/guider",
});

export default function GuiderIndexPage() {
  const items = GUIDES.map((g) => ({ name: g.title, path: `/guider/${g.slug}` }));

  return (
    <>
      <Jsonld
        data={[
          breadcrumbListSchema([
            { name: "Hem", path: "/" },
            { name: "Guider", path: "/guider" },
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
                  { name: "Guider", path: "/guider" },
                ]}
              />
            </div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-heading-eyebrow">Guider</span>
              <h1 className="section-heading">Priser, RUT-avdrag &amp; checklistor</h1>
              <p className="section-subheading">
                Allt du behöver veta om priser, RUT-avdrag och vad som ingår i
                våra tjänster.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GUIDES.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guider/${guide.slug}`}
                  className="group flex flex-col p-7 rounded-2xl bg-brand-surface border border-border hover:border-brand-amber/40 hover:shadow-xl hover:shadow-brand-amber/10 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-amber transition-colors duration-300">
                    <BookOpen
                      size={19}
                      className="text-brand-amber group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-serif text-lg font-bold text-brand-navy mb-2">
                    {guide.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    {guide.intro}
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
