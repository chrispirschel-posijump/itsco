"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, ArrowRight, X } from "lucide-react";
import { pushEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

// Slim, dismissible announcement strip pointing to the IT Investment
// Calculator. Rendered by Nav (which decides visibility by route) so it stacks
// above the fixed nav bar. It publishes its own height to the
// --itsco-banner-h CSS variable; Nav's fixed header reads that variable for
// its top offset, so the two never overlap and pages without the banner are
// unaffected (the variable defaults to 0).

const CALC_HREF = "/it-investment-calculator";
const DISMISS_KEY = "itsco-calc-banner-dismissed";

export default function CalculatorBanner({ show }: { show: boolean }) {
  // Assume not dismissed for the first paint so the common case has no layout
  // shift; a previously-dismissed visitor is corrected after mount.
  const [dismissed, setDismissed] = useState(false);
  const [entered, setEntered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {
      // Private mode / blocked storage: just leave it visible.
    }
  }, []);

  const visible = show && !dismissed;

  // Keep Nav's offset in sync with the strip's real height (it can wrap to two
  // lines on narrow screens, so measure rather than assume a fixed height).
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.setProperty("--itsco-banner-h", "0px");
      return;
    }
    const sync = () =>
      root.style.setProperty(
        "--itsco-banner-h",
        `${ref.current?.offsetHeight ?? 0}px`,
      );
    sync();
    // Play the enter transition on the next frame.
    const raf = requestAnimationFrame(() => setEntered(true));
    const ro = new ResizeObserver(sync);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", sync);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [visible]);

  function dismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Dismissal won't persist, but the strip still closes for this view.
    }
  }

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="region"
      aria-label="IT cost calculator"
      className={`fixed inset-x-0 top-0 z-50 bg-itsco-dark text-white shadow-[0_2px_12px_rgba(0,0,0,0.18)] transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
        entered ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-11 py-2 text-center sm:px-12 sm:py-2.5">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
          <Calculator size={16} className="shrink-0 text-itsco-red" aria-hidden="true" />
          <span className="hidden sm:inline">
            See what managed IT should cost your business.
          </span>
          <span className="sm:hidden">What should your IT cost?</span>
        </span>
        <Link
          href={CALC_HREF}
          onClick={() =>
            // Categorical context only — which page the click came from. No PII.
            pushEvent(ANALYTICS_EVENTS.calculatorBannerClick, {
              from_path: pathname ?? "",
            })
          }
          className="group inline-flex items-center gap-1.5 rounded-lg bg-itsco-red px-4 py-1.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-itsco-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
        >
          Get your estimate
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-1.5 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-white/60 transition-[color,background-color,transform] duration-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
