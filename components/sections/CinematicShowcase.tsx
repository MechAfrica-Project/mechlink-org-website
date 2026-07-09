"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CinematicShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  const text4Ref = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // The timeline bound to the 500vh scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // smooth scrubbing
      }
    });

    // Transform origin for the text fly-through
    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current], {
      transformOrigin: "50% 50%"
    });

    // Animate "SYSTEMS" (fly through)
    tl.to(text1Ref.current, { scale: 100, opacity: 0, ease: "power4.in", duration: 1 }, 0);
    
    // Animate "Beyond."
    tl.fromTo(text2Ref.current, { scale: 1, opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.8)
      .to(text2Ref.current, { scale: 100, opacity: 0, ease: "power4.in", duration: 1 }, 1);

    // Animate "The."
    tl.fromTo(text3Ref.current, { scale: 1, opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.8)
      .to(text3Ref.current, { scale: 100, opacity: 0, ease: "power4.in", duration: 1 }, 2);

    // Animate "Surface."
    tl.fromTo(text4Ref.current, { scale: 1, opacity: 0 }, { opacity: 1, duration: 0.2 }, 2.8)
      .to(text4Ref.current, { scale: 100, opacity: 0, ease: "power4.in", duration: 1 }, 3);

    // Fade in final copy
    tl.fromTo(copyRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: "power2.out", duration: 1 }, 4);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-void">
      {/* Sticky Container locks to the viewport for the duration of the 500vh scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* The Fly-Through Text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <h2 ref={text1Ref} className="text-[14vw] md:text-[18vw] lg:text-[20vw] font-black tracking-tighter text-cloud leading-none">
            SYSTEMS
          </h2>
        </div>

        {/* Cinematic Staggered Words */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <h3 ref={text2Ref} className="text-[12vw] md:text-[14vw] font-black tracking-tighter text-cloud leading-none opacity-0">
            Beyond.
          </h3>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <h3 ref={text3Ref} className="text-[12vw] md:text-[14vw] font-black tracking-tighter text-cloud leading-none opacity-0">
            The.
          </h3>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <h3 ref={text4Ref} className="text-[12vw] md:text-[14vw] font-black tracking-tighter text-cloud leading-none opacity-0">
            Surface.
          </h3>
        </div>

        {/* The Revealed Content */}
        <div ref={copyRef} className="relative z-20 max-w-4xl mx-auto text-center px-6 opacity-0">
          <h3 className="text-4xl md:text-7xl font-black text-cloud mb-6 tracking-tight">
            Immersion is standard.
          </h3>
          <p className="text-xl md:text-2xl text-silver font-light leading-relaxed max-w-2xl mx-auto">
            We don't just build websites. We engineer digital environments that command attention and convert users into believers.
          </p>
        </div>

      </div>
    </section>
  );
}
