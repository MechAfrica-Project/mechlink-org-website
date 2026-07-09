"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSectionBadge } from "../ui/AnimatedSectionBadge";
import { Button } from "../ui/Button";
import { useContact } from "../context/ContactContext";
import { ArrowUpRight } from "lucide-react";

export default function GetInTouchSection() {
  const { openContact } = useContact();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Headline drifts upward slightly as section scrolls past
  const headlineY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="contact" ref={sectionRef} className="relative bg-void overflow-hidden border-t border-steel/30">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04]">
        <div className="w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-accent-primary rounded-full blur-[140px]" />
      </div>

      {/* Header Split Layout */}
      <div className="max-w-max-width mx-auto px-gutter w-full z-10 relative pt-12 md:pt-16 lg:pt-20 xl:pt-32 border-b border-steel/30 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-start mb-0">
          
          <AnimatedSectionBadge number="05" title="Contact" className="lg:col-span-4" />

          <div className="lg:col-span-8 flex justify-start lg:justify-end">
            <a
              href="mailto:hello@mechlink.africa"
              className="text-[11px] uppercase tracking-[0.22em] text-silver/70 hover:text-cloud font-medium transition-colors duration-300"
            >
              hello@mechlink.africa
            </a>
          </div>
        </div>
      </div>

      {/* Main display section */}
      <div className="max-w-max-width mx-auto px-gutter py-16 md:py-24 lg:py-32 flex flex-col items-center text-center relative">

        {/* Giant parallax headline */}
        <motion.h2
          className="text-[clamp(5rem,12vw,14rem)] font-black text-cloud tracking-tighter leading-[0.88] mb-10 md:mb-14"
          style={{ y: headlineY }}
        >
          let&apos;s{" "}
          <span className="text-transparent" style={{
            WebkitTextStroke: "1px var(--accent-glow)",
          }}>
            talk
          </span>
        </motion.h2>

        {/* CTAs — pill button + text link, matching Textura's two-CTA pattern */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <Button
            onClick={openContact}
            size="lg"
            className="group shadow-[0_0_40px_rgba(250,250,250,0.08)] relative overflow-hidden"
          >
            <span className="relative z-10">Start a conversation</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 pointer-events-none" />
          </Button>

          <a
            href="mailto:hello@mechlink.africa"
            className="text-silver hover:text-cloud transition-colors duration-300 text-sm font-medium underline underline-offset-4 decoration-steel/40 hover:decoration-silver"
          >
            Or email us directly
          </a>
        </motion.div>

      </div>
    </section>
  );
}
