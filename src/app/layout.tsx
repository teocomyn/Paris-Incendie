import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { siteConfig, seoKeywords } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Installation Sprinkler & RIA, Île-de-France",
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: `${siteConfig.name} | Installation Sprinkler & RIA, Île-de-France`,
    template: `%s | ${siteConfig.name}`,
  },
  keywords: seoKeywords,
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-icon.png", sizes: "480x480", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
