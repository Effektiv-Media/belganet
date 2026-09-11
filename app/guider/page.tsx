import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { GUIDES } from "@/content/guides";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbListSchema, itemListSchema } from "@/lib/schema";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { guidePath, guidesIndexPath } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "Städguider: priser, RUT & checklistor",
  description:
    "Guider om RUT-avdrag 2026, vad flyttstädning, hemstädning och fönsterputs kostar, och checklistor inför flytt och storstädning – med tydliga prisexempel.",
  path: guidesIndexPath(),
});

export default function GuiderIndexPage() {
  const items = GUIDES.map((g) => ({ name: g.title, path: guidePath(g.slug) }));

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
        <PageHeader />
        <main className="pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs
                tone="light"
                items={[
                  { name: "Hem", path: "/" },
                  { name: "Guider", path: guidesIndexPath() },
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
                  href={guidePath(guide.slug)}
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
                    {guide.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
