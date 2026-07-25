import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { references } from "@/lib/data";
import { images, referenceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Références",
  description: "Projets sprinkler et RIA réalisés par Paris Incendie en Île-de-France — industrie, tertiaire, logistique.",
};

/** Grille bas de page — photos uniques, différentes de l'en-tête et des fiches */
const refGallery = images.refGallery;

export default function ReferencesPage() {
  return (
    <>
      <PageHeader
        title="Nos références"
        subtitle="Projets sprinkler, RIA et maintenance en Île-de-France."
        image={images.warehouse}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Références" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((ref, i) => (
              <article key={ref.title} className="card">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
                  <Image src={referenceImages[i]} alt={ref.title} fill className="object-cover" sizes="33vw" />
                  <span className="absolute top-3 left-3 bg-brand-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                    {ref.category}
                  </span>
                </div>
                <div className="card-body">
                  <h3 className="font-bold text-white mb-2">{ref.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed mb-4">{ref.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ref.services.map((s) => (
                      <span key={s} className="text-[10px] font-medium bg-navy-800 text-navy-300 px-2 py-0.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 border-y border-brand-500/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "500+", label: "Projets" },
              { value: "10+", label: "Ans d'expérience" },
              { value: "APSAD", label: "Certification" },
              { value: "24/7", label: "Astreinte SAV" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-brand-500">{s.value}</div>
                <div className="text-xs text-navy-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Galerie de nos réalisations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {refGallery.map((src, i) => (
              <div key={`ref-${i}`} className="relative aspect-square rounded-md overflow-hidden photo-frame bg-navy-800">
                <Image src={src} alt={`Référence projet ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="200px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
