import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import DynamicIcon from '@/components/DynamicIcon'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'IT Services for Construction Companies | ITSco',
  description: 'Managed IT, cybersecurity, cloud, and 24/7 helpdesk for construction companies. Predictable cost, minimal downtime, project-ready.',
  alternates: { canonical: 'https://www.itsco.com/construction-it-services/' },
}

// ── Capabilities — Comprehensive Construction IT Solutions ─────────────────

const CAPABILITIES = [
  {
    slug: 'managed-it-services',
    title: 'Fully-Managed IT Services',
    description: 'Experience worry-free construction IT with our managed services. Reduce issues and focus on building success.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Build a digital fortress for your data with our proactive, fully-managed IT services. Secure 24/7.',
  },
  {
    slug: 'helpdesk',
    title: 'Our IT Help Never Sleeps',
    description: "24/7 worry-free IT support. Real humans, not bots, ensuring you're always backed by experts.",
  },
  {
    slug: 'it-management-consulting',
    title: 'IT Consulting',
    description: 'Harness our tech expertise. Certified consultants align your IT with current operations and fuel future growth.',
  },
  {
    slug: 'cloud-services',
    title: 'Your Head in Our Clouds',
    description: 'Seamlessly embrace the cloud. Dependable construction IT services for efficient, disruption-free teamwork.',
  },
  {
    slug: 'compliance-management',
    title: 'Compliance, Made Easy',
    description: 'Effortless compliance for your operations. Monthly audits simplify the complexity, allowing you to focus on construction projects.',
  },
  {
    slug: 'backup-disaster-recovery',
    title: 'Safety Nets for Your Data',
    description: 'Secure your data with confidence. Robust backup and disaster recovery solutions for construction IT, offering 24/7 detection and rapid response.',
  },
  {
    slug: 'server-monitoring-and-maintenance',
    title: 'Your Network Guard Dog',
    description: 'Shield your business from IT issues. Proactive network monitoring nips problems in the bud, allowing you to focus on building success.',
  },
  {
    slug: 'remote-it-support',
    title: 'Your IT Issues, Solved',
    description: 'Efficiently tackle IT issues. Our high first call resolution rate ensures fewer disruptions, keeping construction projects on track.',
  },
]

// ── FAQ ────────────────────────────────────────────────────────────────────

const FAQ_CALENDLY = 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=construction-it-faq'

const FAQS = [
  {
    question: 'What sets apart your construction IT services from the rest?',
    answer: 'What sets our Construction IT Services apart is our unwavering commitment to keeping your IT systems running smoothly with minimal disruptions. As a trusted IT partner, ITSco understands the specific requirements of the construction industry and provides customized solutions to meet those needs. With our expertise and tailored approach, we ensure that your construction business operates efficiently and effectively.',
  },
  {
    question: 'How secure are your cybersecurity services for construction companies?',
    answer: 'At Construction IT Services, safeguarding your data is our top priority. As a trusted IT security services provider, we adhere to industry-leading standards to ensure the highest level of data security. Our comprehensive approach includes 24/7 monitoring to proactively detect and thwart potential threats, providing you with peace of mind knowing that your sensitive information is always protected.',
  },
  {
    question: 'What level of IT support can I expect from your services?',
    answer: 'With Construction IT Services, you can expect round-the-clock IT support. Our dedicated helpdesk is available 24/7, with knowledgeable professionals answering the majority of calls promptly. Whether you have a minor inquiry or a critical issue, our team is committed to providing swift resolutions and expert assistance, ensuring minimal disruption to your business operations.',
  },
  {
    question: 'Do you offer IT consulting services for construction companies?',
    answer: "Construction IT Services is pleased to offer IT consulting services specifically designed for construction companies. With our team's extensive technical certifications and industry experience, we provide expert guidance tailored to your unique business requirements. From strategic IT infrastructure planning to optimizing operations, we are dedicated to helping your construction business thrive with the right IT solutions.",
  },
  {
    question: 'How can your IT services enhance project management in our construction business?',
    answer: 'In the construction industry, seamless coordination and efficient management of tasks and team members are crucial for success. At Construction IT Services, we understand this and offer IT services that enhance project management. Our tailored solutions include advanced software tools that streamline task allocation, team communication, resource management, and real-time project tracking. These digital tools are specifically designed to meet the unique needs of your construction business, enabling precise planning, efficient execution, and timely project delivery.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-[90vh] flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src="/images/hero/industries/evgeniy-surzhan-lVWozBOVY2M-unsplash.jpg"
          alt="Architect reviewing a 3D BIM model of a construction scaffolding system"
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
              Construction IT
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
              IT services for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                construction companies.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-[#404040] leading-relaxed mb-10 max-w-xl">
              Trusted partners for reliable construction IT solutions. Predictable cost, minimal downtime, project-ready support for every job site and back-office team.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="construction-it-hero"
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

        <div className="mt-12 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden w-full">
          <Image
            src="/images/hero/industries/evgeniy-surzhan-lVWozBOVY2M-unsplash.jpg"
            alt="Architect reviewing a 3D BIM model of a construction scaffolding system"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}

// ── Capabilities — 9-card grid ─────────────────────────────────────────────

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Comprehensive Construction IT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Solutions in <span className="text-[#CA3C27]">one place.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#CA3C27]/10 flex items-center justify-center mb-5 flex-shrink-0">
                <DynamicIcon slug={c.slug} size={24} className="text-[#CA3C27]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">
                {c.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Pillar 1 — Trustworthy Foundation ──────────────────────────────────────

function TrustworthyFoundationSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-2 lg:order-1 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Trustworthy Foundation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              Seamless operations,{' '}
              <span className="text-[#CA3C27]">zero downtime.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              With our construction IT services, say goodbye to IT downtimes and enjoy unparalleled peace of mind. We understand that your main focus is on building, which is why we ensure seamless operations through cutting-edge technology and high availability. Our services provide unmatched reliability, allowing you to concentrate on your construction projects without any interruptions.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/services/pexels-thirdman-5582868.jpg"
                alt="Construction team collaborating over plans and documents"
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

// ── Pillar 2 — Data Protection Shield ──────────────────────────────────────

function DataProtectionSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/kenny-eliason-1-aA2Fadydc-unsplash.jpg"
                alt="Secure modern workspace protecting critical business data"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Data Protection Shield
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              An impenetrable fortress{' '}
              <span className="text-[#CA3C27]">for your data.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-4">
              Immerse yourself in the peace of mind of fortified data. Our top-notch cybersecurity IT services form an impenetrable fortress for your construction company.
            </p>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-4">
              Bid farewell to data breaches and cyber threats. We provide round-the-clock coverage, ensuring the utmost security for your sensitive information.
            </p>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              In today&apos;s digital landscape, data forms the foundation of your operations, and we guarantee its unwavering protection.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── Pillar 3 — Building Success with Expert IT Solutions ──────────────────

function BuildingSuccessSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-2 lg:order-1 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Expert IT Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              Building success with{' '}
              <span className="text-[#CA3C27]">certified experts.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-4">
              Consider the link between the most successful construction companies and top-tier IT infrastructure. Our team, equipped with multiple tech certifications, delivers customized IT solutions to meet your specific requirements.
            </p>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-4">
              Experience enhanced efficiency, increased productivity, and accelerated growth. Our construction company IT services provide the essential IT groundwork upon which your business success is built.
            </p>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              Learn more about how our services can transform your construction company&apos;s IT landscape.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/pexels-fauxels-3184299.jpg"
                alt="ITSco experts collaborating with a construction leadership team"
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

// ── Pillar 4 — 24/7 IT Partner Support ────────────────────────────────────

function PartnerSupportSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/austin-distel-744oGeqpxPQ-unsplash.jpg"
                alt="Support technician on a call helping a construction site team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              24/7 IT Partner Support
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              An IT partner who&apos;s{' '}
              <span className="text-[#CA3C27]">always there.</span>
            </h2>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed mb-4">
              Why settle for an IT partner who is not always there? We are available round-the-clock to address any IT issue, big or small, through our 24/7 helpdesk.
            </p>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed">
              With a high rate of resolving issues on the first call, we ensure seamless operations for your business. Trust in the peace of mind that comes with knowing your IT needs are well taken care of.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── Mid-page CTA ───────────────────────────────────────────────────────────

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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-3">
            Simplifying IT Complexity
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl">
            Supercharge your business today.
          </h2>
        </div>
        <CTAButton
          label="Book a Free Consultation"
          utmSuffix="construction-it-mid"
          className="px-8 py-4 rounded-xl text-base flex-shrink-0"
        />
      </div>
    </section>
  )
}

// ── Case Studies ───────────────────────────────────────────────────────────

function CaseStudiesSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              IT services for{' '}
              <span className="text-[#CA3C27]">construction businesses.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={120} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            <CaseStudyCard
              key="oil"
              category="Energy"
              title="Network Automation Project Improves Security, Supportability, and Scalability"
              description="Implementation of a scalable network automation engine to improve security for one of the world's largest oil companies — on time and on budget."
              stat="On time"
              statLabel="and on budget"
              image="/images/case-studies/energy.jpg"
              imageAlt="Server infrastructure for an enterprise energy network"
              href="/case-studies/network-automation/"
            />,
            <CaseStudyCard
              key="bank"
              category="Banking"
              title="Helping a $27 Billion Business Upgrade its Network Management Capabilities"
              description="Using automation to enhance the security, manageability, and scalability of a network infrastructure that supports 2,800 employees across 250 offices."
              stat="2,800"
              statLabel="employees across 250 offices"
              image="/images/case-studies/banking.jpg"
              imageAlt="Banking professional reviewing financial systems"
              href="/case-studies/regional-bank/"
            />,
            <CaseStudyCard
              key="srn"
              category="Healthcare"
              title="Unlocking Business Opportunities Through IT Innovation"
              description="Design and implementation of a modernized computing infrastructure helped Southern Rehabilitation Network streamline business, improve security, and qualify for state contracts."
              stat="14"
              statLabel="locations supported"
              image="/images/case-studies/healthcare.jpg"
              imageAlt="Healthcare facility powered by modern IT infrastructure"
              href="/case-studies/southern-rehabilitation-network/"
            />,
          ]}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── FAQ ────────────────────────────────────────────────────────────────────

function FAQSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-paper-deep) 12%, var(--color-itsco-paper-deep) 88%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Frequently asked <span className="text-[#CA3C27]">questions.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="divide-y divide-[#EBEBEB] max-w-4xl">
          {FAQS.map((f, i) => (
            <div key={i} className="py-7">
              <h3 className="text-lg md:text-xl font-semibold text-[#111111] leading-snug mb-3">
                {f.question}
              </h3>
              <p className="text-base text-[#404040] leading-relaxed">
                {i === 2 ? (
                  <>
                    With Construction IT Services, you can expect round-the-clock IT support. Our dedicated helpdesk is available 24/7, with knowledgeable professionals answering the majority of calls promptly. Whether you have a minor inquiry or a critical issue, our team is committed to providing swift resolutions and expert assistance, ensuring minimal disruption to your business operations.{' '}
                    <a
                      href={FAQ_CALENDLY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CA3C27] font-semibold underline underline-offset-4 decoration-[#CA3C27]/30 hover:decoration-[#CA3C27] transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:opacity-70 rounded-sm"
                    >
                      Book a free consultation
                    </a>{' '}
                    to scope your needs.
                  </>
                ) : (
                  f.answer
                )}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── Related services ───────────────────────────────────────────────────────

function RelatedServices() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Explore more from <span className="text-[#CA3C27]">ITSco.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ServiceCard
            slug="managed-it-services"
            title="Managed IT Services"
            description="Proactive monitoring, helpdesk, and network management. Predictable monthly cost. No in-house IT department required."
            href="/managed-it-services/"
            image="/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg"
            imageAlt="Helpdesk technician on the phone behind monitors"
          />
          <ServiceCard
            slug="cybersecurity"
            title="Cybersecurity & MSSP"
            description="24/7 SOC monitoring, MDR, firewall management, and compliance programs that reduce your risk exposure before threats become incidents."
            href="/cybersecurity/"
            image="/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg"
            imageAlt="Security operations engineers reviewing code on multiple monitors"
          />
          <ServiceCard
            slug="cloud-services"
            title="Cloud Services"
            description="Managed cloud, migration strategy, and Azure and AWS support that scales your infrastructure with your business."
            href="/cloud-services/"
            image="/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg"
            imageAlt="Team collaborating around laptops in a modern workspace"
          />
        </div>
      </div>
    </section>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function ConstructionITPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav variant="light" />
      <Hero />
      <CapabilitiesSection />
      <TrustworthyFoundationSection />
      <DataProtectionSection />
      <BuildingSuccessSection />
      <PartnerSupportSection />
      <MidCTA />
      <CaseStudiesSection />
      <FAQSection />
      <RelatedServices />
      <BookingCTA utmSuffix="construction-it-bottom" />
      <Footer />
    </>
  )
}
