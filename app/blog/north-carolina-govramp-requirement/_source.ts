// Timely post (not part of the 12-post evergreen roadmap). GovRAMP became a
// North Carolina procurement requirement in 2026 (Mike's "priority one").
//
// PRE-PUBLISH VERIFICATION (regulatory — re-check before flipping draft:false):
//  - On-ramp window (Apr 1 2026 to Apr 1 2027) and "GovRAMP or FedRAMP engaged
//    to bid" against the NC DOA procurement overview and GovRAMP.org.
//  - Confirm /compliance-as-a-service is live before publish (inline links
//    below point to it); and that the compliance page's GovRAMP FAQ links back
//    here (bidirectional). Facts verified Oct 2026.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  {
    type: 'p',
    text: "If your company sells cloud or software to North Carolina state agencies, the rules for winning that business just changed. The state now expects the cloud products it buys to meet a security standard called GovRAMP, and the timeline to get there is already running. For any business that counts state contracts as revenue, this is a planning decision for right now, not a future problem.",
  },

  { type: 'h2', text: 'What changed' },
  {
    type: 'p',
    text: "North Carolina adopted GovRAMP for third-party cloud services used by its executive-branch agencies. The state built in a one-year on-ramp that runs from April 1, 2026 to April 1, 2027. During that window, new cloud contracts carry risk-assessment requirements aligned to GovRAMP. After it, for a bid to be accepted, the proposed product generally needs to be GovRAMP or FedRAMP engaged. Existing contracts come into scope when they are renewed or put out for a new solicitation.",
  },
  {
    type: 'p',
    text: "Two details decide whether this applies to you. It covers vendor-hosted cloud, meaning infrastructure, platform, and software delivered as a service. On-premises systems are out of scope. And FedRAMP counts: if your product already holds FedRAMP status, North Carolina will accept it.",
  },

  { type: 'h2', text: 'What GovRAMP is' },
  {
    type: 'p',
    text: "GovRAMP is the public-sector cloud security program formerly known as StateRAMP. It is a nonprofit that runs a standardized security review so a provider can verify once and serve many government buyers, instead of answering a different security questionnaire for every agency. Its baseline is built on the NIST 800-53 Rev. 5 control set. A provider earns a status such as Ready, Authorized, or Provisionally Authorized through an independent assessment, then holds it through continuous monitoring. Verified products appear on a public Authorized Product List that government buyers check before they purchase.",
  },

  { type: 'h2', text: 'Why this is a business decision, not an IT task' },
  { type: 'p', text: 'Three reasons it belongs on the leadership agenda:' },
  {
    type: 'ul',
    items: [
      '**Revenue is on the line.** If state agencies are part of your pipeline, GovRAMP eligibility becomes the price of admission. A product that is not engaged by the time a solicitation lands cannot be bid.',
      '**The work takes months, not weeks.** A gap assessment, control remediation, documentation, an independent assessment, and standing up continuous monitoring is a multi-month effort. With full compliance expected by April 2027, the companies that start now stay eligible without a scramble.',
      "**Early movers win.** Most competitors are still treating this as next year's problem. Reaching GovRAMP status ahead of them is a credential you can put in front of every state buyer while others are still filling out paperwork.",
    ],
  },

  {
    type: 'callout',
    text: 'ITSco runs this as a managed service, not a one-time project. See how our [Compliance as a Service](/compliance-as-a-service/) model keeps you aligned between audits, not just before them.',
    cta: {
      label: 'Book a free consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=website&utm_medium=cta&utm_campaign=north-carolina-govramp-requirement-mid',
    },
  },

  { type: 'h2', text: 'What getting ready looks like' },
  {
    type: 'p',
    text: 'The path is well defined. Assess your current environment against the NIST 800-53 Rev. 5 baseline. Close the gaps by implementing and documenting the required controls. Prepare the evidence package an independent assessor will review. Then run the ongoing monitoring the program requires to earn and hold your status. None of it is mysterious, but all of it takes disciplined execution against a clock.',
  },

  { type: 'h2', text: 'Where ITSco fits' },
  {
    type: 'p',
    text: 'We handle the technology side of getting you there: the gap assessment, the control work, the documentation, coordinating the independent assessment, and running the continuous monitoring that keeps your status current. The authorization itself is granted through GovRAMP, not by us. Our job is to get you ready and keep you there. We have spent 30 years doing this kind of work for businesses across North Carolina, and for many clients GovRAMP readiness is the start of a broader relationship through our [Compliance as a Service](/compliance-as-a-service/) and managed IT programs.',
  },
  {
    type: 'p',
    text: 'If state business matters to your company, the smart move is to find out where you stand now, while the on-ramp still gives you room to work.',
  },
]
