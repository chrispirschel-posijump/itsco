import type { Metadata } from 'next'
import HeroImage from '@/components/HeroImage'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import {
  Compass,
  Map,
  ClipboardCheck,
  Kanban,
  SearchCheck,
  ShieldCheck,
  Scale,
  Target,
  Award,
  Layers,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Strategy & Consulting | vCIO, Roadmaps & Assessments',
  description:
    'ITSco IT strategy and consulting — vCIO leadership, IT roadmaps, assessments, due diligence, and project management that align technology with business goals. Book a free consultation.',
  alternates: { canonical: 'https://www.itsco.com/it-management-consulting/' },
  openGraph: {
    title: 'IT Strategy & Consulting | vCIO, Roadmaps & Assessments | ITSco',
    description:
      'Strategic IT leadership, roadmaps, and assessments that tie technology to business outcomes. Trusted since 1996.',
    url: 'https://www.itsco.com/it-management-consulting/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Strategy & Consulting',
  serviceType: 'IT Management Consulting',
  provider: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
  description:
    'IT strategy and consulting including vCIO/vCTO/vCISO leadership, IT roadmaps, assessments, technology due diligence, project management, and business continuity planning for businesses across NC, SC, and VA.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/it-management-consulting/',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.itsco.com/services/' },
    { '@type': 'ListItem', position: 3, name: 'IT Strategy & Consulting', item: 'https://www.itsco.com/it-management-consulting/' },
  ],
}

const FAQS = [
  {
    question: 'What does IT strategy and consulting actually involve?',
    answerText:
      'It is the work of aligning technology with where the business is headed — virtual IT leadership (vCIO/vCTO/vCISO), multi-year roadmaps, assessments and audits, technology due diligence, project management, and continuity planning. ITSco provides each as a standalone engagement or as an ongoing advisory relationship.',
  },
  {
    question: 'Is ITSco vendor-neutral in its recommendations?',
    answerText:
      'Yes. Our consulting recommendations are made in your interest, not a vendor’s. We work for you — so the advice on platforms, vendors, and investments is objective.',
  },
  {
    question: 'Do we need managed IT from ITSco to use the consulting services?',
    answerText:
      'No. The strategy and consulting services stand on their own — many clients engage us purely as an advisor. Others combine consulting with managed IT so the strategy and the day-to-day delivery sit with one accountable partner.',
  },
  {
    question: 'How do you keep technology advice tied to business outcomes?',
    answerText:
      'Every engagement starts with your business goals, not a technology checklist. Recommendations are framed in terms of cost, risk, revenue, and operational impact — so leadership can act on them with confidence.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answerText },
  })),
}

const HERO_IMAGE = '/images/hero/services/pexels-vlada-karpovich-7433840.jpg'

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex flex-col overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <HeroImage
          src={HERO_IMAGE}
          alt="ITSco advisors guiding a leadership team's IT strategy"
          fill
          priority
          className="object-cover object-center"
          sizes="52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-itsco-paper via-itsco-paper/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper/40 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="lg:max-w-[55%]">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              Strategy &amp; Consulting
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8 break-words">
              Technology decisions,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                made with confidence.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-itsco-body leading-relaxed max-w-[46ch] mb-10">
              Virtual IT leadership, roadmaps, assessments, and due diligence — ITSco brings 25+ years
              of judgment to the technology decisions that shape your business. Strategy tied to
              outcomes, not just tools.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="it-management-consulting-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="Explore consulting services"
                href="#consulting-services"
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

function IntroSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              The Promise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-8">
              A trusted advisor for{' '}
              <span className="text-itsco-red">every technology decision.</span>
            </h2>
            <p className="text-lg text-itsco-body leading-relaxed">
              Most technology problems are really decision problems — what to invest in, in what
              order, and why. IT strategy and consulting answers those questions through
              executive-level guidance delivered by virtual CIO, CTO, and CISO leadership: roadmap
              planning, honest assessments, technology due diligence for M&amp;A, ROI measurement,
              and project oversight. ITSco brings 25+ years of judgment to the technology decisions
              that shape your business — strategy tied to outcomes, not just tools.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: Compass,
    title: 'Strategic Leadership',
    description: 'vCIO, vCTO, vCISO, and fractional CTO guidance that aligns IT with the business.',
  },
  {
    icon: Map,
    title: 'IT Roadmapping',
    description: 'Prioritized, costed multi-year plans that turn strategy into a sequence of moves.',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessments & Audits',
    description: 'Honest evaluations of infrastructure, security, compliance, and IT ROI.',
  },
  {
    icon: Kanban,
    title: 'Project Management',
    description: 'Experienced technical project managers who deliver IT initiatives on time and budget.',
  },
  {
    icon: SearchCheck,
    title: 'Technology Due Diligence',
    description: 'Clear technical assessment of acquisition targets — risk, cost, and integration.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Continuity',
    description: 'Business continuity planning that keeps you running when disruption strikes.',
  },
]

function FeaturesSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Guidance across{' '}
              <span className="text-itsco-red">every technology question.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-itsco-red/10 flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon size={24} className="text-itsco-red" />
                </div>
                <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2">{f.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">{f.description}</p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

const ADVANTAGES = [
  {
    icon: Scale,
    title: 'Vendor-neutral',
    description: 'Recommendations made in your interest — not a vendor’s commission.',
  },
  {
    icon: Target,
    title: 'Business-first',
    description: 'Advice framed in cost, risk, and revenue — not just technology.',
  },
  {
    icon: Award,
    title: '25+ years of judgment',
    description: 'Decades of guiding businesses through technology change and growth.',
  },
  {
    icon: Layers,
    title: 'One advisor, every stage',
    description: 'Strategy, delivery, and continuity under a single accountable partner.',
  },
]

function AdvantagesSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              The ITSco Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              An advisor that works{' '}
              <span className="text-itsco-red">for you.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADVANTAGES.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-xl bg-itsco-dark flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-itsco-dark leading-snug mb-3">{a.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">{a.description}</p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

const SUB_SERVICES = [
  {
    number: '01',
    title: 'vCIO, vCTO, vCISO & vCAIO Services',
    description: 'Virtual C-level IT leadership that aligns technology with business strategy.',
    href: '/vcio-vcto-vciso-services/',
  },
  {
    number: '02',
    title: 'Fractional CTO Services',
    description: 'Hands-on senior technology leadership scaled to your size and budget.',
    href: '/fractional-cto-services/',
  },
  {
    number: '03',
    title: 'IT Roadmap Planning',
    description: 'A prioritized, costed multi-year plan that turns strategy into sequenced moves.',
    href: '/it-roadmap-planning/',
  },
  {
    number: '04',
    title: 'IT Assessments & Strategies',
    description: 'In-depth evaluations of infrastructure, security, and compliance with a roadmap.',
    href: '/it-assessments-strategies/',
  },
  {
    number: '05',
    title: 'IT ROI Assessment',
    description: 'A clear-eyed look at what your IT spend delivers — and where value is leaking.',
    href: '/it-roi-assessment/',
  },
  {
    number: '06',
    title: 'Technology Due Diligence',
    description: 'Clear, actionable technology assessment for investors and acquirers.',
    href: '/tech-due-diligence-for-businesses/',
  },
  {
    number: '07',
    title: 'IT Due Diligence for M&A',
    description: 'Dedicated IT due diligence and integration planning for mergers and acquisitions.',
    href: '/it-due-diligence-mergers-acquisitions/',
  },
  {
    number: '08',
    title: 'Technical Project Management',
    description: 'Experienced TPMs who deliver complex IT projects on time and on budget.',
    href: '/technical-project-management/',
  },
  {
    number: '09',
    title: 'Business Continuity Planning',
    description: 'A tested plan to keep critical operations running through any disruption.',
    href: '/business-continuity-planning/',
  },
  {
    number: '10',
    title: 'AI Strategy Consulting',
    description: 'Executive guidance to build a practical AI roadmap aligned with your business goals, budget, and risk tolerance.',
    href: '/ai-strategy-consulting/',
  },
]

function SubServicesSection() {
  return (
    <section
      id="consulting-services"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-16 border-b border-[#EBEBEB]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                Explore Strategy &amp; Consulting
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
                Drill into <span className="text-itsco-red">any engagement.</span>
              </h2>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-[36ch] md:text-right">
              Each consulting service stands on its own. Click any line for the deep dive.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="divide-y divide-[#EBEBEB]">
          {SUB_SERVICES.map((s) => (
            <Link
              key={s.number}
              href={s.href}
              className="group flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0 py-7 -mx-6 px-6 lg:-mx-12 lg:px-12 hover:bg-black/[0.04] transition-[background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-80"
            >
              <span className="text-xs font-bold tabular-nums text-[#999] lg:w-14 flex-shrink-0 group-hover:text-itsco-red transition-[color] duration-200">
                {s.number}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-itsco-dark/80 lg:w-[34%] flex-shrink-0 leading-snug group-hover:text-itsco-dark transition-[color] duration-200">
                {s.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed lg:flex-1 lg:px-10">{s.description}</p>
              <ArrowRight
                size={16}
                className="hidden lg:block flex-shrink-0 text-[#999] group-hover:text-itsco-red group-hover:translate-x-1 transition-[transform,color] duration-200"
              />
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

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
            Bring Clarity to Your IT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            One call. A clear, objective view of where your technology should go next.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="it-management-consulting-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-8 h-[3px] bg-itsco-red mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-itsco-dark leading-[1.5] mb-6">
              &ldquo;ITSco is always there for us when we need them, and they have helped build up
              our IT infrastructure with robust resources that fit our security and everyday needs.
              We look forward to working with them for decades to come.&rdquo;
            </p>
            <p className="text-sm text-[#555]">
              <span className="font-semibold text-itsco-body">Marlene Fulp</span>
              <span className="mx-2 text-[#999]">&middot;</span>
              Assistant Administrator, Piedmont Triad Anesthesia
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-paper-deep) 12%, var(--color-itsco-paper-deep) 88%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Strategy &amp; consulting, <span className="text-itsco-red">answered.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="divide-y divide-[#EBEBEB] max-w-4xl">
          {FAQS.map((f) => (
            <div key={f.question} className="py-7">
              <h3 className="text-lg md:text-xl font-semibold text-itsco-dark leading-snug mb-3">
                {f.question}
              </h3>
              <p className="text-base text-itsco-body leading-relaxed">{f.answerText}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function RelatedServices() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Explore more from <span className="text-itsco-red">ITSco.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href="/managed-it-services/"
            className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red"
          >
            <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2">Managed IT Services</h3>
            <p className="text-sm text-[#555] leading-relaxed flex-1">
              24/7 monitoring, helpdesk, and preventative maintenance for a predictable monthly cost.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-itsco-red">
              Learn more
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/maximize-roi-with-managed-it-services/"
            className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red"
          >
            <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2">The ROI of Managed IT</h3>
            <p className="text-sm text-[#555] leading-relaxed flex-1">
              How ITSco measures and proves the return on your technology investment, every quarter.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-itsco-red">
              Learn more
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/cybersecurity/"
            className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red"
          >
            <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2">Cybersecurity & MSSP</h3>
            <p className="text-sm text-[#555] leading-relaxed flex-1">
              24/7 SOC monitoring, MDR, and compliance programs that reduce your risk exposure.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-itsco-red">
              Learn more
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ITManagementConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Nav variant="light" />
      <main>
        <Hero />
        <IntroSection />
        <FeaturesSection />
        <AdvantagesSection />
        <SubServicesSection />
        <MidCTA />
        <TestimonialSection />
        <FAQSection />
        <RelatedServices />
        <FadeUp>
          <BookingCTA utmSuffix="it-management-consulting-bottom" />
        </FadeUp>
      </main>
      <Footer />
    </>
  )
}
