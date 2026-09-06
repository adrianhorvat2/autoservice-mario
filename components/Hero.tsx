import Image from "next/image";
import { Phone, ArrowDown, Clock, MapPin, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#0b0c10] text-white pt-12 pb-14 md:pt-20 md:pb-20 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Lijeva strana: Naslov, opis i primarne akcije */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#16171f] border border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Automehaničarski servis • Vinkovci</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              AutoService <span className="text-red-500">Mario</span> d.o.o.
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Brzo, pouzdano i stručno održavanje vašeg vozila. Vršimo redovite servise, mehaniku, kompjutersku dijagnostiku, servis kočnica i vulkanizaciju.
            </p>

            {/* CTA Gumbi */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+385994324392"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-base uppercase tracking-wider transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Nazovi: 099 432 43 92</span>
              </a>

              <a
                href="#usluge"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded bg-[#16171f] hover:bg-[#1e1f2b] text-zinc-200 border border-zinc-700 font-bold text-base uppercase tracking-wider transition-colors"
              >
                <span>Pregledaj usluge</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Tri brza stupa */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Po dogovoru</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Fleksibilno radno vrijeme</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Školska 72</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Vinkovci, jednostavan pristup</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Stručni rad</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Sve marke vozila</p>
                </div>
              </div>
            </div>

          </div>

          {/* Desna strana: Logotip servisa s industrijskim okvirom */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#12131a] border border-zinc-800 rounded-xl p-8 space-y-6 text-center shadow-xl">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-800 text-xs text-zinc-400 uppercase tracking-widest font-mono">
                <span>AUTOSERVIS & DIJAGNOSTIKA</span>
                <span className="text-red-400 font-bold">VINKOVCI</span>
              </div>

              <div className="py-6 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="AutoService Mario d.o.o. Logotip"
                  width={420}
                  height={220}
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow"
                  priority
                />
              </div>

              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 leading-relaxed">
                Kompletna servisna i mehaničarska rješenja za osobna i laka gospodarska vozila na jednom mjestu.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
