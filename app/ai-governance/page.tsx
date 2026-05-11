import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import { FadeUp, StaggerChildren, CountUp } from '@/components/ScrollAnimations'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { Eye, ShieldOff, AlertTriangle, FileCheck, Users, Search, ListChecks, ShieldCheck, BarChart3, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Governance for Business | ITSco',
  description: 'Shadow AI is already inside your organization. ITSco helps you discover, control, and govern every AI tool your employees use before it becomes a breach or a compliance failure.',
  alternates: { canonical: 'https://www.itsco.com/ai-governance/' },
  openGraph: {
    title: 'AI Governance for Business | ITSco',
    description: 'Shadow AI is already inside your organization. Discover, control, and govern every AI tool your employees use.',
    url: 'https://www.itsco.com/ai-governance/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Governance',
  provider: {
    '@type': 'Organization',
    name: 'ITSco',
    url: 'https://www.itsco.com/',
  },
  description: 'Shadow AI discovery, classification, real-time prompt and response inspection, and continuous compliance reporting for SOC 2, HIPAA, and GDPR.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/ai-governance/',
}

// ── Hero stats ───────────────────────────────────────────────────────────────

const HERO_STATS: { value: number; decimals: boolean; prefix: string; suffix: string; label: string; source: string }[] = [
  { value: 75,  decimals: false, prefix: '',  suffix: '%',  label: 'of employees use AI at work without IT approval', source: 'McKinsey, 2025' },
  { value: 5.2, decimals: true,  prefix: '$', suffix: 'M',  label: 'avg. breach cost with shadow AI. 40% higher than governed environments', source: 'IBM Security, 2025' },
  { value: 96,  decimals: false, prefix: '',  suffix: '%',  label: 'of AI tools run in the browser, beyond endpoint and network DLP', source: 'Gartner, 2025' },
  { value: 1,   decimals: false, prefix: '', suffix: '',   label: 'in 5 employees paste PII, source code, and financials into AI weekly', source: 'Cyberhaven, 2025' },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-[90vh] flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-44">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              AI &amp; Automation
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-6 max-w-[18ch] mx-auto">
              AI Governance for the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                Modern Enterprise.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-[52ch] mx-auto mt-6">
              Shadow AI is already inside your organization. Discover, control, and govern every AI tool your employees use before it becomes a breach, a compliance failure, or a headline.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CTAButton
                label="Book a Free AI Governance Assessment"
                utmSuffix="ai-governance-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="See the Framework"
                href="#framework"
                variant="secondary"
                className="px-8 py-4 rounded-xl text-base"
              />
            </div>
          </FadeUp>

          {/* 4-stat callout */}
          <FadeUp delay={400}>
            <div className="mt-14 bg-white border border-[#EBEBEB] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[#EBEBEB] overflow-hidden">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="px-5 md:px-6 py-7 text-left">
                  <CountUp
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="text-3xl md:text-4xl font-extrabold text-[#111111] leading-none tracking-tight whitespace-nowrap block mb-3"
                  />
                  <p className="text-xs text-[#555] leading-snug mb-2">
                    {s.label}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#BBBBBB]">
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

// ── 5 Governance Gaps ───────────────────────────────────────────────────────

const GAPS = [
  {
    icon: Eye,
    title: "You Can't Govern What You Can't See",
    description: "Employees use ChatGPT, Gemini, Claude, Perplexity, DeepSeek, and niche AI tools without IT knowledge. Traditional asset inventories miss browser-based tools entirely.",
  },
  {
    icon: ShieldOff,
    title: "Blocking AI Is Not a Strategy",
    description: "Blanket bans push usage underground and destroy productivity. Effective governance enables AI with guardrails, not walls employees route around.",
  },
  {
    icon: AlertTriangle,
    title: "Sensitive Data Leaks One Prompt at a Time",
    description: "Financial data, PII, medical records, and source code are pasted into AI prompts daily, bypassing your DLP stack entirely inside a browser tab.",
  },
  {
    icon: FileCheck,
    title: "Compliance Now Requires AI Governance",
    description: "SOC 2, HIPAA, GDPR, EU AI Act, and NIST AI RMF require documented AI policies, audit trails, and data handling controls. Gaps leave your organization exposed.",
  },
  {
    icon: Users,
    title: "Every Department Has a Different Risk Profile",
    description: "Healthcare, finance, and legal teams face different AI risks. You need per-department, per-user, per-tool controls from a single management plane.",
  },
]

function GovernanceGaps() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, #FDF5F3 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14 mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              The 5 AI Governance <span className="text-[#CA3C27]">Gaps.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GAPS.map((g) => {
            const Icon = g.icon
            return (
              <div
                key={g.title}
                className="h-full flex flex-col bg-white border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#CA3C27]/10 flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon size={24} className="text-[#CA3C27]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-3">
                  {g.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">
                  {g.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Framework — 4 layers ────────────────────────────────────────────────────

const FRAMEWORK = [
  {
    icon: Search,
    layer: '01',
    name: 'Discover',
    title: 'AI Discovery & Shadow AI Inventory',
    description: 'Automatic detection and classification of every AI tool accessed across your organization. Real-time dashboards reveal which tools are in use, by whom, and what data is involved.',
  },
  {
    icon: ListChecks,
    layer: '02',
    name: 'Classify',
    title: 'Risk Classification & Policy Engine',
    description: 'Categorize AI tools into approved, conditional, and blocked tiers. Enforce granular controls per user, per department, and per tool. Tailored to your compliance requirements.',
  },
  {
    icon: ShieldCheck,
    layer: '03',
    name: 'Protect',
    title: 'Real-Time Prompt & Response Inspection',
    description: 'AI-powered inspection scans prompts and responses for PII, PHI, financial data, and proprietary content. Sensitive tokens are redacted before leaving the browser. Full audit logs maintained.',
  },
  {
    icon: BarChart3,
    layer: '04',
    name: 'Govern',
    title: 'Continuous Monitoring & Compliance Reporting',
    description: 'Per-user AI risk scoring, behavioral trend analysis, and automated reports mapped to SOC 2, HIPAA, and GDPR. Executive dashboards built for quarterly business reviews.',
  },
]

function FrameworkSection() {
  return (
    <section id="framework" style={{ background: '#FDF5F3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-10 mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              The Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4">
              The ITSco AI Governance <span className="text-[#CA3C27]">Framework.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              Four layers. Complete coverage. No agents required.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/supporting/industries/christin-hume-Hcfwew744z4-unsplash.jpg"
              alt="Business professional reviewing AI usage and governance dashboards"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDF5F3]/30 via-transparent to-transparent" />
          </div>
        </FadeUp>

        <StaggerChildren stagger={120} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FRAMEWORK.map((l) => {
            const Icon = l.icon
            return (
              <div
                key={l.layer}
                className="h-full bg-white border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-bold tabular-nums text-[#CCCCCC]">{l.layer}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#CA3C27] mb-2">
                  {l.name}
                </p>
                <h3 className="text-base font-semibold text-[#111111] leading-snug mb-3">
                  {l.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">
                  {l.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Governance vs Blocking comparison ──────────────────────────────────────

const COMPARISON = [
  { capability: 'AI Tool Visibility', blocking: 'Blind to all usage', itsco: 'Full inventory of every AI tool, user, and session' },
  { capability: 'Data Protection', blocking: 'Assumes no data leaves (false)', itsco: 'Real-time prompt inspection and auto-redaction' },
  { capability: 'Productivity Impact', blocking: 'Blocks all AI productivity gains', itsco: 'Preserves productivity with smart guardrails' },
  { capability: 'Compliance Readiness', blocking: 'No audit trail exists', itsco: 'Automated reports for SOC 2, HIPAA, GDPR' },
  { capability: 'Policy Flexibility', blocking: 'One-size-fits-all block', itsco: 'Per-client, per-tool, per-user granular policies' },
]

function ComparisonSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #FDF5F3 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              The Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4">
              Why governance beats <span className="text-[#CA3C27]">blocking.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              Bans push AI underground. Governance brings it into the light, where it can be measured, controlled, and made safe.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <div className="bg-white border border-[#EBEBEB] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#EBEBEB] bg-[#FAFAFA]">
              <div className="px-6 py-4 md:py-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#888]">Capability</p>
              </div>
              <div className="px-6 py-4 md:py-5 border-t md:border-t-0 md:border-l border-[#EBEBEB] flex items-center gap-2">
                <X size={14} className="text-[#888] flex-shrink-0" />
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#888]">Block-Everything Approach</p>
              </div>
              <div className="px-6 py-4 md:py-5 border-t md:border-t-0 md:border-l border-[#EBEBEB] flex items-center gap-2">
                <Check size={14} className="text-[#CA3C27] flex-shrink-0" />
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#CA3C27]">ITSco AI Governance</p>
              </div>
            </div>

            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.capability}
                className={`grid grid-cols-1 md:grid-cols-3 ${i < COMPARISON.length - 1 ? 'border-b border-[#EBEBEB]' : ''}`}
              >
                <div className="px-6 py-5 md:py-6">
                  <p className="text-sm font-semibold text-[#111111]">{row.capability}</p>
                </div>
                <div className="px-6 py-5 md:py-6 border-t md:border-t-0 md:border-l border-[#EBEBEB]">
                  <p className="text-sm text-[#888] leading-relaxed">{row.blocking}</p>
                </div>
                <div className="px-6 py-5 md:py-6 border-t md:border-t-0 md:border-l border-[#EBEBEB] bg-[#FDF5F3]/40">
                  <p className="text-sm text-[#404040] leading-relaxed">{row.itsco}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Outcome stats ───────────────────────────────────────────────────────────

const OUTCOMES = [
  { stat: '100%', label: 'Visibility into AI usage across all environments' },
  { stat: '70%',  label: 'Reduction in shadow AI risk within 30 days' },
  { stat: '< 2 min', label: 'Deployment time. No agents required' },
  { stat: '$0',   label: 'Infrastructure changes needed to get started' },
]

function OutcomeStats() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-28">
        <FadeUp>
          <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-2xl p-10 md:p-14 max-w-5xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-3 text-center">
              Outcomes You Can Measure
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-10 text-center">
              What ITSco AI Governance delivers.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {OUTCOMES.map((o) => (
                <div key={o.stat} className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-none tracking-tight mb-3">
                    {o.stat}
                  </p>
                  <p className="text-sm text-[#888] leading-snug">{o.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Mid-page CTA ─────────────────────────────────────────────────────────────

function MidCTA() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-3">
            Stop guessing. Start governing.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            See your shadow AI inventory in under 30 minutes.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="ai-governance-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Why ITSco ────────────────────────────────────────────────────────────────

function WhyITSco() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Why ITSco
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              Managed AI governance. <span className="text-[#CA3C27]">Run by the team that already runs your IT.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-10">
              AI governance is not new technology. It is the same operating discipline we already apply to your network, your endpoints, and your security operations. We extend that rigor to every AI tool your team uses, under the same managed-service model you already trust us for.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl mx-auto">
            {[
              '27+ years managing complex IT environments for SMB and enterprise clients',
              'HIPAA, SOC 2, and GDPR compliance experience embedded in every engagement',
              'No new infrastructure required. Deployment begins in under 2 minutes',
              'Per-user, per-department, per-tool controls from a single management plane',
            ].map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CA3C27] mt-2.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-[#404040] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav variant="light" />

      {/* CHAPTER 1 — Problem */}
      <Hero />
      <GovernanceGaps />

      {/* CHAPTER 2 — Solution */}
      <FrameworkSection />
      <ComparisonSection />
      <OutcomeStats />

      {/* CHAPTER 3 — Action */}
      <MidCTA />
      <WhyITSco />

      <FadeUp>
        <BookingCTA
          utmSuffix="ai-governance-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      <Footer />
    </>
  )
}
