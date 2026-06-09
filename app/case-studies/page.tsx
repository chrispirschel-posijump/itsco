import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import CaseStudyCard from '@/components/CaseStudyCard'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'Case Studies | Real Client Outcomes | ITSco',
  description:
    'Real results from real ITSco clients across healthcare, financial services, and energy — measurable outcomes from managed IT, cybersecurity, and network automation engagements.',
  alternates: { canonical: 'https://www.itsco.com/case-studies/' },
}

const CASE_STUDIES = [
  {
    slug: 'emerge-ortho-mobile-mri',
    category: 'Healthcare',
    title: 'Transforming Mobile MRI Services through Remote Operations',
    description:
      "How ITSco's Advanced Networking Solutions Addressed Staffing Challenges, Expanded Patient Access, and Optimized Resources for EmergeOrtho",
    stat: '40 hrs',
    statLabel: 'Extra MRI scanning per week, per truck',
    image: '/images/case-studies/healthcare.jpg',
    imageAlt: 'Healthcare imaging environment',
    href: '/case-studies/emerge-ortho-mobile-mri-remote-operations/',
  },
  {
    slug: 'southern-rehabilitation-network',
    category: 'Healthcare',
    title: 'Unlocking Business Opportunities Through IT Innovation',
    description:
      'Southern Rehabilitation Network (SRN), a long-time customer for whom we provide managed services, needed a major update to its computing infrastructure and cybersecurity practices to support its bid for a critical contract with the State of North Carolina.',
    image: '/images/case-studies/healthcare.jpg',
    imageAlt: 'Healthcare provider environment',
    href: '/case-studies/southern-rehabilitation-network/',
  },
  {
    slug: 'regional-bank',
    category: 'Financial Services',
    title: 'Helping a $27 Billion Business Upgrade its Network Management Capabilities',
    description:
      'A 100+ year old regional bank with over $27 Billion in assets and more than 250 offices and 2800 employees needed help improving the security and scalability of their network infrastructure.',
    stat: '$27B',
    statLabel: 'In assets under management',
    image: '/images/case-studies/banking.jpg',
    imageAlt: 'Financial services environment',
    href: '/case-studies/regional-bank/',
  },
  {
    slug: 'network-automation',
    category: 'Energy',
    title: 'Network Automation Project Improves Security, Supportability, and Scalability',
    description:
      "As one of the world's largest oil companies, the subject of this case study is under almost constant attack by cyber criminals and state actors who wish to disrupt western economies for financial and political gain.",
    image: '/images/case-studies/energy.jpg',
    imageAlt: 'Energy industry infrastructure',
    href: '/case-studies/network-automation/',
  },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
            Case Studies
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
            Real results from{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
            >
              real ITSco clients.
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-2xl mx-auto mb-10">
            Measurable outcomes from managed IT, cybersecurity, network automation, and remote-operations
            engagements — written by the people who lived them.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix="case-studies-hero"
              className="px-8 py-4 rounded-xl text-base"
            />
            <CTAButton
              label="Browse case studies"
              href="#studies"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function StudiesGrid() {
  return (
    <section
      id="studies"
      style={{
        background:
          'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <StaggerChildren stagger={60} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CASE_STUDIES.map((c) => (
            <CaseStudyCard
              key={c.slug}
              category={c.category}
              title={c.title}
              description={c.description}
              stat={c.stat}
              statLabel={c.statLabel}
              image={c.image}
              imageAlt={c.imageAlt}
              href={c.href}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

export default function CaseStudiesPage() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <Hero />
        <StudiesGrid />
        <BookingCTA utmSuffix="case-studies-bottom" />
      </main>
      <Footer />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Case Studies',
                item: 'https://www.itsco.com/case-studies/',
              },
            ],
          }),
        }}
      />
    </>
  )
}
