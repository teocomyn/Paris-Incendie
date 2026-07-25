import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description: "Installation sprinkler SPK, RIA, colonnes sèches, mise en conformité APSAD et maintenance — Paris Incendie.",
};

const serviceImages: Record<string, string> = {
  sprinkler: images.sprinklerCeiling,
  ria: images.ria,
  "poteaux-colonnes": images.pipes,
  conformite: images.control,
  maintenance: images.maintenance,
  etude: images.project,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Nos services"
        subtitle="Étude, installation, essais, mise en conformité et contrats d'entretien."
        image={images.industrial}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
      />

      <section className="section-padding">
        <div className="container-custom space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} id={service.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-10 items-center">
                <div className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg ${isEven ? "" : "lg:order-2"}`}>
                  <Image
                    src={serviceImages[service.id] || images.industrial}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div className={isEven ? "" : "lg:order-1"}>
                  <span className="text-xs font-bold text-brand-600">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-2xl md:text-3xl text-navy-900 mt-1 mb-4">{service.title}</h2>
                  <p className="text-navy-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-navy-700">
                        <span className="text-brand-600 font-bold">—</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-navy-50 border-t border-navy-200">
        <div className="container-custom grid md:grid-cols-3 gap-4">
          {[images.firefighter, images.warehouse, images.commercial].map((src, i) => (
            <div key={i} className="relative aspect-[16/10] rounded-lg overflow-hidden">
              <Image src={src} alt="Projet sécurité incendie" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Devis sur demande" subtitle="Solutions personnalisées conformes NF EN et APSAD." />
    </>
  );
}
