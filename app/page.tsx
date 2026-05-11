import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import BookingCTA from '@/components/BookingCTA'
import IndustryCard from '@/components/IndustryCard'
import TestimonialBlock from '@/components/TestimonialBlock'
import CTAButton from '@/components/CTAButton'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialsRotator from '@/components/TestimonialsRotator'
import { FadeUp, StaggerChildren, CountUp } from '@/components/ScrollAnimations'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import HeroVideo from '@/components/HeroVideo'

export const metadata: Metadata = {
  title: 'IT Services and Solutions That You Can Count On | ITSco',
  description: 'ITSco delivers managed IT, cybersecurity, and cloud services to businesses across NC, SC, and VA. Trusted since 1996. Book a free consultation today.',
  alternates: {
    canonical: 'https://www.itsco.com/',
  },
  openGraph: {
    title: 'IT Services and Solutions That You Can Count On | ITSco',
    description: 'ITSco delivers managed IT, cybersecurity, and cloud services to businesses across NC, SC, and VA. Trusted since 1996.',
    url: 'https://www.itsco.com/',
    siteName: 'ITSco',
    locale: 'en_US',
    type: 'website',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.itsco.com/#organization',
  name: 'ITSco',
  alternateName: 'ITS co',
  description: 'Managed IT services, cybersecurity, and cloud solutions for businesses across NC, SC, and VA. Trusted since 1996.',
  url: 'https://www.itsco.com/',
  logo: 'https://www.itsco.com/images/itsco-logo.svg',
  image: 'https://www.itsco.com/images/itsco-logo.svg',
  telephone: '+1-919-674-0044',
  foundingDate: '1996',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4601 Creekstone Drive, Suite 102',
    addressLocality: 'Durham',
    addressRegion: 'NC',
    postalCode: '27703',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'North Carolina' },
    { '@type': 'State', name: 'South Carolina' },
    { '@type': 'State', name: 'Virginia' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-919-674-0044',
      contactType: 'customer support',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-919-249-9556',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  ],
  sameAs: [],
}

// ── 1. Hero — light, full-bleed image right with anchored stats ─────────────

const STATS: { value: number; decimals: boolean; prefix: string; suffix: string; label: string }[] = [
  { value: 27,    decimals: false, prefix: '',   suffix: '+',  label: 'Years in business' },
  { value: 99.94, decimals: true,  prefix: '',   suffix: '%',  label: 'Uptime for managed clients' },
  { value: 1,     decimals: false, prefix: '< ', suffix: 'hr', label: 'Avg. helpdesk response' },
  { value: 80,    decimals: false, prefix: '',   suffix: '%',  label: 'Clients of 5+ years' },
]

function HomeHero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex flex-col overflow-hidden">
      <BackgroundOrbs variant="light" />

      {/* Full-bleed video panel — desktop only. Falls back to poster image on slow networks,
          reduced-motion preference, or if the browser blocks autoplay. */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <HeroVideo
          mp4Src="/videos/hero-loop.mp4"
          webmSrc="/videos/hero-loop.webm"
          poster="/images/hero/services/pexels-vlada-karpovich-7433840.jpg"
          alt="ITSco managed IT services team"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-itsco-paper via-itsco-paper/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper/40 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="lg:max-w-[55%]">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              Serving Raleigh, Durham &amp; the Southeast
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
              Trusted IT Services and Solutions{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                Since 1996.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-[#404040] leading-relaxed max-w-[44ch] mb-10">
              ITSco is the IT company businesses across NC, SC, VA, and beyond have trusted since 1996. We tie every technology investment to a business outcome. Reduced costs, fewer outages, stronger security, and measurable return on every IT dollar.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="homepage-hero"
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

        {/* Mobile image */}
        <div className="mt-12 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden">
          <Image
            src="/images/hero/services/pexels-vlada-karpovich-7433840.jpg"
            alt="ITSco managed IT services team"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Stats anchored to bottom */}
      <div className="relative w-full border-t border-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#EBEBEB]">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-4 px-6 md:px-8 py-6 first:pl-0">
                <CountUp
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="text-2xl md:text-3xl font-extrabold text-[#111111] leading-none tracking-tight whitespace-nowrap"
                />
                <span className="text-xs text-[#888] leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 2. Client logos ──────────────────────────────────────────────────────────

const CLIENTS = [
  { src: '/images/clients/emergeortho.png',           alt: 'EmergeOrtho' },
  { src: '/images/clients/SRN-vertical-300x300-1.jpg', alt: 'Southern Rehabilitation Network' },
  { src: '/images/clients/CBRE-Group-logo.jpg',        alt: 'CBRE' },
  { src: '/images/clients/Phononic_Logo_RGB-scaled.jpg', alt: 'Phononic' },
  { src: '/images/clients/cambrex-vector-logo.jpg',    alt: 'Cambrex' },
  { src: '/images/clients/NCACC_screen_seal_color.png', alt: 'NC Association of County Commissioners' },
  { src: '/images/clients/2021-LOGO-Forty540.jpg',     alt: 'Forty540' },
]

function ClientLogosBand() {
  return (
    <FadeUp>
      <div className="mt-20 pt-12 border-t border-[#EBEBEB]">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#BBBBBB] mb-8 text-center">
          Trusted by businesses across NC, SC &amp; VA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap">
          {CLIENTS.map((c) => (
            <div key={c.alt} className="relative h-10 w-32 grayscale opacity-70 mix-blend-multiply hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-300">
              <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="112px" />
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  )
}

// ── 3. Services overview — editorial list rows ──────────────────────────────

const SERVICES = [
  {
    number: '01',
    title: 'Network & Systems Engineering',
    description: 'LAN and WAN design, deployment, and management. Windows and *Nix engineering and administration.',
    href: '/network-engineering/',
  },
  {
    number: '02',
    title: 'DevOps Services',
    description: 'DevOps transformations for enterprise and community environments. Automation, orchestration, and containerization.',
    href: '/ai-automation/',
  },
  {
    number: '03',
    title: 'Integrated Services',
    description: 'Data storage, data management, and data security. Vulnerability audits and remediation. Disaster recovery solutions.',
    href: '/backup-disaster-recovery/',
  },
  {
    number: '04',
    title: 'Managed Services',
    description: 'Remote monitoring and management of IT systems and networks. Automated patching and upgrades. Help desk services and proactive support.',
    href: '/managed-it-services/',
  },
  {
    number: '05',
    title: 'Managed Security Services (MSSP)',
    description: 'Multi-level defense strategies. Active threat detection and response. SIEM and SOC services. Vulnerability scanning, secure access controls, and security awareness training.',
    href: '/cybersecurity/',
  },
  {
    number: '06',
    title: 'Executive Consulting',
    description: 'Fractional and interim CIO/CTO services. Strategic planning, risk mitigation, and business continuity planning.',
    href: '/vcio-vcto-vciso-services/',
  },
]

function ServicesSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">

        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-16 border-b border-[#EBEBEB]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
                An overview of <span className="text-[#CA3C27]">our services.</span>
              </h2>
            </div>
            <p className="text-sm text-[#404040] leading-relaxed max-w-[36ch] md:text-right">
              Professional services, managed services, and cybersecurity. Three pillars built on engineering excellence and customer service.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="divide-y divide-[#EBEBEB]">
          {SERVICES.map((s) => (
            <Link
              key={s.number}
              href={s.href}
              className="group flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0 py-7 -mx-6 px-6 lg:-mx-12 lg:px-12 hover:bg-black/[0.04] transition-[background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:opacity-80"
            >
              <span className="text-xs font-bold tabular-nums text-[#CCCCCC] lg:w-14 flex-shrink-0 group-hover:text-[#CA3C27] transition-[color] duration-200">
                {s.number}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#111111]/80 lg:w-[34%] flex-shrink-0 leading-snug group-hover:text-[#111111] transition-[color] duration-200">
                {s.title}
              </h3>
              <p className="text-sm text-[#404040] leading-relaxed lg:flex-1 lg:px-10 group-hover:text-[#111111] transition-[color] duration-200">
                {s.description}
              </p>
              <ArrowRight
                size={16}
                className="hidden lg:block flex-shrink-0 text-[#CCCCCC] group-hover:text-[#CA3C27] group-hover:translate-x-1 transition-[transform,color] duration-200"
              />
            </Link>
          ))}
        </StaggerChildren>

        {/* Logos integrated as a footer band on the services section */}
        <ClientLogosBand />

      </div>
    </section>
  )
}

// ── 4. Common Sense brand manifesto ──────────────────────────────────────────

function CommonSenseSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-[1.1] tracking-tight mb-8">
              Common Sense.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                Uncommon Expertise.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#404040] leading-relaxed mb-10">
              ITSco solves IT challenges through technical expertise, best-of-breed solutions, and practical business understanding. Experienced engineers who also understand the business challenges of our customers.
            </p>
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix="homepage-approach"
              className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Case studies — three featured ITSco engagements ────────────────────────

function CaseStudiesSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Proof, Not Promises
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4">
              Engineering excellence, <span className="text-[#CA3C27]">delivered.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              Three engagements that show what ITSco does best: complex infrastructure, secured and scaled. On time. On budget.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={120} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            <CaseStudyCard
              key="oil"
              category="Energy"
              title="Network Automation Improves Security, Supportability, and Scalability"
              description="Implementation of a scalable network automation engine to improve security for one of the world's largest oil companies."
              stat="On time"
              statLabel="and on budget"
              image="/images/case-studies/energy.jpg"
              imageAlt="Server infrastructure for an enterprise energy network"
              href="/case-studies/network-automation/"
            />,
            <CaseStudyCard
              key="bank"
              category="Banking"
              title="Helping a $27B Business Upgrade Network Management"
              description="Using automation to enhance the security, manageability, and scalability of a network infrastructure that supports thousands of employees across hundreds of offices."
              stat="2,800"
              statLabel="employees across 250 offices"
              image="/images/case-studies/banking.jpg"
              imageAlt="Banking professional reviewing financial systems"
              href="/case-studies/regional-bank/"
            />,
            <CaseStudyCard
              key="srn"
              category="Healthcare"
              title="Unlocking Business Opportunities Through IT Innovation"
              description="Design and implementation of a modernized computing infrastructure helped Southern Rehabilitation Network streamline business, improve security, and qualify for state contracts."
              stat="14"
              statLabel="locations supported"
              image="/images/case-studies/healthcare.jpg"
              imageAlt="Healthcare facility powered by modern IT infrastructure"
              href="/case-studies/southern-rehabilitation-network/"
            />,
          ]}
        </StaggerChildren>

      </div>
    </section>
  )
}

// ── Testimonials — full set, rotates 3 at a time inside the Proof chapter ──

const TESTIMONIALS = [
  {
    quote: "ITSco has provided our technical support for the past 22 years, and, without a doubt, it has been the best vendor relationship that I have had in my professional career. They are reliable, honest, and have been a true partner through all our growth.",
    name: "Chris Adkins",
    title: "Chief Administrative Officer",
    company: "EmergeOrtho",
  },
  {
    quote: "With ITSco, we get great technical advice from people who actually care about the success of our business. ITSco is responsive to our needs no matter what level of support is requested.",
    name: "Val Lorette",
    title: "Chief Operating Officer",
    company: "Berkshire Corporation",
  },
  {
    quote: "We have had a working relationship with ITSco for over ten years. ITSco is always there for us when we need them, and they have helped build up our IT infrastructure with robust resources that fit our security and everyday needs.",
    name: "Marlene Fulp",
    title: "Assistant Administrator",
    company: "Piedmont Triad Anesthesia",
  },
  {
    quote: "ITSco has been instrumental in helping us design, build and deploy an IT infrastructure that is dependable, scalable, and supportable. They are easy to work with, they have our best interest in mind, and they are always there for us when we need them.",
    name: "Nathan Stuart",
    title: "IT Manager",
    company: "Mid-Atlantic Christian University",
  },
  {
    quote: "ITSco is that rare company that can bridge the gap between technical expertise and really being a joy to work with. They have truly become a part of our team. They are professional, honest, and always deliver what they promise.",
    name: "Doug Hairfield",
    title: "Manager Systems Engineering",
    company: "Bronto",
  },
  {
    quote: "Our relationship has sustained over the years because ITSco core values match ours. They have integrity, they care about their customers, and they deliver a quality product. The solutions they have built for us are high performance, reliable, and were delivered on-time and on-budget.",
    name: "Joe Whitney",
    title: "Director, Plant IT Operations",
    company: "Hospira",
  },
  {
    quote: "We have worked with several ITSco personnel for 6 years on various IT projects. Their technical ability is astounding! ITSco responds quickly in emergency situations, they are fun to work with, and they always come through for us.",
    name: "Sandra Whitaker",
    title: "IT Manager",
    company: "Orthopaedic Specialists of the Carolinas",
  },
  {
    quote: "Every once in a while you come across a vendor that becomes a partner. It's someone you can call before you know the solution you are looking for and it's someone you'll keep with you for a long time. For me, ITSco is one of those vendors.",
    name: "Kurt Mosley",
    title: "Director of Service Delivery",
    company: "Peak10",
  },
  {
    quote: "ITSco was able to restore and repair an out-of-date system that had major problems in a timely manner. ITSco listens to our needs and does a great job of explaining the technical jargon so the technical and non-technical can understand all options.",
    name: "Jane Rouse",
    title: "President",
    company: "Southern Rehabilitation Network",
  },
  {
    quote: "ITSco has helped our non-profit with projects for SharePoint, VMWare, Exchange and Aruba. What is most impressive about ITSco professional services is their vast subject matter expertise and experience. We have yet to throw them a challenge that could not be resolved.",
    name: "Rick Furr",
    title: "Director of Support Services",
    company: "YMCA of the Triangle",
  },
  {
    quote: "In an ever changing technology landscape, ITSco has been an ideal partner. They work with our practice to ensure our IT needs are cared for now and in the years to come, and they have helped us to build a roadmap for success.",
    name: "Mark Rea",
    title: "IT Coordinator",
    company: "Southern Pines Women's Health Center",
  },
  {
    quote: "After 20+ years in the corporate technology world, I can confidently say that the ITSco team is the most competent, diligent, and dedicated IT Services team I've had the pleasure to work with and befriend. Full stop.",
    name: "Kevin Thornton",
    title: "Director, IT",
    company: "Extend",
  },
]

function TestimonialsSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              In Their Words
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              What our clients <span className="text-[#CA3C27]">are saying.</span>
            </h2>
          </div>
        </FadeUp>

        <TestimonialsRotator testimonials={TESTIMONIALS} visible={3} intervalMs={9000} />
      </div>
    </section>
  )
}

// ── 6. Industries ────────────────────────────────────────────────────────────

function IndustriesSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">

        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4">
              IT built for the way <span className="text-[#CA3C27]">your industry</span> works.
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              Compliance requirements, data sensitivity, and workflow demands differ by sector. Our teams are trained on yours, so you get IT advice built for your world.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={100} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            <IndustryCard key="hc" slug="healthcare-managed-it-services" title="Healthcare" description="HIPAA-compliant managed IT and cybersecurity for medical practices, health systems, and orthopaedic groups across the Southeast. EmergeOrtho trusts ITSco across 14 locations." href="/healthcare-managed-it-services/" />,
            <IndustryCard key="lg" slug="legal-and-law-firm-it-services" title="Legal" description="Secure, reliable IT for law firms that can't afford downtime or data breaches. Built with the confidentiality standards your practice requires." href="/legal-and-law-firm-it-services/" />,
            <IndustryCard key="bf" slug="banking-and-financial-services-it" title="Banking & Financial Services" description="SOC 2, PCI-DSS, and FFIEC-aligned managed IT and cybersecurity for banks, credit unions, RIAs, and private equity firms in the Southeast." href="/banking-and-financial-services-it/" />,
            <IndustryCard key="mf" slug="manufacturing-it" title="Manufacturing" description="OT/IT convergence, plant floor connectivity, ERP support, and network security engineered for manufacturers who can't afford unplanned downtime." href="/manufacturing-it/" />,
          ]}
        </StaggerChildren>

      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Nav variant="light" />

      {/* 1 — LIGHT — Hero */}
      <HomeHero />

      {/* CHAPTER 1 — Who we are (light, no internal borders) */}
      {/* 2 — Services + integrated logos band */}
      <ServicesSection />

      {/* 3 — Common Sense manifesto (transitions warm) */}
      <CommonSenseSection />

      {/* 5 — WARM — Case studies */}
      <CaseStudiesSection />

      {/* 6 — WARM → WHITE — Testimonials (closing beat of Proof chapter) */}
      <TestimonialsSection />

      {/* CHAPTER 3 — Where you go next */}
      {/* 7 — DARK  — AI Readiness (Variant C) */}
      <FadeUp>
        <HeroSection
          eyebrow="AI Readiness Assessment"
          heading="What's Your Strategy for AI Adoption?"
          subheading="Over 72% of businesses are integrating AI into their operations. Companies that fail to adapt to the AI revolution risk falling behind."
          imagePosition="none"
          stat="72%"
          statLabel="of businesses are integrating AI into operations"
          statColor="#ffffff"
          background="radial-gradient(ellipse at top left, #3a1208 0%, #1e0a06 50%, #0f0f0f 100%)"
          clip={false}
          orbs="dark"
          primaryCTA={{
            label: 'Book a Free Consultation',
            utmSuffix: 'homepage-ai',
          }}
          secondaryCTA={{
            label: 'Get an AI Readiness Assessment',
            href: '/ai-readiness-assessment/',
            variant: 'secondary',
          }}
        />
      </FadeUp>

      {/* 7 — LIGHT — Industries */}
      <IndustriesSection />

      {/* 8 — DARK  — Booking CTA */}
      <FadeUp>
        <BookingCTA
          utmSuffix="homepage-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      {/* 10 — Footer */}
      <Footer />
    </>
  )
}
