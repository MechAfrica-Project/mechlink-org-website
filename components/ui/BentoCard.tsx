import React from "react";

interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
}

export function BentoCard({ title, description, className = "" }: BentoCardProps) {
  return (
    <div className={`bg-graphite border border-steel rounded-2xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}>
      <h4 className="text-cloud font-medium mb-1">{title}</h4>
      <p className="text-slate text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
