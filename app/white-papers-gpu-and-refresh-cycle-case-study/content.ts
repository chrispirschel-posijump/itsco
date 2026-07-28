// Source PDF: GPUs-Refresh-Cycles-ITSco.pdf
// Subtitle and abstract paragraphs transcribed verbatim from the
// Introduction; takeaways summarize verbatim findings from the paper
// body. Full document available via the download link.

import type { WhitePaperContent } from '@/components/WhitePaperPage'

export const CONTENT: WhitePaperContent = {
  meta: {
    title: 'GPU and Refresh Cycle Case Study | White Paper',
    description:
      'Extended server refresh cycles have hit the ITAD industry hard. How rising GPU investments in 2024 signal a shift toward AI workloads and reshape the next five years of refresh strategy. Free PDF download.',
    canonical:
      'https://www.itsco.com/white-papers-gpu-and-refresh-cycle-case-study',
  },
  category: 'ITAD & Sustainability',
  eyebrow: 'ITAD & Sustainability',
  title: 'GPU and Refresh Cycle Case Study',
  subtitle:
    'Extended server refresh cycles hit the ITAD industry, but rising GPU investments in 2024 signal a shift toward AI and may reshape future upgrades.',
  abstract: [
    'The ITAD industry has taken a severe hit in the recent year due to the lengthened refresh cycles of many hyperscalers for their data centers. For example, Meta announced in February 2023 they would be extending the expected life span of their servers from 4 to 5 years, following similar decisions from Amazon and Microsoft. The companies extending refresh cycles own at least 20% of the servers in the major public companies alone.',
    'This has negatively impacted cash flows for ITAD companies across the board. For example, multiple main ITAD companies saw a severe decrease in revenue, including Envela, Sims, and CDW Corp.',
    "Interestingly enough, even though most hyperscalers spent the last two years optimizing their data centers and extending refresh cycles to reduce expenses, all of them have announced they plan on increasing capex spending dramatically throughout 2024, particularly to buy GPUs.",
  ],
  takeaways: [
    'GPU market: ~$40B in 2022 → projected $400B by 2032 (CAGR ~25%); data center GPU was $13.1-14.3B in 2023.',
    'ITAD revenue declines (YoY): Envela -0.28% (-11.45% QoQ); Sims and CDW Corp similarly impacted; CDW "Other" segment -17.44% YoY.',
    "AMD's GPU consumes ~5x the energy of its CPU at max load; IEA expects global DC energy demand to double by 2026.",
    'Microsoft attributed its 2022 refresh cycle extension (4→6 years) to a new immersion cooling system replacing air cooling.',
    "Hypothesis: refresh cycles will continue to be lengthened for at least 5 more years as the AI boom continues — hyperscalers must trade traditional server spend for GPU spend.",
    "Microsoft's new outdoor-humidity cooling and Amazon's NVIDIA collaboration signal hyperscalers have the tools to keep extending.",
  ],
  pdfUrl: '/white-papers/gpu-and-refresh-cycle.pdf',
  pdfFilename: 'ITSco-GPU-Refresh-Cycle-Case-Study.pdf',
  related: [
    {
      slug: 'tpm',
      category: 'ITAD & Sustainability',
      title: 'AI Spending and ESG Pressures Drive Demand for TPM',
      description:
        'Why AI capex pressure and ESG mandates are accelerating the move away from OEM-only support.',
      href: '/white-papers-tpm/',
    },
    {
      slug: 'esg-research-paper',
      category: 'ITAD & Sustainability',
      title: 'ESG Research Paper: AI, Energy, and the Power Grid',
      description:
        'GPUs combine fast calculation with rapid energy consumption — AI growth is on a collision course with the power grid.',
      href: '/white-papers-esg-research-paper/',
    },
    {
      slug: 'flp-hyperscaler-monetization',
      category: 'AI & Cloud Strategy',
      title: 'FLP Hyperscaler Monetization',
      description:
        "Today's AI boom is grounded in real profits and proven tech — not dot-com speculation.",
      href: '/white-papers-flp-hyperscaler-monetization/',
    },
  ],
  relatedServices: [
    {
      slug: 'itad',
      title: 'IT Asset Disposition',
      description:
        'Certified, secure, audit-ready disposition of decommissioned IT assets — chain of custody, data destruction, reporting.',
      href: '/itad/',
    },
    {
      slug: 'it-procurement',
      title: 'IT Procurement',
      description:
        'Hardware, software, and licensing sourced at the discounts your size actually qualifies for — minus the overhead.',
      href: '/it-procurement/',
    },
    {
      slug: 'managed-cloud-services',
      title: 'Managed Cloud Services',
      description:
        'Managed Azure, AWS, and hybrid cloud — with FinOps, identity, and security wrapped in.',
      href: '/managed-cloud-services/',
    },
  ],
  bookingUtm: 'wp-gpu-refresh',
  downloadUtm: 'wp-gpu-refresh-pdf',
}
