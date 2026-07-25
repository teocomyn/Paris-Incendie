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
    <section className="relative bg-navy-900 border-y border-navy-800 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <div className="container-custom py-5 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500 shrink-0">
            Certifications & normes
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-white">{cert.name}</span>
                <span className="text-xs text-navy-500">{cert.desc}</span>
              </div>
            ))}
          </div>
          <div className="md:ml-auto shrink-0">
            <span className="text-xs text-navy-500">
              Depuis {siteConfig.founded} · {siteConfig.address}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
