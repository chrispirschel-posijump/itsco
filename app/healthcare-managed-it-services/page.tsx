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
  title: 'Managed IT Services for Healthcare',
  description: 'HIPAA-compliant managed IT, cybersecurity, and 24/7 helpdesk for healthcare institutions and facilities. Trusted since 1996.',
  alternates: { canonical: 'https://www.itsco.com/healthcare-managed-it-services/' },
}

// ── Capabilities — Complete IT Solutions ───────────────────────────────────

const CAPABILITIES = [
  {
    slug: 'managed-it-services',
    title: 'Full and Co-Managed IT Services',
    description: 'Transform IT Chaos into Harmony. Experience Managed Healthcare IT Services that Boost Productivity and Reduce Issues.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Fortify Your Digital Empire. Harness Our Cutting-Edge IT Services for Unparalleled Protection Against Cyber Threats.',
  },
  {
    slug: 'helpdesk',
    title: '24/7 Helpdesk',
    description: 'Your Lifeline in IT Emergencies. 24/7 Support with Speedy Resolution by Real Live Agents.',
  },
  {
    slug: 'it-management-consulting',
    title: 'IT Consulting',
    description: 'Make Informed IT Decisions. Benefit from Experienced Consultants Guiding Small Practices and Large Healthcare Providers.',
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    description: 'Maximize Efficiency with Cutting-Edge Cloud Solutions. Seamlessly Migrate, Monitor, and Manage Your Cloud with Our Expertise.',
  },
  {
    slug: 'compliance-management',
    title: 'HIPAA Compliance',
    description: 'Mitigate Risks, Ensure Compliance. Our Expert Team Implements HIPAA-Compliant Technologies and Processes to Safeguard Your Business.',
  },
  {
    slug: 'backup-disaster-recovery',
    title: 'Backup & Disaster Recovery',
    description: 'Protect Your Data, Ensure Business Continuity. Our Reliable Backup and Disaster Recovery Solutions Keep Your Information Secure and Accessible.',
  },
  {
    slug: 'server-monitoring-and-maintenance',
    title: 'Proactive Network Monitoring',
    description: 'Stay Ahead of IT Disruptions. Benefit from Proactive Network Monitoring and Support to Detect and Resolve Issues Efficiently.',
  },
  {
    slug: 'it-procurement',
    title: 'IT Procurement',
    description: 'Unlock Competitive Pricing and Favorable Terms. Say Goodbye to Paying Retail Prices for Your IT Procurements.',
  },
]

// ── FAQ ────────────────────────────────────────────────────────────────────

const FAQ_CALENDLY = 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=healthcare-managed-it-faq'

const FAQS = [
  {
    question: 'What sets Your Healthcare Call Center Solution apart from others?',
    answer: 'Our Healthcare Call Center Solution is unlike any other. Designed exclusively for healthcare providers, our specialized services cater to both inbound and outbound call management. Our primary focus is to enhance the patient experience by streamlining healthcare delivery and maximizing the return on investment for healthcare organizations. With our tailored approach, we create a win-win situation for all parties involved, ensuring seamless communication and satisfaction.',
  },
  {
    question: 'How do you ensure compliance with healthcare industry standards?',
    answer: 'Ensuring compliance with crucial industry standards is our topmost priority in our Healthcare Managed IT Services. We strictly adhere to HIPAA, PCI, and GDPR regulations to guarantee the highest level of security. Our robust security measures are meticulously implemented to safeguard all sensitive patient data. By prioritizing compliance and data protection, healthcare providers can focus solely on delivering exceptional patient care, without the concerns of data breaches.',
  },
  {
    question: 'What training does your team receive for healthcare industry expertise?',
    answer: 'Our team of IT professionals in Healthcare Managed IT Services stands out not only for their technical expertise and customer service skills but also for their extensive training in cybersecurity. This comprehensive and interdisciplinary training enables them to address various inquiries, from telemedicine software usability to advanced technical support. Furthermore, their cybersecurity training equips them to identify and prevent phishing attacks, ensuring the security of sensitive patient data.',
  },
  {
    question: 'How flexible are your pricing and delivery models?',
    answer: 'We recognize the unique and evolving requirements of healthcare organizations in Healthcare Managed IT Services. With us, you have the freedom to pay for the specific services you need, ensuring complete control over your budget. Our flexible delivery models can be easily scaled up or down to accommodate your changing needs, without binding you to lengthy contracts.',
  },
  {
    question: 'Can your services seamlessly integrate with existing systems?',
    answer: 'Without a doubt, our Healthcare Managed IT Services are expertly crafted to seamlessly integrate with your current healthcare management systems. This ensures a smooth transition and immediate operational enhancements. By leveraging our solutions, your healthcare organization can experience immediate benefits such as improved efficiencies, advanced features, and a streamlined patient care process.',
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
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src="/images/supporting/industries/accuray-AhTXFlSf5xI-unsplash.jpg"
          alt="Clinician consulting a patient next to a CyberKnife treatment device"
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
              Healthcare IT
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
              Managed IT services for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                healthcare institutions.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-itsco-body leading-relaxed mb-10 max-w-xl">
              Unlock Tangible Value with Our Healthcare IT Solutions. HIPAA-aligned managed IT, cybersecurity, and 24/7 helpdesk for clinical organizations across NC, SC, and VA.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix="healthcare-managed-it-hero"
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

// ── Capabilities — 9-card grid ─────────────────────────────────────────────

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Complete IT Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Healthcare IT, <span className="text-itsco-red">end to end.</span>
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

// ── Pillar sections — 4 alternating image/text blocks ──────────────────────

function BoostProductivitySection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-2 lg:order-1 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Predictable Costs, Predictable IT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Boost productivity, <span className="text-itsco-red">slash costs.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Healthcare managed IT services are a specialized engagement model in which an outside provider owns the technology stack that clinical operations run on — EHR/EMR uptime, HIPAA-compliant infrastructure, medical-device network integration, telehealth quality of service, and 24/7 cybersecurity — under a predictable monthly fee tied to patient-care SLAs.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              The model exists because general-purpose MSPs miss the constraints that matter most in healthcare: BAA-backed compliance, IoMT segmentation, ransomware-target threat profile, and zero tolerance for downtime during a clinical day.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              ITSco delivers this model for clinics, practice groups, and clinical-research organizations across NC, SC, and VA — with reduced IT cost, enhanced network stability, and complete visibility into IT spending across single or multi-site operations.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/vitaly-gariev-2kopEHjST-g-unsplash.jpg"
                alt="Two healthcare professionals collaborating over a tablet"
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

function FlexibleSupportSection() {
  return (
    <section style={{ background: 'var(--color-itsco-blush)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/hero/industries/pexels-tima-miroshnichenko-5452300.jpg"
                alt="Doctor with stethoscope reviewing patient information on a tablet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Always-On Support
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Flexible support, <span className="text-itsco-red">anywhere.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Rest easy knowing your IT is continuously monitored and managed by a trusted 24/7 IT company.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Resolve IT issues promptly with remote assistance from our team, while critical issues are handled by our certified professionals.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Experience the responsiveness of an in-house IT team when you partner with one of the top managed services providers.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function HumanSupportSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="order-2 lg:order-1 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Real Humans, Real Help
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Human-based{' '}
              <span className="text-itsco-red">24/7 IT support.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Imagine having a personal IT squad available 24/7, ready to provide assistance at any time.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Say goodbye to impersonal automated replies and frustrating wait times. With our high live call answer rate, we are the solution to your tech troubles.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Your agents can reach our support team on-the-go through their mobile devices. This ensures quick access to assistance, even when they encounter urgent IT issues while working remotely.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Real people, real solutions &ndash; that&apos;s our commitment to keeping your healthcare practice agile and running smoothly.
            </p>
          </FadeUp>

          <FadeUp delay={100} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/pexels-tima-miroshnichenko-5407212.jpg"
                alt="Clinician reviewing a chest X-ray on a tablet"
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

function GenuineServiceSection() {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/supporting/industries/daria-pimkina-tYaccl19A3Q-unsplash.jpg"
                alt="ITSco support specialist working alongside a healthcare client"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Service That Goes Above
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
              Genuine service from{' '}
              <span className="text-itsco-red">real experts.</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Other managed services providers meet their minimum contractual obligations, but our SLOs go above and beyond every time.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Exceptional service is ingrained in our team&apos;s core values, evident through our live customer satisfaction counter on our website.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
              Experience personable service from real people who truly understand your business and its unique needs.
            </p>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed">
              Partner with an award-winning IT provider that consistently maintains an average CSAT score of 90% or higher.
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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
            Optimal IT Efficiency for Enhanced Patient Care
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl">
            Supercharge your patient care. Streamline your healthcare IT now.
          </h2>
        </div>
        <CTAButton
          label="Book a Free Consultation"
          utmSuffix="healthcare-managed-it-mid"
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
              Healthcare IT Service FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Frequently asked <span className="text-itsco-red">questions.</span>
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
                {i === 3 ? (
                  <>
                    We recognize the unique and evolving requirements of healthcare organizations in Healthcare Managed IT Services. With us, you have the freedom to pay for the specific services you need, ensuring complete control over your budget. Our flexible delivery models can be easily scaled up or down to accommodate your changing needs, without binding you to lengthy contracts.{' '}
                    <a
                      href={FAQ_CALENDLY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-itsco-red font-semibold underline underline-offset-4 decoration-itsco-red/30 hover:decoration-itsco-red transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-70 rounded-sm"
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Explore more from <span className="text-itsco-red">ITSco.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ServiceCard
            slug="healthcare-ai-services"
            title="Healthcare AI Services"
            description="Fractional CAIO retainer, private LLM environments, and HIPAA-aligned AI governance for clinical and life-sciences organizations."
            href="/healthcare-ai-services/"
            image="/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg"
            imageAlt="Team collaborating around laptops in a modern workspace"
          />
          <ServiceCard
            slug="pharma-med-tech-it-services"
            title="Pharma & Med Tech IT"
            description="Specialized IT for pharmaceutical and medical technology organizations. HIPAA, HITECH, and ISO/IEC 27001 compliance built in."
            href="/pharma-med-tech-it-services/"
            image="/images/hero/industries/accuray-5VkNa1LrS8A-unsplash.jpg"
            imageAlt="Medical professionals reviewing clinical imaging"
          />
          <ServiceCard
            slug="cybersecurity"
            title="Cybersecurity & MSSP"
            description="24/7 SOC monitoring, MDR, firewall management, and compliance programs that reduce your risk exposure before threats become incidents."
            href="/cybersecurity/"
            image="/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg"
            imageAlt="Security operations engineers reviewing code on multiple monitors"
          />
        </div>
      </div>
    </section>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function HealthcareManagedITPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav variant="light" />
      <Hero />
      <CapabilitiesSection />
      <BoostProductivitySection />
      <FlexibleSupportSection />
      <HumanSupportSection />
      <GenuineServiceSection />
      <MidCTA />
      <CaseStudiesSection />
      <FAQSection />
      <RelatedServices />
      <BookingCTA utmSuffix="healthcare-managed-it-bottom" />
      <Footer />
    </>
  )
}
