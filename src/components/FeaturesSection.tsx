import Image from "next/image";
import Link from "next/link";
import { images, realPhotos } from "@/lib/images";

export default function FeaturesSection() {
  const points = [
    "Études d'exécution par bureau intégré",
    "Préfabrication et pose par équipes habilitées",
    "Matériaux et robinetterie agréés APSAD",
    "Essais, mise en service et rapports normatifs",
    "Contrats d'entretien semestriel",
    "Astreinte dépannage 24h/24",
  ];

  return (
    <section className="section-padding section-dark">
      <div className="grain-overlay" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-7 relative aspect-[3/4] photo-frame bg-navy-800 border-brand-500/20 shadow-glow">
              <Image src={realPhotos.sprinklerAction} alt="Sprinkler en action" fill className="object-cover" sizes="350px" />
            </div>
            <div className="sm:col-span-5 flex flex-row sm:flex-col gap-3">
              <div className="relative flex-1 photo-frame min-h-[120px] bg-navy-800 w-1/2 sm:w-auto">
                <Image src={realPhotos.sprinklerHead} alt="Tête sprinkler" fill className="object-cover" sizes="200px" />
              </div>
              <div className="relative flex-1 photo-frame min-h-[120px] bg-navy-800 w-1/2 sm:w-auto">
                <Image src={realPhotos.sprinklerAlarm} alt="Poste alarme sprinkler" fill className="object-cover" sizes="200px" />
              </div>
            </div>
            <div className="sm:col-span-12 relative aspect-[21/9] photo-frame bg-navy-800 border-brand-500/20">
              <Image src={realPhotos.pumpRoomWide} alt="Salle des pompes" fill className="object-cover" sizes="600px" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 to-transparent flex items-center">
                <p className="text-white font-sans font-bold text-xl md:text-2xl px-8 max-w-sm leading-snug">
                  Salles des pompes & groupes surpresseurs conformes NF EN
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
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
            <ul className="space-y-3.5 mb-10">
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
          </div>
        </div>
      </div>
    </section>
  );
}
