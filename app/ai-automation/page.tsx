import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'AI & Automation Services | ITSco',
  description:
    'AI governance, readiness assessments, strategy consulting, Microsoft Copilot, and process automation — ITSco helps businesses adopt AI safely and strategically.',
  alternates: { canonical: 'https://www.itsco.com/ai-automation/' },
}

const AI_SERVICES = [
  {
    slug: 'ai-governance',
    title: 'AI Governance',
    description:
      'Policies, controls, and oversight that let your business adopt AI safely, responsibly, and in line with compliance requirements.',
    href: '/ai-governance/',
  },
  {
    slug: 'ai-readiness-assessment',
    title: 'AI Readiness Assessment',
    description:
      'A clear-eyed evaluation of where AI can deliver real ROI for your business — and, just as importantly, where it cannot.',
    href: '/ai-readiness-assessment/',
  },
  {
    slug: 'ai-strategy-consulting',
    title: 'AI Strategy Consulting',
    description:
      'Executive guidance to build a practical AI roadmap aligned with your business goals, budget, and risk tolerance.',
    href: '/ai-strategy-consulting/',
  },
  {
    slug: 'microsoft-copilot',
    title: 'Microsoft Copilot',
    description:
      'Deploy, secure, and govern Microsoft Copilot to boost everyday productivity across your team — without compromising data security.',
    href: '/microsoft-copilot-implementation/',
  },
  {
    slug: 'process-automation',
    title: 'Process Automation',
    description:
      'Automate routine workflows to reduce errors, cut operational costs, and free your team for higher-value work.',
    href: '/process-automation/',
  },
  {
    slug: 'healthcare-ai-services',
    title: 'Healthcare AI',
    description:
      'AI solutions purpose-built for the compliance, privacy, and clinical demands of healthcare organizations.',
    href: '/healthcare-ai-services/',
  },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
            AI &amp; Automation
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
            Put AI to work —{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
            >
              safely and strategically.
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-2xl mx-auto mb-10">
            ITSco helps you adopt AI and automation with the governance, strategy, and engineering
            to turn them into real productivity gains — not just hype.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix="ai-automation-hero"
              className="px-8 py-4 rounded-xl text-base"
            />
            <CTAButton
              label="Explore AI services"
              href="#ai-services"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function AIServicesGrid() {
  return (
    <section
      id="ai-services"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_SERVICES.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} description={s.description} href={s.href} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

export default function AIAutomationPage() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <Hero />
        <AIServicesGrid />
        <BookingCTA utmSuffix="ai-automation-bottom" />
      </main>
      <Footer />
    </>
  )
}
