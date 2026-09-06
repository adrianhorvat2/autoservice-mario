"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X, Clock, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Početna", href: "#" },
    { name: "Usluge", href: "#usluge" },
    { name: "Zašto mi", href: "#zasto-mi" },
    { name: "O nama", href: "#o-nama" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0e0f14]/95 backdrop-blur border-b border-zinc-800/80">
      {/* Gornja informativna traka */}
      <div className="bg-[#07080a] border-b border-zinc-900 text-xs text-zinc-400 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              Školska 72, Vinkovci
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              Radno vrijeme: <strong className="text-zinc-200 font-semibold">Po dogovoru</strong>
            </span>
          </div>
          <div>
            <a
              href="tel:+385994324392"
              className="text-zinc-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              099 432 43 92
            </a>
          </div>
        </div>
      </div>

      {/* Glavna navigacijska traka */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="AutoService Mario d.o.o."
              width={160}
              height={55}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop navigacija */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>



          {/* Mobilni hamburger gumb */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
              aria-label="Otvori navigaciju"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobilni padajući izbornik */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 py-4 px-2 space-y-1 bg-[#0e0f14]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800/80 mt-2 px-1">
              <a
                href="tel:+385994324392"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded bg-red-600 text-white font-bold text-sm tracking-wide"
              >
                <Phone className="w-4 h-4" />
                <span>Nazovi: 099 432 43 92</span>
              </a>
              <p className="text-center text-xs text-zinc-400 mt-2">
                Radno vrijeme: Po dogovoru • Školska 72, Vinkovci
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
