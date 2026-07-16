import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { Check } from 'lucide-react'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import { META, HERO, PROFESSIONAL_SERVICES, MANAGED_SERVICES } from './content'

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: META.canonical },
}

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="relative w-full max-w-4xl mx-auto px-6 lg:px-12 py-36 pt-48 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
            {HERO.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8 max-w-[18ch] mx-auto">
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
          <p className="text-lg md:text-xl text-itsco-body leading-relaxed mb-10 max-w-2xl mx-auto">{HERO.body}</p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="inline-block border border-itsco-red/20 rounded-2xl bg-white/40 backdrop-blur-sm px-10 py-6 mb-10">
            <p className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-itsco-red">{HERO.stat}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-itsco-body/70 mt-3">{HERO.statLabel}</p>
          </div>
        </FadeUp>
        <FadeUp delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix={HERO.utmSuffix}
              className="px-8 py-4 rounded-xl text-base"
            />
            <CTAButton
              label="See our steps"
              href="#professional-services"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function ProfessionalServices() {
  return (
    <section id="professional-services" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {PROFESSIONAL_SERVICES.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              {PROFESSIONAL_SERVICES.headlineLead}{' '}
              <span className="text-itsco-red">{PROFESSIONAL_SERVICES.headlineAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">{PROFESSIONAL_SERVICES.intro}</p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROFESSIONAL_SERVICES.steps.map((step, i) => (
            <div
              key={step.title}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-itsco-dark flex items-center justify-center mb-5 flex-shrink-0">
                <span className="text-white font-extrabold text-lg tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-3">{step.title}</h3>
              <ul className="space-y-2 mt-1">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#555] leading-relaxed">
                    <Check size={14} className="text-itsco-red flex-shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function ManagedServices() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              {MANAGED_SERVICES.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              {MANAGED_SERVICES.headlineLead}{' '}
              <span className="text-itsco-red">{MANAGED_SERVICES.headlineAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">{MANAGED_SERVICES.intro}</p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">{MANAGED_SERVICES.approach}</p>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <div className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <ul className="space-y-4">
                {MANAGED_SERVICES.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-itsco-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-itsco-red" />
                    </div>
                    <span className="text-base text-itsco-body leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={200}>
          <p className="mt-14 max-w-3xl text-base md:text-lg text-itsco-body leading-relaxed">
            {MANAGED_SERVICES.closing}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

const processJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Process',
  url: 'https://www.itsco.com/process/',
  description:
    'How ITSco onboards, manages, and measures ROI for every client engagement — a structured, repeatable process refined over 30 years.',
  about: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Process', item: 'https://www.itsco.com/process/' },
  ],
}

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />
      <main>
        <Hero />
        <ProfessionalServices />
        <ManagedServices />
        <BookingCTA utmSuffix="process-bottom" />
      </main>
      <Footer />
    </>
  )
}
