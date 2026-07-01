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
import ClientLogosBand from '@/components/ClientLogosBand'
import { TESTIMONIALS } from '@/lib/testimonials'

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
  sameAs: ['https://www.linkedin.com/company/itscotech/'],
}

// Organization schema complements LocalBusiness — the two coexist because
// LocalBusiness has geo/address optimization for local search while
// Organization is the canonical entity for knowledge-graph resolution and
// AI-engine citation. Shared @id keeps them referring to the same entity.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.itsco.com/#organization',
  name: 'ITSco',
  alternateName: 'ITS co',
  url: 'https://www.itsco.com/',
  logo: 'https://www.itsco.com/images/itsco-logo.svg',
  description:
    'ITSco is a managed IT services provider (MSP) and managed security services provider (MSSP) headquartered in Durham, North Carolina. Founded 1996.',
  foundingDate: '1996',
  sameAs: ['https://www.linkedin.com/company/itscotech/'],
}

// WebSite schema enables Google's site-search sitelinks box (the search bar
// under organic results). potentialAction points at /blog/ as the searchable
// entry point since it's the site's largest content index.
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.itsco.com/#website',
  url: 'https://www.itsco.com/',
  name: 'ITSco',
  publisher: { '@id': 'https://www.itsco.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.itsco.com/blog/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              Serving Raleigh, Durham &amp; the Southeast
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
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
            <p className="text-lg text-itsco-body leading-relaxed max-w-[44ch] mb-10">
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
                  className="text-2xl md:text-3xl font-extrabold text-itsco-dark leading-none tracking-tight whitespace-nowrap"
                />
                <span className="text-xs text-[#555] leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
                An overview of <span className="text-itsco-red">our services.</span>
              </h2>
            </div>
            <p className="text-sm text-itsco-body leading-relaxed max-w-[36ch] md:text-right">
              Professional services, managed services, and cybersecurity. Three pillars built on engineering excellence and customer service.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="divide-y divide-[#EBEBEB]">
          {SERVICES.map((s) => (
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
              <p className="text-sm text-itsco-body leading-relaxed lg:flex-1 lg:px-10 group-hover:text-itsco-dark transition-[color] duration-200">
                {s.description}
              </p>
              <ArrowRight
                size={16}
                className="hidden lg:block flex-shrink-0 text-[#999] group-hover:text-itsco-red group-hover:translate-x-1 transition-[transform,color] duration-200"
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-itsco-dark leading-[1.1] tracking-tight mb-8">
              Common Sense.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                Uncommon Expertise.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-itsco-body leading-relaxed mb-10">
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Proof, Not Promises
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              Engineering excellence, <span className="text-itsco-red">delivered.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Four engagements that show what ITSco does best: complex infrastructure, secured and scaled. On time. On budget.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={120} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            <CaseStudyCard
              key="emergeortho"
              category="Healthcare"
              title="Transforming Mobile MRI Services Through Remote Operations"
              description="Remote-scanning hubs unlocked 40 extra hours of MRI capacity per truck per week and cut labor costs 30–40% across EmergeOrtho's 17-site imaging network."
              stat="40 hrs"
              statLabel="extra MRI capacity per week, per truck"
              image="/images/case-studies/healthcare.jpg"
              imageAlt="Healthcare imaging environment — remote MRI operations"
              href="/case-studies/emerge-ortho-mobile-mri-remote-operations/"
            />,
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
              category="Financial Services"
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
              image="/images/supporting/industries/pexels-polina-tankilevitch-5234499.jpg"
              imageAlt="Healthcare provider with tablet — IT modernization"
              href="/case-studies/southern-rehabilitation-network/"
            />,
          ]}
        </StaggerChildren>

      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              In Their Words
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              What our clients <span className="text-itsco-red">are saying.</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              IT built for the way <span className="text-itsco-red">your industry</span> works.
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Compliance requirements, data sensitivity, and workflow demands differ by sector. Our teams are trained on yours, so you get IT advice built for your world.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={100} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            <IndustryCard key="hc" slug="healthcare-managed-it-services" title="Healthcare" description="HIPAA-compliant managed IT and cybersecurity for medical practices, health systems, and orthopaedic groups across the Southeast. EmergeOrtho trusts ITSco across 14 locations." href="/healthcare-managed-it-services/" />,
            <IndustryCard key="lg" slug="legal-and-law-firm-it-services" title="Legal" description="Secure, reliable IT for law firms that can't afford downtime or data breaches. Built with the confidentiality standards your practice requires." href="/legal-and-law-firm-it-services/" />,
            <IndustryCard key="bf" slug="financial-services-it" title="Financial Services" description="SOC 2, PCI-DSS, and FFIEC-aligned managed IT and cybersecurity for banks, credit unions, RIAs, and private equity firms in the Southeast." href="/financial-services-it/" />,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
      {/* 7 — DARK  — AI Readiness (Variant C). The wrapper restores brand red
          for this section's CTAs even when an outer theme override (e.g.
          /demo-oat) sets --color-itsco-cta to a different value. */}
      <FadeUp>
        <div
          style={{
            ['--color-itsco-cta' as string]: '#CA3C27',
            ['--color-itsco-cta-hover' as string]: '#B4311E',
          }}
        >
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
        </div>
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
