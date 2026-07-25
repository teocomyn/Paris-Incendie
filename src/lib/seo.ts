import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
  ogImage,
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return {
    __html: JSON.stringify(data),
  };
}
