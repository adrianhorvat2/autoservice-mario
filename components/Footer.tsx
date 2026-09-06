"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#07080a] text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Stupac 1: Brend i opis */}
          <div className="space-y-4">
            <div className="relative h-12 w-40">
              <Image
                src="/images/logo.png"
                alt="AutoService Mario d.o.o."
                width={160}
                height={50}
                className="object-contain max-h-12 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              AutoService Mario d.o.o. — profesionalni automehaničarski servis za sve vrste brzih servisa, mehanike, dijagnostike i održavanja vozila u Vinkovcima.
            </p>
            <div className="pt-1">
              <a
                href="https://www.facebook.com/people/AutoService-Mario/61553470880381/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#12131a] hover:bg-[#1877F2]/20 border border-zinc-800 hover:border-[#1877F2]/50 text-zinc-300 hover:text-white transition-all text-xs font-semibold"
                aria-label="Posjetite našu Facebook stranicu"
              >
                <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Pratite nas na Facebooku</span>
              </a>
            </div>
          </div>

          {/* Stupac 2: Brza navigacija */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigacija</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" onClick={(e) => handleScrollTo(e, "#")} className="hover:text-red-400 transition-colors cursor-pointer">Početna</a>
              </li>
              <li>
                <a href="#usluge" onClick={(e) => handleScrollTo(e, "#usluge")} className="hover:text-red-400 transition-colors cursor-pointer">Usluge servisa</a>
              </li>
              <li>
                <a href="#zasto-mi" onClick={(e) => handleScrollTo(e, "#zasto-mi")} className="hover:text-red-400 transition-colors cursor-pointer">Zašto mi</a>
              </li>
              <li>
                <a href="#o-nama" onClick={(e) => handleScrollTo(e, "#o-nama")} className="hover:text-red-400 transition-colors cursor-pointer">O nama</a>
              </li>
              <li>
                <a href="#kontakt" onClick={(e) => handleScrollTo(e, "#kontakt")} className="hover:text-red-400 transition-colors cursor-pointer">Kontakt i lokacija</a>
              </li>
            </ul>
          </div>

          {/* Stupac 3: Usluge */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Naše usluge</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>Brzi servis i izmjena ulja</li>
              <li>Automehanika i motori</li>
              <li>Autoelektrika i akumulatori</li>
              <li>Vulkanizacija i gume</li>
              <li>Kompjuterska dijagnostika</li>
              <li>Kočioni sustav i diskovi</li>
            </ul>
          </div>

          {/* Stupac 4: Kontakt podaci */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Podaci servisa</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:+385994324392" className="text-white hover:text-red-400 font-bold transition-colors">
                  +385 99 432 4392
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:mariojovanovac.mj@gmail.com" className="hover:text-red-400 transition-colors">
                  mariojovanovac.mj@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Školska 72, 32100 Vinkovci</span>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-zinc-800">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block">Radno vrijeme:</span>
                  <span className="text-white font-bold">Po prethodnom dogovoru</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Dno podnožja */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 AutoService Mario d.o.o. Sva prava pridržana.</p>
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#")}
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Povratak na vrh</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
