import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  category: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  image?: string;
  imageAlt?: string;
  href: string;
}

export default function CaseStudyCard({
  category,
  title,
  description,
  stat,
  statLabel,
  image,
  imageAlt,
  href,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full bg-itsco-card border border-[#EBEBEB] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:scale-[0.99] relative overflow-hidden"
    >
      {/* Industry image at top */}
      {image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt ?? `${category} industry`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-7 relative">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-itsco-red origin-left scale-x-0 group-hover:scale-x-100 transition-[transform] duration-300" />

        {/* Category */}
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
          {category}
        </p>

        {/* Title */}
        <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#555] leading-relaxed flex-1 mb-6">
          {description}
        </p>

        {/* Stat (optional) */}
        {stat && (
          <div className="border-t border-[#EBEBEB] pt-4 mb-4">
            <p className="text-3xl font-extrabold text-itsco-dark leading-none tracking-tight">
              {stat}
            </p>
            {statLabel && (
              <p className="text-xs text-[#555] mt-1.5 leading-snug">{statLabel}</p>
            )}
          </div>
        )}

        {/* Read more */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-itsco-body uppercase tracking-[0.08em] group-hover:text-itsco-red transition-[color] duration-200">
          Read Case Study
          <ArrowRight
            size={12}
            className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
