import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function EmergencyBanner() {
  return (
    <div className="relative overflow-hidden glass-flame text-white">
      <div className="grain-overlay opacity-20" />
      <div className="container-custom relative z-[1] py-1.5 sm:py-2.5">
        <a
          href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
          className="mx-auto flex w-full max-w-xl items-center justify-center gap-2 rounded-full glass-pill px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide transition-all hover:brightness-110 sm:max-w-none sm:inline-flex sm:w-auto sm:px-3 sm:py-1"
        >
          <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
          <span>Astreinte 24h/24</span>
          <span className="hidden sm:inline text-white/35">|</span>
          <span className="font-bold tabular-nums">{siteConfig.emergencyPhone}</span>
        </a>
      </div>
    </div>
  );
}
