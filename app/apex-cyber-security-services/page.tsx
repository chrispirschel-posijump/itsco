import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCyberCityContent } from '@/lib/templateCyberCity'

const CONTENT = makeTemplateCyberCityContent({
  name: 'Apex',
  slug: 'apex',
  region: 'the Triangle',
  heroAccent: 'neutralize threats before they strike.',
  positioningAccent: 'protect what you have built.',
  whyUsLead: 'An IT security partner',
  whyUsAccent: 'Apex businesses rely on.',
  securityLead: 'Keep your network secure',
  securityAccent: 'from evolving threats.',
  heroImage: {
    src: '/images/supporting/services/pexels-mart-production-7088498.jpg',
    alt: 'Cybersecurity specialist supporting an Apex business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/charlesdeluvio-Lks7vei-eAg-unsplash.jpg',
    alt: 'ITSco cybersecurity team at work',
  },
  securityImage: {
    src: '/images/supporting/services/windows-AigsWJmvoEo-unsplash.jpg',
    alt: 'Cybersecurity monitoring for an Apex business',
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
