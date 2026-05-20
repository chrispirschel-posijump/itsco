import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCyberCityContent } from '@/lib/templateCyberCity'

const CONTENT = makeTemplateCyberCityContent({
  name: 'Rocky Mount',
  slug: 'rocky-mount',
  region: 'eastern North Carolina',
  heroAccent: 'guard your digital frontiers.',
  positioningAccent: 'defend every layer.',
  whyUsLead: 'A cyber security team',
  whyUsAccent: 'Rocky Mount businesses trust.',
  securityLead: 'Protect your data against',
  securityAccent: 'ransomware and breaches.',
  heroImage: {
    src: '/images/supporting/services/beatriz-cattel-JtcJoKiz-m4-unsplash.jpg',
    alt: 'Cybersecurity specialist supporting a Rocky Mount business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/creatopy-E3LsanLgkLM-unsplash.jpg',
    alt: 'ITSco cybersecurity team at work',
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
