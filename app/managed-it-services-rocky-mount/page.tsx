import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Rocky Mount',
  slug: 'rocky-mount',
  region: 'eastern North Carolina',
  heroImage: {
    src: '/images/supporting/services/pexels-mart-production-7255723.jpg',
    alt: 'IT professional supporting a Rocky Mount business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-divinetechygirl-1181305.jpg',
    alt: 'ITSco team collaborating with a client',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-theo-decker-5946207.jpg',
    alt: 'Cybersecurity monitoring for a Rocky Mount business',
  },
})

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical },
}

export default function Page() {
  return <CityServicePage content={CONTENT} />
}
