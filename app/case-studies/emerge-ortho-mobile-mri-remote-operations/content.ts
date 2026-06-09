// Content for /case-studies/emerge-ortho-mobile-mri-remote-operations/
//
// Source: "EmergeOrtho Virtual Copilot Deployment Case Study - Rev 1.6"
// (6/10/2025). Body text is transcribed VERBATIM from the PDF with two
// stakeholder-approved typo corrections:
//   1. "Specializtion where it's needed" → "Specialization where it's needed"
//   2. The PDF opens with "Emerge Ortho" (spaced) but uses "EmergeOrtho" (closed)
//      everywhere else. Standardized to "EmergeOrtho" throughout.
// Inline **bold** spans in the source strings mirror the bold treatments in
// the PDF and are rendered by CaseStudyPage's renderInlineBold helper.

import type { CaseStudyContent } from '@/components/CaseStudyPage'

export const CONTENT: CaseStudyContent = {
  meta: {
    title:
      'EmergeOrtho Mobile MRI Case Study — Remote Operations | ITSco',
    description:
      "How ITSco's advanced networking enabled EmergeOrtho to operate mobile MRI scanners remotely — unlocking 40 extra scan hours per week, ~30–40% labor savings, and 4–5 month payback.",
    canonical:
      'https://www.itsco.com/case-studies/emerge-ortho-mobile-mri-remote-operations/',
  },
  industry: 'Healthcare',
  clientLabel: 'EmergeOrtho · Orthopedic Care, North Carolina',
  hero: {
    eyebrow: 'Case Study · Healthcare',
    title: 'Transforming Mobile MRI Services through Remote Operations',
    subtitle:
      "How ITSco's Advanced Networking Solutions Addressed Staffing Challenges, Expanded Patient Access, and Optimized Resources for EmergeOrtho",
    image: {
      src: '/images/case-studies/healthcare.jpg',
      alt: 'Healthcare imaging environment — remote MRI operations',
    },
    utmSuffix: 'emerge-ortho-mri-hero',
  },
  highlights: [
    { value: '40 hrs', label: 'Extra MRI scanning per week, per truck' },
    { value: '20 pts', label: 'Fleet utilization lift' },
    { value: '30–40%', label: 'Labor cost reduction' },
    { value: '4–5 mo', label: 'Project payback period' },
  ],
  sections: [
    {
      heading: 'Executive Summary',
      paragraphs: [
        "EmergeOrtho provides comprehensive orthopedics across North Carolina, and Eric Chapman is the Director of Rehab & Administrative Operations. ITSco has developed a deep partnership with EmergeOrtho over the last 19 years focused on solving key IT hurdles and unlocking additional value. Recently, EmergeOrtho approached us regarding an issue related to staffing remote locations; below we explain the solution we implemented.",
        "EmergeOrtho's 17-site imaging network—including a fleet of mobile MRI trucks—was routinely hamstrung by soaring technologist wages, persistent staffing gaps, and chronically under-utilized scanners in rural markets. To reverse the trend, the organization partnered with ITSco to adapt Siemens Healthineers' **syngo Virtual Cockpit**—a remote-operation platform never before deployed in a mobile environment—into a turnkey solution that could be rolled out rapidly and at scale.",
        "ITSco engineered a **secure, self-identifying “network-island” architecture** for each trailer, installed ruggedized hardware that withstands highway transit, and stitched the entire ecosystem into EmergeOrtho's HIPAA-compliant infrastructure. By doing so, one expert technologist can now operate multiple scanners concurrently from a central hub while on-site staff focus solely on patient facilitation.",
        'The results are compelling:',
      ],
      boldBullets: [
        {
          lead: 'Utilization unlocked.',
          rest: 'The once-dark MRI now scans **an extra 40 hours each week**, lifting fleet utilization roughly **20 percentage points**.',
        },
        {
          lead: 'Labor efficiency.',
          rest: '“One technologist now runs two machines simultaneously, significantly cutting our labor costs,” Chapman said—an estimated **30–40 % reduction**.',
        },
        {
          lead: 'Rapid payback.',
          rest: 'At roughly **480 scans** the project paid for itself; that threshold arrived **in just four to five months**, after which “everything is essentially profit.”',
        },
        {
          lead: 'Clinical fidelity.',
          rest: 'Radiologists report image quality indistinguishable from on-site studies, silencing skeptics and preserving diagnostic confidence.',
        },
        {
          lead: 'Staff development.',
          rest: 'Live screen-sharing exposed silent skill gaps and created real-time mentorship loops: “Remote monitoring revealed which technologists lacked necessary skills, improving our overall quality,” Chapman added.',
        },
        {
          lead: 'Community impact.',
          rest: 'Rural patients regained local access to advanced imaging, reducing costly hospital transfers.',
        },
        {
          lead: "Specialization where it's needed:",
          rest: 'When performing complex scans like Cardiac MRIs, we can now call in a specialist to assist in the imaging procedure, without the specialist having to commute several hours away.',
        },
      ],
      trailingParagraphs: [
        'Beyond immediate savings, ITSco documented best-practice playbooks and network diagrams that shorten future deployments to as little as **two weeks**, setting the stage for expansion into CT and other modalities. In short, ITSco has transformed under-staffed, under-performing mobile assets into a high-yield, enterprise-wide resource—demonstrating a replicable roadmap for any provider wrestling with workforce shortages, geographic disparities, or under-leveraged capital equipment.',
      ],
    },
    {
      heading: 'Introduction & Background',
      paragraphs: [
        "EmergeOrtho, facing persistent staffing shortages and escalating labor costs, sought to revitalize its approach to offering MRI services across 17 locations, including mobile MRI units. While Siemens Healthineers' “Mobile Cockpit” solution (built on the syngo Virtual Cockpit platform) provided the core functionality for remote scanning, it had never been implemented in a mobile environment. Furthermore, the deployment demanded extensive expertise in networking, mounting specialized hardware in a restricted trailer, and ensuring compliance with stringent medical regulations.",
      ],
    },
    {
      heading: "ITSco's Critical Role",
      paragraphs: [
        'ITSco entered the scene as an integrator uniquely equipped to handle both the technical and logistical complexities of this project. Having orchestrated multiple remote-imaging installations in healthcare settings, ITSco possessed the domain knowledge and strategic capabilities EmergeOrtho needed: robust security practices, a proven deployment methodology, and an in-depth understanding of how to align imaging protocols with operational goals.',
      ],
    },
    {
      heading: 'Overcoming Technical and Operational Barriers',
      paragraphs: [
        'One of the most significant hurdles stemmed from the compact design of a mobile MRI trailer. The technology must be carefully positioned to ensure all components are properly secured for highway travel and arranged to streamline the on-site workflow. ITSco collaborated with EmergeOrtho to devise tailored hardware configurations, including specialized brackets and cable-routing solutions that stand up to the physical jostling inherent in mobile transport.',
        "Establishing a reliable network architecture was equally imperative. Previously, each truck attempted to connect with a building's pre-existing network, requiring manual IP configurations that caused frequent misalignments. Through ITSco's “network island” concept, each mobile MRI unit was outfitted with dedicated hardware that automatically identifies and authenticates its location upon arrival, thereby mitigating the need for repetitive, location-specific setup tasks. This capability not only preserves data integrity and reduces IT overhead, but also helps maintain unbroken remote access—even when the truck moves to different clinics.",
        "Security and compliance considerations, such as ensuring encryption of data in transit and integrating with Active Directory for user authentication, demanded rigorous attention. Siemens Healthineers provides baseline security features within syngo Virtual Cockpit, yet implementing them effectively across mobile hardware and multiple clinical sites necessitated ITSco's specialized understanding of healthcare IT standards. By incorporating HIPAA-aligned best practices into every phase—from initial system architecture to final user training—ITSco enabled EmergeOrtho to confidently deploy the solution with minimal concern for regulatory lapses.",
        "Fitting these deployments around operational schedules posed an additional test. EmergeOrtho's second truck, already active 12 hours a day, had to be retrofitted with minimal interruption. Coordinating all tasks—installation, testing, validation—with the truck's clinical calendar required exacting planning. ITSco completed the transformation in about a week, largely by orchestrating work in off-hours and leveraging their strong partnerships with hardware vendors to ensure equipment arrived when needed.",
      ],
    },
    {
      heading: 'Elevated Access to Specialized Imaging',
      paragraphs: [
        'By consolidating expert staff in one location, EmergeOrtho can now offer high-level imaging services to geographically dispersed patient populations. Technologists no longer need to travel from site to site, and mobile MRI units remain operational on a flexible schedule, alleviating burdens for both patients and providers.',
      ],
    },
    {
      heading: 'Financial and Operational Efficiency',
      paragraphs: [
        'With each technologist able to oversee multiple machines, EmergeOrtho is well-positioned to reduce staffing expenditures. Furthermore, every mobile unit can now serve more patients—augmenting revenue, improving return on investment, and cutting down on machine downtime. This synergy of heightened utilization and contained labor costs forms a compelling business case for any healthcare entity grappling with limited or unbalanced staffing.',
      ],
    },
    {
      heading: "Unique Value of ITSco's Expertise",
      boldBullets: [
        {
          lead: 'Comprehensive Healthcare IT Acumen:',
          rest: 'ITSco merges technical proficiency with deep familiarity of clinical settings, allowing them to address HIPAA, network design, and physical constraints in one holistic approach.',
        },
        {
          lead: 'Adaptable, Customer-Centric Execution:',
          rest: "Their methodology flexes to client timelines and needs. The first EmergeOrtho truck deployment took six weeks from planning to completion; the second was accomplished in a week—demonstrating ITSco's capacity to refine processes and integrate lessons quickly.",
        },
        {
          lead: 'Commitment to Continuity and Growth:',
          rest: 'Beyond the immediate success, ITSco has documented procedures, generated network diagrams, and prepared best-practice guides. These resources streamline future rollouts, scaling success across multiple modalities (including prospective expansions to CT or other advanced imaging devices).',
        },
      ],
    },
    {
      heading: 'Looking Forward',
      paragraphs: [
        "EmergeOrtho's mobile MRI trucks, powered by syngo Virtual Cockpit and ITSco's implementation, stand as a testament to how modern technology can alleviate staffing crunches, minimize high labor costs, and bring sophisticated healthcare services closer to patients—no matter how remote. Organizations aiming to replicate this success should invest in both the right software tools and an integrator capable of managing the full ecosystem, from physical hardware installations to advanced networking solutions.",
        "In a healthcare landscape grappling with staffing shortages and the demand for flexible, high-quality care, this remote MRI model offers a ready-made blueprint for long-term success. By capitalizing on ITSco's proven knowledge, enterprises can confidently navigate the challenges of installing and optimizing remote imaging systems—ultimately benefiting practitioners, patients, and bottom lines alike.",
      ],
      pullQuote: {
        quote:
          'Implementing remote operations in mobile healthcare settings is a complex puzzle. Yet with thoughtful planning and specialized expertise, you can transform underutilized or hard-to-staff equipment into a dynamic, accessible resource that serves more patients and drives down costs.',
        attribution: 'an ITSco engineer',
      },
    },
  ],
  related: [
    {
      category: 'Healthcare',
      title: 'Unlocking Business Opportunities Through IT Innovation',
      description:
        'Southern Rehabilitation Network secured a critical State of North Carolina contract after a cybersecurity and infrastructure modernization led by ITSco.',
      image: '/images/supporting/industries/pexels-polina-tankilevitch-5234499.jpg',
      imageAlt: 'Healthcare provider with tablet — IT modernization',
      href: '/case-studies/southern-rehabilitation-network/',
    },
    {
      category: 'Financial Services',
      title: 'Helping a $27 Billion Business Upgrade its Network Management Capabilities',
      description:
        'A century-old regional bank with 250+ offices and 2,800 employees turned to ITSco to modernize network management through Ansible-based automation.',
      image: '/images/case-studies/banking.jpg',
      imageAlt: 'Financial services environment',
      href: '/case-studies/regional-bank/',
    },
    {
      category: 'Energy',
      title: 'Network Automation Project Improves Security, Supportability, and Scalability',
      description:
        "After a multi-million-dollar breach, one of the world's largest oil companies brought in ITSco — via Red Hat — to stand up Ansible Tower and harden the network.",
      image: '/images/case-studies/energy.jpg',
      imageAlt: 'Energy industry infrastructure',
      href: '/case-studies/network-automation/',
    },
  ],
  bookingUtm: 'emerge-ortho-mri-bottom',
}
