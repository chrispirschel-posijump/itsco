import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import DynamicIcon from '@/components/DynamicIcon'
import FullBleedHero from '@/components/FullBleedHero'
import ClientLogosBand from '@/components/ClientLogosBand'
import TestimonialsRotator from '@/components/TestimonialsRotator'
import { TESTIMONIALS } from '@/lib/testimonials'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export interface ServiceSubContent {
  meta: { title: string; description: string; canonical: string }
  serviceName: string
  // Pillar this sub-service rolls up under, used for breadcrumb + back-link.
  // When set, BreadcrumbList renders Home → Parent → Page and a visible
  // "Back to <parent.name>" pill appears at the top of related services.
  parent?: { name: string; href: string }
  hero: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    body: string
    utmSuffix: string
  }
  heroImage: { src: string; alt: string }
  intro: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    paragraphs: readonly string[]
  }
  stats?: ReadonlyArray<{ value: string; label: string }>
  capabilitiesHeading: { eyebrow: string; headlineLead: string; headlineAccent: string }
  capabilities: ReadonlyArray<{ slug: string; title: string; description: string }>
  outcomes?: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    paragraphs: readonly string[]
    bullets?: readonly string[]
    // 'risk' = muted caution marker on bullets; default 'payoff' = red check.
    tone?: 'risk' | 'payoff'
    image: { src: string; alt: string }
  }
  related: {
    heading: string
    links: ReadonlyArray<{ slug: string; label: string; href: string; description: string }>
  }
  faqHeading?: { eyebrow: string; headlineLead: string; headlineAccent: string }
  faqs?: ReadonlyArray<{ question: string; answer: readonly string[] }>
  bookingUtm: string
}

export function serviceJsonLd(content: ServiceSubContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.serviceName,
    serviceType: content.serviceName,
    provider: {
      '@type': 'Organization',
      name: 'ITSco',
      url: 'https://www.itsco.com/',
    },
    description: content.meta.description,
    areaServed: [
      { '@type': 'State', name: 'North Carolina' },
      { '@type': 'State', name: 'South Carolina' },
      { '@type': 'State', name: 'Virginia' },
    ],
    url: content.meta.canonical,
  }
}

export function serviceBreadcrumbJsonLd(content: ServiceSubContent) {
  const pageName = content.meta.title.replace(/\s*\|\s*ITSco\s*$/, '')
  const items: object[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
  ]
  if (content.parent) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: content.parent.name,
      item: `https://www.itsco.com${content.parent.href}`,
    })
    items.push({ '@type': 'ListItem', position: 3, name: pageName, item: content.meta.canonical })
  } else {
    items.push({ '@type': 'ListItem', position: 2, name: pageName, item: content.meta.canonical })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

export function serviceFaqJsonLd(content: ServiceSubContent) {
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

function Intro({ content }: { content: ServiceSubContent }) {
  const { intro, stats } = content
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              {intro.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-8">
              {intro.headlineLead}{' '}
              <span className="text-itsco-red">{intro.headlineAccent}</span>
            </h2>
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-itsco-body leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </FadeUp>

        {stats && stats.length > 0 && (
          <FadeUp delay={120}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-itsco-red">
                    {s.value}
                  </p>
                  <p className="text-sm font-medium text-itsco-body leading-relaxed mt-3">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  )
}

function Capabilities({ content }: { content: ServiceSubContent }) {
  const { capabilitiesHeading, capabilities } = content
  return (
    <section
      id="capabilities"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {capabilitiesHeading.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {capabilitiesHeading.headlineLead}{' '}
              <span className="text-itsco-red">{capabilitiesHeading.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-itsco-red/10 flex items-center justify-center mb-5 flex-shrink-0">
                <DynamicIcon slug={c.slug} size={24} className="text-itsco-red" />
              </div>
              <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2">{c.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">{c.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function Outcomes({ content }: { content: ServiceSubContent }) {
  if (!content.outcomes) return null
  const { outcomes } = content
  const isRisk = outcomes.tone === 'risk'
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-1 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={outcomes.image.src}
                alt={outcomes.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="order-2 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {outcomes.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              {outcomes.headlineLead}{' '}
              <span className="text-itsco-red">{outcomes.headlineAccent}</span>
            </h2>
            {outcomes.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-itsco-body leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
            {outcomes.bullets && outcomes.bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {outcomes.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base text-itsco-body leading-relaxed">
                    {isRisk ? (
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-itsco-red flex-shrink-0 mt-2" />
                    ) : (
                      <Check size={20} className="text-itsco-red flex-shrink-0 mt-0.5" />
                    )}
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function MidCta({ content }: { content: ServiceSubContent }) {
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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
            Ready when you are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-8">
            One conversation. A clear picture of{' '}
            <span className="text-itsco-red">where your IT stands.</span>
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

function Testimonials() {
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

function RelatedServices({ content }: { content: ServiceSubContent }) {
  const { related, parent } = content
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        {parent && (
          <FadeUp>
            <Link
              href={parent.href}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-itsco-red hover:text-itsco-red-dark mb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red rounded-sm"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              Back to {parent.name}
            </Link>
          </FadeUp>
        )}
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-10">
            {related.heading}
          </h2>
        </FadeUp>
        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-itsco-red"
            >
              <div className="w-12 h-12 rounded-xl bg-itsco-dark flex items-center justify-center mb-5 flex-shrink-0">
                <DynamicIcon slug={l.slug} size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2">{l.label}</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">{l.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-itsco-red">
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

function Faqs({ content }: { content: ServiceSubContent }) {
  const faqs = (content.faqs ?? []).filter((f) => f.answer.some((a) => a.trim().length > 0))
  if (faqs.length === 0 || !content.faqHeading) return null
  const { faqHeading } = content
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {faqHeading.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {faqHeading.headlineLead}{' '}
              <span className="text-itsco-red">{faqHeading.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>
        <StaggerChildren stagger={60} className="space-y-4">
          {faqs.map((f) => (
            <div
              key={f.question}
              className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <h3 className="flex items-start gap-3 text-lg font-semibold text-itsco-dark leading-snug mb-3">
                <Check size={20} className="text-itsco-red flex-shrink-0 mt-0.5" />
                <span>{f.question}</span>
              </h3>
              <div className="pl-8">
                {f.answer.map((a, i) => (
                  <p key={i} className="text-base text-itsco-body leading-relaxed mb-3 last:mb-0">
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

export default function ServiceSubPage({ content }: { content: ServiceSubContent }) {
  const schemas = [
    serviceJsonLd(content),
    serviceBreadcrumbJsonLd(content),
    serviceFaqJsonLd(content),
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
      <Nav variant="dark" />
      <main>
        <FullBleedHero {...content.hero} image={content.heroImage} />
        <Intro content={content} />
        <Capabilities content={content} />
        <ClientLogosBand variant="section" />
        <Outcomes content={content} />
        <MidCta content={content} />
        <Testimonials />
        <RelatedServices content={content} />
        <Faqs content={content} />
        <BookingCTA utmSuffix={content.bookingUtm} />
      </main>
      <Footer />
    </>
  )
}
