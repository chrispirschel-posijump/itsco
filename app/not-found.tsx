import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { FadeUp } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'Page Not Found | ITSco',
}

export default function NotFound() {
  return (
    <>
      <Nav variant="light" />
      <main>
        <section className="relative bg-itsco-paper min-h-screen flex flex-col overflow-hidden">
          <BackgroundOrbs variant="light" />
          <div className="relative flex-1 flex items-center">
            <div className="w-full max-w-3xl mx-auto px-6 lg:px-12 py-32 pt-44 text-center">
              <FadeUp>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">
                  404 — Page Not Found
                </p>
              </FadeUp>
              <FadeUp delay={100}>
                <h1 className="text-5xl md:text-6xl font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
                  This page doesn&apos;t exist{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
                  >
                    yet.
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="text-lg md:text-xl text-itsco-body leading-relaxed max-w-xl mx-auto mb-10">
                  Sorry — the page you&apos;re looking for hasn&apos;t been built yet, or may have
                  moved. Let&apos;s get you back on track.
                </p>
              </FadeUp>
              <FadeUp delay={300}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <CTAButton label="Back to Home" href="/" className="px-8 py-4 rounded-xl text-base" />
                  <CTAButton
                    label="Book a Free Consultation"
                    utmSuffix="404"
                    variant="secondary"
                    className="px-8 py-4 rounded-xl text-base"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
