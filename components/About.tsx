import { Clock, ShieldCheck, UserCheck, CalendarCheck, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="o-nama" className="scroll-mt-20 md:scroll-mt-[114px] py-16 md:py-24 bg-[#0e0f15] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Lijeva strana: Radionica kartica s radnim vremenom */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#13141c] border border-zinc-800 rounded-xl p-6 sm:p-8 space-y-6">
              
              <div className="w-full flex items-center justify-center p-6 bg-[#0b0c10] rounded-lg border border-zinc-800/80">
                <Image
                  src="/images/logo.png"
                  alt="AutoService Mario d.o.o."
                  width={320}
                  height={120}
                  className="w-full max-w-[260px] h-auto object-contain"
                />
              </div>

              {/* Istaknuto radno vrijeme po dogovoru */}
              <div className="p-6 rounded-lg bg-[#1a1c26] border border-zinc-700/60 space-y-2.5">
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Prednost za klijente</span>
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wide text-white">
                  Radno vrijeme po dogovoru
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Nemojte uzimati slobodne sate na poslu kako biste odvezli automobil na servis. Vrijeme prijema, pregleda i preuzimanja vozila dogovaramo fleksibilno, točno u terminu koji vama najviše odgovara.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs text-zinc-400">
                <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    Lokacija:
                  </span>
                  <span className="text-zinc-200 font-semibold">Školska 72, Vinkovci</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span>Prijem vozila:</span>
                  <span className="text-red-400 font-bold uppercase">Po prethodnom dogovoru</span>
                </div>
              </div>

            </div>
          </div>

          {/* Desna strana: Priča o servisu i načinu rada */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-1">
                O servisu
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                Pouzdan automehaničar za sve vrste popravaka
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                <strong>AutoService Mario d.o.o.</strong> pruža kompletne usluge popravka, redovitog održavanja i kompjuterske dijagnostike za osobna i laka gospodarska vozila u Vinkovcima. Naš rad počiva na tri temelja: točna dijagnoza kvara, poštena komunikacija s vozačem i kvalitetan rad bez improvizacija.
              </p>
              <p>
                Svakom automobilu pristupamo pedantno — od brze izmjene ulja i filtera ili servisa kočnica, pa sve do većih mehaničkih zahvata na motoru, mjenjaču i ovjesu. Koristimo suvremene uređaje za očitavanje grešaka i surađujemo s provjerenim dobavljačima kvalitetnih dijelova.
              </p>
              <p>
                Prije svakog zahvata jasno vas informiramo o stvarnom stanju vozila i procjeni troškova. Kod nas nema neugodnih iznenađenja pri preuzimanju automobila.
              </p>
            </div>

            {/* Četiri stupa garancije */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-200">
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#13141c] border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                <span>Kvalitetni dijelovi s jamstvom</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#13141c] border border-zinc-800">
                <UserCheck className="w-4 h-4 text-red-500 shrink-0" />
                <span>Direktan kontakt s majstorom</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#13141c] border border-zinc-800">
                <CalendarCheck className="w-4 h-4 text-red-500 shrink-0" />
                <span>Poštivanje dogovorenog roka</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-[#13141c] border border-zinc-800">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span>Termini prilagođeni vašem danu</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
