"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";
import { JuiceDrop } from "@/components/shared/FruitIllustrations";

export default function CtaStrip() {
  return (
    <section className="relative bg-cream py-20 sm:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl rounded-3xl bg-ink px-6 sm:px-14 py-14 sm:py-16 text-center overflow-hidden"
      >
        <div className="absolute -top-10 left-10 w-10 opacity-70">
          <JuiceDrop fill="#E8542C" />
        </div>
        <div className="absolute -top-6 right-16 w-7 opacity-60">
          <JuiceDrop fill="#9FC131" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-papaya/10 via-transparent to-lime/10" />

        <h2 className="relative font-display text-3xl sm:text-5xl font-semibold text-cream leading-tight">
          Craving something fresh
          <br className="hidden sm:block" /> right now?
        </h2>
        <p className="relative text-cream/60 mt-4 max-w-md mx-auto">
          We&apos;re open. We&apos;re always open. Call ahead or message us
          on WhatsApp and your order will be ready when you arrive.
        </p>
        <div className="relative mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-lime text-ink font-semibold hover:bg-lime-deep transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle className="h-5 w-5" />
            Message on WhatsApp
          </a>
          <a
            href={telLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-papaya text-cream font-semibold hover:bg-papaya-deep transition-colors w-full sm:w-auto justify-center"
          >
            <Phone className="h-5 w-5" />
            +91 99955 28848
          </a>
        </div>
      </motion.div>
    </section>
  );
}
