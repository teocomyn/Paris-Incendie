import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Demande de devis",
  description: "Devis gratuit pour installation sprinkler, RIA, mise en conformité ou maintenance.",
};

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
            {[images.sprinklerCeiling, images.ria, images.construction].map((src, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image src={src} alt="Projet incendie" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-navy-900 mb-4">Comment ça se passe</h2>
              <ol className="space-y-4">
                {[
                  "Vous décrivez votre bâtiment et vos besoins",
                  "Un technicien vous rappelle sous 24h",
                  "Visite sur site si nécessaire",
                  "Devis détaillé conforme aux normes",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-navy-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-3 card card-body">
              <ContactForm variant="devis" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
