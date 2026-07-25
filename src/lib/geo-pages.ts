import { siteConfig } from "@/lib/data";

export interface GeoPageData {
  slug: string;
  path: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  zone: string;
  intro: string;
  sections: { heading: string; content: string }[];
  localKeywords: string[];
  faq: { question: string; answer: string }[];
}

export const geoPages: GeoPageData[] = [
  {
    slug: "paris",
    path: "/installation-sprinkler-paris",
    h1: "Installation sprinkler à Paris",
    metaTitle: "Installateur sprinkler Paris (75)",
    metaDescription:
      "Installateur sprinkler & RIA agréé APSAD à Paris. Immeubles tertiaires, commerces, ERP. Étude, pose, maintenance. Devis gratuit sous 24h.",
    zone: "Paris (75)",
    intro:
      "Paris Incendie intervient à Paris intra-muros pour l'installation, la mise en conformité et la maintenance de systèmes sprinkler et RIA. Nos équipes connaissent les contraintes des immeubles haussmanniens, des bâtiments tertiaires La Défense et des établissements recevant du public parisiens.",
    sections: [
      {
        heading: "Sprinkler et RIA à Paris : nos spécialités",
        content:
          "Immeubles de bureaux, hôtels, commerces, parkings souterrains et copropriétés tertiaires : nous dimensionnons des réseaux adaptés aux contraintes d'accès, de compartimentage et de préservation architecturale propres à Paris.",
      },
      {
        heading: "Intervention rapide en capitale",
        content:
          "Bureau d'études, préfabrication et pose par équipes IDF. Astreinte dépannage 24h/24 pour les urgences sprinkler et RIA sur Paris.",
      },
    ],
    localKeywords: ["installateur sprinkler paris", "sprinkler paris 75", "RIA paris"],
    faq: [
      {
        question: "Intervenez-vous dans tous les arrondissements ?",
        answer: "Oui, nous couvrons l'ensemble de Paris (1er au 20e arrondissement) et la petite couronne.",
      },
    ],
  },
  {
    slug: "92-hauts-de-seine",
    path: "/installation-sprinkler-92-hauts-de-seine",
    h1: "Installation sprinkler Hauts-de-Seine (92)",
    metaTitle: "Installateur sprinkler Hauts-de-Seine (92)",
    metaDescription:
      "Sprinkler & RIA en Hauts-de-Seine — Nanterre, Boulogne, Levallois. Installateur APSAD. Entrepôts, bureaux, commerces. Devis gratuit.",
    zone: "Hauts-de-Seine (92)",
    intro:
      "Entrepôts de La Défense, zones logistiques de Gennevilliers, tertiaire de Boulogne-Billancourt : Paris Incendie installe et maintient des systèmes sprinkler et RIA dans tout le département des Hauts-de-Seine.",
    sections: [
      {
        heading: "Projets industriels et tertiaires en 92",
        content:
          "Nous accompagnons les sites logistiques haut-risque, les centres commerciaux et les immeubles de bureaux avec des installations conformes NF EN 12845 et certification APSAD.",
      },
    ],
    localKeywords: ["sprinkler 92", "installateur sprinkler hauts-de-seine", "RIA nanterre"],
    faq: [
      {
        question: "Quels types de bâtiments en 92 ?",
        answer: "Entrepôts, plateformes logistiques, bureaux, commerces et établissements industriels.",
      },
    ],
  },
  {
    slug: "93-seine-saint-denis",
    path: "/installation-sprinkler-93-seine-saint-denis",
    h1: "Installation sprinkler Seine-Saint-Denis (93)",
    metaTitle: "Installateur sprinkler Seine-Saint-Denis (93)",
    metaDescription:
      "Installation sprinkler & RIA en Seine-Saint-Denis. Entrepôts, industrie, tertiaire. Agréé APSAD. Paris Incendie — devis sous 24h.",
    zone: "Seine-Saint-Denis (93)",
    intro:
      "Zones logistiques de Roissy, entrepôts de Saint-Denis, sites industriels de Bobigny : le 93 concentre de nombreux bâtiments soumis à des obligations sprinkler. Paris Incendie y déploie ses équipes de pose et de maintenance.",
    sections: [
      {
        heading: "Expertise logistique et industrielle",
        content:
          "Dimensionnement haut-risque, salles des pompes, réseaux de grande envergure et maintenance semestrielle pour sites en activité continue.",
      },
    ],
    localKeywords: ["sprinkler 93", "installateur sprinkler seine-saint-denis", "sprinkler entrepôt 93"],
    faq: [
      {
        question: "Pouvez-vous intervenir sans arrêter la production ?",
        answer: "Oui, nous planifions les travaux par phases pour limiter l'impact sur votre activité.",
      },
    ],
  },
  {
    slug: "94-val-de-marne",
    path: "/maintenance-sprinkler-val-de-marne",
    h1: "Maintenance sprinkler Val-de-Marne (94)",
    metaTitle: "Maintenance sprinkler Val-de-Marne (94)",
    metaDescription:
      "Maintenance et dépannage sprinkler en Val-de-Marne. Contrats semestriels APSAD, astreinte 24h/24. Créteil, Vitry, Rungis. Paris Incendie.",
    zone: "Val-de-Marne (94)",
    intro:
      "Marchés de Rungis, zones commerciales de Créteil, parcs d'activités de Vitry-sur-Seine : Paris Incendie assure la maintenance préventive et le dépannage d'urgence de vos installations sprinkler et RIA dans le Val-de-Marne.",
    sections: [
      {
        heading: "Contrats de maintenance en 94",
        content:
          "Vérifications semestrielles, rapports APSAD, astreinte 24h/24 et remplacement d'organes agréés. Nous gérons des parcs mono et multi-sites.",
      },
    ],
    localKeywords: ["maintenance sprinkler 94", "dépannage sprinkler val-de-marne", "RIA 94"],
    faq: [
      {
        question: "Proposez-vous la reprise de contrats existants ?",
        answer: "Oui, nous auditons votre installation et reprenons la maintenance avec un rapport initial complet.",
      },
    ],
  },
  {
    slug: "ria-ile-de-france",
    path: "/ria-ile-de-france",
    h1: "Installation RIA en Île-de-France",
    metaTitle: "Installateur RIA Île-de-France",
    metaDescription:
      "Installateur RIA agréé APSAD en Île-de-France. Réseaux conformes NF S 61-919, maintenance et dépannage. Devis gratuit Paris Incendie.",
    zone: "Île-de-France",
    intro:
      "Le Robinet Incendie Armé (RIA) est un pilier de la sécurité incendie en entreprise. Paris Incendie installe, met en conformité et entretient les réseaux RIA sur l'ensemble des départements d'Île-de-France : Paris, 92, 93, 94, 77, 78, 91 et 95.",
    sections: [
      {
        heading: "RIA : installation et conformité",
        content:
          "Création de réseau neuf, extension, essais de pression et certification APSAD R5. Nos techniciens interviennent sur ERP, industrie et tertiaire.",
      },
    ],
    localKeywords: ["installateur RIA", "RIA ile de france", "robinet incendie armé paris"],
    faq: [
      {
        question: "Quelle norme pour les RIA ?",
        answer: "La norme NF S 61-919 et les règles APSAD R5 pour les installateurs.",
      },
    ],
  },
];

export function getGeoPageByPath(path: string) {
  return geoPages.find((p) => p.path === path);
}

export function getGeoPage(slug: string) {
  return geoPages.find((p) => p.slug === slug);
}
