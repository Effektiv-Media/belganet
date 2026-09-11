"use client";

import type { ReactNode } from "react";

/**
 * Tiny client leaf for "scroll to the form" CTAs, so the sections that use
 * it can stay server components (no hydration cost for their content).
 */
export function ScrollButton({
  targetId,
  className,
  children,
  ariaLabel,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
      className={className}
    >
      {children}
    </button>
  );
}
