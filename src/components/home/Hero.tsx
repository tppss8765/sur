"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ShoppingBasket, Star } from "lucide-react";
import {
  OrangeSlice,
  WatermelonSlice,
  PapayaSlice,
  LimeSlice,
  JuiceDrop,
} from "@/components/shared/FruitIllustrations";
import OpenBadge from "@/components/shared/OpenBadge";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import PeelDivider from "@/components/shared/PeelDivider";
import { telLink, whatsappLink, mapsDirectionsLink, SITE } from "@/lib/site";

const dripTransition = (delay: number) => ({
  duration: 1.1,
  delay,
  ease: [0.55, 0, 1, 0.45] as const,
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-papaya/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lime/10 blur-[100px]" />

      {/* falling juice drips — orchestrated load sequence */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 420, opacity: [0, 1, 1, 0] }}
        transition={dripTransition(0.2)}
        className="absolute top-0 left-[18%] w-6 hidden sm:block"
      >
        <JuiceDrop fill="#E8542C" />
      </motion.div>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 480, opacity: [0, 1, 1, 0] }}
        transition={dripTransition(0.6)}
        className="absolute top-0 left-[82%] w-5 hidden sm:block"
      >
        <JuiceDrop fill="#9FC131" />
      </motion.div>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 360, opacity: [0, 1, 1, 0] }}
        transition={dripTransition(0.9)}
        className="absolute top-0 left-[50%] w-4 hidden sm:block"
      >
        <JuiceDrop fill="#F2BC1E" />
      </motion.div>

      {/* rotating fruit slices, ambient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute top-28 right-[6%] w-28"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <OrangeSlice />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute bottom-16 right-[18%] w-20"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <LimeSlice />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute top-44 left-[4%] w-24"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <PapayaSlice />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute bottom-24 left-[10%] w-16"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <WatermelonSlice />
        </motion.div>
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <OpenBadge className="mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-turmeric text-turmeric" />
            ))}
          </div>
          <span className="font-mono text-xs text-cream/60 tracking-wide">
            {SITE.rating.value}★ &middot; {SITE.rating.count}+ Reviews
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight"
        >
          Freshness
          <span className="relative inline-block mx-3">
            <span className="relative z-10 text-papaya italic">Served</span>
          </span>
          <br className="hidden sm:block" />
          24 Hours
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-base sm:text-lg text-cream/65 max-w-xl mx-auto leading-relaxed"
        >
          Kozhikode&apos;s favourite fruit, vegetable &amp; juice counter in
          Malaparamba — crushing fresh juices, milkshakes, and the legendary
          Abooda Saboora Masoora, day and night.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-papaya text-cream font-semibold shadow-lg shadow-papaya/30 hover:bg-papaya-deep transition-colors w-full sm:w-auto justify-center"
          >
            <ShoppingBasket className="h-5 w-5" />
            Order Now
          </a>
          <a
            href={telLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream/10 border border-cream/20 text-cream font-semibold hover:bg-cream/15 transition-colors w-full sm:w-auto justify-center"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a
            href={mapsDirectionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-cream/80 font-semibold hover:text-cream transition-colors w-full sm:w-auto justify-center"
          >
            <MapPin className="h-5 w-5" />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: 3000, suffix: "+", label: "Happy Reviews" },
            { value: 24, suffix: "/7", label: "Always Open" },
            { value: 100, suffix: "+", label: "Fruit Varieties" },
            { value: 50, suffix: "+", label: "Signature Drinks" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                to={stat.value}
                suffix={stat.suffix}
                className="font-display text-3xl sm:text-4xl font-semibold text-turmeric block"
              />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-cream/50 mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <PeelDivider position="bottom" color="var(--color-cream)" />
    </section>
  );
}
