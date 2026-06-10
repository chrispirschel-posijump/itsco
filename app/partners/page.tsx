import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import {
  META,
  HERO,
  HERO_IMAGE,
  PHILOSOPHY,
  CATEGORIES_HEADING,
  CATEGORIES,
  ACCREDITATION,
  PARTNERSHIP_HEADING,
  PARTNERSHIP_BODY,
  PARTNERSHIP_CTA,
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
    <section className="relative bg-itsco-paper min-h-[80vh] flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute right-0 top-0 bottom-0 w-[50%] hidden lg:block">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-itsco-paper via-itsco-paper/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-itsco-paper/40 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-44">
        <div className="lg:max-w-[50%] lg:pr-12">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              {HERO.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
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
            <p className="text-lg text-[#404040] leading-relaxed mb-10 max-w-xl">{HERO.body}</p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix={HERO.utmSuffix}
                className="px-8 py-4 rounded-xl text-base"
              />
              <CTAButton
                label="See our partnerships"
                href="#partnerships"
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

function PhilosophySection() {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {PHILOSOPHY.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              {PHILOSOPHY.headlineLead}{' '}
              <span className="text-[#CA3C27]">{PHILOSOPHY.headlineAccent}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={100} className="lg:col-span-7">
            <div className="space-y-5">
              {PHILOSOPHY.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-[#404040] leading-relaxed">
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

function CategoriesSection() {
  return (
    <section id="partnerships" style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {CATEGORIES_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              {CATEGORIES_HEADING.headlineLead}{' '}
              <span className="text-[#CA3C27]">{CATEGORIES_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={75} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((c) => (
            <div
              key={c.slug}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <h3 className="text-xl font-bold text-[#111111] leading-snug mb-3 tracking-tight">
                {c.title}
              </h3>
              <p className="text-base text-[#404040] leading-relaxed mb-5">{c.description}</p>
              <ul className="mt-auto space-y-2 border-t border-[#EBEBEB] pt-5">
                {c.examples.map((ex, ei) => (
                  <li key={ei} className="flex gap-3 items-start">
                    <span
                      className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#CA3C27] flex-shrink-0"
                      aria-hidden
                    />
                    <span className="text-sm text-[#555] leading-relaxed flex-1">{ex}</span>
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

function AccreditationSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-4 order-1">
            <div className="relative bg-itsco-card border border-[#EBEBEB] rounded-2xl p-8 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <Image
                src={ACCREDITATION.image}
                alt={ACCREDITATION.alt}
                width={300}
                height={300}
                className="w-full h-auto max-w-[260px] object-contain"
              />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-8 order-2">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {ACCREDITATION.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              {ACCREDITATION.headlineLead}{' '}
              <span className="text-[#CA3C27]">{ACCREDITATION.headlineAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              {ACCREDITATION.body}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function PartnershipInquirySection() {
  return (
    <section
      className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]"
      style={{
        ['--color-itsco-cta' as string]: '#CA3C27',
        ['--color-itsco-cta-hover' as string]: '#B4311E',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-3">
            {PARTNERSHIP_HEADING.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            {PARTNERSHIP_HEADING.headlineLead}{' '}
            <span className="text-[#F26340]">{PARTNERSHIP_HEADING.headlineAccent}</span>
          </h2>
          <p className="text-base md:text-lg text-white/75 leading-relaxed">
            {PARTNERSHIP_BODY}
          </p>
        </div>
        <CTAButton
          label={PARTNERSHIP_CTA.label}
          utmSuffix={PARTNERSHIP_CTA.utmSuffix}
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {RELATED_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              {RELATED_HEADING.headlineLead}{' '}
              <span className="text-[#CA3C27]">{RELATED_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RELATED.map((r) => (
            <a
              key={r.slug}
              href={r.href}
              className="group flex flex-col h-full bg-itsco-card border border-[#EBEBEB] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:scale-[0.99]"
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
                <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2 group-hover:text-[#CA3C27] transition-[color] duration-200">
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

export default function PartnersPage() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <Hero />
        <PhilosophySection />
        <CategoriesSection />
        <AccreditationSection />
        <PartnershipInquirySection />
        <RelatedSection />
        <BookingCTA utmSuffix={BOOKING_UTM} />
      </main>
      <Footer />
    </>
  )
}
