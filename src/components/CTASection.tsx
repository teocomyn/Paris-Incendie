import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";

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
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-sm bg-navy-900 min-h-[320px] flex items-center">
          {showImage && (
            <>
              <Image
                src={images.construction}
                alt=""
                fill
                className="object-cover opacity-25"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70" />
            </>
          )}
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16 w-full">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400 mb-3">
                Contact
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">
                {title}
              </h2>
              <p className="text-navy-300 leading-relaxed">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
              <Link
                href={primaryHref}
                className="btn-primary !bg-white !text-navy-900 hover:!bg-navy-100"
              >
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
