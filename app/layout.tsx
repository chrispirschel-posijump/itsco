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
};

// Google Tag Manager. Set NEXT_PUBLIC_GTM_ID=GTM-NKZ96XQ in Netlify.
// The runtime hostname guard below keeps GTM from firing on preview
// deploys, branch builds, or the bare itsco-prod.netlify.app hostname
// even when the env var is scoped to All Contexts — so preview/QA
// traffic never pollutes Mike's analytics.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CANONICAL_HOSTNAME = "www.itsco.com";

// RB2B (Reveal B2B) visitor identification. Account key is inherently
// public — it appears verbatim in the client-side snippet. Restored from
// the old WordPress site where it was installed directly in <head>, not
// via GTM, so it did not carry over to the new stack automatically. Uses
// the same hostname guard as GTM below so preview/QA traffic never
// pollutes ITSco's RB2B reveals.
const RB2B_ACCOUNT_KEY = "4O7Z0HMLW3NX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${prata.variable} h-full antialiased`}>
      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`if(window.location.hostname==='${CANONICAL_HOSTNAME}'){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');}`}
        </Script>
      )}
      <Script id="rb2b-init" strategy="afterInteractive">
        {`if(window.location.hostname==='${CANONICAL_HOSTNAME}'){!function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=true;reb2b.methods=["identify","collect"];reb2b.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/reb2b.js.gz";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("${RB2B_ACCOUNT_KEY}");}();}`}
      </Script>
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
