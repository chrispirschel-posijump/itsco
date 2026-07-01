import type { Metadata } from "next";
import { Montserrat, Prata } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  // 400 = body, 600 = nav labels + CTA, 800 = headings. Without 600 loaded,
  // Tailwind's font-semibold falls back to 800 (ExtraBold), which reads as a
  // huge jump from font-medium's 400 fallback.
  weight: ["400", "600", "800"],
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
  openGraph: {
    type: "website",
    siteName: "ITSco",
    locale: "en_US",
    url: "https://www.itsco.com/",
    title: "ITSco | The ROI-Driven IT Services Company",
    description:
      "Managed IT services, cybersecurity & compliance, and cloud solutions for businesses in NC, SC, and VA. Trusted since 1996.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "ITSco — The ROI-Driven IT Services Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITSco | The ROI-Driven IT Services Company",
    description:
      "Managed IT services, cybersecurity & compliance, and cloud solutions for businesses in NC, SC, and VA. Trusted since 1996.",
    images: ["/images/og-default.png"],
  },
  // Site-wide noindex/nofollow during the preview/build phase. Remove these
  // before going live to allow search engines to crawl and index the site.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

// Google Tag Manager. Set NEXT_PUBLIC_GTM_ID=GTM-NKZ96XQ in Netlify's
// production environment to enable analytics on the live site. Leave it
// unset on preview deploys so QA traffic doesn't pollute Mike's data.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${prata.variable} h-full antialiased`}>
      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      <body className="min-h-full flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
