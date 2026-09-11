import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper (fade-up on scroll). CSS-only via the `.reveal`
 * class in globals.css — a server component with zero JavaScript, and the
 * content is visible even where scroll-driven animations aren't supported.
 * `delay` is accepted for API compatibility; scroll-linked animations are
 * driven by position, so staggering happens naturally.
 */
export function RevealDiv({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className ? `reveal ${className}` : "reveal"}>{children}</div>;
}
