import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCyberCityContent } from '@/lib/templateCyberCity'

const CONTENT = makeTemplateCyberCityContent({
  name: 'Chapel Hill',
  slug: 'chapel-hill',
  region: 'the Triangle',
  heroAccent: 'stop cybercriminals in their tracks.',
  positioningAccent: 'stay audit-ready year-round.',
  whyUsLead: 'Trusted cyber security for',
  whyUsAccent: 'Chapel Hill businesses.',
  securityLead: 'Shield your business from',
  securityAccent: 'a relentless threat landscape.',
  heroImage: {
    src: '/images/supporting/services/annie-spratt-MChSQHxGZrQ-unsplash.jpg',
    alt: 'Cybersecurity specialist supporting a Chapel Hill business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-pavel-danilyuk-6340648.jpg',
    alt: 'ITSco cybersecurity team at work',
  },
  securityImage: {
    src: '/images/supporting/services/network-services.jpg',
    alt: 'Cybersecurity monitoring for a Chapel Hill business',
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
