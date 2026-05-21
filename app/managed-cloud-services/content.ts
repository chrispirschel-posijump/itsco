// Content for /managed-cloud-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "managed cloud services".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Managed Cloud Services | ITSco',
    description:
      'ITSco managed cloud services — monitoring, security, optimization, and support that keep your cloud fast, secure, and cost-controlled. Book a free consultation.',
    canonical: 'https://www.itsco.com/managed-cloud-services/',
  },
  serviceName: 'Managed Cloud Services',
  hero: {
    eyebrow: 'Cloud · Managed Cloud',
    headlineLead: 'Managed cloud services that keep',
    headlineAccent: 'the cloud working for you.',
    body: "The cloud doesn't run itself. ITSco monitors, secures, optimizes, and supports your cloud environment day to day — so it stays fast, secure, and cost-controlled.",
    utmSuffix: 'managed-cloud-services-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-brett-sayles-5480781.jpg',
    alt: 'Cloud server infrastructure under active management',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Your cloud,',
    headlineAccent: 'fully looked after.',
    paragraphs: [
      'Most businesses move to the cloud and then discover it still needs constant attention — patching, security, cost control, performance. ITSco takes that on as a managed service.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years as a trusted IT services provider' },
    { value: '24/7', label: 'Cloud monitoring and support coverage' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Everything your cloud needs,',
    headlineAccent: 'handled.',
  },
  capabilities: [
    {
      slug: 'cloud-monitoring',
      title: 'Cloud Monitoring',
      description: '24/7 monitoring of your cloud workloads, performance, and availability.',
    },
    {
      slug: 'cloud-optimization',
      title: 'Performance Optimization',
      description: 'Continuous tuning of resources and workloads to keep the cloud fast and responsive.',
    },
    {
      slug: 'cloud-cost-control',
      title: 'Cost Management',
      description: 'Right-sizing and usage oversight that stops cloud spend from quietly creeping up.',
    },
    {
      slug: 'cloud-security-mgmt',
      title: 'Security & Compliance',
      description: 'Cloud configurations hardened and kept aligned with the standards you answer to.',
    },
    {
      slug: 'cloud-backup',
      title: 'Backup & Recovery',
      description: 'Cloud-native backup and tested recovery so an incident never means lost data.',
    },
    {
      slug: 'cloud-support',
      title: 'Expert Cloud Support',
      description: 'A senior team on call for cloud issues, changes, and questions, around the clock.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'The cloud',
    headlineAccent: 'you were promised.',
    paragraphs: [
      'The cloud was supposed to be simpler and cheaper. Managed cloud is what actually makes it so.',
    ],
    bullets: [
      'Predictable cloud spend instead of surprise bills',
      'Performance and uptime actively maintained, not assumed',
      'Security and compliance kept current as the cloud changes',
      'A senior team accountable for your cloud, day to day',
    ],
    image: {
      src: '/images/hero/services/pexels-cookiecutter-17489157.jpg',
      alt: 'Managed cloud infrastructure',
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
    headlineLead: 'Managed cloud services,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: "We're already on the cloud — what does managed cloud add?",
      answer: [
        'Moving to the cloud and running it well are different jobs. Managed cloud is the second one: ongoing monitoring, security, cost control, and support so the environment keeps delivering instead of drifting.',
      ],
    },
    {
      question: 'Will managed cloud lower our cloud bill?',
      answer: [
        'Often, yes. Most unmanaged cloud environments carry over-provisioned and idle resources. Right-sizing and usage oversight typically recover a meaningful share of monthly spend.',
      ],
    },
  ],
  bookingUtm: 'managed-cloud-services-bottom',
}
