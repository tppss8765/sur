import Link from "next/link";
import { OrangeSlice } from "@/components/shared/FruitIllustrations";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink text-cream flex flex-col items-center justify-center text-center px-6">
      <div className="w-32 h-32 mb-8 opacity-80">
        <OrangeSlice />
      </div>
      <h1 className="font-display text-6xl font-semibold mb-3">404</h1>
      <p className="text-cream/60 text-lg mb-8 max-w-sm">
        This page seems to have been juiced already. Let&apos;s get you back to the counter.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-papaya text-cream font-semibold hover:bg-papaya-deep transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
