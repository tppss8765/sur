"use client";

import { motion } from "framer-motion";
import { Leaf, Clock4, ShieldCheck, Truck } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";

const PILLARS = [
  {
    icon: Leaf,
    title: "Cut Fresh, Not Stored",
    desc: "Fruit is sourced daily and prepared to order — nothing sits pre-cut waiting for a buyer.",
  },
  {
    icon: Clock4,
    title: "Never Closed",
    desc: "3am craving or noon rush, the counter is lit and the blender is on, every day of the year.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    desc: "Washed, prepped and served under standards we'd want for our own family.",
  },
  {
    icon: Truck,
    title: "Daily Market Runs",
    desc: "Direct from growers and wholesale markets each morning — no middle storage, no ageing stock.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-ink-soft text-cream py-24 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-lime/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <Eyebrow tone="lime">Quality Commitment</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3 max-w-xl">
          Why Kozhikode keeps coming back
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-cream/10 p-6 hover:border-lime/40 hover:bg-cream/[0.03] transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/15 mb-5">
                <p.icon className="h-5 w-5 text-lime" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-cream/55 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
