import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { realPhotos } from "@/lib/images";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showImage?: boolean;
}

export default function CTASection({
  title = "Un projet sprinkler ou RIA ?",
  subtitle = "Décrivez-nous votre bâtiment — devis gratuit sous 24h ouvrées.",
  primaryLabel = "Demander un devis",
  primaryHref = "/devis",
  showImage = true,
}: CTASectionProps) {
  return (
    <section className="section-padding section-dark">
      <div className="container-custom relative z-10">
        <div className="relative overflow-hidden rounded-2xl bg-navy-900 border border-navy-800 min-h-[320px] flex items-center">
          {showImage && (
            <>
              <Image
                src={realPhotos.pumpRoomWide}
                alt=""
                fill
                className="object-cover opacity-15"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/60" />
              <div className="glow-orb glow-orb-flame w-[400px] h-[300px] bottom-0 right-0 opacity-60" />
              <div className="grain-overlay" />
            </>
          )}
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16 w-full">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500 mb-3">
                Devis gratuit
              </p>
              <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
                {title}
              </h2>
              <p className="text-navy-300 text-sm md:text-base leading-relaxed">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:items-end lg:items-center md:justify-end">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
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
          </div>
        </div>
      </div>
    </section>
  );
}
