import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SpotlightBlockProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  /** Which side the image lives on at desktop breakpoint. Defaults to "right". */
  side?: "left" | "right";
  cta?: { label: string; href: string };
}

/**
 * SpotlightBlock — feature highlight in a side-by-side layout.
 * Use 1–3 per page max for the most important capabilities.
 * Alternate `side` between consecutive blocks to create a Z-pattern rhythm.
 */
export default function SpotlightBlock({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  side = "right",
  cta,
}: SpotlightBlockProps) {
  const imageOrderClass = side === "left" ? "lg:order-1" : "lg:order-2";
  const textOrderClass = side === "left" ? "lg:order-2" : "lg:order-1";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
      {/* Image */}
      <div className={`order-1 ${imageOrderClass}`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </div>
      </div>

      {/* Text */}
      <div className={`order-2 ${textOrderClass}`}>
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
            {eyebrow}
          </p>
        )}
        <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-itsco-dark leading-[1.15] tracking-tight mb-5">
          {title}
        </h3>
        <p className="text-base md:text-lg text-itsco-body leading-relaxed">
          {description}
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="group inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-itsco-red uppercase tracking-[0.08em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-70 rounded-sm"
          >
            {cta.label}
            <ArrowRight
              size={14}
              className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
