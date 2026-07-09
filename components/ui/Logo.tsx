import { Sprout } from "lucide-react";

interface LogoProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showWordmark?: boolean;
}

export function Logo({ className = "", markClassName = "", textClassName = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`inline-flex items-center justify-center rounded-lg bg-accent-primary text-void w-8 h-8 shrink-0 ${markClassName}`}>
        <Sprout className="w-[18px] h-[18px]" strokeWidth={2.25} />
      </span>
      {showWordmark && (
        <span className={`font-black tracking-tight text-cloud ${textClassName}`}>
          Mech<span className="text-accent-primary">Link</span>
        </span>
      )}
    </span>
  );
}
