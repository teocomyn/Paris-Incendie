import { siteConfig } from "@/lib/data";

export interface ServicePageData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; content: string }[];
  features: string[];
  faq: { question: string; answer: string }[];
  imageKey: string;
  relatedSlugs: string[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: "sprinkler-spk",
    title: "Sprinkler SPK",
    h1: "Installation sprinkler SPK en Île-de-France",
    metaTitle: "Installation sprinkler SPK Paris & IDF",
    metaDescription:
      "Installateur sprinkler agréé APSAD en Île-de-France. Étude, préfabrication, pose et essais conformes NF EN 12845. Devis gratuit sous 24h.",
    intro:
      "Paris Incendie conçoit et installe des systèmes sprinkler (SPK) automatiques pour sites industriels, tertiaires et commerciaux. De l'étude d'exécution à la mise en service, nos équipes agréées APSAD R4 interviennent sur l'ensemble de l'Île-de-France.",
    sections: [
      {
        heading: "Qu'est-ce qu'un système sprinkler ?",
        content:
          "Le sprinkler est un système d'extinction automatique à eau : un réseau de tuyauteries sous pression alimente des têtes sprinkler qui se déclenchent individuellement par fusion thermique. L'extinction est localisée sur le foyer, limitant les dégâts et gagnant un temps précieux avant l'arrivée des secours.",
      },
      {
        heading: "Notre méthode d'installation",
        content:
          "Après analyse des risques et relevé sur site, notre bureau d'études intégré élabore les plans d'exécution conformes NF EN 12845, FM Global ou NFPA 13 selon votre cahier des charges. Les réseaux sont préfabriqués en atelier, puis posés par des équipes habilitées. Les essais hydrauliques et le rapport de mise en service clôturent chaque projet.",
      },
      {
        heading: "Secteurs d'intervention",
        content:
          "Entrepôts logistiques, usines, centres commerciaux, immeubles de bureaux, parkings souterrains, établissements recevant du public : nous adaptons la densité de couverture et le dimensionnement des groupes de pompage à chaque typologie de bâtiment.",
      },
    ],
    features: [
      "Études FM Global, NF EN 12845, NFPA, APSAD",
      "Préfabrication et pose par équipes certifiées",
      "Salles des pompes et centrales de contrôle",
      "Essais, mise en service et rapport APSAD",
      "Intervention sur sites en production",
    ],
    faq: [
      {
        question: "Le sprinkler est-il obligatoire pour mon bâtiment ?",
        answer:
          "L'obligation dépend du type d'établissement (ERP, IGH, entrepôts) et de la surface. Nous réalisons un diagnostic réglementaire gratuit pour déterminer vos obligations.",
      },
      {
        question: "Quel délai pour une installation sprinkler ?",
        answer:
          "Comptez 4 à 12 semaines selon la surface et la complexité, après validation de l'étude et des plans.",
      },
    ],
    imageKey: "sprinkler",
    relatedSlugs: ["maintenance-sprinkler", "etude-conception", "mise-en-conformite-apsad"],
  },
  {
    slug: "ria",
    title: "RIA",
    h1: "Installation RIA — Robinet Incendie Armé",
    metaTitle: "Installation RIA Île-de-France",
    metaDescription:
      "Installateur RIA agréé APSAD en IDF. Réseaux conformes NF S 61-919, mise en conformité, dépannage et maintenance semestrielle. Devis sous 24h.",
    intro:
      "Le Robinet Incendie Armé (RIA) permet une première intervention manuelle sur un feu naissant. Paris Incendie installe, met en conformité et maintient les réseaux RIA pour industriels, tertiaires et commerces en Île-de-France.",
    sections: [
      {
        heading: "Rôle du RIA dans la sécurité incendie",
        content:
          "Le RIA complète le sprinkler en offrant aux équipes sur place un moyen d'attaque directe du feu. Il est souvent imposé par le règlement de sécurité selon la catégorie d'ERP et la configuration des locaux.",
      },
      {
        heading: "Prestations Paris Incendie",
        content:
          "Création de réseau neuf, extension, remplacement d'organes, essais de pression et maintenance semestrielle. Toute notre robinetterie est agréée et nos installations respectent la norme NF S 61-919.",
      },
    ],
    features: [
      "Installation réseaux RIA neufs",
      "Mise en conformité et extension",
      "Dépannage fuites et pannes",
      "Maintenance semestrielle APSAD",
      "Interventions d'urgence 24h/24",
    ],
    faq: [
      {
        question: "RIA ou sprinkler : que choisir ?",
        answer:
          "Les deux systèmes sont complémentaires. Le sprinkler agit automatiquement ; le RIA permet une intervention humaine immédiate. La réglementation peut imposer l'un, l'autre ou les deux.",
      },
    ],
    imageKey: "ria",
    relatedSlugs: ["sprinkler-spk", "depannage-sprinkler-urgence", "maintenance-sprinkler"],
  },
  {
    slug: "maintenance-sprinkler",
    title: "Maintenance sprinkler",
    h1: "Maintenance sprinkler & contrats d'entretien",
    metaTitle: "Maintenance sprinkler Paris & IDF",
    metaDescription:
      "Contrats de maintenance sprinkler et RIA en Île-de-France. Vérifications semestrielles APSAD, dépannage et astreinte 24h/24. Paris Incendie.",
    intro:
      "Un système sprinkler non entretenu peut défaillir au moment critique. Paris Incendie propose des contrats de maintenance préventive et corrective pour garantir la fiabilité de vos installations SPK et RIA sur l'ensemble de l'Île-de-France.",
    sections: [
      {
        heading: "Obligations de maintenance",
        content:
          "La norme NF EN 12845 et les règles APSAD imposent des vérifications semestrielles par un installateur agréé : contrôle des vannes, essais de débit, test des alarmes et rapport de conformité.",
      },
      {
        heading: "Nos contrats sur-mesure",
        content:
          "Visites programmées, astreinte dépannage 24h/24, pièces de rechange agréées et traçabilité complète. Nous gérons la maintenance de sites uniques ou de parcs multi-sites.",
      },
    ],
    features: [
      "Vérifications semestrielles APSAD",
      "Maintenance préventive et corrective",
      "Astreinte dépannage 24h/24",
      "Rapports de vérification normatifs",
      "Contrats multi-sites",
    ],
    faq: [
      {
        question: "À quelle fréquence entretenir un sprinkler ?",
        answer: "Minimum 2 fois par an (semestriel) conformément à la NF EN 12845 et aux exigences APSAD.",
      },
    ],
    imageKey: "maintenance",
    relatedSlugs: ["depannage-sprinkler-urgence", "sprinkler-spk", "mise-en-conformite-apsad"],
  },
  {
    slug: "mise-en-conformite-apsad",
    title: "Mise en conformité APSAD",
    h1: "Mise en conformité incendie APSAD",
    metaTitle: "Mise en conformité APSAD sprinkler & RIA",
    metaDescription:
      "Audit et mise en conformité sprinkler/RIA en Île-de-France. Modernisation, extension réseau, certification APSAD. Paris Incendie — devis gratuit.",
    intro:
      "Votre installation existante ne répond plus à la réglementation ou aux exigences de votre assureur ? Paris Incendie audite, planifie et réalise les travaux de mise en conformité APSAD pour vos systèmes sprinkler et RIA.",
    sections: [
      {
        heading: "Audit et diagnostic",
        content:
          "Relevé complet de l'installation, identification des écarts réglementaires, rapport détaillé avec plan d'actions chiffré et prioritisation des travaux.",
      },
      {
        heading: "Travaux de mise en conformité",
        content:
          "Extension de réseau, remplacement de postes de contrôle, modernisation de vannes et clapets, mise à niveau des salles des pompes. Gestion de projet clé en main.",
      },
    ],
    features: [
      "Audit installations existantes",
      "Plan de mise en conformité chiffré",
      "Modernisation postes de contrôle",
      "Extension et modification réseau",
      "Certification APSAD",
    ],
    faq: [
      {
        question: "Qui peut réaliser une mise en conformité APSAD ?",
        answer: "Un installateur agréé APSAD R4 (sprinkler) ou R5 (RIA), comme Paris Incendie.",
      },
    ],
    imageKey: "conformite",
    relatedSlugs: ["sprinkler-spk", "ria", "etude-conception"],
  },
  {
    slug: "depannage-sprinkler-urgence",
    title: "Dépannage urgent",
    h1: "Dépannage sprinkler & RIA — astreinte 24h/24",
    metaTitle: "Dépannage sprinkler urgence IDF 24h/24",
    metaDescription:
      "Dépannage sprinkler et RIA en urgence — astreinte 24h/24 en Île-de-France. Fuites, alarmes, pannes vanne. Paris Incendie agréé APSAD.",
    intro:
      "Fuite sur réseau, alarme intempestive, vanne bloquée ou déclenchement accidentel : notre astreinte technique intervient 24h/24 et 7j/7 en Île-de-France pour rétablir la sécurité de vos locaux.",
    sections: [
      {
        heading: "Interventions d'urgence",
        content:
          "Diagnostic rapide, colmatage provisoire si nécessaire, réparation définitive avec pièces agréées. Rapport d'intervention transmis sous 24h pour votre assureur ou votre responsable HSE.",
      },
    ],
    features: [
      "Astreinte 24h/24, 7j/7",
      "Fuites sprinkler et RIA",
      "Pannes poste de contrôle",
      "Remise en service express",
      "Rapport d'intervention",
    ],
    faq: [
      {
        question: "Quel délai d'intervention en urgence ?",
        answer: `Appelez l'astreinte au ${siteConfig.emergencyPhone}. Nous intervenons en priorités sur l'Île-de-France selon la criticité.`,
      },
    ],
    imageKey: "sprinkler",
    relatedSlugs: ["maintenance-sprinkler", "ria", "sprinkler-spk"],
  },
  {
    slug: "etude-conception",
    title: "Étude & conception",
    h1: "Bureau d'études sprinkler & RIA",
    metaTitle: "Bureau d'études sprinkler Paris IDF",
    metaDescription:
      "Bureau d'études incendie intégré — plans sprinkler & RIA conformes NF EN et APSAD. Dimensionnement, préfabrication, suivi de projet. Paris Incendie.",
    intro:
      "Notre bureau d'études intégré dimensionne vos réseaux sprinkler et RIA en amont de la pose : calculs hydrauliques, implantation des têtes, choix des matériaux agréés et plans d'exécution pour vos bureaux de contrôle et assureurs.",
    sections: [
      {
        heading: "Livrables bureau d'études",
        content:
          "Plans d'exécution, notes de calcul, synoptiques, dossiers APSAD et assistance au contrôle final. Coordination avec architectes, bureaux d'études fluides et MOA.",
      },
    ],
    features: [
      "Calculs hydrauliques NF EN 12845",
      "Plans d'exécution et synoptiques",
      "Préfabrication réseaux",
      "Suivi de projet et DOE",
      "Assistance contrôle APSAD",
    ],
    faq: [
      {
        question: "Proposez-vous des études seules sans pose ?",
        answer: "Oui, nous réalisons des prestations d'études pour des tiers ou en amont d'un marché de travaux.",
      },
    ],
    imageKey: "etude",
    relatedSlugs: ["sprinkler-spk", "mise-en-conformite-apsad", "ria"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}

export const serviceSlugs = servicePages.map((p) => p.slug);

/** Mapping anciens IDs → URLs SEO dédiées */
export const serviceIdToSlug: Record<string, string> = {
  sprinkler: "sprinkler-spk",
  ria: "ria",
  conformite: "mise-en-conformite-apsad",
  maintenance: "maintenance-sprinkler",
  etude: "etude-conception",
  "poteaux-colonnes": "ria",
};
