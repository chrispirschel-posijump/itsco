// Content for /case-studies/regional-bank/
//
// Source: "Helping a $27 Billion Business Upgrade its Network Management
// Capabilities" — ITSco case study PDF (anonymous regional bank). Body
// text is transcribed VERBATIM from the PDF. The original results bullets
// are fully bold in the PDF; that styling is reproduced via inline
// **double-asterisk** markers, which CaseStudyPage's renderInlineBold helper
// renders as <strong>. The phrase "mentor ship" in the third results
// bullet appears as two words in the source PDF and is preserved verbatim.

import type { CaseStudyContent } from '@/components/CaseStudyPage'

export const CONTENT: CaseStudyContent = {
  meta: {
    title:
      'Regional Bank Network Automation Case Study — Ansible Tower | ITSco',
    description:
      'A 100+ year old, $27 billion regional bank turned to ITSco — via the Red Hat Partner Network — to deploy AWX/Ansible/Red Hat Tower across 250+ offices and automate network management.',
    canonical: 'https://www.itsco.com/case-studies/regional-bank/',
  },
  industry: 'Financial Services',
  clientLabel: 'Anonymous · $27 Billion regional bank, 250+ offices, 2,800 employees',
  hero: {
    eyebrow: 'Case Study · Financial Services',
    title:
      'Helping a $27 Billion Business Upgrade its Network Management Capabilities',
    image: {
      src: '/images/case-studies/banking.jpg',
      alt: 'Financial services environment — network management at scale',
    },
    utmSuffix: 'regional-bank-hero',
  },
  highlights: [
    { value: '$27B', label: 'In assets under management' },
    { value: '250+', label: 'Office locations' },
    { value: '2,800', label: 'Employees' },
    { value: '100+', label: 'Years in operation' },
  ],
  sections: [
    {
      heading: 'The Challenge',
      paragraphs: [
        'A 100+ year old regional bank with over $27 Billion in assets and more than 250 offices and 2800 employees needed help improving the security and scalability of their network infrastructure.',
        "This bank has a well-qualified network-engineering group whose primary focus is day-to-day operations. They didn't have the time or specialized expertise to make rapid progress on modernization of their network management process and procedures. Traditional, manual approaches to network configuration and management were too slow and error-prone to effectively support the needs of a growing company with critical security requirements. Network automation, on the other hand, uses programmable logic to manage network resources and services securely and efficiently at any scale. **It was clear that automation was needed.**",
        "The customer's network operations group chose Ansible as its automation platform but needed additional expertise to jump-start the initial phases of the project and mentor its engineers. They reached out directly to Red Hat and ITSco was engaged through RedHat's partner network.",
      ],
    },
    {
      heading: 'The Project',
      bullets: [
        'Installation and configuration of AWX/Ansible/Red Hat Tower network automation infrastructure',
        'Integration with existing enterprise resource management system (SolarWinds)',
        {
          text: 'Development of use cases and playbooks to support network operations automation, including:',
          subItems: [
            '**DHCP reservation/lease management automation**',
            '**Switch port security automation**',
            '**ACL management automation**',
            '**VLAN management automation**',
            '**Network device upgrade and patching automation**',
          ],
        },
      ],
    },
    {
      heading: 'The Results',
      paragraphs: ['Deliverables were all met on-time and within budget:'],
      bullets: [
        '**A fully functional Ansible/Tower environment, integrated with its enterprise resource management system, to be used as a testbed for its network automation initiatives.**',
        '**A set of Templates and Playbooks to demonstrate core functionality of the platform and support further testing.**',
        '**Successful mentor ship of internal resources to take over testing, operation and extension of the system.**',
      ],
      trailingParagraphs: [
        'Due to the sensitive nature of this project, our client must remain anonymous. They were very pleased with the results, and they brought us back for an additional engagement several months later, to help with further development of Ansible network automation playbooks.',
      ],
    },
  ],
  related: [
    {
      category: 'Energy',
      title: 'Network Automation Project Improves Security, Supportability, and Scalability',
      description:
        "After a multi-million-dollar breach, one of the world's largest oil companies brought in ITSco — via Red Hat — to stand up Ansible Tower and harden the network.",
      image: '/images/case-studies/energy.jpg',
      imageAlt: 'Energy industry infrastructure',
      href: '/case-studies/network-automation/',
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
  bookingUtm: 'regional-bank-bottom',
}
