import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import { FadeUp, StaggerChildren, CountUp } from '@/components/ScrollAnimations'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { DollarSign, Clock, ShieldCheck, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The ROI of Managed IT Services',
  description: 'Is your IT investment actually paying for itself? ITSco delivers documented ROI across four dimensions every quarter. See what your MSP should be measuring.',
  alternates: { canonical: 'https://www.itsco.com/maximize-roi-with-managed-it-services/' },
  openGraph: {
    title: 'The ROI of Managed IT Services | ITSco',
    description: 'Documented ROI across four dimensions every quarter. See what your MSP should be measuring.',
    url: 'https://www.itsco.com/maximize-roi-with-managed-it-services/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT ROI Assessment',
  provider: {
    '@type': 'Organization',
    name: 'ITSco',
    url: 'https://www.itsco.com/',
  },
  description: 'Quarterly business reviews documenting IT ROI across financial savings, downtime avoidance, risk reduction, and business enablement.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/maximize-roi-with-managed-it-services/',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.itsco.com/services/' },
    { '@type': 'ListItem', position: 3, name: 'Maximize IT ROI', item: 'https://www.itsco.com/maximize-roi-with-managed-it-services/' },
  ],
}

// ── Hero ────────────────────────────────────────────────────────────────────

const HERO_STATS: { value: number; decimals: boolean; prefix: string; suffix: string; label: string; source: string }[] = [
  { value: 5600, decimals: false, prefix: '$', suffix: '',  label: 'lost per minute of IT downtime',     source: 'Gartner' },
  { value: 43,   decimals: false, prefix: '$', suffix: 'B', label: 'in business email fraud 2016-2022',  source: 'FBI Internet Crime Report' },
  { value: 35,   decimals: false, prefix: '',  suffix: '%', label: 'of IT spend wasted on redundant tools', source: 'industry avg.' },
  { value: 27,   decimals: false, prefix: '',  suffix: '+', label: 'years ITSco has delivered IT ROI',    source: 'ITSco' },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-44">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              ROI &amp; Strategy
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-6">
              Your IT should{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                pay for itself.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg md:text-xl text-itsco-body leading-relaxed max-w-[52ch] mx-auto mt-6">
              A world-class MSP delivers measurable value across four dimensions every quarter. Financial savings, downtime avoidance, risk reduction, and business enablement. Here is what to demand from your IT partner.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CTAButton
                label="Book a Free ROI Assessment"
                utmSuffix="roi-of-managed-it-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="See the Four Dimensions"
                href="#dimensions"
                variant="secondary"
                className="px-8 py-4 rounded-xl text-base"
              />
            </div>
          </FadeUp>

          {/* 4-stat callout */}
          <FadeUp delay={400}>
            <div className="mt-14 bg-itsco-card border border-[#EBEBEB] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[#EBEBEB] overflow-hidden">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="px-5 md:px-6 py-7 text-left">
                  <CountUp
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="text-2xl md:text-3xl font-extrabold text-itsco-dark leading-none tracking-tight whitespace-nowrap block mb-3"
                  />
                  <p className="text-xs text-[#555] leading-snug mb-2">
                    {s.label}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#555]">
                    {s.source}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── 4 ROI Dimensions ───────────────────────────────────────────────────────

const DIMENSIONS = [
  {
    icon: DollarSign,
    title: 'Financial Savings',
    description: 'MSP services average $100-$250 per user per month. A full-time IT hire costs an average of $97,430 per year before benefits, training, or turnover. The math is straightforward. Standardized tools, consolidated vendors, and reduced redundant spend typically yield an additional 10-20% savings annually.',
  },
  {
    icon: Clock,
    title: 'Downtime Avoidance',
    description: 'Every minute of system downtime costs an average of $5,600 in lost productivity. One avoided outage pays for months of managed services. Proactive 24/7 monitoring, real-time alerting, and auto-remediation exist precisely for this reason. Prevention is always cheaper than recovery.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Reduction',
    description: 'The average SMB breach costs between $120K and $1.2M. Managed security services run $50-$150 per user per month. Documented compliance and tested incident response plans reduce cyber insurance premiums by 15-30%. The question is not whether you can afford cybersecurity. It is whether you can afford a breach.',
  },
  {
    icon: Rocket,
    title: 'Business Enablement',
    description: 'Deloitte research shows firms deploying AI effectively cut operating costs by approximately 15%. McKinsey puts the ROI at 10x for organizations that embed AI into core processes. A strategic MSP builds the foundation AI requires. Clean data, integrated systems, and governed access.',
  },
]

function DimensionsSection() {
  return (
    <section id="dimensions" style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14 mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              The Four Dimensions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              IT ROI is more than a <span className="text-itsco-red">monthly invoice.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DIMENSIONS.map((d, i) => {
            const Icon = d.icon
            return (
              <div
                key={d.title}
                className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-itsco-red/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-itsco-red" />
                  </div>
                  <span className="text-xs font-bold tabular-nums text-[#999]">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-itsco-dark leading-snug mb-3">
                  {d.title}
                </h3>
                <p className="text-sm md:text-base text-[#555] leading-relaxed flex-1">
                  {d.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── QBR sample ─────────────────────────────────────────────────────────────

const QBR_METRICS = [
  { metric: 'Tickets resolved',         result: '142 tickets, SLA met 98.5%' },
  { metric: 'Avg. resolution time',     result: '2.1 hours, 0 major outages' },
  { metric: 'System uptime',            result: '99.94% availability' },
  { metric: 'Threats blocked',          result: '1,847 attempts' },
  { metric: 'Phishing attempts caught', result: '23 attempts neutralized' },
  { metric: 'MFA adoption',             result: '94% of users active' },
  { metric: 'Avoided costs',            result: '$31,200 this period' },
  { metric: 'Cost per user trend',      result: 'Down 4% vs. prior quarter' },
]

function QBRSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-10 mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Quarterly Business Review
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              What your MSP should deliver <span className="text-itsco-red">every quarter.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              A world-class MSP does not hand you a ticket report. They hand you a business review that answers: what did we save you, what risks did we prevent, and what do we do next?
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg"
              alt="Business leader reviewing IT performance dashboards and metrics"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <div className="bg-itsco-card border border-[#EBEBEB] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] max-w-5xl mx-auto overflow-hidden">
            {/* Header */}
            <div className="px-7 md:px-10 py-6 border-b border-black/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-itsco-red mb-1">
                  Sample Q3 Report
                </p>
                <p className="text-sm text-itsco-body">Documented results delivered to a real client this quarter</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.1em] text-[#555]">Net ROI this period</p>
                <p className="text-3xl md:text-4xl font-extrabold text-itsco-dark leading-none tracking-tight">271%</p>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#EBEBEB]">
              <div className="divide-y divide-[#EBEBEB]">
                {QBR_METRICS.slice(0, 4).map((row) => (
                  <div key={row.metric} className="px-7 md:px-10 py-5 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.08em] font-bold text-[#555]">{row.metric}</p>
                    <p className="text-sm font-semibold text-itsco-dark text-right">{row.result}</p>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-[#EBEBEB]">
                {QBR_METRICS.slice(4, 8).map((row) => (
                  <div key={row.metric} className="px-7 md:px-10 py-5 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.08em] font-bold text-[#555]">{row.metric}</p>
                    <p className="text-sm font-semibold text-itsco-dark text-right">{row.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Baseline metrics ───────────────────────────────────────────────────────

const BASELINE_METRICS = [
  { title: 'Cost per user per month',          desc: 'Tracks whether your MSP investment is trending in the right direction.' },
  { title: 'Downtime frequency and duration',  desc: 'Every avoided outage is measurable ROI.' },
  { title: 'Ticket volume and MTTR',           desc: 'Mean time to resolution should improve quarter over quarter.' },
  { title: 'Security posture score',           desc: 'Benchmarks risk exposure and tracks improvement toward compliance.' },
  { title: 'Application and license inventory', desc: 'The average company wastes 35% on unused tools. We find them.' },
  { title: 'Vendor spend analysis',            desc: 'Consolidation typically yields 10-20% savings annually.' },
]

function BaselineSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Day One Baseline
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              Without a baseline, <span className="text-itsco-red">you cannot prove ROI.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              A great MSP sets these benchmarks on day one and reports against them at every quarterly business review. If your current MSP cannot answer these questions, that is a problem.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {BASELINE_METRICS.map((m) => (
            <div key={m.title} className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-itsco-red mt-2.5 flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-itsco-dark mb-1">{m.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Mid-page CTA ───────────────────────────────────────────────────────────

function MidCTA() {
  return (
    <section
      className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]"
      style={{
        ['--color-itsco-cta' as string]: '#CA3C27',
        ['--color-itsco-cta-hover' as string]: '#B4311E',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
            See Where You Stand
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            One 30-minute session. Your gaps, your quick wins, your roadmap.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="roi-of-managed-it-mid"
            label="Book a Free ROI Assessment"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Efficiency Case ────────────────────────────────────────────────────────

const EFFICIENCY = [
  {
    title: 'IT Standardization',
    headline: '163 apps. 35% of IT spend on the wrong ones.',
    description: 'The average company runs 163 applications, with 35% of IT spend going to redundant or unused tools. Your MSP should be identifying and eliminating this waste every year.',
  },
  {
    title: 'Single Sign-On + MFA',
    headline: 'Half your tickets are password resets.',
    description: '50% of helpdesk tickets are password resets. SSO with MFA eliminates this, delivers a 20-30% reduction in helpdesk volume, and pairs with MFA to satisfy cyber insurance requirements. Typical payback: Year 1.',
  },
  {
    title: 'AI Automation',
    headline: 'AI cuts manual work 30-50% on document-heavy tasks.',
    description: 'AI eliminates manual, repetitive tasks across onboarding, unstructured data extraction, ticket routing, and reporting. AI unstructured data extraction alone reduces manual labor 30-50% on document-heavy workflows.',
  },
]

function EfficiencySection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                Where ROI Compounds
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
                Three places ROI <span className="text-itsco-red">stacks year over year.</span>
              </h2>
              <p className="text-base md:text-lg text-itsco-body leading-relaxed">
                Standardization, SSO, and AI automation are the three highest-leverage moves we make for clients. Each one pays for itself. Together they compound.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg"
                alt="ITSco team mapping technology investments to business outcomes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </FadeUp>

        <StaggerChildren stagger={100} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EFFICIENCY.map((e) => (
            <div
              key={e.title}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-itsco-red mb-3">
                {e.title}
              </p>
              <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-3">
                {e.headline}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">
                {e.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── 6 Questions to Ask Your MSP ─────────────────────────────────────────────

const QUESTIONS = [
  'What is my cost per user, and is it trending down?',
  'What downtime or incidents did you prevent this quarter?',
  'What is my current security posture score?',
  'Which redundant applications am I paying for unnecessarily?',
  'What is my technology roadmap for the next 12-24 months?',
  'Am I AI-ready? If not, what do I need to do first?',
]

function QuestionsSection() {
  return (
    <section style={{ background: 'var(--color-itsco-paper)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              The Test
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              Six questions that <span className="text-itsco-red">reveal everything.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Ask your current MSP these. If they cannot answer them, you have a partner problem, not a technology problem.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="divide-y divide-[#EBEBEB] max-w-3xl">
          {QUESTIONS.map((q, i) => (
            <div key={q} className="flex items-start gap-5 py-5">
              <span className="text-xs font-bold tabular-nums text-itsco-red mt-1 w-6 flex-shrink-0">
                0{i + 1}
              </span>
              <p className="text-lg md:text-xl text-itsco-dark leading-snug font-medium">
                {q}
              </p>
            </div>
          ))}
        </StaggerChildren>

        <FadeUp delay={400}>
          <p className="mt-12 text-base md:text-lg text-itsco-body leading-relaxed max-w-3xl">
            If your IT provider cannot answer these six questions, it is time for a conversation with ITSco.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MaximizeROIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />

      {/* Chapter 1 — The Frame */}
      <Hero />
      <DimensionsSection />

      {/* Chapter 2 — How We Measure */}
      <QBRSection />
      <BaselineSection />

      {/* Mid CTA — inflection point */}
      <MidCTA />

      {/* Chapter 3 — Where ROI Compounds */}
      <EfficiencySection />
      <QuestionsSection />

      {/* Chapter 4 — Final close */}
      <FadeUp>
        <BookingCTA
          utmSuffix="roi-of-managed-it-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      <Footer />
    </>
  )
}
