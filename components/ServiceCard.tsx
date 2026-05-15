import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DynamicIcon from "@/components/DynamicIcon";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  href: string;
  /** Optional banner image rendered above content. When provided, the icon is hidden. */
  image?: string;
  imageAlt?: string;
}

export default function ServiceCard({ slug, title, description, href, image, imageAlt }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-itsco-card rounded-2xl border border-[#EBEBEB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:scale-[0.98] overflow-hidden"
    >
      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-itsco-card/40 via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-col p-7 flex-1">
        {!image && (
          <div className="w-12 h-12 rounded-xl bg-[#CA3C27]/10 flex items-center justify-center mb-5 flex-shrink-0">
            <DynamicIcon slug={slug} size={24} className="text-[#CA3C27]" />
          </div>
        )}

        <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#555] leading-relaxed flex-1">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#404040] uppercase tracking-[0.08em] group-hover:text-[#111111] transition-[color] duration-200">
          Learn more
          <ArrowRight
            size={12}
            className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
