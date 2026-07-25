import Image from "next/image";
import { testimonials } from "@/lib/data";
import { realPhotos } from "@/lib/images";

export default function TestimonialsSection() {
  return (
    <section className="section-padding section-elevated border-y border-navy-800/60">
      <div className="grain-overlay" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label justify-center before:hidden">Témoignages</p>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <div className="divider-red mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] photo-frame border-brand-500/20">
            <Image
              src={realPhotos.pumpRoomWide}
              alt="Chantier client"
              fill
              className="object-cover"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-navy-950/40" />
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 z-[2]">
              <p className="font-sans font-semibold text-lg text-white leading-snug">
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <footer className="mt-4 pt-4 border-t border-navy-800">
                <p className="font-bold text-sm text-white">{testimonials[0].name}</p>
                <p className="text-xs text-navy-400 mt-0.5">{testimonials[0].role}</p>
              </footer>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {testimonials.slice(1).map((t) => (
              <blockquote key={t.name} className="card card-body flex flex-col">
                <p className="text-sm text-navy-300 leading-relaxed flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>
                <footer className="mt-5 pt-4 border-t border-navy-800">
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-navy-500 mt-0.5">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
