import type { Metadata } from "next";
import GeoPageTemplate from "@/components/GeoPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getGeoPageByPath } from "@/lib/geo-pages";

const PATH = "/ria-ile-de-france";

export const metadata: Metadata = buildMetadata({
  title: "Installateur RIA Île-de-France",
  description:
    "Installateur RIA agréé APSAD en Île-de-France. Réseaux conformes NF S 61-919, maintenance et dépannage. Devis gratuit Paris Incendie.",
  path: PATH,
});

export default function Page() {
  return <GeoPageTemplate page={getGeoPageByPath(PATH)!} />;
}
