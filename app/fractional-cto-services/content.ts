// Content for /fractional-cto-services/
// Rewrite page — new page (in Nav, no live equivalent). Fresh ROI-focused
// content. Primary keyword: "fractional CTO services".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'Fractional CTO Services',
    description:
      'ITSco fractional CTO services — senior technology leadership and strategy scaled to your size and budget, without a full-time hire. Book a free consultation.',
    canonical: 'https://www.itsco.com/fractional-cto-services/',
  },
  serviceName: 'Fractional CTO Services',
  parent: { name: 'IT Strategy & Consulting', href: '/it-management-consulting/' },
  hero: {
    eyebrow: 'Strategy · Fractional CTO',
    headlineLead: 'A senior technology leader,',
    headlineAccent: 'for the time you need.',
    body: "Not every business needs a full-time CTO — but every business needs CTO-level thinking. ITSco's fractional CTO gives you senior technology leadership scaled to your size and budget.",
    utmSuffix: 'fractional-cto-services-hero',
  },
  heroImage: {
    src: '/images/supporting/consulting/professional-services-hero-DzMetF_7.jpg',
    alt: 'ITSco fractional CTO advising a leadership team',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: 'CTO-level leadership,',
    headlineAccent: 'right-sized.',
    paragraphs: [
      "Hiring a full-time CTO is a major commitment many growing businesses aren't ready for. A fractional CTO delivers the strategy, judgment, and technical leadership — for a fraction of the cost and commitment.",
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of executive technology leadership' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: 'What a Fractional CTO Does',
    headlineLead: 'Executive technology leadership,',
    headlineAccent: 'on your terms.',
  },
  capabilities: [
    {
      slug: 'fcto-strategy',
      title: 'Technology Strategy',
      description: 'A clear technology direction tied to your business plan — not just keeping the lights on.',
    },
    {
      slug: 'fcto-roadmap',
      title: 'Roadmap & Budget Ownership',
      description: 'Ownership of the IT roadmap and budget, so technology spend is deliberate.',
    },
    {
      slug: 'fcto-vendor',
      title: 'Vendor & Architecture Decisions',
      description: 'Senior judgment on the platform, vendor, and architecture choices that are hard to undo.',
    },
    {
      slug: 'fcto-team',
      title: 'Team & Resource Guidance',
      description: 'Guidance on building, structuring, and getting the most from your IT team.',
    },
    {
      slug: 'fcto-risk',
      title: 'Risk & Security Oversight',
      description: 'An executive eye on security, compliance, and continuity risk.',
    },
    {
      slug: 'fcto-board',
      title: 'Board & Leadership Reporting',
      description: 'Technology translated into business terms for your leadership team and board.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Executive judgment,',
    headlineAccent: 'without the executive hire.',
    paragraphs: [
      'A fractional CTO gives a growing business the one thing it usually lacks — a senior, accountable voice for technology at the leadership table.',
    ],
    bullets: [
      'CTO-level strategy without a CTO-level salary',
      'Deliberate technology decisions, not default ones',
      'A leadership-table voice for technology',
      'Scale the engagement up or down as you grow',
    ],
    image: {
      src: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      alt: 'Fractional CTO presenting to company leadership',
    },
  },
  related: {
    heading: 'Explore more strategy & consulting services',
    links: [
      {
        slug: 'vcio-vcto-vciso-services',
        label: 'vCIO, vCTO & vCISO Services',
        href: '/vcio-vcto-vciso-services/',
        description: 'Virtual CIO, CTO, and CISO leadership matched to your needs.',
      },
      {
        slug: 'it-roadmap-planning',
        label: 'IT Roadmap Planning',
        href: '/it-roadmap-planning/',
        description: 'A prioritized, costed technology roadmap aligned to your business goals.',
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
    headlineLead: 'Fractional CTO services,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is a fractional CTO different from a vCIO?',
      answer: [
        'They overlap, and ITSco offers both. A vCIO leans toward IT operations and alignment; a fractional CTO leans toward technology strategy, platform direction, and engineering leadership. We will help you decide which fits — or blend them.',
      ],
    },
    {
      question: "How much of a fractional CTO's time do we get?",
      answer: [
        "As much as the role needs — a set number of days a month, scaled to your size and stage. It can grow as you grow, and there's no obligation to convert to a full-time hire.",
      ],
    },
  ],
  bookingUtm: 'fractional-cto-services-bottom',
}
