import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/schema";

/**
 * Purely visual breadcrumb trail. The matching BreadcrumbList JSON-LD is
 * emitted by the page itself (alongside its other structured data) via
 * `breadcrumbListSchema()` — kept separate so a page never ends up with two
 * competing BreadcrumbList blocks.
 *
 * `tone="dark"` is for the navy strip under a hero; `tone="light"` for
 * pages with a white background (index pages, guides), where white text
 * would be invisible.
 */
export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: BreadcrumbItem[];
  tone?: "dark" | "light";
}) {
  const base = tone === "dark" ? "text-white/60" : "text-muted-foreground";
  const current = tone === "dark" ? "text-white" : "text-brand-navy";

  return (
    <nav aria-label="Brödsmulor" className="text-sm">
      <ol className={`flex flex-wrap items-center gap-1.5 ${base}`}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className={current}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-brand-amber transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
