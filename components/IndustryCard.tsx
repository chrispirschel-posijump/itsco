import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicIcon from "@/components/DynamicIcon";

interface IndustryCardProps {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export default function IndustryCard({ slug, title, description, href }: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-row items-start gap-4 bg-itsco-card rounded-2xl p-6 border border-[#EBEBEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:scale-[0.98]"
    >
      {/* Dark icon container */}
      <div className="w-10 h-10 rounded-lg bg-itsco-dark flex items-center justify-center flex-shrink-0 mt-0.5">
        <DynamicIcon slug={slug} size={18} className="text-white" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-itsco-dark leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#555] leading-relaxed mt-1">
          {description}
        </p>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-itsco-body uppercase tracking-[0.08em] group-hover:text-itsco-red transition-[color] duration-200">
          Learn more
          <ArrowRight
            size={11}
            className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
