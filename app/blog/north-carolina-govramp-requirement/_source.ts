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
    text: "If your business does work for North Carolina state agencies, the rules for keeping that work just changed, and they reach further than most people assume. North Carolina now requires the cloud services used to handle its data to meet a security standard called GovRAMP. That applies whether you sell a cloud product to the state or simply use a cloud platform to deliver your own services to it. The timeline is already running, so for any business that counts state work as revenue, this is a planning decision for right now, not a future problem.",
  },

  { type: 'h2', text: 'What changed' },
  {
    type: 'p',
    text: "North Carolina adopted GovRAMP for third-party cloud services used by its executive-branch agencies. The state built in a one-year on-ramp that runs from April 1, 2026 to April 1, 2027. During that window, new cloud contracts carry risk-assessment requirements aligned to GovRAMP. After it, for a bid to be accepted, the proposed product generally needs to be GovRAMP or FedRAMP engaged. Existing contracts come into scope when they are renewed or put out for a new solicitation.",
  },
  {
    type: 'p',
    text: "A few details decide whether this applies to you. It covers vendor-hosted cloud, meaning infrastructure, platform, or software delivered as a service. On-premises systems are out of scope. FedRAMP counts: a product that already holds FedRAMP status meets the requirement. And the state uses a high-water-mark approach, so the most sensitive data that enters a cloud service sets the status it needs, from Core for internal data up to Authorized for restricted data.",
  },

  { type: 'h2', text: 'Who this actually covers' },
  {
    type: 'p',
    text: "The easy mistake is to read \"cloud security standard\" and assume it only applies to software companies. It does not. North Carolina's policy expressly reaches professional-services firms that use cloud services to process, transmit, or store state data while doing their work. The test is simple: if a cloud platform you rely on to serve the state holds or moves the state's data, that platform has to meet the standard, and that pulls you into the requirement whether or not you sell anything to the state.",
  },
  {
    type: 'p',
    text: "One of our own clients is the case in point. They provide healthcare services, not software. But they track the work they do on behalf of the state in a third-party, cloud-based platform, and because the state's data flows through that platform, they are required to meet GovRAMP. They are not a vendor selling a product to the state. They simply use a cloud tool to do the job, and that was enough to bring them into scope.",
  },
  {
    type: 'p',
    text: "So the real question is not \"do we sell cloud software to the state.\" It is \"does any cloud platform we use to serve the state hold or move the state's data.\" If the answer is yes, this applies to you. Everyday commodity tools are a grayer area, so the safe move is to inventory every cloud service that touches state data and confirm its status rather than assume it is exempt.",
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
      '**Revenue is on the line.** If serving the state is part of your business, GovRAMP eligibility becomes the price of admission. Work that depends on a cloud platform that is not engaged by the deadline is work you can lose, whether you are bidding a new contract or renewing one you already hold.',
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
