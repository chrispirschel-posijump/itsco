// Content for /it-due-diligence-mergers-acquisitions/
// Rewrite page — new page (in Nav, no live equivalent). Fresh ROI-focused
// content. Primary keyword: "IT due diligence mergers acquisitions".

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'IT Due Diligence for Mergers & Acquisitions',
    description:
      'ITSco IT due diligence for M&A — surface hidden technology cost and risk before you sign, and plan the integration before day one. Book a free consultation.',
    canonical: 'https://www.itsco.com/it-due-diligence-mergers-acquisitions',
  },
  serviceName: 'IT Due Diligence for M&A',
  parent: { name: 'IT Strategy & Consulting', href: '/it-management-consulting/' },
  hero: {
    eyebrow: 'Strategy · M&A Due Diligence',
    headlineLead: 'IT due diligence that',
    headlineAccent: 'de-risks the deal.',
    body: "In a merger or acquisition, the target's technology can hide real cost and risk. ITSco's IT due diligence surfaces it before you sign — and plans the integration before day one.",
    utmSuffix: 'it-due-diligence-ma-hero',
  },
  heroImage: {
    src: '/images/hero/consulting/pexels-ketut-subiyanto-4963438.jpg',
    alt: 'Reviewing IT due diligence findings for an acquisition',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: "Know what you're buying —",
    headlineAccent: 'technically.',
    paragraphs: [
      'Financials and legals get scrutinized in every deal. The IT estate often does not — until integration begins and the surprises start. IT due diligence closes that gap.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years in IT assessment and infrastructure strategy' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: 'What We Evaluate',
    headlineLead: "The target's technology,",
    headlineAccent: 'fully understood.',
  },
  capabilities: [
    {
      slug: 'ma-infrastructure-review',
      title: 'Infrastructure & Systems Review',
      description: "A full picture of the target's hardware, software, cloud, and network estate.",
    },
    {
      slug: 'ma-security-review',
      title: 'Security & Risk Review',
      description: "The target's cybersecurity posture, exposure, and any active or latent threats.",
    },
    {
      slug: 'ma-cost-review',
      title: 'Cost & Contract Review',
      description: 'Licensing, vendor contracts, technical debt, and the spend hiding inside them.',
    },
    {
      slug: 'ma-scalability',
      title: 'Scalability Assessment',
      description: "Whether the target's technology can carry the combined, post-deal business.",
    },
    {
      slug: 'ma-integration-planning',
      title: 'Integration Planning',
      description: 'A practical plan to merge systems, data, and teams — before day one, not after.',
    },
    {
      slug: 'ma-valuation-input',
      title: 'Valuation & Risk Input',
      description: 'Clear technical findings that inform the deal price, terms, and conditions.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'No technology surprises',
    headlineAccent: 'after the signature.',
    paragraphs: [
      'The worst M&A technology problems are the ones discovered after close. IT due diligence moves that discovery to before you sign.',
    ],
    bullets: [
      'Hidden IT cost and risk surfaced before you sign',
      'Technical findings that strengthen your negotiating position',
      'An integration plan ready before day one',
      "Confidence the target's tech can carry the combined business",
    ],
    image: {
      src: '/images/supporting/consulting/anthony-tyrrell-Bl-LiSJOnlY-unsplash.jpg',
      alt: 'Business leaders finalizing an acquisition',
    },
  },
  related: {
    heading: 'Explore more strategy & consulting services',
    links: [
      {
        slug: 'tech-due-diligence-for-businesses',
        label: 'Technology Due Diligence',
        href: '/tech-due-diligence-for-businesses/',
        description: 'Clear, actionable technology assessment for investors and acquirers.',
      },
      {
        slug: 'it-assessments-strategies',
        label: 'IT Assessments & Strategies',
        href: '/it-assessments-strategies/',
        description: 'In-depth evaluations of infrastructure, security, and compliance.',
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
    headlineLead: 'IT due diligence for M&A,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is this different from your Technology Due Diligence service?',
      answer: [
        "They're closely related — IT Due Diligence for M&A applies the same rigor specifically to a merger or acquisition, with added focus on post-deal integration planning and how findings affect deal terms. We'll scope to your situation.",
      ],
    },
    {
      question: 'When in the deal process should IT due diligence happen?',
      answer: [
        'Before close — ideally during the diligence window alongside financial and legal review, so technical findings can still influence price, terms, and conditions. We can also fast-track a review when timelines are tight.',
      ],
    },
  ],
  bookingUtm: 'it-due-diligence-ma-bottom',
}
