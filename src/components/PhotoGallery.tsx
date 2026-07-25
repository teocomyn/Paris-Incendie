"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images, galleryCaptions } from "@/lib/images";

const photos = images.gallery.map((src, i) => ({
  src,
  alt: galleryCaptions[i] ?? `Installation ${i + 1}`,
  caption: galleryCaptions[i] ?? `Installation ${i + 1}`,
}));

export default function PhotoGallery() {
  const [active, setActive] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const prev = () => setActive((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setActive((i) => (i === photos.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const el = thumbsRef.current?.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <section className="section-padding section-dark">
      <div className="glow-orb glow-orb-flame w-[500px] h-[400px] bottom-0 right-0 opacity-40" />
      <div className="grain-overlay" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="section-label !text-brand-500 before:!bg-brand-500">Nos installations</p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              {photos.length} réalisations en images
            </h2>
            <p className="text-navy-400 text-sm leading-relaxed mb-6">
              Sprinkler, RIA, salles des pompes, chantiers et réseaux —
              du matériel conforme NF EN 12845 et APSAD, posé par nos équipes.
            </p>
            <Link href="/references" className="btn-ghost-light text-sm">
              Voir nos références →
            </Link>
          </div>

          <div className="lg:col-span-8">
            {/* Image principale */}
            <div className="relative aspect-[16/10] photo-frame mb-4 bg-navy-800 border-brand-500/20 shadow-glow group">
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="800px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-transparent to-transparent" />

              {/* Navigation */}
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 btn-glass-icon opacity-100 lg:opacity-80 lg:hover:opacity-100"
                aria-label="Photo précédente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 btn-glass-icon opacity-100 lg:opacity-80 lg:hover:opacity-100"
                aria-label="Photo suivante"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-0 inset-x-0 glass-subtle rounded-b-2xl p-6 z-[2]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500 mb-1">
                  {String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </p>
                <p className="text-white font-semibold text-lg">{photos[active].caption}</p>
              </div>
            </div>

            {/* Vignettes scrollables — 30 photos */}
            <div
              ref={thumbsRef}
              className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-navy-700 scrollbar-track-transparent"
            >
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 w-20 h-20 overflow-hidden rounded-md bg-navy-800 transition-all ${
                    active === i
                      ? "ring-2 ring-brand-500 ring-offset-2 ring-offset-navy-950 opacity-100 shadow-glow-sm"
                      : "opacity-40 hover:opacity-70 border border-navy-800"
                  }`}
                  aria-label={photo.caption}
                  aria-current={active === i}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>

            {/* Grille mosaïque — aperçu rapide */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-4">
              {photos.slice(0, 12).map((photo, i) => (
                <button
                  key={`grid-${photo.src}`}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative aspect-square overflow-hidden rounded-md photo-frame transition-all ${
                    active === i ? "ring-2 ring-brand-500" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="100px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
