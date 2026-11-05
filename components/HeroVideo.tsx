"use client";

import HeroImage from "@/components/HeroImage";
import { useEffect, useState } from "react";

interface HeroVideoProps {
  /** Path to MP4 source — required */
  mp4Src: string;
  /** Optional WebM source for ~30% smaller files in Chrome/Firefox */
  webmSrc?: string;
  /** Poster image — shown before video loads, on reduced-motion, and as fallback */
  poster: string;
  alt: string;
  className?: string;
  sizes?: string;
}

// The loop is ~1.9 MB, so only fetch it when it will actually be seen: desktop
// widths (the panel is hidden below lg), no reduced-motion or data-saver
// preference, and not an automated browser. Everyone else gets the poster.
function shouldPlayVideo() {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return (
    window.matchMedia("(min-width: 1024px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !nav.connection?.saveData &&
    !nav.webdriver
  );
}

export default function HeroVideo({
  mp4Src,
  webmSrc,
  poster,
  alt,
  className = "object-cover object-center",
  sizes = "52vw",
}: HeroVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      if (motion.matches) setShowVideo(false);
    };

    // Wait until the page has finished loading so the video never competes
    // with the poster, fonts, or scripts.
    const start = () => {
      if (shouldPlayVideo()) setShowVideo(true);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    motion.addEventListener("change", onMotionChange);
    return () => {
      window.removeEventListener("load", start);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <>
      {/* Poster image — shown immediately, and stays as the only image whenever the
          video is skipped. */}
      <HeroImage
        src={poster}
        alt={alt}
        fill
        priority
        className={className}
        sizes={sizes}
      />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full ${className}`}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}
    </>
  );
}
