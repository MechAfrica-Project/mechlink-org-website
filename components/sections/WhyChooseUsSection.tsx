"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSectionBadge } from "../ui/AnimatedSectionBadge";
import Image from "next/image";
import { talentImages } from "../../lib/images";

const accordionItems = [
  {
    id: "item1",
    title: "Cohort-Based, Hands-On Training",
    content: "We train and mentor aspiring tech professionals through practical, project-based learning — not lectures. Every cohort works against real problems, not toy exercises.",
    image: talentImages.cohortTraining.src,
    imageAlt: talentImages.cohortTraining.alt,
  },
  {
    id: "item2",
    title: "Real Product, Real Client Work",
    content: "Trainees build against real MechAfrica features and real client engagements from our Services pillar — the same standards our engineering team ships to production with.",
    image: talentImages.realClientWork.src,
    imageAlt: talentImages.realClientWork.alt,
  },
  {
    id: "item3",
    title: "A Pathway Into MechLink",
    content: "The best graduates don't just get a certificate — they get an offer. Our strongest Talent program alumni go on to build on MechAfrica and MechLink client projects.",
    image: talentImages.pathwayMechlink.src,
    imageAlt: talentImages.pathwayMechlink.alt,
  },
];

export default function WhyChooseUsSection() {
  const [activeItem, setActiveItem] = useState("item1");
  const activeEntry = accordionItems.find(item => item.id === activeItem) || accordionItems[0];

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
    <section id="talent" className="relative py-12 md:py-16 lg:py-20 xl:py-32 bg-void overflow-hidden">
      <div className="max-w-max-width mx-auto px-gutter w-full z-10 relative">

        {/* Header Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-start mb-8 md:mb-12 lg:mb-16 xl:mb-24">

          <AnimatedSectionBadge number="03" title="Talent" className="lg:col-span-4" />

          <motion.div
            className="flex flex-col gap-6 lg:col-span-8 2xl:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={animProps.viewport}
            transition={animProps.transition(0.2)}
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-cloud font-black tracking-tight leading-none">
              Training the generation that builds what&apos;s next.
            </h2>
            <p className="text-lg text-silver leading-relaxed">
              MechLink trains and mentors aspiring tech professionals through practical, cohort-based learning — with the best graduates building on real MechLink products and client projects.
            </p>
          </motion.div>

        </div>

        {/* 2-Column Content Layout (Accordion + Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Accordion (Studiova Style) */}
          <motion.div 
            className="flex flex-col gap-4"
            initial={animProps.initial}
            whileInView={animProps.whileInView}
            viewport={animProps.viewport}
            transition={animProps.transition(0.3)}
          >
            {accordionItems.map((item, idx) => {
              const isActive = activeItem === item.id;
              return (
                <div 
                  key={item.id}
                  className={`border rounded-2xl overflow-hidden  transition-all duration-300 ${isActive ? 'bg-carbon border-accent-primary/30 shadow-[0_0_20px_var(--accent-glow)]/10' : 'border-steel bg-transparent hover:bg-carbon/50'}`}
                >
                  <button
                    onClick={() => setActiveItem(isActive ? "" : item.id)}
                    className="w-full flex items-center justify-between cursor-pointer p-6 lg:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cloud"
                  >
                    <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-cloud' : 'text-silver'}`}>
                      {item.title}
                    </span>
                    <ChevronDown className={`w-6 h-6 transition-all duration-300 ${isActive ? 'rotate-180 text-accent-primary drop-shadow-[0_0_8px_var(--accent-glow)]' : 'text-silver'}`} strokeWidth={2} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 lg:px-8 pb-8 text-silver leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Feature Images */}
          <motion.div 
            className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-carbon border border-white/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={animProps.viewport}
            transition={animProps.transition(0.4)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeEntry.image}
                  alt={activeEntry.imageAlt}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
            </AnimatePresence>
            {/* Ambient inner shadow/glow matching brand */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
