"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { navigation, siteConfig } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-soft border-b border-navy-100" : "border-b border-navy-200/60"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-[68px] md:h-[76px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Logo className="h-10 w-10 md:h-11 md:w-11 transition-transform group-hover:scale-105" />
            <div className="hidden sm:block">
              <span className="block font-display text-lg font-bold text-navy-900 leading-none tracking-tight">
                Paris Incendie
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-500 mt-1">
                Sprinkler · RIA · APSAD
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-brand-600"
                      : "text-navy-700 hover:text-navy-900"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-600 transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
                <Phone className="h-3.5 w-3.5 text-brand-600" />
              </span>
              {siteConfig.phone}
            </a>
            <Link href="/devis" className="btn-primary !py-2.5 !px-5 !text-xs">
              Devis gratuit
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-navy-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-white">
          <nav className="container-custom py-5 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3.5 px-2 text-base font-semibold border-b border-navy-50 ${
                  pathname === item.href ? "text-brand-600" : "text-navy-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 py-3 text-sm font-bold text-navy-900"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              {siteConfig.phone}
            </a>
            <Link href="/devis" className="btn-primary mt-2 text-center">
              Devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
