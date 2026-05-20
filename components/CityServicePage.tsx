import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, MapPin } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import DynamicIcon from '@/components/DynamicIcon'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import ClientLogosBand from '@/components/ClientLogosBand'
import TestimonialsRotator from '@/components/TestimonialsRotator'
import { TESTIMONIALS } from '@/lib/testimonials'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export interface CityServiceContent {
  meta: { title: string; description: string; canonical: string }
  hero: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    body: string
    utmSuffix: string
  }
  heroImage: { src: string; alt: string }
  capabilitiesHeading: { eyebrow: string; headlineLead: string; headlineAccent: string }
  capabilities: ReadonlyArray<{ slug: string; title: string; description: string }>
  positioning: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    paragraphs: readonly string[]
  }
  stats: ReadonlyArray<{ value: string; label: string }>
  whyUs: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    paragraphs: readonly string[]
    image: { src: string; alt: string }
  }
  security: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    paragraphs: readonly string[]
    image: { src: string; alt: string }
  }
  related?: {
    heading: string
    links: ReadonlyArray<{ slug: string; label: string; href: string; description: string }>
  }
  faqHeading?: { eyebrow: string; headlineLead: string; headlineAccent: string }
  faqs?: ReadonlyArray<{ question: string; answer: readonly string[] }>
  bookingUtm: string
}

// ITSco's business listing — constant across every city page.
const OFFICE = {
  eyebrow: 'Locally based',
  headlineLead: 'A genuine local partner —',
  headlineAccent: 'on-site when you need us.',
  body: 'ITSco is headquartered in Durham, NC, with on-site and remote engineers serving businesses across North Carolina, South Carolina, and Virginia. Being local means faster response times and a partner who truly knows your market.',
  address: '4601 Creekstone Drive, Suite 102, Durham, NC 27703',
  mapEmbedSrc:
    'https://www.google.com/maps?q=4601+Creekstone+Drive+Suite+102+Durham+NC+27703&output=embed',
  mapLink: 'https://maps.app.goo.gl/2CwvVh9KFAzDy3wt6',
}

export function cityFaqJsonLd(content: CityServiceContent) {
  const faqs = (content.faqs ?? []).filter((f) => f.answer.some((a) => a.trim().length > 0))
  if (faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.join(' ') },
    })),
  }
}

export function cityLocalBusinessJsonLd(content: CityServiceContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ITSco',
    alternateName: 'ITS co',
    description: content.meta.description,
    url: content.meta.canonical,
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
  }
}

export function cityBreadcrumbJsonLd(content: CityServiceContent) {
  const pageName = content.meta.title.replace(/\s*\|\s*ITSco\s*$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
      { '@type': 'ListItem', position: 2, name: pageName, item: content.meta.canonical },
    ],
  }
}

function Hero({ content }: { content: CityServiceContent }) {
  const { hero, heroImage } = content
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-itsco-paper via-itsco-paper/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper/40 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 lg:flex lg:items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="lg:max-w-[48%]">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              {hero.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
              {hero.headlineLead}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                {hero.headlineAccent}
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-[#404040] leading-relaxed mb-10 max-w-xl">{hero.body}</p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix={hero.utmSuffix}
                className="px-8 py-4 rounded-xl text-base"
              />
              <CTAButton
                label="See our capabilities"
                href="#capabilities"
                variant="secondary"
                className="px-8 py-4 rounded-xl text-base"
              />
            </div>
          </FadeUp>
        </div>

        <div className="mt-12 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden w-full">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
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

function Capabilities({ content }: { content: CityServiceContent }) {
  const { capabilitiesHeading, capabilities } = content
  return (
    <section id="capabilities" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {capabilitiesHeading.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              {capabilitiesHeading.headlineLead}{' '}
              <span className="text-[#CA3C27]">{capabilitiesHeading.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#CA3C27]/10 flex items-center justify-center mb-5 flex-shrink-0">
                <DynamicIcon slug={c.slug} size={24} className="text-[#CA3C27]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">{c.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">{c.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function Positioning({ content }: { content: CityServiceContent }) {
  const { positioning, stats } = content
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {positioning.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              {positioning.headlineLead}{' '}
              <span className="text-[#CA3C27]">{positioning.headlineAccent}</span>
            </h2>
            {positioning.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-[#404040] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </FadeUp>

          <FadeUp delay={120} className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-[#CA3C27]">
                    {s.value}
                  </p>
                  <p className="text-sm font-medium text-[#404040] leading-relaxed mt-3">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function SplitNarrative({
  data,
  imageSide,
  bg,
}: {
  data: CityServiceContent['whyUs'] | CityServiceContent['security']
  imageSide: 'left' | 'right'
  bg: string
}) {
  const imageFirst = imageSide === 'left'
  const textOrder = imageFirst ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
  const imageOrder = imageFirst ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
  return (
    <section style={{ background: bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className={`${imageOrder} lg:col-span-5`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className={`${textOrder} lg:col-span-7`}>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {data.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              {data.headlineLead}{' '}
              <span className="text-[#CA3C27]">{data.headlineAccent}</span>
            </h2>
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-[#404040] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function RelatedServices({ content }: { content: CityServiceContent }) {
  if (!content.related) return null
  const { related } = content
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-10">
            {related.heading}
          </h2>
        </FadeUp>
        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center mb-5 flex-shrink-0">
                <DynamicIcon slug={l.slug} size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">{l.label}</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">{l.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CA3C27]">
                Learn more
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function Faqs({ content }: { content: CityServiceContent }) {
  const faqs = (content.faqs ?? []).filter((f) => f.answer.some((a) => a.trim().length > 0))
  if (faqs.length === 0 || !content.faqHeading) return null
  const { faqHeading } = content
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {faqHeading.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              {faqHeading.headlineLead}{' '}
              <span className="text-[#CA3C27]">{faqHeading.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>
        <StaggerChildren stagger={60} className="space-y-4">
          {faqs.map((f) => (
            <div
              key={f.question}
              className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <h3 className="flex items-start gap-3 text-lg font-semibold text-[#111111] leading-snug mb-3">
                <Check size={20} className="text-[#CA3C27] flex-shrink-0 mt-0.5" />
                <span>{f.question}</span>
              </h3>
              <div className="pl-8">
                {f.answer.map((a, i) => (
                  <p key={i} className="text-base text-[#404040] leading-relaxed mb-3 last:mb-0">
                    {a}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function Testimonials() {
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

function MidCta({ content }: { content: CityServiceContent }) {
  const utmSuffix = content.bookingUtm.replace(/-bottom$/, '-mid')
  return (
    <section
      className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)] py-20 md:py-24"
      style={{
        ['--color-itsco-cta' as string]: '#CA3C27',
        ['--color-itsco-cta-hover' as string]: '#B4311E',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
            Ready when you are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-8">
            Predictable IT costs, fewer surprises,{' '}
            <span className="text-[#CA3C27]">measurable ROI.</span>
          </h2>
          <CTAButton
            label="Book a Free Consultation"
            utmSuffix={utmSuffix}
            className="px-8 py-4 rounded-xl text-base hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </FadeUp>
      </div>
    </section>
  )
}

function OfficeLocation() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {OFFICE.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              {OFFICE.headlineLead}{' '}
              <span className="text-[#CA3C27]">{OFFICE.headlineAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-8">{OFFICE.body}</p>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#404040]/70 mb-1">
                  Business office
                </p>
                <a
                  href={OFFICE.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-[#111111] hover:text-[#CA3C27] transition-colors duration-200"
                >
                  {OFFICE.address}
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#EBEBEB]">
              <iframe
                src={OFFICE.mapEmbedSrc}
                title={`Google Maps — ${OFFICE.address}`}
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

export default function CityServicePage({ content }: { content: CityServiceContent }) {
  const schemas = [
    cityLocalBusinessJsonLd(content),
    cityBreadcrumbJsonLd(content),
    cityFaqJsonLd(content),
  ].filter(Boolean)
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Nav variant="light" />
      <main>
        <Hero content={content} />
        <Capabilities content={content} />
        <ClientLogosBand variant="section" />
        <Positioning content={content} />
        <SplitNarrative data={content.whyUs} imageSide="right" bg="var(--color-itsco-paper)" />
        <SplitNarrative
          data={content.security}
          imageSide="left"
          bg="linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)"
        />
        <Testimonials />
        <MidCta content={content} />
        <RelatedServices content={content} />
        <Faqs content={content} />
        <OfficeLocation />
        <BookingCTA utmSuffix={content.bookingUtm} />
      </main>
      <Footer />
    </>
  )
}
