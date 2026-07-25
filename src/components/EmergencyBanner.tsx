import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function EmergencyBanner() {
  return (
    <div className="relative overflow-hidden glass-flame text-white">
      <div className="grain-overlay opacity-20" />
      <div className="container-custom relative z-[1] py-2.5 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center text-xs font-semibold uppercase tracking-wide">
        <span className="flex items-center gap-1.5 glass-pill px-3 py-1">
          <Phone className="h-3.5 w-3.5" />
          Astreinte dépannage 24h/24
        </span>
        <span className="hidden sm:inline text-white/40">|</span>
        <a
          href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
          className="hover:underline underline-offset-2 font-bold glass-pill px-3 py-1"
        >
          {siteConfig.emergencyPhone}
        </a>
      </div>
    </div>
  );
}
