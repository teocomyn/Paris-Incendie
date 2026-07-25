import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import { serviceSlugs } from "@/lib/service-pages";
import { geoPages } from "@/lib/geo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/devis", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/references", priority: 0.8, changeFrequency: "monthly" },
    { path: "/a-propos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/carrieres", priority: 0.5, changeFrequency: "monthly" },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
    { path: "/politique-confidentialite", priority: 0.2, changeFrequency: "yearly" },
  ];

  const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const serviceEntries = serviceSlugs.map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const geoEntries = geoPages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...serviceEntries, ...geoEntries, ...blogEntries];
}
