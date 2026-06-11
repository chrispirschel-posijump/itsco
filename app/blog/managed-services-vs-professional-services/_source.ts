// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "managed services vs professional services".

export const PAGE_TITLE =
  'Managed Services vs. Professional Services: What\'s the Difference? | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: '"Managed services" and "professional services" sound like the same thing — both are IT firms doing work on your behalf. In practice, they describe two completely different engagement models, and confusing them is one of the most common reasons IT vendor relationships go sideways.',
  },
  {
    type: 'p',
    text: 'This guide explains the difference between managed services and professional services in plain English, walks through which work fits each model, and shows how the best IT engagements typically combine both.',
  },

  { type: 'h2', text: 'Managed Services: Ongoing Operation of Your IT Environment' },
  {
    type: 'p',
    text: 'Managed services is a subscription. A managed services provider (MSP) takes ongoing responsibility for monitoring, supporting, securing, and operating your IT environment for a flat monthly fee. The scope is defined up front and stays consistent month over month. The relationship is continuous, not project-based.',
  },
  {
    type: 'p',
    text: 'What managed services typically include:',
  },
  {
    type: 'ul',
    items: [
      "24/7 monitoring of servers, endpoints, networks, and cloud services",
      'Helpdesk support for end users',
      'Patch management and routine maintenance',
      "Cybersecurity operations (SOC monitoring, MDR, endpoint protection)",
      'Backup and disaster recovery management',
      "Strategic planning (vCIO services, roadmap, budget recommendations)",
    ],
  },

  { type: 'h2', text: 'Professional Services: Defined Projects With Defined Outcomes' },
  {
    type: 'p',
    text: 'Professional services is a project-based engagement. You hire the firm to deliver a specific outcome — a cloud migration, an ERP implementation, a security assessment, a network redesign — within a defined scope, timeline, and budget. The engagement ends when the project is complete.',
  },
  {
    type: 'p',
    text: 'Professional services typically include:',
  },
  {
    type: 'ul',
    items: [
      'Cloud migrations (Azure, AWS, hybrid)',
      'M&A IT integration',
      'ERP, CRM, and other major platform implementations',
      'Network architecture design and rebuilds',
      'Security assessments, penetration testing, and SOC 2 readiness',
      'Identity and access management overhauls',
      "Custom development and integration work",
    ],
  },

  { type: 'h2', text: 'The Critical Differences' },

  { type: 'h3', text: '1. Pricing Model' },
  {
    type: 'p',
    text: 'Managed services use a flat monthly subscription. Professional services are typically priced as a fixed bid for the project or as time-and-materials with a defined cap.',
  },

  { type: 'h3', text: '2. Duration' },
  {
    type: 'p',
    text: 'Managed services are continuous — they have a start date but no defined end. Professional services are bounded — they have a defined scope, milestones, and a clear completion point.',
  },

  { type: 'h3', text: '3. What You Are Buying' },
  {
    type: 'p',
    text: 'With managed services, you are buying ongoing performance against a service level: uptime, response time, security posture, satisfaction. With professional services, you are buying delivery of a specific outcome by a specific date.',
  },

  { type: 'h3', text: '4. Risk Allocation' },
  {
    type: 'p',
    text: "Managed services move ongoing operational risk to the provider — they are responsible for the environment running reliably. Professional services move project delivery risk to the provider — they are responsible for the project finishing on time, on scope, and on budget.",
  },

  { type: 'h3', text: '5. Internal Effort Required' },
  {
    type: 'p',
    text: 'Managed services minimize ongoing internal effort — once onboarding is complete, the MSP runs the environment in the background. Professional services require focused internal effort during the project — your team is collaborating with the firm to deliver the outcome.',
  },

  { type: 'h2', text: 'How the Two Work Together' },
  {
    type: 'p',
    text: 'The best IT engagements typically combine both models. A managed services subscription covers the ongoing operation of your environment. Project work — a cloud migration, a security overhaul, an M&A integration — gets scoped and delivered separately as professional services. The same firm can do both, but the engagements are structured and priced differently because they are doing different work.',
  },
  {
    type: 'p',
    text: 'A common pattern looks like this: a business engages an MSP for managed services on a per-user monthly fee. During year one, a major Microsoft 365 migration is needed — that gets quoted as a professional services project on a fixed bid. The MSP delivers the migration, hands the new environment back into managed services scope, and the monthly fee continues.',
  },

  { type: 'h2', text: 'When Should You Use Each?' },

  { type: 'h3', text: 'Use Managed Services When:' },
  {
    type: 'ul',
    items: [
      "You need continuous, ongoing IT operations — not a one-time fix",
      "You want predictable monthly cost instead of variable invoices",
      "You need 24/7 cybersecurity monitoring you cannot staff internally",
      "You want strategic IT planning capacity that consistently happens",
      "You want one accountable team running your environment",
    ],
  },

  { type: 'h3', text: 'Use Professional Services When:' },
  {
    type: 'ul',
    items: [
      "You have a specific project with a defined outcome to deliver",
      "The work is significantly outside your team's day-to-day capabilities",
      "Failure or delay carries meaningful business consequences",
      "You need senior expertise for a bounded period",
      'You need accountability for delivery against a specific deadline',
    ],
  },

  { type: 'h2', text: 'A Common Mistake to Avoid' },
  {
    type: 'p',
    text: 'Trying to fold large professional services projects into a managed services subscription almost always goes badly. Projects need focused delivery accountability, defined milestones, and clear scope boundaries. Subscriptions deliver ongoing performance. Mixing them produces project delays, scope disputes, and a strained relationship.',
  },
  {
    type: 'p',
    text: 'The right pattern: keep the managed services scope clean, and quote major projects separately. Both engagements get delivered better when they stay structurally distinct.',
  },

  { type: 'h2', text: 'What This Means for You' },
  {
    type: 'p',
    text: 'When you are evaluating an IT firm — or reviewing a relationship you already have — pay attention to how they handle this distinction. The right firm will be clear about what is in your managed services scope and what gets quoted separately as professional services. Vagueness here predicts vagueness about everything else.',
  },
  {
    type: 'p',
    text: 'If you would like to talk through how managed services and professional services would fit your specific business, ITSco offers a free scoping consultation. We can map your current needs to the right engagement model and give you transparent pricing on both sides.',
  },
] as const
