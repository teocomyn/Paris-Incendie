import type { Metadata } from "next";
import GeoPageTemplate from "@/components/GeoPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getGeoPageByPath } from "@/lib/geo-pages";

const PATH = "/installation-sprinkler-93-seine-saint-denis";

export const metadata: Metadata = buildMetadata({
  title: "Installateur sprinkler Seine-Saint-Denis (93)",
  description:
    "Installation sprinkler & RIA en Seine-Saint-Denis. Entrepôts, industrie, tertiaire. Agréé APSAD. Paris Incendie, devis sous 24h.",
  path: PATH,
});

export default function Page() {
  return <GeoPageTemplate page={getGeoPageByPath(PATH)!} />;
}
