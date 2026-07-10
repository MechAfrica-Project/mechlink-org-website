"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { teamMembers } from "@/lib/data";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-void pt-20">
      <PageHeader
        eyebrow="Leadership"
        title="The people behind MechLink."
        subtitle="Add a short paragraph here introducing the founding team and what brought them together to build MechLink."
      />

      <section className="max-w-[1100px] mx-auto px-gutter w-full pb-40">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.slug} className="flex flex-col items-center text-center gap-1">
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-graphite border border-steel flex items-center justify-center mb-5 shrink-0">
                {member.photo ? (
                  <Image src={member.photo} alt={member.name} fill sizes="160px" className="object-cover" />
                ) : (
                  <span className="text-2xl font-black text-accent-primary">{member.initials}</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-cloud tracking-tight">{member.name}</h3>
              <p className="text-sm font-semibold text-accent-primary mb-3">{member.title}</p>

              <p className="text-silver leading-relaxed max-w-[280px]">{member.bio}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-silver hover:text-accent-primary transition-colors mt-3"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
