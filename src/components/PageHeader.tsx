import Link from "next/link";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, image, breadcrumbs }: PageHeaderProps) {
  const bgImage = image || "https://images.unsplash.com/photo-1581094794359-1e0a4b3a3e3e?w=1600&q=85";

  return (
    <section className="relative bg-navy-950 min-h-[280px] md:min-h-[320px] flex items-end">
      <div className="absolute inset-0">
        <Image src={bgImage} alt="" fill className="object-cover opacity-35" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      </div>

      <div className="container-custom relative z-10 py-14 md:py-16 w-full">
        {breadcrumbs && (
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-navy-400 mb-5">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-navy-600">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-base md:text-lg text-navy-300 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
