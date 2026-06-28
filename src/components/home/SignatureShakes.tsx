"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import { DEFAULT_MENU_ITEMS } from "@/data/menu";

const FEATURED = DEFAULT_MENU_ITEMS.filter((i) => i.featured);

export default function SignatureShakes() {
  return (
    <section className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Eyebrow tone="papaya">The House Specials</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3 text-ink">
              Abooda. Saboora.{" "}
              <span className="text-papaya italic">Masoora.</span>
            </h2>
            <p className="mt-3 text-ink/55 max-w-md text-sm leading-relaxed">
              Three shakes you won&apos;t find spelled the same way twice
              anywhere else in Kozhikode. This is where it started.
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-ink font-semibold border-b-2 border-papaya pb-1 w-fit hover:gap-2.5 transition-all"
          >
            View Full Menu <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {FEATURED.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl bg-ink text-cream overflow-hidden"
            >
              {/* Photo header */}
              {item.photo && (
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  {item.tags?.[0] && (
                    <span className="absolute top-4 left-4 bg-papaya text-cream text-[0.6rem] font-mono uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                      {item.tags[0]}
                    </span>
                  )}
                </div>
              )}

              <div className="p-7 relative">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-papaya/15 blur-2xl group-hover:bg-papaya/25 transition-colors" />
                <h3 className="font-display text-2xl font-semibold mb-2 relative">{item.name}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-5 relative">{item.description}</p>
                <div className="flex items-end justify-between relative">
                  <span className="font-mono text-3xl font-semibold text-lime">₹{item.price}</span>
                  <span className="text-xs font-mono text-cream/35 uppercase tracking-wide">serves 1</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
