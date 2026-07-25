export const siteConfig = {
  name: "Paris Incendie",
  description:
    "Installation et maintenance sprinkler & RIA en Île-de-France. Agréé APSAD depuis 2012.",
  url: "https://www.parisincendie.fr",
  phone: "01 84 80 00 00",
  emergencyPhone: "06 00 00 00 00",
  email: "contact@parisincendie.fr",
  address: "Île-de-France, France",
  founded: 2012,
  siret: "[Numéro SIREN]",
};

export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Références", href: "/references" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "sprinkler",
    title: "Sprinkler (SPK)",
    shortDescription:
      "Systèmes automatiques de protection incendie à déclenchement automatique.",
    description:
      "Les installations sprinkler sont des équipements d'extinction fixes à déclenchement automatique constitués d'un réseau de tuyauteries disposées sous toiture ou sous plafond maintenu sous pression.",
    features: [
      "Études d'exécution (FM Global, NF EN, NFPA, APSAD)",
      "Préfabrication et assemblage des réseaux",
      "Fourniture de matériaux agréés",
      "Montage par équipes formées et habilitées",
      "Essais et mise en service",
    ],
    icon: "droplets",
  },
  {
    id: "ria",
    title: "Robinet Incendie Armé (RIA)",
    shortDescription:
      "Dispositif de première intervention pour attaquer un feu naissant.",
    description:
      "Dispositif de première intervention, permettant d'attaquer un feu naissant avant son extension, en attendant l'arrivée des sapeurs-pompiers.",
    features: [
      "Installation de réseaux RIA conformes",
      "Mise en conformité du réseau RIA",
      "Dépannage et réparation de fuites",
      "Maintenance semestrielle",
      "Interventions d'urgence",
    ],
    icon: "fire-extinguisher",
  },
  {
    id: "poteaux-colonnes",
    title: "Poteaux Incendie & Colonnes Sèches",
    shortDescription:
      "Extinction précoce et maintien de la concentration d'agent extincteur.",
    description:
      "A pour rôle d'éteindre un incendie à un stade précoce de son développement et de maintenir la concentration d'agent extincteur nécessaire pour éliminer tout risque de ré-inflammation.",
    features: [
      "Installation de poteaux incendie",
      "Colonnes sèches et humides",
      "Modification et extension de réseau",
      "Remplacement d'organes",
      "Modernisation des installations",
    ],
    icon: "columns",
  },
  {
    id: "conformite",
    title: "Mise en Conformité",
    shortDescription:
      "Étude des risques incendie et implantation des systèmes de sécurité.",
    description:
      "Paris Incendie vous propose l'étude des risques incendie et d'implantation des systèmes de sécurité incendie conformes aux réglementations en vigueur.",
    features: [
      "Audit de vos installations existantes",
      "Modification et extension de réseau",
      "Travaux de modernisation",
      "Remplacement d'organes (poste de contrôle, vanne, clapet)",
      "Gestion de projet de mise en conformité",
    ],
    icon: "shield-check",
  },
  {
    id: "maintenance",
    title: "Maintenance & SAV",
    shortDescription:
      "Entretien préventif, corrective et interventions d'urgence 24/7.",
    description:
      "Contrats d'entretien, vérifications semestrielles et interventions d'urgence pour garantir la fiabilité de vos installations anti-incendie.",
    features: [
      "Maintenance préventive et corrective",
      "Vérifications semestrielles",
      "Mise en place d'astreinte",
      "Contrats d'entretien sur-mesure",
      "Dépannage urgent sprinkler et RIA",
    ],
    icon: "wrench",
  },
  {
    id: "etude",
    title: "Étude & Conception",
    shortDescription:
      "Bureau d'études intégré pour des réseaux incendie sur-mesure.",
    description:
      "Notre bureau d'études intégré assure la conception de réseaux sprinkler et RIA adaptés à vos contraintes techniques et réglementaires.",
    features: [
      "Étude du réseau sprinkler",
      "Préfabrication du réseau",
      "Emplacement des postes sprinkler",
      "Création réseau tertiaire et commercial",
      "Suivi et encadrement de projet",
    ],
    icon: "blueprint",
  },
];

export const features = [
  "Installation de systèmes sprinkler et RIA certifiés",
  "Maintenance préventive et corrective de vos installations incendie",
  "Étude et conception de réseaux incendie sur-mesure",
  "Gestion de projet de mise en conformité incendie",
  "Contrats d'entretien et interventions d'urgence",
  "Certification et audits réguliers de vos systèmes incendie",
  "Suivi rigoureux de vos installations anti-incendie",
  "Solutions techniques adaptées aux réglementations en vigueur",
  "Assistance dans l'amélioration continue de votre sécurité incendie",
];

export const testimonials = [
  {
    name: "Nicolas Perrin",
    role: "Responsable Industriel",
    company: "Site de production — Seine-et-Marne",
    content:
      "Installation sprinkler sur 8 000 m² réalisée sans arrêt de production. Rapport APSAD conforme, équipe réactive du début à la mise en service.",
    rating: 5,
  },
  {
    name: "Laura Mercier",
    role: "Directrice de Site",
    company: "Centre commercial — Val-de-Marne",
    content:
      "Pose du réseau RIA et extension SPK en 5 semaines. L'équipe a géré les contraintes d'ouverture au public et les accès techniques.",
    rating: 5,
  },
  {
    name: "Marc Dupont",
    role: "Gérant",
    company: "PME logistique — Essonne",
    content:
      "Contrat de maintenance semestriel depuis 3 ans. Interventions rapides lors de nos 2 fuites réseau, astreinte efficace.",
    rating: 5,
  },
  {
    name: "Anne Simon",
    role: "Responsable HSE",
    company: "Groupe industriel — Île-de-France",
    content:
      "Partenaire pour la maintenance de 4 sites. Suivi rigoureux, rapports de vérification clairs, bonne connaissance des normes NF EN.",
    rating: 5,
  },
  {
    name: "Sébastien Girard",
    role: "Responsable Technique",
    company: "Immeuble tertiaire — Paris 15e",
    content:
      "Modernisation du poste de contrôle sprinkler et remplacement de vannes. Chantier propre, respect du planning annoncé.",
    rating: 5,
  },
];

export const socialProof = [
  "Recommandé par de grandes entreprises pour la sécurité incendie",
  "Des centaines de clients satisfaits à travers la France",
  "Certifié APSAD pour une sécurité sans compromis",
  "Partenaire de confiance des industriels et tertiaires",
  "Plus de 10 ans d'expérience en sécurité incendie",
];

export const faq = [
  {
    question: "Qu'est-ce que Paris Incendie ?",
    answer:
      "Paris Incendie est une entreprise spécialisée dans la sécurité incendie, fournissant des installations et des services de maintenance pour des systèmes sprinkler et RIA conformes aux normes APSAD.",
  },
  {
    question: "Quelles solutions proposez-vous ?",
    answer:
      "Nous offrons des solutions complètes en sécurité incendie : installation de sprinklers, RIA, mise en conformité, et maintenance préventive.",
  },
  {
    question: "Pourquoi choisir Paris Incendie ?",
    answer:
      "Avec plus de 10 ans d'expérience, une certification APSAD, et des équipes formées, Paris Incendie vous garantit des installations sécurisées et un service fiable.",
  },
  {
    question:
      "Est-ce que vous intervenez pour la maintenance d'installations existantes ?",
    answer:
      "Oui, nous assurons la maintenance des systèmes sprinkler et RIA, incluant la vérification, le dépannage et la mise en conformité.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous via notre formulaire en ligne ou par téléphone. Nous vous proposerons un devis détaillé et adapté à vos besoins en sécurité incendie.",
  },
  {
    question: "Vos installations sont-elles conformes aux normes ?",
    answer:
      "Absolument. Tous nos systèmes respectent les normes en vigueur (NF EN, APSAD) et bénéficient des certifications nécessaires pour une sécurité maximale.",
  },
];

export const references = [
  {
    title: "Centre Commercial — Île-de-France",
    category: "Tertiaire",
    description:
      "Installation complète d'un réseau sprinkler pour un centre commercial de 15 000 m². Conception, préfabrication et mise en service conforme NF EN.",
    services: ["Sprinkler", "RIA", "Mise en conformité"],
  },
  {
    title: "Site Industriel — Seine-et-Marne",
    category: "Industrie",
    description:
      "Modernisation du système SPK existant et extension du réseau RIA sur un site de production. Intervention sans arrêt de production.",
    services: ["Modernisation", "Extension réseau", "Maintenance"],
  },
  {
    title: "Immeuble de Bureaux — Paris",
    category: "Tertiaire",
    description:
      "Étude, installation et certification APSAD d'un système sprinkler pour un immeuble tertiaire neuf de 8 étages.",
    services: ["Étude", "Sprinkler", "Certification APSAD"],
  },
  {
    title: "Entrepôt Logistique — Val-de-Marne",
    category: "Logistique",
    description:
      "Création d'un réseau sprinkler haut-risque avec préfabrication et essais de mise en service. Contrat de maintenance semestrielle.",
    services: ["Préfabrication", "Sprinkler", "Contrat entretien"],
  },
  {
    title: "Boutique Flagship — Paris Centre",
    category: "Commerce",
    description:
      "Installation discrète de système sprinkler pour boutique de luxe. Respect des contraintes architecturales et esthétiques.",
    services: ["Sprinkler boutique", "RIA", "Dépannage"],
  },
  {
    title: "Hôpital — Région Parisienne",
    category: "Santé",
    description:
      "Maintenance corrective et préventive de 3 systèmes sprinkler et RIA. Mise en place d'astreinte 24/7.",
    services: ["Maintenance", "Astreinte", "Conformité"],
  },
];

export const values = [
  {
    title: "Excellence",
    description:
      "Des installations conformes aux normes internationales NF EN, NFPA et APSAD.",
  },
  {
    title: "Réactivité",
    description:
      "Interventions rapides et astreinte pour garantir la continuité de votre sécurité.",
  },
  {
    title: "Expertise",
    description:
      "Plus de 10 ans d'expérience et des équipes formées et habilitées.",
  },
  {
    title: "Confiance",
    description:
      "Partenaire de confiance des industriels, tertiaires et collectivités.",
  },
];

export const careers = [
  {
    title: "Technicien Sprinkler H/F",
    type: "CDI",
    location: "Île-de-France",
    description:
      "Installation et maintenance de systèmes sprinkler. Habilitation souhaitée. Expérience en sécurité incendie appréciée.",
  },
  {
    title: "Chef de Projet Sécurité Incendie H/F",
    type: "CDI",
    location: "Île-de-France",
    description:
      "Pilotage de projets SPK et RIA de A à Z. Connaissance des normes APSAD et NF EN indispensable.",
  },
  {
    title: "Technicien RIA H/F",
    type: "CDD / Intérim",
    location: "Île-de-France",
    description:
      "Interventions de maintenance et dépannage sur réseaux RIA. Permis B obligatoire.",
  },
];

export const seoKeywords = [
  "Sécurité incendie",
  "Systèmes de protection incendie",
  "Sprinkler",
  "RIA",
  "SPK",
  "Maintenance sprinkler",
  "Mise en conformité incendie",
  "Installation sprinkler Paris",
  "Dépannage sprinkler",
  "Certification APSAD",
];
