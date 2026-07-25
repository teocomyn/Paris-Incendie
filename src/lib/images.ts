/**
 * Bibliothèque d'images, 30 photos réelles Paris Incendie.
 */
const p = (name: string) => `/images/${name}`;

/** Toutes les photos réelles, 30 images */
export const allRealPhotos = [
  p("sprinkler-action.png"),
  p("sprinkler-head-closeup.png"),
  p("sprinkler-alarm-system.png"),
  p("pump-room-wide.png"),
  p("pump-room.png"),
  p("ria-cabinet.png"),
  p("ria-schema.png"),
  p("installation-01.png"),
  p("installation-02.png"),
  p("installation-03.png"),
  p("installation-04.png"),
  p("installation-05.png"),
  p("installation-06.png"),
  p("installation-07.png"),
  p("installation-08.png"),
  p("installation-09.png"),
  p("installation-10.png"),
  p("chantier-01.png"),
  p("chantier-02.png"),
  p("chantier-03.png"),
  p("reseau-01.png"),
  p("reseau-02.png"),
  p("reseau-03.png"),
  p("reseau-04.png"),
  p("reseau-05.png"),
  p("reseau-06.png"),
  p("reseau-07.png"),
  p("reseau-08.png"),
  p("reseau-09.png"),
  p("reseau-10.png"),
] as const;

export type GalleryCategory = "sprinkler" | "ria" | "pompes" | "chantier" | "reseau";

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  sprinkler: "Sprinkler",
  ria: "RIA",
  pompes: "Pompes",
  chantier: "Chantier",
  reseau: "Réseau",
};

const galleryCategories: GalleryCategory[] = [
  "sprinkler", "sprinkler", "sprinkler",
  "pompes", "pompes",
  "ria", "ria",
  "sprinkler", "sprinkler", "sprinkler", "sprinkler", "sprinkler",
  "sprinkler", "sprinkler", "sprinkler", "sprinkler", "sprinkler",
  "chantier", "chantier", "chantier",
  "reseau", "reseau", "reseau", "reseau", "reseau",
  "reseau", "reseau", "reseau", "reseau", "reseau",
];

export const galleryCaptions = [
  "Déclenchement sprinkler, extinction automatique",
  "Tête sprinkler laiton, détection thermique",
  "Poste d'alarme sprinkler, réseau sous pression",
  "Salle des pompes, groupe surpresseur",
  "Centrale de pompage, installation conforme NF EN",
  "Armoire RIA, robinet incendie armé",
  "Schéma réseau RIA, implantation conforme",
  "Réseau sprinkler, tuyauterie rouge",
  "Tête sprinkler en plafond, installation",
  "Extincteur, maintenance préventive",
  "Tête sprinkler, ampoule thermique",
  "Sprinkler laiton, gicleur automatique",
  "Poteau incendie, colonne sèche",
  "Réseau extérieur, vannes et manomètres",
  "Armoire incendie, équipement RIA",
  "Sprinkler avec reflet, signalétique FEU",
  "Poteau incendie, installation extérieure",
  "Chantier, percements compartimentage",
  "Chantier, locaux techniques béton",
  "Chantier, réseau en cours de pose",
  "Local technique, vannes bleues sur dalle",
  "Réseau eau de ville, tuyauterie rouge",
  "Salle pompes, centrale de contrôle",
  "Parking, sprinklers en plafond",
  "Compartimentage, passages de réseau",
  "Poste de contrôle, armoire électrique",
  "Réseau RIA, tuyauterie rouge et bleue",
  "Vannes et manomètres, essais hydrauliques",
  "Installation extérieure, colonnes montantes",
  "Local pompes, réseau complet NF EN",
] as const;

export const galleryItems = allRealPhotos.map((src, i) => ({
  src,
  alt: galleryCaptions[i] ?? `Installation ${i + 1}`,
  caption: galleryCaptions[i] ?? `Installation ${i + 1}`,
  category: galleryCategories[i] ?? "sprinkler",
}));

/** Accès nommés aux photos clés */
export const realPhotos = {
  sprinklerAction: allRealPhotos[0],
  sprinklerHead: allRealPhotos[1],
  sprinklerAlarm: allRealPhotos[2],
  pumpRoomWide: allRealPhotos[3],
  pumpRoom: allRealPhotos[4],
  riaCabinet: allRealPhotos[5],
  riaSchema: allRealPhotos[6],
} as const;

export const images = {
  hero: realPhotos.sprinklerAction,
  heroAlt: realPhotos.pumpRoomWide,
  sprinkler: realPhotos.sprinklerHead,
  sprinklerCeiling: allRealPhotos[7],
  ria: realPhotos.riaCabinet,
  fireEquipment: allRealPhotos[10],
  pipes: allRealPhotos[13],
  control: allRealPhotos[25],
  maintenance: realPhotos.pumpRoomWide,
  industrial: allRealPhotos[23],
  warehouse: allRealPhotos[23],
  construction: allRealPhotos[17],
  constructionAlt: allRealPhotos[18],
  building: allRealPhotos[23],
  buildingAlt: allRealPhotos[24],
  commercial: allRealPhotos[23],
  office: allRealPhotos[25],
  modernOffice: allRealPhotos[26],
  team: allRealPhotos[18],
  teamMeeting: allRealPhotos[19],
  teamWork: allRealPhotos[17],
  safety: allRealPhotos[10],
  project: allRealPhotos[17],
  blueprint: realPhotos.riaSchema,
  audit: allRealPhotos[25],
  intervention: realPhotos.sprinklerAction,
  workshop: allRealPhotos[20],
  gallery: allRealPhotos,
  refGallery: [
    allRealPhotos[0],
    allRealPhotos[5],
    allRealPhotos[3],
    allRealPhotos[21],
    allRealPhotos[23],
    allRealPhotos[7],
    allRealPhotos[13],
    allRealPhotos[17],
    allRealPhotos[20],
    allRealPhotos[26],
    allRealPhotos[1],
    allRealPhotos[28],
  ] as const,
} as const;

export const serviceImages: Record<string, string> = {
  sprinkler: allRealPhotos[0],
  ria: allRealPhotos[5],
  "poteaux-colonnes": allRealPhotos[12],
  conformite: allRealPhotos[25],
  maintenance: allRealPhotos[3],
  etude: allRealPhotos[6],
};

export const referenceImages = [
  allRealPhotos[3],
  allRealPhotos[4],
  allRealPhotos[21],
  allRealPhotos[23],
  allRealPhotos[5],
  allRealPhotos[0],
] as const;

export const blogImages = allRealPhotos.slice(0, 10);

export const processImages = [
  allRealPhotos[6],
  allRealPhotos[20],
  allRealPhotos[17],
  allRealPhotos[24],
  allRealPhotos[4],
] as const;

/** Photos dédiées par section accueil, zéro doublon */
export const sectionPhotos = {
  hero: [allRealPhotos[0], allRealPhotos[1], allRealPhotos[2], allRealPhotos[3]],
  heroMobile: [allRealPhotos[1], allRealPhotos[3], allRealPhotos[5]],
  features: [allRealPhotos[7], allRealPhotos[8], allRealPhotos[9], allRealPhotos[4]],
  faq: allRealPhotos[10],
  testimonials: [allRealPhotos[21], allRealPhotos[22], allRealPhotos[23], allRealPhotos[24], allRealPhotos[25]],
  values: [allRealPhotos[11], allRealPhotos[12], allRealPhotos[13], allRealPhotos[14]],
} as const;
