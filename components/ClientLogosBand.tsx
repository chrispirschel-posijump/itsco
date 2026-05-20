import Image from 'next/image'
import { FadeUp } from '@/components/ScrollAnimations'

const CLIENTS = [
  { src: '/images/clients/EmergeOrtho_LogoVert_MD_1_.png', alt: 'EmergeOrtho' },
  { src: '/images/clients/SRN%20logo.png', alt: 'Southern Rehabilitation Network' },
  { src: '/images/clients/cbre-group-logo-11530967007p4cuy93fps_1.png', alt: 'CBRE' },
  { src: '/images/clients/phononic-logo.svg', alt: 'Phononic' },
  { src: '/images/clients/cambrex_logo.png', alt: 'Cambrex' },
  { src: '/images/clients/NCACC_screen_seal_color.png', alt: 'NC Association of County Commissioners' },
  { src: '/images/clients/forty540logo.png', alt: 'Forty540' },
]

interface ClientLogosBandProps {
  variant?: 'inline' | 'section'
  label?: string
}

export default function ClientLogosBand({
  variant = 'inline',
  label = 'Trusted by businesses across NC, SC & VA',
}: ClientLogosBandProps) {
  const content = (
    <FadeUp>
      <div className={variant === 'inline' ? 'mt-20 pt-12 border-t border-[#EBEBEB]' : ''}>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#555] mb-8 text-center">
          {label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap">
          {CLIENTS.map((c) => (
            <div
              key={c.alt}
              className="relative h-16 w-52 grayscale opacity-70 mix-blend-multiply hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-300"
            >
              <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="208px" />
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  )

  if (variant === 'section') {
    return (
      <section className="bg-itsco-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">{content}</div>
      </section>
    )
  }
  return content
}
