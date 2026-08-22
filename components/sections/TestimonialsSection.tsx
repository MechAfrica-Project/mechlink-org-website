"use client";

import { motion } from "framer-motion";
import { AnimatedSectionBadge } from "../ui/AnimatedSectionBadge";
import { iconFor } from "../../lib/icon-map";

type Testimonial = { id: string; quote: string; name: string; role: string; iconName: string };

/**
 * Three overlapping parts, ported from the Euodia testimonial design: a narrow
 * identity panel (name + pillar), a chip that overlaps the panel's right edge —
 * carrying the pillar icon in place of a photo — and the quote sitting outside
 * the panel on the section background. Fixed widths so the marquee track
 * measures predictably.
 */
function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  const Icon = iconFor(testimonial.iconName);

  return (
    <article className="flex shrink-0 items-center">
      {/* Identity panel — the only thing the light card holds */}
      <div className="flex h-46.25 w-56 flex-none items-center rounded-3xl bg-void pl-10 shadow-[0_34px_64px_-34px_rgba(22,24,42,0.20),0_10px_26px_-16px_rgba(22,24,42,0.10)]">
        {/* Width is what the chip leaves uncovered (224 − 40 padding − 64 overlap) */}
        <div className="w-30">
          <h3 className="text-[17px] font-bold leading-tight tracking-[-0.2px] text-cloud">
            {testimonial.name}
          </h3>
          <p className="mt-1.75 text-[11px] font-light uppercase tracking-[0.12em] text-slate">
            {testimonial.role}
          </p>
          <span aria-hidden="true" className="mt-3 block h-px w-12.5 bg-steel" />
        </div>
      </div>

      {/* Icon chip overlaps the panel's right edge (in place of the photo) */}
      <div className="relative z-2 -ml-16 flex h-42.5 w-42.5 shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-white/5 bg-graphite shadow-[0_22px_44px_-22px_rgba(20,22,40,0.38)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70 [background:radial-gradient(60%_60%_at_50%_38%,var(--accent-glow)_0%,transparent_70%)]"
        />
        <Icon className="relative w-14 h-14 text-accent-primary" strokeWidth={1.5} />
      </div>

      {/* Quote sits outside the panel, on the section background */}
      <p className="ml-7.25 w-61.25 shrink-0 text-sm font-light leading-[1.72] text-slate">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </article>
  );
}

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const viewport = { once: true, margin: "-100px" } as const;
  // Two copies: the track travels exactly one copy's width (-50%), so the seam
  // lands on an identical frame and the loop reads as continuous.
  const stream = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-carbon py-12 md:py-16 lg:py-20 xl:py-32"
    >
      {/* Soft washes lifting the centre of the field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70
                   [background:radial-gradient(58%_120%_at_22%_44%,var(--color-void)_0%,transparent_62%),radial-gradient(46%_100%_at_82%_46%,var(--color-void)_0%,transparent_70%)]"
      />

      {/* Hairline pinned to the far-left edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-0.75 bg-linear-to-b from-cloud/20 via-cloud/50 to-cloud/20"
      />

      <div className="relative z-10 mx-auto w-full max-w-max-width px-gutter">
        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:mb-16 lg:mb-20 lg:grid-cols-12">
          <AnimatedSectionBadge number="04" title="The Flywheel" highlight={true} className="lg:col-span-4" />

          <motion.div
            className="flex flex-col gap-6 lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-none tracking-tight text-cloud">
              What each pillar makes possible
            </h2>
            <p className="max-w-150 text-lg leading-relaxed text-silver">
              Products, Services, and Talent aren&apos;t separate businesses — each one sharpens the other two.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Endless right-to-left stream. Hovering anywhere over it holds the run. */}
      <motion.div
        className="marquee-paused relative z-10 w-full"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      >
        {/* Vertical padding gives the panel and chip shadows room to fall */}
        <div className="animate-marquee flex w-max gap-14 py-8">
          {stream.map((testimonial, i) => (
            <TestimonialItem key={`${testimonial.id}-${i}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Feathered edges so items dissolve rather than clip at the viewport */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-carbon to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-carbon to-transparent md:w-32" />
      </motion.div>
    </section>
  );
}
