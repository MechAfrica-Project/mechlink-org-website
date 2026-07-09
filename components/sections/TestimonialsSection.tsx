"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Boxes, Wrench, GraduationCap } from "lucide-react";
import { AnimatedSectionBadge } from "../ui/AnimatedSectionBadge";

const testimonials = [
  {
    id: 1,
    quote: "MechAfrica connects farmers with mechanization, crop care, and logistics providers through an offline-first, mobile and USSD-based platform — no smartphone or internet required.",
    name: "MechAfrica",
    role: "Product",
    icon: Boxes,
  },
  {
    id: 2,
    quote: "Trained Field Agents bridge the digital divide, handling onboarding and building localized trust directly in rural communities — the human layer beneath the platform.",
    name: "Field Agent Network",
    role: "Product",
    icon: Boxes,
  },
  {
    id: 3,
    quote: "We design and deliver custom software solutions under contract — bringing the same engineering, AI, and product discipline behind MechAfrica to organizations that need technology built right.",
    name: "MechLink",
    role: "Services",
    icon: Wrench,
  },
  {
    id: 4,
    quote: "We train and mentor aspiring tech professionals through practical, cohort-based learning programs — with the best graduates building on real MechLink products and client projects.",
    name: "MechLink",
    role: "Talent",
    icon: GraduationCap,
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.scrollWidth === container.clientWidth) return;
    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
    const index = Math.round(scrollPercentage * (testimonials.length - 1));
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const targetLeft = (container.scrollWidth - container.clientWidth) * (index / (testimonials.length - 1));
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
    <section id="testimonials" className="relative py-12 md:py-16 lg:py-20 xl:py-32 bg-carbon overflow-hidden">
      <div className="max-w-max-width mx-auto px-gutter w-full z-10 relative">
        
        {/* Header Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-start mb-8 md:mb-12 lg:mb-16 xl:mb-24">
          
          <AnimatedSectionBadge number="04" title="The Flywheel" highlight={true} className="lg:col-span-4" />

          <motion.div
            className="flex flex-col gap-6 lg:col-span-8 2xl:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={animProps.viewport}
            transition={animProps.transition(0.2)}
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] text-cloud font-black tracking-tight leading-none">
              What each pillar makes possible
            </h2>
            <p className="text-lg text-silver leading-relaxed">
              Products, Services, and Talent aren&apos;t separate businesses — each one sharpens the other two.
            </p>
          </motion.div>

        </div>

      </div>

      {/* Edge-to-edge Horizontal Scrolling Slider for Testimonials */}
      <div className="w-full relative px-gutter max-w-max-width mx-auto">
        <motion.div 
          ref={scrollRef}
          onScroll={handleScroll}
          data-lenis-prevent="true"
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 overscroll-x-contain"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={animProps.viewport}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {testimonials.map((test, idx) => (
            <div 
              key={test.id} 
              className="flex-shrink-0 w-[90vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] snap-center"
            >
              <div className="p-10 lg:p-12 border border-steel rounded-2xl bg-void flex flex-col gap-8 h-full relative group hover:-translate-y-2 transition-transform duration-500">
                
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-steel group-hover:text-accent-primary transition-all duration-500 group-hover:drop-shadow-[0_0_15px_var(--accent-glow)] group-hover:-translate-y-1" strokeWidth={2} />
                
                {/* Quote Text */}
                <p className="text-xl lg:text-2xl text-cloud leading-relaxed flex-grow">
                  &quot;{test.quote}&quot;
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-steel transition-colors duration-500 group-hover:bg-accent-primary/30"></div>

                {/* Pillar Details */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-carbon border border-steel flex items-center justify-center transition-colors duration-500 group-hover:border-accent-primary/50 group-hover:shadow-[0_0_15px_var(--accent-glow)]/10">
                    <test.icon className="w-6 h-6 text-silver transition-colors duration-500 group-hover:text-accent-primary" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-cloud font-bold">{test.name}</h4>
                    <p className="text-silver text-sm">{test.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Apple-style Bottom Paginator */}
        <div className="flex justify-center mt-2 lg:mt-4">
          <div className="flex items-center gap-2.5 bg-carbon/80 backdrop-blur-md px-5 py-3.5 rounded-full border border-white/5 shadow-2xl">
            {testimonials.map((_, i) => (
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
