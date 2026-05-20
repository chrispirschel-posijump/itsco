import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, MapPin } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import TestimonialsRotator from '@/components/TestimonialsRotator'
import { TESTIMONIALS } from '@/lib/testimonials'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import { META, HERO, INTRO, TEAM, PHILOSOPHY, SERVICE_AREA, TRUSTED_SOURCE } from './content'

const CALENDLY_BASE =
  'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco'

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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
            {HERO.eyebrow}
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8 max-w-[16ch] mx-auto">
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
          <p className="text-lg md:text-xl text-[#404040] leading-relaxed mb-10 max-w-2xl mx-auto">{HERO.body}</p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="inline-block border border-[#CA3C27]/20 rounded-2xl bg-white/40 backdrop-blur-sm px-10 py-6 mb-10">
            <p className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-[#CA3C27]">{HERO.stat}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#404040]/70 mt-3">{HERO.statLabel}</p>
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
              label="Meet the team"
              href="#team"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {INTRO.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-8">
              {INTRO.headlineLead}{' '}
              <span className="text-[#CA3C27]">{INTRO.headlineAccent}</span>
            </h2>
            <StaggerChildren stagger={80}>
              {INTRO.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-base md:text-lg text-[#404040] leading-relaxed ${
                    i < INTRO.paragraphs.length - 1 ? 'mb-5' : ''
                  } ${i === INTRO.paragraphs.length - 1 ? 'text-[#111111] font-semibold' : ''}`}
                >
                  {p}
                </p>
              ))}
            </StaggerChildren>
          </FadeUp>

          <FadeUp delay={150} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={INTRO.image}
                alt={INTRO.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function TeamGrid() {
  return (
    <section id="team" style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Senior Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              People who understand how to{' '}
              <span className="text-[#CA3C27]">leverage IT for your business.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={120} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-itsco-card border border-[#EBEBEB] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="relative aspect-[9/10] bg-[#111111]/5">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title} at ITSco`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#111111] tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#CA3C27] mt-1 mb-5">
                  {member.title}
                </p>
                <div className="space-y-3">
                  {member.bio.map((p, i) => (
                    <p key={i} className="text-base text-[#404040] leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function Philosophy() {
  const consultationHref = `${CALENDLY_BASE}?utm_source=website&utm_medium=cta&utm_campaign=${PHILOSOPHY.consultationUtmSuffix}`
  const linkClass =
    'text-[#CA3C27] font-semibold underline decoration-[#CA3C27]/30 decoration-2 underline-offset-4 hover:decoration-[#CA3C27] hover:text-[#B4311E] transition-colors duration-200'

  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <FadeUp className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {PHILOSOPHY.eyebrow}
            </p>
            <div className="hidden lg:block w-12 h-px bg-[#CA3C27]/40 mb-4" />
            <p className="text-2xl md:text-3xl font-bold text-[#111111] tracking-tight leading-snug">
              {PHILOSOPHY.slogan}
            </p>
          </FadeUp>

          <FadeUp delay={120} className="lg:col-span-9">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-8 max-w-2xl">
              {PHILOSOPHY.headlineLead}{' '}
              <span className="text-[#CA3C27]">{PHILOSOPHY.headlineAccent}</span>
            </h2>
            <div className="max-w-2xl">
              {PHILOSOPHY.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-[#404040] leading-relaxed mb-5">{p}</p>
              ))}
              <p className="mt-6 text-base md:text-lg text-[#404040] leading-relaxed">
                Curious about the discipline behind every engagement? Read about{' '}
                <Link href="/process/" className={linkClass}>
                  our process
                </Link>
                , or{' '}
                <a href={consultationHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  schedule a free consultation
                </a>
                {' '}with our senior leadership.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {SERVICE_AREA.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              {SERVICE_AREA.headlineLead}{' '}
              <span className="text-[#CA3C27]">{SERVICE_AREA.headlineAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-8">{SERVICE_AREA.body}</p>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#404040]/70 mb-1">
                  Business office
                </p>
                <a
                  href={SERVICE_AREA.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-[#111111] hover:text-[#CA3C27] transition-colors duration-200"
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

function Testimonials() {
  return (
    <section className="bg-itsco-paper">
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

function TrustedSource() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeUp className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {TRUSTED_SOURCE.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              {TRUSTED_SOURCE.headlineLead}{' '}
              <span className="text-[#CA3C27]">{TRUSTED_SOURCE.headlineAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-10">
              {TRUSTED_SOURCE.body}
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#111111] tracking-tight mb-5">
              {TRUSTED_SOURCE.whyHeading}
            </h3>
            <ul className="space-y-3">
              {TRUSTED_SOURCE.reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#CA3C27]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-[#CA3C27]" />
                  </div>
                  <span className="text-base text-[#404040] leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={150} className="lg:col-span-5">
            <div className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image
                  src={TRUSTED_SOURCE.accreditation.image}
                  alt={TRUSTED_SOURCE.accreditation.alt}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#404040]/70 mb-2">
                {TRUSTED_SOURCE.accreditation.label}
              </p>
              <p className="text-base text-[#111111] leading-relaxed">
                {TRUSTED_SOURCE.accreditation.body}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

export default function MeetTheTeamPage() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <Hero />
        <Intro />
        <TeamGrid />
        <Philosophy />
        <ServiceArea />
        <Testimonials />
        <TrustedSource />
        <BookingCTA utmSuffix="meet-the-team-bottom" />
      </main>
      <Footer />
    </>
  )
}
