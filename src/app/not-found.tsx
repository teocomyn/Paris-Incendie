import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={images.hero} alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="grain-overlay" />
      </div>
      <div className="container-custom relative z-10 text-center py-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-500 mb-4">Erreur 404</p>
        <h1 className="font-sans text-4xl md:text-5xl text-white mb-4">Page introuvable</h1>
        <p className="text-navy-400 mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
      </div>
    </section>
  );
}
