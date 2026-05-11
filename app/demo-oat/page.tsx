import type { CSSProperties } from "react";
import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Oat Theme Preview | ITSco",
  description: "Internal preview using an Anthropic-style oat background — for design review.",
  robots: { index: false, follow: false },
};

const oatOverrides = {
  "--color-itsco-paper": "#F0EDE0",
  "--color-itsco-paper-deep": "#F0EDE0",
  "--color-itsco-blush": "#F0EDE0",
  backgroundColor: "#F0EDE0",
} as CSSProperties;

export default function DemoOatPage() {
  return (
    <div style={oatOverrides}>
      <HomePage />
    </div>
  );
}
