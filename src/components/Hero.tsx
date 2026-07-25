import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { sectionPhotos } from "@/lib/images";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  const [mainPhoto, ...mosaicPhotos] = sectionPhotos.hero;

  return (
    <section className="relative overflow-hidden bg-navy-950 min-h-[88vh] lg:min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={mainPhoto}
          alt="Sprinkler en action — extinction automatique"
          fill
          className="object-cover object-center opacity-65 lg:opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
        <div className="immersive-grid" />
        <div className="glow-orb glow-orb-flame w-[600px] h-[400px] -bottom-32 left-1/4 opacity-40" />
        <div className="grain-overlay" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 mb-6 md:mb-8">
              <Shield className="h-3.5 w-3.5 text-brand-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
                Agréé APSAD · Île-de-France · Depuis 2012
              </span>
            </div>

            <h1 className="font-sans font-black text-[2.35rem] sm:text-[2.75rem] md:text-5xl lg:text-[4rem] text-white leading-[1.02] tracking-tight mb-6 text-balance">
              Installation & maintenance sprinkler et RIA
            </h1>

            <p className="text-base md:text-lg text-navy-300 leading-relaxed mb-8 max-w-md">
              Mise en sécurité de sites industriels, tertiaires et commerciaux.
              Études, pose, essais et contrats d&apos;entretien conformes NF EN.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <Link href="/devis" className="btn-primary">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-ghost-light">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Stats — 1 col mobile, 3 cols desktop */}
            <dl className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-white/10">
              {[
                { value: "500+", label: "Projets" },
                { value: "2012", label: "Création" },
                { value: "24/7", label: "Astreinte" },
              ].map((s) => (
                <div key={s.label} className="glass-stat !p-4 sm:!p-5 text-center sm:text-left">
                  <dt className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-white">
                    <AnimatedCounter value={s.value} />
                  </dt>
                  <dd className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-400 mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>

            {/* Mosaïque mobile */}
            <div className="lg:hidden mt-8 grid grid-cols-3 gap-2">
              {sectionPhotos.heroMobile.map((src, i) => (
                <div
                  key={src}
                  className={`relative photo-frame overflow-hidden ${
                    i === 1 ? "aspect-[3/4] -mt-4" : "aspect-square"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="120px" />
                </div>
              ))}
            </div>
          </div>

          {/* Mosaïque desktop */}
          <div className="relative hidden lg:block h-[580px]">
            <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-2xl" />

            <div className="absolute top-0 right-0 w-[58%] aspect-[3/4] photo-frame border-brand-500/30 shadow-glow">
              <Image src={mosaicPhotos[0]} alt="Tête sprinkler laiton" fill className="object-cover" priority sizes="320px" />
            </div>

            <div className="absolute bottom-0 left-0 w-[52%] aspect-[4/3] photo-frame border-brand-500/20 shadow-glow-sm animate-float-slow">
              <Image src={mosaicPhotos[1]} alt="Salle des pompes sprinkler" fill className="object-cover" sizes="300px" />
            </div>

            <div className="absolute top-[38%] left-[8%] w-[38%] aspect-square photo-frame border-2 border-navy-950 shadow-glow-sm">
              <Image src={mosaicPhotos[2]} alt="Poste d'alarme sprinkler" fill className="object-cover" sizes="200px" />
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
