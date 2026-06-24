// Content for /microsoft-teams-services/
// Rewrite page — fresh ROI-focused content. Primary keyword: "Microsoft Teams services".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Microsoft Teams Services | Setup, Voice & Management | ITSco',
    description:
      'ITSco Microsoft Teams services — deployment, Teams Phone, governance, and adoption so Teams becomes the hub your business runs on. Book a free consultation.',
    canonical: 'https://www.itsco.com/microsoft-teams-services/',
  },
  serviceName: 'Microsoft Teams Services',
  parent: { name: 'Microsoft Solutions', href: '/microsoft-solutions/' },
  hero: {
    eyebrow: 'Microsoft · Teams',
    headlineLead: 'Microsoft Teams, built to',
    headlineAccent: 'connect your people.',
    body: 'Teams can be the center of how your business communicates — or just another chat app nobody set up properly. ITSco makes it the former.',
    utmSuffix: 'microsoft-teams-services-hero',
  },
  heroImage: {
    src: '/images/hero/services/pexels-diva-plavalaguna-6937858.jpg',
    alt: 'Team collaborating over a Microsoft Teams video call',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'More than',
    headlineAccent: 'meetings and chat.',
    paragraphs: [
      'Done right, Teams replaces phone systems, file sharing, and a dozen disconnected tools. ITSco configures, secures, and manages Teams so it becomes the hub your people actually run their day from.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of IT and Microsoft expertise' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Teams, configured',
    headlineAccent: 'to actually work.',
  },
  capabilities: [
    {
      slug: 'teams-deployment',
      title: 'Teams Deployment & Setup',
      description: 'Teams rolled out and configured around how your business actually works.',
    },
    {
      slug: 'teams-voice',
      title: 'Teams Phone & Voice',
      description: 'Replace your phone system with Teams calling — one platform, one bill.',
    },
    {
      slug: 'teams-governance',
      title: 'Governance & Security',
      description: 'Structured teams, channels, and permissions that stay organized and secure.',
    },
    {
      slug: 'teams-integration',
      title: 'App & Workflow Integration',
      description: 'Teams connected to your apps and workflows so work happens in one place.',
    },
    {
      slug: 'teams-meetings',
      title: 'Meetings & Collaboration',
      description: 'Meeting rooms, webinars, and collaboration set up to just work.',
    },
    {
      slug: 'teams-support',
      title: 'Support & Adoption',
      description: 'Training and support that get your whole team genuinely using Teams.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'One hub for how',
    headlineAccent: 'your business works.',
    paragraphs: [
      'When Teams is set up properly, it stops being one more app and becomes the place work happens.',
    ],
    bullets: [
      'Communication, files, and calls in one platform',
      "A phone system you don't run separately",
      'Teams and channels that stay organized, not chaotic',
      'People who actually adopt it',
    ],
    image: {
      src: '/images/hero/services/pexels-divinetechygirl-1181745.jpg',
      alt: 'Team meeting using Microsoft Teams',
    },
  },
  related: {
    heading: 'Explore more Microsoft services',
    links: [
      {
        slug: 'microsoft-365-services',
        label: 'Microsoft 365 Services',
        href: '/microsoft-365-services/',
        description: 'Deployment, management, and security across the full Microsoft 365 suite.',
      },
      {
        slug: 'microsoft-sharepoint-services',
        label: 'Microsoft SharePoint Services',
        href: '/microsoft-sharepoint-services/',
        description: 'Document management and collaboration, optimized and secured.',
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
    headlineLead: 'Microsoft Teams services,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'Can Teams really replace our phone system?',
      answer: [
        'Yes. Teams Phone provides full business calling — direct numbers, call routing, voicemail — over the same platform your team already uses. Many businesses retire a separate phone system, and its bill, entirely.',
      ],
    },
    {
      question: 'Our Teams is a mess of channels. Can you fix that?',
      answer: [
        "That's a common one. ITSco restructures teams, channels, and permissions into something organized and governed, then sets policies so it stays that way as you grow.",
      ],
    },
  ],
  bookingUtm: 'microsoft-teams-services-bottom',
}
