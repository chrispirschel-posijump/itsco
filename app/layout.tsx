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
  metadataBase: new URL("https://www.itsco.com"),
  title: {
    default: "ITSco | The ROI-Driven IT Services Company",
    template: "%s | ITSco",
  },
  description:
    "Managed IT services, cybersecurity & compliance, and cloud solutions for businesses in NC, SC, and VA. Trusted since 1996.",
  applicationName: "ITSco",
  authors: [{ name: "ITSco" }],
  // Global Open Graph defaults. Individual pages can override with page-
  // specific titles, descriptions, and images via their own metadata exports
  // — anything they don't set inherits from these defaults.
  // TODO before launch: drop a 1200x630 PNG at /public/images/og-default.png
  // and uncomment the `images` blocks below. Until then, social cards will
  // render with title + description only (no image), which is better than a
  // broken 404 image preview.
  openGraph: {
    type: "website",
    siteName: "ITSco",
    locale: "en_US",
    url: "https://www.itsco.com/",
    title: "ITSco | The ROI-Driven IT Services Company",
    description:
      "Managed IT services, cybersecurity & compliance, and cloud solutions for businesses in NC, SC, and VA. Trusted since 1996.",
    // images: [
    //   {
    //     url: "/images/og-default.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "ITSco — The ROI-Driven IT Services Company",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITSco | The ROI-Driven IT Services Company",
    description:
      "Managed IT services, cybersecurity & compliance, and cloud solutions for businesses in NC, SC, and VA. Trusted since 1996.",
    // images: ["/images/og-default.png"],
  },
  // Site-wide noindex/nofollow during the preview/build phase. Remove these
  // before going live to allow search engines to crawl and index the site.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
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
