"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "@/components/shared/Eyebrow";
import PeelDivider from "@/components/shared/PeelDivider";
import { FRUITS, VEGETABLES, SEASONAL } from "@/data/produce";
import type { Produce } from "@/data/produce";
import { MessageCircle } from "lucide-react";

const TABS = [
  { id: "fruit",     label: "Fruits",      data: FRUITS,     count: FRUITS.length },
  { id: "vegetable", label: "Vegetables",  data: VEGETABLES, count: VEGETABLES.length },
  { id: "seasonal",  label: "Seasonal",    data: SEASONAL,   count: SEASONAL.length },
] as const;

function ProduceCard({ item, i }: { item: Produce; i: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.32, delay: i * 0.04 }}
      className="group rounded-2xl overflow-hidden border border-ink/6 bg-white hover:border-papaya/25 hover:shadow-md transition-all"
    >
      <div className="relative h-44 overflow-hidden bg-cream-dim">
        <Image
          src={item.photo}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {item.category === "seasonal" && (
          <span className="absolute top-2.5 right-2.5 bg-turmeric text-ink text-[0.6rem] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full font-semibold shadow">
            Seasonal
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-ink">{item.name}</h3>
        {item.desc && <p className="text-ink/50 text-xs mt-1 font-mono leading-relaxed">{item.desc}</p>}
        <div className="flex items-center gap-1.5 mt-3">
          <span className="h-1.5 w-1.5 rounded-full bg-lime shrink-0" />
          <span className="font-mono text-[0.62rem] uppercase tracking-wide text-leaf">In stock today</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function FreshMarketPage() {
  const [activeTab, setActiveTab] = useState<"fruit" | "vegetable" | "seasonal">("fruit");
  const current = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      <section className="relative bg-ink text-cream pt-36 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-80 rounded-full bg-lime/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-papaya/10 blur-[100px]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <Eyebrow tone="lime" className="mb-4">Daily Fresh</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] mb-5">
            The <span className="text-lime italic">Fresh Market</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-xl leading-relaxed mb-10">
            Fruits and vegetables sourced every morning from Kozhikode wholesale market and direct from farms.
            What you see is what arrived today — no cold storage, no week-old stock.
          </p>
          {/* Tab pills in hero */}
          <div className="flex gap-2 flex-wrap">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wide transition-all ${
                  activeTab === tab.id
                    ? "bg-cream text-ink shadow"
                    : "bg-cream/10 text-cream/60 hover:bg-cream/20"
                }`}
              >
                {tab.label} <span className="opacity-50 ml-1">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>
        <PeelDivider position="bottom" color="var(--color-cream)" />
      </section>

      <section className="bg-cream py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
            >
              {current.data.map((item, i) => (
                <ProduceCard key={item.id} item={item} i={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Seasonal callout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #16301F 0%, #0E1F14 100%)" }}
          >
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-lime/10 blur-3xl" />
            <div className="relative p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <Eyebrow tone="lime" className="mb-3">Seasonal Note</Eyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-cream mb-2">
                  What&apos;s in season right now?
                </h2>
                <p className="text-cream/60 text-sm leading-relaxed max-w-lg">
                  Kozhikode&apos;s market calendar follows the monsoon and harvest cycle.
                  Message us on WhatsApp for today&apos;s specials — especially exotics like
                  rambutan, mangosteen, jackfruit, and dragon fruit when in season.
                </p>
              </div>
              <a
                href="https://wa.me/919995528848?text=Hello%20Suresh%20Veg%20%26%20Fruits%2C%20what%20fruits%20and%20vegetables%20are%20fresh%20today%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-lime text-ink font-semibold text-sm hover:bg-lime-deep transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
