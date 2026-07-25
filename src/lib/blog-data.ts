import { blogImages } from "@/lib/images";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "10-conseils-prevenir-risques-incendie",
    title: "10 conseils pour prévenir les risques d'incendie dans votre entreprise",
    excerpt:
      "Découvrez les bonnes pratiques essentielles pour protéger vos locaux et vos collaborateurs contre les risques d'incendie.",
    date: "2026-03-15",
    readTime: "8 min",
    category: "Prévention",
    image: blogImages[0],
    content: `
## Introduction

La prévention incendie est une responsabilité partagée entre l'employeur, les responsables HSE et l'ensemble du personnel. Voici 10 conseils essentiels pour réduire les risques dans votre entreprise.

## 1. Effectuer une analyse des risques

Identifiez les zones à risque : stockage de matières inflammables, zones électriques, cuisines professionnelles. Documentez chaque risque et mettez en place des mesures de mitigation.

## 2. Maintenir vos équipements de protection

Un système sprinkler ou RIA non entretenu est un système qui peut défaillir au moment critique. Planifiez des vérifications semestrielles conformes aux normes APSAD.

## 3. Former vos équipes

Organisez des exercices d'évacuation réguliers et formez vos employés à l'utilisation des extincteurs et des RIA.

## 4. Contrôler les installations électriques

Les départs de feu d'origine électrique représentent une part significative des incendies en entreprise. Faites vérifier vos installations par un professionnel qualifié.

## 5. Gérer les déchets inflammables

Évacuez régulièrement les cartons, papiers et déchets combustibles. Ne stockez jamais de matériaux inflammables dans les couloirs d'évacuation.

## 6. Interdire le tabac dans les zones sensibles

Mettez en place une politique stricte de non-fumée et des zones fumeurs sécurisées loin des matériaux combustibles.

## 7. Vérifier vos issues de secours

Les portes de secours doivent rester dégagées et fonctionnelles en permanence. Vérifiez les signalisations et l'éclairage de sécurité.

## 8. Documenter vos procédures

Rédigez un plan d'évacuation à jour, affichez-le visiblement et communiquez-le à tous les nouveaux arrivants.

## 9. Investir dans la détection précoce

Des détecteurs de fumée et de chaleur bien positionnés permettent une intervention rapide avant propagation.

## 10. Faire appel à des experts certifiés

Pour l'installation et la maintenance de vos systèmes SPK et RIA, choisissez un prestataire certifié APSAD comme Paris Incendie.

## Conclusion

La prévention est toujours moins coûteuse que la réparation. Contactez Paris Incendie pour un audit de vos installations.
    `,
  },
  {
    slug: "choisir-systeme-protection-incendie",
    title: "Comment choisir le système de protection incendie adapté à votre entreprise ?",
    excerpt:
      "Sprinkler, RIA, détection : guide complet pour sélectionner la solution anti-incendie idéale selon votre activité.",
    date: "2026-03-08",
    readTime: "10 min",
    category: "Guide",
    image: blogImages[1],
    content: `
## Comprendre vos besoins

Le choix d'un système de protection incendie dépend de plusieurs facteurs : type d'activité, surface, hauteur du bâtiment, matériaux stockés et réglementation applicable.

## Les systèmes sprinkler (SPK)

Idéaux pour les bâtiments tertiaires, industriels et commerciaux. Activation automatique, extinction localisée, conformité NF EN et APSAD.

## Les RIA (Robinets d'Incendie Armés)

Solution de première intervention manuelle, obligatoire dans de nombreux ERP et locaux professionnels. Complémentaire au sprinkler.

## La détection incendie

Système d'alerte précoce indispensable pour l'évacuation. À coupler avec les systèmes d'extinction fixes.

## Faire le bon choix

Paris Incendie réalise une étude personnalisée de vos risques pour vous recommander la solution optimale.
    `,
  },
  {
    slug: "normes-securite-incendie",
    title: "Les normes de sécurité incendie : ce que vous devez savoir",
    excerpt:
      "NF EN, APSAD, NFPA : décryptage des référentiels réglementaires en sécurité incendie en France.",
    date: "2026-02-28",
    readTime: "12 min",
    category: "Réglementation",
    image: blogImages[5],
    content: `
## Le cadre réglementaire français

La sécurité incendie en France est encadrée par le Code de la construction et de l'habitation, le règlement de sécurité ERP et les normes NF EN.

## La certification APSAD

L'APSAD (Assemblée Plénière des Sociétés d'Assurances Dommages) certifie les entreprises et les installations pour garantir leur conformité et leur fiabilité.

## Les normes NF EN

Les normes européennes NF EN 12845 (sprinkler) et NF S 61-919 (RIA) définissent les exigences techniques pour les installations fixes.

## Vos obligations

En tant qu'exploitant, vous devez maintenir vos installations en état de fonctionnement et effectuer les vérifications périodiques obligatoires.

## Paris Incendie, votre partenaire conformité

Notre certification APSAD garantit que toutes nos installations respectent les référentiels en vigueur.
    `,
  },
  {
    slug: "types-detection-incendie",
    title: "Les différents types de systèmes de détection incendie : avantages et inconvénients",
    excerpt:
      "Détecteurs optiques, thermiques, ioniques : comparatif des technologies de détection incendie.",
    date: "2026-02-20",
    readTime: "9 min",
    category: "Technique",
    image: blogImages[3],
    content: `
## Détecteurs optiques de fumée

Sensibles aux particules de fumée, idéaux pour bureaux et espaces tertiaires. Risque de fausses alarmes en zones poussiéreuses.

## Détecteurs thermiques

Déclenchement par seuil de température. Adaptés aux environnements industriels et zones à fumée normale.

## Détecteurs ioniques

Très sensibles, principalement utilisés dans les locaux résidentiels. Moins courants en milieu professionnel.

## Systèmes adressables

Permettent de localiser précisément le point de départ de feu. Indispensables dans les grands bâtiments.

## Notre recommandation

Un système de détection bien conçu complète efficacement vos systèmes d'extinction sprinkler et RIA.
    `,
  },
  {
    slug: "maintenance-equipements-securite-incendie",
    title: "La maintenance des équipements de sécurité incendie : pourquoi est-ce important ?",
    excerpt:
      "Vérifications semestrielles, contrats d'entretien : tout savoir sur la maintenance obligatoire de vos installations.",
    date: "2026-02-12",
    readTime: "7 min",
    category: "Maintenance",
    image: blogImages[4],
    content: `
## Une obligation légale

La maintenance régulière de vos systèmes incendie n'est pas optionnelle : c'est une obligation réglementaire pour garantir la sécurité des occupants.

## Vérifications semestrielles

Les normes APSAD imposent des contrôles semestriels sur les systèmes sprinkler et RIA, incluant tests de pression, vérification des organes et essais de déclenchement.

## Les risques d'une maintenance négligée

Corrosion des tuyauteries, obstructions, organes défaillants : autant de causes qui peuvent rendre votre système inopérant en cas d'incendie.

## Le contrat d'entretien Paris Incendie

Nous proposons des contrats sur-mesure incluant maintenance préventive, interventions d'urgence et astreinte.
    `,
  },
  {
    slug: "spk-fonctionnement-avantages",
    title: "Les SPK (Systèmes de Protection contre les Incendies par Sprinklage) : fonctionnement et avantages",
    excerpt:
      "Comment fonctionne un système sprinkler ? Découvrez les avantages du SPK pour protéger vos bâtiments.",
    date: "2026-02-05",
    readTime: "11 min",
    category: "Technique",
    image: blogImages[2],
    content: `
## Qu'est-ce qu'un système SPK ?

Le sprinkler est un système automatique de protection incendie qui s'active automatiquement en cas de départ de feu. Il permet de déclencher une alarme incendie et d'éteindre ou contenir le foyer.

## Le principe de fonctionnement

Un réseau de tuyauteries sous pression alimente des têtes sprinkler. En cas de montée de température, le verre fusible se brise et l'eau est projetée directement sur le foyer.

## Les avantages du sprinkler

- Extinction automatique 24/7
- Limitation des dégâts (eau localisée)
- Réduction des primes d'assurance
- Conformité réglementaire
- Protection des biens et des personnes

## Paris Incendie, expert SPK

De l'étude à la maintenance, nous accompagnons vos projets sprinkler de A à Z.
    `,
  },
  {
    slug: "former-employes-securite-incendie",
    title: "Comment former vos employés aux gestes de sécurité incendie ?",
    excerpt:
      "Exercices d'évacuation, utilisation des RIA et extincteurs : guide pratique de formation incendie.",
    date: "2026-01-28",
    readTime: "8 min",
    category: "Formation",
    image: blogImages[6],
    content: `
## L'obligation de formation

L'employeur doit former ses salariés aux consignes de sécurité incendie et aux gestes de premiers secours.

## Les exercices d'évacuation

Organisez au minimum deux exercices par an. Chronométrez les évacuations et identifiez les points d'amélioration.

## Utilisation des RIA

Formez vos équipes à l'ouverture et à l'utilisation des Robinets d'Incendie Armés. Paris Incendie peut assurer cette formation sur site.

## Le rôle du guide-file et serre-file

Désignez et formez des guides et serre-files pour encadrer l'évacuation en cas d'urgence.
    `,
  },
  {
    slug: "evacuation-incendie-etapes",
    title: "L'évacuation en cas d'incendie : les étapes à suivre pour assurer la sécurité de tous",
    excerpt:
      "Plan d'évacuation, signalisation, points de rassemblement : les étapes clés d'une évacuation réussie.",
    date: "2026-01-20",
    readTime: "9 min",
    category: "Prévention",
    image: blogImages[7],
    content: `
## Avant l'incendie : la préparation

Affichez les plans d'évacuation, identifiez les issues de secours, définissez les points de rassemblement.

## Lors de l'alerte

Restez calme, alertez les autres, n'utilisez pas les ascenseurs, fermez les portes sans verrouiller.

## L'évacuation

Suivez les cheminements balisés, aidez les personnes en difficulté, rejoignez le point de rassemblement.

## Après l'évacuation

Ne réintégrez le bâtiment qu'après accord des pompiers et du responsable sécurité.
    `,
  },
  {
    slug: "ria-solution-efficace",
    title: "Les RIA (Robinets d'Incendie Armés) : une solution simple et efficace pour lutter contre les départs de feu",
    excerpt:
      "Tout savoir sur les RIA : installation, utilisation, maintenance et conformité réglementaire.",
    date: "2026-01-12",
    readTime: "10 min",
    category: "Technique",
    image: blogImages[8],
    content: `
## Qu'est-ce qu'un RIA ?

Le Robinet d'Incendie Armé est un dispositif de première intervention permettant d'attaquer un feu naissant avec un débit minimum de 100 L/min pendant 30 minutes.

## Où sont-ils obligatoires ?

Dans les ERP, locaux industriels, entrepôts et bâtiments tertiaires selon la surface et la hauteur.

## Installation et maintenance

Paris Incendie installe, met en conformité et entretient vos réseaux RIA conformément à la norme NF S 61-919.

## Dépannage et urgences

En cas de fuite ou de dysfonctionnement, notre équipe intervient rapidement pour rétablir la sécurité de vos locaux.
    `,
  },
  {
    slug: "certifications-securite-incendie",
    title: "Les certifications en sécurité incendie : comment s'assurer de la qualité des prestations de votre entreprise ?",
    excerpt:
      "APSAD, FM Global, NF EN : guide des certifications à exiger de votre prestataire sécurité incendie.",
    date: "2026-01-05",
    readTime: "8 min",
    category: "Réglementation",
    image: blogImages[9],
    content: `
## Pourquoi les certifications comptent

Une certification garantit que l'entreprise et ses installations respectent des standards de qualité reconnus par les assureurs et les autorités.

## La certification APSAD

Certification R4 pour les installateurs sprinkler, R5 pour les RIA. Paris Incendie est agréé APSAD.

## Les référentiels techniques

NF EN 12845, NFPA 13, FM Global Data Sheets : les normes que nous appliquons à chaque projet.

## Comment vérifier ?

Demandez toujours les certificats de conformité et les rapports de vérification après chaque intervention.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
