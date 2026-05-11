"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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

export default function HeroVideo({
  mp4Src,
  webmSrc,
  poster,
  alt,
  className = "object-cover object-center",
  sizes = "52vw",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (mq.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        video.play().catch(() => {});
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <>
      {/* Poster image — shown immediately, behind the video, until video paints. Also the
          fallback when prefers-reduced-motion pauses the video. */}
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        className={className}
        sizes={sizes}
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full ${className}`}
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={mp4Src} type="video/mp4" />
      </video>
    </>
  );
}
