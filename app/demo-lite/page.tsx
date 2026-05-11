"use client";

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import BookingCTA from '@/components/BookingCTA'
import IndustryCard from '@/components/IndustryCard'
import TestimonialBlock from '@/components/TestimonialBlock'
import CTAButton from '@/components/CTAButton'
import { FadeUp, StaggerChildren, CountUp } from '@/components/ScrollAnimations'
import BackgroundOrbs from '@/components/BackgroundOrbs'

// ── 1. Hero — light, full-bleed image right ──────────────────────────────────

const STATS: { value: number; decimals: boolean; prefix: string; suffix: string; label: string }[] = [
  { value: 28,   decimals: false, prefix: '',   suffix: '+',  label: 'Years in business' },
  { value: 500,  decimals: false, prefix: '',   suffix: '+',  label: 'Businesses supported' },
  { value: 1,    decimals: false, prefix: '< ', suffix: 'hr', label: 'Avg. helpdesk response' },
  { value: 99.9, decimals: true,  prefix: '',   suffix: '%',  label: 'Uptime for managed clients' },
]

function LiteHero() {
  return (
    <section className="relative bg-white min-h-screen flex flex-col overflow-hidden">
      <BackgroundOrbs variant="light" />

      {/* Full-bleed image panel */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src="/images/hero/services/pexels-vlada-karpovich-7433840.jpg"
          alt="ITSco managed IT services team"
          fill
          priority
          className="object-cover object-center"
          sizes="52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="lg:max-w-[50%]">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              The ROI-Driven IT Company
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-6xl md:text-7xl lg:text-[4.5rem] font-extrabold text-[#111111] leading-[1.0] tracking-tight mb-8">
              Turn IT Into Your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)" }}
              >
                Growth Engine.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-[#404040] leading-relaxed max-w-[38ch] mb-10">
              We tie every technology investment to a business outcome. Reduced costs, fewer outages, stronger security, and a clear return on every dollar you spend on IT.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="demo-lite-hero"
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label="See the ROI of Managed IT"
                href="/maximize-roi-with-managed-it-services/"
                variant="secondary"
                className="px-8 py-4 rounded-xl text-base"
              />
            </div>
          </FadeUp>
        </div>

        {/* Mobile image */}
        <div className="mt-12 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden">
          <Image
            src="/images/hero/services/pexels-vlada-karpovich-7433840.jpg"
            alt="ITSco managed IT services team"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Stats — anchored to bottom with count-up */}
      <div className="relative w-full border-t border-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#EBEBEB]">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-4 px-6 md:px-8 py-6 first:pl-0">
                <CountUp
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="text-2xl md:text-3xl font-extrabold text-[#111111] leading-none tracking-tight whitespace-nowrap"
                />
                <span className="text-xs text-[#888] leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 2. Client logos ──────────────────────────────────────────────────────────

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
    <section className="bg-[#FAFAFA] border-b border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#BBBBBB] mb-8 text-center">
            Trusted by businesses across NC, SC &amp; VA
          </p>
        </FadeUp>
        <StaggerChildren stagger={80} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap">
          {CLIENTS.map((c) => (
            <div key={c.alt} className="relative h-10 w-32 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-300">
              <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="112px" />
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── 3. Services — light horizontal list rows ─────────────────────────────────

const SERVICES = [
  {
    number: '01',
    title: 'Managed IT Services',
    description: 'Proactive monitoring, helpdesk support, and network management that keeps your team productive and your systems running. No in-house IT department required.',
    href: '/managed-it-services/',
  },
  {
    number: '02',
    title: 'Cybersecurity & MSSP',
    description: '24/7 SOC monitoring, MDR, firewall management, and compliance programs that reduce your risk exposure before threats become incidents.',
    href: '/cybersecurity/',
  },
  {
    number: '03',
    title: 'Cloud Services',
    description: 'Managed cloud, migration strategy, and Azure and AWS support that scales your infrastructure with your business. No more capital costs for on-premises hardware.',
    href: '/cloud-services/',
  },
  {
    number: '04',
    title: 'Strategy & Consulting',
    description: 'vCIO, vCTO, and vCISO engagements that align your technology roadmap to your business goals. Your leadership team gets a trusted advisor at the table.',
    href: '/it-management-consulting/',
  },
  {
    number: '05',
    title: 'Microsoft Solutions',
    description: 'Microsoft 365, Azure, Teams, SharePoint, and Copilot implementation and ongoing managed support. Deployed and managed by certified Microsoft specialists.',
    href: '/microsoft-solutions/',
  },
  {
    number: '06',
    title: 'Network Engineering',
    description: 'Enterprise-grade network design, systems engineering, VoIP, and ITAD services that give your infrastructure the reliability your operations depend on.',
    href: '/network-engineering/',
  },
]

function ServicesSection() {
  return (
    <section className="relative" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #FEF6F4 50%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">

        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-16 border-b border-[#EBEBEB]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
                Your full IT program, <span className="text-[#CA3C27]">under one roof.</span>
              </h2>
            </div>
            <p className="text-sm text-[#888] leading-relaxed max-w-[36ch] md:text-right">
              From helpdesk support to cybersecurity and vCIO advisory.
              We deliver managed outcomes, not just managed services.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="divide-y divide-[#EBEBEB]">
          {SERVICES.map((s) => (
            <Link
              key={s.number}
              href={s.href}
              className="group flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0 py-7 -mx-6 px-6 lg:-mx-12 lg:px-12 hover:bg-[#FAFAFA] transition-[background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:opacity-80"
            >
              <span className="text-xs font-bold tabular-nums text-[#CCCCCC] lg:w-14 flex-shrink-0 group-hover:text-[#CA3C27] transition-[color] duration-200">
                {s.number}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#111111]/80 lg:w-[34%] flex-shrink-0 leading-snug group-hover:text-[#111111] transition-[color] duration-200">
                {s.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed lg:flex-1 lg:px-10 group-hover:text-[#555] transition-[color] duration-200">
                {s.description}
              </p>
              <ArrowRight
                size={16}
                className="hidden lg:block flex-shrink-0 text-[#CCCCCC] group-hover:text-[#CA3C27] group-hover:translate-x-1 transition-[transform,color] duration-200"
              />
            </Link>
          ))}
        </StaggerChildren>

      </div>
    </section>
  )
}

// ── 4. AI — dark Variant C (matches /demo) ──────────────────────────────────

// ── 5. Industries ────────────────────────────────────────────────────────────

function IndustriesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">

        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-4">
              IT built for the way <span className="text-[#CA3C27]">your industry</span> works.
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              Compliance, data sensitivity, and workflow demands differ by sector.
              Our teams are trained on yours, so you get IT advice built for your world.
            </p>
          </div>
        </FadeUp>

        <FadeUp className="mb-8">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src="/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg"
              alt="Professional reviewing business data and analytics"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </FadeUp>

        <StaggerChildren stagger={100} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            <IndustryCard key="hc" slug="healthcare-managed-it-services" title="Healthcare" description="HIPAA-compliant managed IT and cybersecurity for medical practices, health systems, and orthopaedic groups across the Southeast. EmergeOrtho trusts ITSco across 14 locations." href="/healthcare-managed-it-services/" />,
            <IndustryCard key="lg" slug="legal-and-law-firm-it-services" title="Legal" description="Secure, reliable IT for law firms that can't afford downtime or data breaches. Built with the confidentiality standards your practice requires." href="/legal-and-law-firm-it-services/" />,
            <IndustryCard key="bf" slug="banking-and-financial-services-it" title="Banking & Financial Services" description="SOC 2, PCI-DSS, and FFIEC-aligned managed IT and cybersecurity for banks, credit unions, RIAs, and private equity firms in the Southeast." href="/banking-and-financial-services-it/" />,
            <IndustryCard key="mf" slug="manufacturing-it" title="Manufacturing" description="OT/IT convergence, plant floor connectivity, ERP support, and network security engineered for manufacturers who can't afford unplanned downtime." href="/manufacturing-it/" />,
          ]}
        </StaggerChildren>

      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DemoLitePage() {
  return (
    <>
      <Nav variant="light" />

      {/* 1 — LIGHT — Hero */}
      <LiteHero />

      {/* 2 — LIGHT — Client logos */}
      <ClientLogos />

      {/* 3 — LIGHT — Services list */}
      <ServicesSection />

      {/* 4 — LIGHT — Testimonial */}
      <FadeUp>
        <TestimonialBlock
          quote="ITSco transformed our network infrastructure across 14 locations. Their team operates like an extension of ours — responsive, proactive, and always focused on business outcomes, not just tickets."
          name="Sarah Mitchell"
          title="COO"
          company="EmergeOrtho"
          variant="light"
        />
      </FadeUp>

      {/* 5 — DARK  — AI (Variant C, matches /demo) */}
      <FadeUp>
        <HeroSection
          eyebrow="AI & Automation"
          heading="Your Competitors Are Already Using AI."
          subheading="We help business leaders assess AI readiness, find automation opportunities, and put them to work for measurable ROI. No hype. Just results."
          imagePosition="none"
          stat="72%"
          statLabel="of businesses are integrating AI into operations"
          statColor="#ffffff"
          background="radial-gradient(ellipse at top left, #3a1208 0%, #1e0a06 50%, #0f0f0f 100%)"
          clip={false}
          orbs="dark"
          primaryCTA={{
            label: 'Book a Free Consultation',
            utmSuffix: 'demo-lite-ai-hero',
          }}
          secondaryCTA={{
            label: 'Learn About AI & Automation',
            href: '/ai-automation/',
            variant: 'secondary',
          }}
        />
      </FadeUp>

      {/* 6 — LIGHT — Industries */}
      <IndustriesSection />

      {/* 7 — DARK  — Testimonial */}
      <FadeUp>
        <TestimonialBlock
          quote="We went from constant IT firefighting to zero unplanned downtime in 18 months. ITSco didn't just fix our problems — they built a system that prevents them."
          name="David Park"
          title="CFO"
          company="Southern Rehabilitation Network"
          variant="dark"
        />
      </FadeUp>

      {/* 8 — DARK  — Booking CTA */}
      <FadeUp>
        <BookingCTA
          utmSuffix="demo-lite-bottom"
          backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
        />
      </FadeUp>

      {/* 9 — DARK  — Footer */}
      <Footer />
    </>
  )
}
