"use client";

import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import TestimonialBlock from '@/components/TestimonialBlock'
import CTAButton from '@/components/CTAButton'
import { FadeUp, CountUp } from '@/components/ScrollAnimations'
import BackgroundOrbs from '@/components/BackgroundOrbs'

const CLIENTS = [
  { src: '/images/clients/emergeortho.png',           alt: 'EmergeOrtho' },
  { src: '/images/clients/SRN-vertical-300x300-1.jpg', alt: 'Southern Rehabilitation Network' },
  { src: '/images/clients/CBRE-Group-logo.jpg',        alt: 'CBRE' },
  { src: '/images/clients/Phononic_Logo_RGB-scaled.jpg', alt: 'Phononic' },
  { src: '/images/clients/cambrex-vector-logo.jpg',    alt: 'Cambrex' },
  { src: '/images/clients/NCACC_screen_seal_color.png', alt: 'NC Association of County Commissioners' },
  { src: '/images/clients/2021-LOGO-Forty540.jpg',     alt: 'Forty540' },
]

function ClientLogos() {
  return (
    <section className="bg-itsco-off-white border-y border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#BBBBBB] mb-8 text-center">
            Trusted by businesses across NC, SC &amp; VA
          </p>
        </FadeUp>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap">
          {CLIENTS.map((c) => (
            <div key={c.alt} className="relative h-10 w-32 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-300">
              <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="112px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Problem framing ──────────────────────────────────────────────────────────

function ProblemFraming() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Technology without strategy is <span className="text-itsco-red">just cost.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Most growing businesses hit a point where IT decisions start outpacing internal expertise. You're making six-figure technology investments without a CIO at the table. You're reacting to security threats instead of preventing them. And the gap between what your IT can do and what your business needs is widening every quarter.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Our vCIO, vCTO, and vCISO services give your leadership team a trusted technology advisor. Someone who understands both the engineering and the business case, without the cost of a full-time executive hire.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Process flow ─────────────────────────────────────────────────────────────

function ProcessFlow() {
  return (
    <section className="bg-itsco-off-white border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 lg:items-center">
          <FadeUp>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-10">
                From assessment to roadmap in <span className="text-itsco-red">four steps.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Discovery & Assessment', desc: 'We audit your current infrastructure, security posture, vendor relationships, and IT spending to understand where you are today.' },
                  { step: '02', title: 'Risk & Gap Analysis', desc: 'We identify vulnerabilities, compliance gaps, and areas where your IT is misaligned with your business objectives.' },
                  { step: '03', title: 'Strategic Roadmap', desc: 'We build a prioritized, budgeted technology roadmap that connects every recommendation to a measurable business outcome.' },
                  { step: '04', title: 'Ongoing Advisory', desc: 'We serve as your fractional CIO/CTO/CISO. We attend leadership meetings, manage vendors, and keep your IT strategy on track.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="text-xs font-bold tabular-nums text-itsco-red mt-1.5 w-8 flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-itsco-dark mb-1">{item.title}</h3>
                      <p className="text-sm text-itsco-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/consulting/headway-5QgIuuBxKwM-unsplash.jpg"
                alt="Strategic IT consulting session with business leaders"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── ROI callout ──────────────────────────────────────────────────────────────

function ROICallout() {
  return (
    <section className="bg-white border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <div className="bg-itsco-off-white border border-[#EBEBEB] rounded-2xl p-10 md:p-14 max-w-4xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
              <div>
                <p className="text-5xl md:text-6xl font-extrabold text-itsco-dark leading-none tracking-tight">40%</p>
                <p className="text-sm text-[#888] mt-3 leading-snug">average reduction in unplanned IT spending after roadmap implementation</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-extrabold text-itsco-dark leading-none tracking-tight">3x</p>
                <p className="text-sm text-[#888] mt-3 leading-snug">faster incident response with a dedicated virtual CISO managing your security program</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-extrabold text-itsco-dark leading-none tracking-tight">$0</p>
                <p className="text-sm text-[#888] mt-3 leading-snug">spent on full-time C-level salary. Fractional leadership at a fraction of the cost.</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Mid-page CTA (dark for contrast) ─────────────────────────────────────────

function MidCTA() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
            Strategic IT Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            A CIO at the table. No six-figure salary.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="page-c-lite-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Leadership proof ─────────────────────────────────────────────────────────

function LeadershipProof() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Your Advisory Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Led by people who've <span className="text-itsco-red">done this before.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Our virtual executive services are led by Mike Savino (CEO) and Jared Thomas (CIO). They bring combined decades of experience across enterprise IT and cybersecurity. When you book with us, you speak directly with senior leadership, not a sales team.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Jared holds dual master's degrees from Duke and Harvard, plus CISSP, CCNA, and MCSE certifications. He leads security, cloud, and infrastructure strategy. Every recommendation is grounded in technical rigor and business pragmatism.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PageCLite() {
  return (
    <>
      <Nav variant="light" />

      {/* 1. Hero — light Variant C with stat callout */}
      <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
        <BackgroundOrbs variant="light" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-44">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                Strategy &amp; Consulting
              </p>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-6 max-w-[16ch] mx-auto">
                Your IT Strategy Shouldn't Be{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
                >
                  Guesswork.
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-lg md:text-xl text-itsco-body leading-relaxed max-w-[42ch] mx-auto mt-6">
                Our vCIO, vCTO, and vCISO services give your leadership team a trusted technology advisor. We align your IT investments with business outcomes and reduce risk at every level.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <CTAButton
                  label="Book a Free Consultation"
                  utmSuffix="page-c-lite"
                  className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
                />
                <CTAButton
                  label="Learn About Our Process"
                  href="/process/"
                  variant="secondary"
                  className="px-8 py-4 rounded-xl text-base"
                />
              </div>
            </FadeUp>

            {/* Light stat callout */}
            <FadeUp delay={400}>
              <div className="mt-12 inline-block border border-[#EBEBEB] bg-white rounded-2xl px-10 py-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <CountUp
                  value={25}
                  suffix="+"
                  className="text-5xl md:text-6xl font-extrabold text-itsco-dark leading-none tracking-tight block"
                />
                <p className="text-sm font-medium text-[#888] uppercase tracking-[0.1em] mt-2">
                  years of strategic IT leadership for NC businesses
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. Client logos */}
      <ClientLogos />

      {/* 3. Problem framing */}
      <ProblemFraming />

      {/* 4. Process flow */}
      <ProcessFlow />

      {/* 5. ROI callout */}
      <ROICallout />

      {/* 6. Mid-page CTA (dark for contrast) */}
      <MidCTA />

      {/* 7. Leadership proof */}
      <LeadershipProof />

      {/* 8. Testimonial — light */}
      <FadeUp>
        <TestimonialBlock
          quote="We went from constant IT firefighting to zero unplanned downtime in 18 months. ITSco didn't just fix our problems — they built a system that prevents them."
          name="David Park"
          title="CFO"
          company="Southern Rehabilitation Network"
          variant="light"
        />
      </FadeUp>

      {/* 9. BookingCTA (dark close) */}
      <FadeUp>
        <BookingCTA
          utmSuffix="page-c-lite-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      <Footer />
    </>
  )
}
