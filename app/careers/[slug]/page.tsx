import { roles } from "@/lib/data";
import { notFound } from "next/navigation";
import ProseLayout from "@/components/ui/ProseLayout";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin, Building, Briefcase } from "lucide-react";

type Params = {
  slug: string;
};

export default async function CareerPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-void pt-20 pb-32">
      <div className="max-w-[1200px] mx-auto px-gutter pt-12">
        <Link 
          href="/careers" 
          className="inline-flex items-center gap-2 text-silver hover:text-cloud transition-colors text-sm font-medium tracking-wide mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </Link>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">
          
          {/* Main Content (Left Column) */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud tracking-tight leading-[1.1] mb-8">
              {role.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-16 pb-16 border-b border-steel/20">
              <div className="flex items-center gap-2 text-silver font-medium bg-carbon px-4 py-2 rounded-full border border-white/5">
                <Building className="w-4 h-4 text-cloud" />
                {role.department}
              </div>
              <div className="flex items-center gap-2 text-silver font-medium bg-carbon px-4 py-2 rounded-full border border-white/5">
                <MapPin className="w-4 h-4 text-cloud" />
                {role.location}
              </div>
              <div className="flex items-center gap-2 text-silver font-medium bg-carbon px-4 py-2 rounded-full border border-white/5">
                <Briefcase className="w-4 h-4 text-cloud" />
                {role.type}
              </div>
            </div>

            <ProseLayout className="max-w-none">
              {role.description}
            </ProseLayout>
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <div className="relative">
            <div className="sticky top-32 bg-carbon/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-bold text-cloud tracking-tight mb-4">Apply for this role</h3>
              <p className="text-silver mb-8 leading-relaxed">
                We are always looking for exceptional talent. If you think you&apos;re a fit, we&apos;d love to hear from you.
              </p>
              
              <a 
                href={`mailto:careers@mechlink.africa?subject=Application: ${role.title}`} 
                className="group flex items-center justify-center gap-3 bg-cloud text-void px-8 py-4 rounded-full font-medium hover:bg-silver transition-all duration-300 w-full"
              >
                Apply via Email
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="mt-8 pt-8 border-t border-steel/20">
                <p className="text-sm text-silver/60 leading-relaxed">
                  By applying, you consent to our <Link href="/privacy" className="underline hover:text-cloud transition-colors">Privacy Policy</Link> regarding the processing of your personal data.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
