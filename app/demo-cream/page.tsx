import type { CSSProperties } from "react";
import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Cream Theme Preview | ITSco",
  description: "Preserved reference of the previous cream/paper theme — before the oat cascade.",
  robots: { index: false, follow: false },
};

const creamOverrides = {
  "--color-itsco-paper": "#F8F6F2",
  "--color-itsco-paper-deep": "#F4F1EB",
  "--color-itsco-blush": "#F8F6F2",
  "--color-itsco-card": "#FFFFFF",
  "--color-itsco-cta": "#CA3C27",
  "--color-itsco-cta-hover": "#B4311E",
  backgroundColor: "#F8F6F2",
} as CSSProperties;

export default function DemoCreamPage() {
  return (
    <div style={creamOverrides}>
      <HomePage />
    </div>
  );
}
