"use client";

import { motion } from "framer-motion";

export default function OpenBadge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 rounded-full bg-ink/90 text-cream pl-2 pr-4 py-1.5 font-mono text-xs tracking-wide border border-turmeric/30 ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-turmeric opacity-75 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-turmeric" />
      </span>
      OPEN NOW &middot; 24 HOURS
    </motion.div>
  );
}
