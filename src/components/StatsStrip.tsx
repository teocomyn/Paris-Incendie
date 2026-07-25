import { siteConfig } from "@/lib/data";

export default function StatsStrip() {
  const stats = [
    { value: "500+", label: "Projets livrés", sub: "Industrie, tertiaire, commerce" },
    { value: "12+", label: "Années d'expérience", sub: `Depuis ${siteConfig.founded}` },
    { value: "100%", label: "Conformité APSAD", sub: "Installations certifiées" },
    { value: "24/7", label: "Astreinte SAV", sub: "Dépannage sprinkler & RIA" },
  ];

  return (
    <section className="relative overflow-hidden section-dark border-y border-white/5">
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="grain-overlay" />

      <div className="container-custom relative z-10 py-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-stat text-center lg:text-left">
              <div className="relative z-[1] font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-brand-500">{stat.value}</div>
              <div className="relative z-[1] text-sm font-bold text-white mt-1 uppercase tracking-wide">{stat.label}</div>
              <div className="relative z-[1] text-xs text-navy-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
