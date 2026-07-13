import { articles } from "@/lib/data";
import { notFound } from "next/navigation";
import ProseLayout from "@/components/ui/ProseLayout";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

type Params = {
  slug: string;
};

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-void pb-32">
      {/* Cinematic Hero */}
      <div className="relative w-full h-[60vh] min-h-[500px] bg-carbon flex items-end">
        {article.coverImage && (
          <Image 
            src={article.coverImage} 
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-void/20 pointer-events-none" />
        
        {/* Progressive Blur (blurry at bottom, sharp at top) */}
        <div 
          className="absolute inset-0 backdrop-blur-xl pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
            maskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)'
          }}
        />
        
        {/* Color Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-gutter pb-16">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-silver/80 hover:text-cloud transition-colors text-sm font-medium tracking-wide mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6 text-sm font-medium tracking-wider uppercase">
            <span className="text-cloud">{article.category}</span>
            <span className="text-steel">•</span>
            <span className="text-silver/80">{article.date}</span>
            <span className="text-steel">•</span>
            <span className="text-silver/80">{article.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cloud tracking-tight leading-[1.05] max-w-4xl drop-shadow-2xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="relative -mt-8 pt-20 px-gutter bg-void z-20 rounded-t-[3rem]">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xl md:text-2xl text-silver leading-relaxed font-medium mb-16 pb-16 border-b border-steel/20">
            {article.excerpt}
          </p>
          
          <ProseLayout>
            {article.content}
          </ProseLayout>
        </div>
      </div>
    </main>
  );
}
