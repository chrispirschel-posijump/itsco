// Source PDF: Recycling-and-Reuse-in-Hyperscalers-ITSco.pdf
// Subtitle and abstract paragraphs transcribed verbatim from the
// Introduction; takeaways summarize verbatim findings from the paper
// body. Full document available via the download link.

import type { WhitePaperContent } from '@/components/WhitePaperPage'

export const CONTENT: WhitePaperContent = {
  meta: {
    title: 'Recycling and Reuse in Hyperscalers: Sustainable Asset Management | White Paper',
    description:
      "Hyperscaler data centers contribute 70% of toxic landfill waste. How circular economy practices and 4IR technologies are being adopted by Microsoft, Amazon, Google, and Meta. Free PDF download.",
    canonical:
      'https://www.itsco.com/white-papers-recycling-and-reuse-in-hyperscalers-sustainable-asset-management/',
  },
  category: 'ITAD & Sustainability',
  eyebrow: 'ITAD & Sustainability',
  title: 'Recycling and Reuse in Hyperscalers: Sustainable Asset Management',
  subtitle:
    "With hyperscaler data centers contributing 70% of toxic landfill waste, the growing e-waste market is expected to reach $145 billion by 2030. Implementing circular economy practices alongside 4IR technologies offers a path toward reducing e-waste and advancing sustainable digital infrastructure.",
  abstract: [
    "In 2019, we threw away 600 billion pounds of plastic, which is the weighted sum of all human beings combined. As waste burned our land and waters away, humans desperately turned to the circular economy to save their homes. You may find some familiarity with the circular economy—unlike the typical \"take-make-dispose\" approach in a typical linear fashion, the circular economy is a model that sustainably uses waste and resources.",
    "According to the Ellen MacArthur Foundation, the circular economy maximizes resources and materials, eliminating waste. The root of this mass waste in the digital world stems from hyperscaler data centers, which form the backbone of global IT infrastructure. These data centers are significant contributors to electronic waste (e-waste) and energy consumption, accounting for 70% of toxic material in landfills.",
    'The e-waste market is predicted to grow at a CAGR of 13.2%, up to approximately 145 billion dollars by 2030, almost doubling over a decade.',
  ],
  takeaways: [
    'E-waste market projected to grow at 13.2% CAGR, reaching ~$145B by 2030.',
    "Global e-waste: 53.6M tonnes in 2019; expected 74.7M tonnes by 2030 — only 17.4% currently documented and recycled.",
    "Microsoft's Circular Centers achieve 83% reuse + 17% recycle; save ~$100M/yr and 150,000 metric tons of CO2.",
    "Amazon's Recycled Content Standard for Electrical & Electronic Equipment supports its 2040 net-zero pledge.",
    'Google achieved zero-waste status at 23 data centers in 2022 — has resold 44M hardware parts since 2015.',
    'The Circular Electronics Partnership (CEP) brings together Microsoft, Google, Amazon, Iron Mountain, Vodafone, and Dell — 4IR technologies (IoT, AI, Blockchain) drive e-waste monitoring and tracking.',
  ],
  pdfUrl: '/white-papers/recycling-and-reuse-in-hyperscalers.pdf',
  pdfFilename: 'ITSco-Recycling-and-Reuse-in-Hyperscalers.pdf',
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
      slug: 'ai-impact-on-itad',
      category: 'ITAD & Sustainability',
      title: 'AI Impact on ITAD Industry — A Multi-Pronged Approach',
      description:
        "How machine learning is improving decommissioning, predictive lifecycle planning, and secure data destruction.",
      href: '/white-papers-ai-impact-on-itad-industry-a-multi-pronged-approach/',
    },
    {
      slug: 'hardware-dumping-in-africa',
      category: 'ITAD & Sustainability',
      title: 'Hardware Dumping in Africa',
      description:
        'As the Global North advances, Africa bears the burden of e-waste dumping — the case for sustainable ITAD practices.',
      href: '/white-papers-hardware-dumping-in-africa/',
    },
  ],
  relatedServices: [
    {
      slug: 'itad',
      title: 'IT Asset Disposition',
      description:
        'Certified, secure, audit-ready disposition — chain of custody, data destruction, recycling, and reuse.',
      href: '/itad/',
    },
    {
      slug: 'it-procurement',
      title: 'IT Procurement',
      description:
        'Hardware, software, and licensing sourced at the discounts your size actually qualifies for.',
      href: '/it-procurement/',
    },
    {
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, helpdesk, and lifecycle management on a predictable monthly cost.',
      href: '/managed-it-services/',
    },
  ],
  bookingUtm: 'wp-recycling-hyperscalers',
  downloadUtm: 'wp-recycling-hyperscalers-pdf',
}
