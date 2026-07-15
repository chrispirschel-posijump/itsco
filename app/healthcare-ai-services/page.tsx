import type { Metadata } from 'next'
import HeroImage from '@/components/HeroImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import SpotlightBlock from '@/components/SpotlightBlock'
import NumberedManifesto from '@/components/NumberedManifesto'
import { Map, UserCog, ClipboardCheck, Check, Minus, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare AI Services',
  description: 'ITSco helps healthcare clinical organizations reduce IT risk, improve compliance, and deploy AI safely. HIPAA-native. Fractional CAIO included. Trusted since 1996.',
  alternates: { canonical: 'https://www.itsco.com/healthcare-ai-services/' },
  openGraph: {
    title: 'Healthcare AI Services | ITSco',
    description: 'HIPAA-native AI strategy, infrastructure, deployment, and governance for clinical organizations.',
    url: 'https://www.itsco.com/healthcare-ai-services/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare AI Services',
  provider: {
    '@type': 'Organization',
    name: 'ITSco',
    url: 'https://www.itsco.com/',
  },
  description: 'AI strategy, private LLM environments, managed AI operations, fractional Chief AI Officer, and HIPAA AI compliance for healthcare clinical organizations.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/healthcare-ai-services/',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'AI & Automation', item: 'https://www.itsco.com/ai-automation/' },
    { '@type': 'ListItem', position: 3, name: 'Healthcare AI Services', item: 'https://www.itsco.com/healthcare-ai-services/' },
  ],
}

// ── Hero — Variant B lite, full-bleed healthcare image with light wash ──────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-itsco-paper">
      <HeroImage
        src="/images/hero/industries/national-cancer-institute-X9Iq79PFif4-unsplash.jpg"
        alt="Healthcare professionals in a modern medical facility"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Heavier white wash on the left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-itsco-paper via-itsco-paper/85 to-itsco-paper/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper via-itsco-paper/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-itsco-red/5 via-transparent to-transparent" />

      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Healthcare AI
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-6">
              Healthcare AI.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                Compliant from Day One.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg md:text-xl text-itsco-body leading-relaxed max-w-[44ch] mb-10">
              We help clinical organizations deploy AI safely, prove it pays for itself, and stay HIPAA-compliant from the first day. Every engagement includes a fractional Chief AI Officer and quarterly ROI reporting.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton
                label="Book a Free Healthcare IT Consultation"
                utmSuffix="healthcare-ai-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="See the Framework"
                href="#tiers"
                variant="secondary"
                className="px-8 py-4 rounded-xl text-base"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── Positioning manifesto ───────────────────────────────────────────────────

function PositioningSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              The Promise
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-itsco-dark leading-[1.15] tracking-tight mb-8">
              We don't just advise. We <span className="text-itsco-red">build it, secure it, manage it,</span> and prove it works.
            </h2>
            <p className="text-lg text-itsco-body leading-relaxed">
              ITSco helps clinical organizations deploy AI across their operations — safely, compliantly, and with documented ROI. We provide the fractional Chief AI Officer your leadership needs, the private AI infrastructure your compliance team requires, and the managed operations your IT team cannot do alone — all under one retainer.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Value props — 3 Spotlight Blocks + 3 supporting cards ──────────────────

const SUPPORTING_PROPS = [
  {
    icon: Map,
    title: 'Strategy That Becomes Operations',
    description: 'Unlike advisory firms that hand you a roadmap and leave, ITSco owns the execution. From data infrastructure through AI deployment, compliance management, and continuous improvement.',
  },
  {
    icon: UserCog,
    title: 'Fractional CAIO Embedded',
    description: 'Get Chief AI Officer-level strategic guidance at a fraction of the cost of a full-time hire. Vendor evaluation, board communication, and leadership-level AI judgment included in every retainer.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance as a Managed Service',
    description: 'We monitor your AI compliance every day. Audit trails, policy reviews, and risk assessments updated as regulations evolve.',
  },
]

function ValuePropsSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-16 mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              What You Get
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              AI built for the way <span className="text-itsco-red">healthcare actually works.</span>
            </h2>
          </div>
        </FadeUp>

        {/* Three Spotlight Blocks alternating left/right */}
        <div className="space-y-20 md:space-y-24 mb-20">
          <FadeUp>
            <SpotlightBlock
              eyebrow="HIPAA-Native by Design"
              title="Compliance is a foundation, not a feature."
              description="Every AI service we deploy is architected with HIPAA, HITECH, and clinical data governance as foundational constraints. Not bolted on afterward. PHI never touches unsanctioned AI systems."
              image="/images/supporting/industries/accuray-AhTXFlSf5xI-unsplash.jpg"
              imageAlt="Clinical environment where compliance and patient data protection are core requirements"
              side="right"
            />
          </FadeUp>

          <FadeUp>
            <SpotlightBlock
              eyebrow="Private AI for Sensitive Data"
              title="Your patient data stays inside your walls."
              description="We deploy private AI environments where clinical data never touches the public cloud. Full AI capability with zero cloud data exposure. The only path that works for the most sensitive clinical workloads."
              image="/images/supporting/industries/daria-pimkina-tYaccl19A3Q-unsplash.jpg"
              imageAlt="Secure data infrastructure for clinical AI workflows"
              side="left"
            />
          </FadeUp>

          <FadeUp>
            <SpotlightBlock
              eyebrow="ROI You Can Take to the Board"
              title="We baseline before we build."
              description="Every engagement includes documented productivity gains, cost avoidance modeling, and quarterly business reviews with concrete numbers. Your CFO sees what AI is returning. Your board sees the trajectory."
              image="/images/supporting/industries/austin-distel-DS1hZ4xzD7M-unsplash.jpg"
              imageAlt="Healthcare leadership reviewing quarterly business outcomes"
              side="right"
            />
          </FadeUp>
        </div>

        {/* Three supporting cards */}
        <FadeUp>
          <div className="pt-12 border-t border-[#EBEBEB]/60">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#555] mb-8 text-center">
              Plus the operational backbone
            </p>
          </div>
        </FadeUp>
        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SUPPORTING_PROPS.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-itsco-red/10 flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon size={24} className="text-itsco-red" />
                </div>
                <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">
                  {v.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Comparison table ────────────────────────────────────────────────────────

type CompCell = { label: string; tone: 'positive' | 'neutral' | 'negative' }

const COMPARISON_ROWS: { capability: string; mspr: CompCell; advisory: CompCell; itsco: CompCell }[] = [
  {
    capability: 'AI Strategy & Roadmap',
    mspr:     { label: 'None',         tone: 'negative' },
    advisory: { label: 'Strong',       tone: 'positive' },
    itsco:    { label: 'Full',         tone: 'positive' },
  },
  {
    capability: 'Managed AI Operations',
    mspr:     { label: 'Limited',           tone: 'neutral'  },
    advisory: { label: 'None post-project', tone: 'negative' },
    itsco:    { label: 'Full',              tone: 'positive' },
  },
  {
    capability: 'Private / Local LLM Management',
    mspr:     { label: 'No',  tone: 'negative' },
    advisory: { label: 'No',  tone: 'negative' },
    itsco:    { label: 'Yes', tone: 'positive' },
  },
  {
    capability: 'HIPAA AI Compliance Platform',
    mspr:     { label: 'No',     tone: 'negative' },
    advisory: { label: 'Ad hoc', tone: 'neutral'  },
    itsco:    { label: 'Yes',    tone: 'positive' },
  },
  {
    capability: 'Fractional CAIO Embedded',
    mspr:     { label: 'No',                tone: 'negative' },
    advisory: { label: 'Engagement only',   tone: 'neutral'  },
    itsco:    { label: 'Yes',               tone: 'positive' },
  },
  {
    capability: 'MCP / Agentic AI Operations',
    mspr:     { label: 'No',  tone: 'negative' },
    advisory: { label: 'No',  tone: 'negative' },
    itsco:    { label: 'Yes', tone: 'positive' },
  },
  {
    capability: 'Documented ROI Tracking',
    mspr:     { label: 'No',     tone: 'negative' },
    advisory: { label: 'Varies', tone: 'neutral'  },
    itsco:    { label: 'Yes',    tone: 'positive' },
  },
  {
    capability: 'SMB-Accessible Pricing',
    mspr:     { label: 'Yes', tone: 'positive' },
    advisory: { label: 'No',  tone: 'negative' },
    itsco:    { label: 'Yes', tone: 'positive' },
  },
]

function CellIcon({ tone }: { tone: CompCell['tone'] }) {
  if (tone === 'positive') return <Check size={14} className="text-itsco-red flex-shrink-0" />
  if (tone === 'neutral') return <Minus size={14} className="text-[#555] flex-shrink-0" />
  return <X size={14} className="text-[#555] flex-shrink-0" />
}

function ComparisonSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Why ITSco
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              We do what advisory firms <span className="text-itsco-red">won't.</span> And what traditional MSPs <span className="text-itsco-red">can't.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              ITSco delivers AI strategy and operations as one continuous engagement. From the first assessment through every quarterly review, the same team owns the outcome.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <div className="bg-itsco-paper border border-black/20 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Header row — order: Capability (dark) · ITSco (highlight) · Traditional MSPs · Big 4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black/20">
              <div className="px-6 py-4 md:py-5 col-span-2 md:col-span-1 bg-itsco-dark">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">What You Need</p>
              </div>
              <div className="col-span-2 md:col-span-1 px-6 py-4 md:py-5 border-t md:border-t-0 border-black/20 bg-itsco-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-itsco-red">ITSco</p>
              </div>
              <div className="px-6 py-4 md:py-5 border-t md:border-t-0 border-black/20">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-itsco-dark">Traditional MSPs</p>
              </div>
              <div className="px-6 py-4 md:py-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-itsco-dark">Big 4 / Advisory</p>
              </div>
            </div>

            {/* Rows — desktop: 4-col Capability·ITSco·MSPs·Big4. Mobile: Capability (full) → ITSco (full, highlight) → MSPs|Big4 */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.capability}
                className={`grid grid-cols-2 md:grid-cols-4 ${i < COMPARISON_ROWS.length - 1 ? 'border-b border-black/20' : ''}`}
              >
                <div className="px-6 py-5 col-span-2 md:col-span-1 bg-itsco-dark">
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-white leading-snug">{row.capability}</p>
                </div>
                <div className="px-6 py-5 col-span-2 md:col-span-1 border-t md:border-t-0 border-black/20 bg-itsco-card flex items-center gap-2">
                  <CellIcon tone={row.itsco.tone} />
                  <p className="text-sm font-medium text-itsco-body">{row.itsco.label}</p>
                </div>
                <div className="px-6 py-5 border-t md:border-t-0 border-black/20 flex items-center gap-2">
                  <CellIcon tone={row.mspr.tone} />
                  <p className="text-sm text-itsco-body">{row.mspr.label}</p>
                </div>
                <div className="px-6 py-5 flex items-center gap-2">
                  <CellIcon tone={row.advisory.tone} />
                  <p className="text-sm text-itsco-body">{row.advisory.label}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Service tiers ───────────────────────────────────────────────────────────

const TIERS = [
  {
    name: 'ClinicalAI Foundation',
    label: 'Entry tier',
    description: 'AI strategy, readiness assessment, and fractional CAIO retainer. Includes AI readiness assessment, clinical data maturity audit, shadow AI discovery, and 12-month AI roadmap.',
    bestFor: 'Organizations with no current AI strategy or those using AI tools without governance.',
  },
  {
    name: 'ClinicalAI Infrastructure',
    label: 'Most common entry',
    description: 'We get your clinical data ready for AI. EHR integration, secure data pipelines, and PHI controls all done before any AI is deployed.',
    bestFor: 'Builds the data foundation AI requires before deployment.',
  },
  {
    name: 'ClinicalAI Deploy',
    label: 'Advanced',
    description: 'We deploy and manage the AI tools your team uses. Microsoft Copilot, Azure OpenAI, and private on-premise models built for clinical workflows.',
    bestFor: 'Organizations ready to activate AI across clinical and administrative workflows.',
  },
  {
    name: 'ClinicalAI Command',
    label: 'Full embed',
    description: 'Fully embedded AI operations covering governance, ROI tracking, and continuous improvement. Includes the ClinicalAI Compliance Platform.',
    bestFor: 'Mature organizations operating AI across multiple workflows who need governance and board-level ROI accountability.',
  },
  {
    number: '+',
    name: 'ClinicalAI Compliance Platform',
    label: 'Add-on module · Available from Tier 2',
    description: 'Continuous HIPAA AI compliance governance, risk management, and audit readiness — managed as a service. Covers AI policy lifecycle, BAA management for every AI vendor, NIST AI RMF alignment, and tamper-evident audit trails ready for an OCR inquiry.',
    bestFor: 'Healthcare organizations that need defensible AI compliance documentation — continuously, not just at audit time.',
  },
]

function TiersSection() {
  return (
    <section id="tiers" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              How We Engage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              Four tiers and one platform. <span className="text-itsco-red">Built for where you are.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Pick the entry point that matches your readiness. We design every engagement to grow with you.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <NumberedManifesto
            items={TIERS.map((t) => ({
              number: t.number,
              eyebrow: t.label,
              title: t.name,
              description: t.description,
              meta: `Best for: ${t.bestFor}`,
            }))}
          />
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mt-16 max-w-3xl mx-auto border-l-2 border-itsco-red pl-6 py-2">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
              Why this matters
            </p>
            <p className="text-base text-itsco-body leading-relaxed italic">
              OCR is actively investigating AI-related HIPAA violations. FDA is expanding AI/ML regulation for clinical decision support. Payers are beginning to require AI governance documentation. The Compliance Platform keeps you defensible — continuously, not just at audit time.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── ROI proof + EmergeOrtho testimonial (combined) ─────────────────────────

function ROIProofSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-28 lg:pb-32">
        <FadeUp>
          <div className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)] border border-white/10 rounded-2xl p-10 md:p-14 max-w-5xl mx-auto shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3 text-center">
              The Outcomes
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-[1.15] tracking-tight mb-10 text-center">
              ROI tracked from day one.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight mb-3 whitespace-nowrap">
                  30&ndash;40%
                </p>
                <p className="text-sm text-white/60 leading-snug">reduction in time-to-chart with AI-assisted documentation</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight mb-3 whitespace-nowrap">
                  $150&ndash;220K
                </p>
                <p className="text-sm text-white/60 leading-snug">annualized labor cost avoidance for a 100-person clinical organization</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight mb-3 whitespace-nowrap">
                  3&ndash;5x
                </p>
                <p className="text-sm text-white/60 leading-snug">target ROI on engagement fees within 18 months</p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 max-w-3xl mx-auto text-center">
              <div className="w-8 h-[3px] bg-itsco-red mx-auto mb-6" />
              <p className="text-lg md:text-xl text-white leading-[1.5] font-medium mb-6">
                &ldquo;ITSco has provided our technical support for the past 22 years. They are reliable, honest, and have been a true partner through all our growth.&rdquo;
              </p>
              <p className="text-sm text-white/60">
                <span className="font-semibold text-white/85">Chris Adkins</span>
                <span className="mx-2 text-white/30">&middot;</span>
                Chief Administrative Officer, EmergeOrtho
              </p>
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
            Take Action
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            One conversation. Real numbers.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="healthcare-ai-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HealthcareAIServicesPage() {
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

      {/* Chapter 1 — Identity */}
      <Hero />
      <PositioningSection />

      {/* Chapter 2 — Proof */}
      <ValuePropsSection />
      <ComparisonSection />

      {/* Mid CTA — inflection point between "why us" and "how we engage" */}
      <MidCTA />

      {/* Chapter 3 — Engagement */}
      <TiersSection />
      <ROIProofSection />

      {/* Chapter 4 — Final close */}
      <FadeUp>
        <BookingCTA
          utmSuffix="healthcare-ai-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      <Footer />
    </>
  )
}
