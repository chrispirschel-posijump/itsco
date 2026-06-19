"use client";

import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import ServiceCard from '@/components/ServiceCard'
import TestimonialBlock from '@/components/TestimonialBlock'
import CTAButton from '@/components/CTAButton'
import { FadeUp } from '@/components/ScrollAnimations'

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
            Trusted by healthcare organizations across the Southeast
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

// ── Problem / Solution ───────────────────────────────────────────────────────

function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                The Problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
                Healthcare IT is high-stakes. <span className="text-itsco-red">Most providers miss that.</span>
              </h2>
              <ul className="space-y-4 text-base text-itsco-body leading-relaxed">
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-red mt-2.5 flex-shrink-0" />HIPAA compliance gaps that create audit risk and patient data exposure</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-red mt-2.5 flex-shrink-0" />Legacy EHR systems that slow down clinical workflows and frustrate staff</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-red mt-2.5 flex-shrink-0" />Disconnected locations with inconsistent security posture and no unified monitoring</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-red mt-2.5 flex-shrink-0" />IT vendors who don't understand healthcare operations or regulatory demands</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#888] mb-4">
                The ITSco Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
                IT designed for the way healthcare actually works.
              </h2>
              <ul className="space-y-4 text-base text-itsco-body leading-relaxed">
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-dark mt-2.5 flex-shrink-0" />HIPAA-compliant infrastructure built by engineers who've served healthcare for 25+ years</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-dark mt-2.5 flex-shrink-0" />Unified monitoring across all locations, from a single-office practice to a 14-site system</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-dark mt-2.5 flex-shrink-0" />Cybersecurity programs built around patient data protection and regulatory preparedness</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-itsco-dark mt-2.5 flex-shrink-0" />A team that speaks your language: EHR, HL7, HIPAA, and clinical workflow fluency</li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Capabilities — light ─────────────────────────────────────────────────────

function CapabilitiesSection() {
  return (
    <section className="bg-itsco-off-white border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 lg:items-center">
          <FadeUp>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-8">
                Outcomes that matter to <span className="text-itsco-red">healthcare leaders.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Zero unplanned downtime', desc: 'Proactive monitoring and maintenance keeps clinical systems running 24/7.' },
                  { title: 'Audit-ready compliance', desc: 'HIPAA, HITECH, and SOC 2 readiness built into your infrastructure from day one.' },
                  { title: 'Predictable IT costs', desc: 'Fixed monthly pricing eliminates surprise bills and makes budgeting straightforward.' },
                  { title: 'Faster helpdesk response', desc: 'Under 1 hour average response for critical issues. From engineers who already know your environment.' },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-itsco-dark mb-1">{item.title}</h3>
                    <p className="text-sm text-itsco-body leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/hero/industries/accuray-5VkNa1LrS8A-unsplash.jpg"
                alt="Advanced medical technology in a healthcare setting"
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

// ── Mid-page CTA (dark for contrast) ─────────────────────────────────────────

function MidCTA() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
            Trusted by EmergeOrtho across 14 locations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            See what ITSco can do for your practice.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="page-b-lite-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Related services ─────────────────────────────────────────────────────────

function RelatedServices() {
  return (
    <section className="bg-white border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Services built for <span className="text-itsco-red">regulated industries.</span>
            </h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ServiceCard slug="cybersecurity" title="Cybersecurity & MSSP" description="24/7 SOC monitoring, MDR, and compliance programs built for healthcare environments." href="/cybersecurity/" />
          <ServiceCard slug="managed-it-services" title="Managed IT Services" description="Proactive monitoring, helpdesk, and network management without the overhead of an in-house team." href="/managed-it-services/" />
          <ServiceCard slug="backup-disaster-recovery" title="Backup & Disaster Recovery" description="HIPAA-compliant backup solutions with tested recovery plans protecting patient data." href="/backup-disaster-recovery/" />
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PageBLite() {
  return (
    <>
      <Nav variant="light" />

      {/* 1. Hero — full-bleed image with light fade so text reads on the upper portion */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
        <Image src="/images/hero/industries/national-cancer-institute-X9Iq79PFif4-unsplash.jpg" alt="Healthcare professionals in a modern medical facility" fill priority className="object-cover object-center" sizes="100vw" />

        {/* Heavier white wash on the left where text sits, lighter on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/45" />
        {/* Bottom fade into page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-itsco-red/5 via-transparent to-transparent" />

        <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">Healthcare IT Services</p>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-6">
                IT Built for{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
                >
                  Healthcare.
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-lg md:text-xl text-itsco-body leading-relaxed max-w-[42ch] mb-10">
                HIPAA-compliant managed IT and cybersecurity for medical practices, health systems, and orthopaedic groups across the Southeast. From a team that has served healthcare for over 25 years.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton label="Book a Free Consultation" utmSuffix="page-b-lite" className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]" />
                <CTAButton label="Explore Healthcare Results" href="/case-studies/" variant="secondary" className="px-8 py-4 rounded-xl text-base" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. Problem / Solution */}
      <ProblemSolution />

      {/* 3. Capabilities */}
      <CapabilitiesSection />

      {/* 4. Client logos */}
      <ClientLogos />

      {/* 5. Testimonial — light */}
      <FadeUp>
        <TestimonialBlock
          quote="ITSco has provided technical support for the past 22 years. They are hands-down the best vendor relationship we have. Their team understands healthcare, understands compliance, and treats our systems like their own."
          name="Chris Adkins"
          title="Chief Administrative Officer"
          company="EmergeOrtho"
          variant="light"
        />
      </FadeUp>

      {/* 6. Mid-page CTA (dark for contrast) */}
      <MidCTA />

      {/* 7. Related services */}
      <RelatedServices />

      {/* 8. BookingCTA (dark close) */}
      <FadeUp>
        <BookingCTA
          utmSuffix="page-b-lite-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      <Footer />
    </>
  )
}
