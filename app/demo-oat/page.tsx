import type { CSSProperties } from "react";
import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Oat Theme Preview | ITSco",
  description: "Internal preview using an Anthropic-style oat background — for design review.",
  robots: { index: false, follow: false },
};

const oatOverrides = {
  "--color-itsco-paper": "#F5F3EA",
  "--color-itsco-paper-deep": "#F5F3EA",
  "--color-itsco-blush": "#F5F3EA",
  "--color-itsco-card": "#F0EADA",
  "--color-itsco-cta": "#111111",
  "--color-itsco-cta-hover": "#333333",
  backgroundColor: "#F5F3EA",
} as CSSProperties;

export default function DemoOatPage() {
  return (
    <div style={oatOverrides}>
      <HomePage />
    </div>
  );
}
