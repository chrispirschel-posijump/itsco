import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCyberCityContent } from '@/lib/templateCyberCity'

const CONTENT = makeTemplateCyberCityContent({
  name: 'Hillsborough',
  slug: 'hillsborough',
  region: 'the Triangle',
  heroAccent: 'fortify your defenses.',
  positioningAccent: 'build lasting resilience.',
  whyUsLead: 'Locally based cyber security for',
  whyUsAccent: 'Hillsborough businesses.',
  securityLead: 'Stay protected against',
  securityAccent: "today's cyber threats.",
  heroImage: {
    src: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
    alt: 'Cybersecurity specialist supporting a Hillsborough business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    alt: 'ITSco cybersecurity team at work',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-shvets-production-8413332.jpg',
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
