import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Cream Theme Preview | ITSco",
  description: "Internal preview of the cream/paper theme — for design review.",
  robots: { index: false, follow: false },
};

export default function DemoCreamPage() {
  return <HomePage />;
}
