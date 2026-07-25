import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données — Paris Incendie.",
  path: "/politique-confidentialite",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Politique de confidentialité"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Confidentialité" },
        ]}
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose-custom space-y-6 text-sm text-navy-300 leading-relaxed">
          <div className="glass-panel p-6 md:p-8">
            <h2 className="font-sans text-xl text-white mb-3">Collecte des données</h2>
            <p>
              Les données collectées via nos formulaires (nom, email, téléphone, entreprise)
              sont utilisées uniquement pour répondre à vos demandes de devis ou de contact.
            </p>
          </div>
          <div className="glass-panel p-6 md:p-8">
            <h2 className="font-sans text-xl text-white mb-3">Vos droits (RGPD)</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              de suppression et d&apos;opposition. Contactez-nous à {siteConfig.email} ou par
              courrier à {siteConfig.address}.
            </p>
          </div>
          <div className="glass-panel p-6 md:p-8">
            <h2 className="font-sans text-xl text-white mb-3">Conservation</h2>
            <p>
              Vos données sont conservées le temps nécessaire au traitement de votre demande,
              puis archivées conformément aux obligations légales.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
