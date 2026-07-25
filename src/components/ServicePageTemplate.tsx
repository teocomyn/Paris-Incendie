import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import type { ServicePageData } from "@/lib/service-pages";
import { serviceImages } from "@/lib/images";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

interface ServicePageTemplateProps {
  page: ServicePageData;
}

export default function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  const path = `/services/${page.slug}`;
  const image = serviceImages[page.imageKey] ?? serviceImages.sprinkler;

  return (
    <>
      <StructuredData
        data={[
          getServiceSchema(page.h1, page.intro, path),
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Services", url: "/services" },
            { name: page.title },
          ]),
        ]}
      />

      <PageHeader
        title={page.h1}
        subtitle={page.intro}
        image={image}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: page.title },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {page.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-sans font-bold text-2xl text-white mb-4">{section.heading}</h2>
                  <p className="text-navy-300 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}

              <div>
                <h2 className="font-sans font-bold text-2xl text-white mb-4">Nos prestations</h2>
                <ul className="space-y-2">
                  {page.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-navy-200">
                      <span className="text-brand-500 font-bold">·</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {page.faq.length > 0 && (
                <div>
                  <h2 className="font-sans font-bold text-2xl text-white mb-4">Questions fréquentes</h2>
                  <div className="space-y-4">
                    {page.faq.map((item) => (
                      <div key={item.question} className="glass-panel p-5">
                        <h3 className="font-semibold text-white text-sm mb-2">{item.question}</h3>
                        <p className="text-sm text-navy-300">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="relative aspect-[4/3] photo-frame overflow-hidden">
                <Image src={image} alt={page.h1} fill className="object-cover" sizes="400px" />
              </div>
              <div className="glass-panel p-6">
                <h3 className="font-bold text-white mb-3">Services associés</h3>
                <ul className="space-y-2 text-sm">
                  {page.relatedSlugs.map((slug) => (
                    <li key={slug}>
                      <Link href={`/services/${slug}`} className="text-brand-500 hover:text-brand-400 capitalize">
                        {slug.replace(/-/g, " ")} →
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/devis" className="btn-flame w-full mt-6 text-center !text-xs">
                  Demander un devis
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title={`Un projet ${page.title.toLowerCase()} ?`}
        subtitle="Devis gratuit et réponse sous 24h ouvrées."
      />
    </>
  );
}
