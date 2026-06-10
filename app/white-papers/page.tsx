import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import { FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'White Papers | In-Depth Research from ITSco',
  description:
    'In-depth white papers from ITSco — research on AI strategy, cybersecurity, cloud architecture, ITAD, and the sustainable management of IT infrastructure. Free, no gate.',
  alternates: { canonical: 'https://www.itsco.com/white-papers/' },
}

interface WhitePaper {
  slug: string
  category: 'Cybersecurity & AI Risk' | 'AI & Cloud Strategy' | 'ITAD & Sustainability'
  title: string
  description: string
  href: string
}

const PAPERS: WhitePaper[] = [
  // Cybersecurity & AI Risk
  {
    slug: 'ai-tools-for-threat-detection',
    category: 'Cybersecurity & AI Risk',
    title: 'Implementing AI Tools to Prevent Data Breaches and Enhance Security',
    description:
      'The AI-powered cybersecurity market is on track for a $72.22B valuation by 2029 (CAGR 36.78%). How AI-driven detection, automation, and compliance monitoring change the economics of cybersecurity.',
    href: '/white-papers-ai-tools-for-threat-detection/',
  },
  {
    slug: 'zero-trust-architecture',
    category: 'Cybersecurity & AI Risk',
    title: 'To What Extent Should We Trust “Zero Trust Architecture”?',
    description:
      "Zero Trust Architecture (ZTA) — the cost of implementation, the size of the long-term security savings, and why recent advancements make ZTA a smart investment despite adoption challenges.",
    href: '/white-papers-zero-trust-architecture/',
  },
  {
    slug: 'legal-repercussions-of-ai-implementation',
    category: 'Cybersecurity & AI Risk',
    title: 'Legal Repercussions of AI Implementation',
    description:
      'Data breaches peaked at 3,205 in 2023 — a 43.8% jump from 2022. The expanding regulatory landscape around AI-driven incidents, and what it means for cybersecurity, ITAD, and data destruction.',
    href: '/white-papers-legal-repercussions-of-ai-implementation/',
  },

  // AI & Cloud Strategy
  {
    slug: 'ai-impact-on-data-centers',
    category: 'AI & Cloud Strategy',
    title: 'AI Impact on Data Centers',
    description:
      "70% of data center errors result from human mistakes. How AI-powered robotics, drones, and predictive cooling are redefining data center operations — and where the costs and risks land.",
    href: '/white-papers-ai-impact-on-data-centers/',
  },
  {
    slug: 'public-vs-private-cloud',
    category: 'AI & Cloud Strategy',
    title: 'Public vs Private Cloud',
    description:
      "AI's growth is driving tech companies toward public cloud services that offer the scalability and flexibility private clouds can't match. A comparative analysis of where each model fits.",
    href: '/white-papers-public-vs-private-cloud/',
  },
  {
    slug: 'flp-hyperscaler-monetization',
    category: 'AI & Cloud Strategy',
    title: 'FLP Hyperscaler Monetization',
    description:
      "Today's AI boom is grounded in real profits and proven tech — not dot-com speculation. Where the real monetization opportunities sit across infrastructure, chips, and AI software platforms.",
    href: '/white-papers-flp-hyperscaler-monetization/',
  },
  {
    slug: 'geopolitics',
    category: 'AI & Cloud Strategy',
    title: 'Geopolitics of the AI Race',
    description:
      'The race for AI dominance mirrors the 20th-century arms race. How US-China tensions, the Taiwan strait, and TSMC reshape the global semiconductor and AI infrastructure landscape.',
    href: '/white-paper-geopolitics/',
  },

  // ITAD & Sustainability
  {
    slug: 'tpm',
    category: 'ITAD & Sustainability',
    title: 'AI Spending and ESG Pressures Drive Demand for TPM',
    description:
      'The third-party maintenance (TPM) industry was sized at $2.1B in 2022 and is projected to grow 20% per year. Why AI capex pressure and ESG mandates are accelerating the move away from OEM-only support.',
    href: '/white-papers-tpm/',
  },
  {
    slug: 'gpu-and-refresh-cycle',
    category: 'ITAD & Sustainability',
    title: 'GPU and Refresh Cycle Case Study',
    description:
      'Extended server refresh cycles have hit the ITAD industry hard. How rising GPU investments in 2024 signal a shift toward AI workloads and what it means for the next five years of refresh strategy.',
    href: '/white-papers-gpu-and-refresh-cycle-case-study/',
  },
  {
    slug: 'esg-research-paper',
    category: 'ITAD & Sustainability',
    title: 'ESG Research Paper: AI, Energy, and the Power Grid',
    description:
      "GPUs combine fast calculation with rapid energy consumption — AI growth is on a collision course with the power grid's capacity to scale. The ESG and infrastructure implications for the next decade.",
    href: '/white-papers-esg-research-paper/',
  },
  {
    slug: 'recycling-and-reuse-in-hyperscalers',
    category: 'ITAD & Sustainability',
    title: 'Recycling and Reuse in Hyperscalers: Sustainable Asset Management',
    description:
      'Hyperscaler data centers contribute 70% of toxic landfill waste. How circular economy practices and 4IR technologies are being adopted by Microsoft, Amazon, Google, and Meta to reduce e-waste.',
    href: '/white-papers-recycling-and-reuse-in-hyperscalers-sustainable-asset-management/',
  },
  {
    slug: 'ai-impact-on-itad',
    category: 'ITAD & Sustainability',
    title: 'AI Impact on ITAD Industry — A Multi-Pronged Approach',
    description:
      'AI can turn IT asset disposition from a crisis into an opportunity. How machine learning is improving decommissioning, predictive lifecycle planning, and secure data destruction across ITAD.',
    href: '/white-papers-ai-impact-on-itad-industry-a-multi-pronged-approach/',
  },
  {
    slug: 'hardware-dumping-in-africa',
    category: 'ITAD & Sustainability',
    title: 'Hardware Dumping in Africa',
    description:
      "As the Global North advances, Africa bears the burden of e-waste dumping. The environmental, health, and geopolitical dimensions of a problem that demands sustainable ITAD practices.",
    href: '/white-papers-hardware-dumping-in-africa/',
  },
]

const CATEGORIES: Array<{ key: WhitePaper['category']; description: string }> = [
  {
    key: 'Cybersecurity & AI Risk',
    description:
      'Research on AI-driven security, Zero Trust, and the regulatory and legal landscape shaping AI implementation.',
  },
  {
    key: 'AI & Cloud Strategy',
    description:
      'How AI demand is reshaping cloud architecture, data center operations, and global semiconductor strategy.',
  },
  {
    key: 'ITAD & Sustainability',
    description:
      'Third-party maintenance, refresh cycles, e-waste, and the circular economy practices reshaping IT asset management.',
  },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
            White Papers
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
            In-depth research from{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
            >
              the ITSco library.
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-2xl mx-auto mb-10">
            Original research on AI strategy, cybersecurity, cloud architecture, ITAD, and the sustainable
            management of IT infrastructure. Free to read. Free to download. No gate.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix="white-papers-hero"
              className="px-8 py-4 rounded-xl text-base"
            />
            <CTAButton
              label="Browse the library"
              href="#library"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function PapersByCategory() {
  return (
    <section id="library" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        {CATEGORIES.map((cat) => {
          const papers = PAPERS.filter((p) => p.category === cat.key)
          if (papers.length === 0) return null
          return (
            <div key={cat.key} className="mb-20 last:mb-0">
              <FadeUp>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block w-1.5 h-7 bg-[#CA3C27] rounded-sm" />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight">
                    {cat.key}
                  </h2>
                </div>
                <p className="text-base text-[#555] leading-relaxed mb-10 max-w-2xl ml-4">
                  {cat.description}
                </p>
              </FadeUp>

              <StaggerChildren stagger={60} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {papers.map((p) => (
                  <Link
                    key={p.slug}
                    href={p.href}
                    className="group flex flex-col h-full bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <FileText size={14} className="text-[#CA3C27]" />
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#CA3C27]">
                        White Paper
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-3 tracking-tight group-hover:text-[#CA3C27] transition-[color] duration-200">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed flex-1 mb-5">{p.description}</p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#404040] uppercase tracking-[0.08em] group-hover:text-[#CA3C27] transition-[color] duration-200">
                      Read white paper
                      <ArrowRight
                        size={12}
                        className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                ))}
              </StaggerChildren>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function WhitePapersHubPage() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <Hero />
        <PapersByCategory />
        <BookingCTA utmSuffix="white-papers-bottom" />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'White Papers',
                item: 'https://www.itsco.com/white-papers/',
              },
            ],
          }),
        }}
      />
    </>
  )
}
