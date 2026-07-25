import Image from "next/image";
import { processImages } from "@/lib/images";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Étude & diagnostic",
    desc: "Analyse des risques, relevé sur site, plans d'exécution conformes NF EN et APSAD.",
  },
  {
    num: "02",
    title: "Préfabrication",
    desc: "Assemblage des réseaux en atelier — tuyauterie agréée, robinetterie certifiée.",
  },
  {
    num: "03",
    title: "Installation",
    desc: "Pose par équipes habilitées sur sites en production ou bâtiments neufs.",
  },
  {
    num: "04",
    title: "Essais & mise en service",
    desc: "Contrôles hydrauliques, tests de déclenchement, rapport de conformité.",
  },
  {
    num: "05",
    title: "Maintenance",
    desc: "Contrats semestriels, astreinte 24h/24, dépannage sprinkler et RIA.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding section-elevated">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="grain-overlay" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="section-label">Notre méthode</p>
            <h2 className="section-title">Du diagnostic à la maintenance</h2>
            <p className="section-subtitle">
              Un processus maîtrisé pour chaque projet SPK et RIA — sans surprise,
              avec traçabilité complète.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div
                className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center py-10 ${
                  i < steps.length - 1 ? "border-b border-white/8" : ""
                }`}
              >
                <div className="lg:col-span-1">
                  <span className="font-sans text-4xl text-brand-500/25">{step.num}</span>
                </div>
                <div className="lg:col-span-4 relative aspect-[16/10] photo-frame border-brand-500/10">
                  <Image
                    src={processImages[i]}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 0 ? "glass-panel p-6 md:p-8" : "p-2 md:p-4"}`}>
                  <h3 className="font-sans font-bold text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-navy-300 leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
