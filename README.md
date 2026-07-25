# Paris Incendie — Experts en Sécurité Incendie

Site web professionnel pour Paris Incendie, entreprise spécialisée en sécurité incendie depuis 2012.

## Technologies

- **Next.js 15** — Framework React avec App Router
- **TypeScript** — Typage statique
- **Tailwind CSS** — Styles utilitaires
- **Lucide React** — Icônes

## Pages

| Page | Route |
|------|-------|
| Accueil | `/` |
| À propos | `/a-propos` |
| Services | `/services` |
| Références | `/references` |
| Blog | `/blog` |
| Contact | `/contact` |
| Devis | `/devis` |
| Carrières | `/carrieres` |
| Mentions légales | `/mentions-legales` |

## Démarrage

```bash
npm install
npm run dev
```

Le site sera accessible sur http://localhost:3000

## Build production

```bash
npm run build
npm start
```

## Personnalisation

- **Coordonnées** : `src/lib/data.ts` → `siteConfig`
- **Services** : `src/lib/data.ts` → `services`
- **Blog** : `src/lib/blog-data.ts`
- **Couleurs** : `tailwind.config.ts` → `brand` et `navy`

## SEO

- Métadonnées par page
- Sitemap automatique (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- 10 articles de blog optimisés SEO
