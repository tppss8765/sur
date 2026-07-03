"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "@/components/shared/Eyebrow";
import PeelDivider from "@/components/shared/PeelDivider";
import { DEFAULT_MENU_ITEMS, MENU_CATEGORIES, CATEGORY_LABELS, CATEGORY_COLORS } from "@/data/menu";
import type { MenuItem } from "@/data/menu";

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`group rounded-2xl overflow-hidden border transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        item.featured
          ? "border-papaya/30 bg-ink text-cream shadow-md"
          : "border-ink/8 bg-white"
      }`}
    >
      {/* Photo */}
      <div className="relative h-44 overflow-hidden bg-cream-dim">
        {item.photo ? (
          <Image
            src={item.photo}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <div
            className="h-full w-full flex items-center justify-center text-4xl"
            style={{ background: item.featured ? "#16301F" : "#F2EDE0" }}
          >
            🥤
          </div>
        )}
        {/* Tags overlay */}
        {item.tags && item.tags[0] && (
          <span className="absolute top-3 left-3 bg-papaya text-cream text-[0.6rem] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full font-semibold shadow-md">
            {item.tags[0]}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`font-display text-lg font-semibold leading-tight ${item.featured ? "text-cream" : "text-ink"}`}>
            {item.name}
          </h3>
          <span className={`font-mono text-xl font-bold shrink-0 ${item.featured ? "text-lime" : "text-papaya"}`}>
            ₹{item.price}
          </span>
        </div>
        <p className={`text-sm leading-relaxed mb-3 ${item.featured ? "text-cream/60" : "text-ink/55"}`}>
          {item.description}
        </p>
        <span className={`inline-block px-2.5 py-1 rounded-full text-[0.62rem] font-mono uppercase tracking-wide ${
          item.featured ? "bg-cream/10 text-cream/60" : CATEGORY_COLORS[item.category]
        }`}>
          {CATEGORY_LABELS[item.category] || item.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return DEFAULT_MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchQ = !query || item.name.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ && item.available !== false;
    });
  }, [activeCategory, query]);

  return (
    <>
      <section className="relative bg-ink text-cream pt-36 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-lime/10 blur-[140px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Eyebrow tone="lime" className="mb-4 justify-center">Full Menu</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] mb-5">
            Every glass, every <span className="text-lime italic">drop</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            Fresh juices, vegetable juices, milkshakes, and our signature Abooda Saboora Masoora —
            made to order, served cold, available 24 hours.
          </p>
        </div>
        <PeelDivider position="bottom" color="var(--color-cream)" />
      </section>

      <section className="bg-cream py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <div className="flex gap-2 flex-wrap">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wide transition-all ${
                    activeCategory === cat.id
                      ? "bg-ink text-cream shadow-md"
                      : "bg-cream-dim text-ink/55 hover:text-ink"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/35" />
              <input
                type="search"
                placeholder="Search menu…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 rounded-full bg-cream-dim text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-papaya/25 w-full sm:w-60"
              />
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-ink/35 py-20 font-mono text-sm"
              >
                No items found — try a different filter or search.
              </motion.p>
            ) : (
              <motion.div key="grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-12 text-center font-mono text-xs text-ink/30 uppercase tracking-[0.2em]">
            Prices may vary by season &middot; Ask at the counter for today&apos;s specials &middot; Open 24 Hours
          </p>
        </div>
      </section>
    </>
  );
}
