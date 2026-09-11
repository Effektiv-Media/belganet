import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

/** A dark "related pages" strip used to build the internal-link silo: every
 * landing page links to its ort hub, sibling services in the same ort, the
 * same service in nearby orter, and relevant guides — so no page in the
 * ~150-page set is an orphan for crawlers. */
export function RelatedLinks({ groups }: { groups: RelatedLinkGroup[] }) {
  const nonEmpty = groups.filter((g) => g.links.length > 0);
  if (nonEmpty.length === 0) return null;

  return (
    <section className="py-16 bg-brand-navy-dark border-t border-white/5" aria-label="Relaterade sidor">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {nonEmpty.map((group) => (
            <div key={group.heading}>
              <h3 className="text-white/40 text-xs uppercase tracking-wider font-bold mb-4 font-sans">
                {group.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-white/60 text-sm hover:text-brand-amber transition-colors font-sans group"
                    >
                      <ArrowRight
                        size={13}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
