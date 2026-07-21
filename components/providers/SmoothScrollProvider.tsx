"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, RefObject } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

/**
 * Ref to the live Lenis instance. A ref rather than state on purpose: the
 * instance is an external system that never changes identity, and consumers
 * read it inside event handlers — so nothing needs to re-render when it
 * becomes available.
 */
export function useLenis() {
  return useContext(LenisContext);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for cinematic smooth scrolling without hijacking scrollbars
    const instance = new Lenis({
      // GSAP's ticker drives the RAF loop below so that Lenis and ScrollTrigger
      // advance on the same frame — with autoRaf they run on separate loops and
      // scrubbed animations visibly lag the smoothed scroll position.
      autoRaf: false,
      duration: 1.2, // Smoothness duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-tier easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // ScrollTrigger reads the native scroll position, which Lenis animates
    // independently — without this it never sees the intermediate values.
    instance.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      // GSAP's ticker reports seconds; Lenis expects milliseconds.
      instance.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    // Lag smoothing makes GSAP skip time after a stall, which desyncs Lenis.
    gsap.ticker.lagSmoothing(0);

    lenisRef.current = instance;

    return () => {
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33); // restore GSAP's default
      instance.off("scroll", ScrollTrigger.update);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
