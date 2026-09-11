import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ORTER } from "@/content/orter";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbListSchema, itemListSchema } from "@/lib/schema";
import { lpPath, ortPath, orterIndexPath, servicesIndexPath } from "@/lib/routes";
import { Jsonld } from "@/components/shared/Jsonld";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Våra orter – städning i Blekinge & Kalmar",
  description:
    "Vi städar i Ronneby, Karlskrona, Växjö, Kalmar, Karlshamn, Sölvesborg, Olofström, Nybro, Emmaboda och Oskarshamn. Hitta din ort och begär en kostnadsfri offert.",
  path: orterIndexPath(),
});

const LAN_ORDER = ["Blekinge län", "Kalmar län", "Kronobergs län"];

export default function OmradenIndexPage() {
  const items = ORTER.map((o) => ({ name: `Städning i ${o.name}`, path: ortPath(o.slug) }));
  const breadcrumbs = [
    { name: "Hem", path: "/" },
    { name: "Områden", path: orterIndexPath() },
  ];
  const byLan = LAN_ORDER.map((lan) => ({ lan, orter: ORTER.filter((o) => o.lan === lan) })).filter(
    (g) => g.orter.length > 0,
  );

  return (
    <>
      <Jsonld data={[breadcrumbListSchema(breadcrumbs), itemListSchema(items)]} />
      <div className="min-h-screen bg-background">
        <PageHeader />
        <main className="pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} tone="light" />
            </div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-heading-eyebrow">Våra områden</span>
              <h1 className="section-heading">Städning i {ORTER.length} orter i sydöstra Sverige</h1>
              <p className="section-subheading">
                Belganet Städ och Allservice utför hemstäd, flyttstäd, kontorsstäd, fönsterputs
                och trädgårdsskötsel i Blekinge, Kalmar län och Växjö med omnejd.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-16 space-y-4 text-muted-foreground leading-relaxed font-sans">
              <p>
                Vi är ett lokalt städföretag, och det märks i hur vi planerar. Kortare
                restider mellan uppdragen gör att vi kan erbjuda flexibla tider och
                snabb återkoppling i hela området – oavsett om du bor mitt i
                Karlskrona, i Kallinge utanför Ronneby eller i Lindsdal norr om Kalmar.
              </p>
              <p>
                Under varje ort hittar du alla tjänster vi utför där, lokal information och
                ett formulär för kostnadsfri offert. Söker du en viss tjänst kan du också
                utgå från{" "}
                <Link href={servicesIndexPath()} className="text-brand-amber hover:underline">
                  listan över alla tjänster
                </Link>
                . Bor du strax utanför orterna nedan är du ändå välkommen att höra av dig –
                vi täcker ofta även mindre orter i närheten.
              </p>
            </div>

            {byLan.map(({ lan, orter }) => (
              <section key={lan} className="mb-14" aria-label={lan}>
                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">{lan}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {orter.map((ort) => (
                    <div
                      key={ort.slug}
                      className="flex flex-col p-7 rounded-2xl bg-brand-surface border border-border"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5">
                        <MapPin size={20} className="text-brand-amber" aria-hidden="true" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-brand-navy mb-1">
                        <Link href={ortPath(ort.slug)} className="hover:text-brand-amber transition-colors">
                          Städning i {ort.name}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider font-sans mb-3">
                        {ort.kommun}
                      </p>
                      {ort.districts.length > 0 && (
                        <p className="text-sm text-muted-foreground font-sans mb-4">
                          Även {ort.districts.join(" och ")}.
                        </p>
                      )}
                      <Link
                        href={lpPath("stadfirma", ort.slug)}
                        className="mt-auto text-sm font-semibold text-brand-amber hover:text-brand-amber-light font-sans"
                      >
                        Städfirma i {ort.name} →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
