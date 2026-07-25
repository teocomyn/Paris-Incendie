import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import JsonLd from "@/components/JsonLd";
import { siteConfig, seoKeywords } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Installation Sprinkler & RIA — Île-de-France`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Installation Sprinkler & RIA`,
    description: siteConfig.description,
    images: [{ url: "/logo.svg", width: 220, height: 48, alt: siteConfig.name }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={GeistSans.variable}>
      <body className={`${GeistSans.className} font-sans antialiased`}>
        <JsonLd />
        <EmergencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
