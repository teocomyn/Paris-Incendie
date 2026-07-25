import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { careers } from "@/lib/data";
import { images } from "@/lib/images";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Carrières",
  description: "Rejoignez Paris Incendie — technicien sprinkler, chef de projet, RIA. Île-de-France.",
};

export default function CarrieresPage() {
  return (
    <>
      <PageHeader
        title="Carrières"
        subtitle="Techniciens sprinkler, RIA et chefs de projet — Île-de-France."
        image={images.team}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Carrières" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 mb-14 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src={images.constructionAlt} alt="Équipe sur chantier" fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <h2 className="section-title mb-4">Rejoindre nos équipes</h2>
              <p className="text-navy-600 text-sm leading-relaxed">
                Installateur agréé APSAD en croissance. Projets variés — industrie,
                tertiaire, commerce — sur l&apos;ensemble de l&apos;Île-de-France.
              </p>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            {careers.map((job) => (
              <article key={job.title} className="card card-body flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-bold text-navy-900">{job.title}</h3>
                  <p className="text-sm text-navy-600 mt-1">{job.description}</p>
                  <div className="flex gap-4 mt-2 text-xs text-navy-500">
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{job.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-outline shrink-0">
                  Postuler <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection showImage={false} />
    </>
  );
}
