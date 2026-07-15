import HeroImage from '@/components/HeroImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import ServiceCard from '@/components/ServiceCard'
import { FadeUp } from '@/components/ScrollAnimations'
import { type BlogPost as BlogPostMeta, relatedPosts } from '@/lib/blogPosts'

export type BlogBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: readonly string[] }

// Topic-relevant CTA keyed by category — links to the matching service hub.
const TOPIC_CTA: Record<string, { text: string; href: string; label: string }> = {
  Cybersecurity: {
    text: 'Concerned about your security posture?',
    href: '/cybersecurity/',
    label: 'Explore Cybersecurity Services',
  },
  'Managed IT': {
    text: 'Ready for proactive, predictable IT?',
    href: '/managed-it-services/',
    label: 'Explore Managed IT Services',
  },
  Cloud: {
    text: 'Planning a move to the cloud?',
    href: '/cloud-services/',
    label: 'Explore Cloud Services',
  },
  'Business Insights': {
    text: 'Want to make IT a business advantage?',
    href: '/services/',
    label: 'Explore Our Services',
  },
  AI: {
    text: 'Ready to make AI a measurable advantage?',
    href: '/ai-automation/',
    label: 'Explore AI Services',
  },
}

function wordCount(article: readonly BlogBlock[]): number {
  let n = 0
  for (const block of article) {
    if (block.type === 'ul') {
      for (const item of block.items) n += item.trim().split(/\s+/).length
    } else {
      n += block.text.trim().split(/\s+/).length
    }
  }
  return n
}

export function blogJsonLd(post: BlogPostMeta, article: readonly BlogBlock[]) {
  const url = `https://www.itsco.com/blog/${post.slug}/`
  const article_: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.itsco.com${post.heroImage}`,
    articleSection: post.category,
    wordCount: wordCount(article),
    author: { '@type': 'Organization', name: 'ITSco', url: 'https://www.itsco.com/' },
    publisher: {
      '@type': 'Organization',
      name: 'ITSco',
      logo: { '@type': 'ImageObject', url: 'https://www.itsco.com/images/itsco-logo.svg' },
    },
    mainEntityOfPage: url,
    url,
  }
  if (post.publishedDate) article_.datePublished = post.publishedDate
  if (post.modifiedDate) article_.dateModified = post.modifiedDate
  return [
    article_,
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.itsco.com/blog/' },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ]
}

function Hero({ post }: { post: BlogPostMeta }) {
  return (
    <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
      <HeroImage
        src={post.heroImage}
        alt={post.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 pb-14 md:pb-16">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F26340] mb-5">
              {post.category}
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-3xl">
              {post.title}
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
              By the ITSco Team
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function ArticleBody({ article }: { article: readonly BlogBlock[] }) {
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        {article.map((block, i) => {
          if (block.type === 'h2') {
            return (
              <h2
                key={i}
                className="text-2xl md:text-3xl font-bold text-itsco-dark tracking-tight leading-snug mt-12 mb-4 first:mt-0"
              >
                {block.text}
              </h2>
            )
          }
          if (block.type === 'h3') {
            return (
              <h3
                key={i}
                className="text-lg md:text-xl font-semibold text-itsco-dark tracking-tight leading-snug mt-8 mb-3"
              >
                {block.text}
              </h3>
            )
          }
          if (block.type === 'ul') {
            return (
              <ul key={i} className="list-disc pl-6 marker:text-itsco-red space-y-2 mb-6">
                {block.items.map((item, j) => (
                  <li key={j} className="text-base md:text-lg text-itsco-body leading-relaxed pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            )
          }
          return (
            <p key={i} className="text-base md:text-lg text-itsco-body leading-[1.8] mb-5">
              {block.text}
            </p>
          )
        })}
      </div>
    </section>
  )
}

function TopicCTA({ category }: { category: string }) {
  const cta = TOPIC_CTA[category] ?? TOPIC_CTA['Business Insights']
  return (
    <section className="bg-itsco-blush">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 pb-16 md:pb-20">
        <div className="bg-itsco-card border border-[#EBEBEB] rounded-2xl p-8 md:p-10 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h2 className="text-2xl md:text-3xl font-bold text-itsco-dark tracking-tight mb-6">
            {cta.text}
          </h2>
          <CTAButton href={cta.href} label={cta.label} className="px-8 py-4 rounded-xl text-base" />
        </div>
      </div>
    </section>
  )
}

function RelatedPosts({ slug }: { slug: string }) {
  const related = relatedPosts(slug, 3)
  if (related.length === 0) return null
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-bold text-itsco-dark tracking-tight mb-10">
            More from the <span className="text-itsco-red">ITSco blog.</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
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
        </div>
      </div>
    </section>
  )
}

export default function BlogPost({
  post,
  article,
}: {
  post: BlogPostMeta
  article: readonly BlogBlock[]
}) {
  const jsonLd = blogJsonLd(post, article)
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Nav />
      <main>
        <Hero post={post} />
        <ArticleBody article={article} />
        <TopicCTA category={post.category} />
        <BookingCTA utmSuffix={`blog-${post.slug}-bottom`} />
        <RelatedPosts slug={post.slug} />
      </main>
      <Footer />
    </>
  )
}
