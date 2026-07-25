import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { sectionPhotos } from "@/lib/images";
import ScrollReveal from "@/components/ScrollReveal";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [featured, ...rest] = testimonials;
  const featuredPhoto = sectionPhotos.testimonials[featured.photoIndex];

  return (
    <section className="section-padding section-dark border-y border-white/5">
      <div className="grain-overlay" />
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-label justify-center before:hidden">Témoignages</p>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <div className="divider-red mx-auto mt-5" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <ScrollReveal className="lg:col-span-5">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] photo-frame border-brand-500/20">
              <Image src={featuredPhoto} alt="Projet client" fill className="object-cover" sizes="500px" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 z-[2]">
                <div className="glass-panel p-5 md:p-6">
                  <Stars count={featured.rating} />
                  <p className="font-sans text-base md:text-lg text-white leading-snug mt-3">
                    &ldquo;{featured.content}&rdquo;
                  </p>
                  <footer className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="font-bold text-sm text-white">{featured.name}</p>
                      <p className="text-xs text-navy-400">{featured.role}</p>
                      <p className="text-xs text-brand-500 font-semibold mt-0.5">{featured.company}</p>
                    </div>
                    <span className="glass-pill px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-300 shrink-0">
                      {featured.project}
                    </span>
                  </footer>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {rest.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <blockquote className="card card-body flex flex-col h-full">
                  <Stars count={t.rating} />
                  <p className="text-sm text-navy-300 leading-relaxed flex-1 mt-3">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <footer className="mt-5 pt-4 border-t border-white/10">
                    <p className="font-bold text-sm text-white">{t.name}</p>
                    <p className="text-xs text-navy-400">{t.role}</p>
                    <p className="text-xs text-brand-500/90 font-medium mt-1">{t.company}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-navy-500 glass-pill px-2 py-0.5">
                      {t.project}
                    </span>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
