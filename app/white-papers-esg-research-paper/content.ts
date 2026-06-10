// Source PDF: ESG-Research-Paper-ITSco.pdf
// Subtitle and abstract paragraphs transcribed verbatim from the
// Introduction; takeaways summarize verbatim findings from the paper
// body. Full document available via the download link.

import type { WhitePaperContent } from '@/components/WhitePaperPage'

export const CONTENT: WhitePaperContent = {
  meta: {
    title: 'ESG Research Paper: AI, Energy, and the Power Grid | White Paper | ITSco',
    description:
      "GPUs combine fast calculation with rapid energy consumption — AI growth is on a collision course with the power grid's capacity to scale. Free PDF download.",
    canonical: 'https://www.itsco.com/white-papers-esg-research-paper/',
  },
  category: 'ITAD & Sustainability',
  eyebrow: 'ITAD & Sustainability',
  title: 'ESG Research Paper',
  subtitle:
    "One of the main features of GPUs, along with their fast calculation speed, is their rapid rate of energy consumption.",
  abstract: [
    "Above all, this growth is attributable to the intense race of hyperscalers, such as Microsoft and Meta, and their investments toward vital components of AI infrastructure, such as GPUs. Graphic Processing Units (GPUs) are best seen as accelerators for Central Processing Units (CPUs) within AI, due to their ability to simultaneously compute billions of certain operations per second. Accordingly, this has caused the data center GPU market size to grow tremendously, with the market currently being valued at $14.3 billion and estimated to grow at a CAGR of about 35% by 2028.",
    "Unfortunately, this high growth comes at a cost. One of the main features of GPUs, along with their fast calculation speed, is their rapid rate of energy consumption. For example, NVIDIA's latest GPU, the H100, consumes up to 700W of power at its peak - more than an average American household.",
    "Many energy reports believe that annual data center energy consumption will double by 2026, going from 460 terawatts to over 1000 - about the same as a year's energy consumption in all of Japan.",
  ],
  takeaways: [
    'Data center GPU market: $14.3B currently, projected ~35% CAGR through 2028.',
    "NVIDIA H100 GPU consumes up to 700W at peak — more than an average US household.",
    'Annual data center energy consumption projected to double by 2026 (460 TWh → 1000+ TWh).',
    "By 2030, US data centers are projected to consume ~10% of national electricity (vs ~2.6% YoY growth historically).",
    'Power grid market growing at meager 6% CAGR vs data centers at 19% by 2027 — supply gap is forming.',
    'A single ChatGPT query consumes 6-10x the power of a traditional Google search.',
  ],
  pdfUrl: '/white-papers/esg-research-paper.pdf',
  pdfFilename: 'ITSco-ESG-Research-Paper.pdf',
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
      slug: 'gpu-and-refresh-cycle',
      category: 'ITAD & Sustainability',
      title: 'GPU and Refresh Cycle Case Study',
      description:
        'How rising GPU investments in 2024 signal a shift toward AI workloads and reshape refresh strategy.',
      href: '/white-papers-gpu-and-refresh-cycle-case-study/',
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
      slug: 'managed-cloud-services',
      title: 'Managed Cloud Services',
      description:
        'Managed Azure, AWS, and hybrid cloud — with FinOps and energy-efficient architectural choices.',
      href: '/managed-cloud-services/',
    },
    {
      slug: 'ai-strategy-consulting',
      title: 'AI Strategy Consulting',
      description:
        'Practical AI direction and roadmaps that turn AI investment into measurable business advantage.',
      href: '/ai-strategy-consulting/',
    },
  ],
  bookingUtm: 'wp-esg',
  downloadUtm: 'wp-esg-pdf',
}
