import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article non trouvé" };
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.image }] } };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const contentHtml = post.content.trim().split("\n").map((line) => {
    if (line.startsWith("## ")) return `<h2 class="font-sans font-bold text-2xl text-white mt-10 mb-4">${line.slice(3)}</h2>`;
    if (line.trim() === "") return "";
    return `<p class="text-sm text-navy-300 leading-relaxed mb-4">${line}</p>`;
  }).join("\n");

  return (
    <>
      <article>
        <div className="relative h-[40vh] min-h-[280px]">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-navy-900/60" />
          <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-navy-200 hover:text-white mb-4 glass-pill px-4 py-2 w-fit">
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>
            <div className="flex flex-wrap gap-3 text-xs text-navy-300 mb-3">
              <span className="font-bold text-brand-400 glass-flame px-2.5 py-0.5">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(post.date).toLocaleDateString("fr-FR")}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
            </div>
            <h1 className="font-sans font-bold text-3xl md:text-4xl text-white max-w-3xl">{post.title}</h1>
          </div>
        </div>
        <div className="section-padding">
          <div className="container-custom max-w-3xl glass-panel p-8 md:p-10" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </article>
      <CTASection showImage={false} />
    </>
  );
}
