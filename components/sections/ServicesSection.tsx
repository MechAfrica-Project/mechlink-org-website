"use client";

import { motion } from "framer-motion";
import { Code2, Paintbrush, Cloud, BarChart, Layers, Smartphone, ArrowUpRight } from "lucide-react";
import { AnimatedSectionBadge } from "../ui/AnimatedSectionBadge";

const services = [
  {
    id: "01",
    title: "Web App Development",
    desc: "Robust platforms deployed in weeks, not months. We remove the technical risk so you can go to market faster.",
    icon: Code2,
  },
  {
    id: "02",
    title: "UI/UX Design",
    desc: "Precision-engineered UI that prioritizes cognitive ease and strategic user flows. We design screens that remove doubt and make adoption effortless.",
    icon: Paintbrush,
  },
  {
    id: "03",
    title: "Cloud Infrastructure",
    desc: "Automated deployment pipelines that handle real-world constraints — intermittent connectivity, offline-first sync, and scale under pressure.",
    icon: Cloud,
  },
  {
    id: "04",
    title: "Data & AI Integration",
    desc: "Transform raw data into clear, actionable decisions. We build dashboards and AI-assisted tooling that remove guesswork.",
    icon: BarChart,
  },
  {
    id: "05",
    title: "SaaS Product Development",
    desc: "End-to-end product engineering from MVP to enterprise scale, built with the same discipline that powers MechAfrica.",
    icon: Layers,
  },
  {
    id: "06",
    title: "Mobile & USSD Development",
    desc: "Native, cross-platform, and USSD-based apps that meet users where they are — smartphone or feature phone.",
    icon: Smartphone,
  },
];

export default function ServicesSection() {
  const animProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: (delay: number) => ({
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
      delay,
    }),
  };

  return (
    <section className="relative bg-carbon overflow-hidden" id="services">
      
      {/* Header Split Layout */}
      <div className="max-w-max-width mx-auto px-gutter w-full z-10 relative pt-12 md:pt-16 lg:pt-20 xl:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-start mb-8 md:mb-12 lg:mb-16 xl:mb-24">
          
          {/* Left Column: Number & Badge */}
          <AnimatedSectionBadge number="02" title="Services" className="lg:col-span-4" />

          {/* Right Column: Title and Subtitle */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-8 2xl:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-cloud font-black tracking-tight leading-none">
              We build custom software, under contract
            </h2>
            <p className="text-lg text-silver max-w-[600px] leading-relaxed">
              MechLink designs and delivers technology for businesses and organizations that need
              software built right — bringing the same engineering, AI, and product discipline behind MechAfrica.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-max-width mx-auto px-gutter w-full z-10 relative pb-12 md:pb-16 lg:pb-20 xl:pb-32">
        {/* Services Grid (Studiova bordered grid style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-steel/40">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              className="p-8 lg:p-12 border-r border-b border-steel/40 bg-carbon hover:bg-ash/5 transition-colors duration-500 group relative cursor-pointer overflow-hidden"
              initial={animProps.initial}
              whileInView={animProps.whileInView}
              viewport={animProps.viewport}
              whileTap={{ scale: 0.98 }}
              transition={animProps.transition(0.1 + (idx * 0.1))}
            >
              {/* Subtle dynamic glow background on hover */}
              <div className="absolute inset-0 bg-void group-hover:bg-ash/5 transition-colors duration-500 pointer-events-none" />

              {/* Studiova style top-right arrow */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-steel flex items-center justify-center text-silver group-hover:bg-accent-primary group-hover:text-void group-hover:border-accent-primary transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[0_0_20px_var(--accent-glow)] z-20">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col gap-8 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-graphite border border-white/5 flex items-center justify-center transition-all duration-500 text-cloud group-hover:border-ash/5 group-hover:text-accent-primary group-hover:shadow-[0_0_30px_var(--accent-glow)]/10">
                  <service.icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-cloud transition-colors duration-300">{service.title}</h3>
                  <p className="text-silver/80 leading-relaxed transition-colors duration-300 group-hover:text-cloud/90">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
