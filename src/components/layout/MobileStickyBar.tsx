"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import { telLink, whatsappLink, mapsDirectionsLink } from "@/lib/site";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40">
      <div className="glass-dark border-t border-cream/10 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2.5">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={telLink}
            className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl text-cream active:bg-cream/10 transition-colors"
          >
            <Phone className="h-5 w-5 text-papaya" />
            <span className="text-[0.65rem] font-medium font-mono tracking-wide">
              CALL
            </span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl text-cream active:bg-cream/10 transition-colors"
          >
            <MessageCircle className="h-5 w-5 text-lime" />
            <span className="text-[0.65rem] font-medium font-mono tracking-wide">
              WHATSAPP
            </span>
          </a>
          <a
            href={mapsDirectionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl text-cream active:bg-cream/10 transition-colors"
          >
            <MapPin className="h-5 w-5 text-turmeric" />
            <span className="text-[0.65rem] font-medium font-mono tracking-wide">
              DIRECTIONS
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
