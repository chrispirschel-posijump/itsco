// Content for /mid-sized-business/
//
// INVENTORY tag: 1:1 Migrate — but the live page included lorem ipsum
// placeholder text under one H2 and was otherwise quite generic. This
// is a pragmatic migration: preserve the structure and intent of the
// live page, replace the placeholder copy with substantive content,
// and explicitly weave in the ranking-target phrase
// "managed cybersecurity services for mid-sized firms" (currently
// ranking p19-21 per KEYWORDS.csv — improving this is a real lift).
// Audience: COO / CFO / one-person IT lead at a 50-250 employee firm.

import type { IndustryContent } from '@/components/IndustryPage'

export const CONTENT: IndustryContent = {
  meta: {
    title: 'IT Services for Mid-Sized Business | Managed Cybersecurity for Mid-Sized Firms',
    description:
      'Managed IT and managed cybersecurity services for mid-sized firms (50-250 employees). Augment your in-house team, mature your security posture, scale without surprises. Book a free consultation with ITSco.',
    canonical: 'https://www.itsco.com/mid-sized-business/',
  },
  hero: {
    eyebrow: 'IT Services for Mid-Sized Business',
    headlineLead: 'Managed IT and managed cybersecurity',
    headlineAccent: 'built for mid-sized firms.',
    body: "Mid-sized companies are too big for off-the-shelf IT and too lean for a fully built-out internal team. ITSco closes that gap — augmenting your in-house staff with 24/7 SOC, mature engineering, and strategic counsel sized exactly for 50-250 employee firms.",
    utmSuffix: 'mid-sized-business-it-hero',
  },
  heroImage: {
    src: '/images/supporting/industries/austin-distel-744oGeqpxPQ-unsplash.jpg',
    alt: 'Mid-sized business team collaborating in a modern office',
  },
  capabilitiesHeading: {
    eyebrow: 'Tailored IT Solutions',
    headlineLead: 'Everything a growing',
    headlineAccent: 'mid-sized firm needs.',
  },
  capabilities: [
    {
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, helpdesk, and infrastructure management — co-managed alongside your in-house team or run end-to-end.',
    },
    {
      slug: 'cybersecurity',
      title: 'Managed Cybersecurity',
      description:
        '24/7 SOC, MDR, identity-led access, and email security — the managed cybersecurity services mid-sized firms need to keep pace with the threats.',
    },
    {
      slug: 'compliance-as-a-service',
      title: 'Compliance as a Service',
      description:
        'SOC 2 readiness, vendor and customer security questionnaires, and continuous posture management — kept current, not built under deadline.',
    },
    {
      slug: 'managed-network-services',
      title: 'Network Support',
      description:
        'Multi-site network design and monitoring built for firms operating across a corporate office and several branches.',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud Services',
      description:
        'Managed Azure, AWS, and hybrid cloud — with identity, compliance, and FinOps wrapped in.',
    },
    {
      slug: 'remote-it-support',
      title: '24/7 Helpdesk Support',
      description:
        'High first-call resolution, real engineers answering, after-hours coverage that does not bill at emergency rates.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description:
        'Tested recovery for production systems, file shares, and SaaS environments — with RTO and RPO targets you can defend to leadership.',
    },
    {
      slug: 'vcio-leadership',
      title: 'vCIO, vCTO & vCISO Services',
      description:
        'Strategic IT, security, and AI leadership for firms that need executive expertise without a full-time hire.',
    },
    {
      slug: 'it-procurement',
      title: 'IT Procurement',
      description:
        'Hardware, software, and licensing sourced at the discounts your size actually qualifies for — without the vendor management overhead.',
    },
  ],
  pillars: [
    {
      eyebrow: 'Augment Your In-House Team',
      headlineLead: 'Give your IT lead',
      headlineAccent: 'their evenings back.',
      paragraphs: [
        "Most mid-sized firms have one or two IT generalists doing the work of five. They're handling helpdesk, vendor management, projects, security alerts, and the CEO's laptop — and they're exhausted. Important strategic work keeps slipping because the urgent tactical work never ends.",
        "ITSco co-manages alongside your internal team: we take overnight monitoring, 24/7 SOC, security operations, and infrastructure heavy-lifting; your person keeps the institutional knowledge, user-facing concierge work, and the relationships they've built. Their workload becomes humane. Their work becomes strategic.",
        "The result: your in-house team gets back to building competitive advantage, and the work you're already paying for stops slipping through the cracks.",
      ],
      image: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
      imageAlt: 'Co-managed support team augmenting in-house IT',
      imageSide: 'right',
    },
    {
      eyebrow: 'Managed Cybersecurity Services for Mid-Sized Firms',
      headlineLead: 'Big-company threats',
      headlineAccent: 'meeting big-company defenses.',
      paragraphs: [
        "Mid-sized firms are now squarely in the crosshairs. They have enough revenue and data to be a worthwhile target, but rarely the in-house security depth to defend at the level the threats demand. The result is the gap attackers are exploiting — and the gap regulators, insurers, and customers are increasingly asking about.",
        "ITSco delivers managed cybersecurity services purpose-built for mid-sized firms: 24/7 SOC monitoring, MDR for endpoint and identity, SIEM correlation, vulnerability management, phishing-resistant MFA, email security, and tested incident response. The same defenses larger enterprises operate — sized, priced, and integrated for a company your size.",
        "When something does land, the playbooks are already written and the team already knows your environment. The first hour of an incident is the difference between a contained event and a board-level crisis.",
      ],
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations team monitoring threats for a mid-sized firm',
      imageSide: 'left',
    },
    {
      eyebrow: 'Predictable Cost as You Grow',
      headlineLead: 'Scale headcount',
      headlineAccent: 'without scaling chaos.',
      paragraphs: [
        "Mid-sized firms are usually in the middle of meaningful growth — adding employees, opening a new office, acquiring a smaller competitor, signing larger customers that demand more from your security posture. Each step adds users, systems, and risk. The firm needs IT and security that absorb growth without ad-hoc cost.",
        "ITSco prices on a per-user model that grows with you. Onboarding automation provisions new staff cleanly. Centralized identity, security, and monitoring scale to new offices and acquisitions without re-architecting. Procurement happens at the discounts your size actually unlocks.",
        "Surprise project invoices, emergency vendor work, and the hidden cost of overloaded internal staff get replaced with a predictable monthly cost you can plan around.",
      ],
      image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
      imageAlt: 'Mid-sized business leadership planning growth and IT alignment',
      imageSide: 'right',
    },
    {
      eyebrow: 'Strategy Beyond Keeping the Lights On',
      headlineLead: 'Technology that compounds —',
      headlineAccent: 'not just technology that works.',
      paragraphs: [
        "When IT is consumed by keeping the lights on, strategic work disappears. The cloud migration that should have happened gets deferred another quarter. The Microsoft 365 features the firm is already paying for never get deployed. The data sitting in three systems never becomes a decision-making advantage.",
        "ITSco brings senior engineering and virtual-executive capacity — vCIO, vCTO, vCISO, and now vCAIO — to mid-sized firms that need real strategic leadership without the cost of a full-time C-suite hire. Roadmaps get built, prioritized, and executed against measurable business outcomes.",
        "Every modernization step is tied to revenue, cost, risk, or operational impact — not technology for technology's sake.",
      ],
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Virtual IT executives advising a mid-sized firm leadership team',
      imageSide: 'left',
    },
  ],
  midCta: {
    eyebrow: 'Outgrown Off-the-Shelf IT',
    headline: "Talk to the IT team built for mid-sized firms.",
    utmSuffix: 'mid-sized-business-it-mid',
  },
  caseStudies: {
    eyebrow: 'Proof, Not Promises',
    headlineLead: 'Engineering excellence,',
    headlineAccent: 'delivered.',
    cards: [
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
    headlineLead: 'Mid-sized business IT,',
    headlineAccent: 'answered.',
  },
  faqCalendlyUtm: 'mid-sized-business-it-faq',
  faqs: [
    {
      question: 'What quality of support does ITSco provide for mid-sized businesses?',
      answer: [
        "ITSco delivers tier-2-and-above engineering as the baseline — not a tier-1 ticket queue. Helpdesk is staffed by real engineers 24/7. First-call resolution is the metric we own. After-hours coverage is included. Critical incidents trigger pre-built playbooks for your specific environment. Senior people get fast-tracked to senior engineers. Most mid-sized firms tell us within a few months that the experience is closer to having a real internal IT department than they expected possible.",
      ],
    },
    {
      question: 'What does engaging ITSco typically cost?',
      answer: [
        "Cost scales with environment complexity — user count, sites, the depth of co-managed support you need, and your security and compliance posture. For most 50-250 person firms, managed IT plus 24/7 SOC plus continuous compliance support runs as a predictable per-user monthly fee that replaces ad-hoc vendor spend, surprise project invoices, and the hidden cost of overloaded internal staff. Most engagements start with a free scoping consultation so the proposal reflects your actual environment.",
      ],
    },
    {
      question: 'Why choose ITSco specifically for mid-sized business IT?',
      answer: [
        "ITSco has spent 30 years working with mid-sized firms — long enough to know what actually breaks at this scale and what doesn't. We deliver the same security operations larger enterprises buy, sized and priced for your stage. We co-manage well alongside in-house staff. We bring strategic capacity through vCIO, vCTO, vCISO, and vCAIO leadership. And we win on outcomes, not contracts: most clients stay with us five years or longer because the work delivers.",
      ],
    },
    {
      question: 'How does ITSco support scaling our IT as we grow?',
      answer: [
        "Per-user pricing scales with your hiring plan instead of forcing renegotiation. Onboarding automation handles new staff provisioning cleanly. Centralized identity, security monitoring, and infrastructure absorb new locations and acquisitions without re-architecting. When your headcount doubles, your IT cost line doubles in the same proportion — no surprise vendor bills, no emergency project fees.",
      ],
    },
    {
      question: 'Can ITSco help us turn IT into a business advantage?',
      answer: [
        "Yes — and that's the work we want to be doing. The break-fix work is table stakes. Beyond that, our vCIO and consulting engagements identify where technology can compound your operational leverage: automating repeatable work, integrating systems that are quietly duplicating effort, deploying the Microsoft 365 and AI features you're already paying for, and turning data into decision support. Every initiative gets tied to a measurable business outcome.",
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
        '24/7 SOC, MDR, identity-led access, and continuous compliance — the managed cybersecurity services mid-sized firms need.',
      href: '/cybersecurity/',
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations engineers reviewing code on multiple monitors',
    },
    {
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, helpdesk, and infrastructure management on a predictable monthly fee — the foundation of every engagement.',
      href: '/managed-it-services/',
      image: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
      imageAlt: 'Helpdesk engineer supporting users',
    },
    {
      slug: 'vcio-vcto-vciso',
      title: 'vCIO, vCTO, vCISO & vCAIO',
      description:
        'Strategic IT, security, and AI leadership for firms that need executive expertise without a full-time hire.',
      href: '/vcio-vcto-vciso-services/',
      image: '/images/hero/consulting/pexels-vlada-karpovich-7433919.jpg',
      imageAlt: 'Executive advisors meeting with a leadership team',
    },
  ],
  bookingUtm: 'mid-sized-business-it-bottom',
}
