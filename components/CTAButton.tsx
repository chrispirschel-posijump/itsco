import { ArrowRight } from "lucide-react";

const CALENDLY_BASE =
  "https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco";

interface CTAButtonProps {
  href?: string;
  label?: string;
  variant?: "primary" | "secondary";
  utmSuffix?: string;
  className?: string;
}

export default function CTAButton({
  href,
  label = "Book a Free Consultation",
  variant = "primary",
  utmSuffix,
  className = "",
}: CTAButtonProps) {
  const resolvedHref = href
    ? href
    : utmSuffix
    ? `${CALENDLY_BASE}?utm_source=website&utm_medium=cta&utm_campaign=${utmSuffix}`
    : `${CALENDLY_BASE}?utm_source=website&utm_medium=cta`;

  const isExternal = resolvedHref.startsWith("http");

  const base =
    "group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg transition-[background-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27] active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? `${base} bg-[#CA3C27] text-white hover:bg-[#B4311E]`
      : `${base} bg-transparent text-[#CA3C27] border border-[#CA3C27] hover:bg-[#CA3C27]/10`;

  return (
    <a
      href={resolvedHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${styles} ${className}`}
    >
      {label}
      <ArrowRight
        size={16}
        className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}
