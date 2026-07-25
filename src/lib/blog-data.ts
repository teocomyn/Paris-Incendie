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
  {
    slug: "cout-installation-sprinkler-entrepot",
    title: "Coût installation sprinkler entrepôt 5000 m² : guide 2026",
    excerpt:
      "Fourchettes de prix, facteurs de coût et postes budgétaires pour équiper un entrepôt logistique en sprinkler conforme NF EN 12845.",
    date: "2026-04-01",
    readTime: "9 min",
    category: "Guide",
    image: blogImages[2],
    content: `
## Quels facteurs influencent le coût ?

Surface, hauteur sous plafond, type de stockage (haut-risque ou non), présence d'une salle des pompes, compartimentage et niveau de certification exigé (APSAD, FM Global).

## Fourchette indicative

Pour un entrepôt de 5 000 m² en IDF, comptez un investissement significativement variable selon la densité de couverture. Seule une étude sur site permet un chiffrage fiable.

## Postes de dépense

Étude d'exécution, tuyauterie et têtes sprinkler, groupe de surpression, centrale de contrôle, alarmes, essais et mise en service, puis contrat de maintenance semestriel.

## Demander un devis

Paris Incendie réalise des devis détaillés sous 24h ouvrées. Visite sur site incluse si nécessaire.
    `,
  },
  {
    slug: "sprinkler-obligatoire-erp-2026",
    title: "Sprinkler obligatoire ERP : quelles règles en 2026 ?",
    excerpt:
      "ERP, IGH, entrepôts : panorama des obligations sprinkler en vigueur et des évolutions réglementaires à connaître.",
    date: "2026-03-22",
    readTime: "11 min",
    category: "Réglementation",
    image: blogImages[3],
    content: `
## ERP et sprinkler

Selon la catégorie, la capacité d'accueil et la nature de l'activité, l'ERP peut être soumis à l'installation d'un système de sécurité incendie automatique.

## IGH et bâtiments tertiaires

Les immeubles de grande hauteur et certains bâtiments tertiaires neufs ou réhabilités doivent intégrer des solutions adaptées au compartimentage.

## Entrepôts et logistique

Les surfaces de stockage importantes sont fréquemment concernées. Un audit réglementaire préalable est indispensable.

## Accompagnement Paris Incendie

Nous réalisons le diagnostic réglementaire et proposons la solution technique conforme APSAD et NF EN 12845.
    `,
  },
  {
    slug: "sprinkler-vs-ria-differences",
    title: "Sprinkler vs RIA : quelle protection incendie choisir ?",
    excerpt:
      "Comparatif sprinkler automatique et RIA : fonctionnement, coûts, obligations et complémentarité pour votre bâtiment.",
    date: "2026-03-18",
    readTime: "8 min",
    category: "Guide",
    image: blogImages[4],
    content: `
## Sprinkler : extinction automatique

Réseau sous pression, déclenchement thermique tête par tête, extinction localisée. Idéal pour limiter les dégâts et agir sans intervention humaine.

## RIA : première intervention manuelle

Le Robinet Incendie Armé permet à du personnel formé d'attaquer un feu naissant. Obligatoire dans de nombreux ERP.

## Faut-il choisir l'un ou l'autre ?

Souvent les deux systèmes coexistent. Le sprinkler protège en automatique ; le RIA complète pour l'intervention humaine immédiate.

## Notre recommandation

Faites auditer votre bâtiment par un installateur agréé APSAD pour définir la solution adaptée à votre activité et à votre assureur.
    `,
  },
  {
    slug: "certification-apsad-r4-garanties",
    title: "Certification APSAD R4 : ce que ça garantit",
    excerpt:
      "Installateur agréé APSAD R4 : compétences, contrôles, traçabilité et avantages pour vos projets sprinkler.",
    date: "2026-03-10",
    readTime: "7 min",
    category: "Réglementation",
    image: blogImages[5],
    content: `
## Qu'est-ce que l'APSAD ?

Assemblée Plénière des Sociétés d'Assurances Dommages, elle certifie les installateurs et contrôle la qualité des installations.

## La certification R4

Elle couvre les installateurs sprinkler. Elle garantit que l'entreprise respecte des exigences strictes de compétence et de traçabilité.

## Avantages pour le maître d'ouvrage

Installations reconnues par les assureurs, rapports de conformité, maintenance encadrée et recours à des matériaux agréés.

## Paris Incendie agréé APSAD

Nous sommes installateur agréé APSAD R4 et R5 (RIA) en Île-de-France depuis 2012.
    `,
  },
  {
    slug: "maintenance-sprinkler-obligations-legales",
    title: "Maintenance sprinkler : fréquence et obligations légales",
    excerpt:
      "Visites semestrielles, registre de sécurité, responsabilités employeur : tout savoir sur l'entretien sprinkler.",
    date: "2026-02-28",
    readTime: "9 min",
    category: "Maintenance",
    image: blogImages[6],
    content: `
## Obligation d'entretien

Un système sprinkler doit être maintenu en état de fonctionnement permanent. L'employeur reste responsable de la sécurité des occupants.

## Fréquence semestrielle

La norme NF EN 12845 et les règles APSAD imposent des vérifications tous les 6 mois par un installateur agréé.

## Contenu des visites

Contrôle des vannes, alarmes, pression, poste de contrôle, essais partiels et rapport de vérification.

## Contrat de maintenance Paris Incendie

Visites programmées, astreinte 24h/24, pièces agréées et traçabilité complète pour vos audits assureur et HSE.
    `,
  },
  {
    slug: "installateur-sprinkler-paris-comment-choisir",
    title: "Installateur sprinkler Paris : comment choisir ?",
    excerpt:
      "7 critères pour sélectionner un installateur sprinkler fiable à Paris et en Île-de-France.",
    date: "2026-02-15",
    readTime: "10 min",
    category: "Guide",
    image: blogImages[7],
    content: `
## 1. Agrément APSAD

Exigez la certification R4 à jour. C'est la garantie d'une installation reconnue par les assureurs.

## 2. Bureau d'études intégré

Un installateur avec bureau d'études maîtrise la chaîne complète, de la note de calcul à la pose.

## 3. Références locales

Demandez des projets similaires en IDF : entrepôts, tertiaire, commerce.

## 4. Contrat de maintenance

La maintenance semestrielle est obligatoire. Privilégiez un partenaire unique installation + SAV.

## 5. Astreinte dépannage

Une fuite ou une alarme un week-end ne peut pas attendre lundi. Vérifiez l'astreinte 24h/24.

## 6. Délais et méthode

Étude, préfabrication, pose, essais : un processus clair limite les surprises.

## 7. Devis détaillé

Un devis conforme détaille les postes, les normes applicables et les délais. Paris Incendie répond sous 24h.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
