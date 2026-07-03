"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, MapPin, ChevronRight } from "lucide-react";
import { SITE, telLink, mapsDirectionsLink } from "@/lib/site";

const NAV_LINKS = [
  { href: "/",            label: "Home" },
  { href: "/about",       label: "About" },
  { href: "/menu",        label: "Menu" },
  { href: "/fresh-market",label: "Fresh Market" },
  { href: "/reviews",     label: "Reviews" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/location",    label: "Location" },
  { href: "/contact",     label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [hidden, setHidden]       = useState(false);
  const [open, setOpen]           = useState(false);
  const pathname                  = usePathname();
  const lastY                     = useRef(0);
  const { scrollY }               = useScroll();

  /* hide-on-scroll-down, reveal-on-scroll-up */
  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastY.current;
    setScrolled(y > 16);
    if (y > 80) setHidden(diff > 6);
    else setHidden(false);
    lastY.current = y;
  });

  /* lock body when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      {/* ── top announcement ticker ───────────────────────────── */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-50 bg-papaya overflow-hidden"
      >
        <div className="flex items-center justify-center gap-3 px-4 py-1.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-turmeric opacity-80 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-turmeric" />
          </span>
          <p className="font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.18em] text-cream/95 text-center">
            Open 24 Hours · Every Day · Malaparamba, Kozhikode &nbsp;·&nbsp; Call&nbsp;
            <a href={telLink} className="underline underline-offset-2 hover:text-white transition-colors font-semibold">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </motion.div>

      {/* ── main header ───────────────────────────────────────── */}
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="sticky top-0 inset-x-0 z-40"
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-ink/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-cream/6"
              : isHome
              ? "bg-transparent"
              : "bg-cream border-b border-ink/8"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-18">

              {/* ── Logo ── */}
              <Link href="/" className="flex items-center gap-3 group shrink-0">
                {/* Animated fruit badge */}
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-papaya to-papaya-deep text-cream font-display text-lg font-bold shadow-lg shadow-papaya/40"
                  >
                    S
                  </motion.div>
                  {/* pulse ring */}
                  <span className="absolute -inset-1 rounded-2xl border-2 border-papaya/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                </div>

                <div className="leading-none">
                  <span className={`block font-display text-lg sm:text-xl font-semibold transition-colors ${
                    scrolled || !isHome ? (scrolled ? "text-cream" : "text-ink") : "text-ink"
                  }`}>
                    Suresh
                  </span>
                  <span className={`block font-mono text-[0.58rem] sm:text-[0.65rem] tracking-[0.22em] uppercase transition-colors ${
                    scrolled ? "text-cream/50" : "text-ink/45"
                  }`}>
                    Veg &amp; Fruits
                  </span>
                </div>

                {/* 4.3★ rating pill — desktop only */}
                <div className={`hidden xl:flex items-center gap-1 ml-1 px-2.5 py-1 rounded-full border transition-all ${
                  scrolled
                    ? "border-turmeric/30 bg-turmeric/10"
                    : "border-turmeric/40 bg-turmeric/8"
                }`}>
                  <span className="text-turmeric text-[0.6rem]">★</span>
                  <span className="font-mono text-[0.6rem] font-semibold text-turmeric">4.3</span>
                </div>
              </Link>

              {/* ── Desktop Nav ── */}
              <nav className="hidden lg:flex items-center">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all group ${
                        scrolled
                          ? active ? "text-cream" : "text-cream/65 hover:text-cream"
                          : active ? "text-ink" : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      {link.label}
                      {/* active underline */}
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className={`absolute inset-0 rounded-xl -z-10 ${
                            scrolled ? "bg-cream/10" : "bg-ink/6"
                          }`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {/* hover dot */}
                      {!active && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-papaya scale-0 group-hover:scale-100 transition-transform" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Desktop CTAs ── */}
              <div className="hidden lg:flex items-center gap-2.5">
                <a
                  href={mapsDirectionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    scrolled
                      ? "border-cream/20 text-cream/80 hover:text-cream hover:border-cream/40 hover:bg-cream/8"
                      : "border-ink/15 text-ink/70 hover:text-ink hover:border-ink/30 hover:bg-ink/4"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Directions
                </a>
                <motion.a
                  href={telLink}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-papaya to-papaya-deep text-cream shadow-lg shadow-papaya/35 hover:shadow-papaya/50 hover:shadow-xl transition-shadow"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </motion.a>
              </div>

              {/* ── Hamburger ── */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={`lg:hidden relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  scrolled
                    ? "text-cream hover:bg-cream/10"
                    : "text-ink hover:bg-ink/6"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

            </div>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {open && (
            <>
              {/* backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 top-[calc(var(--ticker-h,40px)+64px)] bg-ink/60 backdrop-blur-sm z-30 lg:hidden"
              />

              {/* panel */}
              <motion.div
                key="drawer"
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-3 top-2 rounded-2xl overflow-hidden shadow-2xl z-40 lg:hidden"
                style={{
                  background: "rgba(14,31,20,0.97)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Panel header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-cream/8">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-xl bg-papaya flex items-center justify-center font-display font-bold text-cream text-sm">S</div>
                    <div>
                      <p className="font-display text-sm font-semibold text-cream leading-none">Suresh Veg &amp; Fruits</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-75 animate-ping" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
                        </span>
                        <span className="font-mono text-[0.58rem] text-lime uppercase tracking-widest">Open Now · 24 Hrs</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setOpen(false)} className="h-8 w-8 rounded-xl bg-cream/6 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-cream/10 transition-colors">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="px-2 py-3">
                  {NAV_LINKS.map((link, i) => {
                    const active = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors mb-0.5 ${
                            active
                              ? "bg-papaya/15 text-cream"
                              : "text-cream/70 hover:text-cream hover:bg-cream/6"
                          }`}
                        >
                          <span className="font-medium text-sm">{link.label}</span>
                          <ChevronRight className={`h-4 w-4 transition-opacity ${active ? "opacity-60 text-papaya" : "opacity-20"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* CTA buttons */}
                <div className="px-4 pb-4 pt-1 grid grid-cols-2 gap-2.5 border-t border-cream/8 mt-1">
                  <motion.a
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.36 }}
                    href={telLink}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-papaya to-papaya-deep text-cream text-sm font-bold shadow-lg shadow-papaya/30"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42 }}
                    href={mapsDirectionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-cream/15 text-cream/80 text-sm font-semibold hover:bg-cream/6 transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Directions
                  </motion.a>
                </div>

                {/* Rating bar */}
                <div className="mx-4 mb-4 rounded-xl bg-turmeric/8 border border-turmeric/15 px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-cream/40">Google Rating</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="font-display text-lg font-bold text-turmeric">4.3★</span>
                      <span className="font-mono text-[0.65rem] text-cream/45">· 3000+ Reviews</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-cream/40">Location</p>
                    <p className="font-mono text-[0.65rem] text-cream/60 mt-0.5">Malaparamba, Kozhikode</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
