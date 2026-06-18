import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'IT Services & Solutions | ITSco',
  description:
    'Managed IT, cybersecurity, cloud, Microsoft solutions, strategy, and engineering — ITSco delivers ROI-driven IT services for businesses across NC, SC, and VA.',
  alternates: { canonical: 'https://www.itsco.com/services/' },
}

const SERVICES = [
  {
    slug: 'managed-it-services',
    title: 'Managed IT Services',
    description:
      'Proactive support, 24/7 monitoring, help desk, and network management that keep your business running — with predictable, fixed-rate pricing.',
    href: '/managed-it-services/',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & MSSP',
    description:
      'Layered defense — SOC, SIEM, MDR, firewall, and endpoint protection — from a team that has never had a client experience a serious breach.',
    href: '/cybersecurity/',
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    description:
      'Cloud migration, hosting, and managed Azure and AWS environments engineered for reliability, scalability, and security.',
    href: '/cloud-services/',
  },
  {
    slug: 'it-management-consulting',
    title: 'Strategy & Consulting',
    description:
      'vCIO, vCTO, and vCISO leadership, IT roadmaps, and due diligence that align technology spending with your business plans.',
    href: '/it-management-consulting/',
  },
  {
    slug: 'microsoft-solutions',
    title: 'Microsoft Solutions',
    description:
      'Microsoft 365, Azure, Teams, SharePoint, Copilot, and Sentinel — deployed, secured, and managed by certified engineers.',
    href: '/microsoft-solutions/',
  },
  {
    slug: 'network-engineering',
    title: 'Engineering',
    description:
      'Network and systems engineering, VoIP, IT procurement, and secure asset disposition delivered by senior technical talent.',
    href: '/network-engineering/',
  },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
            ITSco Services
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
            IT services built around{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
            >
              business outcomes.
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-2xl mx-auto mb-10">
            From day-to-day support to executive strategy, ITSco delivers the full spectrum of IT
            services — every engagement measured by ROI, not technical deliverables.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix="services-hero"
              className="px-8 py-4 rounded-xl text-base"
            />
            <CTAButton
              label="Explore our services"
              href="#services"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section
      id="services"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} description={s.description} href={s.href} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'IT Services',
  url: 'https://www.itsco.com/services/',
  description:
    'Managed IT, cybersecurity, cloud, Microsoft solutions, engineering, and strategy services for businesses across NC, SC, and VA.',
  about: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.itsco.com/services/' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />
      <main>
        <Hero />
        <ServicesGrid />
        <BookingCTA utmSuffix="services-bottom" />
      </main>
      <Footer />
    </>
  )
}
