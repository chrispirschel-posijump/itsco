import HeroImage from '@/components/HeroImage'
import CTAButton from '@/components/CTAButton'
import { FadeUp } from '@/components/ScrollAnimations'

export interface FullBleedHeroProps {
  eyebrow: string
  headlineLead: string
  headlineAccent: string
  body: string
  utmSuffix: string
  image: { src: string; alt: string }
  secondary?: { label: string; href: string }
}

// Dark, full-bleed photographic hero shared by service sub-pages (and any
// page that opts in). Sets --color-itsco-cta so the primary CTA renders red
// against the dark image. Pair with <Nav variant="dark" />.
export default function FullBleedHero({
  eyebrow,
  headlineLead,
  headlineAccent,
  body,
  utmSuffix,
  image,
  secondary = { label: "See what's included", href: '#capabilities' },
}: FullBleedHeroProps) {
  return (
    <section
      className="relative bg-itsco-dark min-h-screen flex flex-col overflow-hidden"
      style={{
        ['--color-itsco-cta' as string]: '#CA3C27',
        ['--color-itsco-cta-hover' as string]: '#B4311E',
      }}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <HeroImage
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered readability overlays — left-weighted for text + bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
      </div>

      <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-36 pt-48">
        <div className="max-w-2xl">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F26340] mb-6">
              {eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold text-white leading-[1.05] tracking-tight mb-8 break-words">
              {headlineLead}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #F26340 0%, #FF9E80 100%)' }}
              >
                {headlineAccent}
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-xl">{body}</p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Book a Free Consultation"
                utmSuffix={utmSuffix}
                className="px-8 py-4 rounded-xl text-base transition-[background-color,box-shadow] hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
              <CTAButton
                label={secondary.label}
                href={secondary.href}
                variant="secondary"
                className="px-8 py-4 rounded-xl text-base !border-white/40 !text-white hover:!bg-white/10"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
