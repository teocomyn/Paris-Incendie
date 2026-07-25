import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getServicePage, serviceSlugs, servicePages } from "@/lib/service-pages";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return { title: "Service non trouvé" };
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();
  return <ServicePageTemplate page={page} />;
}
