import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import type { GeoPageData } from "@/lib/geo-pages";
import { realPhotos } from "@/lib/images";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schema";

interface GeoPageTemplateProps {
  page: GeoPageData;
}

export default function GeoPageTemplate({ page }: GeoPageTemplateProps) {
  return (
    <>
      <StructuredData
        data={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: page.zone },
          ]),
        ]}
      />

      <PageHeader
        title={page.h1}
        subtitle={page.intro}
        image={realPhotos.pumpRoomWide}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: page.zone },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {page.sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="font-sans font-bold text-2xl text-white mb-4">{section.heading}</h2>
              <p className="text-navy-300 leading-relaxed text-sm mb-4">{section.content}</p>
            </div>
          ))}

          <div className="glass-panel p-6 mb-10">
            <h2 className="font-bold text-white mb-3">Mots-clés locaux</h2>
            <div className="flex flex-wrap gap-2">
              {page.localKeywords.map((kw) => (
                <span key={kw} className="glass-pill px-3 py-1 text-xs text-navy-300">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {page.faq.map((item) => (
              <div key={item.question} className="glass-panel p-5">
                <h3 className="font-semibold text-white text-sm mb-2">{item.question}</h3>
                <p className="text-sm text-navy-300">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/devis" className="btn-primary">Devis gratuit</Link>
            <Link href="/services/sprinkler-spk" className="btn-secondary">Sprinkler SPK</Link>
            <Link href="/services/ria" className="btn-secondary">RIA</Link>
            <Link href="/contact" className="btn-outline">Contact</Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Sprinkler & RIA en ${page.zone}`}
        subtitle={`${page.intro.slice(0, 120)}…`}
      />
    </>
  );
}
