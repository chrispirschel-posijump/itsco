import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Calculator from './Calculator'

// Public page. Pricing constants and calculation logic live in pricing.ts;
// the substantiation for every figure is in BASIS_OF_ESTIMATE.md. Linked from
// the Resources nav and the site-wide calculator banner, and included in
// app/sitemap.ts. Submissions post to Netlify Forms and sync to GlassHive via
// netlify/functions/calculator-sync.mjs.
export const metadata: Metadata = {
  title: 'IT Investment Calculator',
  description:
    'Estimate what managed IT would cost your company — and what a managed partnership typically saves compared with your current setup.',
  alternates: { canonical: 'https://www.itsco.com/it-investment-calculator' },
  openGraph: {
    title: 'IT Investment Calculator | ITSco',
    description:
      'Estimate what managed IT should cost your company — and what a managed partnership typically saves versus your current setup.',
    url: 'https://www.itsco.com/it-investment-calculator',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
    // Keep a share image (Next drops the inherited one once a page sets its own OG).
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'ITSco IT Investment Calculator',
      },
    ],
  },
}

export default function ITInvestmentCalculatorPage() {
  return (
    <>
      <Nav variant="light" />
      <main className="bg-itsco-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-28 pb-20 md:pt-32 md:pb-28">
          <header className="mb-10 max-w-[780px]">
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-itsco-red">
              IT Investment Calculator
            </span>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight">
              Your ITSco IT Investment Estimate
            </h1>
            <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-itsco-body">
              Answer a few questions about your environment and we’ll build a pricing estimate based on
              ITSco’s actual per-unit pricing. Tell us how IT is handled today and we’ll show what a
              managed partnership typically saves you first, then what it costs.
            </p>
          </header>

          <Calculator />

          <footer className="mt-12 border-t border-[#EBEBEB] pt-6">
            <p className="max-w-[62ch] text-xs leading-relaxed text-itsco-body/60">
              <strong className="text-itsco-body">About these numbers.</strong> The monthly figure is a
              pricing estimate built from ITSco’s standard rates as of October 2026, shown as a range
              because final scope is set after discovery. Labor costs use U.S. Bureau of Labor
              Statistics Employer Costs for Employee Compensation data (June 2026); the in-house hire
              comparison uses the BLS median systems administrator wage (May 2025), loaded for benefits
              and required contributions. Cyber claim figures come from the Coalition 2026 Cyber Claims
              Report and the NetDiligence 2026 Cyber Claims Study. The hours a company recovers, and
              the one-week incident scenario, are ITSco’s own illustrations rather than third-party
              research. ITSco is not affiliated with these sources and they do not endorse this
              estimate. Actual proposals are scoped individually, and the figures here could change
              once we understand your environment. </p>
          </footer>
        </div>
      </main>
      <Footer />
    </>
  )
}
