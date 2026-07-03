"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Eyebrow from "@/components/shared/Eyebrow";
import { REVIEWS } from "@/data/reviews";
import { SITE } from "@/lib/site";

export default function ReviewsPreview() {
  return (
    <section className="relative bg-ink-soft text-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Eyebrow tone="turmeric">Best Juice Spot in Kozhikode</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3">
              {SITE.rating.value}★ from {SITE.rating.count}+ neighbours
            </h2>
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 font-semibold border-b-2 border-turmeric pb-1 w-fit hover:gap-2.5 transition-all"
          >
            Read All Reviews <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-cream/[0.04] border border-cream/10 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-papaya/20 text-papaya font-display font-semibold text-sm">
                    {r.initials}
                  </span>
                  <div>
                    <p className="font-medium text-sm">{r.name}</p>
                    <p className="text-xs text-cream/40 font-mono">{r.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-3.5 w-3.5 ${
                      idx < r.rating
                        ? "fill-turmeric text-turmeric"
                        : "text-cream/20"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-cream/65 leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
