import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import {
  SITE,
  telLink,
  whatsappLink,
  mapsDirectionsLink,
} from "@/lib/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 2.2.27 2.95.55a5.9 5.9 0 0 1 2.14 1.39 5.9 5.9 0 0 1 1.39 2.14c.28.75.49 1.78.55 2.95.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85a8.96 8.96 0 0 1-.55 2.95 5.9 5.9 0 0 1-1.39 2.14 5.9 5.9 0 0 1-2.14 1.39c-.75.28-1.78.49-2.95.55-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07a8.96 8.96 0 0 1-2.95-.55 5.9 5.9 0 0 1-2.14-1.39 5.9 5.9 0 0 1-1.39-2.14 8.96 8.96 0 0 1-.55-2.95C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.17.27-2.2.55-2.95A5.9 5.9 0 0 1 4.21 2.06 5.9 5.9 0 0 1 6.35.67c.75-.28 1.78-.49 2.95-.55C10.55.04 10.95.04 12 .04Zm0 1.8c-3.15 0-3.52 0-4.76.07-1.03.05-1.6.22-1.97.36-.5.19-.85.42-1.22.79-.37.37-.6.72-.79 1.22-.14.37-.31.94-.36 1.97C2.84 9.43 2.84 9.8 2.84 12s0 2.57.06 3.79c.05 1.03.22 1.6.36 1.97.19.5.42.85.79 1.22.37.37.72.6 1.22.79.37.14.94.31 1.97.36 1.24.06 1.61.07 4.76.07s3.52 0 4.76-.07c1.03-.05 1.6-.22 1.97-.36.5-.19.85-.42 1.22-.79.37-.37.6-.72.79-1.22.14-.37.31-.94.36-1.97.06-1.22.07-1.59.07-3.79s0-2.57-.07-3.79c-.05-1.03-.22-1.6-.36-1.97a3.3 3.3 0 0 0-.79-1.22 3.3 3.3 0 0 0-1.22-.79c-.37-.14-.94-.31-1.97-.36-1.24-.07-1.61-.07-4.76-.07Zm0 4.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.94-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/fresh-market", label: "Fresh Market" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
];

const INFO_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-8 overflow-hidden">
      <div className="absolute -top-1 inset-x-0 h-10 bg-cream peel-edge-bottom" />

      <div className="mx-auto max-w-7xl px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-papaya text-cream font-display text-lg font-bold">
              S
            </span>
            <span className="font-display text-xl font-semibold">
              Suresh
              <span className="block text-xs font-mono font-normal tracking-[0.2em] uppercase opacity-60">
                Veg &amp; Fruits
              </span>
            </span>
          </Link>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            Kozhikode&apos;s favourite 24-hour fruit, vegetable and juice
            counter — fresh off the crate, every single day.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 hover:bg-papaya hover:border-papaya transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 hover:bg-papaya hover:border-papaya transition-colors"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-turmeric mb-4">
            Explore
          </h3>
          <ul className="space-y-3">
            {EXPLORE_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream/70 hover:text-cream text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-turmeric mb-4">
            Information
          </h3>
          <ul className="space-y-3">
            {INFO_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream/70 hover:text-cream text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-turmeric mb-4">
            Visit Us
          </h3>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-lime" />
              <a
                href={mapsDirectionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                {SITE.address.line1}, {SITE.address.line2},{" "}
                {SITE.address.city}, {SITE.address.state}{" "}
                {SITE.address.postalCode}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-lime" />
              <a href={telLink} className="hover:text-cream transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 mt-0.5 text-lime" />
              <span>Open 24 Hours, Every Day</span>
            </li>
          </ul>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-5 items-center gap-2 px-4 py-2.5 rounded-full bg-lime text-ink text-sm font-semibold hover:bg-lime-deep transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-14">
        <div className="rule-dashed text-cream/30 mb-6" />
        <div className="flex flex-col sm:flex-row gap-3 justify-between text-xs text-cream/40 font-mono">
          <p>
            © {new Date().getFullYear()} Suresh Veg &amp; Fruits. All rights
            reserved.
          </p>
          <p>Malaparamba, Kozhikode, Kerala 673009</p>
        </div>
      </div>
    </footer>
  );
}
