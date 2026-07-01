import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import DynamicIcon from '@/components/DynamicIcon'
import ClientLogosBand from '@/components/ClientLogosBand'
import { MapPin } from 'lucide-react'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import { META, HERO, HERO_IMAGE, VALUES_HEADING, VALUES, SERVICE_AREA } from './content'

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: META.canonical },
}

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-itsco-paper via-itsco-paper/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper/40 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="lg:max-w-[48%]">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              {HERO.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
              {HERO.headlineLead}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                {HERO.headlineAccent}
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-itsco-body leading-relaxed mb-10 max-w-xl">{HERO.body}</p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="border-l-4 border-itsco-red pl-5">
                <p className="text-5xl font-extrabold leading-none tracking-tight text-itsco-dark">{HERO.stat}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-itsco-body/70 mt-2">{HERO.statLabel}</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={400}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix={HERO.utmSuffix}
                className="px-8 py-4 rounded-xl text-base"
              />
              <CTAButton
                label="Meet the Team"
                href="/about-us/meet-the-team/"
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

function Values() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {VALUES_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {VALUES_HEADING.headlineLead}{' '}
              <span className="text-itsco-red">{VALUES_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {VALUES.map((v) => (
            <div
              key={v.slug}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-itsco-dark flex items-center justify-center mb-6 flex-shrink-0">
                <DynamicIcon slug={v.slug} size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-itsco-dark leading-snug tracking-tight mb-4">{v.title}</h3>
              <p className="text-base text-itsco-body leading-relaxed flex-1">{v.paragraph}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {SERVICE_AREA.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              {SERVICE_AREA.headlineLead}{' '}
              <span className="text-itsco-red">{SERVICE_AREA.headlineAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-8">
              {SERVICE_AREA.body}
            </p>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-itsco-dark flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-itsco-body/70 mb-1">
                  Business office
                </p>
                <a
                  href={SERVICE_AREA.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-itsco-dark hover:text-itsco-red transition-colors duration-200"
                >
                  {SERVICE_AREA.address}
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#EBEBEB]">
              <iframe
                src={SERVICE_AREA.mapEmbedSrc}
                title={`Google Maps — ${SERVICE_AREA.address}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// Stable Schema.org IDs let other JSON-LD blocks reference these entities by
// @id (e.g. blog Person → Organization affiliation). Using anchored hashes
// on existing page URLs is the standard convention.
const ORG_ID = 'https://www.itsco.com/#organization'
const MIKE_ID = 'https://www.itsco.com/about-us/meet-the-team/#mike-savino'
const GEORGE_ID = 'https://www.itsco.com/about-us/meet-the-team/#george-terrone'
const GREG_ID = 'https://www.itsco.com/about-us/meet-the-team/#greg-wassil'

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'ITSco',
  url: 'https://www.itsco.com/',
  logo: 'https://www.itsco.com/images/itsco-logo.png',
  foundingDate: '1996',
  founders: [{ '@id': GEORGE_ID }],
  description:
    'ITSco is a managed IT services provider and MSSP headquartered near Research Triangle Park, Durham NC. Serves SMB to enterprise across NC, SC, and VA since 1996.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4601 Creekstone Drive, Suite 102',
    addressLocality: 'Durham',
    addressRegion: 'NC',
    postalCode: '27703',
    addressCountry: 'US',
  },
  areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
  employee: [{ '@id': MIKE_ID }, { '@id': GREG_ID }, { '@id': GEORGE_ID }],
  sameAs: ['https://www.linkedin.com/company/itscotech/'],
}

// Person schema for leadership — boosts E-E-A-T and gives AI engines a
// clear human-author signal connected to the Organization.
const leadershipJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': MIKE_ID,
    name: 'Mike Savino',
    jobTitle: 'Chief Executive Officer & Chief Financial Officer',
    worksFor: { '@id': ORG_ID },
    url: 'https://www.itsco.com/about-us/meet-the-team/',
    description:
      'CEO and CFO of ITSco, focused on the outcomes that matter most to clients: financial stability, revenue growth, and operational excellence.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': GEORGE_ID,
    name: 'George Terrone',
    jobTitle: 'Founder',
    worksFor: { '@id': ORG_ID },
    url: 'https://www.itsco.com/about-us/meet-the-team/',
    description:
      'Founder of ITSco. Founded the company in 1996 to deliver outcomes-focused IT services to North Carolina businesses.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': GREG_ID,
    name: 'Greg Wassil',
    jobTitle: 'Chief Technology Officer & Co-Founder',
    worksFor: { '@id': ORG_ID },
    url: 'https://www.itsco.com/about-us/meet-the-team/',
    description:
      'CTO and Co-Founder of ITSco. Leads technical strategy and engineering across managed IT, cybersecurity, and cloud services.',
  },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.itsco.com/about-us/' },
  ],
}

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {leadershipJsonLd.map((person) => (
        <script
          key={person['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      ))}
      <Nav variant="light" />
      <main>
        <Hero />
        <ClientLogosBand variant="section" />
        <Values />
        <ServiceArea />
        <BookingCTA utmSuffix="about-us-bottom" />
      </main>
      <Footer />
    </>
  )
}
