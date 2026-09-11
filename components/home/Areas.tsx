import Link from "next/link";
import { MapPin } from "lucide-react";
import { ORTER } from "@/content/orter";
import { ortPath, orterIndexPath } from "@/lib/routes";
import { RevealDiv } from "./RevealDiv";

/**
 * "Här finns vi" — links every town hub from the homepage, the strongest
 * page on the site, with real local detail (län + named districts) rather
 * than a bare list of town names.
 */
export function Areas() {
  return (
    <section id="section-areas" className="py-24 bg-brand-surface" aria-labelledby="areas-heading">
      <div className="max-w-7xl mx-auto px-6">
        <RevealDiv className="text-center mb-16">
          <span className="section-heading-eyebrow">Här finns vi</span>
          <h2 id="areas-heading" className="section-heading">
            Städning i Blekinge, Kalmar län och Växjö
          </h2>
          <p className="section-subheading">
            Vi utgår från sydöstra Sverige och städar hem, kontor och trädgårdar i
            tio orter med omnejd. Välj din ort för tjänster, priser och kontakt.
          </p>
        </RevealDiv>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" role="list">
          {ORTER.map((ort) => (
            <li key={ort.slug}>
              <Link
                href={ortPath(ort.slug)}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 hover:border-brand-amber/40 hover:shadow-lg hover:shadow-brand-amber/10 transition-all duration-300"
              >
                <span className="flex items-center gap-2 font-serif text-lg font-bold text-brand-navy group-hover:text-brand-amber transition-colors">
                  <MapPin size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
                  Städning i {ort.name}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground font-sans">
                  {ort.lan}
                </span>
                {ort.districts.length > 0 && (
                  <span className="mt-3 text-sm text-muted-foreground font-sans">
                    Även {ort.districts.join(" och ")}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-muted-foreground font-sans">
          <Link href={orterIndexPath()} className="font-semibold text-brand-amber hover:text-brand-amber-light">
            Se alla områden vi täcker →
          </Link>
        </p>
      </div>
    </section>
  );
}
