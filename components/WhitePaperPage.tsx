import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp, StaggerChildren } from '@/components/ScrollAnimations'
import { Download, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Shared template for white paper detail pages.
//
// Layout: light hero (eyebrow, category tag, title, optional subtitle pull-
// quote, 2-3 abstract paragraphs, dual CTA — download PDF + book consultation)
// → "What's inside" key-takeaways grid → dark download-CTA band → related
// white papers → related services → BookingCTA → Footer.
//
// The PDF download is the conversion event; this component drives the eye
// to it from the hero and again in the dark band below the takeaways.

export interface WhitePaperRelated {
  slug: string
  title: string
  category: string
  description: string
  href: string
}

export interface WhitePaperRelatedService {
  slug: string
  title: string
  description: string
  href: string
}

export interface WhitePaperContent {
  meta: { title: string; description: string; canonical: string }
  category: string
  eyebrow: string
  title: string
  subtitle?: string
  abstract: string[]
  takeaways: string[]
  pdfUrl: string
  pdfFilename: string
  authors?: string
  related: WhitePaperRelated[]
  relatedServices?: WhitePaperRelatedService[]
  bookingUtm: string
  downloadUtm: string
}

function Hero({ content }: { content: WhitePaperContent }) {
  return (
    <section className="relative bg-itsco-paper overflow-hidden">
      <BackgroundOrbs variant="light" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 pt-44 pb-20 md:pt-52 md:pb-24">
        <FadeUp>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CA3C27]/10 text-[#CA3C27] text-xs font-bold uppercase tracking-[0.12em]">
              <FileText size={14} />
              White Paper
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#555]">
              {content.category}
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#111111] leading-[1.08] tracking-tight mb-8 max-w-4xl">
            {content.title}
          </h1>
        </FadeUp>

        {content.subtitle && (
          <FadeUp delay={150}>
            <blockquote className="border-l-4 border-[#CA3C27] pl-6 py-1 mb-10 max-w-3xl">
              <p className="text-xl md:text-2xl text-[#111111] italic leading-relaxed">
                “{content.subtitle}”
              </p>
              {content.authors && (
                <footer className="text-sm text-[#555] mt-3 not-italic">— {content.authors}</footer>
              )}
            </blockquote>
          </FadeUp>
        )}

        <FadeUp delay={200}>
          <div className="space-y-4 max-w-3xl mb-10">
            {content.abstract.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-[#404040] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={content.pdfUrl}
              download={content.pdfFilename}
              data-utm={content.downloadUtm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#CA3C27] text-white text-base font-semibold hover:bg-[#B4311E] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)] transition-[background-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27] active:scale-[0.98]"
            >
              <Download size={18} />
              Download the white paper
            </a>
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix={content.bookingUtm + '-hero'}
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base"
            />
          </div>
          <p className="text-xs text-[#555] mt-4">Free download · PDF</p>
        </FadeUp>
      </div>
    </section>
  )
}

function TakeawaysSection({ takeaways }: { takeaways: string[] }) {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 md:py-24">
        <FadeUp>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              What&apos;s Inside
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Key takeaways from{' '}
              <span className="text-[#CA3C27]">the white paper.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={75} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {takeaways.map((t, i) => (
            <div
              key={i}
              className="flex gap-4 bg-itsco-card border border-[#EBEBEB] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#CA3C27]/10 text-[#CA3C27] text-sm font-extrabold flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-base text-[#404040] leading-relaxed flex-1">{t}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function DownloadBand({ content }: { content: WhitePaperContent }) {
  return (
    <section
      className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]"
      style={{
        ['--color-itsco-cta' as string]: '#CA3C27',
        ['--color-itsco-cta-hover' as string]: '#B4311E',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 md:py-24 text-center">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
            Read the full paper
          </p>
        </FadeUp>
        <FadeUp delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto">
            {content.title}
          </h2>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
            Download the full white paper as a PDF — free, no gate, no email required.
          </p>
        </FadeUp>
        <FadeUp delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={content.pdfUrl}
              download={content.pdfFilename}
              data-utm={content.downloadUtm + '-band'}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#CA3C27] text-white text-base font-semibold hover:bg-[#B4311E] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)] transition-[background-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27] active:scale-[0.98]"
            >
              <Download size={18} />
              Download the PDF
            </a>
            <CTAButton
              label="Book a Free Consultation"
              utmSuffix={content.bookingUtm + '-mid'}
              variant="secondary"
              className="px-8 py-4 rounded-xl text-base !border-white/40 !text-white hover:!bg-white/10"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function RelatedPapersSection({ related }: { related: WhitePaperRelated[] }) {
  if (!related || related.length === 0) return null
  return (
    <section className="bg-itsco-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24">
        <FadeUp>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Related Reading
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              More from <span className="text-[#CA3C27]">the ITSco library.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren stagger={60} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={r.href}
              className="group flex flex-col h-full bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:scale-[0.99]"
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText size={14} className="text-[#CA3C27]" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#CA3C27]">
                  {r.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-3 tracking-tight group-hover:text-[#CA3C27] transition-[color] duration-200">
                {r.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1 mb-5">{r.description}</p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#404040] uppercase tracking-[0.08em] group-hover:text-[#CA3C27] transition-[color] duration-200">
                Read more
                <ArrowRight
                  size={12}
                  className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

function RelatedServicesSection({
  relatedServices,
}: {
  relatedServices?: WhitePaperRelatedService[]
}) {
  if (!relatedServices || relatedServices.length === 0) return null
  return (
    <section className="bg-itsco-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24">
        <FadeUp>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Apply the Thinking
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              ITSco services that{' '}
              <span className="text-[#CA3C27]">put this paper to work.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedServices.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group flex flex-col h-full bg-itsco-card border border-[#EBEBEB] rounded-2xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:scale-[0.99]"
            >
              <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-3 tracking-tight group-hover:text-[#CA3C27] transition-[color] duration-200">
                {s.title}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1 mb-5">{s.description}</p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#404040] uppercase tracking-[0.08em] group-hover:text-[#CA3C27] transition-[color] duration-200">
                Learn more
                <ArrowRight
                  size={12}
                  className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WhitePaperPage({ content }: { content: WhitePaperContent }) {
  return (
    <>
      <Nav variant="light" />
      <main>
        <Hero content={content} />
        <TakeawaysSection takeaways={content.takeaways} />
        <DownloadBand content={content} />
        <RelatedPapersSection related={content.related} />
        <RelatedServicesSection relatedServices={content.relatedServices} />
        <BookingCTA utmSuffix={content.bookingUtm + '-bottom'} />
      </main>
      <Footer />

      {/* JSON-LD: Article + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: content.title,
              description: content.meta.description,
              publisher: { '@type': 'Organization', name: 'ITSco' },
              url: content.meta.canonical,
              ...(content.authors && {
                author: { '@type': 'Person', name: content.authors },
              }),
            },
            {
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
                  name: 'White Papers',
                  item: 'https://www.itsco.com/white-papers/',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: content.title,
                  item: content.meta.canonical,
                },
              ],
            },
          ]),
        }}
      />
    </>
  )
}

