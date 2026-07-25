"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxPhoto {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const prev = useCallback(() => {
    onChange(index === 0 ? photos.length - 1 : index - 1);
  }, [index, photos.length, onChange]);

  const next = useCallback(() => {
    onChange(index === photos.length - 1 ? 0 : index + 1);
  }, [index, photos.length, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse photo"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-[102] btn-glass-icon !h-11 !w-11"
        aria-label="Fermer"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-[102] btn-glass-icon !h-12 !w-12"
        aria-label="Photo précédente"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-[102] btn-glass-icon !h-12 !w-12"
        aria-label="Photo suivante"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="relative w-full max-w-5xl mx-4 aspect-[16/10] photo-frame"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-contain bg-navy-950"
          sizes="100vw"
          priority
        />
        <div className="absolute bottom-0 inset-x-0 glass-subtle rounded-b-2xl p-5 md:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500 mb-1">
            {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </p>
          {photo.caption && (
            <p className="text-white font-semibold text-base md:text-lg">{photo.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
