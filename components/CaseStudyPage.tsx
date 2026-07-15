import HeroImage from '@/components/HeroImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import CaseStudyCard from '@/components/CaseStudyCard'
import { FadeUp } from '@/components/ScrollAnimations'

// Shared template for individual case-study detail pages. Each PDF has its
// own section structure (some have "Overview/Challenge/Solution/Results",
// others have "Background/Deliverables/Results", EmergeOrtho has its own
// long-form structure). Rather than forcing a fixed skeleton, this template
// renders a hero + an array of narrative sections + optional callouts so
// each study can keep its own headings verbatim.

export interface CaseStudyBullet {
  // Plain bullet. Use **double-asterisks** to mark inline-bold spans.
  text: string
}

// A bullet that may contain an indented sub-list (e.g. the oil and bank PDFs
// list playbook categories under a parent "Creation of initial Ansible
// playbooks, including:" bullet). Use `string` for simple bullets.
export type CaseStudyBulletItem = string | { text: string; subItems: string[] }

export interface CaseStudyBoldBullet {
  // Bold lead-in (e.g. "Utilization unlocked.") followed by the rest of the
  // sentence. The `rest` field also supports inline **bold** spans.
  lead: string
  rest: string
}

// Section blocks — used when a single PDF section interleaves multiple
// paragraph/bullet groups under one heading (e.g. SRN's Results section, which
// runs paragraphs → bullets → paragraphs → bullets → paragraphs).
export type CaseStudyBlock =
  | { type: 'paragraphs'; items: string[] }
  | { type: 'bullets'; items: CaseStudyBulletItem[] }
  | { type: 'boldBullets'; items: CaseStudyBoldBullet[] }
  | { type: 'pullQuote'; quote: string; attribution?: string }

export interface CaseStudySection {
  heading: string
  // Flat layout — convenience for sections with a simple paragraphs+bullets
  // shape (EmergeOrtho's narrative sections). Rendered in canonical order:
  // paragraphs → bullets/boldBullets → trailingParagraphs → pullQuote.
  paragraphs?: string[]
  bullets?: CaseStudyBulletItem[]
  boldBullets?: CaseStudyBoldBullet[]
  trailingParagraphs?: string[]
  pullQuote?: { quote: string; attribution?: string }
  // Block-based layout — when present, overrides the flat fields and renders
  // blocks in array order. Use this for interleaved structures.
  blocks?: CaseStudyBlock[]
}

export interface CaseStudyRelated {
  category: string
  title: string
  description: string
  image: string
  imageAlt?: string
  href: string
}

export interface CaseStudyContent {
  meta: { title: string; description: string; canonical: string }
  industry: string
  clientLabel?: string
  hero: {
    eyebrow: string
    title: string
    subtitle?: string
    image: { src: string; alt: string }
    utmSuffix: string
  }
  highlights?: Array<{ value: string; label: string }>
  sections: CaseStudySection[]
  closingNote?: string
  related: CaseStudyRelated[]
  bookingUtm: string
}

// Parses **bold** spans in a plain string into React fragments. Used so PDF
// inline-bold (e.g. "an extra 40 hours each week") survives verbatim without
// requiring a markdown processor.
function renderInlineBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-itsco-dark">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

function Paragraphs({ items, top = false }: { items: string[]; top?: boolean }) {
  return (
    <div className={`${top ? '' : 'mt-6'} space-y-5`}>
      {items.map((p, pi) => (
        <p
          key={pi}
          className="text-base md:text-lg text-itsco-body leading-relaxed"
        >
          {renderInlineBold(p)}
        </p>
      ))}
    </div>
  )
}

function Bullets({
  items,
  top = false,
}: {
  items: CaseStudyBulletItem[]
  top?: boolean
}) {
  return (
    <ul className={`${top ? '' : 'mt-6'} space-y-4`}>
      {items.map((b, bi) => {
        const text = typeof b === 'string' ? b : b.text
        const subItems = typeof b === 'string' ? null : b.subItems
        return (
          <li key={bi} className="flex gap-3.5 items-start">
            <span
              className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-itsco-red flex-shrink-0"
              aria-hidden
            />
            <div className="flex-1">
              <span className="text-base md:text-lg text-itsco-body leading-relaxed">
                {renderInlineBold(text)}
              </span>
              {subItems && subItems.length > 0 && (
                <ul className="mt-3 ml-1 space-y-2">
                  {subItems.map((s, si) => (
                    <li key={si} className="flex gap-3 items-start">
                      <span
                        className="mt-2.5 inline-block w-1 h-1 rounded-full bg-itsco-red/70 flex-shrink-0"
                        aria-hidden
                      />
                      <span className="text-base text-itsco-body leading-relaxed flex-1">
                        {renderInlineBold(s)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function BoldBullets({
  items,
  top = false,
}: {
  items: CaseStudyBoldBullet[]
  top?: boolean
}) {
  return (
    <ul className={`${top ? '' : 'mt-6'} space-y-5`}>
      {items.map((b, bi) => (
        <li key={bi} className="flex gap-3.5 items-start">
          <span
            className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-itsco-red flex-shrink-0"
            aria-hidden
          />
          <span className="text-base md:text-lg text-itsco-body leading-relaxed flex-1">
            <strong className="font-bold text-itsco-dark">{b.lead}</strong>{' '}
            {renderInlineBold(b.rest)}
          </span>
        </li>
      ))}
    </ul>
  )
}

function PullQuote({
  quote,
  attribution,
  top = false,
}: {
  quote: string
  attribution?: string
  top?: boolean
}) {
  return (
    <figure className={`${top ? '' : 'mt-8'} border-l-4 border-itsco-red pl-6 py-2`}>
      <blockquote className="text-lg md:text-xl text-itsco-dark italic leading-relaxed">
        “{quote}”
      </blockquote>
      {attribution && (
        <figcaption className="text-sm text-[#555] mt-3 not-italic">
          — {attribution}
        </figcaption>
      )}
    </figure>
  )
}

function renderBlocks(blocks: CaseStudyBlock[]) {
  return blocks.map((b, i) => {
    const top = i === 0
    switch (b.type) {
      case 'paragraphs':
        return <Paragraphs key={i} items={b.items} top={top} />
      case 'bullets':
        return <Bullets key={i} items={b.items} top={top} />
      case 'boldBullets':
        return <BoldBullets key={i} items={b.items} top={top} />
      case 'pullQuote':
        return (
          <PullQuote key={i} quote={b.quote} attribution={b.attribution} top={top} />
        )
    }
  })
}

export default function CaseStudyPage({ content }: { content: CaseStudyContent }) {
  const {
    meta,
    industry,
    clientLabel,
    hero,
    highlights,
    sections,
    closingNote,
    related,
    bookingUtm,
  } = content

  return (
    <>
      <Nav variant="dark" />
      <main>
        {/* HERO — full-bleed dark photographic */}
        <section
          className="relative bg-itsco-dark min-h-[80vh] flex flex-col overflow-hidden"
          style={{
            ['--color-itsco-cta' as string]: '#CA3C27',
            ['--color-itsco-cta-hover' as string]: '#B4311E',
          }}
        >
          <div className="absolute inset-0">
            <HeroImage
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
          </div>

          <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-44">
            <div className="max-w-3xl">
              <FadeUp>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F26340] mb-6">
                  {hero.eyebrow}
                </p>
              </FadeUp>
              <FadeUp delay={100}>
                <h1 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6 break-words">
                  {hero.title}
                </h1>
              </FadeUp>
              {hero.subtitle && (
                <FadeUp delay={200}>
                  <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl italic">
                    {hero.subtitle}
                  </p>
                </FadeUp>
              )}
              <FadeUp delay={300}>
                <div className="flex flex-wrap items-center gap-6">
                  <CTAButton
                    label="Book a Free Consultation"
                    utmSuffix={hero.utmSuffix}
                    className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
                  />
                  {clientLabel && (
                    <div className="text-xs text-white/60">
                      <span className="font-semibold uppercase tracking-[0.12em] text-white/40 block mb-1">
                        Client
                      </span>
                      <span className="text-white/85">{clientLabel}</span>
                    </div>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS — at-a-glance metrics strip (optional) */}
        {highlights && highlights.length > 0 && (
          <section className="bg-itsco-off-white border-b border-[#EBEBEB]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {highlights.map((h, i) => (
                  <FadeUp key={i} delay={i * 75}>
                    <div>
                      <p className="text-3xl md:text-4xl font-extrabold text-itsco-dark tracking-tight leading-none">
                        {h.value}
                      </p>
                      <p className="text-xs text-[#555] mt-3 leading-snug uppercase tracking-[0.08em] font-semibold">
                        {h.label}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* NARRATIVE SECTIONS */}
        <section className="bg-itsco-paper">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 md:py-28">
            {sections.map((s, i) => (
              <FadeUp key={i}>
                <div
                  className={`${i > 0 ? 'mt-16 md:mt-20' : ''}`}
                >
                  {/* Section heading with red accent block */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block w-1.5 h-7 bg-itsco-red rounded-sm" />
                    <h2 className="text-2xl md:text-3xl font-extrabold text-itsco-dark tracking-tight">
                      {s.heading}
                    </h2>
                  </div>

                  {s.blocks ? (
                    renderBlocks(s.blocks)
                  ) : (
                    <>
                      {s.paragraphs && s.paragraphs.length > 0 && (
                        <Paragraphs items={s.paragraphs} top />
                      )}

                      {s.bullets && s.bullets.length > 0 && (
                        <Bullets items={s.bullets} />
                      )}

                      {s.boldBullets && s.boldBullets.length > 0 && (
                        <BoldBullets items={s.boldBullets} />
                      )}

                      {s.trailingParagraphs && s.trailingParagraphs.length > 0 && (
                        <Paragraphs items={s.trailingParagraphs} />
                      )}
                    </>
                  )}

                  {s.pullQuote && !s.blocks && (
                    <figure className="mt-8 border-l-4 border-itsco-red pl-6 py-2">
                      <blockquote className="text-lg md:text-xl text-itsco-dark italic leading-relaxed">
                        “{s.pullQuote.quote}”
                      </blockquote>
                      {s.pullQuote.attribution && (
                        <figcaption className="text-sm text-[#555] mt-3 not-italic">
                          — {s.pullQuote.attribution}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </FadeUp>
            ))}

            {closingNote && (
              <FadeUp>
                <p className="mt-16 text-sm text-[#777] italic leading-relaxed border-t border-[#EBEBEB] pt-8">
                  {closingNote}
                </p>
              </FadeUp>
            )}
          </div>
        </section>

        {/* RELATED CASE STUDIES */}
        {related && related.length > 0 && (
          <section className="bg-itsco-off-white border-t border-[#EBEBEB]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24">
              <FadeUp>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block w-1.5 h-7 bg-itsco-red rounded-sm" />
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red">
                    More from our clients
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-itsco-dark tracking-tight mb-12 max-w-2xl">
                  Explore more case studies
                </h2>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r, i) => (
                  <FadeUp key={r.href} delay={i * 75}>
                    <CaseStudyCard
                      category={r.category}
                      title={r.title}
                      description={r.description}
                      image={r.image}
                      imageAlt={r.imageAlt}
                      href={r.href}
                    />
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BOOKING CTA */}
        <BookingCTA utmSuffix={bookingUtm} />
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.itsco.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Case Studies',
                item: 'https://www.itsco.com/case-studies/',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: hero.title,
                item: meta.canonical,
              },
            ],
          }),
        }}
      />
    </>
  )
}

// Re-export meta type for page wrappers
export type { CaseStudyContent as CaseStudyContentType }
