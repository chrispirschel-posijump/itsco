// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "how much does IT services cost", "IT services pricing".

export const PAGE_TITLE =
  'How Much Do IT Services Cost? A Transparent 2026 Pricing Guide | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'How much do IT services actually cost? It is the question every business leader evaluating an IT provider eventually asks, and most pricing answers are deliberately vague. This guide gives you transparent ranges, explains what drives the variables, and walks through how to compare proposals from different providers without being misled.',
  },
  {
    type: 'p',
    text: 'Prices here are general ranges for businesses in the United States as of 2026. Specific quotes depend on environment complexity, the scope of services included, and the level of support required.',
  },

  { type: 'h2', text: 'The Common Pricing Models for IT Services' },

  { type: 'h3', text: 'Per User, Per Month' },
  {
    type: 'p',
    text: 'The dominant pricing model in managed IT services. A flat monthly fee per active user that covers helpdesk, monitoring, patching, basic security, and ongoing maintenance. Typical ranges: $100-$250 per user per month for fully managed IT services that include cybersecurity operations and strategic capacity.',
  },

  { type: 'h3', text: 'Per Device, Per Month' },
  {
    type: 'p',
    text: 'Pricing based on the number of devices (laptops, servers, network gear) under management rather than the number of users. Typical ranges: $50-$150 per workstation per month; $200-$500 per server per month; network devices priced separately. Less common than per-user pricing today but still used by some providers.',
  },

  { type: 'h3', text: 'All-You-Can-Eat Flat Fee' },
  {
    type: 'p',
    text: 'A single monthly fee for everything in scope regardless of user count or device count. Provides maximum cost predictability but often less transparency about what is included. Typical ranges: $3,000-$15,000+ per month depending on business size and scope.',
  },

  { type: 'h3', text: 'Time and Materials (T&M) / Hourly' },
  {
    type: 'p',
    text: 'Pay only for the time spent. Typical hourly rates: $125-$250/hr for IT support work; $175-$300/hr for senior engineering; $250-$400/hr for specialty work (security, cloud architecture). Common for break-fix engagements and project work. Cost-effective for businesses with very low service usage; expensive for typical needs.',
  },

  { type: 'h3', text: 'Project-Based Pricing' },
  {
    type: 'p',
    text: 'Fixed bid for a defined project (cloud migration, security assessment, M&A integration). Typical projects range from $5,000 for small assessments to $100,000+ for major migrations. Quoted up front with defined scope and milestones.',
  },

  { type: 'h2', text: 'What Drives IT Services Cost Up or Down' },
  {
    type: 'p',
    text: 'The biggest variables in IT services pricing:',
  },
  {
    type: 'ul',
    items: [
      'User and device count — more users and devices means more cost',
      'Scope of services — full managed IT including security and strategic capacity costs more than helpdesk only',
      'Hours of support coverage — 24/7 coverage costs more than business hours',
      'Compliance requirements — SOC 2, HIPAA, PCI DSS, NIST 800-171 add ongoing cost',
      'Number of locations and remote workers — multi-site complexity adds cost',
      'Specialized systems — industry-specific applications, on-premises servers, OT/ICS networks',
      'Existing IT debt — environments needing major remediation cost more in onboarding',
      'Geographic location — costs vary by metro area',
    ],
  },

  { type: 'h2', text: 'What Is Usually Included vs. What Is Extra' },
  {
    type: 'p',
    text: 'Worth understanding before comparing proposals:',
  },

  { type: 'h3', text: 'Typically Included in Managed IT Services' },
  {
    type: 'ul',
    items: [
      '24/7 monitoring of servers, endpoints, networks',
      'Helpdesk support during defined hours',
      'Patch management and routine maintenance',
      'Basic cybersecurity (endpoint protection, email security, MFA)',
      'Backup management',
      'Standard onboarding and offboarding',
      'Standard reporting',
    ],
  },

  { type: 'h3', text: 'Typically Separate or Upcharged' },
  {
    type: 'ul',
    items: [
      'Hardware and software purchases',
      'Major projects (cloud migrations, ERP upgrades, infrastructure refresh)',
      'Advanced security (SOC, MDR, penetration testing)',
      'Compliance program operation',
      'After-hours support on T&M plans',
      'On-site visits beyond a defined limit',
      'Software license costs (M365, security tools, etc.)',
    ],
  },

  { type: 'h2', text: 'A Realistic Cost Example' },
  {
    type: 'p',
    text: 'For a mid-sized business with 100 users, multi-site, moderate compliance scope (SOC 2 readiness), and full managed IT services including 24/7 SOC monitoring:',
  },
  {
    type: 'ul',
    items: [
      'Managed IT services: $14,000-$22,000/month',
      'Microsoft 365 / Google Workspace licensing: $2,500-$4,500/month',
      'Specialty security tools licensing: $1,500-$3,500/month',
      'Annual compliance support: $30,000-$80,000 (depending on scope)',
      'Quarterly strategic capacity (vCIO): typically included in managed services',
      'Major projects: separately quoted as professional services',
    ],
  },
  {
    type: 'p',
    text: 'Total monthly run rate roughly $20,000-$32,000 for ongoing services, plus project work as needed. The same scope handled internally would require multiple senior hires plus all the licensing — typically $50,000-$80,000/month fully loaded for less coverage.',
  },

  { type: 'h2', text: 'How to Compare Proposals From Different Providers' },
  {
    type: 'p',
    text: 'When proposals look different, the comparison gets confusing fast. A framework that helps:',
  },
  {
    type: 'ul',
    items: [
      'Insist on a written scope document — what is in, what is out',
      'Ask about hours of support coverage and after-hours rates',
      "Confirm whether cybersecurity (SOC, MDR, MFA) is included or separate",
      "Ask about onboarding cost and what is included",
      "Request a 12-month total cost estimate, not just the monthly fee",
      "Get clarity on offboarding terms and exit costs",
      "Ask for three references in your industry and size range",
    ],
  },

  { type: 'h2', text: 'Why the Lowest Bid Is Usually Not the Right Answer' },
  {
    type: 'p',
    text: "The IT services market is competitive, but providers competing only on price typically cut quality somewhere visible (helpdesk staffing, security coverage, strategic capacity). Most businesses that pick the cheapest bid end up changing providers within 18 months — and the switching cost erases any savings.",
  },
  {
    type: 'p',
    text: 'Better approach: identify the 3-5 providers with the right scope and quality match for your business, then negotiate price among that short list. Decide on value, not on price first.',
  },

  { type: 'h2', text: 'The Bottom Line' },
  {
    type: 'p',
    text: 'IT services cost what they cost because the work — 24/7 coverage, cybersecurity operations, engineering depth across multiple domains, strategic planning — is real and ongoing. The right comparison is not against your imagined hourly rate; it is against the cost of building the equivalent capability internally, plus the operational outcomes the partner delivers.',
  },
  {
    type: 'p',
    text: 'ITSco provides transparent, scope-clear pricing for managed IT services, cybersecurity, cloud, and strategic IT capacity. If you would like a no-pressure scoping conversation with a real cost estimate for your specific business, a free consultation is the right starting point.',
  },
] as const
