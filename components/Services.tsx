import { 
  Zap, 
  Wrench, 
  Cpu, 
  Disc3, 
  Laptop, 
  ShieldAlert,
  Phone,
  Check
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "brzi-servis",
    title: "Brzi servis",
    shortDesc: "Redovito održavanje motora za pouzdan rad i očuvanje performansi vozila.",
    icon: Zap,
    features: [
      "Izmjena motornog ulja i filtera ulja",
      "Izmjena filtera zraka, goriva i kabine",
      "Provjera i dopuna rashladne i kočione tekućine",
      "Osnovni kontrolni pregled vozila",
    ],
  },
  {
    id: "automehanika",
    title: "Automehanika",
    shortDesc: "Kompletni popravci mehaničkih sklopova, motora, ovjesa i pogonskog sustava.",
    icon: Wrench,
    features: [
      "Veliki i mali servis",
      "Izmjena kvačila, lamele i zamašnjaka",
      "Popravak ovjesa, vilica, amortizera i opruga",
      "Izmjena zupčastog remena i vodene pumpe",
    ],
  },
  {
    id: "autoelektrika",
    title: "Autoelektrika",
    shortDesc: "Dijagnosticiranje i stručno rješavanje električnih kvarova, instalacija i rasvjete.",
    icon: Cpu,
    features: [
      "Ispitivanje i zamjena akumulatora",
      "Servis alternatora i elektropokretača (anlasera)",
      "Popravak rasvjete i signalizacije",
      "Popravak električnih podizača i instalacija",
    ],
  },
  {
    id: "vulkanizacija",
    title: "Vulkanizacija",
    shortDesc: "Montaža, balansiranje i priprema guma za sigurnu i udobnu vožnju kroz sve sezone.",
    icon: Disc3,
    features: [
      "Sezonska zamjena guma (ljeto / zima)",
      "Precizno dinamičko balansiranje kotača",
      "Krpanje probušenih guma",
      "Provjera tlaka i stanja profila",
    ],
  },
  {
    id: "dijagnostika",
    title: "Dijagnostika",
    shortDesc: "Kompjutersko očitavanje parametara, brisanje grešaka i precizno lociranje kvara.",
    icon: Laptop,
    features: [
      "Očitavanje i brisanje grešaka računala vozila",
      "Pregled parametara u stvarnom vremenu",
      "Provjera senzora motora, ABS-a i ESP-a",
      "Poništavanje servisnih intervala",
    ],
  },
  {
    id: "kocioni-sustav",
    title: "Kočioni sustav",
    shortDesc: "Temeljit servis i zamjena kočionih elemenata koji su temelj vaše sigurnosti na cesti.",
    icon: ShieldAlert,
    features: [
      "Zamjena diskova i kočionih pločica",
      "Izmjena i odzračivanje kočione tekućine",
      "Pregled i zamjena kočionih crijeva",
      "Podešavanje i servis ručne kočnice",
    ],
  },
];

export default function Services() {
  return (
    <section id="usluge" className="scroll-mt-20 md:scroll-mt-[114px] py-16 md:py-24 bg-[#0e0f15] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-1">
              Servisni program
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
              Usluge servisa
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Sve zahvate obavljamo stručno, u dogovorenom roku i uz ugradnju kvalitetnih dijelova s jamstvom.
          </p>
        </div>

        {/* Mreža usluga (kompaktnije i stisnute kartice) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#13141c] border border-zinc-800 rounded-xl p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  {/* Ikona */}
                  <div className="w-10 h-10 rounded bg-[#1a1c26] border border-zinc-800 text-red-500 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mb-3.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Popis s crvenim kvačicama */}
                <ul className="space-y-1.5 pt-3 border-t border-zinc-800/80 text-xs text-zinc-300">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Donja informativna traka */}
        <div className="mt-12 p-6 rounded-xl bg-[#13141c] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold uppercase tracking-wide text-white">Niste sigurni u čemu je problem na vozilu?</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Slobodno nas nazovite i opišite simptome. Pomoći ćemo vam s dijagnozom i zakazati pregled.
            </p>
          </div>
          <a
            href="tel:+385994324392"
            className="shrink-0 px-6 py-3 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>099 432 43 92</span>
          </a>
        </div>

      </div>
    </section>
  );
}
