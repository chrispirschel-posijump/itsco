import * as LucideIcons from "lucide-react";
import { iconMap } from "@/lib/iconMap";

interface DynamicIconProps {
  slug: string;
  size?: number;
  className?: string;
}

export default function DynamicIcon({ slug, size = 32, className }: DynamicIconProps) {
  const iconName = iconMap[slug] ?? "Cpu";
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName]
    ?? LucideIcons.Cpu;

  return <Icon size={size} className={className} />;
}
