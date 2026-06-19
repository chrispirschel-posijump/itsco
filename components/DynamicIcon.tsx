import { Cpu } from 'lucide-react'
import { iconMap } from '@/lib/iconMap'

interface DynamicIconProps {
  slug: string
  size?: number
  className?: string
}

export default function DynamicIcon({ slug, size = 32, className }: DynamicIconProps) {
  const Icon = iconMap[slug] ?? Cpu
  return <Icon size={size} className={className} />
}
