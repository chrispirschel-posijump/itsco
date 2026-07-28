// Content for /privacy-policy/
//
// Fresh, ITSco-specific privacy policy. The legacy /privacy-policy/
// page contains real defects ("This site is owned by Client Name"
// literal placeholder text; last-updated date of January 27, 2017;
// generic template language unrelated to ITSco's actual practices),
// so it is NOT migrated. This is a substantive replacement.
//
// IMPORTANT: This is reasonable boilerplate covering ITSco's actual
// website data practices in plain English. It is not a substitute
// for legal review. Mike should run this through counsel before
// production launch.

import type { LegalContent } from '@/components/LegalPage'

export const CONTENT: LegalContent = {
  meta: {
    title: 'Privacy Policy',
    description:
      "ITSco's privacy policy — what information we collect through itsco.com, how we use it, who we share it with, and how to reach us with questions.",
    canonical: 'https://www.itsco.com/privacy-policy',
  },
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  intro:
    'ITSco respects your privacy. This Privacy Policy explains what information we collect when you visit itsco.com, how we use it, who we share it with, and the choices available to you. It applies to information collected through this website. It does not govern information processed under separate written agreements with our managed services clients, which are addressed in those agreements.',
  lastUpdated: 'June 10, 2026',
  sections: [
    {
      heading: 'Who We Are',
      paragraphs: [
        'ITSco is an IT services and cybersecurity provider headquartered in Durham, North Carolina, with an additional office in Raleigh, North Carolina. We serve clients across North Carolina, South Carolina, and Virginia.',
        'For questions about this Privacy Policy or our data practices, see the "How to Contact Us" section at the end of this document.',
      ],
    },
    {
      heading: 'Information You Provide',
      paragraphs: [
        'When you contact us through itsco.com — by submitting a form, booking a consultation, downloading a resource, or emailing us — you may provide information that identifies you, such as your name, business email address, phone number, company name, job title, and the details of your inquiry.',
        'Submission of this information is voluntary. We will tell you at the point of collection whether specific fields are required for the service or response you are requesting.',
      ],
    },
    {
      heading: 'Information Collected Automatically',
      paragraphs: [
        'When you visit itsco.com, our servers and third-party analytics tools may automatically receive standard information that your browser sends, including your IP address, browser type and version, operating system, referring URL, the pages you view on our site, and timestamps. We use this information to operate, secure, and improve the site.',
      ],
    },
    {
      heading: 'Cookies and Similar Technologies',
      paragraphs: [
        'We use cookies and similar technologies on itsco.com to keep the site functioning, remember your preferences, understand how visitors use the site, and measure the performance of our marketing.',
      ],
      bullets: [
        'Strictly necessary cookies make core site functionality work, such as form submission.',
        'Analytics cookies help us understand which pages are useful and how to improve them.',
        'Marketing cookies, where used, help us measure the effectiveness of campaigns and reach business audiences with relevant information.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      paragraphs: [
        'We use the information you provide and the information collected automatically for the following purposes:',
      ],
      bullets: [
        'To respond to your inquiry and provide the consultation, materials, or services you request.',
        'To send you information you have asked to receive, such as event invitations, resources, or service updates.',
        'To operate, secure, monitor, and improve itsco.com and our services.',
        'To comply with our legal and contractual obligations.',
        'To pursue our legitimate business interests in marketing our services to current and prospective business clients.',
      ],
    },
    {
      heading: 'How We Share Your Information',
      paragraphs: [
        'We do not sell your personal information. We share information only as needed to operate our business and respond to you.',
      ],
      bullets: [
        'Service providers we use to operate our website, schedule consultations, host email, host data, and run analytics — each contractually bound to protect the information.',
        'Professional advisors (legal, accounting, insurance) when reasonably required.',
        'Government authorities or other parties where required by law, court order, or to protect our rights or the safety of others.',
        'A successor entity in connection with a merger, acquisition, financing, or sale of assets, subject to confidentiality and continued protection of the information.',
      ],
    },
    {
      heading: 'Third-Party Tools and Links',
      paragraphs: [
        'itsco.com integrates with third-party tools such as Calendly (for booking consultations) and may link to other websites. When you interact with those tools or visit those sites, you are subject to their privacy policies. We encourage you to review them.',
      ],
    },
    {
      heading: 'Data Retention',
      paragraphs: [
        'We retain the information you provide for as long as needed to respond to you, to provide services you have requested, to maintain business records, and to comply with our legal obligations. When we no longer need information for these purposes, we take reasonable steps to delete or de-identify it.',
      ],
    },
    {
      heading: 'Security',
      paragraphs: [
        'We take reasonable administrative, technical, and physical safeguards to protect information collected through itsco.com against loss, misuse, and unauthorized access. No internet transmission or storage system is ever fully secure; you should use discretion in what you submit through online forms or email.',
      ],
    },
    {
      heading: 'Your Choices',
      paragraphs: [
        'You can decline cookies through your browser settings, though some features of the site may not function as a result. You can unsubscribe from our marketing emails using the link in any message we send. You can ask us to access, update, or delete personal information you have provided by contacting us as described below; we will respond within a reasonable timeframe consistent with our legal obligations.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'itsco.com is directed to business audiences. We do not knowingly collect personal information from anyone under the age of 16. If you believe we have collected information from a child, please contact us so we can address it.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time as our practices, technology, and legal requirements evolve. When we do, we will revise the "Last updated" date at the top of this page. Material changes will be communicated more prominently. We encourage you to review this Privacy Policy periodically.',
      ],
    },
  ],
  contact: {
    heading: 'How to Contact Us',
    paragraphs: [
      'For questions about this Privacy Policy or our data practices, contact us at info@itsco.com or by mail at:',
      'ITSco — Privacy, 4601 Creekstone Drive, Suite 102, Durham, NC 27703',
    ],
  },
  bookingUtm: 'privacy-policy-bottom',
}
