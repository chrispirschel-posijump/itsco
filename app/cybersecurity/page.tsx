import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import ServiceCard from '@/components/ServiceCard'
import CTAButton from '@/components/CTAButton'
import SpotlightBlock from '@/components/SpotlightBlock'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import {
  ShieldCheck,
  Activity,
  Wrench,
  FileSearch,
  GraduationCap,
  UserCog,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cybersecurity & Compliance | Managed Security Services Provider',
  description: 'ITSco delivers Cybersecurity & Compliance services — SIEM, SOC, MDR, firewall management, and continuous compliance posture (SOC 2, HIPAA, PCI, NIST 800-171). 24/7 monitoring. Trusted since 1996. Book a free consultation.',
  alternates: { canonical: 'https://www.itsco.com/cybersecurity/' },
  openGraph: {
    title: 'Cybersecurity & Compliance | Managed Security Services Provider | ITSco',
    description: 'Cybersecurity & Compliance services — SIEM, SOC, MDR, 24/7 monitoring, and continuous compliance posture. Trusted since 1996.',
    url: 'https://www.itsco.com/cybersecurity/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cybersecurity & Compliance Services',
  provider: {
    '@type': 'Organization',
    name: 'ITSco',
    url: 'https://www.itsco.com/',
  },
  description: 'Cybersecurity & Compliance — Managed Security Services Provider (MSSP) offering SIEM, SOC, MDR, firewall management, vulnerability management, security assessments, penetration testing, virtual CISO services, and continuous compliance posture management (SOC 2, HIPAA, PCI DSS, NIST 800-171) for businesses across NC, SC, and VA.',
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  url: 'https://www.itsco.com/cybersecurity/',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.itsco.com/services/' },
    { '@type': 'ListItem', position: 3, name: 'Cybersecurity & Compliance', item: 'https://www.itsco.com/cybersecurity/' },
  ],
}

const FAQ_CALENDLY = 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=cybersecurity-faq'

const FAQS = [
  {
    question: "What's included in ITSco's managed cybersecurity services?",
    answerText:
      "Our flagship MSSP offering includes a fully hosted, redundant SIEM platform, behavioral and anomalous activity monitoring, customized detection rules, integrated global threat database, daily SOC reviews, automated 24/7 notifications, monthly threat activity reports, incident investigation, and pre-built compliance reports for PCI, HIPAA, and GLBA standards.",
  },
  {
    question: "How is managed cybersecurity pricing structured?",
    answerText:
      "We've been doing this long enough to know that no two companies are the same. To give you the most cost-effective, comprehensive approach, we recommend scheduling a free consultation to discuss your needs. See the ROI of managed IT services for the four dimensions we measure every quarter.",
  },
  {
    question: "What's the difference between an MSSP and just running a firewall?",
    answerText:
      "A firewall is a single tool. An MSSP is a full security operations program: 24/7 monitoring, SIEM platform, behavioral analytics, threat intelligence, vulnerability management, and incident response. The average SMB breach costs between $120K and $1.2M. Managed security services run a fraction of that monthly and prevent the breach in the first place.",
  },
  {
    question: "How fast does ITSco respond to a security incident?",
    answerText:
      "Our SOC reviews threats daily and our automated notifications run 24/7. Critical events trigger immediate engineer-led investigation and containment, with a documented incident response process that includes compliance assistance for affected clients.",
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

// ── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex flex-col overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src="/images/hero/services/aleksei-zhivilov-A6M3aowKR6I-unsplash.jpg"
          alt="ITSco security operations center monitoring threats around the clock"
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
              Cybersecurity &amp; Compliance
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8 break-words">
              Cybersecurity &amp; Compliance,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                done together.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-itsco-body leading-relaxed max-w-[44ch] mb-10">
              Detection, threat defense, and continuous compliance posture — run as one program. ITSco delivers 24/7 SOC monitoring, MDR, and the controls auditors expect for SOC 2, HIPAA, PCI DSS, and NIST 800-171. Security and compliance are not separate workstreams. We treat them as one.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="cybersecurity-hero"
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

// ── Intro section ──────────────────────────────────────────────────────────

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
              Detect threats. Reduce vulnerabilities. <span className="text-itsco-red">Maintain compliance.</span>
            </h2>
            <p className="text-lg text-itsco-body leading-relaxed">
              A managed cybersecurity program combines threat detection, vulnerability management, endpoint protection, and compliance into one accountable service — replacing fragmented point tools with a single team owning outcomes. ITSco has delivered this model across NC, SC, and VA since 1996. Zero clients have ever experienced a serious breach.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── MSSP Spotlight (flagship offering) ──────────────────────────────────────

const MSSP_CAPABILITIES = [
  'Fully hosted, redundant SIEM platform',
  'Behavioral and anomalous activity monitoring',
  'Customized detection rules with ongoing tuning',
  'Integrated global threat database',
  'Daily SOC reviews by security analysts',
  'Automated 24x7 notifications',
  'Monthly threat activity reports',
  'Incident investigation and compliance assistance',
  'Pre-built compliance reports (PCI, HIPAA, GLBA)',
]

function MSSPSpotlight() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Flagship Offering
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Managed Security Services Provider <span className="text-itsco-red">(MSSP).</span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp>
          <SpotlightBlock
            title="Advanced detection across your environment. On a subscription, not a capital line."
            description="ITSco's flagship offering provides advanced security tools and services that detect suspicious activity anywhere in your environment. Critical devices monitored 24x7 without requiring capital investment in traditional solutions."
            image="/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg"
            imageAlt="ITSco security analysts reviewing real-time threat dashboards"
            side="right"
          />
        </FadeUp>

        {/* MSSP Capabilities list */}
        <FadeUp delay={150}>
          <div className="mt-16 lg:mt-20 pt-12 border-t border-[#EBEBEB]/60">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#555] mb-8 text-center">
              Inside the MSSP Program
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 max-w-5xl mx-auto">
              {MSSP_CAPABILITIES.map((cap) => (
                <div key={cap} className="flex gap-3 items-start">
                  <ShieldCheck size={16} className="text-itsco-red mt-1 flex-shrink-0" />
                  <p className="text-sm text-itsco-body leading-relaxed">{cap}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Other security services — 6 cards ──────────────────────────────────────

const OTHER_SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Vulnerability Management',
    description: 'Security engineers create comprehensive vulnerability management processes using cloud-based technologies, prioritizing remediation by severity and risk level.',
  },
  {
    icon: Activity,
    title: 'Managed Firewall Services',
    description: 'Includes deployment, configuration, monitoring, device updates, and threat detection management.',
  },
  {
    icon: FileSearch,
    title: 'Security Assessments',
    description: 'Regulatory compliance assessments (PCI DSS, HIPAA, GDPR), risk assessments using NIST and CIS frameworks, web application vulnerability assessments, and OWASP Top 10 testing.',
  },
  {
    icon: Wrench,
    title: 'Remediation Services',
    description: 'Addresses critical vulnerabilities through analysis, prioritization, and remediation.',
  },
  {
    icon: GraduationCap,
    title: 'Security Awareness Training',
    description: 'Web-based employee training on cyber-attack prevention and phishing simulations.',
  },
  {
    icon: UserCog,
    title: 'Virtual CISO',
    description: 'Cost-effective C-level security leadership providing policy development, compliance guidance, and incident response planning.',
  },
]

function OtherServicesSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              The Full Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Six more security services <span className="text-itsco-red">working alongside MSSP.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OTHER_SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-itsco-red/10 flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon size={24} className="text-itsco-red" />
                </div>
                <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">
                  {s.description}
                </p>
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Sub-services drill-down — 12 services in 3 grouped sections ────────────

const SUB_SERVICE_GROUPS = [
  {
    label: 'Detection & Response',
    items: [
      { number: '01', title: 'Fully Managed Cybersecurity', description: 'End-to-end defense covering monitoring, detection, response, and recovery, managed by certified specialists.', href: '/fully-managed-cybersecurity/' },
      { number: '02', title: 'Managed SOC',                 description: '24/7 security operations center providing real-time threat monitoring and rapid incident response.', href: '/managed-soc/' },
      { number: '03', title: 'SIEM Services',               description: 'Hosted, redundant Security Information and Event Management platform with customized detection rules.', href: '/siem-services/' },
      { number: '04', title: 'MDR Monitoring & Response',   description: 'Managed Detection and Response with active threat hunting and engineer-led containment.', href: '/mdr-monitoring-and-response/' },
      { number: '05', title: 'Network Security',            description: 'Multi-layered defense protecting network traffic, segmentation, and east-west flows from intrusion.', href: '/network-security/' },
      { number: '06', title: 'Endpoint Security',           description: 'Next-gen endpoint protection across laptops, desktops, and servers — managed, monitored, and continuously updated.', href: '/endpoint-security/' },
    ],
  },
  {
    label: 'Prevention',
    items: [
      { number: '07', title: 'Managed Firewall',           description: 'Configured, monitored firewalls with policy management, device updates, and threat detection.', href: '/managed-firewall/' },
      { number: '08', title: 'IDS / IPS',                  description: 'Intrusion detection and prevention systems that block known threats and surface anomalous traffic.', href: '/ids-ips/' },
      { number: '09', title: 'Email Security',             description: 'Multi-layered defense against phishing, spoofing, malware, and business email compromise.', href: '/email-security/' },
      { number: '10', title: 'Zero Trust Security',        description: 'Identity-first security model where no user or device is trusted by default.', href: '/zero-trust-security/' },
      { number: '11', title: 'Cloud Cybersecurity',        description: 'Hardened cloud posture across Azure, AWS, and M365 — misconfiguration detection, identity, and continuous monitoring.', href: '/cloud-cybersecurity/' },
    ],
  },
  {
    label: 'Assessment & Compliance',
    items: [
      { number: '12', title: 'Cyber Risk Assessment',          description: 'Comprehensive evaluation of vulnerabilities, threats, and remediation priorities.', href: '/cyber-risk-assessment/' },
      { number: '13', title: 'Penetration Testing',            description: 'Controlled attack simulations to surface weaknesses before adversaries do.', href: '/penetration-testing-services/' },
      { number: '14', title: 'Security Audits & Compliance',   description: 'Audit support and gap analyses for PCI DSS, HIPAA, GDPR, NIST, and CIS frameworks.', href: '/security-audits-compliance/' },
      { number: '15', title: 'Compliance as a Service',        description: 'Continuous compliance posture management between audits — not just before them.', href: '/compliance-as-a-service/' },
      { number: '16', title: 'Cybersecurity Consulting',       description: 'Strategic guidance — program design, board reporting, incident response planning, and vCISO leadership.', href: '/cybersecurity-consulting-services/' },
    ],
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
                Sixteen services. <span className="text-itsco-red">Three disciplines.</span>
              </h2>
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-[36ch] md:text-right">
              Each cybersecurity capability is its own service. Click any line for the deep dive.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-12">
          {SUB_SERVICE_GROUPS.map((group) => (
            <FadeUp key={group.label}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-2">
                  {group.label}
                </p>
                <div className="divide-y divide-[#EBEBEB] border-t border-[#EBEBEB]/60">
                  {group.items.map((s) => (
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
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
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
            Pressure Test Your Defenses
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            One conversation. A clear picture of where your security stands today.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="cybersecurity-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Testimonial + client logos ─────────────────────────────────────────────

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
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-8 h-[3px] bg-itsco-red mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-itsco-dark leading-[1.5] mb-6">
              &ldquo;Our relationship has sustained because ITSco's core values match ours. They have integrity, they care about their customers, and they deliver a quality product. The solutions they have built for us are high performance, reliable, and delivered on-time and on-budget.&rdquo;
            </p>
            <p className="text-sm text-[#555]">
              <span className="font-semibold text-itsco-body">Joe Whitney</span>
              <span className="mx-2 text-[#999]">&middot;</span>
              Director, Plant IT Operations, Hospira
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

// ── FAQ section ────────────────────────────────────────────────────────────

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

// ── Related services ───────────────────────────────────────────────────────

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
            slug="managed-it-services"
            title="Managed IT Services"
            description="Proactive monitoring, helpdesk, and network management. Predictable monthly cost. No in-house IT department required."
            href="/managed-it-services/"
            image="/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg"
            imageAlt="Helpdesk technician on the phone behind monitors"
          />
          <ServiceCard
            slug="cloud-services"
            title="Cloud Services"
            description="Managed cloud, migration strategy, and Azure and AWS support that scales your infrastructure with your business."
            href="/cloud-services/"
            image="/images/supporting/services/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg"
            imageAlt="Modern office workspace with team collaborating"
          />
          <ServiceCard
            slug="vcio-vcto-vciso-services"
            title="Strategy & Consulting"
            description="vCIO, vCTO, and vCISO engagements that align your technology roadmap with your business goals."
            href="/it-management-consulting/"
            image="/images/supporting/services/group-people-working-out-business-plan-office.jpg"
            imageAlt="Confident leader with team in a strategy session"
          />
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CybersecurityPage() {
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
      <MSSPSpotlight />
      <OtherServicesSection />

      {/* Drill-down to all 12 sub-services, grouped by discipline */}
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
          utmSuffix="cybersecurity-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      <Footer />
    </>
  )
}
