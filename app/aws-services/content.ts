// Content for /aws-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "AWS services".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'AWS Services | Amazon Web Services Migration & Management | ITSco',
    description:
      'ITSco AWS services — migration, management, security, and cost optimization from a certified team. Get the value of AWS without the pitfalls. Book a free consultation.',
    canonical: 'https://www.itsco.com/aws-services/',
  },
  serviceName: 'AWS Services',
  hero: {
    eyebrow: 'Cloud · Amazon Web Services',
    headlineLead: 'AWS, architected and',
    headlineAccent: 'managed by experts.',
    body: 'Amazon Web Services is powerful — and easy to over-spend, misconfigure, and under-secure. ITSco designs, runs, and optimizes your AWS environment so you get the value without the pitfalls.',
    utmSuffix: 'aws-services-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-cookiecutter-17489157.jpg',
    alt: 'AWS cloud server infrastructure',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Get the most',
    headlineAccent: 'out of AWS.',
    paragraphs: [
      "AWS gives you almost limitless capability, and almost limitless ways to waste money or leave gaps. ITSco's certified team makes AWS deliver — efficient, secure, and built for your workloads.",
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'AWS monitoring and support coverage' },
  ],
  capabilitiesHeading: {
    eyebrow: 'Our AWS Services',
    headlineLead: 'End-to-end AWS,',
    headlineAccent: 'done right.',
  },
  capabilities: [
    {
      slug: 'aws-migration',
      title: 'AWS Migration & Deployment',
      description: 'A planned, low-disruption move onto AWS, architected for your workloads.',
    },
    {
      slug: 'aws-management',
      title: 'Management & Optimization',
      description: 'Continuous tuning, monitoring, and right-sizing across your AWS environment.',
    },
    {
      slug: 'aws-security',
      title: 'Security & Compliance',
      description: 'AWS configured to security best practices and the standards you answer to.',
    },
    {
      slug: 'aws-cost',
      title: 'Cost Optimization',
      description: 'Usage oversight and right-sizing that keep AWS spend under control.',
    },
    {
      slug: 'aws-architecture',
      title: 'Cloud Architecture',
      description: 'Well-architected AWS environments designed to scale and stay resilient.',
    },
    {
      slug: 'aws-support',
      title: 'Managed AWS Support',
      description: 'A certified team on call for your AWS environment, around the clock.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'AWS that',
    headlineAccent: 'pays off.',
    paragraphs: [
      'AWS rewards good architecture and punishes neglect. ITSco makes sure yours is the former.',
    ],
    bullets: [
      'AWS spend controlled, not creeping',
      'Environments architected to scale and stay resilient',
      'Security and compliance configured correctly from the start',
      'A certified team accountable for your AWS day to day',
    ],
    image: {
      src: '/images/hero/services/pexels-brett-sayles-5408005.jpg',
      alt: 'AWS data center infrastructure',
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
        slug: 'microsoft-azure-services',
        label: 'Microsoft Azure Services',
        href: '/microsoft-azure-services/',
        description: 'Migration, management, and optimization on Microsoft Azure.',
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
    headlineLead: 'AWS services,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'Do you migrate to AWS, manage it, or both?',
      answer: [
        'Both. ITSco can plan and run your migration onto AWS, then manage, secure, and optimize the environment ongoing — or step into an existing AWS setup and take it from there.',
      ],
    },
    {
      question: 'How do you keep AWS costs under control?',
      answer: [
        'Through right-sizing, eliminating idle resources, choosing the correct pricing models, and ongoing usage monitoring. Unmanaged AWS environments routinely overspend; active management recovers much of it.',
      ],
    },
  ],
  bookingUtm: 'aws-services-bottom',
}
