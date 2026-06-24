// Content for /cloud-hosting/
// Rewrite page — fresh ROI-focused content. Primary keyword: "cloud hosting".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Cloud Hosting Services | ITSco',
    description:
      'ITSco cloud hosting — reliable, scalable, secure hosting for your applications and infrastructure, fully managed. Book a free consultation.',
    canonical: 'https://www.itsco.com/cloud-hosting/',
  },
  serviceName: 'Cloud Hosting',
  parent: { name: 'Cloud Services', href: '/cloud-services/' },
  hero: {
    eyebrow: 'Cloud · Hosting',
    headlineLead: 'Cloud hosting that’s reliable,',
    headlineAccent: 'scalable, and yours.',
    body: "Whether it's your applications, websites, or full infrastructure, ITSco hosts them on cloud platforms built for uptime, performance, and room to grow.",
    utmSuffix: 'cloud-hosting-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-brett-sayles-5408005.jpg',
    alt: 'Cloud hosting data center infrastructure',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Hosting that scales',
    headlineAccent: 'when you do.',
    paragraphs: [
      'On-premise hardware ages, fails, and caps your growth. Cloud hosting replaces it with infrastructure that scales on demand and stays available — managed by ITSco.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Hosting monitoring and support coverage' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Hosting built for',
    headlineAccent: 'uptime and growth.',
  },
  capabilities: [
    {
      slug: 'scalable-hosting',
      title: 'Scalable Infrastructure',
      description: 'Hosting capacity that grows and shrinks with demand — no over-buying hardware.',
    },
    {
      slug: 'hosting-uptime',
      title: 'High Availability',
      description: 'Redundant, resilient hosting engineered to keep your applications online.',
    },
    {
      slug: 'hosting-performance',
      title: 'Performance Tuning',
      description: 'Resources configured and optimized so hosted workloads stay fast.',
    },
    {
      slug: 'hosting-security',
      title: 'Secure Hosting',
      description: 'Hardened, monitored hosting environments that protect your applications and data.',
    },
    {
      slug: 'hosting-backup',
      title: 'Backup & Recovery',
      description: 'Automated backups and tested recovery built into every hosting plan.',
    },
    {
      slug: 'hosting-support',
      title: 'Managed & Supported',
      description: 'ITSco handles provisioning, patching, and support — you just use it.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Infrastructure without',
    headlineAccent: 'the hardware headache.',
    paragraphs: [
      'Owning servers means buying, housing, maintaining, and eventually replacing them. Cloud hosting trades all of that for a service that simply works.',
    ],
    bullets: [
      'No aging servers to buy, maintain, or replace',
      'Capacity that scales with demand, not guesswork',
      'Redundancy and recovery built in',
      'Provisioning, patching, and support handled for you',
    ],
    image: {
      src: '/images/hero/services/pexels-cookiecutter-17489157.jpg',
      alt: 'Cloud hosting server infrastructure',
    },
  },
  related: {
    heading: 'Explore more cloud services',
    links: [
      {
        slug: 'public-hybrid-cloud-services',
        label: 'Public & Hybrid Cloud',
        href: '/public-hybrid-cloud-services/',
        description: 'The scalability of public cloud and the control of private, combined.',
      },
      {
        slug: 'private-cloud-services',
        label: 'Private Cloud Services',
        href: '/private-cloud-services/',
        description: 'Dedicated, single-tenant cloud for sensitive workloads and tight control.',
      },
      {
        slug: 'managed-cloud-services',
        label: 'Managed Cloud Services',
        href: '/managed-cloud-services/',
        description: 'Ongoing management, monitoring, and optimization of your cloud environment.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Cloud hosting,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'What can ITSco host in the cloud?',
      answer: [
        'Applications, websites, databases, file storage, and full server infrastructure — on public, private, or hybrid cloud, matched to what each workload needs.',
      ],
    },
    {
      question: 'Is cloud hosting more expensive than our own servers?',
      answer: [
        'Usually less, once you count the full cost of owned hardware — purchase, power, space, maintenance, and refresh cycles. Cloud hosting converts that into a predictable operating cost that tracks actual usage.',
      ],
    },
  ],
  bookingUtm: 'cloud-hosting-bottom',
}
