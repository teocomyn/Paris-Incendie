import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import { services } from "@/lib/data";
import { images, realPhotos, serviceImages } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { serviceIdToSlug } from "@/lib/service-pages";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Services sprinkler & RIA, installateur APSAD IDF",
  description:
    "Installateur sprinkler & RIA agréé APSAD en Île-de-France. Étude, pose, essais et maintenance. Devis gratuit sous 24h.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Services" },
        ])}
      />
      <PageHeader
        title="Nos services"
        subtitle="Étude, installation, essais, mise en conformité et contrats d'entretien."
        image={realPhotos.pumpRoomWide}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
      />

      <section className="section-padding">
        <div className="container-custom space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} id={service.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-10 items-center">
                <div className={`relative aspect-[4/3] photo-frame overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
                  <Image
                    src={serviceImages[service.id]}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div className={`glass-panel p-6 md:p-8 ${isEven ? "" : "lg:order-1"}`}>
                  <span className="text-xs font-bold text-brand-500 glass-pill px-2.5 py-0.5">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="font-sans font-bold text-2xl md:text-3xl text-white mt-1 mb-4">{service.title}</h2>
                  <p className="text-navy-300 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-navy-200">
                        <span className="text-brand-500 font-bold">·</span>{f}
                      </li>
                    ))}
                  </ul>
                  {serviceIdToSlug[service.id] && (
                    <Link href={`/services/${serviceIdToSlug[service.id]}`} className="text-link">
                      Voir la page {service.title} →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding section-elevated border-t border-navy-800">
        <div className="container-custom grid md:grid-cols-3 gap-4">
          {[images.gallery[0], images.gallery[3], images.gallery[5]].map((src, i) => (
            <div key={src} className="relative aspect-[16/10] photo-frame overflow-hidden">
              <Image src={src} alt="Projet sécurité incendie" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Devis sur demande" subtitle="Solutions personnalisées conformes NF EN et APSAD." />
    </>
  );
}
