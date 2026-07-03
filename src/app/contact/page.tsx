"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "@/components/shared/Eyebrow";
import PeelDivider from "@/components/shared/PeelDivider";
import { SITE, telLink, whatsappLink, mapsDirectionsLink } from "@/lib/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Suresh Veg & Fruits!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  const QUICK_LINKS = [
    { icon: Phone, label: "Call Us", sub: SITE.phoneDisplay, href: telLink, color: "bg-papaya/10 text-papaya" },
    { icon: MessageCircle, label: "WhatsApp", sub: "Chat instantly", href: whatsappLink, color: "bg-lime/10 text-lime-deep" },
    { icon: MapPin, label: "Visit Us", sub: "Malaparamba, Kozhikode", href: mapsDirectionsLink, color: "bg-turmeric/15 text-ink" },
    { icon: Clock, label: "Hours", sub: "Open 24 Hours, Every Day", href: "#", color: "bg-ink/5 text-leaf" },
  ];

  return (
    <>
      <section className="relative bg-ink text-cream pt-36 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-papaya/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <Eyebrow tone="papaya" className="mb-4">Get in Touch</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] mb-6">
            We&apos;re always here,<br />
            <span className="text-papaya italic">always open</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-xl leading-relaxed">
            Call, message, or just walk in — we never close. For quick responses,
            WhatsApp is best.
          </p>
        </div>
        <PeelDivider position="bottom" color="var(--color-cream)" />
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Quick contact cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {QUICK_LINKS.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-ink/8 p-6 hover:border-papaya/20 hover:-translate-y-1 transition-all group"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl mb-4 ${link.color}`}>
                  <link.icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-ink text-sm">{link.label}</p>
                <p className="text-ink/50 text-xs mt-1 font-mono">{link.sub}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact form + info */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* WhatsApp form */}
            <div className="rounded-3xl bg-ink text-cream p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold mb-2">Send us a message</h2>
              <p className="text-cream/50 text-sm mb-8">
                This will open WhatsApp with your message pre-filled — fast and direct.
              </p>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <CheckCircle2 className="h-12 w-12 text-lime" />
                    <p className="font-display text-xl font-semibold">WhatsApp opened!</p>
                    <p className="text-cream/50 text-sm">Your message is ready — just hit send.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 text-xs font-mono text-cream/40 underline hover:text-cream/70"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-cream/50 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full bg-cream/8 border border-cream/12 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-sm outline-none focus:border-papaya/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-cream/50 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-cream/8 border border-cream/12 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-sm outline-none focus:border-papaya/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-cream/50 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="e.g. What fruits do you have today? I'd like to order a mix..."
                        className="w-full bg-cream/8 border border-cream/12 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-sm outline-none focus:border-papaya/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-lime text-ink font-semibold rounded-xl py-3.5 hover:bg-lime-deep transition-colors"
                    >
                      <Send className="h-4 w-4" />
                      Send via WhatsApp
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Info panel */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-cream-dim p-7">
                <h3 className="font-display text-xl font-semibold text-ink mb-5">Store Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1">Address</p>
                    <p className="text-ink/70 leading-relaxed">33/6687, B-6, Wayanad Road,<br />Malaparamba, Kozhikode, Kerala 673009</p>
                  </div>
                  <div className="rule-dashed text-ink/20" />
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1">Phone</p>
                    <a href={telLink} className="text-papaya hover:underline">{SITE.phoneDisplay}</a>
                  </div>
                  <div className="rule-dashed text-ink/20" />
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1">Hours</p>
                    <p className="text-ink/70">Open 24 Hours · 365 Days a Year</p>
                  </div>
                  <div className="rule-dashed text-ink/20" />
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1">Rating</p>
                    <p className="text-ink/70">4.3★ · 3000+ Google Reviews</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-papaya/20 p-6 bg-papaya/5">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">Fastest Response</h3>
                <p className="text-ink/60 text-sm mb-4">For immediate help — availability, orders, or directions — WhatsApp is the fastest route.</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
