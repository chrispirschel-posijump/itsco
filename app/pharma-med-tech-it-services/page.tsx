import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Pharma & Med Tech IT Services',
  description: 'Transforming IT Solutions for Pharma and Med Tech Industries.',
  alternates: { canonical: 'https://www.itsco.com/pharma-med-tech-it-services/' },
}

// ── Capabilities (Tailored Solutions for Pharma/Med Tech IT) ────────────────

const CAPABILITIES = [
  {
    slug: 'security-audits-compliance',
    title: 'Compliance Auditing',
    description: 'Stay ahead of regulations with our compliance auditing — ensuring HIPAA and HITECH compliance for your business.',
  },
  {
    slug: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Break free from IT stress with our managed services — let us handle your technology needs and focus on advancing medical science.',
  },
  {
    slug: 'helpdesk',
    title: '24/7/365 IT Support',
    description: "Never face an IT crisis alone with our 24/7 support — we're always ready to keep your systems running smoothly.",
  },
  {
    slug: 'it-assessments-strategies',
    title: 'Performance Audits',
    description: 'Experience peak IT performance with our comprehensive audits — we proactively identify and address potential issues, ensuring seamless operations.',
  },
  {
    slug: 'managed-network-services',
    title: '24/7 Network Support',
    description: 'Ensure seamless network functionality with our 24/7 remote support — uninterrupted access to your critical data, guaranteed.',
  },
  {
    slug: 'it-staff-augmentation',
    title: 'IT Outsourcing',
    description: 'Streamline your operations with our IT outsourcing — we take care of your tech, empowering you to prioritize patient care.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Safeguard your valuable data with our advanced cybersecurity solutions — comprehensive protection against threats and fast incident response.',
  },
  {
    slug: 'it-management-consulting',
    title: 'IT Consulting',
    description: 'Harness the expertise of our IT consultants — 30 years of specialized knowledge to drive strategic, impactful technology decisions.',
  },
  {
    slug: 'backup-disaster-recovery',
    title: 'Data Backup & Disaster Recovery',
    description: 'Recover swiftly from any setback with our disaster recovery solutions — safeguarding your data and ensuring uninterrupted operations.',
  },
]

// ── FAQ ────────────────────────────────────────────────────────────────────

const FAQ_CALENDLY = 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=pharma-med-tech-faq'

const FAQS = [
  {
    question: 'What level of support do you provide?',
    answer: 'Our experienced and certified team is available 24/7 to provide uninterrupted support for Pharma/Med Tech IT needs. With a high first-call resolution rate, most issues are resolved immediately without the need for a callback. This ensures that your focus remains on innovating and delivering life-changing medical technology solutions, while we handle any IT concerns that may arise, day or night, weekdays or weekends, holidays or regular days.',
  },
  {
    question: 'What can I expect to pay for Pharma/Med Tech IT services?',
    answer: 'The cost of Pharma/Med Tech IT services will vary depending on the specific needs of your business, the complexity of your systems, the number of users in your environment, and the level of support required. At ITSco, we are well aware of the unique challenges faced by med tech companies and offer a comprehensive base package of IT services. Contact us now for a free quote and discover the tailored solutions we can provide to meet your specific requirements.',
  },
  {
    question: 'Why choose to work with your IT company for Pharma/Med Tech IT services?',
    answer: "Choosing ITSco as your partner for Pharma/Med Tech IT services comes with a multitude of advantages: decades of industry experience, security and compliance assurance, continuous support availability, regular compliance verification, and specialized expertise. Entrust your IT needs to our capable hands. Contact us today and let's work together to streamline your Pharma/Med Tech IT landscape, enhancing efficiency and productivity.",
  },
  {
    question: 'How do your IT services help us meet strict regulatory compliance?',
    answer: 'When it comes to the pharmaceutical and medical tech sectors, regulatory compliance is of utmost importance. At ITSco, our tailored IT services are designed with this in mind. We provide you with the necessary tools and systems to meet stringent compliance requirements, while ensuring the highest level of data security and integrity. We can assist you in maintaining compliance with standards such as HIPAA, HITECH, GDPR, CSA STAR, MDSAP, and ISO/IEC 27001.',
  },
  {
    question: 'How do you ensure the security and privacy of sensitive patient data?',
    answer: 'At ITSco, we prioritize data security and privacy, especially when it comes to handling sensitive patient data. Our dedicated team implements rigorous cybersecurity measures, follows industry best practices, and utilizes advanced encryption methods to protect your valuable data. With this stringent approach, we ensure that your patient data remains private and secure at all times.',
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

// ── Hero — Variant B: image LEFT, text right ────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <HeroImage
          src="/images/hero/industries/accuray-5VkNa1LrS8A-unsplash.jpg"
          alt="Medical professionals reviewing clinical imaging on dual monitors"
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
              Empowering Pharma &amp; Med Tech IT Success
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
              IT Services for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                Pharma and Med Tech.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-itsco-body leading-relaxed mb-10 max-w-xl">
              The pharmaceutical and medical technology sectors face unique operational challenges requiring specialized IT expertise. Organizations in these industries need comprehensive technology solutions that address their distinct compliance requirements and operational complexities.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="pharma-med-tech-hero"
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

// ── Capabilities — 9-card grid ──────────────────────────────────────────────

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Delivering Excellence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-4">
              Tailored solutions for{' '}
              <span className="text-itsco-red">Pharma/Med Tech IT.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="h-full flex flex-col bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-itsco-red/10 flex items-center justify-center mb-5 flex-shrink-0">
                <DynamicIcon slug={c.slug} size={24} className="text-itsco-red" />
              </div>
              <h3 className="text-lg font-semibold text-itsco-dark leading-snug mb-2">
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

// ── Years of Expertise ────────────────────────────────────────────────────

function ExpertiseSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-2 lg:order-1 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Decades of Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Years of Pharma/Med Tech IT{' '}
              <span className="text-itsco-red">expertise.</span>
            </h2>
            <p className="text-lg md:text-xl text-itsco-dark leading-relaxed font-medium mb-6">
              Don&apos;t let IT issues hinder your mission to improve health outcomes. Partner with ITSco for seamless IT management and experience the benefits firsthand.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              With extensive experience in the Pharma/Med Tech IT domain, our seasoned experts can effortlessly navigate your complex medical IT landscape.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Say goodbye to IT challenges with the assistance of our skilled Pharma/Med Tech IT professionals. Contact us today for a smoother operational journey.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/christin-hume-Hcfwew744z4-unsplash.jpg"
                alt="Healthcare IT professional working at a laptop"
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

// ── Reliable IT Support / Digital Transformation — split with image ────────

function ReliableSupportSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/accuray-NHZl162AupI-unsplash.jpg"
                alt="Lab technician operating advanced medical equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Reliable Pharma/Med Tech IT Support
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Digital transformation,{' '}
              <span className="text-itsco-red">end to end.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Embracing digital transformation is crucial in the Pharmaceutical industry, and we offer comprehensive life sciences solutions to facilitate this shift.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Our services span across various industrial segments, including clinical trial development, regulatory compliance, discovery &amp; pre-clinical solutions, and benefits &amp; risk management. We collaborate closely with leading biotech, pharmaceutical, distributor, medical technology, and consumer health clients to deliver world-class solutions.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Our commitment lies in accelerating drug discovery, enhancing clinical trial effectiveness, and expediting the introduction of new drugs to the market. By bringing together technology, devices, and medicines, our MedTech experts are dedicated to improving patient engagement and optimizing healthcare outcomes.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── Compliance Assurance ─────────────────────────────────────────────────

function ComplianceSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-2 lg:order-1 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Compliance Assurance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Pharma/Med Tech IT compliance{' '}
              <span className="text-itsco-red">assurance.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Take the burden off your team and eliminate concerns about tech compliance. With our expert team, you can shift your focus to developing life-saving solutions while entrusting your regulatory compliance services to us.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Our experienced professionals identify potential pitfalls and provide guidance to ensure full compliance with auditing services. We cover a range of compliance requirements, including HIPAA, HITECH, EHR, and reporting standards.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Let us handle your tech compliance needs, giving you peace of mind and allowing you to concentrate on what matters most — delivering impactful healthcare solutions.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/services/pexels-shvets-production-8413332.jpg"
                alt="Clinician reviewing medical imaging and compliance documentation"
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

// ── Comprehensive IT Support — split with image ──────────────────────────

function ComprehensiveSupportSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/accuray-AhTXFlSf5xI-unsplash.jpg"
                alt="Medical research and pharmaceutical development workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Across the Entire Lifecycle
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Comprehensive IT support{' '}
              <span className="text-itsco-red">throughout the process.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Unlock the potential of your life science enterprise with our comprehensive suite of digital solutions. Enhance clinical development processes, boost data productivity, and achieve impactful business outcomes.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Our digital solutions are tailored to optimize pharmaceutical discovery processes, streamline pre-clinical procedures, and refine product development strategies.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Backed by a combination of industry expertise and cutting-edge technologies, we deliver effective quality risk management services that serve as the foundation for high-quality pharmaceuticals and medical devices.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── Mid-page CTA — dark band, keeps red brand CTA ──────────────────────────

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
            Stay Compliant: Be Certain and Confident
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl">
            Free your team to focus on the science.
          </h2>
        </div>
        <CTAButton
          label="Book a Free Consultation"
          utmSuffix="pharma-med-tech-mid"
          className="px-8 py-4 rounded-xl text-base flex-shrink-0"
        />
      </div>
    </section>
  )
}

// ── Case Studies ─────────────────────────────────────────────────────────

function CaseStudiesSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Engineering excellence,{' '}
              <span className="text-itsco-red">delivered.</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              FAQ About Our IT Company
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Frequently asked{' '}
              <span className="text-itsco-red">questions.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="divide-y divide-[#EBEBEB] max-w-4xl">
          {FAQS.map((f, i) => (
            <div key={i} className="py-7">
              <h3 className="text-lg md:text-xl font-semibold text-itsco-dark leading-snug mb-3">
                {f.question}
              </h3>
              <p className="text-base text-itsco-body leading-relaxed">
                {i === 1 ? (
                  <>
                    The cost of Pharma/Med Tech IT services will vary depending on the specific needs of your business, the complexity of your systems, the number of users in your environment, and the level of support required. At ITSco, we are well aware of the unique challenges faced by med tech companies and offer a comprehensive base package of IT services.{' '}
                    <a
                      href={FAQ_CALENDLY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-itsco-red font-semibold underline underline-offset-4 decoration-itsco-red/30 hover:decoration-itsco-red transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-70 rounded-sm"
                    >
                      Book a free consultation
                    </a>{' '}
                    and discover the tailored solutions we can provide to meet your specific requirements.
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Explore more from{' '}
              <span className="text-itsco-red">ITSco.</span>
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
            slug="healthcare-ai-services"
            title="Healthcare AI Services"
            description="Fractional CAIO retainer, private LLM environments, and HIPAA-aligned AI governance for clinical and life-sciences organizations."
            href="/healthcare-ai-services/"
            image="/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg"
            imageAlt="Team collaborating around laptops in a modern workspace"
          />
        </div>
      </div>
    </section>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function PharmaMedTechPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav variant="light" />
      <Hero />
      <CapabilitiesSection />
      <ExpertiseSection />
      <ReliableSupportSection />
      <ComplianceSection />
      <ComprehensiveSupportSection />
      <MidCTA />
      <CaseStudiesSection />
      <FAQSection />
      <RelatedServices />
      <BookingCTA utmSuffix="pharma-med-tech-bottom" />
      <Footer />
    </>
  )
}
