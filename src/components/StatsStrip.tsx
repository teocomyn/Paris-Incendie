import { siteConfig } from "@/lib/data";

export default function StatsStrip() {
  const stats = [
    { value: "500+", label: "Projets livrés", sub: "Industrie, tertiaire, commerce" },
    { value: "12+", label: "Années d'expérience", sub: `Depuis ${siteConfig.founded}` },
    { value: "100%", label: "Conformité APSAD", sub: "Installations certifiées" },
    { value: "24/7", label: "Astreinte SAV", sub: "Dépannage sprinkler & RIA" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-brand-500/20 bg-navy-950">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-brand-500/5" />
      <div className="grain-overlay" />

      <div className="container-custom relative z-10 py-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left lg:pl-6 lg:border-l lg:border-brand-500/20 first:lg:pl-0 first:lg:border-0">
              <div className="font-sans font-bold text-4xl md:text-5xl text-brand-500">{stat.value}</div>
              <div className="text-sm font-bold text-white mt-1 uppercase tracking-wide">{stat.label}</div>
              <div className="text-xs text-navy-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
