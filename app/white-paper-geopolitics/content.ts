// Source PDF: Geopolitics-ITSco.pdf
// Note: legacy URL uses the singular "/white-paper-geopolitics/" (rest of
// the library is "/white-papers-..."). Preserved as-is to match INVENTORY.
// Subtitle and abstract paragraphs transcribed verbatim from the
// Introduction; takeaways summarize verbatim findings from the paper
// body. Full document available via the download link.

import type { WhitePaperContent } from '@/components/WhitePaperPage'

export const CONTENT: WhitePaperContent = {
  meta: {
    title: 'Geopolitics of the AI Race | White Paper',
    description:
      "The race for AI dominance mirrors the 20th-century arms race. How US-China tensions, the Taiwan strait, and TSMC reshape semiconductor and AI infrastructure. Free PDF download.",
    canonical: 'https://www.itsco.com/white-paper-geopolitics',
  },
  category: 'AI & Cloud Strategy',
  eyebrow: 'AI & Cloud Strategy',
  title: 'Geopolitics',
  subtitle:
    "The race for AI dominance mirrors the 20th-century arms race, with nations vying for economic, military, and ideological leverage, reshaping global power dynamics.",
  abstract: [
    "The geopolitics of the AI race is shaping up to be one of the defining narratives of the 21st century, echoing the high-stakes tension and technological fervor reminiscent of the Cold War's Space Race and the Nuclear Power Development Race. Just as the launch of Sputnik in 1957 signaled a seismic shift in global power dynamics, the advent of advanced AI technologies is redrawing the boundaries of geopolitical influence.",
    "In 2023 alone, global investments in AI surged to over $91.9 billion, with significant contributions from the United States leading the charge at $67.2 billion, nearly nine times more than China, the next highest investor. The race to dominate AI capabilities is not merely about technological supremacy; it is a battle for economic, military, and ideological leverage.",
    'Today, the AI race poses similar high-stakes risks and opportunities, with potential scenarios ranging from unprecedented economic growth to ethical quagmires and security dilemmas.',
  ],
  takeaways: [
    "2023 global AI investment: $91.9B; US led at $67.2B — nearly 9x more than China.",
    "TSMC produces 80% of Taiwan's semiconductor output and ~54% of the global foundry market (61.2% by Q4 2023).",
    "A China invasion of Taiwan could cost the global economy $1T+ annually due to semiconductor disruption.",
    'The US CHIPS Act dedicated $52.7B to domestic semiconductors; China launched a $47.5B semiconductor fund.',
    "Projections: by 2032 China produces only 2% of the world's advanced chips vs the US's 28%.",
    'GPU market projected to grow from $65.27B in 2024 to $274.21B by 2029 (CAGR 33.20%) — driving ITAD industry growth as turnover accelerates.',
  ],
  pdfUrl: '/white-papers/geopolitics.pdf',
  pdfFilename: 'ITSco-Geopolitics.pdf',
  related: [
    {
      slug: 'flp-hyperscaler-monetization',
      category: 'AI & Cloud Strategy',
      title: 'FLP Hyperscaler Monetization',
      description:
        "Today's AI boom is grounded in real profits — not dot-com speculation. Where the real monetization opportunities sit.",
      href: '/white-papers-flp-hyperscaler-monetization/',
    },
    {
      slug: 'gpu-and-refresh-cycle',
      category: 'ITAD & Sustainability',
      title: 'GPU and Refresh Cycle Case Study',
      description:
        "How rising GPU investments in 2024 signal a shift toward AI workloads and reshape refresh strategy.",
      href: '/white-papers-gpu-and-refresh-cycle-case-study/',
    },
    {
      slug: 'tpm',
      category: 'ITAD & Sustainability',
      title: 'AI Spending and ESG Pressures Drive Demand for TPM',
      description:
        'Why AI capex pressure and ESG mandates are accelerating the move away from OEM-only support.',
      href: '/white-papers-tpm/',
    },
  ],
  relatedServices: [
    {
      slug: 'ai-strategy-consulting',
      title: 'AI Strategy Consulting',
      description:
        'Practical AI direction and roadmaps that turn AI investment into measurable business advantage.',
      href: '/ai-strategy-consulting/',
    },
    {
      slug: 'vcio-vcto-vciso-services',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Strategic IT, security, and AI leadership for institutions that need C-suite expertise without a C-suite hire.',
      href: '/vcio-vcto-vciso-services/',
    },
    {
      slug: 'tech-due-diligence-for-businesses',
      title: 'Tech Due Diligence',
      description:
        'Independent technology assessments for M&A, supplier evaluation, and strategic technology decisions.',
      href: '/tech-due-diligence-for-businesses/',
    },
  ],
  bookingUtm: 'wp-geopolitics',
  downloadUtm: 'wp-geopolitics-pdf',
}
