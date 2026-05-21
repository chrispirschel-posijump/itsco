// Content for /systems-engineering/
// Rewrite page — fresh ROI-focused content. Primary keyword: "systems engineering".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Systems Engineering Services | ITSco',
    description:
      'ITSco systems engineering — servers, storage, virtualization, and architecture engineered for reliability, performance, and growth. Book a free consultation.',
    canonical: 'https://www.itsco.com/systems-engineering/',
  },
  serviceName: 'Systems Engineering',
  hero: {
    eyebrow: 'Engineering · Systems Engineering',
    headlineLead: 'Systems engineering for infrastructure',
    headlineAccent: 'that holds up.',
    body: 'Servers, storage, virtualization, and the architecture that ties them together — ITSco engineers IT systems built for reliability, performance, and growth.',
    utmSuffix: 'systems-engineering-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-brett-sayles-5408005.jpg',
    alt: 'ITSco-engineered server and systems infrastructure',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Infrastructure that is designed,',
    headlineAccent: 'not just assembled.',
    paragraphs: [
      'Most IT environments grow by accretion — a server here, a fix there. Systems engineering replaces that with deliberate architecture: designed for the load, the risk, and the road ahead.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of IT infrastructure engineering' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Infrastructure engineered',
    headlineAccent: 'on purpose.',
  },
  capabilities: [
    {
      slug: 'se-architecture',
      title: 'Systems Architecture & Design',
      description: 'Server, storage, and compute architecture designed around your workloads and growth.',
    },
    {
      slug: 'se-server',
      title: 'Server Engineering & Deployment',
      description: 'Physical and virtual servers specified, built, and deployed to do the job right.',
    },
    {
      slug: 'se-virtualization',
      title: 'Virtualization & Consolidation',
      description: 'Consolidated, virtualized infrastructure that does more with less hardware.',
    },
    {
      slug: 'se-storage',
      title: 'Storage & Data Architecture',
      description: 'Storage designed for capacity, speed, and resilience — and ready to scale.',
    },
    {
      slug: 'se-resilience',
      title: 'High Availability & Resilience',
      description: "Redundancy and failover engineered in, so a single failure isn't an outage.",
    },
    {
      slug: 'se-integration',
      title: 'Systems Integration',
      description: 'Disparate systems engineered to work together as one coherent environment.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Infrastructure',
    headlineAccent: 'you can build on.',
    paragraphs: [
      'Well-engineered systems are quiet — they hold up, scale cleanly, and stop demanding attention. That is the point.',
    ],
    bullets: [
      'Systems sized for the workload, not guesswork',
      'Redundancy and failover engineered in from the start',
      'Architecture ready to scale with the business',
      'Fewer outages, less firefighting, more uptime',
    ],
    image: {
      src: '/images/hero/services/pexels-brett-sayles-5480781.jpg',
      alt: 'Engineered server infrastructure',
    },
  },
  related: {
    heading: 'Explore more engineering services',
    links: [
      {
        slug: 'network-engineering',
        label: 'Network Engineering',
        href: '/network-engineering/',
        description: 'Modern, secure, high-performance networks designed for your business.',
      },
      {
        slug: 'virtualization-services',
        label: 'Virtualization Services',
        href: '/virtualization-services/',
        description: 'Consolidate servers and desktops onto efficient, resilient infrastructure.',
      },
      {
        slug: 'voip-unified-communications',
        label: 'VoIP & Unified Communications',
        href: '/voip-unified-communications/',
        description: 'Secure, scalable business voice and collaboration solutions.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Systems engineering,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is systems engineering different from network engineering?',
      answer: [
        "Network engineering designs the connectivity — switches, routing, security; systems engineering designs the servers, storage, and compute that run on it. They're complementary, and ITSco delivers both as one coordinated engineering practice.",
      ],
    },
    {
      question: 'Do you work with our existing hardware, or only new builds?',
      answer: [
        "Both. ITSco can engineer a greenfield environment or re-architect what you already run — consolidating, virtualizing, and hardening existing systems where that's the smarter investment.",
      ],
    },
  ],
  bookingUtm: 'systems-engineering-bottom',
}
