import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import { FadeUp } from '@/components/ScrollAnimations'

// Shared layout for legal/policy pages (privacy policy, terms of use).
// Single-column reading layout — light hero, generous typography, ordered
// sections, contact block, and a soft bottom CTA. Designed to feel like a
// professional legal document while staying on-brand.

export interface LegalSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface LegalContent {
  meta: { title: string; description: string; canonical: string }
  eyebrow: string
  title: string
  intro?: string
  lastUpdated: string
  sections: LegalSection[]
  contact?: {
    heading: string
    paragraphs: string[]
  }
  bookingUtm: string
}

export default function LegalPage({ content }: { content: LegalContent }) {
  const { eyebrow, title, intro, lastUpdated, sections, contact, bookingUtm } = content
  return (
    <>
      <Nav variant="light" />
      <main>
        {/* Hero — light, focused */}
        <section className="relative bg-itsco-paper overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-44 pb-16 md:pt-52 md:pb-20">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
                {eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-itsco-dark leading-[1.08] tracking-tight mb-6">
                {title}
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-sm text-[#555] mb-8">Last updated: {lastUpdated}</p>
            </FadeUp>
            {intro && (
              <FadeUp delay={300}>
                <p className="text-lg text-itsco-body leading-relaxed max-w-3xl">{intro}</p>
              </FadeUp>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="bg-itsco-paper">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
            <article className="space-y-12">
              {sections.map((s, i) => (
                <FadeUp key={i}>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-block w-1.5 h-6 bg-itsco-red rounded-sm" />
                      <h2 className="text-xl md:text-2xl font-extrabold text-itsco-dark tracking-tight">
                        {s.heading}
                      </h2>
                    </div>

                    {s.paragraphs && s.paragraphs.length > 0 && (
                      <div className="space-y-4">
                        {s.paragraphs.map((p, pi) => (
                          <p
                            key={pi}
                            className="text-base text-itsco-body leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {s.bullets && s.bullets.length > 0 && (
                      <ul className="mt-4 space-y-3">
                        {s.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-3 items-start">
                            <span
                              className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-itsco-red flex-shrink-0"
                              aria-hidden
                            />
                            <span className="text-base text-itsco-body leading-relaxed flex-1">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </FadeUp>
              ))}

              {contact && (
                <FadeUp>
                  <div className="border-t border-[#EBEBEB] pt-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-block w-1.5 h-6 bg-itsco-red rounded-sm" />
                      <h2 className="text-xl md:text-2xl font-extrabold text-itsco-dark tracking-tight">
                        {contact.heading}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {contact.paragraphs.map((p, pi) => (
                        <p
                          key={pi}
                          className="text-base text-itsco-body leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )}
            </article>
          </div>
        </section>

        <BookingCTA utmSuffix={bookingUtm} />
      </main>
      <Footer />
    </>
  )
}
