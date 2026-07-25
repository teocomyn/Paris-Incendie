import Image from "next/image";
import Link from "next/link";
import { sectionPhotos } from "@/lib/images";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturesSection() {
  const [main, sideA, sideB, wide] = sectionPhotos.features;

  const points = [
    "Études d'exécution par bureau intégré",
    "Préfabrication et pose par équipes habilitées",
    "Matériaux et robinetterie agréés APSAD",
    "Essais, mise en service et rapports normatifs",
    "Contrats d'entretien semestriel",
    "Astreinte dépannage 24h/24",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Full-bleed photo band — respiration visuelle sans glass */}
      <div className="photo-bleed relative mb-16 md:mb-20">
        <Image src={wide} alt="Salle des pompes conforme NF EN" fill className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="container-custom relative z-10 h-full min-h-[280px] flex items-center py-16">
          <ScrollReveal>
            <p className="font-sans font-bold text-2xl md:text-4xl text-white max-w-lg leading-snug">
              Salles des pompes & groupes surpresseurs conformes NF EN
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-7 relative aspect-[3/4] photo-frame border-brand-500/20 shadow-glow">
              <Image src={main} alt="Réseau sprinkler" fill className="object-cover" sizes="350px" />
            </div>
            <div className="sm:col-span-5 flex flex-row sm:flex-col gap-3">
              <div className="relative flex-1 photo-frame min-h-[120px] w-1/2 sm:w-auto">
                <Image src={sideA} alt="Installation sprinkler" fill className="object-cover" sizes="200px" />
              </div>
              <div className="relative flex-1 photo-frame min-h-[120px] w-1/2 sm:w-auto">
                <Image src={sideB} alt="Tête sprinkler" fill className="object-cover" sizes="200px" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" delay={100}>
            <p className="section-label">Pourquoi nous choisir</p>
            <h2 className="section-title mb-2">
              Un installateur agréé, de l&apos;étude à la maintenance
            </h2>
            <div className="divider-red my-5" />
            <p className="text-navy-300 leading-relaxed mb-8">
              Depuis 2012, nous accompagnons industriels, tertiaires et commerces
              dans leurs projets SPK et RIA avec des moyens techniques et humains
              adaptés aux sites en production.
            </p>
            <ul className="space-y-3 mb-10">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-navy-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white text-[10px] font-bold mt-0.5">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/a-propos" className="btn-flame">
              Découvrir l&apos;entreprise
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
