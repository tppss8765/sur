"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import { VEGETABLES } from "@/data/produce";

const SHOW = VEGETABLES.slice(0, 8);

export default function VegetablesShowcase() {
  return (
    <section className="relative bg-cream-dim py-24 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-leaf/8 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Eyebrow tone="lime">Farm to Counter</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3 text-ink">
              Fresh <span className="text-lime-deep italic">Vegetables</span>
            </h2>
            <p className="mt-3 text-ink/55 max-w-md text-sm leading-relaxed">
              Sourced every morning from Kozhikode market and direct farms.
              18+ varieties, always in stock, always fresh.
            </p>
          </div>
          <Link
            href="/fresh-market"
            className="inline-flex items-center gap-1.5 text-ink font-semibold border-b-2 border-lime-deep pb-1 w-fit hover:gap-2.5 transition-all shrink-0"
          >
            See All Produce <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SHOW.map((veg, i) => (
            <motion.div
              key={veg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group rounded-2xl overflow-hidden border border-ink/6 bg-white hover:border-lime/30 hover:shadow-md transition-all"
            >
              <div className="relative h-36 overflow-hidden bg-cream-dim">
                <Image
                  src={veg.photo}
                  alt={veg.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="px-4 py-3">
                <h3 className="font-display text-sm font-semibold text-ink">{veg.name}</h3>
                {veg.desc && (
                  <p className="text-ink/45 text-[0.7rem] font-mono mt-0.5 leading-snug">{veg.desc}</p>
                )}
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-wide text-leaf">In stock</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Veg juice nudge banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-2xl bg-leaf/10 border border-leaf/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-1">
            <p className="font-display text-lg font-semibold text-ink">We juice vegetables too</p>
            <p className="text-ink/55 text-sm mt-1">
              Beetroot-carrot, cucumber-mint, spinach detox, amla — 6 vegetable juice options on the menu.
            </p>
          </div>
          <Link
            href="/menu"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-leaf text-cream font-semibold text-sm hover:bg-leaf/80 transition-colors"
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.setItem("svf_menu_tab", "vegetable_juice");
              }
            }}
          >
            See Veg Juices <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
