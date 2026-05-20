import type { Metadata } from 'next'
import CityServicePage from '@/components/CityServicePage'
import { makeTemplateCityContent } from '@/lib/templateCity'

const CONTENT = makeTemplateCityContent({
  name: 'Charlotte',
  slug: 'charlotte',
  region: 'the Charlotte metro',
  serviceNoun: 'IT outsourcing',
  serviceNounTitle: 'IT Outsourcing',
  canonicalPath: '/charlotte-it-outsourcing/',
  utmBase: 'it-outsourcing-charlotte',
  heroAccent: 'empowers your team to achieve more.',
  positioningAccent: 'maximize your IT ROI.',
  whyUsLead: 'An IT outsourcing partner',
  whyUsAccent: 'Charlotte businesses rely on.',
  securityLead: 'Protect your business against',
  securityAccent: 'an evolving threat landscape.',
  heroImage: {
    src: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
    alt: 'IT outsourcing team supporting a Charlotte business',
  },
  whyUsImage: {
    src: '/images/hero/consulting/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    alt: 'ITSco team at work',
  },
  securityImage: {
    src: '/images/supporting/services/pexels-shvets-production-8413332.jpg',
    alt: 'Cybersecurity monitoring for a Charlotte business',
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
