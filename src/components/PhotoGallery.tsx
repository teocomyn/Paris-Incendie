"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Expand, ArrowUpRight } from "lucide-react";
import {
  galleryItems,
  galleryCategoryLabels,
  type GalleryCategory,
} from "@/lib/images";
import Lightbox from "@/components/Lightbox";
import ScrollReveal from "@/components/ScrollReveal";

const FILTERS: (GalleryCategory | "all")[] = ["all", "sprinkler", "ria", "pompes", "chantier", "reseau"];

const HOME_PREVIEW_COUNT = 9;

export default function PhotoGallery() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((p) => p.category === filter)),
    [filter]
  );

  const preview = filtered.slice(0, HOME_PREVIEW_COUNT);

  const openLightbox = (indexInFiltered: number) => setLightboxIndex(indexInFiltered);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section className="section-padding section-immersive">
      <div className="glow-orb glow-orb-flame w-[500px] h-[400px] bottom-0 right-0 opacity-30" />
      <div className="grain-overlay" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <p className="section-label">Nos installations</p>
              <h2 className="section-title">30 réalisations en images</h2>
              <p className="text-navy-300 text-sm leading-relaxed mt-4">
                Sprinkler, RIA, salles des pompes, chantiers et réseaux — matériel conforme NF EN 12845 et APSAD.
              </p>
            </div>
            <Link href="/references" className="btn-secondary shrink-0 self-start">
              Toutes les références
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Filtres */}
        <ScrollReveal delay={80}>
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  filter === f
                    ? "glass-flame text-white"
                    : "glass-subtle text-navy-400 hover:text-white"
                }`}
              >
                {f === "all" ? "Tout" : galleryCategoryLabels[f]}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grille */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {preview.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 60} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className={`group relative w-full photo-frame overflow-hidden bg-navy-900 text-left ${
                  i === 0 ? "aspect-[16/10] md:aspect-auto md:min-h-[340px]" : "aspect-square"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={i === 0 ? "600px" : "300px"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3 glass-pill px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-400">
                  {galleryCategoryLabels[photo.category]}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-2">
                  <p className="text-white text-xs md:text-sm font-semibold line-clamp-2">{photo.caption}</p>
                  <span className="btn-glass-icon !h-8 !w-8 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length > HOME_PREVIEW_COUNT && (
          <ScrollReveal delay={200}>
            <div className="mt-8 text-center">
              <Link href="/references" className="btn-outline">
                Voir les {filtered.length} photos {filter !== "all" ? `— ${galleryCategoryLabels[filter]}` : ""}
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
