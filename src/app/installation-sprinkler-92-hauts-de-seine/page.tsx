import type { Metadata } from "next";
import GeoPageTemplate from "@/components/GeoPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getGeoPageByPath } from "@/lib/geo-pages";

const PATH = "/installation-sprinkler-92-hauts-de-seine";

export const metadata: Metadata = buildMetadata({
  title: "Installateur sprinkler Hauts-de-Seine (92)",
  description:
    "Sprinkler & RIA en Hauts-de-Seine, Nanterre, Boulogne, Levallois. Installateur APSAD. Entrepôts, bureaux, commerces. Devis gratuit.",
  path: PATH,
});

export default function Page() {
  return <GeoPageTemplate page={getGeoPageByPath(PATH)!} />;
}
