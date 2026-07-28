import Image from 'next/image'
import HeroImage from '@/components/HeroImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import DynamicIcon from '@/components/DynamicIcon'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

// Shared Variant B template for industry-vertical pages. Mirrors the
// established legal-and-law-firm layout: light hero with image-left,
// capabilities grid, four image+text pillars, mid CTA, case studies,
// FAQs, related services, booking CTA.

export interface IndustryCapability {
  slug: string
  title: string
  description: string
}

export interface IndustryPillar {
  eyebrow: string
  headlineLead: string
  headlineAccent: string
  paragraphs: string[]
  image: string
  imageAlt: string
  imageSide: 'left' | 'right'
}

export interface IndustryCaseStudyCard {
  key: string
  category: string
  title: string
  description: string
  stat?: string
  statLabel?: string
  image: string
  imageAlt: string
  href: string
}

export interface IndustryRelatedService {
  slug: string
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

export interface IndustryContent {
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
  capabilities: IndustryCapability[]
  pillars: IndustryPillar[]
  midCta: { eyebrow: string; headline: string; utmSuffix: string }
  caseStudies: {
    eyebrow: string
    headlineLead: string
    headlineAccent: string
    cards: IndustryCaseStudyCard[]
  }
  faqHeading: { eyebrow: string; headlineLead: string; headlineAccent: string }
  faqCalendlyUtm: string
  faqs: Array<{ question: string; answer: string[] }>
  faqInlineCtaIndex: number
  faqInlineCtaTrailingText: string
  relatedHeading: { eyebrow: string; headlineLead: string; headlineAccent: string }
  relatedServices: IndustryRelatedService[]
  bookingUtm: string
}

const PILLAR_BACKGROUNDS = [
  'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)',
  'var(--color-itsco-blush)',
  'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)',
  'var(--color-itsco-paper)',
]

function Hero({ content }: { content: IndustryContent }) {
  const { hero, heroImage } = content
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <HeroImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-itsco-paper via-itsco-paper/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper/40 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="lg:ml-[52%] lg:pl-12 lg:max-w-[48%]">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
              {hero.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
              {hero.headlineLead}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                {hero.headlineAccent}
              </span>
            </h1>
          </FadeUp>
          {hero.body && (
            <FadeUp delay={200}>
              <p className="text-lg text-itsco-body leading-relaxed mb-10 max-w-xl">{hero.body}</p>
            </FadeUp>
          )}
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
      </div>
    </section>
  )
}

function CapabilitiesSection({ content }: { content: IndustryContent }) {
  const { capabilitiesHeading, capabilities } = content
  return (
    <section id="capabilities" className="bg-itsco-paper">
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

function PillarSection({ pillar, bg }: { pillar: IndustryPillar; bg: string }) {
  const imageFirst = pillar.imageSide === 'left'
  const textOrder = imageFirst ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
  const imageOrder = imageFirst ? 'order-1 lg:order-1' : 'order-1 lg:order-2'

  return (
    <section style={{ background: bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className={`${imageOrder} lg:col-span-5`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className={`${textOrder} lg:col-span-7`}>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {pillar.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              {pillar.headlineLead}{' '}
              <span className="text-itsco-red">{pillar.headlineAccent}</span>
            </h2>
            {pillar.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-base md:text-lg text-itsco-body leading-relaxed ${
                  i < pillar.paragraphs.length - 1 ? 'mb-4' : ''
                }`}
              >
                {p}
              </p>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function MidCTA({ content }: { content: IndustryContent }) {
  const { midCta } = content
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
            {midCta.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl">
            {midCta.headline}
          </h2>
        </div>
        <CTAButton
          label="Book a Free Consultation"
          utmSuffix={midCta.utmSuffix}
          className="px-8 py-4 rounded-xl text-base flex-shrink-0"
        />
      </div>
    </section>
  )
}

function CaseStudiesSection({ content }: { content: IndustryContent }) {
  const { caseStudies } = content
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {caseStudies.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {caseStudies.headlineLead}{' '}
              <span className="text-itsco-red">{caseStudies.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={120} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.cards.map((c) => (
            <CaseStudyCard
              key={c.key}
              category={c.category}
              title={c.title}
              description={c.description}
              stat={c.stat}
              statLabel={c.statLabel}
              image={c.image}
              imageAlt={c.imageAlt}
              href={c.href}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function FAQSection({ content }: { content: IndustryContent }) {
  const { faqHeading, faqs, faqCalendlyUtm, faqInlineCtaIndex, faqInlineCtaTrailingText } = content
  const faqCalendly = `https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=${faqCalendlyUtm}`
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-paper-deep) 12%, var(--color-itsco-paper-deep) 88%, var(--color-itsco-paper) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {faqHeading.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {faqHeading.headlineLead}{' '}
              <span className="text-itsco-red">{faqHeading.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="divide-y divide-[#EBEBEB] max-w-4xl">
          {faqs.map((f, i) => {
            const showInlineCta = i === faqInlineCtaIndex
            const lastIndex = f.answer.length - 1
            return (
              <div key={i} className="py-7">
                <h3 className="text-lg md:text-xl font-semibold text-itsco-dark leading-snug mb-3">
                  {f.question}
                </h3>
                {f.answer.map((p, pi) => {
                  const spacing = pi < lastIndex ? 'mb-3' : ''
                  return (
                    <p key={pi} className={`text-base text-itsco-body leading-relaxed ${spacing}`}>
                      {p}
                      {showInlineCta && pi === lastIndex && (
                        <>
                          {' '}
                          <a
                            href={faqCalendly}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-itsco-red font-semibold underline underline-offset-4 decoration-itsco-red/30 hover:decoration-itsco-red transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-70 rounded-sm"
                          >
                            Book a free consultation
                          </a>{' '}
                          {faqInlineCtaTrailingText}
                        </>
                      )}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

function RelatedServices({ content }: { content: IndustryContent }) {
  const { relatedHeading, relatedServices } = content
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {relatedHeading.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {relatedHeading.headlineLead}{' '}
              <span className="text-itsco-red">{relatedHeading.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedServices.map((s) => (
            <ServiceCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              description={s.description}
              href={s.href}
              image={s.image}
              imageAlt={s.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function IndustryPage({ content }: { content: IndustryContent }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.join(' ') },
    })),
  }

  // BreadcrumbList: Home → Industries → <this industry>. The visible page name
  // is the first segment of meta.title (before " | ") — already the human-
  // readable industry label on every IndustryPage today.
  const industryName = content.meta.title.split(' | ')[0]
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.itsco.com/industries' },
      { '@type': 'ListItem', position: 3, name: industryName, item: content.meta.canonical },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />
      <Hero content={content} />
      <CapabilitiesSection content={content} />
      {content.pillars.map((pillar, i) => (
        <PillarSection key={pillar.eyebrow} pillar={pillar} bg={PILLAR_BACKGROUNDS[i]} />
      ))}
      <MidCTA content={content} />
      <CaseStudiesSection content={content} />
      <FAQSection content={content} />
      <RelatedServices content={content} />
      <BookingCTA utmSuffix={content.bookingUtm} />
      <Footer />
    </>
  )
}
