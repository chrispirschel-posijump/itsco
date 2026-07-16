import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import IndustryCard from '@/components/IndustryCard'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Industry-specific managed IT and cybersecurity — healthcare, legal, financial services, manufacturing, and more — for businesses across NC, SC, and VA.',
  alternates: { canonical: 'https://www.itsco.com/industries/' },
}

const INDUSTRIES = [
  {
    slug: 'healthcare-managed-it-services',
    title: 'Healthcare IT',
    description: 'HIPAA-aligned managed IT and security for practices, health systems, and medical groups.',
    href: '/healthcare-managed-it-services/',
  },
  {
    slug: 'pharma-med-tech-it-services',
    title: 'Pharma & Med Tech',
    description: 'Validated, compliant IT for pharmaceutical, biotech, and medical device companies.',
    href: '/pharma-med-tech-it-services/',
  },
  {
    slug: 'financial-services-it',
    title: 'Financial Services',
    description: 'SOC 2, PCI-DSS, and FFIEC-aligned IT for banks, credit unions, and financial firms.',
    href: '/financial-services-it/',
  },
  {
    slug: 'legal-and-law-firm-it-services',
    title: 'Legal & Law Firms',
    description: 'Secure, reliable IT built for the confidentiality and uptime demands of legal practices.',
    href: '/legal-and-law-firm-it-services/',
  },
  {
    slug: 'accounting-firm-it-services',
    title: 'Accounting Firms',
    description: 'Secure, deadline-ready IT and cybersecurity for accounting and tax firms.',
    href: '/accounting-firm-it-services/',
  },
  {
    slug: 'manufacturing-it',
    title: 'Manufacturing',
    description: 'OT/IT convergence, plant-floor connectivity, and network security for manufacturers.',
    href: '/manufacturing-it/',
  },
  {
    slug: 'professional-it-services',
    title: 'Professional Services',
    description: 'Responsive managed IT for consultancies, agencies, and professional firms.',
    href: '/professional-it-services/',
  },
  {
    slug: 'non-profit-it-services',
    title: 'Non-Profit',
    description: 'Cost-effective, mission-focused managed IT and security for non-profit organizations.',
    href: '/non-profit-it-services/',
  },
]

const BY_SIZE = [
  {
    slug: 'small-business',
    title: 'Small Business',
    description: 'Right-sized managed IT that gives small businesses enterprise-grade reliability.',
    href: '/small-business/',
  },
  {
    slug: 'mid-sized-business',
    title: 'Mid-Sized Business',
    description: 'Scalable IT and security that grow with your mid-sized organization.',
    href: '/mid-sized-business/',
  },
  {
    slug: 'large-business-it-services',
    title: 'Large Business',
    description: 'Comprehensive managed IT and MSSP coverage for large, multi-site businesses.',
    href: '/large-business-it-services/',
  },
  {
    slug: 'enterprise-managed-it-services',
    title: 'Enterprise',
    description: 'Strategic IT leadership and engineering depth for enterprise environments.',
    href: '/enterprise-managed-it-services/',
  },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
            Industries We Serve
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
            IT engineered for{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
            >
              your industry.
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-itsco-body leading-relaxed max-w-2xl mx-auto mb-10">
            ITSco brings 30 years of experience to the specific compliance, uptime, and security
            demands of your field — across North Carolina, South Carolina, and Virginia.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix="industries-hero"
              className="px-8 py-4 rounded-xl text-base"
            />
            <CTAButton
              label="Find your industry"
              href="#industries"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function IndustriesGrid() {
  return (
    <section
      id="industries"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-24">
        <StaggerChildren stagger={50} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INDUSTRIES.map((i) => (
            <IndustryCard key={i.slug} slug={i.slug} title={i.title} description={i.description} href={i.href} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function BySize() {
  return (
    <section className="bg-itsco-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <FadeUp>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              By Company Size
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              IT that fits your{' '}
              <span className="text-itsco-red">stage of growth.</span>
            </h2>
          </div>
        </FadeUp>
        <StaggerChildren stagger={50} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BY_SIZE.map((s) => (
            <IndustryCard key={s.slug} slug={s.slug} title={s.title} description={s.description} href={s.href} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

const industriesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industries We Serve',
  url: 'https://www.itsco.com/industries/',
  description:
    'Industry-specific IT services for healthcare, legal, financial services, manufacturing, accounting, professional services, non-profits, and more.',
  about: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.itsco.com/industries/' },
  ],
}

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />
      <main>
        <Hero />
        <IndustriesGrid />
        <BySize />
        <BookingCTA utmSuffix="industries-bottom" />
      </main>
      <Footer />
    </>
  )
}
