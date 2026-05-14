import type { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Oat Theme Preview | ITSco",
  description: "Internal preview of the oat theme — now matches the production default.",
  robots: { index: false, follow: false },
};

export default function DemoOatPage() {
  return <HomePage />;
}
