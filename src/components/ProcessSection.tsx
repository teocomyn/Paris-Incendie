import Image from "next/image";
import { images } from "@/lib/images";

const steps = [
  {
    num: "01",
    title: "Étude & diagnostic",
    desc: "Analyse des risques, relevé sur site, plans d'exécution conformes NF EN et APSAD.",
    image: images.project,
  },
  {
    num: "02",
    title: "Préfabrication",
    desc: "Assemblage des réseaux en atelier — tuyauterie agréée, robinetterie certifiée.",
    image: images.pipes,
  },
  {
    num: "03",
    title: "Installation",
    desc: "Pose par équipes habilitées sur sites en production ou bâtiments neufs.",
    image: images.construction,
  },
  {
    num: "04",
    title: "Essais & mise en service",
    desc: "Contrôles hydrauliques, tests de déclenchement, rapport de conformité.",
    image: images.control,
  },
  {
    num: "05",
    title: "Maintenance",
    desc: "Contrats semestriels, astreinte 24h/24, dépannage sprinkler et RIA.",
    image: images.maintenance,
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mb-14">
          <p className="section-label">Notre méthode</p>
          <h2 className="section-title">Du diagnostic à la maintenance</h2>
          <p className="section-subtitle">
            Un processus maîtrisé pour chaque projet SPK et RIA — sans surprise,
            avec traçabilité complète.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center py-10 ${
                i < steps.length - 1 ? "border-b border-navy-100" : ""
              }`}
            >
              <div className="lg:col-span-1">
                <span className="font-display text-4xl text-brand-600/30">{step.num}</span>
              </div>
              <div className="lg:col-span-4 relative aspect-[16/10] photo-frame">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
              <div className="lg:col-span-7">
                <h3 className="font-display text-2xl text-navy-900 mb-3">{step.title}</h3>
                <p className="text-navy-600 leading-relaxed max-w-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
