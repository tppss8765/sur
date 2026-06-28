import type { Metadata } from "next";
import { Leaf, Clock4, Users, Award } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import OpenBadge from "@/components/shared/OpenBadge";
import PeelDivider from "@/components/shared/PeelDivider";
import { OrangeSlice, WatermelonSlice, PapayaSlice } from "@/components/shared/FruitIllustrations";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story of Suresh Veg & Fruits — Kozhikode's 24-hour fruit, vegetable and juice counter.",
};

const MILESTONES = [
  { year: "Day 1", label: "First crate of fruits, first glass of juice — Malaparamba's newest counter opens its shutters." },
  { year: "Early days", label: "Word spreads fast in a neighbourhood. The Abooda Shake becomes a midnight ritual." },
  { year: "Growing up", label: "Daily vegetable sourcing added. The counter expands from juice bar to full fresh market." },
  { year: "3000+ Reviews", label: "Kozhikode's trust, earned one glass at a time. 4.3\u2605 and counting." },
];

const VALUES = [
  { icon: Leaf, title: "Freshness above all", desc: "Every fruit and vegetable is sourced daily. Nothing is stored overnight — if it doesn't sell, it goes." },
  { icon: Clock4, title: "Open without exception", desc: "Weddings, holidays, festivals, 3am hunger — we are open. Always have been. Always will be." },
  { icon: Users, title: "Community first", desc: "We know our regulars. We know the neighbourhood. This counter exists because of the people around it." },
  { icon: Award, title: "Honest pricing", desc: "Market rate, fair margin, no tricks. You know what you pay and you know it is worth it." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-ink text-cream pt-36 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-papaya/15 blur-[120px]" />
        <div className="hidden lg:block absolute opacity-20 -right-8 top-20 w-44"><OrangeSlice /></div>
        <div className="hidden lg:block absolute opacity-10 -left-12 bottom-10 w-36"><WatermelonSlice /></div>
        <div className="relative mx-auto max-w-4xl px-6">
          <OpenBadge className="mb-6" />
          <Eyebrow tone="papaya" className="mb-4">Our Story</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6">
            A counter built on<br />
            <span className="text-papaya italic">trust and freshness</span>
          </h1>
          <p className="text-cream/65 text-lg max-w-2xl leading-relaxed">
            Suresh Veg &amp; Fruits started with a simple premise: the people of Malaparamba deserve the
            freshest fruit and the best juice, at any hour. Everything since has been in service of that idea.
          </p>
        </div>
        <PeelDivider position="bottom" color="var(--color-cream)" />
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow tone="papaya" className="mb-4">The Beginning</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-6">
              From a single crate to Kozhikode&apos;s favourite
            </h2>
            <div className="space-y-4 text-ink/65 leading-relaxed">
              <p>It began the way most good things in Kozhikode begin — quietly, with a crate of mangoes and a borrowed blender. The shop on Wayanad Road wasn&apos;t designed to be famous. It was designed to be useful.</p>
              <p>The decision to stay open 24 hours wasn&apos;t a marketing move. It was a response to a real need. Students coming home late, families returning from hospital visits, workers finishing night shifts — they all needed something fresh. We were there.</p>
              <p>Over time, the Abooda Saboora Masoora became our signature. These aren&apos;t brand inventions — they&apos;re recipes that grew out of customer requests, neighbourhood tastes, and a little bit of kitchen stubbornness.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-papaya/10 p-8 flex items-center justify-center aspect-square"><OrangeSlice className="w-28" /></div>
            <div className="rounded-3xl bg-lime/10 p-8 flex items-center justify-center aspect-square mt-8"><PapayaSlice className="w-28" /></div>
            <div className="rounded-3xl bg-ink/5 p-8 flex items-center justify-center aspect-square -mt-4"><WatermelonSlice className="w-24" /></div>
            <div className="rounded-3xl bg-turmeric/10 p-4 flex flex-col items-center justify-center aspect-square">
              <span className="font-display text-4xl font-bold text-ink">4.3</span>
              <span className="font-mono text-xs text-ink/50 tracking-wide">\u2605 Rating</span>
              <span className="font-mono text-xs text-ink/50 mt-1">3000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ink-soft text-cream py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow tone="turmeric" className="mb-4">Milestones</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-14">Years of trust</h2>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-papaya/30" />
            <div className="space-y-12 pl-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-papaya ring-4 ring-ink-soft" />
                  <span className="font-mono text-xs text-papaya uppercase tracking-[0.2em]">{m.year}</span>
                  <p className="text-cream/75 mt-2 leading-relaxed max-w-xl">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow tone="papaya" className="mb-4">What We Stand For</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-14">Our values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="rounded-2xl border border-ink/8 p-7 hover:border-papaya/30 hover:bg-cream-dim transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-papaya/10 mb-5">
                  <v.icon className="h-5 w-5 text-papaya" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-ink">{v.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
