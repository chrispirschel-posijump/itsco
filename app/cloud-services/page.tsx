import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import {
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Globe,
  Lock,
  Headset,
  Layers,
  Gauge,
  Compass,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud Services | Migration, Hosting & Managed Cloud | ITSco',
  description:
    'ITSco cloud services — migration, hosting, managed cloud, Azure, AWS, and virtualization. Scalable, secure, cost-controlled cloud. Book a free consultation.',
  alternates: { canonical: 'https://www.itsco.com/cloud-services/' },
  openGraph: {
    title: 'Cloud Services | Migration, Hosting & Managed Cloud | ITSco',
    description:
      'Scalable, secure, cost-controlled cloud — migration, hosting, and managed cloud from a partner who runs it all. Trusted since 1996.',
    url: 'https://www.itsco.com/cloud-services/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Services',
  serviceType: 'Cloud Services',
  provider: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
  description:
    'Cloud services including migration, hosting, managed cloud, Azure, AWS, public/private/hybrid cloud, virtualization, and VDI for businesses across NC, SC, and VA.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/cloud-services/',
}

const FAQS = [
  {
    question: 'What cloud platforms does ITSco work with?',
    answerText:
      'ITSco works across the major platforms — Microsoft Azure, Amazon Web Services (AWS), and Microsoft 365 — as well as public, private, and hybrid cloud environments. We recommend the right mix for your workloads rather than pushing a single platform.',
  },
  {
    question: 'Will moving to the cloud save us money?',
    answerText:
      'Usually, once you account for the full cost of owned hardware — purchase, power, space, maintenance, and refresh cycles. The cloud converts that into a predictable operating cost that tracks actual usage. Active management keeps that cost from drifting upward.',
  },
  {
    question: 'Is the cloud secure enough for sensitive data?',
    answerText:
      'Yes — when configured and managed correctly. Most cloud breaches come from misconfiguration, not the platform itself. ITSco hardens, monitors, and maintains your cloud, and for highly sensitive workloads can deliver dedicated private cloud.',
  },
  {
    question: 'Do we have to move everything to the cloud at once?',
    answerText:
      'No. ITSco starts with a cloud strategy that decides what to move, where, and in what order. Many businesses run a hybrid model — keeping some workloads on-premise while moving others — and migrate in planned phases.',
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

const HERO_IMAGE = '/images/hero/services/pexels-brett-sayles-5408005.jpg'

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex flex-col overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src={HERO_IMAGE}
          alt="ITSco-managed cloud data center infrastructure"
          fill
          priority
          className="object-cover object-center"
          sizes="52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-itsco-paper via-itsco-paper/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper/40 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 lg:flex lg:items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="lg:max-w-[55%]">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              Cloud Services
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
              Cloud that works{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                for your business.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-[#404040] leading-relaxed max-w-[46ch] mb-10">
              Migration, hosting, security, and day-to-day management — ITSco designs and runs a
              cloud built around your workloads, your budget, and your goals. Scalable, secure, and
              cost-controlled.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="cloud-services-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="Explore cloud services"
                href="#cloud-services"
                variant="secondary"
                className="px-8 py-4 rounded-xl text-base"
              />
            </div>
          </FadeUp>
        </div>

        <div className="mt-12 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden">
          <Image
            src={HERO_IMAGE}
            alt="ITSco-managed cloud data center infrastructure"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              The Promise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-8">
              The cloud, done <span className="text-[#CA3C27]">with a plan.</span>
            </h2>
            <p className="text-lg text-[#404040] leading-relaxed">
              The cloud was supposed to be simpler, cheaper, and more flexible — but only when it is
              chosen, built, and run well. ITSco brings 25+ years of infrastructure experience to
              every stage: deciding what belongs in the cloud, moving it without disruption, and
              managing it so it keeps delivering. One partner, accountable for the whole journey.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Capacity that grows and shrinks with demand — no over-buying hardware for peak load.',
  },
  {
    icon: TrendingDown,
    title: 'Cost Control',
    description: 'Predictable, usage-based cost in place of big capital outlays and refresh cycles.',
  },
  {
    icon: ShieldCheck,
    title: 'Resilience',
    description: 'Redundancy, backup, and tested recovery built into the platform from day one.',
  },
  {
    icon: Globe,
    title: 'Anywhere Access',
    description: 'Applications and desktops your team can reach securely from any location or device.',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Hardened, monitored cloud kept aligned with the standards your business answers to.',
  },
  {
    icon: Headset,
    title: 'Expert Management',
    description: 'A senior team that designs, runs, secures, and optimizes the whole environment for you.',
  },
]

function FeaturesSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Why the Cloud
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              What a well-run cloud{' '}
              <span className="text-[#CA3C27]">delivers.</span>
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
                <div className="w-12 h-12 rounded-xl bg-[#CA3C27]/10 flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon size={24} className="text-[#CA3C27]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">{f.title}</h3>
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
    icon: Layers,
    title: 'One cloud partner',
    description: 'Migration, hosting, security, and management under a single accountable team.',
  },
  {
    icon: TrendingDown,
    title: 'Lower total cost',
    description: 'Trade aging hardware and refresh cycles for predictable operating cost.',
  },
  {
    icon: Gauge,
    title: 'Performance that holds',
    description: 'Continuously tuned and monitored — not set up once and forgotten.',
  },
  {
    icon: Compass,
    title: 'Strategy-led',
    description: 'Every cloud decision tied to a business outcome, not just a technology.',
  },
]

function AdvantagesSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              The ITSco Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              A cloud partner, <span className="text-[#CA3C27]">not just a provider.</span>
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
                <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-[#111111] leading-snug mb-3">{a.title}</h3>
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
    title: 'Managed Cloud Services',
    description: 'Day-to-day monitoring, security, optimization, and support of your cloud environment.',
    href: '/managed-cloud-services/',
  },
  {
    number: '02',
    title: 'Cloud Migration',
    description: 'A planned, secure, low-disruption move to the cloud that lands right the first time.',
    href: '/cloud-migration/',
  },
  {
    number: '03',
    title: 'Cloud Consulting',
    description: 'Readiness assessments, strategy, and roadmaps that make the cloud pay off.',
    href: '/cloud-consulting-services/',
  },
  {
    number: '04',
    title: 'Microsoft Azure Services',
    description: 'Migration, management, and optimization on Microsoft Azure by certified experts.',
    href: '/microsoft-azure-services/',
  },
  {
    number: '05',
    title: 'AWS Services',
    description: 'Amazon Web Services architected, managed, and cost-optimized for your workloads.',
    href: '/aws-services/',
  },
  {
    number: '06',
    title: 'Cloud Hosting',
    description: 'Reliable, scalable, secure hosting for your applications and infrastructure.',
    href: '/cloud-hosting/',
  },
  {
    number: '07',
    title: 'Public & Hybrid Cloud',
    description: 'The scalability of public cloud and the control of private — combined.',
    href: '/public-hybrid-cloud-services/',
  },
  {
    number: '08',
    title: 'Private Cloud Services',
    description: 'Dedicated, single-tenant cloud for sensitive workloads and tight control.',
    href: '/private-cloud-services/',
  },
  {
    number: '09',
    title: 'Cloud Cybersecurity',
    description: 'Closing the security gap cloud providers leave to you — configuration, identity, and data.',
    href: '/cloud-cybersecurity/',
  },
  {
    number: '10',
    title: 'Virtualization Services',
    description: 'Consolidate servers and desktops onto efficient, resilient infrastructure.',
    href: '/virtualization-services/',
  },
  {
    number: '11',
    title: 'Managed Desktop & VDI',
    description: 'Secure virtual desktops your team can reach from any device, anywhere.',
    href: '/managed-desktop-vdi/',
  },
]

function SubServicesSection() {
  return (
    <section
      id="cloud-services"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-16 border-b border-[#EBEBEB]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
                Explore Cloud Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
                Drill into <span className="text-[#CA3C27]">any capability.</span>
              </h2>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-[36ch] md:text-right">
              Every part of your cloud program is its own service. Click any line for the deep dive.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={50} className="divide-y divide-[#EBEBEB]">
          {SUB_SERVICES.map((s) => (
            <Link
              key={s.number}
              href={s.href}
              className="group flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0 py-7 -mx-6 px-6 lg:-mx-12 lg:px-12 hover:bg-black/[0.04] transition-[background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:opacity-80"
            >
              <span className="text-xs font-bold tabular-nums text-[#999] lg:w-14 flex-shrink-0 group-hover:text-[#CA3C27] transition-[color] duration-200">
                {s.number}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#111111]/80 lg:w-[34%] flex-shrink-0 leading-snug group-hover:text-[#111111] transition-[color] duration-200">
                {s.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed lg:flex-1 lg:px-10">{s.description}</p>
              <ArrowRight
                size={16}
                className="hidden lg:block flex-shrink-0 text-[#999] group-hover:text-[#CA3C27] group-hover:translate-x-1 transition-[transform,color] duration-200"
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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-3">
            Cloud, With a Plan
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            One call. A clear view of what the cloud can do for your business.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="cloud-services-mid"
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
            <div className="w-8 h-[3px] bg-[#CA3C27] mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-[#111111] leading-[1.5] mb-6">
              &ldquo;ITSco is always there for us when we need them, and they have helped build up
              our IT infrastructure with robust resources that fit our security and everyday needs.
              We look forward to working with them for decades to come.&rdquo;
            </p>
            <p className="text-sm text-[#555]">
              <span className="font-semibold text-[#404040]">Marlene Fulp</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Cloud services, <span className="text-[#CA3C27]">answered.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="divide-y divide-[#EBEBEB] max-w-4xl">
          {FAQS.map((f) => (
            <div key={f.question} className="py-7">
              <h3 className="text-lg md:text-xl font-semibold text-[#111111] leading-snug mb-3">
                {f.question}
              </h3>
              <p className="text-base text-[#404040] leading-relaxed">{f.answerText}</p>
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Explore more from <span className="text-[#CA3C27]">ITSco.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href="/managed-it-services/"
            className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27]"
          >
            <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">Managed IT Services</h3>
            <p className="text-sm text-[#555] leading-relaxed flex-1">
              24/7 monitoring, helpdesk, and preventative maintenance for a predictable monthly cost.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CA3C27]">
              Learn more
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/cybersecurity/"
            className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27]"
          >
            <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">Cybersecurity & MSSP</h3>
            <p className="text-sm text-[#555] leading-relaxed flex-1">
              24/7 SOC monitoring, MDR, and compliance programs that reduce your risk exposure.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CA3C27]">
              Learn more
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/ai-automation/"
            className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27]"
          >
            <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">AI &amp; Automation</h3>
            <p className="text-sm text-[#555] leading-relaxed flex-1">
              Practical AI strategy and process automation that turn the cloud into business advantage.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CA3C27]">
              Learn more
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function CloudServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
          <BookingCTA utmSuffix="cloud-services-bottom" />
        </FadeUp>
      </main>
      <Footer />
    </>
  )
}
