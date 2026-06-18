import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import { BLOG_POSTS } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'ITSco Blog | Practical IT Insights for Business Leaders',
  description:
    'Articles on managed IT, cybersecurity, cloud, and getting more value from your technology — practical insights from the ITSco team.',
  alternates: { canonical: 'https://www.itsco.com/blog/' },
}

function Hero() {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-6">
            ITSco Blog
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
            IT insights for{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
            >
              business leaders.
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-[#404040] leading-relaxed max-w-2xl mx-auto mb-10">
            Practical articles on managed IT, cybersecurity, cloud, and getting more value from your
            technology — written by the ITSco team.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <CTAButton
            label="Book a Free Consultation"
            utmSuffix="blog-index-hero"
            className="px-8 py-4 rounded-xl text-base"
          />
        </FadeUp>
      </div>
    </section>
  )
}

function PostGrid() {
  return (
    <section
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <StaggerChildren stagger={50} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((p) => (
            <ServiceCard
              key={p.slug}
              slug="blog"
              title={p.title}
              description={p.excerpt}
              href={`/blog/${p.slug}/`}
              image={p.heroImage}
              imageAlt={p.title}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ITSco Insights',
  url: 'https://www.itsco.com/blog/',
  description:
    'IT, cybersecurity, cloud, and AI insights for North Carolina business leaders — from the team at ITSco.',
  publisher: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.itsco.com/blog/' },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav variant="light" />
      <main>
        <Hero />
        <PostGrid />
        <BookingCTA utmSuffix="blog-index-bottom" />
      </main>
      <Footer />
    </>
  )
}
