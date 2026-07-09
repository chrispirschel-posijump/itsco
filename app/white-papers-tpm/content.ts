// Source PDF: 1.-TPM-ITSco.pdf
// Subtitle is a verbatim quote from the PDF cover; abstract paragraphs
// transcribed verbatim from the Introduction. Takeaways summarize
// verbatim findings from the paper body. Full document available via
// the download link.

import type { WhitePaperContent } from '@/components/WhitePaperPage'

export const CONTENT: WhitePaperContent = {
  meta: {
    title: 'AI Spending and ESG Pressures Drive Demand for TPM | White Paper',
    description:
      "The third-party maintenance (TPM) market is projected to grow 20% per year as AI capex and ESG mandates extend server refresh cycles. Free PDF download.",
    canonical: 'https://www.itsco.com/white-papers-tpm/',
  },
  category: 'ITAD & Sustainability',
  eyebrow: 'ITAD & Sustainability',
  title: 'AI Spending and ESG Pressures Drive Demand for TPM',
  subtitle: 'Millions of GPU data centers are coming.',
  authors: 'Jensen Huang (CEO, NVIDIA)',
  abstract: [
    'What does this mean for you? Well, it reflects the fastest growth of an industry that will change human life forever. This is as revolutionary as the invention of the automobile, allowing humankind to travel further than ever before, but with the side effects of devastating pollution.',
    'Similarly, AI will allow us to travel to a new reality and reach a higher plane of understanding. It is common knowledge that GPUs demand an overwhelming amount of power. Even worse, without extended maintenance, companies would dispose of their IT assets, often unsafely leaking toxic chemicals into the environment. In fact, only 22% of companies dispose of their IT assets safely.',
    "Yet OEMs stand as a formidable adversary to financially and environmentally compelling server extensions, doing their utmost to prevent customers from extending the useful lives of servers. How, then, will technology companies simultaneously act for the noble aims of financial competitiveness and environmental sustainability, saving us from the grip of these giants? The solution lies with third-party maintenance companies.",
  ],
  takeaways: [
    'TPM industry sized at $2.1B in 2022, projected growth rate 14.43%-14.52% — expected to grow 20% per year given current pressures.',
    'E-waste up 82% since 2010; 50% of total server carbon emissions come from manufacturing — TPM is core to Green IT.',
    "Park Place Technologies leads the TPM market at 28.04% share ($674M revenue), backed by $2B from Blackstone for further acquisitions.",
    "Evernex holds ~12.35% market share, Service Express ~12.06%, CxTec ~8.97% — top 4 control 60%+ of the market.",
    'North America projected to contribute 33% of TPM market growth; Asia growing fastest at 38%.',
    'Over 10M data center and network devices were under TPM plans in 2016; 71% of large companies used TPM for support.',
  ],
  pdfUrl: '/white-papers/tpm.pdf',
  pdfFilename: 'ITSco-TPM-AI-ESG.pdf',
  related: [
    {
      slug: 'gpu-and-refresh-cycle',
      category: 'ITAD & Sustainability',
      title: 'GPU and Refresh Cycle Case Study',
      description:
        "How rising GPU investments in 2024 signal a shift toward AI workloads and reshape refresh strategy.",
      href: '/white-papers-gpu-and-refresh-cycle-case-study/',
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
      slug: 'recycling-and-reuse-in-hyperscalers',
      category: 'ITAD & Sustainability',
      title: 'Recycling and Reuse in Hyperscalers: Sustainable Asset Management',
      description:
        'How Microsoft, Amazon, and Google use circular economy practices to reduce e-waste.',
      href: '/white-papers-recycling-and-reuse-in-hyperscalers-sustainable-asset-management/',
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
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, helpdesk, and infrastructure management on a predictable monthly cost.',
      href: '/managed-it-services/',
    },
  ],
  bookingUtm: 'wp-tpm',
  downloadUtm: 'wp-tpm-pdf',
}
