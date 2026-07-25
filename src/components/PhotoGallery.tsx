"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images } from "@/lib/images";

const photos = [
  { src: images.hero, alt: "Intervention sécurité incendie", caption: "Intervention sur site" },
  { src: images.sprinkler, alt: "Réseau tuyauterie sprinkler", caption: "Réseau sprinkler" },
  { src: images.firefighter, alt: "Équipe sécurité incendie", caption: "Équipe terrain" },
  { src: images.industrial, alt: "Site industriel sécurisé", caption: "Site industriel" },
  { src: images.construction, alt: "Chantier installation", caption: "Chantier en cours" },
  { src: images.warehouse, alt: "Entrepôt logistique", caption: "Entrepôt logistique" },
  { src: images.pipes, alt: "Réseau hydraulique incendie", caption: "Réseau hydraulique" },
  { src: images.commercial, alt: "Bâtiment tertiaire", caption: "Immeuble tertiaire" },
  { src: images.safety, alt: "Contrôle installation", caption: "Contrôle conformité" },
  { src: images.maintenance, alt: "Maintenance sprinkler", caption: "Maintenance SAV" },
];

export default function PhotoGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-navy-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="section-label !text-brand-400 before:!bg-brand-400">Sur le terrain</p>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">
              Nos interventions en images
            </h2>
            <p className="text-navy-400 text-sm leading-relaxed mb-6">
              Installations sprinkler, réseaux RIA, mises en service et maintenance
              sur l&apos;ensemble de l&apos;Île-de-France.
            </p>
            <Link href="/references" className="btn-ghost-light text-sm">
              Voir nos références →
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] photo-frame mb-3">
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                className="object-cover"
                sizes="800px"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950/90 to-transparent p-5">
                <p className="text-white font-semibold">{photos[active].caption}</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {photos.map((photo, i) => (
                <button
                  key={photo.alt}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative aspect-square overflow-hidden rounded-sm transition-all ${
                    active === i
                      ? "ring-2 ring-brand-500 ring-offset-2 ring-offset-navy-950 opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  aria-label={photo.caption}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
