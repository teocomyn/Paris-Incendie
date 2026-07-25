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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-glass" : "glass-subtle border-b border-white/5"
      }`}
    >
      <div className="container-custom relative z-[1]">
        <div className="flex h-[60px] md:h-[76px] items-center justify-between gap-3">
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-90 flex items-center">
            <Logo variant="full-light" className="h-10 w-auto sm:h-11 md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center glass-pill px-1.5 py-1">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-full transition-all duration-300 ${
                    active
                      ? "text-brand-500 bg-brand-500/10"
                      : "text-navy-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="hidden lg:flex items-center gap-2 text-xs xl:text-sm font-bold text-navy-100 hover:text-brand-500 transition-colors glass-pill px-2 xl:px-3 py-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/15 border border-brand-500/25">
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
            className="lg:hidden btn-glass-icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-white/10 relative z-[1]">
          <nav className="container-custom py-5 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3.5 px-4 text-base font-semibold rounded-xl transition-all ${
                  pathname === item.href
                    ? "text-brand-500 glass-flame"
                    : "text-navy-100 hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 py-3 px-4 text-sm font-bold text-navy-100 glass-pill mt-2"
            >
              <Phone className="h-4 w-4 text-brand-500" />
              {siteConfig.phone}
            </a>
            <Link href="/devis" className="btn-primary mt-3 text-center">
              Devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
