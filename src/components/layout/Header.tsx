"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { SITE, telLink, mapsDirectionsLink } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/fresh-market", label: "Fresh Market" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? "glass-dark py-2 shadow-lg shadow-black/10" : "py-2"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-papaya text-cream font-display text-lg font-bold transition-transform group-hover:rotate-12`}
            >
              S
            </span>
            <span
              className={`font-display text-lg sm:text-xl font-semibold leading-tight ${
                scrolled ? "text-cream" : "text-ink"
              }`}
            >
              Suresh
              <span className="block text-[0.65rem] sm:text-xs font-mono font-normal tracking-[0.2em] uppercase opacity-70">
                Veg &amp; Fruits
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors hover:bg-papaya/10 hover:text-papaya ${
                  scrolled ? "text-cream/90" : "text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={mapsDirectionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                scrolled
                  ? "border-cream/20 text-cream hover:bg-cream/10"
                  : "border-ink/15 text-ink hover:bg-ink/5"
              }`}
            >
              <MapPin className="h-4 w-4" />
              Directions
            </a>
            <a
              href={telLink}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-papaya text-cream hover:bg-papaya-deep transition-colors shadow-md shadow-papaya/30"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-full ${
              scrolled ? "text-cream" : "text-ink"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden mx-4 mt-2 rounded-2xl glass-dark p-3 shadow-xl"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-cream/90 font-medium hover:bg-cream/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-2 px-1">
                <a
                  href={telLink}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold bg-papaya text-cream"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={mapsDirectionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold border border-cream/20 text-cream"
                >
                  <MapPin className="h-4 w-4" /> Directions
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
