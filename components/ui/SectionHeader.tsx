import React from "react";

interface SectionHeaderProps {
  overline: string;
  title?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ overline, title, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      <span className="text-label-caps uppercase tracking-widest text-cloud">
        {overline}
      </span>
      {title && (
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] md:text-[clamp(3.5rem,7vw,6rem)] font-bold text-cloud leading-[1.05] tracking-tight max-w-4xl">
          {title}
        </h2>
      )}
    </div>
  );
}
