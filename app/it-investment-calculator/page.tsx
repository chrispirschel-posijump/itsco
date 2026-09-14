import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Calculator from './Calculator'

// UNLISTED PREVIEW — not linked from nav or footer, excluded from
// app/sitemap.ts, and noindexed below. Before this goes public:
//   1. Remove the `robots` key from the metadata export
//   2. Remove '/it-investment-calculator' from EXCLUDED_ROUTES in sitemap.ts
//   3. Add the nav/footer entry point and the CTA on
//      /maximize-roi-with-managed-it-services
//   4. Resolve the systems-administration labor gap noted in pricing.ts
export const metadata: Metadata = {
  title: 'IT Investment Calculator',
  description:
    'Estimate what managed IT would cost your company — and what a managed partnership typically saves compared with your current setup.',
  alternates: { canonical: 'https://www.itsco.com/it-investment-calculator' },
  robots: { index: false, follow: false },
}

export default function ITInvestmentCalculatorPage() {
  return (
    <>
      <Nav variant="light" />
      <main className="bg-itsco-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-28 pb-20 md:pt-32 md:pb-28">
          <header className="mb-10 max-w-[780px]">
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-itsco-red">
              Preview · Internal review
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
              pricing estimate based on ITSco’s actual per-unit pricing (2026 rates). The in-house hire
              comparison uses the BLS median systems administrator salary, fully loaded for benefits and
              payroll tax. Savings ranges are directional benchmarks based on public industry sources
              (BLS wage data, IBM Cost of a Data Breach, Verizon DBIR, Gartner IT spending benchmarks,
              ITIC downtime research) blended with ITSco’s 30 years of operational experience with
              50–500-person companies. Actual proposals are scoped individually — this is an estimate
              based on what we know today and subject to change once we understand your environment.
              It’s discovery-conversation napkin math, not a formal quote or contract.
            </p>
          </footer>
        </div>
      </main>
      <Footer />
    </>
  )
}
