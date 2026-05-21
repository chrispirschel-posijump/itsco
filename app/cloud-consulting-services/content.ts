// Content for /cloud-consulting-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "cloud consulting".
// /cloud-consulting/ 301-redirects here.

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Cloud Consulting Services | ITSco',
    description:
      'ITSco cloud consulting — readiness assessments, strategy, and roadmaps that make the cloud pay off before you commit budget. Book a free consultation.',
    canonical: 'https://www.itsco.com/cloud-consulting-services/',
  },
  serviceName: 'Cloud Consulting',
  hero: {
    eyebrow: 'Cloud · Consulting',
    headlineLead: 'Cloud consulting —',
    headlineAccent: 'strategy before spend.',
    body: "The cloud only pays off with the right plan. ITSco's cloud consulting helps you decide what to move, where, and how — before you commit budget.",
    utmSuffix: 'cloud-consulting-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-divinetechygirl-1181341.jpg',
    alt: 'ITSco advisors planning a cloud strategy',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Get the cloud strategy',
    headlineAccent: 'right first.',
    paragraphs: [
      'Rushed cloud decisions lead to runaway costs, poor performance, and migrations that stall. A clear cloud strategy — what to move, which platform, in what order — is what makes the cloud deliver.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of IT and cloud expertise' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: 'How We Help',
    headlineLead: 'A cloud plan',
    headlineAccent: 'you can act on.',
  },
  capabilities: [
    {
      slug: 'cloud-assessment',
      title: 'Cloud Readiness Assessment',
      description: "An honest review of your environment and what is — and isn't — ready for the cloud.",
    },
    {
      slug: 'cloud-strategy',
      title: 'Cloud Strategy & Roadmap',
      description: 'A prioritized, costed plan for what to move, where, and when.',
    },
    {
      slug: 'platform-selection',
      title: 'Platform Selection',
      description: 'The right mix of public, private, hybrid, AWS, and Azure for your workloads.',
    },
    {
      slug: 'cloud-cost-modeling',
      title: 'Cost Modeling',
      description: 'A clear-eyed view of what the cloud will actually cost — before you commit.',
    },
    {
      slug: 'cloud-architecture-consulting',
      title: 'Architecture Guidance',
      description: 'Well-architected designs that scale, perform, and stay secure.',
    },
    {
      slug: 'cloud-governance',
      title: 'Governance & Compliance',
      description: 'Policies and controls so the cloud stays secure and compliant as it grows.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Confidence',
    headlineAccent: 'before commitment.',
    paragraphs: [
      'The most expensive cloud mistakes are made before anything moves. Cloud consulting is how you avoid them.',
    ],
    bullets: [
      'Clarity on what to move, where, and in what order',
      'Realistic cost expectations before you commit budget',
      'The right platform mix for your actual workloads',
      'A roadmap your team — or ITSco — can execute',
    ],
    image: {
      src: '/images/hero/consulting/pexels-divinetechygirl-1181335.jpg',
      alt: 'Cloud consultant reviewing a strategy roadmap',
    },
  },
  related: {
    heading: 'Explore more cloud services',
    links: [
      {
        slug: 'cloud-migration',
        label: 'Cloud Migration',
        href: '/cloud-migration/',
        description: 'A planned, low-disruption move to the cloud that lands right the first time.',
      },
      {
        slug: 'managed-cloud-services',
        label: 'Managed Cloud Services',
        href: '/managed-cloud-services/',
        description: 'Ongoing management, monitoring, and optimization of your cloud environment.',
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
    headlineLead: 'Cloud consulting,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: "We're not sure the cloud is right for us. Can consulting help?",
      answer: [
        "That's exactly what it's for. A cloud readiness assessment gives you an honest answer — including which workloads belong in the cloud, which don't, and what the move would cost — before you commit to anything.",
      ],
    },
    {
      question: 'Do we have to use ITSco to implement what you recommend?',
      answer: [
        'No. You own the strategy and roadmap and can execute it however you choose. Many clients have ITSco carry out the migration and manage the result — but the consulting stands on its own.',
      ],
    },
  ],
  bookingUtm: 'cloud-consulting-bottom',
}
