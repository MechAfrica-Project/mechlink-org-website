"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Boxes, Wrench, GraduationCap, Compass } from "lucide-react";

const pillars = [
  {
    icon: Boxes,
    label: "Products",
    description: "We build and own MechAfrica, the operating system for agricultural service infrastructure across Africa.",
  },
  {
    icon: Wrench,
    label: "Services",
    description: "Custom software delivered under contract — the same engineering, AI, and product discipline behind MechAfrica.",
  },
  {
    icon: GraduationCap,
    label: "Talent",
    description: "Practical, cohort-based training for aspiring engineers. The best graduates build on real MechLink products.",
  },
  {
    icon: Compass,
    label: "Vision",
    description: "To become Africa's agricultural infrastructure engine — shipping world-class technology from the continent.",
  },
];

function PillarCell({ icon: Icon, label, description, delay }: { icon: typeof Boxes; label: string; description: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4 p-8 md:p-10 lg:p-12 group relative border-steel/40"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {/* Hover accent line (top) */}
      <div className="absolute inset-x-0 top-0 h-px bg-cloud scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      <Icon className="w-7 h-7 text-accent-primary mb-1" strokeWidth={1.75} />
      <h3 className="text-[clamp(2rem,4vw,2.75rem)] font-black text-cloud leading-none tracking-tighter">
        {label}
      </h3>
      <p className="text-silver leading-relaxed max-w-sm">{description}</p>
    </motion.div>
  );
}

export default function StatsFactsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="vision" className="relative bg-void overflow-hidden border-y border-steel/30" ref={sectionRef}>

      {/* Header Layout */}
      <div className="max-w-max-width mx-auto px-gutter w-full z-10 relative pt-12 md:pt-16 lg:pt-20 xl:pt-32">
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-24 flex flex-col gap-6">

          {/* Title and Subtitle */}
          <motion.div
            className="flex flex-col gap-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-cloud font-black tracking-tight leading-none">
              One flywheel. Three pillars.
            </h2>
            <p className="text-lg text-silver max-w-[600px] leading-relaxed">
              Products generate real problems to solve, Services sharpen the team&apos;s craft, and Talent development grows the people who build it all.{" "}
              <span className="text-cloud font-medium">Together, they compound.</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── 2×2 GRID + CENTER DIVIDER ── */}
      <div className="max-w-max-width mx-auto px-gutter">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-steel/40 mt-8 cursor-default">
          <div className="border-b border-steel/40 md:border-r md:border-b-0">
            <PillarCell {...pillars[0]} delay={0.1} />
          </div>
          <div className="border-b border-steel/40">
            <PillarCell {...pillars[1]} delay={0.2} />
          </div>
        </div>

        {/* Center divider — just lines */}
        <div className="border-t border-steel/40"></div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-steel/40 cursor-default">
          <div className="border-b border-steel/40 md:border-r md:border-b-0">
            <PillarCell {...pillars[2]} delay={0.15} />
          </div>
          <div>
            <PillarCell {...pillars[3]} delay={0.25} />
          </div>
        </div>

      </div>

      {/* Bottom padding */}
      <div className="h-12 md:h-16 lg:h-20" />
    </section>
  );
}
