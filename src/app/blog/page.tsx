import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";
import { Calendar, Clock } from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "Blog sécurité incendie, sprinkler, RIA, normes APSAD",
  description:
    "Conseils sécurité incendie, sprinkler, RIA, normes APSAD et maintenance, articles par les experts Paris Incendie.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & actualités"
        subtitle="Prévention incendie, normes, maintenance, par nos équipes."
        image={images.safety}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-brand-500 glass-pill px-2.5 py-0.5">{post.category}</span>
                    <span className="text-xs text-navy-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />{post.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-white text-sm mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-500">{post.title}</Link>
                  </h2>
                  <p className="text-xs text-navy-400 line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-navy-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-brand-500">Lire →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection showImage={false} />
    </>
  );
}
