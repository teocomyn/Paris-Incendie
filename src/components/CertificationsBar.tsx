import { siteConfig } from "@/lib/data";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

const certifications = [
  { name: "APSAD", desc: "Installateur agréé", highlight: true },
  { name: "NF EN 12845", desc: "Sprinkler" },
  { name: "NF S 61-919", desc: "RIA" },
  { name: "FM Global", desc: "Référentiel" },
  { name: "NFPA 13", desc: "Normes US" },
];

const stats = [
  { value: "500+", label: "Projets livrés" },
  { value: "12+", label: "Ans d'expérience" },
  { value: "100%", label: "Conformité APSAD" },
  { value: "24/7", label: "Astreinte SAV" },
];

export default function CertificationsBar() {
  return (
    <section className="relative pt-4 pb-10 md:pt-5 md:pb-14">
      <div className="container-custom">
        <ScrollReveal>
          <div className="glass-panel px-5 py-5 md:px-8 md:py-6">
            <div className="relative z-[1] flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500 shrink-0">
                  Certifications & normes
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className={`flex items-baseline gap-2 px-3 py-1.5 rounded-full border ${
                        cert.highlight
                          ? "glass-flame border-brand-500/40"
                          : "glass-subtle border-white/10"
                      }`}
                    >
                      <span className="text-sm font-bold text-white">{cert.name}</span>
                      <span className="text-xs text-navy-400 hidden sm:inline">{cert.desc}</span>
                    </div>
                  ))}
                </div>
                <span className="lg:ml-auto text-xs text-navy-400 glass-pill px-3 py-1.5 shrink-0 hidden md:inline-block">
                  Depuis {siteConfig.founded} · {siteConfig.address}
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-white/8">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="text-center lg:text-left px-2">
                    <div className="font-sans font-bold text-2xl md:text-3xl text-brand-500">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-[11px] font-semibold text-white mt-0.5 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
