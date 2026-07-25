import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function EmergencyBanner() {
  return (
    <div className="bg-brand-700 text-white">
      <div className="container-custom py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center text-xs font-semibold uppercase tracking-wide">
        <span className="flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5" />
          Astreinte dépannage 24h/24
        </span>
        <span className="hidden sm:inline text-brand-400">|</span>
        <a
          href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
          className="hover:underline underline-offset-2"
        >
          {siteConfig.emergencyPhone}
        </a>
      </div>
    </div>
  );
}
