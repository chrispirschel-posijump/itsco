import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Rocky Mount',
  slug: 'rocky-mount',
  region: 'eastern North Carolina',
  serviceNoun: 'IT support',
  serviceNounTitle: 'IT Support',
  canonicalPath: '/it-support-rocky-mount/',
  utmBase: 'it-support-rocky-mount',
  heroAccent: 'fixes the root cause.',
  positioningAccent: 'deliver predictable value.',
  whyUsLead: 'An IT support team',
  whyUsAccent: 'Rocky Mount businesses rely on.',
  securityLead: 'Protect your business against',
  securityAccent: 'evolving cyber threats.',
  heroImage: {
    src: '/images/supporting/services/pexels-mart-production-7255723.jpg',
    alt: 'IT support team supporting a Rocky Mount business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-divinetechygirl-1181305.jpg',
    alt: 'ITSco IT support team at work',
  },
  securityImage: {
    src: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
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
