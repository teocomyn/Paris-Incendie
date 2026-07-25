import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { serviceImages } from "@/lib/images";

export default function ServicesSection() {
  return (
    <section className="section-padding section-elevated">
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
      <div className="grain-overlay" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="section-label">Nos métiers</p>
            <h2 className="section-title">Sprinkler, RIA, colonnes sèches & SAV</h2>
            <div className="divider-red mt-5 mb-5" />
            <p className="section-subtitle !mt-0">
              De l&apos;étude à la maintenance — installations conformes FM Global,
              NF EN, NFPA et APSAD.
            </p>
          </div>
          <Link href="/services" className="btn-secondary shrink-0 self-start">
            Tous les services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="card group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-navy-800">
                <Image
                  src={serviceImages[service.id]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <span className="absolute top-4 left-4 glass-flame text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-[2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 font-sans font-bold text-xl text-white">
                  {service.title}
                </h3>
              </div>
              <div className="card-body">
                <p className="text-sm text-navy-300 leading-relaxed line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-link">
                  En savoir plus <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
