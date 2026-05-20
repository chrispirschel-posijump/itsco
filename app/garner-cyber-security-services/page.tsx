import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCyberCityContent } from '@/lib/templateCyberCity'

const CONTENT = makeTemplateCyberCityContent({
  name: 'Garner',
  slug: 'garner',
  region: 'the Triangle',
  heroAccent: 'keep your business protected.',
  positioningAccent: 'turn security into confidence.',
  whyUsLead: 'The cyber security partner',
  whyUsAccent: 'Garner businesses choose.',
  securityLead: 'Close the gaps before',
  securityAccent: 'attackers find them.',
  heroImage: {
    src: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
    alt: 'Cybersecurity specialist supporting a Garner business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
    alt: 'ITSco cybersecurity team at work',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-thirdman-5582868.jpg',
    alt: 'Cybersecurity monitoring for a Garner business',
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
