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
    "group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg transition-[background-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-cta active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? `${base} bg-itsco-cta text-white hover:bg-itsco-cta-hover`
      : `${base} bg-transparent text-itsco-cta border border-itsco-cta hover:bg-itsco-cta/10`;

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
