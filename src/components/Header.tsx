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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-xl border-b border-navy-800/60 shadow-soft"
          : "bg-navy-950/40 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-[68px] md:h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
            <Logo variant="full-light" showTagline />
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
                      ? "text-brand-500"
                      : "text-navy-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-500 rounded-full shadow-glow-sm" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-navy-100 hover:text-brand-500 transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 border border-brand-500/20">
                <Phone className="h-3.5 w-3.5 text-brand-500" />
              </span>
              {siteConfig.phone}
            </a>
            <Link href="/devis" className="btn-primary !py-2.5 !px-5 !text-xs">
              Devis gratuit
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-navy-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-800 bg-navy-950/95 backdrop-blur-xl">
          <nav className="container-custom py-5 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3.5 px-2 text-base font-semibold border-b border-navy-800/60 ${
                  pathname === item.href ? "text-brand-500" : "text-navy-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 py-3 text-sm font-bold text-navy-100"
            >
              <Phone className="h-4 w-4 text-brand-500" />
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
