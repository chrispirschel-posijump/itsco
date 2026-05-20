import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Fayetteville',
  slug: 'fayetteville',
  region: 'the Sandhills',
  heroAccent: 'boost productivity and protect your data.',
  positioningAccent: 'turn IT into an advantage.',
  whyUsLead: 'Dependable IT services for',
  whyUsAccent: 'Fayetteville businesses.',
  securityLead: 'Defend your operations against',
  securityAccent: 'modern cyber threats.',
  heroImage: {
    src: '/images/supporting/services/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg',
    alt: 'IT professional supporting a Fayetteville business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
    alt: 'ITSco team collaborating with a client',
  },
  securityImage: {
    src: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
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
