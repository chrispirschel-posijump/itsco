"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// ── useInView hook ───────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    const checkInViewport = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      return rect.top < vh && rect.bottom > 0 && rect.left < vw && rect.right > 0;
    };

    // Strategy 1 — synchronous check at mount time.
    if (checkInViewport()) {
      reveal();
      return;
    }

    // Strategy 2 — IntersectionObserver for normal scroll-triggered reveals.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold }
    );
    observer.observe(el);

    // Strategy 3 — re-check after scroll restoration completes. Browsers and
    // routers can restore scroll position any time from immediately after
    // commit through ~200ms post-mount, depending on the navigation type.
    const recheckTimers = [50, 200, 600].map((ms) =>
      window.setTimeout(() => {
        if (!done && checkInViewport()) reveal();
      }, ms)
    );

    // Strategy 4 — listen for scroll events directly. On back navigation in
    // some browsers, scroll restoration fires a scroll event that the observer
    // may not catch if the element ended up exactly at the threshold edge.
    const onScroll = () => {
      if (!done && checkInViewport()) reveal();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Strategy 5 — pageshow handles bfcache restoration (Safari/Firefox)
    // where the entire page state is preserved without remounting components.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted && checkInViewport()) reveal();
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      observer.disconnect();
      recheckTimers.forEach(window.clearTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [threshold]);

  return { ref, visible };
}

// ── FadeUp — fades in and slides up when scrolled into view ──────────────────

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── StaggerChildren — staggers FadeUp on each child ──────────────────────────

export function StaggerChildren({
  children,
  stagger = 60,
  className = "",
}: {
  children: ReactNode[];
  stagger?: number;
  className?: string;
}) {
  const { ref, visible } = useInView(0.05);

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className="h-full"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.5s ease-out ${i * stagger}ms, transform 0.5s ease-out ${i * stagger}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// ── CountUp — animates a number from 0 to target ────────────────────────────

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, visible } = useInView(0.3);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, duration]);

  // Format: show decimal if value has one, otherwise integer
  const formatted = value % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
