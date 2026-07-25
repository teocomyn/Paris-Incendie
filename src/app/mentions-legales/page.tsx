import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Paris Incendie, installateur sprinkler & RIA.",
  path: "/mentions-legales",
  noIndex: true,
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        title="Mentions légales"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-custom space-y-8">
            <div className="glass-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Informations légales</h2>
              <p className="text-navy-300 leading-relaxed">
                L&apos;entreprise Paris Incendie, spécialisée dans la sécurité incendie,
                est située à {siteConfig.address}. Elle est enregistrée sous le numéro
                SIREN {siteConfig.siret}.
              </p>
              <p className="text-navy-300 leading-relaxed mt-4">
                Contact : {siteConfig.phone}<br />
                Email : {siteConfig.email}<br />
                Directeur de la publication : [Nom du directeur de la publication]
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Hébergeur</h2>
              <p className="text-navy-300 leading-relaxed">
                Le site www.parisincendie.fr est hébergé par [Nom de l&apos;entreprise
                d&apos;hébergement], dont le siège social est situé à [Adresse de
                l&apos;entreprise d&apos;hébergement].
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
              <p className="text-navy-300 leading-relaxed">
                Tout le contenu de ce site, y compris, sans limitation, les graphiques,
                images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi
                que leur mise en forme sont la propriété exclusive de la société Paris
                Incendie à l&apos;exception des marques, logos ou contenus appartenant
                à d&apos;autres sociétés partenaires ou auteurs.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Données personnelles</h2>
              <p className="text-navy-300 leading-relaxed">
                Conformément au règlement général sur la protection des données (RGPD),
                les utilisateurs disposent d&apos;un droit d&apos;accès, de rectification,
                de suppression et d&apos;opposition concernant leurs données personnelles.
                Ce droit peut être exercé par voie postale à {siteConfig.address} ou
                par voie électronique à {siteConfig.email}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
