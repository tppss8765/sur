"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/shared/Eyebrow";
import { FRUITS } from "@/data/produce";

const TODAY = FRUITS.slice(0, 8);

export default function FreshArrivals() {
  return (
    <section className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow tone="papaya">Updated Every Morning</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3 text-ink mb-12">
          Today&apos;s Fresh Arrivals
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TODAY.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden border border-ink/6 bg-white hover:border-papaya/20 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="relative h-36 overflow-hidden bg-cream-dim">
                <Image
                  src={item.photo}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-ink">{item.name}</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                  <span className="font-mono text-[0.6rem] text-leaf uppercase tracking-wide">Fresh</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seasonal banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="relative mt-8 rounded-3xl bg-gradient-to-r from-papaya to-papaya-deep p-8 sm:p-10 overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-14 h-48 w-48 rounded-full bg-turmeric/30 blur-2xl" />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80">Seasonal Special</span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-cream mt-2">
                Mango &amp; Jackfruit season is here
              </h3>
              <p className="text-cream/75 text-sm mt-1 max-w-md">
                Limited-time Alphonso milkshakes and jackfruit by the slice — while the harvest lasts.
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs px-4 py-2 rounded-full bg-cream text-papaya-deep font-semibold w-fit">
              Ask in-store
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
