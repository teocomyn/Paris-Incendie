import type { Metadata } from "next";
import GeoPageTemplate from "@/components/GeoPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getGeoPageByPath } from "@/lib/geo-pages";

const PATH = "/maintenance-sprinkler-val-de-marne";

export const metadata: Metadata = buildMetadata({
  title: "Maintenance sprinkler Val-de-Marne (94)",
  description:
    "Maintenance et dépannage sprinkler en Val-de-Marne. Contrats semestriels APSAD, astreinte 24h/24. Créteil, Vitry, Rungis. Paris Incendie.",
  path: PATH,
});

export default function Page() {
  return <GeoPageTemplate page={getGeoPageByPath(PATH)!} />;
}
