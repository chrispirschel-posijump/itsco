// Content for /terms/
//
// New page — the legacy /terms-and-conditions/ URL returned 404, so
// there is no source to migrate from. This is a reasonable Terms of
// Use covering ITSco's website governance: acceptance, permitted use,
// intellectual property, third-party content, disclaimers, limitation
// of liability, governing law (North Carolina), and contact.
//
// IMPORTANT: This is reasonable boilerplate covering the public
// website. It is NOT a substitute for the master services agreement
// (MSA) or statements of work that govern actual managed services
// engagements. Mike should run this through counsel before
// production launch.

import type { LegalContent } from '@/components/LegalPage'

export const CONTENT: LegalContent = {
  meta: {
    title: 'Terms of Use | ITSco',
    description:
      "Terms of Use governing your access to and use of itsco.com — acceptance, permitted use, intellectual property, disclaimers, and governing law.",
    canonical: 'https://www.itsco.com/terms/',
  },
  eyebrow: 'Legal',
  title: 'Terms of Use',
  intro:
    'These Terms of Use govern your access to and use of itsco.com. By accessing or using this website, you agree to these Terms. If you do not agree, please do not use this website. These Terms apply to general use of itsco.com only — they do not govern services provided to ITSco clients under separate written agreements, which are addressed in those agreements.',
  lastUpdated: 'June 10, 2026',
  sections: [
    {
      heading: 'Acceptance of Terms',
      paragraphs: [
        'Your use of itsco.com constitutes acceptance of these Terms of Use and the practices described in our Privacy Policy. We may update these Terms from time to time; the revised version will be posted on this page with an updated "Last updated" date. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.',
      ],
    },
    {
      heading: 'Permitted Use',
      paragraphs: [
        'You may access and use itsco.com for the lawful purpose of learning about ITSco and our services, contacting us, and accessing materials we make available for download. You agree not to use this website in any way that:',
      ],
      bullets: [
        'Violates any applicable law or regulation.',
        'Infringes the rights of ITSco or any third party.',
        'Attempts to gain unauthorized access to systems, accounts, or data.',
        'Introduces viruses, malware, or other malicious code.',
        'Disrupts, damages, or impairs the website or its underlying infrastructure.',
        'Uses automated means to scrape or harvest content beyond ordinary search-engine indexing.',
        'Misrepresents your identity or affiliation with any person or entity.',
      ],
    },
    {
      heading: 'Intellectual Property',
      paragraphs: [
        "All content on itsco.com — including text, graphics, logos, images, video, downloadable resources, and the underlying code — is owned by ITSco or its licensors and is protected by United States and international intellectual property laws. The ITSco name and logo are trademarks of ITSco.",
        'You may view and download materials from this site for your personal, non-commercial reference. Any other use — including reproduction, modification, distribution, public display, or creation of derivative works — requires our prior written permission.',
      ],
    },
    {
      heading: 'Submissions',
      paragraphs: [
        'If you submit information to us through itsco.com (for example, through a consultation request, contact form, or comment), you grant ITSco a non-exclusive, royalty-free, worldwide license to use that information for the purposes described in our Privacy Policy and for our reasonable business use. Do not submit confidential, proprietary, or sensitive personal information through public-facing forms.',
      ],
    },
    {
      heading: 'Third-Party Links and Content',
      paragraphs: [
        "itsco.com may contain links to websites or content operated by third parties, and may integrate third-party tools such as Calendly for booking consultations. We provide those links and integrations for your convenience. ITSco does not control, endorse, or assume responsibility for third-party sites or content. Your use of those sites and tools is at your own risk and subject to their terms and privacy policies.",
      ],
    },
    {
      heading: 'No Professional Advice',
      paragraphs: [
        "Information on itsco.com is provided for general informational purposes only. It is not legal, financial, or other professional advice, and it is not a substitute for advice from a qualified professional familiar with your specific situation. Do not rely on website content as a basis for any specific business or technology decision without consulting a qualified advisor.",
      ],
    },
    {
      heading: 'Disclaimers',
      paragraphs: [
        'itsco.com and its content are provided "as is" and "as available," without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or accuracy. While we work to keep information current and accurate, we do not warrant that the website will be uninterrupted, error-free, or free of harmful components.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by applicable law, ITSco and its affiliates, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenues, data, or business opportunities, arising out of or relating to your use of itsco.com — even if advised of the possibility of such damages. ITSco\'s total cumulative liability for any claims arising out of your use of itsco.com shall not exceed one hundred United States dollars ($100).',
      ],
    },
    {
      heading: 'Indemnification',
      paragraphs: [
        'You agree to indemnify and hold ITSco harmless from any claim, demand, loss, or damages, including reasonable attorneys\' fees, arising out of your breach of these Terms, your misuse of itsco.com, or your violation of any third-party right or applicable law.',
      ],
    },
    {
      heading: 'Governing Law and Venue',
      paragraphs: [
        'These Terms of Use are governed by the laws of the State of North Carolina, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or your use of itsco.com shall be resolved exclusively in the state or federal courts located in Durham County, North Carolina, and you consent to the personal jurisdiction of those courts.',
      ],
    },
    {
      heading: 'Severability and Waiver',
      paragraphs: [
        'If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. Failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other.',
      ],
    },
    {
      heading: 'Entire Agreement',
      paragraphs: [
        'These Terms of Use, together with our Privacy Policy, constitute the entire agreement between you and ITSco regarding use of itsco.com. They do not modify or supersede any separate written agreement between ITSco and an active client.',
      ],
    },
  ],
  contact: {
    heading: 'Contact',
    paragraphs: [
      'For questions about these Terms of Use, contact us at info@itsco.com or by mail at:',
      'ITSco — Legal, 4601 Creekstone Drive, Suite 102, Durham, NC 27703',
    ],
  },
  bookingUtm: 'terms-bottom',
}
