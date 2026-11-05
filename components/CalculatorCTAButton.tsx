"use client";

import CTAButton from "@/components/CTAButton";
import { pushEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

// Link to the IT Investment Calculator that reports which placement was
// clicked (calculator_cta_click, with `placement`). Book a call stays the
// primary CTA sitewide (Nov 4 call with Mike and Zack); this is the
// secondary hero button on high-traffic pages and the main CTA on
// cost-focused blog posts.
export const CALCULATOR_HREF = "/it-investment-calculator";

export default function CalculatorCTAButton({
  placement,
  label = "Calculate Your IT Investment",
  variant = "primary",
  className = "",
}: {
  /** Where the button sits, e.g. "homepage-hero" or "blog-end". Reported to GA4. */
  placement: string;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <span
      className="inline-flex"
      onClickCapture={() =>
        pushEvent(ANALYTICS_EVENTS.calculatorCtaClick, { placement })
      }
    >
      <CTAButton
        href={CALCULATOR_HREF}
        label={label}
        variant={variant}
        className={className}
      />
    </span>
  );
}
