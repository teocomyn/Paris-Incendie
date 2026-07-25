import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { references } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Références",
  description: "Projets sprinkler et RIA réalisés par Paris Incendie en Île-de-France — industrie, tertiaire, logistique.",
};

const refImages = [
  images.commercial,
  images.industrial,
  images.building,
  images.warehouse,
  images.construction,
  images.safety,
];

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
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={refImages[i]} alt={ref.title} fill className="object-cover" sizes="33vw" />
                  <span className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-bold text-navy-900 rounded">
                    {ref.category}
                  </span>
                </div>
                <div className="card-body">
                  <h3 className="font-bold text-navy-900 mb-2">{ref.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-4">{ref.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ref.services.map((s) => (
                      <span key={s} className="text-[10px] font-medium bg-navy-100 text-navy-600 px-2 py-0.5 rounded">
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

      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "500+", label: "Projets" },
              { value: "10+", label: "Ans d'expérience" },
              { value: "APSAD", label: "Certification" },
              { value: "24/7", label: "Astreinte SAV" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-brand-400">{s.value}</div>
                <div className="text-xs text-navy-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.gallery.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-md overflow-hidden">
              <Image src={src} alt={`Chantier ${i + 1}`} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
