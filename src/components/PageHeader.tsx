import Link from "next/link";
import Image from "next/image";
import { images, realPhotos } from "@/lib/images";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, image, breadcrumbs }: PageHeaderProps) {
  const bgImage = image || realPhotos.sprinklerAction;

  return (
    <section className="relative bg-navy-950 min-h-[280px] md:min-h-[320px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image src={bgImage} alt="" fill className="object-cover opacity-25" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/50" />
        <div className="absolute inset-0 bg-hero-glow opacity-60" />
        <div className="immersive-grid" />
        <div className="glow-orb glow-orb-flame w-[500px] h-[350px] -bottom-20 left-1/2 -translate-x-1/2 opacity-50" />
        <div className="grain-overlay" />
      </div>

      <div className="container-custom relative z-10 py-14 md:py-16 w-full">
        {breadcrumbs && (
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-navy-400 mb-5">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-navy-600">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-brand-500 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-base md:text-lg text-navy-300 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
