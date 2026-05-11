import type { Metadata } from "next";
import { Montserrat, Prata } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "800"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ITSco | The ROI-Driven IT Services Company",
  description: "Managed IT services, cybersecurity, and cloud solutions for businesses in NC, SC, and VA. Trusted since 1996.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${prata.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
