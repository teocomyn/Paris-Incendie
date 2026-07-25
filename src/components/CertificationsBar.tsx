import { siteConfig } from "@/lib/data";

const certifications = [
  { name: "APSAD", desc: "Installateur agréé" },
  { name: "NF EN 12845", desc: "Sprinkler" },
  { name: "NF S 61-919", desc: "RIA" },
  { name: "FM Global", desc: "Référentiel" },
  { name: "NFPA 13", desc: "Normes US" },
];

export default function CertificationsBar() {
  return (
    <section className="relative py-4">
      <div className="container-custom">
        <div className="glass-panel px-5 py-4 md:px-8 md:py-5">
          <div className="relative z-[1] flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500 shrink-0">
              Certifications & normes
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="glass-pill px-3 py-1.5 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-white">{cert.name}</span>
                  <span className="text-xs text-navy-400">{cert.desc}</span>
                </div>
              ))}
            </div>
            <div className="md:ml-auto shrink-0">
              <span className="text-xs text-navy-400 glass-pill px-3 py-1.5 inline-block">
                Depuis {siteConfig.founded} · {siteConfig.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
