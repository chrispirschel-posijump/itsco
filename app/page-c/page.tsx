import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import BookingCTA from '@/components/BookingCTA'
import TestimonialBlock from '@/components/TestimonialBlock'
import CTAButton from '@/components/CTAButton'

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
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#BBBBBB] mb-8 text-center">
          Trusted by businesses across NC, SC &amp; VA
        </p>
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
            Technology without strategy is just cost.
          </h2>
          <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-4">
            Most growing businesses hit a point where IT decisions start outpacing internal expertise. You're making six-figure technology investments without a CIO at the table. You're reacting to security threats instead of preventing them. And the gap between what your IT can do and what your business needs is widening every quarter.
          </p>
          <p className="text-base md:text-lg text-[#404040] leading-relaxed">
            Our vCIO, vCTO, and vCISO services give your leadership team a trusted technology advisor. Someone who understands both the engineering and the business case, without the cost of a full-time executive hire.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Process flow with supporting image ───────────────────────────────────────

function ProcessFlow() {
  return (
    <section className="bg-[#FAFAFA] border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 lg:items-center">
          {/* Steps */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-10">
              From assessment to roadmap in four steps.
            </h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Discovery & Assessment', desc: 'We audit your current infrastructure, security posture, vendor relationships, and IT spending to understand where you are today.' },
                { step: '02', title: 'Risk & Gap Analysis', desc: 'We identify vulnerabilities, compliance gaps, and areas where your IT is misaligned with your business objectives.' },
                { step: '03', title: 'Strategic Roadmap', desc: 'We build a prioritized, budgeted technology roadmap that connects every recommendation to a measurable business outcome.' },
                { step: '04', title: 'Ongoing Advisory', desc: 'We serve as your fractional CIO/CTO/CISO. We attend leadership meetings, manage vendors, and keep your IT strategy on track.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="text-xs font-bold tabular-nums text-[#CA3C27] mt-1.5 w-8 flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111111] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#404040] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Image 1 */}
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
        <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-2xl p-10 md:p-14 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-none tracking-tight">40%</p>
              <p className="text-sm text-[#888] mt-3 leading-snug">average reduction in unplanned IT spending after roadmap implementation</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-none tracking-tight">3x</p>
              <p className="text-sm text-[#888] mt-3 leading-snug">faster incident response with a dedicated virtual CISO managing your security program</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-none tracking-tight">$0</p>
              <p className="text-sm text-[#888] mt-3 leading-snug">spent on full-time C-level salary. Fractional leadership at a fraction of the cost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Mid-page CTA ─────────────────────────────────────────────────────────────

function MidCTA() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-3">
            Strategic IT Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            A CIO at the table. No six-figure salary.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="page-c-mid"
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
            Your Advisory Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
            Led by people who've done this before.
          </h2>
          <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-4">
            Our virtual executive services are led by Mike Savino (CEO) and Jared Thomas (CIO). They bring combined decades of experience across enterprise IT and cybersecurity. When you book with us, you speak directly with senior leadership, not a sales team.
          </p>
          <p className="text-base md:text-lg text-[#404040] leading-relaxed">
            Jared holds dual master's degrees from Duke and Harvard, plus CISSP, CCNA, and MCSE certifications. He leads security, cloud, and infrastructure strategy. Every recommendation is grounded in technical rigor and business pragmatism.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PageC() {
  return (
    <>
      <Nav />

      {/* 1. Hero — no image, stat callout */}
      <HeroSection
        eyebrow="Strategy & Consulting"
        heading="Your IT Strategy Shouldn't Be Guesswork."
        subheading="Our vCIO, vCTO, and vCISO services give your leadership team a trusted technology advisor. We align your IT investments with business outcomes and reduce risk at every level."
        imagePosition="none"
        stat="25+"
        statLabel="years of strategic IT leadership for NC businesses"
        primaryCTA={{ label: 'Book a Free Consultation', utmSuffix: 'page-c' }}
        secondaryCTA={{ label: 'Learn About Our Process', href: '/process/', variant: 'secondary' }}
      />

      {/* 2. Client logos */}
      <ClientLogos />

      {/* 3. Problem framing */}
      <ProblemFraming />

      {/* 3. Process flow with supporting image */}
      <ProcessFlow />

      {/* 4. ROI callout */}
      <ROICallout />

      {/* 5. Mid-page CTA */}
      <MidCTA />

      {/* 6. Leadership proof / Mike Savino credibility */}
      <LeadershipProof />

      {/* 7. Testimonial — dark */}
      <TestimonialBlock
        quote="We went from constant IT firefighting to zero unplanned downtime in 18 months. ITSco didn't just fix our problems — they built a system that prevents them."
        name="David Park"
        title="CFO"
        company="Southern Rehabilitation Network"
        variant="dark"
      />

      {/* 8. BookingCTA */}
      <BookingCTA
        utmSuffix="page-c-bottom"
        backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
      />

      <Footer />
    </>
  )
}
