"use client";

import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <aside aria-label="Brzi poziv" className="fixed bottom-5 right-5 z-40">
      <a
        href="tel:+385994324392"
        className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white shadow-xl shadow-black/60 flex items-center justify-center transition-transform"
        aria-label="Nazovite AutoService Mario: 099 432 43 92"
      >
        <Phone className="w-6 h-6" />
      </a>
    </aside>
  );
}
