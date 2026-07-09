"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionSwoopProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

export function SectionSwoop({ children, className = "", id, fullHeight = true }: SectionSwoopProps) {
  return (
    <motion.section
      id={id}
      // Remove snap-start since we are using Lenis for smooth scrolling
      className={`${fullHeight ? 'min-h-screen flex items-center justify-center' : 'w-full flex flex-col'} relative ${className}`}
      
      // The massive Apple-style swoop up and scale
      initial={{ 
        y: "20vh", // Start 20% down the screen
        opacity: 0,
        scale: 0.95 // Start slightly pushed back
      }}
      whileInView={{ 
        y: 0,
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true, margin: "-10%" }} // Trigger when 10% into view
      
      // Powerful buttery spring
      transition={{ 
        type: "spring",
        stiffness: 40,
        damping: 15,
        mass: 1,
        restDelta: 0.001
      }}
    >
      <div className="w-full">
        {children}
      </div>
    </motion.section>
  );
}
