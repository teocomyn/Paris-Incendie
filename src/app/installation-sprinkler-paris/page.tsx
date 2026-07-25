import type { Metadata } from "next";
import GeoPageTemplate from "@/components/GeoPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getGeoPageByPath } from "@/lib/geo-pages";

const PATH = "/installation-sprinkler-paris";

export const metadata: Metadata = buildMetadata({
  title: "Installateur sprinkler Paris (75)",
  description:
    "Installateur sprinkler & RIA agréé APSAD à Paris. Immeubles tertiaires, commerces, ERP. Étude, pose, maintenance. Devis gratuit sous 24h.",
  path: PATH,
});

export default function Page() {
  const page = getGeoPageByPath(PATH)!;
  return <GeoPageTemplate page={page} />;
}
