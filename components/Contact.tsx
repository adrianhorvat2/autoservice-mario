import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-20 md:scroll-mt-[114px] py-16 md:py-24 bg-[#0b0c10] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-1">
            Kontakt & lokacija
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            Posjetite nas ili nazovite
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Nalazimo se u Vinkovcima. Za sve upite i dogovore termina slobodno nam se obratite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Lijevi stupac: 3 ujednačene kartice rastegnute na punu visinu karte */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            
            {/* Kartica Telefon (statični blok bez klika, diskretan i pregledan) */}
            <div className="flex-1 p-6 sm:p-7 rounded-xl bg-[#12131a] border border-zinc-800 flex items-center">
              <div className="flex items-center gap-4 w-full">
                <div className="w-12 h-12 rounded bg-[#1a1c26] border border-zinc-800 text-red-500 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                    Telefon
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white block mt-0.5">
                    +385 99 432 4392
                  </span>
                  <span className="text-xs text-zinc-400 block mt-1">
                    Dostupni za pozive i dogovor termina
                  </span>
                </div>
              </div>
            </div>

            {/* Kartica E-mail */}
            <a
              href="mailto:mariojovanovac.mj@gmail.com"
              className="flex-1 p-6 sm:p-7 rounded-xl bg-[#12131a] border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="w-12 h-12 rounded bg-[#1a1c26] border border-zinc-800 text-red-500 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                    E-mail adresa
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white truncate block mt-0.5">
                    mariojovanovac.mj@gmail.com
                  </span>
                  <span className="text-xs text-zinc-400 block mt-1">
                    Pošaljite upit ili ponudu
                  </span>
                </div>
              </div>
            </a>

            {/* Kartica Adresa */}
            <div className="flex-1 p-6 sm:p-7 rounded-xl bg-[#12131a] border border-zinc-800 flex items-center">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 rounded bg-[#1a1c26] border border-zinc-800 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                    Adresa radionice
                  </span>
                  <span className="text-lg font-bold text-white block mt-0.5">
                    Školska 72, Vinkovci
                  </span>
                  <span className="text-xs text-zinc-400 block mt-0.5">
                    32100 Vinkovci, Vukovarsko-srijemska županija
                  </span>
                  <a
                    href="https://maps.google.com/?q=Školska+72+Vinkovci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 mt-2"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Desni stupac: Google Maps karta */}
          <div className="lg:col-span-7 h-full">
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#12131a] flex flex-col h-full">
              <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400 shrink-0">
                <span className="font-bold uppercase tracking-wider text-zinc-300">Školska 72, Vinkovci</span>
                <span className="font-mono text-zinc-500">Google Maps</span>
              </div>

              {/* Čista Google Maps karta */}
              <div className="w-full min-h-[380px] flex-1 bg-zinc-950">
                <iframe
                  title="Lokacija AutoService Mario d.o.o. - Školska 72, Vinkovci"
                  src="https://maps.google.com/maps?q=%C5%A0kolska+72,+Vinkovci,+Croatia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px]"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
