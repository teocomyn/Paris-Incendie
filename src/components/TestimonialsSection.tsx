import Image from "next/image";
import { testimonials } from "@/lib/data";
import { images } from "@/lib/images";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-warm-50 border-y border-navy-200/60">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label justify-center before:hidden">Témoignages</p>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <div className="divider-red mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] photo-frame">
            <Image
              src={images.industrial}
              alt="Client industriel"
              fill
              className="object-cover"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-navy-950/30" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-sm p-5 shadow-lift">
              <p className="font-display text-lg text-navy-900 leading-snug">
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <footer className="mt-4 pt-4 border-t border-navy-100">
                <p className="font-bold text-sm text-navy-900">{testimonials[0].name}</p>
                <p className="text-xs text-navy-500">{testimonials[0].role}</p>
                <p className="text-xs text-brand-600 font-semibold mt-0.5">{testimonials[0].company}</p>
              </footer>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {testimonials.slice(1).map((t) => (
              <blockquote key={t.name} className="card card-body flex flex-col">
                <p className="text-sm text-navy-700 leading-relaxed flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>
                <footer className="mt-5 pt-4 border-t border-navy-100">
                  <p className="font-bold text-sm text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-500">{t.role}</p>
                  {t.company && (
                    <p className="text-xs text-brand-600 font-medium mt-0.5">{t.company}</p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
