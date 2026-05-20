import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Hillsborough',
  slug: 'hillsborough',
  region: 'the Triangle',
  heroAccent: 'improve productivity and increase ROI.',
  positioningAccent: 'make IT a driver of growth.',
  whyUsLead: 'Trusted IT support for',
  whyUsAccent: 'Hillsborough businesses.',
  securityLead: 'Stay protected against',
  securityAccent: "today's cyber threats.",
  heroImage: {
    src: '/images/hero/consulting/path-digital-tR0jvlsmCuQ-unsplash.jpg',
    alt: 'IT professional supporting a Hillsborough business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/charlesdeluvio-Lks7vei-eAg-unsplash.jpg',
    alt: 'ITSco team collaborating with a client',
  },
  securityImage: {
    src: '/images/supporting/services/network-services.jpg',
    alt: 'Cybersecurity monitoring for a Hillsborough business',
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
