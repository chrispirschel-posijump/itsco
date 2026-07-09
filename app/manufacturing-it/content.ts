// Content for /manufacturing-it/
//
// Rewrite page — fresh ROI-focused content. Primary keyword:
// "manufacturing IT" / "manufacturing IT services". Audience:
// COO / plant manager / IT director at a 50-500 person manufacturer.
// Compliance anchor: NIST 800-171 and CMMC for DoD suppliers, ITAR /
// EAR for export-controlled products, ISA/IEC 62443 for OT/ICS
// security. Differentiation lever: IT-OT convergence and ERP / shop-
// floor integration know-how. Headline framing: downtime is revenue.

import type { IndustryContent } from '@/components/IndustryPage'

export const CONTENT: IndustryContent = {
  meta: {
    title: 'Manufacturing IT Services | Managed IT, OT Security & CMMC',
    description:
      'Manufacturing IT services from ITSco — uptime, OT/ICS security, NIST 800-171 and CMMC compliance support, ERP and shop-floor integration. Built for manufacturers running 24/7. Book a free consultation.',
    canonical: 'https://www.itsco.com/manufacturing-it/',
  },
  hero: {
    eyebrow: 'Manufacturing IT',
    headlineLead: 'Downtime is revenue.',
    headlineAccent: 'Build IT that protects both.',
    body: "Managed IT, OT/ICS security, and compliance support engineered for manufacturers — where a single hour of downtime can outweigh a year of IT spend. NIST 800-171 and CMMC-aware. ERP and shop-floor integration done right. Strategic counsel for plants that can't afford to stop.",
    utmSuffix: 'manufacturing-it-hero',
  },
  heroImage: {
    src: '/images/hero/industries/pexels-equalstock-31336012.jpg',
    alt: 'Operator overseeing a production line on the shop floor',
  },
  capabilitiesHeading: {
    eyebrow: 'Complete IT Solutions',
    headlineLead: 'Everything a plant',
    headlineAccent: 'needs to run reliably.',
  },
  capabilities: [
    {
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, helpdesk, and infrastructure management built around plant operating hours and shift schedules.',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & MSSP',
      description:
        '24/7 SOC, MDR, network segmentation, and endpoint protection tuned to the threats targeting manufacturers and their supply chains.',
    },
    {
      slug: 'managed-network-services',
      title: 'OT / ICS Network Support',
      description:
        'IT-OT segmentation, industrial network design, and shop-floor connectivity that protects production without slowing it down.',
    },
    {
      slug: 'compliance-as-a-service',
      title: 'NIST 800-171 & CMMC Support',
      description:
        'Continuous control management for DoD-supplier compliance — and the documentation auditors and primes will ask for.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description:
        'Tested recovery for ERP, MES, historian, and engineering data — with realistic RTO and RPO targets you can defend to leadership.',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud & ERP Integration',
      description:
        'Managed Azure and hybrid cloud, with the integration know-how to connect SAP, NetSuite, Plex, Epicor, Infor, and Microsoft Dynamics.',
    },
    {
      slug: 'managed-soc',
      title: 'Managed SOC & MDR',
      description:
        '24/7 detection, investigation, and response — staffed by analysts who understand the difference between an IT and an OT incident.',
    },
    {
      slug: 'vcio-leadership',
      title: 'vCIO, vCTO & vCISO Services',
      description:
        'Strategic IT and security leadership for manufacturers that need executive expertise without a full-time hire.',
    },
    {
      slug: 'it-staff-augmentation',
      title: 'IT Outsourcing & Co-Managed',
      description:
        'Co-managed support that scales your in-house team without scaling your headcount — covering shifts and locations you can\'t staff alone.',
    },
  ],
  pillars: [
    {
      eyebrow: 'Uptime Is Strategy',
      headlineLead: 'Engineered for the hours',
      headlineAccent: 'a line cannot afford to stop.',
      paragraphs: [
        "On a production floor, every hour of downtime carries a known dollar value — and most plant managers know it to the third decimal. IT in manufacturing isn't a back-office function; it's part of the operating equipment. When the network drops, the MES drops with it. When the ERP stalls, scheduling, purchasing, and shipping stall behind it.",
        "ITSco engineers manufacturing IT against the cost of stopping. Redundant network paths between plants and into the cloud. Aggressive monitoring with thresholds tied to operational impact, not generic IT metrics. Disaster recovery with RTO and RPO targets you can defend to the CFO — and tested often enough that you actually trust the answer.",
        "The result: outages get shorter, incidents get smaller, and the operations team spends fewer weekends explaining unplanned losses to leadership.",
      ],
      image: '/images/supporting/services/network-services.jpg',
      imageAlt: 'Network operations supporting continuous manufacturing availability',
      imageSide: 'right',
    },
    {
      eyebrow: 'IT-OT Convergence, Done Safely',
      headlineLead: 'Connect the shop floor —',
      headlineAccent: "without opening it up to attack.",
      paragraphs: [
        "Manufacturers are connecting their shop floors faster than their cybersecurity has caught up. Historians, MES, SCADA, PLCs, robots, vision systems, and IoT sensors are all on the network, and many of them weren't designed with security in mind. A single compromised vendor laptop on a flat network can pivot to production in minutes.",
        "ITSco builds the architecture that lets you collect data and drive efficiency from the floor while keeping IT and OT properly segmented. Purdue-model alignment, industrial DMZs, jump-host access for vendors, and 24/7 monitoring that knows the difference between an IT incident and an OT one.",
        "The goal isn't to slow Industry 4.0 — it's to make sure the connected plant doesn't become the connected liability.",
      ],
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations monitoring connected production systems',
      imageSide: 'left',
    },
    {
      eyebrow: 'CMMC, NIST 800-171, ITAR — Ready When the Audit Comes',
      headlineLead: 'Compliance that actually',
      headlineAccent: 'keeps the contract.',
      paragraphs: [
        "If you sell to the Department of Defense, you already know CMMC and NIST 800-171 are now table stakes — and that primes are pushing the documentation requirements downstream. If you handle export-controlled technical data, ITAR and EAR add another layer. Falling out of compliance doesn't just mean a finding; it can mean losing the contract.",
        "ITSco builds and maintains the controls these frameworks require — access management, encryption, multifactor authentication, audit logging, configuration management, incident response, and the System Security Plan and POA&M your assessor will read first. Controls are operated and evidenced continuously, not reconstructed under deadline pressure.",
        "Our team has supported manufacturers through CMMC readiness reviews and DoD prime due diligence. We know what the assessor is going to look for — and the order they're going to look for it in.",
      ],
      image: '/images/supporting/industries/scott-graham-5fNmWej4tAA-unsplash.jpg',
      imageAlt: 'Reviewing CMMC and NIST 800-171 controls documentation',
      imageSide: 'right',
    },
    {
      eyebrow: 'ERP, MES, and the Systems Around Them',
      headlineLead: 'Modernize the systems',
      headlineAccent: 'that actually run production.',
      paragraphs: [
        "Most manufacturers run on a stack that has accreted over a decade or more — an aging ERP, a half-replaced MES, custom integrations no one fully documented, a network designed for fifty users that now supports five hundred. Every executive knows it needs to be modernized. Few have the bandwidth to plan it carefully.",
        "ITSco helps you sequence modernization without breaking what works. ERP migrations and upgrades. MES and shop-floor integration. Microsoft 365 transitions that preserve compliance controls. Identity and access overhauls that survive your next audit. AI-assisted operations introduced where they actually deliver throughput.",
        "Every step is tied to a measurable business outcome — throughput, scrap, on-time delivery, audit posture — not technology for technology's sake.",
      ],
      image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
      imageAlt: 'Manufacturing leadership reviewing a digital transformation roadmap',
      imageSide: 'left',
    },
  ],
  midCta: {
    eyebrow: "Stop Letting Downtime Be the Plan",
    headline: "Talk to the IT team that runs with manufacturers.",
    utmSuffix: 'manufacturing-it-mid',
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
          "A scalable network automation engine improving security for one of the world's largest oil companies — across IT and operational network environments.",
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
          'Automation enhancing the security, manageability, and scalability of a network supporting thousands of employees across hundreds of sites.',
        stat: '2,800',
        statLabel: 'employees across 250 offices',
        image: '/images/case-studies/banking.jpg',
        imageAlt: 'Banking professional reviewing financial systems',
        href: '/case-studies/regional-bank/',
      },
      {
        key: 'srn',
        category: 'Healthcare',
        title: 'Unlocking Business Opportunities Through IT Innovation',
        description:
          'A modernized infrastructure and SOC 2 Type 2 program that helped Southern Rehabilitation Network qualify for state contracts and reduce risk.',
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
    headlineLead: 'Manufacturing IT,',
    headlineAccent: 'answered.',
  },
  faqCalendlyUtm: 'manufacturing-it-faq',
  faqs: [
    {
      question: 'Can you support our shop-floor systems — MES, SCADA, historians, PLCs?',
      answer: [
        "We support the network, identity, security, and supporting infrastructure these systems depend on, and we work directly with your OEM and integrator partners on configuration changes that touch production. We don't replace your control vendors; we build the environment around them so the production stack stays available, segmented, and monitored — and so an IT change does not become an OT incident.",
      ],
    },
    {
      question: 'What does engaging ITSco typically cost for a manufacturer our size?',
      answer: [
        "Cost scales with environment complexity — number of plants, user count, OT estate, compliance scope, and the depth of co-managed support you need. For most mid-size manufacturers, managed IT plus 24/7 SOC plus continuous compliance support runs as a predictable monthly fee that replaces ad-hoc vendor spend, surprise project invoices, and the unmeasured cost of unplanned downtime. Most engagements begin with a free scoping consultation so the proposal reflects your actual environment.",
      ],
    },
    {
      question: 'Do you help with NIST 800-171, CMMC, and ITAR requirements?',
      answer: [
        "Yes. Our Compliance as a Service practice builds and maintains the NIST 800-171 controls CMMC assessments are based on, supports you through CMMC Level 1 and Level 2 readiness, and aligns the underlying technical controls so they're operating year-round, not reconstructed before an audit. For ITAR and EAR-controlled environments, we segment access to CUI, enforce encryption requirements, and document the data flows your prime or your assessor will ask about.",
      ],
    },
    {
      question: 'How do you handle incident response if production gets hit?',
      answer: [
        "When you onboard with ITSco, we pre-build incident-response playbooks for your environment — IT and OT separately — including who calls whom, what gets isolated, where evidence is preserved, and what your insurer, regulators, and primes will need to see. If a real incident occurs, our SOC contains it while our IR team coordinates with your leadership, operations, legal, and cyber insurance. The first hour matters most, and the work to make that hour effective happens long before anything goes wrong.",
      ],
    },
    {
      question: 'Can you support multi-plant and multi-state operations?',
      answer: [
        "Yes. ITSco supports manufacturers across multiple sites and states with consistent service delivery, centralized monitoring, and the regional network and vendor relationships needed for on-site work when it matters. Each plant gets local responsiveness; corporate gets unified visibility, consistent controls, and a single team accountable for outcomes.",
      ],
    },
  ],
  faqInlineCtaIndex: 1,
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
        '24/7 SOC, MDR, network segmentation, and compliance programs sized to the threats manufacturers and their supply chains face.',
      href: '/cybersecurity/',
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations engineers reviewing code on multiple monitors',
    },
    {
      slug: 'managed-network-services',
      title: 'Managed Network Services',
      description:
        'Network design, monitoring, and management for multi-plant and IT-OT environments where uptime is not optional.',
      href: '/managed-network-services/',
      image: '/images/supporting/services/network-services.jpg',
      imageAlt: 'Network operations supporting plant connectivity',
    },
    {
      slug: 'vcio-vcto-vciso',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Strategic IT, security, and AI leadership for manufacturers that need executive expertise without a full-time hire.',
      href: '/vcio-vcto-vciso-services/',
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Executive advisors meeting with a leadership team',
    },
  ],
  bookingUtm: 'manufacturing-it-bottom',
}
