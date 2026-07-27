import {
  Code2,
  Paintbrush,
  Cloud,
  BarChart,
  Layers,
  Smartphone,
  Boxes,
  Wrench,
  GraduationCap,
  Compass,
  Rocket,
  Cpu,
  Database,
  Globe,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the `iconName` string stored on Service / Testimonial rows to a lucide
 * icon component. Admin editors pick from ICON_NAMES; anything unknown falls
 * back to Boxes so a bad value never crashes a page.
 */
const ICONS: Record<string, LucideIcon> = {
  Code2,
  Paintbrush,
  Cloud,
  BarChart,
  Layers,
  Smartphone,
  Boxes,
  Wrench,
  GraduationCap,
  Compass,
  Rocket,
  Cpu,
  Database,
  Globe,
  ShieldCheck,
  Zap,
};

export const ICON_NAMES = Object.keys(ICONS);

export function iconFor(name: string | null | undefined): LucideIcon {
  return (name && ICONS[name]) || Boxes;
}
