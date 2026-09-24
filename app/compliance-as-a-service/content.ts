// Content for /compliance-as-a-service/
// Rewrite page — fresh ROI-focused content. Primary keyword: "compliance as a service".
//
// DRAFT FOR MIKE'S REVIEW — revised 2026-09-24.
// Sections marked [NEW] or [REVISED] respond to what Mike asked for across the
// Aug 19 and Sep 2 calls. His words, and where they landed:
//
//   "a lot of MSPs that we compete with don't want to deal with compliance ...
//    they're not really interested in highly complex, and that's kind of where
//    we live"                                    → intro paragraph 2, hero body
//   "build it into your recurring costs so that you're always prepared for the
//    next audit"                                 → intro paragraph 3, outcomes
//   "we want to add FDA and the pharma industry stuff"
//                                                → capabilities, FAQ
//   the law firm "taking a lot of money through trust ... I've never seen
//    anybody write about those two kind of obscure things"
//                                                → capabilities, FAQ
//   "if you come to the website and there's no differentiator there, we might
//    look like everybody else"                   → the whole revision
//
// The specific regulations named below are educated guesses from those calls,
// not confirmed scope. Mike needs to confirm which ITSco actually supports
// before this ships — naming a framework the team can't deliver against is
// worse than staying generic.

import type { ServiceSubContent } from '@/components/ServiceSubPage'

export const CONTENT: ServiceSubContent = {
  meta: {
    // [REVISED] Leads with the differentiator rather than a framework list.
    title: 'Compliance as a Service | Managed Compliance for Regulated Businesses',
    description:
      'Compliance managed as an ongoing service, not a pre-audit scramble — HIPAA, CMMC, SOC 2, PCI-DSS, FDA 21 CFR Part 11, and the requirements most MSPs decline. Book a free consultation.',
    canonical: 'https://www.itsco.com/compliance-as-a-service',
  },
  serviceName: 'Compliance as a Service',
  parent: { name: 'Cybersecurity & Compliance', href: '/cybersecurity/' },
  hero: {
    eyebrow: 'Cybersecurity · Compliance as a Service',
    headlineLead: 'Compliance, kept current —',
    headlineAccent: 'every day, not just at audit time.',
    // [REVISED] Second sentence adds the complexity-as-niche positioning.
    body: "Audits are point-in-time. Compliance is continuous. ITSco keeps you aligned to the frameworks you answer to — including the complicated ones other providers would rather not take on.",
    utmSuffix: 'compliance-as-a-service-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
    alt: 'Reviewing compliance documentation and controls',
  },
  intro: {
    eyebrow: 'The Opportunity',
    headlineLead: "Compliance isn't a project.",
    headlineAccent: "It's a posture.",
    paragraphs: [
      'Most businesses scramble before audits and drift between them. Compliance as a Service replaces that cycle with continuous posture management — policies, controls, evidence, and reporting maintained as part of how you operate.',
      // [NEW] The differentiator. Stated as ITSco's own observation rather than
      // an industry statistic, because there isn't a citable one.
      "Here's the part most providers won't say out loud: plenty of them would rather not take this work. Compliance means documentation, evidence, auditor questions, and requirements that change without notice. It is easier to sell monitoring and leave the regulated parts to someone else. That is precisely the work we have built around — and the reason complicated businesses tend to find their way to us after being turned away elsewhere.",
      // [NEW] Mike's recurring-cost framing, near-verbatim.
      'It is also why compliance belongs in your monthly IT cost rather than in a surprise project invoice three weeks before an audit. Build it into what you already spend, and being audit-ready stops being an event you brace for.',
    ],
  },
  stats: [
    { value: '0%', label: 'Of our clients have suffered a serious security breach' },
    // [REVISED] Founded 1996 — "25+" was understating it by five years.
    { value: '30', label: 'Years of compliance and security expertise' },
    { value: '24/7', label: 'Continuous compliance posture monitoring' },
  ],
  capabilitiesHeading: {
    eyebrow: "What's Included",
    headlineLead: 'Compliance, run',
    headlineAccent: 'as a managed service.',
  },
  capabilities: [
    {
      slug: 'caas-framework-alignment',
      title: 'Framework Alignment',
      description:
        'Continuous alignment with HIPAA, PCI-DSS, SOC 2, NIST CSF, ISO 27001, and CMMC — the frameworks most businesses answer to.',
    },
    {
      // [NEW] Mike's FDA / pharma ask from Aug 19.
      slug: 'caas-life-sciences',
      title: 'Life Sciences & Pharma',
      description:
        'FDA 21 CFR Part 11 electronic records and signatures, validated systems, and the audit trails life sciences companies are held to.',
    },
    {
      // [NEW] Mike's law-firm trust-account example from Aug 19 — the thing he
      // said he had "never seen anybody write about."
      slug: 'caas-legal-trust',
      title: 'Legal & Trust Accounting',
      description:
        'IOLTA and client trust-account recordkeeping, matter confidentiality, and the retention controls state bar rules expect of the systems holding them.',
    },
    {
      // [NEW] Financial services depth beyond the generic list.
      slug: 'caas-financial-services',
      title: 'Financial Services',
      description:
        'GLBA Safeguards Rule programs, SEC and FINRA retention and archiving, and the access controls examiners ask to see evidence of.',
    },
    {
      // [NEW] Defense — CMMC was listed but CUI handling never was.
      slug: 'caas-defense-cui',
      title: 'Defense & Controlled Data',
      description:
        'NIST 800-171 controls, CUI handling and exchange, and CMMC readiness for contractors and the suppliers who serve them.',
    },
    {
      slug: 'caas-continuous-monitoring',
      title: 'Continuous Control Monitoring',
      description:
        'Security and compliance controls watched continuously — gaps surfaced early, not at audit time.',
    },
    {
      slug: 'caas-policy-management',
      title: 'Policy & Procedure Management',
      description:
        'Policies authored, maintained, and kept current as your business and the regulations both change.',
    },
    {
      slug: 'caas-control-testing',
      title: 'Control Testing & Evidence',
      description:
        'Controls tested on a schedule, with evidence collected and organized so audits are routine, not a fire drill.',
    },
    {
      slug: 'caas-audit-prep',
      title: 'Audit Preparation & Support',
      description:
        'Pre-audit readiness reviews, auditor liaison, and remediation support throughout the engagement.',
    },
    {
      slug: 'caas-reporting',
      title: 'Compliance Reporting',
      description:
        'Clear, on-demand reporting your leadership, board, and auditors can act on.',
    },
  ],
  outcomes: {
    eyebrow: 'The Payoff',
    headlineLead: 'Audit-ready,',
    headlineAccent: 'every day.',
    paragraphs: [
      'When compliance is continuous, audits stop being events. They become a routine confirmation of a posture you already maintain.',
    ],
    bullets: [
      'Continuous compliance instead of pre-audit scramble',
      // [NEW] The recurring-cost outcome, stated as a benefit.
      'A predictable monthly cost instead of emergency project invoices',
      'Posture maintained as your business and the regulations change',
      'Evidence ready for any audit, anytime',
      // [NEW] Speaks to the buyer who was turned away by another provider.
      'A provider that takes on the complicated requirements rather than routing around them',
      'Reporting your board and auditors can act on',
    ],
    image: {
      src: '/images/supporting/consulting/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
      alt: 'Compliance reporting dashboard',
    },
  },
  related: {
    heading: 'Explore more cybersecurity & compliance services',
    links: [
      {
        slug: 'security-audits-compliance',
        label: 'Security Audits & Compliance',
        href: '/security-audits-compliance/',
        description: 'In-depth point-in-time audits and remediation roadmaps that keep you compliant.',
      },
      {
        slug: 'cyber-risk-assessment',
        label: 'Cyber Risk Assessment',
        href: '/cyber-risk-assessment/',
        description: 'A clear-eyed view of your exposure and a prioritized plan to close it.',
      },
      {
        slug: 'cybersecurity-consulting-services',
        label: 'Cybersecurity Consulting',
        href: '/cybersecurity-consulting-services/',
        description: 'Strategic security guidance and execution from a vendor-neutral team.',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Compliance as a Service,',
    headlineAccent: 'answered.',
  },
  faqs: [
    {
      question: 'How is this different from Security Audits & Compliance?',
      answer: [
        'Audits are point-in-time engagements that tell you where you stand. Compliance as a Service is ongoing — it keeps you compliant between audits, so the next audit is a confirmation rather than a fire drill. Most clients use both: the audits validate, the service maintains.',
      ],
    },
    {
      question: 'Which frameworks do you support?',
      answer: [
        'The major ones — HIPAA, PCI-DSS, SOC 2, NIST CSF, ISO 27001, CMMC, GDPR — plus the industry-specific requirements our clients answer to: FDA 21 CFR Part 11 in life sciences, GLBA and SEC/FINRA retention in financial services, NIST 800-171 and CUI handling for defense work, FFIEC, HITRUST, and trust-account recordkeeping for law firms.',
      ],
    },
    {
      // [NEW] The boundary. Protects ITSco and reads as candor rather than
      // hedging — worth keeping even if Mike trims elsewhere.
      question: 'Do you handle the legal side of compliance too?',
      answer: [
        'No, and you should be wary of an IT provider who says otherwise. Your attorney and your auditor determine what the regulations require of your business. We own the technology side of meeting them — the controls, the evidence, the documentation, and the systems that hold your regulated data — and we work alongside your counsel rather than in place of them.',
      ],
    },
    {
      // [NEW] Mike's recurring-cost point, in the buyer's words.
      question: 'How is this priced?',
      answer: [
        'It folds into your monthly managed services cost rather than arriving as a separate project fee. Scope depends on which frameworks apply, how complex your environment is, and what evidence your auditors expect — which is what the first conversation is for. The point is that being audit-ready becomes a line item you plan for, not a bill that surprises you.',
      ],
    },
    {
      // [NEW] Speaks directly to the prospect Mike described: turned away elsewhere.
      question: 'Our last provider said our requirements were too complicated. Is that a problem?',
      answer: [
        "It is usually the reason companies call us. Multi-framework environments, operational technology on the same network as business systems, regulated data that has to move between organizations — these are the engagements many providers decline. We have spent 30 years on them. Tell us what you are actually held to and we will tell you honestly whether we are the right fit.",
      ],
    },
  ],
  bookingUtm: 'compliance-as-a-service-bottom',
}
