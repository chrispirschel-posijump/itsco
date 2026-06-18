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
import {
  META,
  HERO,
  HERO_IMAGE,
  CAPABILITIES_HEADING,
  CAPABILITIES,
  PILLARS,
  MID_CTA,
  FAQ_HEADING,
  FAQ_CALENDLY,
  FAQS,
  FAQ_INLINE_CTA_INDEX,
  FAQ_INLINE_CTA_LABEL,
} from './content'

// Orphan page — removed from Nav, Footer, and the /industries/ hub by
// stakeholder request. Kept on disk in case it's revived later. Noindex
// prevents accidental indexing once the global robots gate is flipped at
// launch, and the sitemap excludes it.
export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: META.canonical },
  robots: { index: false, follow: false },
}

type FaqAnswerItem = string | { items: readonly string[] }

const isList = (item: FaqAnswerItem): item is { items: readonly string[] } =>
  typeof item === 'object' && item !== null && Array.isArray((item as { items: unknown }).items)

const itemHasContent = (item: FaqAnswerItem) =>
  isList(item) ? item.items.some((s) => s.trim().length > 0) : item.trim().length > 0

const flattenAnswer = (answer: readonly FaqAnswerItem[]) =>
  answer
    .map((it) => (isList(it) ? it.items.map((s) => `• ${s}`).join(' ') : it))
    .join(' ')

const faqHasContent = (f: { answer: readonly FaqAnswerItem[] }) =>
  f.answer.some(itemHasContent)

const populatedFaqs = FAQS.filter(faqHasContent)
const faqJsonLd =
  populatedFaqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: populatedFaqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: flattenAnswer(f.answer) },
        })),
      }
    : null

const PILLAR_BACKGROUNDS = [
  'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)',
  'var(--color-itsco-blush)',
  'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)',
  'var(--color-itsco-paper)',
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
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
          {HERO.body && (
            <FadeUp delay={200}>
              <p className="text-lg text-[#404040] leading-relaxed mb-10 max-w-xl">{HERO.body}</p>
            </FadeUp>
          )}
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix={HERO.utmSuffix}
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

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {CAPABILITIES_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              {CAPABILITIES_HEADING.headlineLead}{' '}
              <span className="text-[#CA3C27]">{CAPABILITIES_HEADING.headlineAccent}</span>
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
              <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2">{c.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">{c.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function PillarSection({ pillar, bg }: { pillar: (typeof PILLARS)[number]; bg: string }) {
  const imageFirst = pillar.imageSide === 'left'
  const textOrder = imageFirst ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
  const imageOrder = imageFirst ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
  const visibleParagraphs = pillar.paragraphs.filter((p) => p.trim().length > 0)

  return (
    <section style={{ background: bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeUp className={`${imageOrder} lg:col-span-5`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={100} className={`${textOrder} lg:col-span-7`}>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {pillar.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              {pillar.headlineLead}{' '}
              <span className="text-[#CA3C27]">{pillar.headlineAccent}</span>
            </h2>
            {visibleParagraphs.map((p, i) => (
              <p
                key={i}
                className={`text-base md:text-lg text-[#404040] leading-relaxed ${
                  i < visibleParagraphs.length - 1 ? 'mb-4' : ''
                }`}
              >
                {p}
              </p>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

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
            {MID_CTA.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl">
            {MID_CTA.headline}
          </h2>
        </div>
        <CTAButton
          label="Book a Free Consultation"
          utmSuffix={MID_CTA.utmSuffix}
          className="px-8 py-4 rounded-xl text-base flex-shrink-0"
        />
      </div>
    </section>
  )
}

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
              Engineering excellence, <span className="text-[#CA3C27]">delivered.</span>
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

function FAQSection() {
  if (populatedFaqs.length === 0) return null
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-paper-deep) 12%, var(--color-itsco-paper-deep) 88%, var(--color-itsco-paper) 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              {FAQ_HEADING.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              {FAQ_HEADING.headlineLead}{' '}
              <span className="text-[#CA3C27]">{FAQ_HEADING.headlineAccent}</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={80} className="divide-y divide-[#EBEBEB] max-w-4xl">
          {FAQS.map((f, i) => {
            const visibleItems = f.answer.filter(itemHasContent)
            if (visibleItems.length === 0) return null
            const showInlineCta = i === FAQ_INLINE_CTA_INDEX
            const lastIndex = visibleItems.length - 1
            return (
              <div key={i} className="py-7">
                <h3 className="text-lg md:text-xl font-semibold text-[#111111] leading-snug mb-3">
                  {f.question}
                </h3>
                {visibleItems.map((item, pi) => {
                  const spacing = pi < lastIndex ? 'mb-3' : ''
                  if (isList(item)) {
                    return (
                      <ul
                        key={pi}
                        className={`list-disc pl-5 text-base text-[#404040] leading-relaxed space-y-1.5 ${spacing}`}
                      >
                        {item.items.map((li, lii) => (
                          <li key={lii}>{li}</li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p
                      key={pi}
                      className={`text-base text-[#404040] leading-relaxed ${spacing}`}
                    >
                      {item}
                      {showInlineCta && pi === lastIndex && (
                        <>
                          {' '}
                          <a
                            href={FAQ_CALENDLY}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#CA3C27] font-semibold underline underline-offset-4 decoration-[#CA3C27]/30 hover:decoration-[#CA3C27] transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:opacity-70 rounded-sm"
                          >
                            {FAQ_INLINE_CTA_LABEL}
                          </a>
                          {' '}to discuss your agency&apos;s needs.
                        </>
                      )}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}

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

export default function MarketingITPage() {
  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Nav variant="light" />
      <Hero />
      <CapabilitiesSection />
      {PILLARS.map((pillar, i) => (
        <PillarSection key={pillar.eyebrow} pillar={pillar} bg={PILLAR_BACKGROUNDS[i]} />
      ))}
      <MidCTA />
      <CaseStudiesSection />
      <FAQSection />
      <RelatedServices />
      <BookingCTA utmSuffix="marketing-it-bottom" />
      <Footer />
    </>
  )
}
