import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { siteConfig, values } from "@/lib/data";
import { images, realPhotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "À propos",
  description: `Paris Incendie — installateur sprinkler & RIA agréé APSAD depuis ${siteConfig.founded}. Île-de-France.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="À propos de Paris Incendie"
        subtitle="Installateur agréé APSAD — sprinkler, RIA, mise en conformité et maintenance."
        image={realPhotos.pumpRoomWide}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Notre histoire</h2>
              <div className="space-y-4 text-navy-300 leading-relaxed text-sm">
                <p>
                  Paris Incendie installe et maintient des systèmes de protection incendie
                  depuis {siteConfig.founded}. Reconnue par les entreprises agréées du
                  secteur, nous accompagnons nos clients sur leurs projets SPK et RIA.
                </p>
                <p>
                  Agréés APSAD, nous disposons d&apos;un bureau d&apos;études intégré,
                  d&apos;ateliers de préfabrication et d&apos;équipes de pose habilitées
                  pour intervenir sur sites en production ou bâtiments neufs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden col-span-2 sm:col-span-1">
                <Image src={realPhotos.pumpRoomWide} alt="Salle des pompes" fill className="object-cover" sizes="300px" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={realPhotos.sprinklerHead} alt="Tête sprinkler" fill className="object-cover" sizes="200px" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={realPhotos.sprinklerAlarm} alt="Poste alarme sprinkler" fill className="object-cover" sizes="200px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 border-y border-navy-800">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Nos valeurs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={value.title} className="card card-body text-center">
                <div className="relative h-32 rounded-md overflow-hidden mb-4 -mx-6 -mt-6">
                  <Image
                    src={[images.industrial, images.safety, images.team, images.control][i]}
                    alt={value.title}
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>
                <h3 className="font-bold text-white mb-2">{value.title}</h3>
                <p className="text-xs text-navy-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={realPhotos.sprinklerAction} alt="Tête sprinkler en plafond" fill className="object-cover" sizes="600px" />
          </div>
          <div>
            <h2 className="section-title mb-4">Le sprinkler, concrètement</h2>
            <p className="text-navy-300 text-sm leading-relaxed mb-4">
              Système automatique à déclenchement par fusion thermique. Un réseau de
              tuyauteries sous pression alimente des têtes sprinkler qui projettent
              l&apos;eau directement sur le foyer dès la montée de température.
            </p>
            <p className="text-navy-600 text-sm leading-relaxed">
              Extinction localisée, alarme simultanée, conformité NF EN 12845 et
              certification APSAD R4 pour les installateurs.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
