import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function EmergencyBanner() {
  return (
    <div className="relative overflow-hidden bg-brand-500 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 opacity-80" />
      <div className="grain-overlay opacity-20" />
      <div className="container-custom relative z-10 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center text-xs font-semibold uppercase tracking-wide">
        <span className="flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5" />
          Astreinte dépannage 24h/24
        </span>
        <span className="hidden sm:inline text-white/50">|</span>
        <a
          href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
          className="hover:underline underline-offset-2 font-bold"
        >
          {siteConfig.emergencyPhone}
        </a>
      </div>
    </div>
  );
}
