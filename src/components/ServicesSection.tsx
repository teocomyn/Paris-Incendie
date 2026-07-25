import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { images } from "@/lib/images";

const serviceImages: Record<string, string> = {
  sprinkler: images.sprinklerCeiling,
  ria: images.ria,
  "poteaux-colonnes": images.pipes,
  conformite: images.control,
  maintenance: images.maintenance,
  etude: images.project,
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
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
              className="card group hover:shadow-lift transition-shadow duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={serviceImages[service.id] || images.industrial}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl text-white">
                  {service.title}
                </h3>
              </div>
              <div className="card-body">
                <p className="text-sm text-navy-600 leading-relaxed line-clamp-2">
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
