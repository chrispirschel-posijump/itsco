// Content for /it-roadmap-planning/
// Rewrite page — fresh ROI-focused content. Primary keyword: "IT roadmap planning".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'IT Roadmap Planning Services | ITSco',
    description:
      'ITSco IT roadmap planning — turn reactive IT spending into a clear, prioritized, costed multi-year plan aligned to your business goals. Book a free consultation.',
    canonical: 'https://www.itsco.com/it-roadmap-planning/',
  },
  serviceName: 'IT Roadmap Planning',
  hero: {
    eyebrow: 'Strategy · IT Roadmap',
    headlineLead: 'An IT roadmap that turns',
    headlineAccent: 'strategy into a plan.',
    body: "A roadmap turns “we should probably upgrade something” into a clear, sequenced, costed plan. ITSco builds yours around where the business is headed.",
    utmSuffix: 'it-roadmap-planning-hero',
  },
  heroImage: {
    src: '/images/hero/consulting/creatopy-E3LsanLgkLM-unsplash.jpg',
    alt: 'ITSco consultants planning an IT roadmap',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'Stop making IT decisions',
    headlineAccent: 'one fire at a time.',
    paragraphs: [
      'Without a roadmap, IT spending is reactive — whatever broke last gets the budget. A roadmap replaces that with a deliberate, prioritized plan that moves the business forward.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of strategic IT planning' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'From scattered priorities',
    headlineAccent: 'to a clear plan.',
  },
  capabilities: [
    {
      slug: 'roadmap-current-state',
      title: 'Current-State Review',
      description: "An honest baseline of your systems, their condition, and their fit for where you're going.",
    },
    {
      slug: 'roadmap-business-alignment',
      title: 'Business Alignment',
      description: 'Technology priorities mapped directly to your business goals and growth plans.',
    },
    {
      slug: 'roadmap-prioritization',
      title: 'Prioritization & Sequencing',
      description: 'What to do first, next, and later — sequenced for impact and dependency.',
    },
    {
      slug: 'roadmap-budgeting',
      title: 'Budget & Cost Planning',
      description: 'Each initiative costed, so the roadmap doubles as a multi-year IT budget.',
    },
    {
      slug: 'roadmap-risk',
      title: 'Risk & Lifecycle Planning',
      description: 'Aging hardware, end-of-life software, and security gaps planned for before they bite.',
    },
    {
      slug: 'roadmap-reviews',
      title: 'Ongoing Roadmap Reviews',
      description: 'The roadmap revisited as the business changes — a living plan, not a one-time document.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'IT that moves',
    headlineAccent: 'with the business.',
    paragraphs: [
      'A roadmap changes the IT conversation from "what broke?" to "what’s next?" — and gives leadership something to plan around.',
    ],
    bullets: [
      'Proactive IT planning instead of reactive firefighting',
      'A multi-year IT budget leadership can actually plan around',
      'Initiatives sequenced for impact, not urgency',
      'No more surprise end-of-life or capacity crises',
    ],
    image: {
      src: '/images/hero/consulting/pexels-pavel-danilyuk-6340648.jpg',
      alt: 'Team mapping out an IT roadmap',
    },
  },
  related: {
    heading: 'Explore more strategy & consulting services',
    links: [
      {
        slug: 'it-assessments-strategies',
        label: 'IT Assessments & Strategies',
        href: '/it-assessments-strategies/',
        description: 'In-depth evaluations of infrastructure, security, and compliance.',
      },
      {
        slug: 'vcio-vcto-vciso-services',
        label: 'vCIO, vCTO & vCISO Services',
        href: '/vcio-vcto-vciso-services/',
        description: 'Strategic IT leadership without the cost of a full-time executive.',
      },
      {
        slug: 'it-management-consulting',
        label: 'Strategy & Consulting Overview',
        href: '/it-management-consulting/',
        description: 'The full ITSco strategy program — leadership, roadmaps, and assessments.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'IT roadmap planning,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is a roadmap different from a one-time IT assessment?',
      answer: [
        'An assessment tells you where you are today; a roadmap tells you where to go and in what order. ITSco often starts with an assessment, then builds the roadmap on top of it — and revisits it as the business evolves.',
      ],
    },
    {
      question: 'How far out should an IT roadmap look?',
      answer: [
        'Typically 12 to 36 months. The near term is detailed and costed; the later horizon is directional. We revisit it regularly so it stays realistic as priorities shift.',
      ],
    },
  ],
  bookingUtm: 'it-roadmap-planning-bottom',
}
