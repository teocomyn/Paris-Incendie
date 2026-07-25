import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="section-padding bg-warm-50 border-t border-navy-200/60">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="section-label">Blog</p>
            <h2 className="section-title">Conseils sécurité incendie</h2>
          </div>
          <Link href="/blog" className="text-link flex items-center gap-1 self-start">
            Tous les articles <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <Link href={`/blog/${featured.slug}`} className="lg:col-span-7 card group hover:shadow-lift transition-shadow">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="700px"
              />
              <span className="absolute top-4 left-4 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                {featured.category}
              </span>
            </div>
            <div className="card-body">
              <time className="text-xs text-navy-400 flex items-center gap-1 mb-2">
                <Calendar className="h-3 w-3" />
                {new Date(featured.date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
              </time>
              <h3 className="font-display text-xl text-navy-900 group-hover:text-brand-600 transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-navy-600 mt-2 line-clamp-2">{featured.excerpt}</p>
            </div>
          </Link>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {rest.slice(0, 2).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-row hover:shadow-lift transition-shadow overflow-hidden">
                <div className="relative w-32 md:w-36 shrink-0 min-h-[100px] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="144px" />
                </div>
                <div className="card-body !py-4 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">{post.category}</span>
                  <h3 className="font-semibold text-sm text-navy-900 mt-1 line-clamp-2 group-hover:text-brand-600 transition-colors">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
