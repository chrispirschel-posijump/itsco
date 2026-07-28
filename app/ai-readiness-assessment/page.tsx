import type { Metadata } from 'next'
import Image from 'next/image'
import HeroImage from '@/components/HeroImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import DynamicIcon from '@/components/DynamicIcon'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import {
  META,
  HERO,
  HERO_IMAGE,
  STATS,
  WHY,
  BENEFITS_HEADING,
  BENEFITS,
  FRAMEWORK_HEADING,
  FRAMEWORK,
  INDUSTRIES_HEADING,
  INDUSTRIES,
  WHY_ITSCO,
  MID_CTA,
  RELATED_HEADING,
  RELATED,
  BOOKING_UTM,
} from './content'

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
        <HeroImage
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
        <div className="lg:max-w-[48%] lg:pr-12">
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
          {HERO.body && (
            <FadeUp delay={200}>
              <p className="text-lg text-itsco-body leading-relaxed mb-10 max-w-xl">{HERO.body}</p>
            </FadeUp>
          )}
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix={HERO.utmSuffix}
                className="px-8 py-4 rounded-xl text-base"
              />
              <CTAButton
                label="See the framework"
                href="#framework"
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

function StatsStrip() {
  return (
    <section className="bg-itsco-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((s, i) => (
            <FadeUp key={i} delay={i * 75}>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-itsco-dark tracking-tight leading-none">
                  {s.value}
                </p>
                <p className="text-sm text-[#555] mt-3 leading-snug">{s.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {WHY.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {WHY.headlineLead}{' '}
              <span className="text-itsco-red">{WHY.headlineAccent}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={100} className="lg:col-span-7">
            <div className="space-y-5">
              {WHY.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-itsco-body leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {BENEFITS_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {BENEFITS_HEADING.headlineLead}{' '}
              <span className="text-itsco-red">{BENEFITS_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-itsco-red/10 flex items-center justify-center mb-5 flex-shrink-0">
                <DynamicIcon slug={b.slug} size={24} className="text-itsco-red" />
              </div>
              <h3 className="text-base font-semibold text-itsco-dark leading-snug mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">{b.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function FrameworkSection() {
  return (
    <section id="framework" className="bg-itsco-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {FRAMEWORK_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {FRAMEWORK_HEADING.headlineLead}{' '}
              <span className="text-itsco-red">{FRAMEWORK_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRAMEWORK.map((step) => (
            <div
              key={step.number}
              className="relative bg-itsco-dark text-white rounded-2xl p-7 flex flex-col h-full"
            >
              <span className="text-5xl font-extrabold text-itsco-red tracking-tight leading-none mb-5">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-white leading-snug mb-3">{step.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed flex-1">{step.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function IndustriesSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {INDUSTRIES_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {INDUSTRIES_HEADING.headlineLead}{' '}
              <span className="text-itsco-red">{INDUSTRIES_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((i) => (
            <div
              key={i.title}
              className="h-full flex gap-4 bg-itsco-card border border-[#EBEBEB] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-itsco-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                <DynamicIcon slug={i.slug} size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-itsco-dark leading-snug mb-1">
                  {i.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">{i.description}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function WhyITScoSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5 order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={WHY_ITSCO.image}
                alt={WHY_ITSCO.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7 order-2">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {WHY_ITSCO.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              {WHY_ITSCO.headlineLead}{' '}
              <span className="text-itsco-red">{WHY_ITSCO.headlineAccent}</span>
            </h2>
            {WHY_ITSCO.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-itsco-body leading-relaxed mb-6"
              >
                {p}
              </p>
            ))}
            <ul className="space-y-3">
              {WHY_ITSCO.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-itsco-red flex-shrink-0"
                    aria-hidden
                  />
                  <span className="text-base text-itsco-body leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
            {MID_CTA.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl">
            {MID_CTA.headline}
          </h2>
        </div>
        <CTAButton
          label="Book a Free Consultation"
          utmSuffix={MID_CTA.utmSuffix}
          className="px-8 py-4 rounded-xl text-base flex-shrink-0"
        />
      </div>
    </section>
  )
}

function RelatedSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {RELATED_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              {RELATED_HEADING.headlineLead}{' '}
              <span className="text-itsco-red">{RELATED_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RELATED.map((r) => (
            <a
              key={r.slug}
              href={r.href}
              className="group flex flex-col h-full bg-itsco-card border border-[#EBEBEB] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:scale-[0.99]"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2 group-hover:text-itsco-red transition-[color] duration-200">
                  {r.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed flex-1">{r.description}</p>
              </div>
            </a>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <Hero />
        <StatsStrip />
        <WhySection />
        <BenefitsSection />
        <FrameworkSection />
        <IndustriesSection />
        <WhyITScoSection />
        <MidCTA />
        <RelatedSection />
        <BookingCTA utmSuffix={BOOKING_UTM} />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Readiness Assessment',
            provider: { '@type': 'Organization', name: 'ITSco' },
            description: META.description,
            url: META.canonical,
            areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
              { '@type': 'ListItem', position: 2, name: 'AI & Automation', item: 'https://www.itsco.com/ai-automation' },
              { '@type': 'ListItem', position: 3, name: 'AI Readiness Assessment', item: META.canonical },
            ],
          }),
        }}
      />
    </>
  )
}
