import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { images, realPhotos } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Devis gratuit sprinkler & RIA — réponse 24h",
  description:
    "Demandez un devis gratuit pour installation sprinkler, RIA, mise en conformité ou maintenance en Île-de-France. Réponse sous 24h ouvrées.",
  path: "/devis",
});

export default function DevisPage() {
  return (
    <>
      <PageHeader
        title="Demande de devis"
        subtitle="Gratuit, sans engagement — réponse sous 24h ouvrées."
        image={images.project}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Devis" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[images.gallery[0], images.gallery[5], images.gallery[21]].map((src, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image src={src} alt="Projet incendie" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 glass-panel p-6 md:p-8">
              <h2 className="font-sans text-2xl text-white mb-4">Comment ça se passe</h2>
              <ol className="space-y-4">
                {[
                  "Vous décrivez votre bâtiment et vos besoins",
                  "Un technicien vous rappelle sous 24h",
                  "Visite sur site si nécessaire",
                  "Devis détaillé conforme aux normes",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-navy-300 glass-subtle p-3 rounded-xl">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center glass-flame text-brand-500 text-xs font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-3 card card-body">
              <h2 className="font-sans text-xl text-white mb-6">Votre demande</h2>
              <ContactForm variant="devis" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
