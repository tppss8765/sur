import type { Metadata } from "next";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import OpenBadge from "@/components/shared/OpenBadge";
import { SITE, telLink, whatsappLink, mapsDirectionsLink, mapsLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location & Directions",
  description: "Find Suresh Veg & Fruits at 33/6687 Wayanad Road, Malaparamba, Kozhikode. Open 24 hours. Get directions on Google Maps.",
};

const LANDMARKS = [
  "2 min from Malaparamba Junction",
  "Near Wayanad Road bus stop",
  "5 min from Calicut University Road",
  "10 min from Kozhikode city centre",
];

export default function LocationPage() {
  return (
    <>
      <section className="relative bg-ink text-cream pt-36 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-lime/10 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <OpenBadge className="mb-6" />
          <Eyebrow tone="lime" className="mb-4">Find Us</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] mb-6">
            We&apos;re on <span className="text-lime italic">Wayanad Road</span>,<br />
            Malaparamba
          </h1>
          <p className="text-cream/60 text-lg max-w-xl leading-relaxed">
            33/6687, B-6, Wayanad Road, Malaparamba, Kozhikode, Kerala 673009.
            Open 24 hours — no appointment needed.
          </p>
        </div>
      </section>

      <section className="bg-cream py-0">
        {/* Map embed */}
        <div className="w-full h-[420px] sm:h-[520px] overflow-hidden">
          <iframe
            title="Suresh Veg & Fruits location on Google Maps"
            src="https://maps.google.com/maps?q=11.2855,75.8064&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          {/* Store details */}
          <div>
            <Eyebrow tone="papaya" className="mb-4">Store Details</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-8">
              Everything you need to visit
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-papaya/10 shrink-0">
                  <MapPin className="h-5 w-5 text-papaya" />
                </div>
                <div>
                  <p className="font-semibold text-ink">Address</p>
                  <p className="text-ink/60 text-sm mt-0.5 leading-relaxed">
                    33/6687, B-6, Wayanad Road,<br />
                    Malaparamba, Kozhikode,<br />
                    Kerala 673009
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-papaya/10 shrink-0">
                  <Phone className="h-5 w-5 text-papaya" />
                </div>
                <div>
                  <p className="font-semibold text-ink">Phone</p>
                  <a href={telLink} className="text-papaya text-sm mt-0.5 hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/10 shrink-0">
                  <Clock className="h-5 w-5 text-lime-deep" />
                </div>
                <div>
                  <p className="font-semibold text-ink">Hours</p>
                  <p className="text-ink/60 text-sm mt-0.5">Open 24 Hours · Every Day of the Year</p>
                </div>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={mapsDirectionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-papaya text-cream font-semibold text-sm hover:bg-papaya-deep transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-lime text-ink font-semibold text-sm hover:bg-lime-deep transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Landmarks + hours grid */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-cream-dim p-7">
              <h3 className="font-display text-xl font-semibold text-ink mb-4">Nearby Landmarks</h3>
              <ul className="space-y-3">
                {LANDMARKS.map((l, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm text-ink/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-papaya shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-ink text-cream p-7">
              <h3 className="font-display text-xl font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-cream/60">{day}</span>
                    <span className="font-mono text-lime text-xs font-medium">Open 24 Hours</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-cream/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-turmeric opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-turmeric" />
                  </span>
                  <span className="font-mono text-xs text-cream/70 uppercase tracking-wide">Open right now</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink/8 p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-2">GPS Coordinates</p>
              <p className="font-mono text-sm text-ink">{SITE.geo.lat}° N, {SITE.geo.lng}° E</p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-papaya hover:underline font-mono"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
