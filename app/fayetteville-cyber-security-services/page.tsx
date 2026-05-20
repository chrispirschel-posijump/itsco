import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCyberCityContent } from '@/lib/templateCyberCity'

const CONTENT = makeTemplateCyberCityContent({
  name: 'Fayetteville',
  slug: 'fayetteville',
  region: 'the Sandhills',
  heroAccent: 'protect your data and reputation.',
  positioningAccent: 'make security a strength.',
  whyUsLead: 'Dependable cyber security for',
  whyUsAccent: 'Fayetteville businesses.',
  securityLead: 'Defend your operations against',
  securityAccent: 'modern cyber threats.',
  heroImage: {
    src: '/images/supporting/services/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg',
    alt: 'Cybersecurity specialist supporting a Fayetteville business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-karola-g-8546816.jpg',
    alt: 'ITSco cybersecurity team at work',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-shvetsa-5324853.jpg',
    alt: 'Cybersecurity monitoring for a Fayetteville business',
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
