import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez Paris Incendie — ${siteConfig.phone}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Devis, projet ou urgence — notre équipe vous répond sous 24h."
        image={images.team}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
              <Image src={images.firefighter} alt="Équipe sécurité incendie" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
              <Image src={images.maintenance} alt="Maintenance sprinkler" fill className="object-cover" sizes="50vw" />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl text-navy-900">Coordonnées</h2>
              {[
                { icon: Phone, label: "Standard", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
                { icon: Phone, label: "Astreinte 24/7", value: siteConfig.emergencyPhone, href: `tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MapPin, label: "Zone", value: siteConfig.address },
                { icon: Clock, label: "Horaires", value: "Lun–Ven 8h–18h" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <item.icon className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-navy-500 uppercase">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-navy-900 hover:text-brand-600">{item.value}</a>
                    ) : (
                      <div className="text-sm text-navy-800">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3 card card-body">
              <h2 className="font-display text-xl text-navy-900 mb-6">Envoyer un message</h2>
              <ContactForm variant="contact" />
            </div>
          </div>
        </div>
      </section>

      <CTASection showImage={false} />
    </>
  );
}
