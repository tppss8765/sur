"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import PeelDivider from "@/components/shared/PeelDivider";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { REVIEWS } from "@/data/reviews";
import { SITE } from "@/lib/site";

const FILTER_OPTIONS = [
  { label: "All", value: 0 },
  { label: "5 Stars", value: 5 },
  { label: "4 Stars", value: 4 },
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState(0);
  const visible = filter === 0 ? REVIEWS : REVIEWS.filter((r) => r.rating === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-cream pt-36 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-turmeric/10 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Eyebrow tone="turmeric" className="mb-4 justify-center">Google Reviews</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] mb-6">
            What Kozhikode <span className="text-turmeric italic">says about us</span>
          </h1>
          {/* Rating summary */}
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-8 glass-dark rounded-3xl px-8 py-6">
            <div className="text-center">
              <AnimatedCounter to={SITE.rating.value * 10} suffix="" className="font-display text-6xl font-bold text-turmeric" />
              <span className="font-display text-6xl font-bold text-turmeric">/10</span>
              <p className="font-mono text-xs text-cream/50 uppercase tracking-widest mt-1">Overall Score</p>
            </div>
            <div className="w-px h-16 bg-cream/10 hidden sm:block" />
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`h-6 w-6 ${s <= Math.round(SITE.rating.value) ? "fill-turmeric text-turmeric" : "text-cream/20"}`} />
                ))}
              </div>
              <AnimatedCounter to={SITE.rating.count} suffix="+" className="font-display text-3xl font-bold" />
              <p className="font-mono text-xs text-cream/50 uppercase tracking-widest mt-1">Happy Customers</p>
            </div>
            <div className="w-px h-16 bg-cream/10 hidden sm:block" />
            <div className="text-center">
              <p className="font-display text-2xl font-semibold text-lime">Best in</p>
              <p className="font-display text-2xl font-semibold text-lime">Kozhikode</p>
              <p className="font-mono text-xs text-cream/50 uppercase tracking-widest mt-1">Juice Shop</p>
            </div>
          </div>
        </div>
        <PeelDivider position="bottom" color="var(--color-cream)" />
      </section>

      {/* Reviews grid */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter */}
          <div className="flex gap-2 mb-10">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wide transition-all ${
                  filter === opt.value ? "bg-ink text-cream" : "bg-cream-dim text-ink/55 hover:text-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-2xl bg-white border border-ink/8 p-7 hover:border-papaya/20 transition-colors group"
              >
                <Quote className="absolute top-6 right-6 h-6 w-6 text-ink/6 group-hover:text-papaya/20 transition-colors" />
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= r.rating ? "fill-turmeric text-turmeric" : "fill-ink/10 text-ink/10"}`} />
                  ))}
                </div>
                <p className="text-ink/70 text-sm leading-relaxed mb-6">{r.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-ink/6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-papaya/15 text-papaya font-display font-semibold text-sm shrink-0">
                    {r.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-ink">{r.name}</p>
                    <p className="font-mono text-[0.65rem] text-ink/40">{r.date} &middot; Google Review</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA to leave review */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-3xl bg-ink text-cream p-10 text-center"
          >
            <h2 className="font-display text-3xl font-semibold mb-3">Had a great experience?</h2>
            <p className="text-cream/55 mb-6 max-w-md mx-auto">Your review helps other Kozhikode families find fresh, honest food. It takes 30 seconds.</p>
            <a
              href="https://g.page/r/suresh-veg-fruits/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-turmeric text-ink font-semibold hover:opacity-90 transition-opacity"
            >
              <Star className="h-4 w-4 fill-ink" />
              Leave a Google Review
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
