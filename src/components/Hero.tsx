import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { sectionPhotos } from "@/lib/images";
import AnimatedCounter from "@/components/AnimatedCounter";

const STATS = [
  { value: "500+", label: "Projets" },
  { value: "2012", label: "Création" },
  { value: "24/7", label: "Astreinte" },
] as const;

export default function Hero() {
  const [mainPhoto, ...mosaicPhotos] = sectionPhotos.hero;
  const [mobileA, mobileB, mobileC] = sectionPhotos.heroMobile;

  return (
    <section className="relative overflow-hidden bg-navy-950 lg:min-h-[92vh] lg:flex lg:items-center">
      {/* ─── Fond partagé (desktop) ─── */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={mainPhoto}
          alt="Sprinkler en action, extinction automatique"
          fill
          className="object-cover object-center opacity-50 lg:opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-950/75 to-navy-950 lg:bg-gradient-to-r lg:from-navy-950 lg:via-navy-950/85 lg:to-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60 lg:to-navy-950/50" />
        <div className="absolute inset-0 bg-hero-glow opacity-35 lg:opacity-40" />
        <div className="immersive-grid" />
        <div className="glow-orb glow-orb-flame w-[420px] h-[280px] -bottom-20 left-1/2 -translate-x-1/2 lg:w-[600px] lg:h-[400px] lg:-bottom-32 lg:left-1/4 lg:translate-x-0 opacity-50" />
        <div className="grain-overlay" />
      </div>

      {/* ─── Mobile : visuel d'abord, contenu en carte glass ─── */}
      <div className="relative z-10 w-full lg:hidden bg-navy-950">
        <div className="relative mx-auto max-w-[1280px] px-4 pt-3 pb-8">
          {/* Bento photos */}
          <div className="relative mb-[-2.5rem] grid grid-cols-[1.15fr_0.85fr] grid-rows-2 gap-2.5 h-[min(42vh,320px)] min-h-[240px]">
            <div className="relative photo-frame overflow-hidden row-span-2 min-h-0">
              <Image
                src={mainPhoto}
                alt="Sprinkler en action"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 65vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            </div>
            <div className="relative photo-frame overflow-hidden min-h-0">
              <Image src={mobileA} alt="Tête sprinkler laiton" fill className="object-cover" sizes="120px" />
            </div>
            <div className="relative photo-frame overflow-hidden min-h-0">
              <Image src={mobileB} alt="Salle des pompes" fill className="object-cover" sizes="120px" />
            </div>
            <div className="absolute bottom-3 right-3 glass-panel px-3 py-2 z-[2]">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-500">Certifié</p>
              <p className="font-sans font-bold text-sm text-white leading-tight">APSAD R4 & R5</p>
            </div>
          </div>

          {/* Carte contenu */}
          <div className="hero-mobile-card relative">
            <div className="inline-flex items-center gap-2 glass-pill px-3 py-1.5 mb-4">
              <Shield className="h-3 w-3 text-brand-500 shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-400">
                Agréé APSAD · IDF · Depuis 2012
              </span>
            </div>

            <h1 className="font-sans font-black text-[1.65rem] leading-[1.1] tracking-tight text-white mb-3">
              Installation & maintenance
              <span className="block text-brand-400">sprinkler et RIA</span>
            </h1>

            <p className="text-sm text-navy-300 leading-relaxed mb-5">
              Sites industriels, tertiaires et commerciaux, études, pose, essais et entretien conformes NF EN.
            </p>

            <div className="flex flex-col gap-2.5 mb-5">
              <Link href="/devis" className="btn-primary w-full !py-3.5 !text-xs">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="btn-ghost-light w-full !py-3 !text-xs justify-center"
              >
                <Phone className="h-4 w-4 text-brand-400" />
                {siteConfig.phone}
              </a>
            </div>

            <dl className="hero-mobile-stats">
              {STATS.map((s) => (
                <div key={s.label} className="hero-mobile-stat">
                  <dt className="font-sans font-bold text-xl text-white">
                    <AnimatedCounter value={s.value} />
                  </dt>
                  <dd className="text-[9px] font-semibold uppercase tracking-[0.12em] text-navy-400 mt-0.5">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 3e photo, bandeau bas */}
          <div className="mt-4 relative h-24 photo-frame overflow-hidden">
            <Image src={mobileC} alt="Réseau sprinkler" fill className="object-cover object-center" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 max-w-[70%]">
              500+ installations sprinkler & RIA en Île-de-France
            </p>
          </div>
        </div>
      </div>

      {/* ─── Desktop ─── */}
      <div className="container-custom relative z-10 w-full hidden lg:block">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-24 lg:py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 mb-8">
              <Shield className="h-3.5 w-3.5 text-brand-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
                Agréé APSAD · Île-de-France · Depuis 2012
              </span>
            </div>

            <h1 className="font-sans font-black text-5xl lg:text-[4rem] text-white leading-[1.02] tracking-tight mb-6 text-balance">
              Installation & maintenance sprinkler et RIA
            </h1>

            <p className="text-lg text-navy-300 leading-relaxed mb-8 max-w-md">
              Mise en sécurité de sites industriels, tertiaires et commerciaux.
              Études, pose, essais et contrats d&apos;entretien conformes NF EN.
            </p>

            <div className="flex flex-row gap-4 mb-10">
              <Link href="/devis" className="btn-primary">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-ghost-light">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {STATS.map((s) => (
                <div key={s.label} className="glass-stat !p-5 text-left">
                  <dt className="font-sans font-bold text-3xl md:text-4xl text-white">
                    <AnimatedCounter value={s.value} />
                  </dt>
                  <dd className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-400 mt-1">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-[580px]">
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
