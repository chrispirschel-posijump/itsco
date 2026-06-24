// Content for /private-cloud-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "private cloud services".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Private Cloud Services | ITSco',
    description:
      'ITSco private cloud services — dedicated, single-tenant cloud infrastructure for sensitive and regulated workloads, fully managed. Book a free consultation.',
    canonical: 'https://www.itsco.com/private-cloud-services/',
  },
  serviceName: 'Private Cloud Services',
  parent: { name: 'Cloud Services', href: '/cloud-services/' },
  hero: {
    eyebrow: 'Cloud · Private Cloud',
    headlineLead: 'Private cloud — dedicated',
    headlineAccent: 'infrastructure, total control.',
    body: "When workloads are sensitive or regulated, a shared public cloud isn't always the answer. ITSco builds and manages private cloud — single-tenant, dedicated, and fully under your control.",
    utmSuffix: 'private-cloud-services-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-cookiecutter-19166565.jpg',
    alt: 'Dedicated private cloud server infrastructure',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'The cloud,',
    headlineAccent: 'on your terms.',
    paragraphs: [
      'Some data and workloads demand isolation, predictable performance, or specific compliance controls. Private cloud delivers the cloud model — elastic, managed, efficient — on infrastructure dedicated to you alone.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Private cloud monitoring and support' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Cloud agility on',
    headlineAccent: 'infrastructure that’s yours.',
  },
  capabilities: [
    {
      slug: 'dedicated-infrastructure',
      title: 'Dedicated Infrastructure',
      description: 'Single-tenant cloud — your workloads run on resources reserved for you alone.',
    },
    {
      slug: 'private-cloud-security',
      title: 'Enhanced Security & Isolation',
      description: 'Full isolation and tighter control for sensitive and regulated data.',
    },
    {
      slug: 'private-cloud-compliance',
      title: 'Compliance Alignment',
      description: 'Infrastructure configured to meet HIPAA, PCI-DSS, and other mandates.',
    },
    {
      slug: 'predictable-performance',
      title: 'Predictable Performance',
      description: 'No noisy neighbors — consistent performance for demanding workloads.',
    },
    {
      slug: 'private-cloud-management',
      title: 'Fully Managed',
      description: 'ITSco designs, runs, and maintains the environment end to end.',
    },
    {
      slug: 'private-cloud-scalability',
      title: 'Controlled Scalability',
      description: 'Scale on your schedule, within an environment you fully govern.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Cloud agility,',
    headlineAccent: 'without the trade-offs.',
    paragraphs: [
      "Private cloud isn't a step back from the cloud — it's the cloud model on infrastructure you don't have to share.",
    ],
    bullets: [
      'Sensitive workloads isolated on dedicated infrastructure',
      'Consistent, predictable performance',
      'Compliance controls built into the environment',
      'Cloud flexibility without sharing the platform',
    ],
    image: {
      src: '/images/hero/services/pexels-brett-sayles-5480781.jpg',
      alt: 'Private cloud server hardware',
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
    headlineLead: 'Private cloud,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'When does private cloud make more sense than public?',
      answer: [
        "When you have strict compliance requirements, highly sensitive data, predictable heavy workloads, or a need for control public cloud can't give. Many businesses use both — private for the sensitive core, public for everything else.",
      ],
    },
    {
      question: 'Is private cloud just our old servers in a data center?',
      answer: [
        'No. Private cloud brings the cloud operating model — virtualization, elasticity, automation, managed operations — onto infrastructure dedicated to you. You get cloud agility with single-tenant isolation.',
      ],
    },
  ],
  bookingUtm: 'private-cloud-services-bottom',
}
