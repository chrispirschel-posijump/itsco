import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicIcon from "@/components/DynamicIcon";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ slug, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-itsco-card rounded-2xl p-7 border border-[#EBEBEB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:scale-[0.98]"
    >
      {/* Icon container */}
      <div className="w-12 h-12 rounded-xl bg-[#F2F2F2] flex items-center justify-center mb-5 flex-shrink-0">
        <DynamicIcon slug={slug} size={24} className="text-[#404040]" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#555] leading-relaxed flex-1">
        {description}
      </p>

      {/* Learn more */}
      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#404040] uppercase tracking-[0.08em] group-hover:text-[#111111] transition-[color] duration-200">
        Learn more
        <ArrowRight
          size={12}
          className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
