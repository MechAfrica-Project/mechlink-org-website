"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { useContact } from "../context/ContactContext";
import IsometricMockupGrid from "../ui/IsometricMockupGrid";

export default function HeroSection() {
  const { openContact } = useContact();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Wordmark fades and scales away as user scrolls
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const wordmarkY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  // Content parallax — slower scroll to stay visible longer
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -30]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-void"
    >
      {/* Absolute Background Collage */}
      <div className="absolute inset-0 z-1">
        <IsometricMockupGrid />
      </div>

      {/* Mobile-only scrim: the collage sits close behind the text column below the sm
          breakpoint (it shifts right at sm+), so guarantee contrast here without touching
          the collage's tuned per-breakpoint positioning. */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-void via-void/85 to-transparent sm:hidden" />

      {/* ── HERO CONTENT ── */}
      <motion.div
        className="relative max-w-max-width mx-auto px-gutter w-full z-20"
        style={{ y: contentY }}
      >
        <div className="flex flex-col items-start text-left max-w-[760px] pt-28 pb-12">

          {/* Eyebrow */}
          <motion.span
            className="font-body text-sm text-silver uppercase tracking-[0.2em] mb-8 block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Technology Company · Ghana → Pan-Africa
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="text-[clamp(3.2rem,6.5vw,5.5rem)] text-cloud font-black tracking-tighter leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            Building Africa&apos;s{" "}
            <br className="hidden lg:block" />
            agricultural{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-cloud/80 to-slate">
              infrastructure engine.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg text-silver max-w-[520px] leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          >
            MechLink builds digital infrastructure that solves real-world problems — connecting farmers, agribusinesses, and communities to mechanization, crop care, and logistics through MechAfrica, our flagship product.
          </motion.p>

          {/* CTA Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          >
            <div className="bg-carbon border border-white/10 rounded-full p-2 pl-5 sm:pl-8 flex items-center gap-4 sm:gap-6 shadow-2xl backdrop-blur-md w-fit">
              <span className="hidden sm:inline-block text-[11px] text-silver uppercase tracking-[0.18em] font-medium">
                Products · Services · Talent
              </span>
              <Button onClick={openContact}>
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent to-silver/40"
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
