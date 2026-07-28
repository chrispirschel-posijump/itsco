// Content for /microsoft-365-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "Microsoft 365 services".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Microsoft 365 Services | Deployment, Management & Security',
    description:
      'ITSco Microsoft 365 services — deployment, migration, security, and management so you get the full value of every license. Book a free consultation.',
    canonical: 'https://www.itsco.com/microsoft-365-services',
  },
  serviceName: 'Microsoft 365 Services',
  parent: { name: 'Microsoft Solutions', href: '/microsoft-solutions/' },
  hero: {
    eyebrow: 'Microsoft · Microsoft 365',
    headlineLead: 'Microsoft 365, set up to',
    headlineAccent: 'actually deliver.',
    body: 'Most businesses use a fraction of what Microsoft 365 offers. ITSco deploys, secures, and manages your 365 environment so you get the full value of every license you pay for.',
    utmSuffix: 'microsoft-365-services-hero',
  },
  heroImage: {
    src: '/images/supporting/services/windows-AigsWJmvoEo-unsplash.jpg',
    alt: 'Microsoft 365 productivity environment on a laptop',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'More than',
    headlineAccent: 'email and Office.',
    paragraphs: [
      "Microsoft 365 is a complete productivity, collaboration, and security platform — but only if it's configured and managed well. ITSco makes the whole suite work as one.",
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of IT and Microsoft expertise' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'The whole 365 suite,',
    headlineAccent: 'working together.',
  },
  capabilities: [
    {
      slug: 'm365-deployment',
      title: 'Deployment & Migration',
      description: 'A clean setup or smooth migration onto Microsoft 365, with no lost data or downtime.',
    },
    {
      slug: 'm365-management',
      title: 'Management & Administration',
      description: 'Day-to-day administration, updates, and user management handled for you.',
    },
    {
      slug: 'm365-security',
      title: 'Security & Compliance',
      description: '365 hardened with the right security and compliance controls for your business.',
    },
    {
      slug: 'm365-collaboration',
      title: 'Collaboration Tools',
      description: 'Teams, SharePoint, and OneDrive configured to actually improve how your people work.',
    },
    {
      slug: 'm365-licensing',
      title: 'License Optimization',
      description: "The right licenses for the right people — no paying for seats and tiers you don't use.",
    },
    {
      slug: 'm365-support',
      title: 'User Support & Training',
      description: 'A help desk and training that turn 365 features into everyday productivity.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Get the full value of',
    headlineAccent: 'every license.',
    paragraphs: [
      'You already pay for Microsoft 365. Managed well, it replaces a stack of other tools and earns its keep many times over.',
    ],
    bullets: [
      'The whole suite configured and working together',
      'Security and compliance built in, not bolted on',
      'Licensing right-sized to what you actually use',
      'A team that keeps 365 current and supported',
    ],
    image: {
      src: '/images/hero/services/ed-hardie-xG02JzIBf7o-unsplash.jpg',
      alt: 'Microsoft 365 app suite',
    },
  },
  related: {
    heading: 'Explore more Microsoft services',
    links: [
      {
        slug: 'microsoft-exchange-services',
        label: 'Microsoft Exchange Services',
        href: '/microsoft-exchange-services/',
        description: 'Secure, reliable business email deployment and management.',
      },
      {
        slug: 'microsoft-teams-services',
        label: 'Microsoft Teams Services',
        href: '/microsoft-teams-services/',
        description: 'Teams set up and managed as a real collaboration and communication hub.',
      },
      {
        slug: 'microsoft-solutions',
        label: 'Microsoft Solutions Overview',
        href: '/microsoft-solutions/',
        description: 'The full ITSco Microsoft program — 365, Azure, Teams, and more.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Microsoft 365 services,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'We already have Microsoft 365 — what would ITSco do?',
      answer: [
        'Most 365 environments are underused and loosely managed. ITSco tightens security, optimizes licensing, configures the collaboration tools properly, and takes on day-to-day administration — so you get far more from what you already pay for.',
      ],
    },
    {
      question: 'Can you migrate us to Microsoft 365 from another platform?',
      answer: [
        'Yes. ITSco handles migrations from on-premise Exchange, Google Workspace, and other platforms — moving email, files, and accounts with minimal downtime and no data loss.',
      ],
    },
  ],
  bookingUtm: 'microsoft-365-services-bottom',
}
