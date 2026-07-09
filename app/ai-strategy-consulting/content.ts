// Content for /ai-strategy-consulting/
//
// Rewrite page — fresh ROI-focused content. New page (no legacy URL).
// Built so the vCIO/vCTO/vCISO/vCAIO page can stop linking into a 404.
// Audience: CEO / COO / CFO weighing where AI delivers measurable
// business value and where the risks live. Voice: practical,
// anti-hype, framework-grounded. Cross-linked to vCAIO leadership,
// AI Governance, and AI Readiness Assessment.

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    title: 'AI Strategy Consulting | Practical AI Roadmaps',
    description:
      'ITSco AI strategy consulting — opportunity mapping, governance, and phased roadmaps that turn AI investments into measurable business outcomes. Book a free consultation.',
    canonical: 'https://www.itsco.com/ai-strategy-consulting/',
  },
  serviceName: 'AI Strategy Consulting',
  parent: { name: 'IT Strategy & Consulting', href: '/it-management-consulting/' },
  hero: {
    eyebrow: 'Strategy · AI Strategy Consulting',
    headlineLead: 'AI you can actually use —',
    headlineAccent: 'tied to outcomes, not hype.',
    body: "Most AI investments stall in pilot. ITSco's AI Strategy Consulting maps where AI delivers measurable value in your business, sequences the work in phases your team can absorb, and stays grounded in real ROI — not the demo.",
    utmSuffix: 'ai-strategy-consulting-hero',
  },
  heroImage: {
    src: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    alt: 'Executive leadership team reviewing an AI roadmap in a boardroom',
  },
  intro: {
    eyebrow: 'The Promise',
    headlineLead: 'AI investment,',
    headlineAccent: 'with a return.',
    paragraphs: [
      'AI is moving faster than most executive teams can evaluate it. Vendors promise transformation, pilots multiply, and a year later very little has moved the business. ITSco helps you decide what AI is worth doing, what it will cost, what it will return, and how to govern it — before you commit budget or risk exposure.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    { value: '25+', label: 'Years of strategic IT and security leadership' },
    { value: '60%', label: 'Of our clients have stayed with us for 5+ years' },
  ],
  capabilitiesHeading: {
    eyebrow: 'What an Engagement Includes',
    headlineLead: 'A pragmatic AI strategy,',
    headlineAccent: 'grounded in your business.',
  },
  capabilities: [
    {
      slug: 'ai-opportunity-mapping',
      title: 'AI Opportunity Mapping',
      description:
        'Identify the workflows, decisions, and operational bottlenecks where AI delivers measurable ROI — and the ones where it does not.',
    },
    {
      slug: 'ai-readiness-assessment',
      title: 'Readiness Assessment',
      description:
        'A clear-eyed gap analysis of data, security, infrastructure, and skills — what you have, what you need, and what to fix before you scale.',
    },
    {
      slug: 'ai-strategy-roadmap',
      title: 'AI Strategy & Roadmap',
      description:
        'A phased roadmap with prioritized initiatives, dependencies, budget estimates, and a sequencing your team can actually absorb.',
    },
    {
      slug: 'ai-vendor-platform-selection',
      title: 'Vendor & Platform Selection',
      description:
        'Vendor-neutral evaluation across Microsoft Copilot, OpenAI, Anthropic, Google, and open models — chosen for fit, not pipeline.',
    },
    {
      slug: 'ai-governance-risk',
      title: 'Governance & Risk Framework',
      description:
        'Policies, controls, and oversight that align with GLBA, HIPAA, SOC 2, and the AI-specific risk areas your auditors and customers are starting to ask about.',
    },
    {
      slug: 'ai-pilot-design',
      title: 'Pilot Design & Measurement',
      description:
        'Pilots designed against measurable outcomes — defined metrics, success thresholds, exit criteria — so you know whether to scale or shut down.',
    },
  ],
  outcomes: {
    eyebrow: 'The Risk',
    headlineLead: 'Why AI without strategy',
    headlineAccent: 'goes sideways.',
    paragraphs: [],
    tone: 'risk',
    bullets: [
      'Pilots multiply, none scale, and a year of investment produces no measurable business outcome.',
      'Sensitive data leaks through unsanctioned tools your team is using anyway, exposing GLBA, HIPAA, or contractual obligations.',
      'AI features get bolted on to existing systems without the data, security, or skills foundation to actually use them — and the vendor invoices keep arriving.',
      'Compliance, legal, and customers start asking about AI governance and you have no defensible answer.',
      'A competitor figures out where AI compounds operational leverage in your industry — and starts taking your customers.',
    ],
    image: {
      src: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
      alt: 'Leadership team weighing AI investment options against business risk',
    },
  },
  related: {
    heading: 'Explore more strategy & AI services',
    links: [
      {
        slug: 'vcaio-leadership',
        label: 'vCIO, vCTO, vCISO & vCAIO Services',
        href: '/vcio-vcto-vciso-services/',
        description:
          'Ongoing virtual executive leadership — including a vCAIO for organizations that need AI direction continuously, not project-by-project.',
      },
      {
        slug: 'ai-governance',
        label: 'AI Governance',
        href: '/ai-governance/',
        description:
          'The policy, control, and oversight frameworks that keep AI adoption aligned with your security and compliance obligations.',
      },
      {
        slug: 'ai-readiness-assessment',
        label: 'AI Readiness Assessment',
        href: '/ai-readiness-assessment/',
        description:
          'A focused readiness evaluation — data, security, infrastructure, and skills — before you commit to a full AI roadmap.',
      },
      {
        slug: 'ai-automation',
        label: 'AI & Automation Overview',
        href: '/ai-automation/',
        description:
          'The full ITSco AI program — strategy, governance, automation, and adoption.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'AI strategy consulting,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'Do you build the AI, or just advise on it?',
      answer: [
        "Both, depending on what you need. The strategy engagement is consulting — opportunity mapping, readiness, roadmap, governance, vendor selection. Once strategy is in place, ITSco can build, deploy, and operate the AI workloads through our broader managed services and engineering teams, or we can advise while your team or another integrator executes. We don't tie the strategy work to a build mandate.",
      ],
    },
    {
      question: 'How do you measure ROI on AI initiatives?',
      answer: [
        "Each prioritized initiative gets a target outcome attached to it before pilot — typically a measurable business metric (hours saved per week, cycle time reduced, conversion rate lifted, error rate dropped, headcount cost avoided). Pilots run against defined success thresholds and explicit exit criteria, so we know within weeks — not quarters — whether to scale, adjust, or stop. AI without measurable ROI doesn't move past pilot in our engagements.",
      ],
    },
    {
      question: 'How is this different from your vCAIO leadership?',
      answer: [
        "AI Strategy Consulting is a focused engagement — typically four to twelve weeks — that produces a strategy, roadmap, and governance framework. The vCAIO (Virtual Chief AI Officer) service is ongoing executive leadership, embedded in your team across months and years to drive execution. Most clients start with the strategy engagement, then continue with vCAIO support if they want sustained AI leadership without a full-time hire.",
      ],
    },
    {
      question: 'What if our data and infrastructure aren\'t ready for AI?',
      answer: [
        "That is the most common starting state, and the AI Readiness Assessment portion of the engagement is designed exactly for it. We identify the foundation work — data quality, identity and access, security controls, integration architecture, skills — that has to happen before AI delivers value. Then we sequence the foundation work and the AI roadmap together, so you're not waiting two years to start, but also not building AI on top of a foundation that will fail it.",
      ],
    },
  ],
  bookingUtm: 'ai-strategy-consulting-bottom',
}
