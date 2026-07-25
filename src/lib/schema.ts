import { siteConfig, services, faq, testimonials } from "@/lib/data";

const serviceOffers = services.map((s) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Service",
    name: s.title,
    description: s.shortDescription,
    provider: { "@type": "LocalBusiness", name: siteConfig.name },
  },
}));

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    foundingDate: String(siteConfig.founded),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.sameAs,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Île-de-France",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "$$",
    foundingDate: String(siteConfig.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressRegion: "Île-de-France",
      addressCountry: "FR",
      streetAddress: siteConfig.streetAddress,
      postalCode: siteConfig.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Île-de-France",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services sécurité incendie",
      itemListElement: serviceOffers,
    },
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Installation sprinkler",
      "Robinet incendie armé",
      "Maintenance APSAD",
      "NF EN 12845",
    ],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${siteConfig.url}${item.url}` } : {}),
    })),
  };
}

export function getServiceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${siteConfig.url}/#localbusiness` },
    areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
    url: `${siteConfig.url}${path}`,
  };
}

export function getArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.svg` },
    },
    image: post.image.startsWith("http") ? post.image : `${siteConfig.url}${post.image}`,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

export function getReviewSchemas() {
  return testimonials.slice(0, 3).map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewBody: t.content,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
  }));
}
