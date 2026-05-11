"use client";

import { useEffect, useState } from "react";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

interface TestimonialsRotatorProps {
  testimonials: Testimonial[];
  visible?: number;
  intervalMs?: number;
}

export default function TestimonialsRotator({
  testimonials,
  visible = 3,
  intervalMs = 9000,
}: TestimonialsRotatorProps) {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const pages = Math.max(1, Math.ceil(testimonials.length / visible));

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % pages);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, pages, intervalMs]);

  // Precompute every page's items so each page is rendered into a CSS grid cell
  // that all pages share — the container reserves the tallest page's height and
  // no longer reflows when the active page changes.
  const allPages: Testimonial[][] = Array.from({ length: pages }, (_, p) => {
    const start = p * visible;
    return Array.from({ length: visible }, (_, i) =>
      testimonials[(start + i) % testimonials.length]
    );
  });

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div style={{ display: "grid", gridTemplateAreas: '"stack"' }}>
        {allPages.map((items, p) => {
          const active = p === page;
          return (
            <div
              key={p}
              aria-hidden={!active}
              style={{ gridArea: "stack" }}
              className={`grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 transition-opacity duration-500 ease-out ${
                active ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {items.map((t, i) => (
                <figure key={`${p}-${i}-${t.name}`} className="flex flex-col">
                  <div className="w-8 h-[3px] bg-[#CA3C27] mb-6" />
                  <blockquote className="text-base md:text-lg text-[#111111] leading-[1.6] font-medium mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm text-[#888] leading-snug">
                    <span className="block font-semibold text-[#404040]">{t.name}</span>
                    <span className="block">{t.title}, {t.company}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          );
        })}
      </div>

      {pages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Show testimonial set ${i + 1}`}
              className={`h-2 rounded-full transition-[width,background-color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:opacity-70 ${
                i === page
                  ? "w-8 bg-[#CA3C27]"
                  : "w-2 bg-[#CCCCCC] hover:bg-[#888]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
