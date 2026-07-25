import { siteConfig } from "@/lib/data";

export default function StatsStrip() {
  const stats = [
    { value: "500+", label: "Projets livrés", sub: "Industrie, tertiaire, commerce" },
    { value: "12+", label: "Années d'expérience", sub: `Depuis ${siteConfig.founded}` },
    { value: "100%", label: "Conformité APSAD", sub: "Installations certifiées" },
    { value: "24/7", label: "Astreinte SAV", sub: "Dépannage sprinkler & RIA" },
  ];

  return (
    <section className="bg-brand-600">
      <div className="container-custom py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left lg:pl-6 lg:border-l lg:border-brand-500/50 first:lg:pl-0 first:lg:border-0">
              <div className="font-display text-4xl md:text-5xl text-white">{stat.value}</div>
              <div className="text-sm font-bold text-white/90 mt-1 uppercase tracking-wide">{stat.label}</div>
              <div className="text-xs text-white/60 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
