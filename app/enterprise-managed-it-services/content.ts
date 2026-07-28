// Content for /enterprise-managed-it-services/
//
// Rewrite page — fresh ROI-focused content. Primary keyword:
// "enterprise managed IT services". Audience: CIO, CISO, VP of IT
// at a 1000+ employee organization. Voice: peer-to-peer with
// executive technology leaders — confident, accountability-driven,
// outcomes-led. Framing: extending your existing senior team, not
// replacing it; mature 24/7 SOC and threat operations; audit
// readiness across multiple frameworks; senior delivery capacity
// for the transitions that disappear under day-to-day pressure.

import type { IndustryContent } from '@/components/IndustryPage'

export const CONTENT: IndustryContent = {
  meta: {
    title: 'Enterprise Managed IT Services | Co-Managed IT, SOC & MDR',
    description:
      'Enterprise managed IT services from ITSco — co-managed IT, 24/7 SOC, advanced threat operations, multi-framework compliance, and senior delivery capacity for 1000+ employee organizations. Book a free consultation.',
    canonical: 'https://www.itsco.com/enterprise-managed-it-services',
  },
  hero: {
    eyebrow: 'Enterprise Managed IT Services',
    headlineLead: 'Extend your team.',
    headlineAccent: 'Defend at the scale of the threat.',
    body: "Co-managed IT, 24/7 security operations, and senior engineering capacity engineered for organizations with mature internal teams and enterprise-grade obligations. ITSco extends what your CIO and CISO already lead — across operations, threat defense, audit readiness, and the strategic transitions that need to happen without disrupting the work that pays the bills.",
    utmSuffix: 'enterprise-managed-it-hero',
  },
  heroImage: {
    src: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    alt: 'Executive leadership reviewing enterprise IT strategy in a boardroom',
  },
  capabilitiesHeading: {
    eyebrow: 'Complete IT Solutions',
    headlineLead: 'Senior depth across',
    headlineAccent: 'every operational layer.',
  },
  capabilities: [
    {
      slug: 'managed-it-services',
      title: 'Co-Managed IT Services',
      description:
        'Extend your in-house IT department with 24/7 monitoring, senior engineering depth, infrastructure operations, and the bandwidth your team cannot grow into overnight.',
    },
    {
      slug: 'managed-soc',
      title: 'Managed SOC & MDR',
      description:
        '24/7 detection, investigation, and response — senior analysts triaging real signal, threat hunting, and integrated incident response.',
    },
    {
      slug: 'cybersecurity',
      title: 'Advanced Cybersecurity Operations',
      description:
        'SIEM correlation, EDR/XDR coverage, identity threat detection, vulnerability management, and threat intelligence at enterprise depth.',
    },
    {
      slug: 'compliance-as-a-service',
      title: 'Multi-Framework Compliance',
      description:
        'Continuous SOC 2, ISO 27001, HIPAA, PCI DSS, NIST 800-171, CMMC, FFIEC, and state privacy posture management — operated as one program.',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud Services',
      description:
        'Managed Azure, AWS, and hybrid cloud — with FinOps, identity, security, and platform engineering that scales with your environment.',
    },
    {
      slug: 'managed-network-services',
      title: 'Multi-Site Network Operations',
      description:
        'Network engineering, monitoring, and operations across global sites — one operational picture, one accountable team.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Resilience & Recovery',
      description:
        'Tested business continuity and disaster recovery with realistic RTO and RPO targets — defensible to auditors and your board.',
    },
    {
      slug: 'vcio-leadership',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Senior virtual-executive capacity that supplements your internal leadership — for the strategic depth no one CIO or CISO can carry alone.',
    },
    {
      slug: 'technical-project-management',
      title: 'Senior Project Delivery',
      description:
        'Cloud migrations, M&A IT integrations, ERP transitions, identity consolidations — senior PM and engineering capacity for the work that cannot slip.',
    },
  ],
  pillars: [
    {
      eyebrow: 'Co-Managed at Scale',
      headlineLead: 'We extend your team.',
      headlineAccent: "We don't displace it.",
      paragraphs: [
        "Enterprise IT and security teams know their environment, their leadership, and their politics better than any external provider can. The value isn't in replacing them — it's in giving them senior capacity for the things they're forced to defer when day-to-day operations consume their hours.",
        "ITSco co-manages alongside your internal organization: we take 24/7 SOC, infrastructure engineering, network operations, off-hours coverage, project delivery, and the heavy-lifting that would otherwise demand five more FTEs to staff at the same quality. Your CIO and CISO get back the ability to lead strategically; your senior engineers get back the depth they were hired for.",
        "Engagement structures are designed for enterprise reality — defined RACI between our team and yours, named senior engineers, executive sponsors on both sides, and reporting at the cadence your leadership actually consumes.",
      ],
      image: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
      imageAlt: 'Co-managed engineering team extending an in-house enterprise IT department',
      imageSide: 'right',
    },
    {
      eyebrow: 'Threat Operations Built for the Threat',
      headlineLead: 'Senior analysts.',
      headlineAccent: 'Real signal. Real response.',
      paragraphs: [
        "Enterprise threat operations isn't a tier-1 ticket queue scaled up. It's senior analysts triaging real signal across SIEM, EDR/XDR, identity, network, cloud, and SaaS — running threat-hunting cycles, integrating threat intelligence, and escalating to engineers who can actually act, not runbooks.",
        "ITSco operates a 24/7 SOC at that bar. Detection content is tuned to your environment and adversary patterns relevant to your sector. Identity-led detection catches the social-engineering and credential-abuse campaigns that dominate the current threat landscape. Incident response playbooks are pre-built for your environment so the first hour is execution, not coordination.",
        "When the breach attempt comes — and at enterprise scale, attempts come constantly — the difference between a contained event and a board-level crisis is decided in minutes, by people who already know your environment.",
      ],
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Enterprise security operations center running 24/7 threat operations',
      imageSide: 'left',
    },
    {
      eyebrow: 'Audit-Ready, Across Every Framework',
      headlineLead: 'One operational posture.',
      headlineAccent: 'Every framework you answer to.',
      paragraphs: [
        "Enterprises rarely answer to one compliance framework. SOC 2, ISO 27001, HIPAA, PCI DSS, NIST 800-171, CMMC, FFIEC, state privacy laws, customer-imposed contractual standards — each with its own evidence requirements, each with its own auditor cadence. The work to maintain them all separately is unsustainable; the work to maintain them as one program is the discipline that defines a mature security organization.",
        "ITSco builds and operates a unified control program mapped to the frameworks you actually answer to. Controls are operated continuously, evidence is collected as work happens, and reporting is generated for whichever audit or customer asks. Pre-audit fire drills get replaced with quarterly attestations against a posture you maintain year-round.",
        "Our team has stood up SOC 2 Type 2 programs, supported PCI DSS Level 1 assessments, prepared organizations for CMMC, operated controls across HITRUST and HIPAA environments, and supported multi-framework programs across financial services, healthcare, and federal-supplier manufacturing.",
      ],
      image: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
      imageAlt: 'Reviewing audit evidence across multiple compliance frameworks',
      imageSide: 'right',
    },
    {
      eyebrow: 'Senior Delivery for the Transitions That Cannot Slip',
      headlineLead: 'M&A, cloud, ERP —',
      headlineAccent: "the work day-to-day pressure swallows.",
      paragraphs: [
        "M&A IT integrations, cloud and platform migrations, ERP transitions, identity consolidations, post-incident remediation programs — these are the projects that decide whether the next three years go well or poorly. They also tend to be the projects that disappear under day-to-day operational pressure on internal teams.",
        "ITSco brings senior delivery capacity for exactly these transitions: experienced project leaders, senior engineering depth, defined accountability for outcomes, and the ability to move at the pace executive decisions demand. Your internal team stays focused on running the business; the strategic transitions get the senior attention they need.",
        "Every initiative is tied to a measurable business outcome — integration timeline met, cloud spend optimized, downtime avoided, risk reduced — and reported to leadership in language that translates beyond the IT organization.",
      ],
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Senior project leadership advising an enterprise leadership team',
      imageSide: 'left',
    },
  ],
  midCta: {
    eyebrow: 'Senior Capacity, Not Just Another Vendor',
    headline: "Talk to the IT team built to extend enterprise leadership.",
    utmSuffix: 'enterprise-managed-it-mid',
  },
  caseStudies: {
    eyebrow: 'Proof, Not Promises',
    headlineLead: 'Engineering excellence,',
    headlineAccent: 'delivered.',
    cards: [
      {
        key: 'oil',
        category: 'Energy',
        title: 'Network Automation Improves Security, Supportability, and Scalability',
        description:
          "Network automation engineered for one of the world's largest oil companies — security, supportability, and scale, delivered on time and on budget.",
        stat: 'On time',
        statLabel: 'and on budget',
        image: '/images/case-studies/energy.jpg',
        imageAlt: 'Server infrastructure for an enterprise energy network',
        href: '/case-studies/network-automation/',
      },
      {
        key: 'bank',
        category: 'Financial Services',
        title: 'Helping a $27B Business Upgrade Network Management',
        description:
          'Automation enhancing the security, manageability, and scalability of a network supporting thousands of employees across hundreds of offices.',
        stat: '2,800',
        statLabel: 'employees across 250 offices',
        image: '/images/case-studies/banking.jpg',
        imageAlt: 'Banking professional reviewing financial systems',
        href: '/case-studies/regional-bank/',
      },
      {
        key: 'emergeortho',
        category: 'Healthcare',
        title: 'Transforming Mobile MRI Services Through Remote Operations',
        description:
          "Remote-scanning hubs unlocked 40 extra hours of MRI capacity per truck per week and cut labor costs 30–40% across EmergeOrtho's imaging network.",
        stat: '40 hrs',
        statLabel: 'extra capacity per week, per truck',
        image: '/images/case-studies/healthcare.jpg',
        imageAlt: 'Healthcare imaging environment — remote MRI operations',
        href: '/case-studies/emerge-ortho-mobile-mri-remote-operations/',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Enterprise managed IT,',
    headlineAccent: 'answered.',
  },
  faqCalendlyUtm: 'enterprise-managed-it-faq',
  faqs: [
    {
      question: 'How do you co-manage alongside a mature internal IT and security team?',
      answer: [
        "With defined accountability and named people on both sides. Engagements start with a joint operating model — RACI for incident response, change management, escalation paths, and reporting cadence. Your CIO and CISO retain leadership; our team owns specific operational layers with named senior engineers, an executive sponsor, and measurable performance targets. The goal is to look and feel like an extension of your organization, not a separate vendor with separate priorities.",
      ],
    },
    {
      question: 'What does engaging ITSco typically cost at enterprise scale?',
      answer: [
        "Cost scales with the layers you fold in — 24/7 SOC and MDR, co-managed infrastructure, network operations, compliance program operation, project delivery capacity, and virtual executive support. For most enterprise engagements, pricing is structured as a combination of monthly retainers (for sustained operational layers) and milestone-based project pricing (for transitions). Most engagements begin with a discovery and scoping process so the proposal reflects the actual layers and depth you need, not a packaged tier.",
      ],
    },
    {
      question: 'Can you operate at the SLA and audit standards our customers require?',
      answer: [
        "Yes — and the standards larger customers are now imposing on their suppliers are exactly the conversation we have most often. ITSco operates against defined SLAs and SLOs, produces evidence for customer security questionnaires and audits, supports vendor risk assessments, and provides documentation your account teams can hand directly to procurement and InfoSec without translation. Customer-facing security obligations become an asset, not friction.",
      ],
    },
    {
      question: 'How do you handle M&A IT integrations and strategic transitions?',
      answer: [
        "With dedicated senior PM and engineering capacity, not by stretching the operational team thinner. M&A integrations get a defined Day-1 / Day-30 / Day-100 plan, named delivery leadership, and accountability for the integration outcomes the deal thesis depends on — synergies captured, IT cost normalized, security posture harmonized, audit obligations covered across the combined entity. Strategic transitions get the same treatment: senior delivery leadership, executive reporting, milestone accountability.",
      ],
    },
    {
      question: 'Can you support global operations and multiple geographies?',
      answer: [
        "Yes. ITSco supports enterprises operating across the US and into international geographies, with consistent service delivery, centralized operational visibility, and the regional and partner relationships needed for on-the-ground work. Each geography gets local responsiveness; corporate gets unified controls, consistent posture, and a single accountable team.",
      ],
    },
  ],
  faqInlineCtaIndex: 1,
  faqInlineCtaTrailingText: 'to start a discovery conversation.',
  relatedHeading: {
    eyebrow: 'Related Services',
    headlineLead: 'Explore more from',
    headlineAccent: 'ITSco.',
  },
  relatedServices: [
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description:
        '24/7 SOC, MDR, SIEM, and multi-framework compliance — engineered to the threats and obligations enterprise programs answer to.',
      href: '/cybersecurity/',
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations engineers reviewing code on multiple monitors',
    },
    {
      slug: 'managed-soc',
      title: 'Managed SOC & MDR',
      description:
        '24/7 detection, investigation, and response — senior analysts, real signal, integrated incident response.',
      href: '/managed-soc/',
      image: '/images/supporting/services/network-services.jpg',
      imageAlt: 'Security operations team monitoring an enterprise environment',
    },
    {
      slug: 'vcio-vcto-vciso',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Senior virtual-executive capacity that supplements your internal leadership across IT, security, and AI strategy.',
      href: '/vcio-vcto-vciso-services/',
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Executive advisors meeting with an enterprise leadership team',
    },
  ],
  bookingUtm: 'enterprise-managed-it-bottom',
}
