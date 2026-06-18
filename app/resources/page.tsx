import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'IT Resources | ITSco',
  description:
    'Guides, articles, case studies, and white papers from ITSco — practical insights to make IT a measurable advantage for your business.',
  alternates: { canonical: 'https://www.itsco.com/resources/' },
}

const RESOURCES = [
  {
    slug: 'maximize-roi-with-managed-it-services',
    title: 'ROI Guide',
    description:
      'Maximize ROI with Managed IT Services — our guide to turning IT spending into measurable business returns.',
    href: '/maximize-roi-with-managed-it-services/',
  },
  {
    slug: 'blog',
    title: 'Blog',
    description:
      'Practical articles on managed IT, cybersecurity, cloud, and getting more value from your technology.',
    href: '/blog/',
  },
  {
    slug: 'case-studies',
    title: 'Case Studies',
    description:
      'Real results from real ITSco clients across healthcare, finance, manufacturing, and more.',
    href: '/case-studies/',
  },
  {
    slug: 'white-papers',
    title: 'White Papers',
    description:
      'In-depth guidance on the technology decisions facing today’s business leaders.',
    href: '/white-papers/',
  },
]

function Hero() {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
            Resources
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
            Insights to make IT a{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
            >
              business advantage.
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-2xl mx-auto mb-10">
            Guides, articles, case studies, and white papers from the ITSco team — practical
            knowledge to help you get more from your technology.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix="resources-hero"
              className="px-8 py-4 rounded-xl text-base"
            />
            <CTAButton
              label="Browse resources"
              href="#resources"
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function ResourcesGrid() {
  return (
    <section
      id="resources"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <StaggerChildren stagger={60} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RESOURCES.map((r) => (
            <ServiceCard key={r.slug} slug={r.slug} title={r.title} description={r.description} href={r.href} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

const resourcesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resources',
  url: 'https://www.itsco.com/resources/',
  description:
    'IT resources — case studies, white papers, blog posts, and tools to help business leaders make smarter technology decisions.',
  about: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.itsco.com/resources/' },
  ],
}

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />
      <main>
        <Hero />
        <ResourcesGrid />
        <BookingCTA utmSuffix="resources-bottom" />
      </main>
      <Footer />
    </>
  )
}
