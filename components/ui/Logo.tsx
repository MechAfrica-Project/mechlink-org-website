import Image from "next/image";

interface LogoProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showWordmark?: boolean;
}

export function Logo({ className = "", markClassName = "", textClassName = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`relative inline-block w-8 h-8 shrink-0 ${markClassName}`}>
        <Image src="/mechlink-mark.png" alt="MechLink" fill className="object-contain" priority />
      </span>
      {showWordmark && (
        <span className={`font-black tracking-tight text-cloud ${textClassName}`}>
          MechLink
        </span>
      )}
    </span>
  );
}
