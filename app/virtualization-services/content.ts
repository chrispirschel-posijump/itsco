// Content for /virtualization-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "virtualization services".
// Canonical URL — /virtualization/ 301-redirects here.

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Virtualization Services | Server & Desktop Virtualization | ITSco',
    description:
      'ITSco virtualization services — consolidate servers and desktops onto efficient, resilient infrastructure. Less hardware, faster recovery. Book a free consultation.',
    canonical: 'https://www.itsco.com/virtualization-services/',
  },
  serviceName: 'Virtualization Services',
  hero: {
    eyebrow: 'Cloud · Virtualization',
    headlineLead: 'Virtualization that does more',
    headlineAccent: 'with less hardware.',
    body: 'Virtualization turns one physical server into many — cutting hardware cost, simplifying management, and making your infrastructure far more resilient. ITSco designs and runs it.',
    utmSuffix: 'virtualization-services-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-brett-sayles-4657256.jpg',
    alt: 'Server infrastructure consolidated through virtualization',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Stop buying a server',
    headlineAccent: 'for every job.',
    paragraphs: [
      'Dedicating physical hardware to each workload is wasteful and fragile. Virtualization consolidates workloads onto shared, efficient infrastructure — and ITSco makes the move seamless.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Infrastructure monitoring and support' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Leaner infrastructure,',
    headlineAccent: 'end to end.',
  },
  capabilities: [
    {
      slug: 'server-virtualization',
      title: 'Server Virtualization',
      description: 'Consolidate many workloads onto fewer physical servers — less hardware, less cost.',
    },
    {
      slug: 'desktop-virtualization',
      title: 'Desktop Virtualization',
      description: 'Centralized virtual desktops, easier to manage, secure, and support.',
    },
    {
      slug: 'virtualization-design',
      title: 'Architecture & Design',
      description: 'Virtualized environments designed for performance, capacity, and growth.',
    },
    {
      slug: 'virtualization-migration',
      title: 'Migration & Deployment',
      description: 'A smooth move from physical to virtual, with minimal disruption.',
    },
    {
      slug: 'virtualization-resilience',
      title: 'High Availability & Recovery',
      description: 'Virtual environments built for failover, fast recovery, and uptime.',
    },
    {
      slug: 'virtualization-management',
      title: 'Ongoing Management',
      description: 'Monitoring, optimization, and support that keep the environment healthy.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Leaner, tougher',
    headlineAccent: 'infrastructure.',
    paragraphs: [
      'Virtualization is one of the rare IT moves that cuts cost and increases resilience at the same time.',
    ],
    bullets: [
      'Fewer physical servers to buy, power, and maintain',
      'Faster recovery — virtual machines restore in minutes',
      'Easier scaling and simpler management',
      'Better use of the hardware you already own',
    ],
    image: {
      src: '/images/hero/services/pexels-brett-sayles-5408005.jpg',
      alt: 'Virtualized server infrastructure',
    },
  },
  related: {
    heading: 'Explore more cloud services',
    links: [
      {
        slug: 'managed-desktop-vdi',
        label: 'Managed Desktop & VDI',
        href: '/managed-desktop-vdi/',
        description: 'Secure virtual desktops your team can reach from any device, anywhere.',
      },
      {
        slug: 'cloud-hosting',
        label: 'Cloud Hosting',
        href: '/cloud-hosting/',
        description: 'Reliable, scalable hosting for your applications and infrastructure.',
      },
      {
        slug: 'cloud-services',
        label: 'Cloud Services Overview',
        href: '/cloud-services/',
        description: 'The full ITSco cloud program — migration, hosting, management, and more.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Virtualization,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: "What's the difference between virtualization and cloud?",
      answer: [
        'Virtualization is the technology that lets one physical machine run many virtual ones; cloud is a way of delivering virtualized resources on demand. Cloud runs on virtualization — and ITSco can apply it on-premise, in the cloud, or both.',
      ],
    },
    {
      question: 'Will virtualization disrupt our operations?',
      answer: [
        'The migration is planned to minimize disruption — typically done in stages, often outside business hours. Once virtualized, most businesses find management and recovery markedly easier.',
      ],
    },
  ],
  bookingUtm: 'virtualization-services-bottom',
}
