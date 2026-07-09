"use client";

import { useEffect, useRef } from "react";

export default function AmbientMouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  
  // Track raw target coordinates and smoothed current coordinates
  // Start far offscreen so it doesn't blink in the center on load
  const target = useRef({ x: -2000, y: -2000 });
  const current = useRef({ x: -2000, y: -2000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      // Fixed position uses clientY instead of scrollY
      target.current.y = e.clientY; 
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      // Ultra-smooth lerp (linear interpolation) for that heavy, premium trailing feel
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;

      if (glowRef.current) {
        // Use transform for hardware-accelerated, zero-lag rendering
        glowRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes precisionRipple {
            0% { transform: scale(0.1); opacity: 0.8; border-width: 1px; }
            100% { transform: scale(1); opacity: 0; border-width: 0px; }
          }
          @keyframes precisionPulse {
            0% { transform: scale(0.98); opacity: 0.3; }
            50% { transform: scale(1.02); opacity: 0.6; }
            100% { transform: scale(0.98); opacity: 0.3; }
          }
        `}
      </style>
      <div className="fixed inset-0 z-[50] overflow-hidden pointer-events-none mix-blend-multiply dark:mix-blend-screen">
        {/* Hardware-accelerated tracking container */}
        <div 
          ref={glowRef}
          className="absolute top-0 left-0 w-[120px] h-[120px] -mt-[60px] -ml-[60px] pointer-events-none flex items-center justify-center"
        >
          {/* Center Precision Dot */}
          <div className="absolute w-[3px] h-[3px] rounded-full bg-cloud/80" />

          {/* Sharp, unblurred nested static rings for architectural precision */}
          <div className="absolute w-[20%] h-[20%] rounded-full border border-cloud/40" style={{ animation: "precisionPulse 3s ease-in-out infinite" }} />
          <div className="absolute w-[50%] h-[50%] rounded-full border border-cloud/20" style={{ animation: "precisionPulse 3s ease-in-out infinite 0.5s" }} />
          <div className="absolute w-[80%] h-[80%] rounded-full border border-cloud/10" style={{ animation: "precisionPulse 3s ease-in-out infinite 1s" }} />

          {/* A single sharp ripple that fires outwards periodically to make it feel alive */}
          <div 
            className="absolute w-full h-full rounded-full border border-cloud"
            style={{ animation: "precisionRipple 4s cubic-bezier(0.1, 0, 0.3, 1) infinite" }}
          />
        </div>
      </div>
    </>
  );
}
