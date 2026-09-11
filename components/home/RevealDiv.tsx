"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Small scroll-reveal wrapper matching the original site's fade-up-on-scroll
 * effect (opacity 0 -> 1, translateY 28-36px -> 0). Kept as a thin client
 * leaf component so section wrappers themselves can stay server components.
 */
export function RevealDiv({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
