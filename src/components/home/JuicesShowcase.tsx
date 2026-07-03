"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import { DEFAULT_MENU_ITEMS } from "@/data/menu";

const JUICES = DEFAULT_MENU_ITEMS.filter(
  (i) => (i.category === "juice" || i.category === "milkshake") && i.photo && i.available !== false
).slice(0, 6);

export default function JuicesShowcase() {
  return (
    <section className="relative bg-ink text-cream py-24 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-papaya/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-lime/8 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Eyebrow tone="papaya">Pressed to Order</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3">
              Our <span className="text-papaya italic">Juices</span> &amp; Shakes
            </h2>
            <p className="mt-3 text-cream/55 max-w-md text-sm leading-relaxed">
              14 fruit juices, 6 vegetable juices, 8 milkshakes — all made fresh.
              Nothing from a bottle. Nothing pre-mixed.
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-cream font-semibold border-b-2 border-papaya pb-1 w-fit hover:gap-2.5 transition-all shrink-0"
          >
            Full Menu <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {JUICES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="shrink-0 w-64 snap-start rounded-2xl overflow-hidden border border-cream/8 bg-cream/5 hover:border-papaya/30 hover:bg-cream/8 transition-all group"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.photo!}
                  alt={item.name}
                  fill
                  sizes="256px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-display text-base font-semibold text-cream leading-tight">{item.name}</p>
                  <p className="font-mono text-xl font-bold text-turmeric mt-0.5">₹{item.price}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-cream/55 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                {item.tags && item.tags[0] && (
                  <span className="inline-block mt-2.5 px-2.5 py-1 rounded-full bg-papaya/15 text-papaya text-[0.6rem] font-mono uppercase tracking-wide">
                    {item.tags[0]}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* "See all" card */}
          <div className="shrink-0 w-48 snap-start rounded-2xl border border-cream/8 flex flex-col items-center justify-center text-center p-6 hover:border-papaya/30 transition-colors">
            <div className="h-12 w-12 rounded-full bg-papaya/15 flex items-center justify-center mb-3">
              <ArrowUpRight className="h-5 w-5 text-papaya" />
            </div>
            <p className="font-display text-base font-semibold text-cream mb-1">+{DEFAULT_MENU_ITEMS.filter(i => i.available !== false).length - 6} more</p>
            <Link href="/menu" className="text-xs font-mono text-cream/40 hover:text-cream transition-colors underline underline-offset-2">
              See full menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
