"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/data";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-void pt-20">
      <PageHeader
        eyebrow="Insights & Engineering"
        title="Building infrastructure that works offline."
        subtitle="Deep dives into offline-first architecture, product design for low-connectivity users, and the engineering principles behind MechAfrica."
      />

      <section className="max-w-max-width mx-auto px-gutter w-full pb-40">
        
        {/* Featured Article */}
        <div className="mb-20">
          <Link href={`/blog/${articles[0].slug}`} className="group block relative rounded-[2rem] overflow-hidden bg-carbon border border-white/5">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              
              {/* Image */}
              <div className="lg:w-3/5 h-[350px] lg:h-auto relative overflow-hidden bg-void">
                {articles[0].coverImage && (
                  <Image 
                    src={articles[0].coverImage} 
                    alt={articles[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                )}
                {/* Subtle overlay gradient to ensure text readability if needed, and premium depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-void/20 to-transparent pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                />
              </div>

              {/* Content */}
              <div className="lg:w-2/5 p-8 md:p-16 flex flex-col justify-center bg-carbon relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover:-translate-x-4 border-l border-white/5">
                <div className="flex items-center gap-4 mb-6 text-sm font-medium tracking-wider uppercase">
                  <span className="text-cloud">{articles[0].category}</span>
                  <span className="text-steel">•</span>
                  <span className="text-silver/60">{articles[0].date}</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-cloud tracking-tight mb-6 leading-[1.1] transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cloud group-hover:to-silver">
                  {articles[0].title}
                </h2>
                
                <p className="text-silver text-lg md:text-xl leading-relaxed mb-10">
                  {articles[0].excerpt}
                </p>

                <div className="mt-auto flex items-center gap-3 text-cloud font-medium group-hover:gap-5 transition-all duration-300">
                  Read Article
                  <div className="w-8 h-8 rounded-full border border-steel/40 flex items-center justify-center transition-colors group-hover:border-cloud group-hover:bg-cloud group-hover:text-void">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </div>

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.slice(1).map((article, index) => (
            <Link key={index} href={`/blog/${article.slug}`} className="group flex flex-col h-full">
              <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-carbon border border-white/5 mb-6 relative">
                {article.coverImage && (
                  <Image 
                    src={article.coverImage} 
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-void/40 to-transparent transition-opacity duration-700 group-hover:opacity-0" />
              </div>
              
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-3 mb-4 text-xs font-medium tracking-wider uppercase">
                  <span className="text-cloud">{article.category}</span>
                  <span className="text-steel">•</span>
                  <span className="text-silver/60">{article.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-cloud tracking-tight mb-4 leading-[1.2] transition-colors group-hover:text-silver">
                  {article.title}
                </h3>
                
                <p className="text-silver leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}
