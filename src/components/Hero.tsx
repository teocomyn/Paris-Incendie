import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-20 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 rounded-sm px-3 py-1.5 mb-6">
              <Shield className="h-3.5 w-3.5 text-brand-400" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-300">
                Agréé APSAD · Île-de-France · Depuis 2012
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] md:text-5xl lg:text-[3.5rem] text-white leading-[1.08] tracking-tight mb-6 text-balance">
              Installation & maintenance sprinkler et RIA
            </h1>

            <p className="text-lg text-navy-300 leading-relaxed mb-8 max-w-lg">
              Mise en sécurité de sites industriels, tertiaires et commerciaux.
              Études, pose, essais et contrats d&apos;entretien conformes NF EN.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link href="/devis" className="btn-primary">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="btn-ghost-light"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: "500+", label: "Projets" },
                { value: "2012", label: "Création" },
                { value: "24/7", label: "Astreinte" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-white">{s.value}</dt>
                  <dd className="text-[11px] font-semibold uppercase tracking-wider text-navy-400 mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo collage */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] max-h-[560px] photo-frame">
              <Image
                src={images.construction}
                alt="Chantier installation sprinkler Paris Incendie"
                fill
                className="object-cover"
                priority
                sizes="540px"
              />
            </div>
            <div className="absolute -bottom-6 -left-8 w-44 h-32 photo-frame border-4 border-navy-950">
              <Image src={images.sprinkler} alt="Réseau tuyauterie sprinkler" fill className="object-cover" sizes="176px" />
            </div>
            <div className="absolute -top-5 -right-6 w-40 h-28 photo-frame border-4 border-navy-950">
              <Image src={images.fireEquipment} alt="Équipement incendie" fill className="object-cover" sizes="160px" />
            </div>
            <div className="absolute bottom-12 -right-10 bg-white rounded-sm shadow-lift p-4 max-w-[200px]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-1">Certifié</p>
              <p className="font-display text-lg text-navy-900 leading-tight">APSAD R4 & R5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
