import { Clock, Zap, DollarSign, Award } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      num: "01",
      icon: Clock,
      title: "Radno vrijeme po dogovoru",
      desc: "Znamo da radite i nemate vremena usred dana. Vrijeme prijema i preuzimanja vozila prilagođavamo vašem rasporedu.",
    },
    {
      num: "02",
      icon: Zap,
      title: "Brza realizacija bez čekanja",
      desc: "Kvarove i redovito održavanje rješavamo promptno, bez višednevnog stajanja automobila na dvorištu.",
    },
    {
      num: "03",
      icon: DollarSign,
      title: "Transparentni troškovi",
      desc: "Prije početka radova uvijek vas obavještavamo o stanju i cijeni. Nema naknadnih iznenađenja na računu.",
    },
    {
      num: "04",
      icon: Award,
      title: "Iskustvo i provjereni dijelovi",
      desc: "Ugrađujemo samo kvalitetne i certificirane zamjenske dijelove koji jamče dugotrajnost i sigurnost.",
    },
  ];

  return (
    <section id="zasto-mi" className="scroll-mt-20 md:scroll-mt-[114px] py-16 md:py-24 bg-[#0b0c10] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-1">
            Prednosti
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            Zašto odabrati naš servis
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Gradimo odnos s vozačima na povjerenju, poštenoj cijeni i izravnom kontaktu s mehaničarom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-xl bg-[#12131a] border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#1a1c26] border border-zinc-800 text-red-500 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
