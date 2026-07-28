// Content for /case-studies/southern-rehabilitation-network/
//
// Source: "Unlocking Business Opportunities Through IT Innovation" — ITSco
// case study PDF. Body text is transcribed VERBATIM from the PDF.
// The PDF splits "The Results" across two pages with a "The Results cont."
// continuation header; that's a layout artifact, not a distinct heading, so
// both halves are joined under a single "The Results" section here.

import type { CaseStudyContent } from '@/components/CaseStudyPage'

export const CONTENT: CaseStudyContent = {
  meta: {
    title:
      'Southern Rehabilitation Network Case Study — IT Modernization | ITSco',
    description:
      "How ITSco's cybersecurity and infrastructure modernization helped Southern Rehabilitation Network meet stringent State of North Carolina security requirements and secure a critical contract.",
    canonical:
      'https://www.itsco.com/case-studies/southern-rehabilitation-network',
  },
  industry: 'Healthcare',
  clientLabel: 'Southern Rehabilitation Network · Healthcare',
  hero: {
    eyebrow: 'Case Study · Healthcare',
    title: 'Unlocking Business Opportunities Through IT Innovation',
    image: {
      src: '/images/supporting/industries/pexels-polina-tankilevitch-5234499.jpg',
      alt: 'Healthcare provider reviewing patient records on a tablet — IT modernization and cybersecurity',
    },
    utmSuffix: 'srn-it-innovation-hero',
  },
  sections: [
    {
      heading: 'Overview',
      paragraphs: [
        "Southern Rehabilitation Network (SRN), a long-time customer for whom we provide managed services, needed a major update to its computing infrastructure and cybersecurity practices to support its bid for a critical contract with the State of North Carolina.",
      ],
    },
    {
      heading: 'The Challenge',
      paragraphs: [
        "Security has become an increasingly significant consideration when organizations and governments select vendors, and the State of North Carolina is no exception. The cybersecurity requirements for new contracts have become much more stringent and Southern Rehabilitation Network was justifiably concerned about meeting the standards needed to secure a new state contract that was critical to their business. They had to significantly improve their security posture and scale their computing environment quickly and effectively without overspending. Most of all, they needed to be confident that their IT vendor could design and deliver what was necessary to meet the State's requirements on-time and on-budget.",
      ],
    },
    {
      heading: 'The Solution',
      paragraphs: [
        "SRN already had a relationship with ITSco but had never engaged us in a project of this scale before. When they approached us with this challenge, we took the time to understand the State's requirements and followed thorough with a comprehensive review of SRN's entire computing and security infrastructure. Based on this “discovery” process, we then created a project plan that included (a) what we needed to do and why, (b) a timeline for deployment and (c) a budget.",
        "After reviewing our credentials and proposals for this effort, SRN felt comfortable that we understood the challenge and could deliver the solution they needed. Most of all, they trusted our advice and our abilities to deliver as promised.",
      ],
    },
    {
      heading: 'The Results',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            "SRN's trust in ITSco was well-placed. The project was delivered on time and on budget. Major accomplishments include:",
          ],
        },
        {
          type: 'bullets',
          items: [
            'Implementation of modern security policies and practices, including a Security Information Event Management system, ongoing vulnerability scanning and management, email phishing prevention, and a cybersecurity training platform',
            'Updating of the SRN infrastructure by replacing end-of-life hardware and migrating the core computing environment to a more modern and secure operating system',
            'Migration of on-premises Exchange mail system to Microsoft 365',
            'Replacement of cumbersome on-premises fax server with a more reliable SaaS service',
            'Design and implementation of a disaster recovery solution for critical business applications',
            'Replacement of an older, local backup system with a robust hybrid cloud service',
            'Implementation of additional processes and controls to achieve SOC2 Type 2 certification to meet specific state government security requirements.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'As a result of these efforts, SRN was able to meet its **primary business objective** of successfully securing a new state contract.',
            'In addition, SRN:',
          ],
        },
        {
          type: 'bullets',
          items: [
            'Is a more secure environment, with greatly reduced risks to the business,',
            'Is better positioned to win new customers who require cybersecurity certifications,',
            'Is better prepared to maintain its current URAC accreditation and SOC2 Type 2 certification – and better positioned to obtain any additional security standards that may be required in the future.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            "As a result of our efforts, Southern Rehabilitation Network can move its business forward with an improved security posture, a lower risk of cybersecurity attacks, and a scalable computing infrastructure that will meet evolving technology and security needs more easily.",
            'SRN now has the certifications required to qualify for critical state contracts – and the processes and procedures needed to maintain those certifications.',
          ],
        },
      ],
    },
    {
      heading: 'In Their Words',
      pullQuote: {
        quote:
          'ITSco listens to our needs and does a great job of explaining the technical jargon so the technical and non-technical can understand all options to ensure a successful project outcome. ITSco has happily been a vendor of ours since 2009.',
        attribution: 'Jane Rouse, President (former), Southern Rehabilitation Network',
      },
    },
  ],
  related: [
    {
      category: 'Healthcare',
      title: 'Transforming Mobile MRI Services through Remote Operations',
      description:
        "How ITSco's advanced networking enabled EmergeOrtho to operate mobile MRI scanners remotely — unlocking 40 extra scan hours per week and ~30–40% labor savings.",
      image: '/images/case-studies/healthcare.jpg',
      imageAlt: 'Healthcare imaging environment',
      href: '/case-studies/emerge-ortho-mobile-mri-remote-operations/',
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
  bookingUtm: 'srn-it-innovation-bottom',
}
