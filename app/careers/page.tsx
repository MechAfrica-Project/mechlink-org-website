"use client";

import PageHeader from "@/components/ui/PageHeader";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { roles } from "@/lib/data";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-void pt-20">
      <PageHeader
        eyebrow="Join the Team"
        title="Build Africa's agricultural infrastructure with us."
        subtitle="We are always looking for exceptional engineers, field operators, and mentors who are passionate about building world-class technology from the continent."
      />

      <section className="max-w-[1000px] mx-auto px-gutter w-full pb-40">

        {/* Culture Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-32">
          <div>
            <h2 className="text-3xl font-bold text-cloud tracking-tight mb-6">Our Culture</h2>
            <p className="text-silver text-lg leading-relaxed">
              We operate at the intersection of extreme technical rigor and real-world constraints — intermittent connectivity, feature phones, rural trust. We don&apos;t believe in silos; engineers spend time in the field, and Field Agents shape the product roadmap. We ship fast, but we refuse to compromise on quality.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cloud tracking-tight mb-6">How We Work</h2>
            <ul className="text-silver text-lg leading-relaxed space-y-4">
              <li className="flex gap-4">
                <span className="text-cloud font-medium">—</span>
                Products, Services, and Talent as one flywheel, not three silos.
              </li>
              <li className="flex gap-4">
                <span className="text-cloud font-medium">—</span>
                Radical transparency in code reviews and feedback.
              </li>
              <li className="flex gap-4">
                <span className="text-cloud font-medium">—</span>
                Continuous learning, mentorship, and paid R&D time.
              </li>
            </ul>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-cloud tracking-tight mb-12">Open Roles</h2>
          
          <div className="border-t border-steel/20">
            {roles.map((role, i) => (
              <Link 
                key={i}
                href={`/careers/${role.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-steel/20 hover:bg-white/[0.02] transition-colors -mx-6 px-6 rounded-2xl"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-cloud tracking-tight mb-2 group-hover:text-silver transition-colors">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium tracking-wide text-silver/60 uppercase">
                    <span>{role.department}</span>
                    <span className="hidden md:inline text-steel">•</span>
                    <span>{role.location}</span>
                    <span className="hidden md:inline text-steel">•</span>
                    <span>{role.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-cloud font-medium">
                  <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">View Role</span>
                  <div className="w-12 h-12 rounded-full border border-steel/40 flex items-center justify-center transition-all duration-300 group-hover:border-cloud group-hover:bg-cloud group-hover:text-void">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-silver text-lg mb-6">Don&apos;t see a perfect fit? We&apos;re always open to meeting great talent.</p>
            <a href="mailto:careers@mechlink.africa" className="inline-flex items-center gap-2 text-cloud font-medium hover:text-silver transition-colors">
              Email us your resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
