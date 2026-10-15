// Content for /about-us/meet-the-team/
//
// Verbatim copy lives in ./_source.ts. Mike Savino's bio is added
// here as a literal — the auto-extractor missed it because it was
// only present in alt-text/schema fields, not body paragraphs.

import { SOURCE_PARAGRAPHS } from './_source'

export const META = {
  title: 'Meet the ITSco Team | Senior Leadership & Engineers',
  description: 'ITSco’s success comes from a team committed to integrity, transparency, and engineering excellence. Meet the leadership behind 30 years of trusted IT services.',
  canonical: 'https://www.itsco.com/about-us/meet-the-team',
}

export const HERO = {
  eyebrow: 'Meet the Team',
  headlineLead: 'The people working',
  headlineAccent: 'behind the scenes.',
  body: SOURCE_PARAGRAPHS[0],
  utmSuffix: 'meet-the-team-hero',
  stat: '25+',
  statLabel: 'Years of engineering excellence',
}

export const INTRO = {
  eyebrow: 'Why we’re different',
  headlineLead: 'Great people are the',
  headlineAccent: 'foundation of everything we build.',
  paragraphs: [SOURCE_PARAGRAPHS[1], SOURCE_PARAGRAPHS[2], SOURCE_PARAGRAPHS[3]],
  image: '/images/supporting/services/priscilla-du-preez-xLKg2s4rXWE-unsplash.jpg',
  imageAlt: 'Colleagues collaborating around a table — warm, focused, professional',
}

export const TEAM = [
  {
    name: 'Mike Savino',
    title: 'CEO, CFO & Partner',
    image: '/images/team/ls_mike4.webp',
    bio: [
      'Mike is our CEO and CFO, and an influential leader who leverages expertise in managing and developing high-performing individuals and teams to drive exponential organizational results. His focus is always on the outcomes that matter most to our clients: financial stability, revenue growth, and operational excellence.',
      'Mike is a true servant-leader. He enables teams of diverse professionals to achieve goals they thought were out of reach, and is known for his ability to take on the most difficult challenges of any business. At ITSco, he thrives on mentoring our engineers and maximizing the potential of every individual on the team — a posture that translates directly into better outcomes for our customers.',
      'Mike’s track record speaks for itself. In prior leadership roles, he engineered headcount reductions of 50% through process automation and systems re-engineering — yielding annual cost savings of more than $3 million — and oversaw 400% revenue growth ($4M to $20M) in 48 months. He brings that same operational discipline and ROI focus to every engagement at ITSco.',
    ],
  },
  {
    name: 'George Terrone',
    title: 'Founding Partner',
    image: '/images/team/ls_george4.webp',
    bio: [SOURCE_PARAGRAPHS[10], SOURCE_PARAGRAPHS[11]],
  },
  {
    name: 'Greg Wassil',
    title: 'CTO & Founding Partner',
    image: '/images/team/ls_greg5.webp',
    bio: [
      'Greg has spent much of his career helping clients solve complex technology challenges while building ITSco into a company known for its integrity, technical excellence, and long-term relationships. Since 1996, he has played a key role in shaping the organization’s growth, culture, and commitment to customer success.',
      'As CTO, Greg remains deeply involved with clients, engineers, and projects. He believes successful technology projects start with listening, taking the time to understand each organization’s goals, challenges, and priorities before developing practical solutions that align technology with business needs. Whether guiding strategic initiatives, modernizing infrastructure, or leading business-critical technology projects, Greg focuses on building trust, maintaining clear communication, and delivering meaningful results.',
      'Over the years, Greg has served as an engineer, architect, project manager, mentor, advisor, and business leader. He is passionate about helping engineers grow, fostering collaboration, and creating an environment where people can do their best work. What he values most is not the technology itself, but the relationships built along the way. The trust of clients, employees, and partners, and the success achieved together, are what he considers among ITSco’s greatest accomplishments.',
    ],
  },
  {
    name: 'Zackary Beckham',
    title: 'Chief of Business Development & Partner',
    image: '/images/team/ls_zackary4.webp',
    bio: [
      'Zackary has built his career where technology, operations, and compliance meet, helping organizations protect their data, meet demanding regulatory standards, and adopt new technology in ways that deliver real value. He was introduced to ITSco through Caprae Capital and quickly found a company whose commitment to integrity, transparency, and engineering excellence matched his own.',
      'Zackary began his career at GoDaddy, where he spent five years in the Office of the President (now the Office of the CEO) as the final point of escalation for customer issues that could not be resolved anywhere else in the organization. Working directly with lead engineers and the company’s general counsel to resolve the toughest cases, he learned early that lasting customer relationships are built on listening and following through.',
      'He went on to hold leadership roles at DMD Systems Recovery and Destroy Drive, spending more than a decade in IT asset disposition and secure data destruction. He directed data center decommissioning projects for Fortune 50 clients, including Facebook, Salesforce, and Apple, and led both companies to ISO 9001, ISO 14001, and ISO 45001 certification, maintaining those standards through years of recertification. That experience shaped his view that compliance is not a one-time project, but a discipline built into daily operations.',
      'At ITSco, Zackary focuses on customer success, particularly for clients in highly regulated industries such as healthcare, finance, and defense contracting. He has guided clients to SOC 2 certification and through CMMC readiness, and he leads ITSco’s AI initiatives both internally and for clients. A certified PMP, he has also completed several AI programs, including Anthropic’s Claude Partner Program certification.',
      'What Zackary values most is earning the kind of trust that makes ITSco the first call when the stakes are high, and building partnerships that last long after a project is complete.',
    ],
  },
]

export const PHILOSOPHY = {
  eyebrow: 'How we work',
  headlineLead: 'An engineering team —',
  headlineAccent: 'not a sales steamroller.',
  paragraphs: [SOURCE_PARAGRAPHS[12], SOURCE_PARAGRAPHS[13]],
  slogan: SOURCE_PARAGRAPHS[14],
  consultationUtmSuffix: 'meet-the-team-philosophy-inline',
}

export const SERVICE_AREA = {
  eyebrow: 'Where we operate',
  headlineLead: 'Serving Raleigh, Durham,',
  headlineAccent: 'and the RTP since 1996.',
  body: 'Headquartered in Durham, NC, ITSco serves businesses across North Carolina, South Carolina, and Virginia — with on-site and remote engineers ready to support clients throughout the Triangle and beyond.',
  address: '4601 Creekstone Drive, Suite 102, Durham, NC 27703',
  mapEmbedSrc:
    'https://www.google.com/maps?q=4601+Creekstone+Drive+Suite+102+Durham+NC+27703&output=embed',
  mapLink: 'https://maps.app.goo.gl/2CwvVh9KFAzDy3wt6',
}

export const TRUSTED_SOURCE = {
  eyebrow: SOURCE_PARAGRAPHS[14], // "ITSco: Common Sense. Uncommon Expertise."
  headlineLead: 'Your trusted source',
  headlineAccent: 'for IT services.',
  body: 'Manage your business confidently while our team delivers reliable IT services that enhance productivity.',
  whyHeading: 'Why choose ITSco for IT services?',
  reasons: [
    'Significantly reduce your technical debt with support services from one of the leading IT firms',
    'Maximize productivity and minimize downtime with reliable automated alerting and remote monitoring',
    'Ensure critical data always remains protected with our trustworthy advanced cybersecurity services',
    'Fortify your in-house IT capabilities with end-to-end support from a locally-based IT company',
    'Get executive-level support with a small business focus from seasoned engineers, managers, and IT executives',
  ],
  accreditation: {
    image: '/images/accreditations/cyber-verify-level-2.png',
    alt: 'Cyber Verify Level 2 certification by MSP Alliance',
    label: 'Independently audited by',
    body: 'MSP Alliance’s Cyber Verify Level 2 program — verifying our cybersecurity, operational, and compliance controls.',
  },
}
