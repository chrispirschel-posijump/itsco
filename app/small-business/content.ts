// Content for /small-business/
//
// Rewrite page — fresh ROI-focused content. Primary keyword:
// "small business IT services". Audience: small business owner /
// office manager at a 5-50 employee organization. Framing: become
// your IT department, real cybersecurity on a small budget,
// predictable cost, room to grow.

import type { IndustryContent } from '@/components/IndustryPage'

export const CONTENT: IndustryContent = {
  meta: {
    title: 'Small Business IT Services | Managed IT for SMBs | ITSco',
    description:
      "Small business IT services from ITSco — proactive managed IT, real cybersecurity, and 24/7 helpdesk on a predictable monthly cost. Built for businesses that don't have an IT department. Book a free consultation.",
    canonical: 'https://www.itsco.com/small-business/',
  },
  hero: {
    eyebrow: 'Small Business IT Services',
    headlineLead: 'Your IT department,',
    headlineAccent: 'without the IT department.',
    body: "Managed IT, cybersecurity, and 24/7 helpdesk built for small businesses — 5 to 50 employees, no internal IT staff, big-business threats. ITSco gives you the same posture larger competitors have, on a predictable monthly cost you can actually plan around.",
    utmSuffix: 'small-business-it-hero',
  },
  heroImage: {
    src: '/images/supporting/services/priscilla-du-preez-xLKg2s4rXWE-unsplash.jpg',
    alt: 'Small business team collaborating around a table',
  },
  capabilitiesHeading: {
    eyebrow: 'Complete IT Solutions',
    headlineLead: 'Everything a small',
    headlineAccent: 'business actually needs.',
  },
  capabilities: [
    {
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, patching, and infrastructure management on a flat monthly fee — sized to small businesses.',
    },
    {
      slug: 'remote-it-support',
      title: '24/7 Helpdesk Support',
      description:
        'A real engineer answering when you call — including after hours, weekends, and the times your business actually needs help.',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & MSSP',
      description:
        '24/7 SOC, MDR, MFA, and email security — the same protections big companies have, sized to a small business budget.',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud & Microsoft 365',
      description:
        'Managed M365, Teams, and OneDrive — so your team can work from anywhere without losing files or productivity.',
    },
    {
      slug: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description:
        "Tested backups for the systems and files you can't afford to lose — and a recovery plan that actually works when you need it.",
    },
    {
      slug: 'managed-network-services',
      title: 'Network Support',
      description:
        'Reliable Wi-Fi, secure remote access, and the network infrastructure your business runs on, monitored 24/7.',
    },
    {
      slug: 'security-awareness-training',
      title: 'Security Awareness Training',
      description:
        'Phishing simulations and bite-sized training that turn your team from the biggest risk into the strongest defense.',
    },
    {
      slug: 'it-procurement',
      title: 'IT Procurement',
      description:
        'Hardware, software, and licensing sourced through ITSco at the discounts a small business cannot get on its own.',
    },
    {
      slug: 'it-management-consulting',
      title: 'IT Strategy & Consulting',
      description:
        'Practical, plain-English IT planning — what to do now, what to do next, and what to ignore.',
    },
  ],
  pillars: [
    {
      eyebrow: 'We Become Your IT Department',
      headlineLead: "No in-house IT?",
      headlineAccent: "That's exactly who we're built for.",
      paragraphs: [
        "Most small businesses can't justify a full-time IT hire — but they still need someone who answers the phone when the printer dies, the email stops, or a laptop won't boot before an important meeting. ITSco becomes that team for you at a fraction of the cost of a single in-house engineer.",
        "Helpdesk is staffed by real people who know your environment. Monitoring and patching happen in the background so issues get caught before they become outages. Strategic planning happens with you twice a year, in plain English, focused on what your business actually needs.",
        "The result: technology stops being the thing the owner deals with on top of running the business — and becomes something that just works.",
      ],
      image: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
      imageAlt: 'Helpdesk engineer supporting a small business team',
      imageSide: 'right',
    },
    {
      eyebrow: 'Real Cybersecurity on a Small Business Budget',
      headlineLead: 'The threats are the same.',
      headlineAccent: 'Your defenses should be too.',
      paragraphs: [
        "Attackers don't care how many employees you have. Ransomware, business-email compromise, and credential theft hit small businesses every day — and the financial damage from one incident can exceed years of IT spend. The good news: the defenses that work for larger companies work for you too. They just need to be sized right.",
        "ITSco delivers 24/7 SOC monitoring, multifactor authentication, email security, endpoint protection, and security awareness training as part of one managed service. No piecing it together. No hoping the antivirus you bought five years ago is still enough.",
        "If something does go wrong, you have a team that knows your environment and a response playbook that's already written — instead of figuring it out at midnight on a Sunday.",
      ],
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations protecting a small business environment',
      imageSide: 'left',
    },
    {
      eyebrow: 'Predictable Cost, Flexible Terms',
      headlineLead: 'A flat monthly fee.',
      headlineAccent: 'No surprises.',
      paragraphs: [
        "Small businesses can't budget for IT the way enterprises do. Surprise project invoices, emergency repair bills, and after-hours rates wreck a P&L. ITSco prices managed IT as a predictable per-user monthly fee that covers helpdesk, monitoring, security, and ongoing maintenance — so you know what next month costs the same way you know what your rent costs.",
        "Engagements are month-to-month, not multi-year lock-ins. If we're not delivering value, you can leave. We bet on doing the work well enough that you don't want to.",
        "Hardware, software, and project work get scoped up front with transparent pricing — never billed as a surprise.",
      ],
      image: '/images/supporting/services/group-people-working-out-business-plan-office.jpg',
      imageAlt: 'Small business owner reviewing a predictable IT budget',
      imageSide: 'right',
    },
    {
      eyebrow: 'Room to Grow',
      headlineLead: 'Built for where',
      headlineAccent: "you're going, not just where you are.",
      paragraphs: [
        "Most small businesses don't stay small forever. The IT decisions you make at 15 employees shape what's possible at 50 — and a lot of small businesses learn the hard way that ad-hoc choices early on are expensive to undo later.",
        "ITSco gives you an infrastructure and security posture that grows with you. Add seats without re-architecting. Add locations without losing visibility. Add compliance requirements as new clients ask for them, without starting from scratch.",
        "When you hire your first internal IT person someday, they'll inherit a clean environment they can build on — not a mess they have to fix first.",
      ],
      image: '/images/supporting/services/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
      imageAlt: 'Small business leader planning the next stage of growth',
      imageSide: 'left',
    },
  ],
  midCta: {
    eyebrow: 'No IT Person? Perfect.',
    headline: "Talk to the IT team built for small businesses.",
    utmSuffix: 'small-business-it-mid',
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
    ],
  },
  faqHeading: {
    eyebrow: 'FAQ',
    headlineLead: 'Small business IT,',
    headlineAccent: 'answered.',
  },
  faqCalendlyUtm: 'small-business-it-faq',
  faqs: [
    {
      question: "What does engaging ITSco cost for a small business?",
      answer: [
        "Most small business engagements price as a predictable per-user monthly fee that covers helpdesk, monitoring, patching, security, and ongoing maintenance. The exact number depends on user count, the systems you run, and the depth of security and support you want. For most 5-50 person businesses, the all-in monthly cost is a fraction of one full-time IT hire — and includes 24/7 SOC coverage no single in-house person could provide. Every engagement starts with a free scoping consultation so the proposal reflects your actual setup.",
      ],
    },
    {
      question: 'Are we locked into a long contract?',
      answer: [
        "No. Engagements are month-to-month. ITSco bets on doing the work well enough that you stay because you want to, not because you have to. That said, most clients have stayed with us five years or longer — because once you have the right IT partner, you don't want to look for another one.",
      ],
    },
    {
      question: 'We have one IT person. Do you replace them, or work with them?',
      answer: [
        "Either model works. Some small businesses outsource IT to ITSco entirely. Others have an internal IT lead or office administrator who handles user concierge work and brings us in for 24/7 coverage, security operations, infrastructure, and projects. Co-managed engagements give your person back their evenings and weekends — without your business losing the institutional knowledge they bring.",
      ],
    },
    {
      question: 'How quickly do you respond when something breaks?',
      answer: [
        'Helpdesk is staffed 24/7 by real engineers — not a tier-1 ticket queue that routes to voicemail. Most issues get resolved on first contact. Critical incidents trigger pre-defined response playbooks. After-hours, weekend, and holiday coverage is included, not billed as an emergency rate.',
      ],
    },
    {
      question: 'How are we protected if we get hit by ransomware or a breach?',
      answer: [
        "ITSco maintains 24/7 SOC monitoring, endpoint protection with EDR, email security, multifactor authentication, and tested backups — the layered defense that catches most incidents before they spread. If something does land, our IR team contains it while we coordinate with your leadership, legal counsel, and cyber insurance. The first hour matters most, and the work to make that hour effective happens long before anything goes wrong.",
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
      slug: 'managed-it-services',
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, patching, and helpdesk on a predictable monthly fee — the foundation of every ITSco engagement.',
      href: '/managed-it-services/',
      image: '/images/supporting/services/berkeley-communications-WEDDt-u3q3o-unsplash.jpg',
      imageAlt: 'Helpdesk technician supporting users',
    },
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description:
        '24/7 SOC, MDR, MFA, and security awareness training — enterprise-grade defenses sized for small business budgets.',
      href: '/cybersecurity/',
      image: '/images/supporting/services/sigmund-Im_cQ6hQo10-unsplash-scaled.jpg',
      imageAlt: 'Security operations engineers reviewing code on multiple monitors',
    },
    {
      slug: 'cloud-services',
      title: 'Cloud Services',
      description:
        'Managed Microsoft 365, Teams, and Azure — the modern foundation a small business needs to work from anywhere.',
      href: '/cloud-services/',
      image: '/images/supporting/services/annie-spratt-sggw4-qDD54-unsplash-1024x702.jpg',
      imageAlt: 'Team collaborating around laptops in a modern workspace',
    },
  ],
  bookingUtm: 'small-business-it-bottom',
}
