import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingCTA from '@/components/BookingCTA'
import ServiceCard from '@/components/ServiceCard'
import TestimonialBlock from '@/components/TestimonialBlock'
import CTAButton from '@/components/CTAButton'

// ── Stats + Client logos (shared with demo) ──────────────────────────────────

const STATS = [
  { number: '28+',   label: 'Years in business' },
  { number: '500+',  label: 'Businesses supported' },
  { number: '< 1hr', label: 'Avg. helpdesk response' },
  { number: '99.9%', label: 'Uptime for managed clients' },
]

const CLIENTS = [
  { src: '/images/clients/emergeortho.png',           alt: 'EmergeOrtho' },
  { src: '/images/clients/SRN-vertical-300x300-1.jpg', alt: 'Southern Rehabilitation Network' },
  { src: '/images/clients/CBRE-Group-logo.jpg',        alt: 'CBRE' },
  { src: '/images/clients/Phononic_Logo_RGB-scaled.jpg', alt: 'Phononic' },
  { src: '/images/clients/cambrex-vector-logo.jpg',    alt: 'Cambrex' },
  { src: '/images/clients/NCACC_screen_seal_color.png', alt: 'NC Association of County Commissioners' },
  { src: '/images/clients/2021-LOGO-Forty540.jpg',     alt: 'Forty540' },
]

function ClientLogos() {
  return (
    <section className="bg-itsco-off-white border-b border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#BBBBBB] mb-8 text-center">
          Trusted by businesses across NC, SC &amp; VA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap">
          {CLIENTS.map((c) => (
            <div key={c.alt} className="relative h-10 w-32 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-300">
              <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="112px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Intro section ────────────────────────────────────────────────────────────

function IntroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
            IT that actually works for your business.
          </h2>
          <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-4">
            Most businesses don't have an IT problem. They have an alignment problem. Systems were built reactively. Vendors were added without a plan. Now the infrastructure meant to drive growth is holding it back.
          </p>
          <p className="text-base md:text-lg text-itsco-body leading-relaxed">
            Our managed IT services give your organization a single, accountable technology partner. We bring the engineering depth for complex environments and the business sense to make every dollar count.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Capabilities section with image + card grid ──────────────────────────────

function CapabilitiesSection() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
            What's Included
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight">
            A complete managed IT program. Not upsells.
          </h2>
        </div>

        {/* Supporting Image 1 */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg"
            alt="ITSco team collaborating on managed IT solutions"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-itsco-dark/50 to-transparent" />
        </div>

        {/* 3-col ServiceCard grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ServiceCard
            slug="managed-it-services"
            title="24/7 Monitoring & Helpdesk"
            description="Proactive monitoring catches issues before they become outages. When something does come up, our helpdesk resolves it fast."
            href="/managed-it-services/"
          />
          <ServiceCard
            slug="cybersecurity"
            title="Cybersecurity & Compliance"
            description="SOC monitoring, SIEM, vulnerability management, and compliance support. All managed under one roof."
            href="/cybersecurity/"
          />
          <ServiceCard
            slug="cloud-services"
            title="Cloud Infrastructure"
            description="Azure, AWS, and hybrid cloud environments designed, migrated, and managed to grow with your business."
            href="/cloud-services/"
          />
          <ServiceCard
            slug="backup-disaster-recovery"
            title="Backup & Disaster Recovery"
            description="Automated backups, tested recovery plans, and business continuity strategies that protect against the worst-case scenario."
            href="/backup-disaster-recovery/"
          />
          <ServiceCard
            slug="network-engineering"
            title="Network Engineering"
            description="Enterprise-grade network design, optimization, and ongoing management for reliable, high-performance connectivity."
            href="/network-engineering/"
          />
          <ServiceCard
            slug="vcio-vcto-vciso-services"
            title="vCIO & Strategic Advisory"
            description="Executive-level IT leadership that aligns your technology roadmap with your business goals. No full-time salary required."
            href="/vcio-vcto-vciso-services/"
          />
        </div>
      </div>
    </section>
  )
}

// ── Mid-page CTA ─────────────────────────────────────────────────────────────

function MidCTA() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
            Ready to simplify your IT?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            Get a free consultation with our engineering team.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <CTAButton
            utmSuffix="page-a-mid"
            label="Book a Free Consultation"
            className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}

// ── Related services ─────────────────────────────────────────────────────────

function RelatedServices() {
  return (
    <section className="bg-itsco-off-white border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
            Related Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight">
            Explore more from ITSco.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ServiceCard
            slug="microsoft-solutions"
            title="Microsoft Solutions"
            description="M365, Azure, Teams, SharePoint, and Copilot — deployed and managed by certified Microsoft specialists."
            href="/microsoft-solutions/"
          />
          <ServiceCard
            slug="managed-network-services"
            title="Managed Network Services"
            description="Full-scope network monitoring, management, and performance tuning with flexible outsourcing options."
            href="/managed-network-services/"
          />
          <ServiceCard
            slug="it-assessments-strategies"
            title="IT Assessments & Strategy"
            description="IT audits, cybersecurity assessments, and strategic roadmaps aligned with your growth plans."
            href="/it-assessments-strategies/"
          />
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PageA() {
  return (
    <>
      <Nav />

      {/* 1. Hero — full-bleed split with stats */}
      <section className="relative bg-itsco-dark min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
          <Image src="/images/hero/services/pexels-olly-3763998.jpg" alt="Business professional working with ITSco managed IT services" fill priority className="object-cover object-center" sizes="52vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-itsco-dark via-itsco-dark/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-itsco-dark/60 via-transparent to-transparent" />
        </div>
        <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36">
          <div className="lg:max-w-[50%]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-6">Managed IT Services</p>
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.0] tracking-tight mb-8">Your IT. Handled.</h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-[38ch] mb-10">Stop chasing IT problems. We manage your infrastructure, security, and cloud so your team stays focused on the work that grows your business.</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton label="Book a Free Consultation" utmSuffix="page-a" className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]" />
              <CTAButton label="Discover the ROI" href="/maximize-roi-with-managed-it-services/" variant="secondary" className="px-8 py-4 rounded-xl text-base" />
            </div>
          </div>
          <div className="mt-12 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_32px_80px_rgba(0,0,0,0.6)] lg:hidden">
            <Image src="/images/hero/services/pexels-vlada-karpovich-7433840.jpg" alt="ITSco managed IT services team" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. Intro — full-width outcome framing */}
      <IntroSection />

      {/* 3. Capabilities — supporting image + 3-col cards */}
      <CapabilitiesSection />

      {/* 4. Mid-page CTA */}
      <MidCTA />

      {/* 5. Testimonial — light */}
      <TestimonialBlock
        quote="ITSco transformed our network infrastructure across 14 locations. Their team operates like an extension of ours — responsive, proactive, and always focused on business outcomes, not just tickets."
        name="Sarah Mitchell"
        title="COO"
        company="EmergeOrtho"
        variant="light"
      />

      {/* 6. Client logos */}
      <ClientLogos />

      {/* 7. Related services */}
      <RelatedServices />

      {/* 8. Location */}
      <section className="bg-white border-t border-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                Our Office
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-itsco-dark leading-[1.15] tracking-tight mb-6">
                Based in Durham. Serving the Southeast.
              </h2>
              <p className="text-base md:text-lg text-itsco-body leading-relaxed mb-6">
                We work with businesses across North Carolina, South Carolina, and Virginia. Our engineering team is headquartered in Durham, minutes from Research Triangle Park.
              </p>
              <address className="not-italic text-sm text-itsco-body leading-relaxed space-y-1">
                <p className="font-semibold text-itsco-dark">ITSco</p>
                <p>4601 Creekstone Drive, Suite 102</p>
                <p>Durham, NC 27703</p>
                <p className="mt-3 text-xs text-[#888]">Support: (919) 674-0044</p>
                <p className="text-xs text-[#888]">Sales: (919) 249-9556</p>
              </address>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <iframe
                title="ITSco office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.123!2d-78.9428!3d35.8716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace574b1a2c4e3%3A0x8f8a5e7a3b8b8b8b!2s4601%20Creekstone%20Dr%20%23102%2C%20Durham%2C%20NC%2027703!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. BookingCTA with supporting image */}
      <BookingCTA
        utmSuffix="page-a-bottom"
        backgroundImage="/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
      />

      <Footer />
    </>
  )
}
