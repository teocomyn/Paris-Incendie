import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import { servicePages } from "@/lib/service-pages";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={images.hero} alt="Sprinkler, sécurité incendie Paris Incendie" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="grain-overlay" />
      </div>
      <div className="container-custom relative z-10 text-center py-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-500 mb-4">Erreur 404</p>
        <h1 className="font-sans text-4xl md:text-5xl text-white mb-4">Page introuvable</h1>
        <p className="text-navy-400 mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-primary mb-10 inline-flex">Retour à l&apos;accueil</Link>

        <div className="mt-8 glass-panel p-6 max-w-lg mx-auto text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-500 mb-3">Pages populaires</p>
          <ul className="space-y-2 text-sm">
            {servicePages.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-navy-300 hover:text-brand-500">
                  {s.h1} →
                </Link>
              </li>
            ))}
            <li>
              <Link href="/devis" className="text-navy-300 hover:text-brand-500">Devis gratuit →</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
