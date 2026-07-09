import React from "react";
import Image from "next/image";

interface DeviceMockupProps {
  type?: "mobile" | "desktop";
  src: string;
  alt: string;
  className?: string;
}

export function DeviceMockup({ type = "desktop", src, alt, className = "" }: DeviceMockupProps) {
  return (
    <div className={`relative group w-full flex items-center justify-center ${className}`}>
      <div 
        className={`device-3d bg-carbon border-8 border-steel overflow-hidden w-full relative z-10 
          ${type === 'desktop' ? 'max-w-2xl aspect-[16/10] rounded-3xl' : 'max-w-xs aspect-[9/19.5] rounded-[3rem] border-[12px]'}
        `}
      >
        <Image
          alt={alt}
          src={src}
          width={1200}
          height={800}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
        />
      </div>
      {/* The Signal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-[rgba(var(--accent-primary-rgb),0.12)] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
    </div>
  );
}
