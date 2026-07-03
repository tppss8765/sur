"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import PeelDivider from "@/components/shared/PeelDivider";
import { FRUITS, VEGETABLES, SEASONAL } from "@/data/produce";
import { DEFAULT_MENU_ITEMS } from "@/data/menu";

const GALLERY_TABS = ["All", "Juices & Shakes", "Fresh Fruits", "Vegetables", "Seasonal"] as const;
type GalleryTab = typeof GALLERY_TABS[number];

type GalleryItem = {
  id: string;
  tab: Exclude<GalleryTab, "All">[];
  label: string;
  sublabel: string;
  photo: string;
  tall?: boolean;
};

// Build gallery items from real data
const JUICE_ITEMS: GalleryItem[] = DEFAULT_MENU_ITEMS
  .filter((i) => i.photo && i.available !== false)
  .slice(0, 9)
  .map((i) => ({
    id: i.id,
    tab: ["Juices & Shakes"],
    label: i.name,
    sublabel: `₹${i.price} · ${i.category === "special" ? "Special" : i.category === "milkshake" ? "Milkshake" : "Juice"}`,
    photo: i.photo!,
    tall: i.featured,
  }));

const FRUIT_ITEMS: GalleryItem[] = FRUITS.map((f) => ({
  id: f.id,
  tab: ["Fresh Fruits"],
  label: f.name,
  sublabel: f.desc || "In stock daily",
  photo: f.photo,
}));

const VEG_ITEMS: GalleryItem[] = VEGETABLES.map((v) => ({
  id: v.id,
  tab: ["Vegetables"],
  label: v.name,
  sublabel: v.desc || "Farm fresh",
  photo: v.photo,
}));

const SEASONAL_ITEMS: GalleryItem[] = SEASONAL.map((s) => ({
  id: s.id,
  tab: ["Seasonal"],
  label: s.name,
  sublabel: s.desc || "Seasonal availability",
  photo: s.photo,
}));

const ALL_ITEMS = [...JUICE_ITEMS, ...FRUIT_ITEMS, ...VEG_ITEMS, ...SEASONAL_ITEMS];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeTab === "All"
      ? ALL_ITEMS
      : ALL_ITEMS.filter((i) => i.tab.includes(activeTab as Exclude<GalleryTab, "All">));

  return (
    <>
      <section className="relative bg-ink text-cream pt-36 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-papaya/5 via-transparent to-lime/5" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Eyebrow tone="papaya" className="mb-4 justify-center">Visual Story</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] mb-5">
            A <span className="text-papaya italic">gallery</span> of freshness
          </h1>
          <p className="text-cream/60 text-lg max-w-lg mx-auto">
            The colours of the counter — fresh fruits, vegetables, juices and the shakes that made us famous.
          </p>
        </div>
        <PeelDivider position="bottom" color="var(--color-cream)" />
      </section>

      <section className="bg-cream py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-6">
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {GALLERY_TABS.map((tab) => {
              const count =
                tab === "All"
                  ? ALL_ITEMS.length
                  : ALL_ITEMS.filter((i) => i.tab.includes(tab as Exclude<GalleryTab, "All">)).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wide transition-all ${
                    activeTab === tab
                      ? "bg-ink text-cream shadow-md"
                      : "bg-cream-dim text-ink/55 hover:text-ink"
                  }`}
                >
                  {tab} <span className="opacity-40 ml-1">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Masonry grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.28, delay: Math.min(i * 0.03, 0.3) }}
                  onClick={() => setLightbox(item)}
                  className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ height: item.tall ? "22rem" : i % 3 === 0 ? "16rem" : "12rem" }}
                  >
                    <Image
                      src={item.photo}
                      alt={item.label}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="h-4 w-4 text-white" />
                    </div>
                    {/* Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold text-sm leading-tight">{item.label}</p>
                      <p className="text-white/60 text-xs font-mono mt-0.5">{item.sublabel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <p className="text-center font-mono text-xs text-ink/30 uppercase tracking-widest mt-12">
            {filtered.length} items shown · Click any photo to enlarge
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative h-80">
                <Image
                  src={lightbox.photo}
                  alt={lightbox.label}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="bg-ink px-6 py-5">
                <p className="text-cream font-display text-xl font-semibold">{lightbox.label}</p>
                <p className="text-cream/50 text-sm font-mono mt-1">{lightbox.sublabel}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
