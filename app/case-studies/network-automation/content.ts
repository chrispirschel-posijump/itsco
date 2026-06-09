// Content for /case-studies/network-automation/
//
// Source: "Network Automation Project Improves Security, Supportability,
// and Scalability" — the canonical/newer ITSco case study PDF. (An older
// draft of the same study, with the cover typo "CASE STYDY" and an
// incorrect footer phone number, exists separately and is not used here.)
// Body text is transcribed VERBATIM from the canonical PDF.

import type { CaseStudyContent } from '@/components/CaseStudyPage'

export const CONTENT: CaseStudyContent = {
  meta: {
    title:
      'Oil Company Network Automation Case Study — Ansible Tower Deployment | ITSco',
    description:
      "After a multi-million-dollar breach, one of the world's largest oil companies brought in ITSco via Red Hat to stand up Ansible Tower and harden network operations across security, supportability, and scalability.",
    canonical: 'https://www.itsco.com/case-studies/network-automation/',
  },
  industry: 'Energy',
  clientLabel: "Anonymous · One of the world's largest oil companies",
  hero: {
    eyebrow: 'Case Study · Energy',
    title:
      'Network Automation Project Improves Security, Supportability, and Scalability',
    image: {
      src: '/images/case-studies/energy.jpg',
      alt: 'Energy industry infrastructure — network operations and security',
    },
    utmSuffix: 'oil-network-automation-hero',
  },
  sections: [
    {
      heading: 'The Background',
      paragraphs: [
        "As one of the world's largest oil companies, the subject of this case study is under almost constant attack by cyber criminals and state actors who wish to disrupt western economies for financial and political gain.",
        "After a massive breach that affected their business network for several months and cost multiple-millions-of-dollars, our (soon-to-be) client mounted a massive effort to secure its network and improve its cybersecurity defenses across the company.",
        "This effort included a review of vulnerabilities and the creation of remediation plans at every level of the network – from network architecture and device configuration standards, to network security policies and procedures.",
        "As part of solving this complex puzzle, the client reached out directly to Red Hat for help because of its expertise in network automation. And through its relationships in the Red Hat Partner Network, ITSco was asked to work on this project. Specifically, we were asked to work with the client's internal resources to help setup a network automation infrastructure, integrate it with the existing enterprise resource management system and configure it to improve operational efficiency and security, drive standardization, detect irregularities, and lessen the potential for human error.",
        "The client wanted results fast. They wanted proof that the solution would be effective. And they wanted to be confident that, at the end of the engagement, their personnel would be up-to-speed on the ongoing management of the platform.",
        "The primary tool used for this project was Red Hat's Ansible Tower Automation Platform, a flexible automation toolset that can be used across diverse network devices, making it easier to automate entire networks and IT processes.",
      ],
    },
    {
      heading: 'The Deliverables',
      bullets: [
        'Provision of computing resources to provide a high-availability environment,',
        'Installation and configuration of Ansible Tower to support separate test and production environments,',
        'Integration of Ansible Tower with existing IT management infrastructure,',
        {
          text: 'Creation of initial Ansible “playbooks” to support network operations automation, including:',
          subItems: [
            '**Automated management of Firewall rules and ACLs**',
            '**Automation of network segmentation initiatives**',
            '**Network device configuration standardization and consistency checking**',
          ],
        },
        'Full documentation, including recommendations for best practices',
        'Mentorship of client personnel on Ansible capabilities, configuration, and best practices',
      ],
    },
    {
      heading: 'The Results',
      paragraphs: [
        'Deliverables were all met on-time and within budget. And because of our efforts, the client now has:',
      ],
      boldBullets: [
        {
          lead: 'A fully functional Ansible Tower environment,',
          rest: 'integrated into the existing IT management infrastructure, that can support its network automation efforts, improve operational efficiency and scalability, drive standardization, validate configurations, detect irregularities, and lessen the potential for human error,',
        },
        {
          lead: 'A core set of Templates and Playbooks',
          rest: 'to support their most critical security projects,',
        },
        {
          lead: 'Internal resources',
          rest: 'who have been successfully mentored to take over the operation and extension of the system.',
        },
      ],
      trailingParagraphs: [
        'Due to the sensitive nature of this project, our client must remain anonymous. At the same time, they were so pleased with the results, that they brought us back for an additional security engagement (an SSL Certificate Management System) almost immediately.',
      ],
    },
  ],
  related: [
    {
      category: 'Financial Services',
      title: 'Helping a $27 Billion Business Upgrade its Network Management Capabilities',
      description:
        'A century-old regional bank with 250+ offices and 2,800 employees turned to ITSco — via the Red Hat Partner Network — to modernize network management through Ansible-based automation.',
      image: '/images/case-studies/banking.jpg',
      imageAlt: 'Financial services environment',
      href: '/case-studies/regional-bank/',
    },
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
      category: 'Healthcare',
      title: 'Unlocking Business Opportunities Through IT Innovation',
      description:
        'Southern Rehabilitation Network secured a critical State of North Carolina contract after a cybersecurity and infrastructure modernization led by ITSco.',
      image: '/images/supporting/industries/pexels-polina-tankilevitch-5234499.jpg',
      imageAlt: 'Healthcare provider with tablet — IT modernization',
      href: '/case-studies/southern-rehabilitation-network/',
    },
  ],
  bookingUtm: 'oil-network-automation-bottom',
}
