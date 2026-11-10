// Content for /it-roadmap-planning/
// Rewrite page — fresh ROI-focused content. Primary keyword: "IT roadmap planning".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'IT Roadmap Planning Services',
    description:
      'ITSco IT roadmap planning — turn reactive IT spending into a clear, prioritized, costed multi-year plan aligned to your business goals. Book a free consultation.',
    canonical: 'https://www.itsco.com/it-roadmap-planning',
  },
  serviceName: 'IT Roadmap Planning',
  parent: { name: 'IT Strategy & Consulting', href: '/it-management-consulting' },
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
    { value: '30', label: 'Years of strategic IT planning' },
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
        label: 'IT Assessment Services',
        href: '/it-assessments-strategies',
        description: 'In-depth evaluations of infrastructure, security, and compliance.',
      },
      {
        slug: 'vcio-vcto-vciso-services',
        label: 'vCIO, vCTO & vCISO Services',
        href: '/vcio-vcto-vciso-services',
        description: 'Strategic IT leadership without the cost of a full-time executive.',
      },
      {
        slug: 'it-management-consulting',
        label: 'Strategy & Consulting Overview',
        href: '/it-management-consulting',
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
    // Buyer-question FAQs for People Also Ask and AI answers. Approved by
    // Chris, Nov 10, 2026.
    {
      question: 'What is an IT roadmap?',
      answer: [
        'An IT roadmap is a prioritized, costed plan for your technology over the next one to three years. It shows what to fix, replace, or add, in what order, and what each step costs, all tied to your business goals. It turns reactive IT spending into a budget leadership can plan around.',
      ],
    },
    {
      question: 'What does an IT roadmap include?',
      answer: [
        'A useful IT roadmap includes a review of your current systems, business priorities mapped to technology initiatives, a sequence for what happens first and next, a cost for each initiative, and plans for aging hardware, end-of-life software, and security gaps. ITSco revisits it as the business changes, so it stays a working plan.',
      ],
    },
    {
      question: 'How is a roadmap different from a one-time IT assessment?',
      answer: [
        'An assessment tells you where you are today; a roadmap tells you where to go and in what order. ITSco often starts with an assessment, then builds the roadmap on top of it, and revisits it as the business evolves.',
      ],
    },
    {
      question: 'How far out should an IT roadmap look?',
      answer: [
        'Typically 12 to 36 months. The near term is detailed and costed; the later horizon is directional. We revisit it regularly so it stays realistic as priorities shift.',
      ],
    },
    {
      question: 'Who should own the IT roadmap?',
      answer: [
        'Leadership should own the priorities, and a senior technology leader should own the plan itself. In companies without a CIO, that is often a [fractional or virtual CIO](/vcio-vcto-vciso-services) who keeps the roadmap current, ties it to the budget, and reports progress to the leadership team on a regular schedule.',
      ],
    },
  ],
  bookingUtm: 'it-roadmap-planning-bottom',
}
