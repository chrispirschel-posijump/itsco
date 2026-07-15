import type { Metadata } from 'next'
import HeroImage from '@/components/HeroImage'
import Script from 'next/script'
import { Phone, Printer, MapPin, Clock, Check } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import ContactForm from '@/components/ContactForm'
import ClientLogosBand from '@/components/ClientLogosBand'
import BookingCTA from '@/components/BookingCTA'
import TestimonialsRotator from '@/components/TestimonialsRotator'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import { TESTIMONIALS } from '@/lib/testimonials'
import { FadeUp } from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'Contact ITSco | Book a Free IT Consultation',
  description:
    'Get in touch with ITSco — book a free 30-minute consultation, call our team, or send us a message. Managed IT and cybersecurity for businesses across NC, SC, and VA.',
  alternates: { canonical: 'https://www.itsco.com/contact-us/' },
}

const CALENDLY_URL =
  'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f5f3ea&primary_color=ca3c27&utm_source=website&utm_medium=embed&utm_campaign=contact-us'

const SESSION_POINTS = [
  'Unpack the current challenges affecting your team and systems',
  'Identify unseen vulnerabilities, inefficiencies, or roadblocks',
  'Receive a project charter on any needed assessment',
  'High-level recommendations to improve performance and reduce operational costs',
  'Explore ways to automate business processes with data and AI to speed up your revenue cycle and better serve your customers',
  'Review how automation and AI could simplify complex or manual processes',
  'Strengthen your security posture and reduce organizational risk',
]

const CONTACT_METHODS = [
  { icon: Phone, label: 'Customer Support', value: '(919) 674-0044', href: 'tel:+19196740044' },
  { icon: Phone, label: 'Sales Inquiry', value: '(919) 249-9556', href: 'tel:+19192499556' },
  { icon: Printer, label: 'Fax', value: '(919) 674-0045', href: null },
  {
    icon: MapPin,
    label: 'Durham Office',
    value: '4601 Creekstone Drive, Suite 102, Durham, NC 27703',
    href: 'https://maps.app.goo.gl/2CwvVh9KFAzDy3wt6',
  },
  {
    icon: MapPin,
    label: 'Raleigh Office',
    value: '8480 Honeycutt Rd #200-V700, Raleigh, NC 27615',
    href: 'https://www.google.com/maps?q=8480+Honeycutt+Rd+Raleigh+NC+27615',
  },
  { icon: Clock, label: 'Hours', value: 'Monday–Friday, 9:00 AM – 5:00 PM EST', href: null },
]

const MAP_EMBED =
  'https://www.google.com/maps?q=4601+Creekstone+Drive+Suite+102+Durham+NC+27703&output=embed'

function Hero() {
  return (
    <section className="relative bg-itsco-paper min-h-screen flex items-center overflow-hidden">
      <BackgroundOrbs variant="light" />

      <div className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block">
        <HeroImage
          src="/images/hero/local/itsco office.jpg"
          alt="ITSco's office in Durham, North Carolina"
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
              Get In Touch
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] break-words font-extrabold text-itsco-dark leading-[1.05] tracking-tight mb-8">
              Let&apos;s talk about{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #6B1F12 0%, #CA3C27 55%, #F26340 100%)' }}
              >
                your IT.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-itsco-body leading-relaxed mb-10 max-w-xl">
              Book a free 30-minute consultation, give us a call, or send a message — and discover
              how ITSco can turn IT into a business advantage.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                href="#book"
                className="px-8 py-4 rounded-xl text-base"
              />
              <CTAButton
                label="Send a message"
                href="#message"
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

function CalendlySection() {
  return (
    <section
      id="book"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — value framing */}
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Free 30-Minute Consultation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-5">
              Ready to turn IT into a{' '}
              <span className="text-itsco-red">business advantage?</span>
            </h2>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-6">
              ITSco&apos;s free consultation is designed to assess your current IT environment and
              discuss ways it can support your goals for growth, efficiency, and security.
            </p>
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-itsco-dark mb-4">
              In this session, you will:
            </p>
            <ul className="space-y-3">
              {SESSION_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-itsco-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-itsco-red" />
                  </div>
                  <span className="text-base text-itsco-body leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Right — Calendly inline embed (sits directly on the page) */}
          <FadeUp delay={120} className="lg:col-span-7">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </FadeUp>
        </div>
      </div>
      {/* Warm the connections to Calendly so the embed renders sooner */}
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </section>
  )
}

function FormSection() {
  return (
    <section
      id="message"
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-paper) 0%, var(--color-itsco-blush) 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeUp>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Send a Message
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              Tell us how we can{' '}
              <span className="text-itsco-red">help.</span>
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <ContactForm />
        </FadeUp>
      </div>
    </section>
  )
}

function ContactDetails() {
  return (
    <section className="bg-itsco-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Contact details */}
          <FadeUp className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              Other Ways to Reach Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-8">
              Call, fax, or visit.
            </h2>
            <ul className="space-y-5">
              {CONTACT_METHODS.map((m) => {
                const Icon = m.icon
                return (
                  <li key={m.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-itsco-dark flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-itsco-body/70 mb-1">
                        {m.label}
                      </p>
                      {m.href ? (
                        <a
                          href={m.href}
                          target={m.href.startsWith('http') ? '_blank' : undefined}
                          rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-base font-semibold text-itsco-dark hover:text-itsco-red transition-colors duration-200"
                        >
                          {m.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-itsco-dark">{m.value}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </FadeUp>

          {/* Google map */}
          <FadeUp delay={120} className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#EBEBEB]">
              <iframe
                src={MAP_EMBED}
                title="Google Maps — ITSco, 4601 Creekstone Drive, Suite 102, Durham, NC 27703"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section
      style={{ background: 'linear-gradient(180deg, var(--color-itsco-blush) 0%, var(--color-itsco-paper) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
              In Their Words
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
              What our clients <span className="text-itsco-red">are saying.</span>
            </h2>
          </div>
        </FadeUp>
        <TestimonialsRotator testimonials={TESTIMONIALS} visible={3} intervalMs={9000} />
      </div>
    </section>
  )
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://www.itsco.com/contact-us/',
  name: 'Contact ITSco',
  description:
    'Book a free 30-minute consultation, call our team, or send a message. Managed IT and cybersecurity for businesses across NC, SC, and VA.',
  about: {
    '@type': 'LocalBusiness',
    name: 'ITSco',
    url: 'https://www.itsco.com/',
    telephone: '+1-919-674-0044',
    email: 'info@itsco.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4601 Creekstone Drive, Suite 102',
      addressLocality: 'Durham',
      addressRegion: 'NC',
      postalCode: '27703',
      addressCountry: 'US',
    },
    areaServed: ['North Carolina', 'South Carolina', 'Virginia'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+1-919-674-0044',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+1-919-249-9556',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
  },
}

const contactBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.itsco.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.itsco.com/contact-us/' },
  ],
}

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
      <Nav variant="light" />
      <main>
        <Hero />
        <CalendlySection />
        <ClientLogosBand variant="section" />
        <FormSection />
        <ContactDetails />
        <Testimonials />
        <BookingCTA utmSuffix="contact-us-bottom" />
      </main>
      <Footer />
    </>
  )
}
