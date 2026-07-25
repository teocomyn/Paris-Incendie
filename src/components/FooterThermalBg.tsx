"use client";

import ThermodynamicGrid from "@/components/ui/interactive-thermodynamic-grid";

export default function FooterThermalBg() {
  return (
    <>
      <ThermodynamicGrid resolution={14} coolingFactor={0.965} />
      <div className="absolute inset-0 z-[1] bg-navy-950/75 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />
    </>
  );
}
