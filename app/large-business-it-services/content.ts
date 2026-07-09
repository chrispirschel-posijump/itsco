// Content for /large-business-it-services/
//
// Rewrite page — fresh ROI-focused content. Primary keyword:
// "large business IT services". Audience: IT director, CFO, or COO
// at a 200-1000 employee organization. Framing: multi-location
// complexity made consistent, compliance at scale, vendor sprawl
// replaced with one accountable team, IT positioned as strategic
// value rather than cost center.

import type { IndustryContent } from '@/components/IndustryPage'

export const CONTENT: IndustryContent = {
  meta: {
    title: 'Large Business IT Services | Multi-Site Managed IT & MSSP',
    description:
      'Large business IT services from ITSco — co-managed IT, 24/7 SOC, multi-site network operations, and compliance support engineered for 200-1000 employee organizations. Book a free consultation.',
    canonical: 'https://www.itsco.com/large-business-it-services/',
  },
  hero: {
    eyebrow: 'Large Business IT Services',
    headlineLead: 'Tame the complexity.',
    headlineAccent: 'Reclaim the strategic upside.',
    body: "Multi-site networks, layered compliance, vendor sprawl, and an internal team that's stretched thin. ITSco delivers co-managed IT, 24/7 security operations, and senior engineering capacity engineered for 200-1000 employee organizations — consistent across every location, accountable to outcomes you can defend to the board.",
    utmSuffix: 'large-business-it-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/topsphere-media-WxRd7byFxs4-unsplash.jpg',
    alt: 'Large business corporate headquarters skyline',
  },
  capabilitiesHeading: {
    eyebrow: 'Complete IT Solutions',
    headlineLead: 'Everything a large',
    headlineAccent: 'organization needs.',
  },
  capabilities: [
    {
      slug: 'managed-it-services',
      title: 'Co-Managed IT Services',
      description:
        'Augment your internal IT department with 24/7 monitoring, helpdesk, infrastructure engineering, and senior depth — without growing headcount.',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & MSSP',
      description:
        '24/7 SOC, MDR, SIEM correlation, and incident response engineered to the threats targeting larger organizations.',
    },
    {
      slug: 'managed-soc',
      title: 'Managed SOC & MDR',
      description:
        '24/7 detection, investigation, and response — staffed by senior analysts who escalate to a real engineer, not a runbook.',
    },
    {
      slug: 'managed-network-services',
      title: 'Multi-Site Network Operations',
      description:
        'Network design, monitoring, and management across multiple locations — with one operational picture instead of three different vendors.',
    },
    {
      slug: 'compliance-as-a-service',
      title: 'Compliance as a Service',
      description:
        'Continuous SOC 2, HIPAA, PCI DSS, NIST 800-171, and FFIEC posture management — sized for organizations under multiple frameworks at once.',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud Services',
      description:
        'Managed Azure, AWS, and hybrid cloud — with FinOps, identity, and security controls that mature with your environment.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description:
        'Tested recovery for production systems and SaaS estates — with realistic RTO and RPO targets you can defend to leadership and auditors.',
    },
    {
      slug: 'vcio-leadership',
      title: 'vCIO, vCTO & vCISO Services',
      description:
        'Strategic IT, security, and AI leadership — embedded in your team, accountable to your board, without adding to executive payroll.',
    },
    {
      slug: 'technical-project-management',
      title: 'Project Management',
      description:
        'Senior PM capacity for cloud migrations, M&A integrations, ERP transitions, and the cross-functional work your team cannot drop everything to lead.',
    },
  ],
  pillars: [
    {
      eyebrow: 'Multi-Site Operations, Made Consistent',
      headlineLead: 'One operating picture',
      headlineAccent: 'across every location.',
      paragraphs: [
        "At 200+ employees and several locations, IT consistency stops being optional. The corporate office and the regional branches need the same identity, the same security posture, the same support experience — and the executive team needs one operational picture instead of three different vendors with three different stories.",
        "ITSco centralizes operations the way large organizations need: unified identity, conditional access policies that travel with the user, centralized monitoring across locations, consistent endpoint and network configuration, and a single team accountable for the whole picture. Local responsiveness stays; fragmented IT goes away.",
        "The practical effect: site openings and closings stop being IT projects. Acquisitions integrate cleanly. Audit and compliance evidence stops varying by location.",
      ],
      image: '/images/supporting/services/network-services.jpg',
      imageAlt: 'Multi-site network operations across distributed locations',
      imageSide: 'right',
    },
    {
      eyebrow: 'Compliance at Scale',
      headlineLead: 'Multiple frameworks,',
      headlineAccent: 'one operational posture.',
      paragraphs: [
        "Large organizations rarely answer to one compliance framework — most answer to several at once. SOC 2 for customers. HIPAA for protected health data. PCI DSS for card-handling environments. NIST 800-171 or CMMC for federal customers. FFIEC for financial regulators. State privacy laws for residents in multiple jurisdictions. Each one with its own evidence requirements.",
        "ITSco builds a single underlying posture mapped against the frameworks you actually answer to. Controls are operated continuously, evidence is collected as work happens, and reporting is produced for whichever auditor or customer asks. Pre-audit fire drills get replaced with a posture you maintain year-round.",
        "Our team has stood up SOC 2 Type 2 programs, supported PCI DSS assessments, prepared organizations for CMMC, and operated continuous controls programs across regulated industries. The frameworks change; the discipline doesn't.",
      ],
      image: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
      imageAlt: 'Reviewing compliance documentation across multiple frameworks',
      imageSide: 'left',
    },
    {
      eyebrow: 'Strategic Value, Not Just Cost',
      headlineLead: 'IT that earns a seat',
      headlineAccent: 'at the strategic table.',
      paragraphs: [
        "In larger organizations, IT often gets treated as a cost center until the day a security incident, an outage, or a missed M&A integration window makes the strategic stakes obvious. By then the conversation is reactive.",
        "ITSco brings senior engineering and virtual-executive capacity — vCIO, vCTO, vCISO, and vCAIO — that produces the kind of roadmap, scenario planning, and risk reporting executives can act on. Where to spend, where to defer, where the real exposure is, where AI and automation actually compound operational leverage.",
        "Every initiative gets attached to a measurable business outcome — revenue enabled, cost avoided, risk reduced, operational capacity gained — that translates to the language the rest of the executive team is already speaking.",
      ],
      image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
      imageAlt: 'Executive team reviewing an IT strategy and ROI report',
      imageSide: 'right',
    },
    {
      eyebrow: 'Replace Vendor Sprawl With One Accountable Team',
      headlineLead: 'Fewer vendors,',
      headlineAccent: 'fewer finger-pointing meetings.',
      paragraphs: [
        "By the time most large organizations get to 200+ employees, they've accumulated a long list of single-purpose vendors: helpdesk here, security there, cloud somewhere else, a separate consultancy for projects, plus the hardware reseller and the line-of-business application vendors. When something breaks across that ecosystem, ownership becomes a finger-pointing exercise.",
        "ITSco consolidates the operational layer under one accountable team: managed IT, 24/7 SOC, network and cloud operations, helpdesk, compliance, and senior engineering — all running together, all answerable for outcomes. Application vendors stay where they are; the operational ecosystem around them stops being a coordination tax.",
        "The result: faster resolution, cleaner accountability, lower total spend, and an IT line on the P&L that finance can actually explain.",
      ],
      image: '/images/supporting/industries/austin-distel-DS1hZ4xzD7M-unsplash.jpg',
      imageAlt: 'Leadership team reviewing consolidated vendor and IT operations',
      imageSide: 'left',
    },
  ],
  midCta: {
    eyebrow: "Stop Coordinating Vendors. Start Operating.",
    headline: "Talk to the IT team built for large organizations.",
    utmSuffix: 'large-business-it-mid',
  },
  caseStudies: {
    eyebrow: 'Proof, Not Promises',
    headlineLead: 'Engineering excellence,',
    headlineAccent: 'delivered.',
    cards: [
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
        key: 'oil',
        category: 'Energy',
        title: 'Network Automation Improves Security, Supportability, and Scalability',
        description:
          "A scalable network automation engine improving security for one of the world's largest oil companies — on time and on budget.",
        stat: 'On time',
        statLabel: 'and on budget',
        image: '/images/case-studies/energy.jpg',
        imageAlt: 'Server infrastructure for an enterprise energy network',
        href: '/case-studies/network-automation/',
      },
      {
        key: 'srn',
        category: 'Healthcare',
        title: 'Unlocking Business Opportunities Through IT Innovation',
        description:
          'A modernized infrastructure and SOC 2 Type 2 program helped Southern Rehabilitation Network qualify for state contracts and reduce risk.',
        stat: 'SOC 2 Type 2',
        statLabel: 'certification earned',
        image: '/images/supporting/industries/pexels-polina-tankilevitch-5234499.jpg',
        imageAlt: 'Healthcare provider with tablet — IT modernization',
        href: '/case-studies/southern-rehabilitation-network/',
      },
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Large business IT,',
    headlineAccent: 'answered.',
  },
  faqCalendlyUtm: 'large-business-it-faq',
  faqs: [
    {
      question: 'Will you replace our in-house IT team, or work alongside it?',
      answer: [
        "Almost always alongside it. At 200+ employees, your internal team is doing valuable work — relationships with leadership, institutional knowledge of your environment, line-of-business application support, and the user-facing concierge work that needs to be local. ITSco co-manages: we take 24/7 SOC, infrastructure engineering, network operations, compliance heavy-lifting, and the after-hours coverage no internal team can sustainably staff. Your people get back to strategic work. Nobody gets replaced.",
      ],
    },
    {
      question: 'How do you handle multi-location operations?',
      answer: [
        "Centralized operations, local responsiveness. ITSco runs a single operational picture across your locations: unified monitoring, consistent identity and security policies, centralized incident response, and one accountable team. On-site work is sourced through our regional engineering and partner network when it matters. Each location gets the responsiveness it needs; corporate gets the consistency the business demands.",
      ],
    },
    {
      question: 'What does engaging ITSco typically cost?',
      answer: [
        "Cost scales with environment complexity — user count, locations, regulatory scope, the depth of co-managed support you need, and the security operations you're folding in. For most 200-1000 person organizations, co-managed IT plus 24/7 SOC plus continuous compliance support runs as a predictable per-user (or per-location) monthly fee that replaces fragmented vendor spend, surprise project invoices, and the soft cost of a stretched internal team. Most engagements begin with a free scoping consultation.",
      ],
    },
    {
      question: 'How do you support compliance across multiple frameworks?',
      answer: [
        "We build a single underlying posture mapped against the frameworks you actually answer to — SOC 2, HIPAA, PCI DSS, NIST 800-171, CMMC, FFIEC, GLBA, and state privacy laws. Controls are operated continuously, evidence is collected as work happens, and reports are produced for whichever auditor or customer requests them. The frameworks change over time; the controls and evidence don't have to be rebuilt every time.",
      ],
    },
    {
      question: 'Can you help with M&A integrations and large transitions?',
      answer: [
        "Yes. Cloud migrations, M&A IT integrations, ERP transitions, identity consolidations, and security platform overhauls are exactly the work senior in-house teams need help with — and exactly the work that disappears under day-to-day pressure. ITSco brings senior project management and engineering capacity for these transitions, with delivery accountability tied to milestones and outcomes you set.",
      ],
    },
  ],
  faqInlineCtaIndex: 2,
  faqInlineCtaTrailingText: 'for a scoped, transparent estimate.',
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
        '24/7 SOC, MDR, SIEM, and compliance programs engineered to the threats and frameworks large organizations answer to.',
      href: '/cybersecurity/',
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations engineers reviewing code on multiple monitors',
    },
    {
      slug: 'managed-network-services',
      title: 'Managed Network Services',
      description:
        'Multi-site network design, monitoring, and management — one operational picture across every location.',
      href: '/managed-network-services/',
      image: '/images/supporting/services/network-services.jpg',
      imageAlt: 'Network operations supporting multi-site connectivity',
    },
    {
      slug: 'vcio-vcto-vciso',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Strategic IT, security, and AI leadership — embedded with your team, accountable to your board.',
      href: '/vcio-vcto-vciso-services/',
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Executive advisors meeting with a leadership team',
    },
  ],
  bookingUtm: 'large-business-it-bottom',
}
