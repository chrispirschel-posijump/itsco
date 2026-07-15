"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// Hero image with a spring-eased fade-in on load. Renders at opacity 0
// so the empty state never flashes; the moment the decoded image is
// ready, it fades to full opacity over 500ms. Drop-in replacement for
// next/image — pass the same props.
export default function HeroImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const { className = "", onLoad, ...rest } = props;
  return (
    <Image
      {...rest}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={`${className} transition-opacity duration-500 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
