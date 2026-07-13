"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatedSectionBadge } from "../ui/AnimatedSectionBadge";
import { featureImages } from "../../lib/images";

const projects = [
  {
    id: 1,
    title: "Farmer ↔ Provider Matching",
    tags: ["Mechanization", "Crop Care", "Logistics"],
    image: featureImages.farmerProviderMatching.src,
  },
  {
    id: 2,
    title: "Offline-First, USSD Access",
    tags: ["No Smartphone Required", "No Internet Required"],
    image: featureImages.offlineUssdAccess.src,
  },
  {
    id: 3,
    title: "Field Agent Network",
    tags: ["Onboarding", "Localized Trust"],
    image: featureImages.fieldAgentNetwork.src,
  },
  {
    id: 4,
    title: "Mobile Money Payments",
    tags: ["Seamless Settlement", "Real-Time Visibility"],
    image: featureImages.mobileMoneyPayments.src,
  },
];

export default function FeaturedProjectsSection({ mechafricaUrl }: { mechafricaUrl: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.scrollWidth === container.clientWidth) return;
    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
    const index = Math.round(scrollPercentage * (projects.length - 1));
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const targetLeft = (container.scrollWidth - container.clientWidth) * (index / (projects.length - 1));
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

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
    <section id="product" className="relative py-12 md:py-16 lg:py-20 xl:py-32 bg-void overflow-hidden">
      <div className="max-w-max-width mx-auto px-gutter w-full z-10 relative">

        {/* Header Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-start mb-8 md:mb-12 lg:mb-16 xl:mb-24">

          {/* Left Column: Number & Badge */}
          <AnimatedSectionBadge number="01" title="MechAfrica" className="lg:col-span-4" />

          <motion.div
            className="flex flex-col gap-6 lg:col-span-8 2xl:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={animProps.viewport}
            transition={animProps.transition(0.2)}
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-cloud font-black tracking-tight leading-none">
              The product we build and own
            </h2>
            <p className="text-lg text-silver max-w-[600px] leading-relaxed">
              MechAfrica connects farmers with mechanization, crop care, and logistics providers through
              an offline-first, mobile and USSD-based platform — starting in Ghana, scaling pan-African.
            </p>

            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-black text-cloud tracking-tight">50,000+</p>
                <p className="text-xs uppercase tracking-wide text-silver/70 mt-1">Farmers</p>
              </div>
              <div className="w-px h-10 bg-steel" />
              <div>
                <p className="text-2xl font-black text-cloud tracking-tight">1,000+</p>
                <p className="text-xs uppercase tracking-wide text-silver/70 mt-1">Providers</p>
              </div>
            </div>

            <a
              href={mechafricaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cloud font-medium hover:text-accent-primary transition-colors w-fit"
            >
              Visit MechAfrica <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Edge-to-edge Horizontal Scrolling Slider */}
      <div className="w-full relative px-gutter max-w-max-width mx-auto">
        <motion.div 
          ref={scrollRef}
          onScroll={handleScroll}
          data-lenis-prevent="true"
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 overscroll-x-contain"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={animProps.viewport}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] snap-center group cursor-pointer focus:outline-none"
              tabIndex={0}
            >
              <div className="flex flex-col gap-6 transition-transform duration-300 active:scale-[0.98]">
                
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-carbon border border-white/5">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105 group-focus:scale-105" 
                  />
                  {/* Studiova style center overlay arrow */}
                  <div className="absolute inset-0 bg-void/40 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-accent-primary text-graphite flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 group-focus:translate-y-0 transition-all duration-300 shadow-[0_0_30px_var(--accent-glow)] hover:scale-110">
                      <ArrowUpRight className="w-8 h-8" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-3 px-2">
                  <h3 className="text-2xl font-bold text-cloud transition-colors duration-300 group-hover:text-accent-primary">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full border border-steel text-silver text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:border-accent-primary/30 group-hover:text-accent-primary/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Apple-style Bottom Paginator */}
        <div className="flex justify-center mt-6 lg:mt-8">
          <div className="flex items-center gap-2.5 bg-carbon/80 backdrop-blur-md px-5 py-3.5 rounded-full border border-white/5 shadow-2xl">
            {projects.map((_, i) => (
              <button 
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeIndex === i 
                    ? "w-8 bg-cloud shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                    : "w-2 bg-steel hover:bg-silver transition-colors"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
