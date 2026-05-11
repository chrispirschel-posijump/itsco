import type { CSSProperties } from "react";
import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Cream Theme Preview | ITSco",
  description: "Internal preview of the cream/paper theme — for design review.",
  robots: { index: false, follow: false },
};

const creamOverrides = {
  "--color-itsco-blush": "#F8F6F2",
} as CSSProperties;

export default function DemoCreamPage() {
  return (
    <div style={creamOverrides}>
      <HomePage />
    </div>
  );
}
