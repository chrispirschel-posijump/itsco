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
  CloudUpload,
  Settings,
  ShieldCheck,
  Receipt,
  Layers,
  GraduationCap,
  BadgeCheck,
  TrendingUp,
  Gauge,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Microsoft Solutions | 365, Azure, Teams & Copilot | ITSco',
  description:
    'ITSco Microsoft solutions — deployment, management, and security across Microsoft 365, Azure, Teams, Exchange, SharePoint, Copilot, and Sentinel. Book a free consultation.',
  alternates: { canonical: 'https://www.itsco.com/microsoft-solutions/' },
  openGraph: {
    title: 'Microsoft Solutions | 365, Azure, Teams & Copilot | ITSco',
    description:
      'Get the full value of Microsoft — 365, Azure, Teams, Copilot, and more, deployed and managed by a certified team. Trusted since 1996.',
    url: 'https://www.itsco.com/microsoft-solutions/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microsoft Solutions',
  serviceType: 'Microsoft Solutions',
  provider: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
  description:
    'Microsoft solutions including Microsoft 365, Azure, Teams, Exchange, SharePoint, Copilot, and Sentinel — deployed, managed, and secured for businesses across NC, SC, and VA.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/microsoft-solutions/',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.itsco.com/services/' },
    { '@type': 'ListItem', position: 3, name: 'Microsoft Solutions', item: 'https://www.itsco.com/microsoft-solutions/' },
  ],
}

const FAQS = [
  {
    question: 'Is ITSco a Microsoft-certified partner?',
    answerText:
      'Yes. ITSco brings 25+ years of IT experience and Microsoft-certified professionals across the full stack — 365, Azure, Teams, Exchange, SharePoint, and security tools like Sentinel and Copilot.',
  },
  {
    question: 'We already use Microsoft — what would ITSco add?',
    answerText:
      'Most businesses run Microsoft tools that are loosely configured, under-secured, and only partly used. ITSco tightens security, optimizes licensing, configures the suite to work together, and takes on day-to-day management — so you get far more from what you already pay for.',
  },
  {
    question: 'Can ITSco migrate us onto Microsoft from another platform?',
    answerText:
      'Yes. ITSco handles migrations from Google Workspace, on-premise Exchange, and other platforms — moving email, files, accounts, and collaboration tools with minimal downtime and no data loss.',
  },
  {
    question: 'Do we have to adopt the whole Microsoft suite?',
    answerText:
      'No. ITSco helps you use the parts that fit your business, in the order that makes sense. Many clients start with 365 and Teams, then add Copilot, Sentinel, or Azure as they are ready.',
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

const HERO_IMAGE = '/images/hero/services/pexels-divinetechygirl-1181207.jpg'

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex flex-col overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src={HERO_IMAGE}
          alt="Working across the Microsoft suite"
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              Microsoft Solutions
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8 break-words">
              The full value of{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                Microsoft.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-[#404040] leading-relaxed max-w-[46ch] mb-10">
              Microsoft 365, Azure, Teams, Copilot, and more — deployed, secured, and managed by a
              certified team. ITSco makes the whole Microsoft stack work together, so you get every
              bit of the value you already pay for.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="microsoft-solutions-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="Explore Microsoft services"
                href="#microsoft-services"
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              The Promise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-8">
              One Microsoft stack, <span className="text-[#CA3C27]">working as one.</span>
            </h2>
            <p className="text-lg text-[#404040] leading-relaxed">
              Most businesses own far more Microsoft capability than they use — and run it loosely
              configured and under-secured. ITSco brings 25+ years of experience and Microsoft-certified
              expertise to deploy, secure, and manage the whole suite as a single, well-run platform.
              One partner for 365, Azure, Teams, Copilot, and everything around them.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: CloudUpload,
    title: 'Deployment & Migration',
    description: 'Clean setups and smooth migrations onto Microsoft — no lost data, no downtime.',
  },
  {
    icon: Settings,
    title: 'Management & Administration',
    description: 'Day-to-day administration, updates, and user management handled across the suite.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description: 'Microsoft tools hardened with the right security and compliance controls.',
  },
  {
    icon: Receipt,
    title: 'License Optimization',
    description: "The right licenses for the right people — no paying for tiers you don't use.",
  },
  {
    icon: Layers,
    title: 'Integration',
    description: 'The Microsoft stack — and your other apps — configured to work as one.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Adoption',
    description: 'Hands-on training that turns Microsoft features into everyday productivity.',
  },
]

function FeaturesSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Microsoft, managed{' '}
              <span className="text-[#CA3C27]">end to end.</span>
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
    icon: BadgeCheck,
    title: 'Microsoft-certified team',
    description: 'Certified professionals across 365, Azure, security, and collaboration tools.',
  },
  {
    icon: Layers,
    title: 'One partner, whole stack',
    description: 'Email, collaboration, cloud, and security under a single accountable team.',
  },
  {
    icon: TrendingUp,
    title: 'Value from what you own',
    description: 'Get the full return on the Microsoft licenses already on your invoice.',
  },
  {
    icon: Gauge,
    title: 'Proactive, not reactive',
    description: 'Configured, monitored, and optimized — not set up once and forgotten.',
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
              A Microsoft partner that{' '}
              <span className="text-[#CA3C27]">earns its place.</span>
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
    title: 'Microsoft 365 Services',
    description: 'Deployment, management, security, and licensing across the full 365 suite.',
    href: '/microsoft-365-services/',
  },
  {
    number: '02',
    title: 'Microsoft Azure Services',
    description: 'Migration, management, and optimization on Microsoft Azure by certified experts.',
    href: '/microsoft-azure-services/',
  },
  {
    number: '03',
    title: 'Microsoft Teams Services',
    description: 'Teams set up and managed as a real collaboration and communication hub.',
    href: '/microsoft-teams-services/',
  },
  {
    number: '04',
    title: 'Microsoft Exchange Services',
    description: 'Secure, reliable business email — deployment, migration, and management.',
    href: '/microsoft-exchange-services/',
  },
  {
    number: '05',
    title: 'Microsoft SharePoint Services',
    description: 'Document management and collaboration, optimized, secured, and adopted.',
    href: '/microsoft-sharepoint-services/',
  },
  {
    number: '06',
    title: 'Microsoft Copilot',
    description: 'A secure Copilot rollout — readiness, data governance, and real adoption.',
    href: '/microsoft-copilot/',
  },
  {
    number: '07',
    title: 'Microsoft Sentinel',
    description: "Microsoft's cloud SIEM, deployed and monitored as a managed security service.",
    href: '/microsoft-sentinel/',
  },
]

function SubServicesSection() {
  return (
    <section
      id="microsoft-services"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-16 border-b border-[#EBEBEB]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
                Explore Microsoft Solutions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
                Drill into <span className="text-[#CA3C27]">any product.</span>
              </h2>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-[36ch] md:text-right">
              Every Microsoft product is its own service. Click any line for the deep dive.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="divide-y divide-[#EBEBEB]">
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
            Make Microsoft Work Harder
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            One call. A clear view of what your Microsoft investment could deliver.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="microsoft-solutions-mid"
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
              Microsoft solutions, <span className="text-[#CA3C27]">answered.</span>
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
            href="/cloud-services/"
            className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27]"
          >
            <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">Cloud Services</h3>
            <p className="text-sm text-[#555] leading-relaxed flex-1">
              Migration, hosting, and managed cloud — scalable, secure, and cost-controlled.
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
        </div>
      </div>
    </section>
  )
}

export default function MicrosoftSolutionsPage() {
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
          <BookingCTA utmSuffix="microsoft-solutions-bottom" />
        </FadeUp>
      </main>
      <Footer />
    </>
  )
}
