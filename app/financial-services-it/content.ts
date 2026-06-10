// Content for /financial-services-it/
//
// Rewrite page — fresh ROI-focused content. Replaces the legacy
// /banking-and-financial-services-it/ URL (renamed per stakeholder
// request earlier in the build). Primary keyword: "financial services
// IT". Compliance keywords woven through hero, pillars, and FAQs:
// FFIEC, GLBA, SOX, PCI DSS, FDIC. Audience: CFO / COO of a community
// bank, credit union, regional financial institution, or wealth /
// advisory firm.

export const META = {
  title: 'Financial Services IT | Managed IT for Banks & Credit Unions | ITSco',
  description:
    'ITSco financial services IT — managed IT, cybersecurity, and compliance support built for banks, credit unions, and wealth firms. FFIEC-, GLBA-, SOX-, and PCI-aware. Book a free consultation.',
  canonical: 'https://www.itsco.com/financial-services-it/',
}

export const HERO = {
  eyebrow: 'Financial Services IT',
  headlineLead: 'IT that protects your charter,',
  headlineAccent: 'and your bottom line.',
  body: "Managed IT, cybersecurity, and compliance support built for community banks, credit unions, and wealth firms — under continuous FFIEC, GLBA, SOX, and PCI scrutiny. Predictable cost. Audit-ready posture. Strategic counsel before the examiner arrives.",
  utmSuffix: 'financial-services-it-hero',
}

export const HERO_IMAGE = {
  src: '/images/case-studies/banking.jpg',
  alt: 'Financial services professionals reviewing operational dashboards',
}

export const CAPABILITIES_HEADING = {
  eyebrow: 'Complete IT Solutions',
  headlineLead: 'Everything a financial',
  headlineAccent: 'institution needs.',
}

export const CAPABILITIES = [
  {
    slug: 'managed-it-services',
    title: 'Managed IT Services',
    description:
      'Proactive monitoring, helpdesk, and infrastructure management on a predictable monthly cost — designed around community-bank and credit-union operations.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & MSSP',
    description:
      '24/7 SOC, MDR, firewall management, and risk programs that reduce exposure before regulators or attackers find it.',
  },
  {
    slug: 'compliance-as-a-service',
    title: 'Compliance as a Service',
    description:
      'Continuous FFIEC, GLBA, SOX, and PCI DSS posture management — not a pre-audit scramble.',
  },
  {
    slug: 'backup-disaster-recovery',
    title: 'Backup & Disaster Recovery',
    description:
      'Tested business continuity and disaster recovery aligned with FFIEC business-continuity-management expectations.',
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    description:
      'Managed Azure, AWS, and hybrid cloud designed for financial workloads — with the controls examiners expect to see.',
  },
  {
    slug: 'managed-soc',
    title: 'Managed SOC & MDR',
    description:
      '24/7 detection, investigation, and response — staffed by analysts, not a tier-1 ticket queue.',
  },
  {
    slug: 'security-audits-compliance',
    title: 'Security Audits & Compliance',
    description:
      'Point-in-time audits, gap analyses, and remediation roadmaps that prepare you for IT examinations and PCI assessments.',
  },
  {
    slug: 'vcio-leadership',
    title: 'vCIO, vCTO & vCISO Services',
    description:
      'Strategic IT, security, and AI leadership for institutions that need C-suite expertise without a C-suite hire.',
  },
  {
    slug: 'it-staff-augmentation',
    title: 'IT Outsourcing & Staff Aug',
    description:
      'Co-managed support that scales your in-house team without scaling your headcount — or your hiring risk.',
  },
]

export const PILLARS = [
  {
    eyebrow: 'Compliance-First, By Design',
    headlineLead: 'Audit-ready every day,',
    headlineAccent: 'not just before the examiner shows up.',
    paragraphs: [
      "FFIEC examinations, GLBA safeguards, SOX controls, PCI DSS assessments — financial institutions answer to more overlapping frameworks than almost any other industry. ITSco builds compliance into the way your IT operates, not as a separate project that wakes up six weeks before an audit.",
      "Controls are continuously monitored, evidence is collected as work happens, and policies stay current with the regulations and your business. When the examiner arrives, you're not scrambling — you're handing over a posture you've already maintained.",
      "Our team has stood up SOC 2 Type 2 programs, prepared institutions for state and federal examinations, and supported PCI DSS assessments across multiple acquirers. We know what examiners ask for, in the order they ask for it.",
    ],
    image: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
    imageAlt: 'Reviewing compliance documentation across financial control frameworks',
    imageSide: 'right' as const,
  },
  {
    eyebrow: 'Cybersecurity Built for Financial Targets',
    headlineLead: 'Threat defense tuned',
    headlineAccent: 'to how attackers actually operate.',
    paragraphs: [
      "Financial institutions are a top target for ransomware operators, business-email-compromise crews, and state-affiliated actors. Generic managed security isn't enough — the controls have to match the threats and the regulatory expectations.",
      "ITSco runs a 24/7 SOC with MDR, SIEM correlation, vulnerability management, phishing-resistant MFA enforcement, and endpoint protection mapped to FFIEC Cybersecurity Assessment Tool expectations. Every layer is tuned to the techniques most active against financial services right now.",
      "And when something does land, our incident-response playbooks are pre-built for your environment — so you're hours into containment while peers are still trying to figure out what happened.",
    ],
    image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
    imageAlt: 'Security operations team monitoring threat activity across screens',
    imageSide: 'left' as const,
  },
  {
    eyebrow: 'Uptime That Protects Customer Trust',
    headlineLead: 'Continuity engineered',
    headlineAccent: 'for the moments that matter.',
    paragraphs: [
      "Members and customers don't tolerate banking outages. Regulators don't either. ITSco's business continuity and disaster recovery programs are designed against FFIEC BCM and your own recovery time and recovery point objectives — not generic 'cloud backup' that may or may not restore when you need it.",
      "Recovery procedures are tested on a schedule. Backups are verified. Critical systems are documented end-to-end so the right person can recover the right service even when key staff aren't available.",
      "The result: outages get shorter, incidents get smaller, and your operations team spends fewer weekends on the phone with vendors.",
    ],
    image: '/images/supporting/services/network-services.jpg',
    imageAlt: 'Network operations infrastructure supporting continuous availability',
    imageSide: 'right' as const,
  },
  {
    eyebrow: 'Modernization, On Your Terms',
    headlineLead: 'Move forward without',
    headlineAccent: 'breaking what works.',
    paragraphs: [
      "Most community banks and credit unions are carrying technology decisions made a decade ago — legacy core integrations, on-premises Exchange, aging file servers. The risk of modernization feels higher than the cost of staying still. Until it isn't.",
      "ITSco helps you sequence modernization the right way: cloud migrations that don't disrupt teller and member operations, Microsoft 365 transitions that preserve compliance controls, identity and access overhauls that survive your next examination, AI adoption that delivers measurable productivity gains without violating GLBA safeguards.",
      "Every modernization step is tied to a business outcome — predictable cost, reduced risk, faster service to customers, or a stronger competitive position — not technology for technology's sake.",
    ],
    image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    imageAlt: 'Financial services leadership team reviewing a modernization roadmap',
    imageSide: 'left' as const,
  },
]

export const MID_CTA = {
  eyebrow: 'Make Your Next Examination the Easiest One',
  headline: "Talk to the IT team that's done it before.",
  utmSuffix: 'financial-services-it-mid',
}

export const FAQ_HEADING = {
  eyebrow: 'FAQ',
  headlineLead: 'Financial services IT,',
  headlineAccent: 'answered.',
}

export const FAQ_CALENDLY =
  'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=financial-services-it-faq'

export const FAQS = [
  {
    question: 'Which financial-services regulations do you support?',
    answer: [
      'The frameworks most institutions answer to: FFIEC examinations (IT, Cybersecurity Assessment Tool, BCM, and outsourcing booklets), GLBA Safeguards Rule, SOX IT general controls for public reporting issuers, PCI DSS for card-handling environments, and FDIC IT examination expectations. For credit unions, we map controls to NCUA AIRES examination items. For wealth and advisory firms, SEC Reg S-P and FINRA cybersecurity guidance.',
    ],
  },
  {
    question: 'What does engaging ITSco typically cost?',
    answer: [
      'Cost scales with environment complexity — user count, sites, regulatory scope, and the depth of co-managed support you need. For most community banks and credit unions, managed IT plus 24/7 SOC plus continuous compliance support runs as a predictable monthly fee that replaces ad-hoc vendor spend, surprise project invoices, and the hidden cost of pre-audit fire drills. Most engagements start with a free scoping consultation so the proposal is grounded in your actual environment.',
    ],
  },
  {
    question: 'Will you replace our internal IT team, or augment it?',
    answer: [
      "Either model works. Some institutions outsource IT entirely to ITSco — we run it end-to-end. Others have a strong in-house team and bring us in for 24/7 coverage, security operations, compliance support, or specific projects (cloud migration, identity modernization, M&A integration). Co-managed engagements are common: your team owns business-facing IT, we own infrastructure, security, and compliance heavy-lifting.",
    ],
  },
  {
    question: 'How do you handle incident response if something does happen?',
    answer: [
      "When you onboard with ITSco, we pre-build incident-response playbooks for your environment — who calls whom, what gets isolated, where evidence is preserved, what your insurer and examiners will need to see. If a real incident occurs, our SOC contains it while our IR team coordinates with your leadership, legal counsel, and cyber insurance. The first hour matters most, and the work to make that hour effective happens long before anything goes wrong.",
    ],
  },
  {
    question: 'Can you support our core banking and treasury systems?',
    answer: [
      "Yes. ITSco supports environments built around the major core platforms, treasury management systems, and the surrounding infrastructure they depend on — network connectivity to the core provider, integration points, identity, endpoint protection, backup, and the controls your examiners review around them. We don't replace your core vendor; we make sure the environment around it meets the standard your customers and regulators expect.",
    ],
  },
]
export const FAQ_INLINE_CTA_INDEX = 1
export const FAQ_INLINE_CTA_LABEL = 'Book a free consultation'
