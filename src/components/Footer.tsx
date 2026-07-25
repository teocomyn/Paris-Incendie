import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { navigation, siteConfig } from "@/lib/data";
import { realPhotos } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-400 border-t border-navy-800">
      {/* Photo band */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image src={realPhotos.sprinklerAction} alt="" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 bg-hero-glow opacity-50" />
        <div className="grain-overlay" />
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="glass-panel p-6 md:p-8 max-w-lg">
            <p className="font-sans text-xl md:text-2xl text-white">
              Sécurisez vos locaux dès aujourd&apos;hui
            </p>
            <Link href="/devis" className="inline-block mt-4 btn-flame !text-xs !py-2 !px-4">
              Demander un devis gratuit →
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom py-14">
        <div className="glass-panel p-8 md:p-10">
          <div className="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Logo variant="full-light" showTagline />
            </Link>
            <p className="text-sm leading-relaxed">
              Installation et maintenance sprinkler (SPK) et RIA.
              Agréé APSAD — Île-de-France.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-500 transition-colors">{item.name}</Link>
                </li>
              ))}
              <li><Link href="/devis" className="hover:text-brand-500 transition-colors">Devis</Link></li>
              <li><Link href="/carrieres" className="hover:text-brand-500 transition-colors">Carrières</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#sprinkler" className="hover:text-brand-500 transition-colors">Sprinkler SPK</Link></li>
              <li><Link href="/services#ria" className="hover:text-brand-500 transition-colors">RIA</Link></li>
              <li><Link href="/services#conformite" className="hover:text-brand-500 transition-colors">Mise en conformité</Link></li>
              <li><Link href="/services#maintenance" className="hover:text-brand-500 transition-colors">Maintenance & SAV</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                {siteConfig.address}
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 text-brand-500 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">{siteConfig.phone}</a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 text-brand-500 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
              </li>
            </ul>
            <p className="mt-4 text-xs font-bold text-brand-500">
              Astreinte : {siteConfig.emergencyPhone}
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs glass-subtle mx-4 mb-4 rounded-2xl px-6">
          <p>&copy; {new Date().getFullYear()} Paris Incendie</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-brand-500 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-brand-500 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
