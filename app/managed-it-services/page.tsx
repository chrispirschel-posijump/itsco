import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import ServiceCard from '@/components/ServiceCard'
import CTAButton from '@/components/CTAButton'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import {
  Activity,
  Wrench,
  ShieldCheck,
  Headphones,
  Network,
  Layers,
  TrendingDown,
  Timer,
  Receipt,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Services | Managed Services Provider | ITSco',
  description: 'ITSco delivers managed IT services with 24/7 monitoring, helpdesk, and security management. Predictable monthly cost. Trusted since 1996. Book a free consultation.',
  alternates: { canonical: 'https://www.itsco.com/managed-it-services/' },
  openGraph: {
    title: 'Managed IT Services | Managed Services Provider | ITSco',
    description: 'Managed IT, monitored and maintained by trusted partners. Predictable monthly cost. Trusted since 1996.',
    url: 'https://www.itsco.com/managed-it-services/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed IT Services',
  provider: {
    '@type': 'Organization',
    name: 'ITSco',
    url: 'https://www.itsco.com/',
  },
  description: 'Managed IT services including 24/7 monitoring, helpdesk, preventative maintenance, security management, and advanced engineering for businesses across NC, SC, and VA.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/managed-it-services/',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.itsco.com/services/' },
    { '@type': 'ListItem', position: 3, name: 'Managed IT Services', item: 'https://www.itsco.com/managed-it-services/' },
  ],
}

const FAQ_CALENDLY = 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=managed-it-services-faq'

const FAQS = [
  {
    question: "What is included in ITSco's managed IT services?",
    answerText:
      "Our managed IT program includes remote monitoring and management of all devices, preventative maintenance, proactively managed security (anti-virus, anti-spam, anti-phishing, and anti-malware), help desk services delivered remotely or on-site, and advanced engineering for complex IT environments.",
  },
  {
    question: "How is managed IT services pricing structured?",
    answerText:
      "We've been doing this long enough to know that no two companies are the same. To give you the most cost-effective, comprehensive approach, we recommend scheduling a free consultation to discuss your needs. See the ROI of managed IT services for the four dimensions we measure every quarter.",
  },
  {
    question: "What is the difference between a managed services provider and an in-house IT team?",
    answerText:
      "A managed services provider gives you a full team of certified specialists for less than the cost of a single in-house IT hire. The average full-time IT employee costs $97,430 per year before benefits, training, or turnover. ITSco delivers broader expertise, faster response, and predictable monthly costs.",
  },
  {
    question: "How fast is your help desk response time?",
    answerText:
      "Our help desk averages under one hour for critical events, with most issues resolved on the first contact through our remote management platform. Familiar engineers handle your account so they already know your environment.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answerText,
    },
  })),
}

// ── Hero — Variant A lite, full-bleed image right ──────────────────────────

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex flex-col overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src="/images/hero/services/ed-hardie-xG02JzIBf7o-unsplash.jpg"
          alt="ITSco engineering team monitoring and managing client IT systems"
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
              Managed IT
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
              Managed IT Services{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                that pay for themselves.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-itsco-body leading-relaxed max-w-[44ch] mb-10">
              A regularly maintained network means fewer failures, more predictable costs, and a dramatic reduction in security risks. ITSco offers managed IT for a low, fixed monthly cost. Your infrastructure, monitored and maintained by trusted partners.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="managed-it-services-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="Discover the ROI"
                href="/maximize-roi-with-managed-it-services/"
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

// ── Intro — full-width outcome framing (verbatim Overview from scrape) ─────

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
              The managed services provider businesses <span className="text-itsco-red">trust to keep IT running.</span>
            </h2>
            <p className="text-lg text-itsco-body leading-relaxed">
              A regularly maintained network means fewer failures, more predictable costs, and a dramatic reduction in security risks. ITSco offers a robust and flexible managed maintenance program for a low, fixed monthly cost with the peace of mind that IT infrastructure is being monitored and maintained by trusted partners. Serving businesses in Raleigh, Durham, and across the Southeast since 1996.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Program Features — 5 cards (verbatim bullets from scrape) ──────────────

const FEATURES = [
  {
    icon: Activity,
    title: 'Monitoring and Management',
    bullets: [
      'Remote monitoring and management of all devices to ensure uptime and rapid response to any issues',
      'Advanced systems management platform installed on networks to support real-time monitoring, alerting, and remote access',
    ],
  },
  {
    icon: Wrench,
    title: 'Preventative Maintenance',
    bullets: [
      'Proactive measures to ensure critical devices on networks remain healthy',
      'System fault and performance analysis and remediation',
      'Timely installation of system patches and maintenance releases to optimize performance and minimize risks',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Security Management',
    bullets: [
      'Proactively managed anti-virus, anti-spam, anti-phishing, and anti-malware solutions',
    ],
  },
  {
    icon: Headphones,
    title: 'Help Desk Services',
    bullets: [
      'Help-desk team actively monitors systems and provides support remotely or on-site',
    ],
  },
  {
    icon: Network,
    title: 'Advanced Engineering Services',
    bullets: [
      'Full compliment of system and network design and implementation services for complex IT environments',
    ],
  },
]

function FeaturesSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Program Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Everything we do, <span className="text-itsco-red">under one program.</span>
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
                <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-4">
                  {f.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {f.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-[#555] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-itsco-red mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Advantages — 4 cards (verbatim from scrape) ────────────────────────────

const ADVANTAGES = [
  {
    icon: Layers,
    title: 'Comprehensive IT solution',
    description: 'Greater security, stability and supportability through real-time monitoring, analysis and maintenance.',
  },
  {
    icon: TrendingDown,
    title: 'Reduced Network Downtime, Increased Productivity',
    description: 'Continuous network insight reduces failure likelihood and resolves issues more quickly.',
  },
  {
    icon: Timer,
    title: 'Faster Response Time',
    description: 'Familiar Help-Desk engineers provide rapid response via sophisticated remote management tools.',
  },
  {
    icon: Receipt,
    title: 'Simple, predictable pricing',
    description: 'Monthly price per device with predictable hourly rates for senior engineering services.',
  },
]

function AdvantagesSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              The Advantages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Outcomes that show up <span className="text-itsco-red">on the invoice.</span>
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
                <h3 className="text-base font-semibold text-itsco-dark leading-snug mb-3">
                  {a.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">
                  {a.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Sub-services hub list ───────────────────────────────────────────────────

const SUB_SERVICES = [
  {
    number: '01',
    title: 'Managed Network Services',
    description: 'Continuous monitoring, configuration, and management of your network infrastructure.',
    href: '/managed-network-services/',
  },
  {
    number: '02',
    title: 'HelpDesk & Service Desk',
    description: 'Local, 24/7 support staffed by senior engineers who already know your environment.',
    href: '/raleigh-it-helpdesk/',
  },
  {
    number: '03',
    title: 'Server Monitoring & Maintenance',
    description: 'Real-time server health monitoring, patch management, and performance tuning.',
    href: '/server-monitoring-and-maintenance/',
  },
  {
    number: '04',
    title: 'Backup & Disaster Recovery',
    description: 'Automated backups, tested recovery plans, and business continuity strategies that protect against the worst case.',
    href: '/backup-disaster-recovery/',
  },
  {
    number: '05',
    title: 'Asset Lifecycle Management',
    description: 'Hardware tracking, refresh planning, and certified end-of-life data destruction.',
    href: '/asset-lifecycle-management/',
  },
  {
    number: '06',
    title: 'Remote IT Support',
    description: 'Fast, efficient resolution for distributed teams. Most issues fixed without scheduling an on-site visit.',
    href: '/remote-it-support/',
  },
  {
    number: '07',
    title: 'IT Staff Augmentation',
    description: 'Embedded engineers who supplement your in-house team during projects, transitions, or workload peaks.',
    href: '/it-staff-augmentation/',
  },
]

function SubServicesSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-16 border-b border-[#EBEBEB]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                Explore the Program
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
                Drill into <span className="text-itsco-red">any capability.</span>
              </h2>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-[36ch] md:text-right">
              Each part of your managed IT program is its own service. Click any line for the deep dive.
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
              <p className="text-sm text-[#555] leading-relaxed lg:flex-1 lg:px-10 group-hover:text-[#555] transition-[color] duration-200">
                {s.description}
              </p>
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
            Stop Reacting. Start Preventing.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            One call. A clear picture of where your IT stands today.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="managed-it-services-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Testimonial + client logos ──────────────────────────────────────────────

const CLIENTS = [
  { src: '/images/clients/EmergeOrtho_LogoVert_MD_1_.png', alt: 'EmergeOrtho' },
  { src: '/images/clients/SRN%20logo.png', alt: 'Southern Rehabilitation Network' },
  { src: '/images/clients/cbre-group-logo-11530967007p4cuy93fps_1.png', alt: 'CBRE' },
  { src: '/images/clients/phononic-logo.svg', alt: 'Phononic' },
  { src: '/images/clients/cambrex_logo.png', alt: 'Cambrex' },
  { src: '/images/clients/NCACC_screen_seal_color.png', alt: 'NC Association of County Commissioners' },
  { src: '/images/clients/forty540logo.png', alt: 'Forty540' },
]

function TestimonialSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-8 h-[3px] bg-itsco-red mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-itsco-dark leading-[1.5] mb-6">
              &ldquo;ITSco is always there for us when we need them, and they have helped build up our IT infrastructure with robust resources that fit our security and everyday needs. We look forward to working with them for decades to come.&rdquo;
            </p>
            <p className="text-sm text-[#555]">
              <span className="font-semibold text-itsco-body">Marlene Fulp</span>
              <span className="mx-2 text-[#999]">&middot;</span>
              Assistant Administrator, Piedmont Triad Anesthesia
            </p>
          </div>
        </FadeUp>

        {/* Client logos */}
        <FadeUp delay={150}>
          <div className="mt-20 pt-12 border-t border-[#EBEBEB]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#555] mb-8 text-center">
              Trusted by businesses across NC, SC &amp; VA
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap">
              {CLIENTS.map((c) => (
                <div key={c.alt} className="relative h-16 w-52 grayscale opacity-70 mix-blend-multiply hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-300">
                  <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="208px" />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── FAQ section ─────────────────────────────────────────────────────────────

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
              Frequently asked <span className="text-itsco-red">questions.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="divide-y divide-[#EBEBEB] max-w-4xl">
          {/* Q1 */}
          <div className="py-7">
            <h3 className="text-lg md:text-xl font-semibold text-itsco-dark leading-snug mb-3">
              {FAQS[0].question}
            </h3>
            <p className="text-base text-itsco-body leading-relaxed">
              {FAQS[0].answerText}
            </p>
          </div>

          {/* Q2 — has inline links */}
          <div className="py-7">
            <h3 className="text-lg md:text-xl font-semibold text-itsco-dark leading-snug mb-3">
              {FAQS[1].question}
            </h3>
            <p className="text-base text-itsco-body leading-relaxed">
              We&apos;ve been doing this long enough to know that no two companies are the same. To give you the most cost-effective, comprehensive approach, we recommend{" "}
              <a
                href={FAQ_CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="text-itsco-red font-semibold underline underline-offset-4 decoration-itsco-red/30 hover:decoration-itsco-red transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-70 rounded-sm"
              >
                scheduling a free consultation
              </a>{" "}
              to discuss your needs. See the{" "}
              <Link
                href="/maximize-roi-with-managed-it-services/"
                className="text-itsco-red font-semibold underline underline-offset-4 decoration-itsco-red/30 hover:decoration-itsco-red transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-70 rounded-sm"
              >
                ROI of managed IT services
              </Link>{" "}
              for the four dimensions we measure every quarter.
            </p>
          </div>

          {/* Q3 */}
          <div className="py-7">
            <h3 className="text-lg md:text-xl font-semibold text-itsco-dark leading-snug mb-3">
              {FAQS[2].question}
            </h3>
            <p className="text-base text-itsco-body leading-relaxed">
              {FAQS[2].answerText}
            </p>
          </div>

          {/* Q4 */}
          <div className="py-7">
            <h3 className="text-lg md:text-xl font-semibold text-itsco-dark leading-snug mb-3">
              {FAQS[3].question}
            </h3>
            <p className="text-base text-itsco-body leading-relaxed">
              {FAQS[3].answerText}
            </p>
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Related services ────────────────────────────────────────────────────────

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
          <ServiceCard
            slug="cybersecurity"
            title="Cybersecurity & MSSP"
            description="24/7 SOC monitoring, MDR, firewall management, and compliance programs that reduce your risk exposure before threats become incidents."
            href="/cybersecurity/"
            image="/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg"
            imageAlt="Security operations engineers reviewing code on multiple monitors"
          />
          <ServiceCard
            slug="cloud-services"
            title="Cloud Services"
            description="Managed cloud, migration strategy, and Azure and AWS support that scales your infrastructure with your business."
            href="/cloud-services/"
            image="/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg"
            imageAlt="Team collaborating around laptops in a modern workspace"
          />
          <ServiceCard
            slug="vcio-vcto-vciso-services"
            title="Strategy & Consulting"
            description="vCIO, vCTO, and vCISO engagements that align your technology roadmap with your business goals."
            href="/it-management-consulting/"
            image="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
            imageAlt="Modern boardroom with floor-to-ceiling windows"
          />
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ManagedITServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />

      {/* Chapter 1 — Identity */}
      <Hero />
      <IntroSection />

      {/* Chapter 2 — What's Inside */}
      <FeaturesSection />
      <AdvantagesSection />

      {/* Drill-down to sub-services — links to all 7 child pages */}
      <SubServicesSection />

      {/* Mid CTA — inflection point */}
      <MidCTA />

      {/* Chapter 3 — Proof */}
      <TestimonialSection />

      {/* Chapter 4 — FAQ + Related + Action */}
      <FAQSection />
      <RelatedServices />

      <FadeUp>
        <BookingCTA
          utmSuffix="managed-it-services-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      <Footer />
    </>
  )
}
