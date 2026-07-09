"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BespokeRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BespokeReveal({ children, className = "", delay = 0 }: BespokeRevealProps) {
  return (
    <motion.div
      initial={{ 
        clipPath: "inset(10% 10% 10% 10%)",
        filter: "blur(10px)",
        opacity: 0,
        scale: 0.95
      }}
      whileInView={{ 
        clipPath: "inset(0% 0% 0% 0%)",
        filter: "blur(0px)",
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 10, 
        ease: [0.23, 1, 0.32, 1], // Emil Kowalski's custom easing
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
