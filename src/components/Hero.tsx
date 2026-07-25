import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { realPhotos } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 min-h-[92vh] flex items-center">
      {/* Background — photo réelle sprinkler en action */}
      <div className="absolute inset-0">
        <Image
          src={realPhotos.sprinklerAction}
          alt="Sprinkler en action — extinction automatique"
          fill
          className="object-cover object-center opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="immersive-grid" />
        <div className="glow-orb glow-orb-flame w-[600px] h-[400px] -bottom-32 left-1/4 opacity-40" />
        <div className="grain-overlay" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 mb-8">
              <Shield className="h-3.5 w-3.5 text-brand-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
                Agréé APSAD · Île-de-France · Depuis 2012
              </span>
            </div>

            <h1 className="font-sans font-bold text-[2.75rem] md:text-5xl lg:text-[4rem] text-white leading-[1.05] tracking-tight mb-7 text-balance">
              Installation & maintenance sprinkler et RIA
            </h1>

            <p className="text-lg text-navy-300 leading-relaxed mb-10 max-w-md">
              Mise en sécurité de sites industriels, tertiaires et commerciaux.
              Études, pose, essais et contrats d&apos;entretien conformes NF EN.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link href="/devis" className="btn-primary">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-ghost-light">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-3 sm:gap-6 pt-8">
              {[
                { value: "500+", label: "Projets" },
                { value: "2012", label: "Création" },
                { value: "24/7", label: "Astreinte" },
              ].map((s) => (
                <div key={s.label} className="glass-stat text-center sm:text-left">
                  <dt className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-white">{s.value}</dt>
                  <dd className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-400 mt-1.5">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Mosaïque photos réelles */}
          <div className="relative hidden lg:block h-[580px]">
            <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-2xl" />

            <div className="absolute top-0 right-0 w-[58%] aspect-[3/4] photo-frame border-brand-500/30 shadow-glow">
              <Image
                src={realPhotos.sprinklerHead}
                alt="Tête sprinkler laiton"
                fill
                className="object-cover"
                priority
                sizes="320px"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[52%] aspect-[4/3] photo-frame border-brand-500/20 shadow-glow-sm animate-float-slow">
              <Image
                src={realPhotos.pumpRoomWide}
                alt="Salle des pompes sprinkler"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>

            <div className="absolute top-[38%] left-[8%] w-[38%] aspect-square photo-frame border-2 border-navy-950 shadow-glow-sm">
              <Image
                src={realPhotos.sprinklerAlarm}
                alt="Poste d'alarme sprinkler"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>

            <div className="absolute bottom-16 -right-4 glass-panel p-4 max-w-[210px] z-[2]">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-500 mb-1">Certifié</p>
              <p className="font-sans font-bold text-lg text-white leading-tight">APSAD R4 & R5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
