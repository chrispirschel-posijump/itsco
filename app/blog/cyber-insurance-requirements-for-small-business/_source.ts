// Post 1 of the editorial roadmap. Draft content authored July 2026 for
// August 3, 2026 publish. Stats verified against public sources at write time.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  // ── Intro ────────────────────────────────────────────────────────────────
  {
    type: 'p',
    text: "Your cyber insurance renewal is coming up, and the questionnaire looks nothing like the one you filled out three years ago. What used to be a page of yes/no checkboxes is now a technical assessment — and answering it wrong means non-renewal, coverage exclusions, or a premium that jumps 200–400%. The frustrating part: nobody tells you what the underwriter is actually looking for. This post covers the 12 controls that show up on nearly every current questionnaire, how to prove you have them, and what to do if you're starting from behind.",
  },

  // ── H2 · Why Cyber Insurance Got So Much Harder ─────────────────────────
  { type: 'h2', text: 'Why Cyber Insurance Got So Much Harder' },
  {
    type: 'p',
    text: "Insurers spent 2020 and 2021 paying out ransomware claims faster than they collected premiums. They responded the way any business would: raise prices, cut coverage, and get pickier about who they insure.",
  },
  {
    type: 'p',
    text: "The numbers tell the story. At the peak of the correction, [Marsh's Global Insurance Market Index](https://www.marsh.com/en/services/cyber-risk/insights/cyber-insurance-market-update.html) recorded US cyber insurance prices rising 130% year over year in the fourth quarter of 2021. Even companies with clean loss histories and good security saw increases. And the threat hasn't cooled off — [Coalition's 2026 Cyber Claims Report](https://www.coalitioninc.com/announcements/2025-cyber-claims-report) found initial ransom demands jumped 47% in 2025, with ransomware remaining the most expensive claim type at an average loss of $269,000.",
  },
  {
    type: 'p',
    text: "So underwriting changed. Rating agency AM Best put it plainly back in 2022: MFA had already become a minimum necessity for obtaining cyber coverage. Since then, the bar has kept rising. Underwriters now want evidence of specific controls before they quote — not a signature promising you'll get to it.",
  },
  {
    type: 'p',
    text: 'So what specifically do they want? Here are the 12 controls that appear on nearly every current questionnaire.',
  },

  // ── H2 · The 12 Controls ─────────────────────────────────────────────────
  { type: 'h2', text: 'The 12 Controls Underwriters Now Require' },

  { type: 'h3', text: '1. Multi-factor authentication (MFA) — everywhere that matters' },
  {
    type: 'p',
    text: 'MFA requires a second proof of identity beyond a password. It is the single non-negotiable control: without MFA on email, admin accounts, remote access, and cloud services, most insurers won\'t quote you at any price. Underwriters care because stolen credentials remain the most common way attackers get in — [Verizon\'s 2025 Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) found credential abuse started 22% of breaches. Expect the questionnaire to ask where MFA is enforced, not just whether you "use" it.',
  },

  { type: 'h3', text: '2. Endpoint detection and response (EDR) — not just antivirus' },
  {
    type: 'p',
    text: 'Traditional antivirus matches files against a list of known threats. EDR watches behavior — a program encrypting hundreds of files in a minute gets flagged and stopped even if it\'s never been seen before. Underwriters now name-check modern EDR platforms on questionnaires and treat legacy antivirus as a "no" answer. Every company laptop, desktop, and server needs coverage, and you\'ll need to state which platform you run. Our [endpoint security](/endpoint-security/) page covers what a properly managed deployment looks like.',
  },

  { type: 'h3', text: '3. 24/7 security monitoring' },
  {
    type: 'p',
    text: 'Someone — a person, not just software — has to be watching alerts around the clock. Ransomware operators deliberately launch attacks on Friday nights and holiday weekends because they know most SMBs have nobody watching. An alert that fires at 2 a.m. Saturday and gets read Monday morning is a failed control. Insurers increasingly ask who monitors your environment overnight and how fast they respond. For most 50–500-person companies, a [managed SOC](/managed-soc/) is how this gets answered without hiring a night shift.',
  },

  { type: 'h3', text: '4. Managed detection and response (MDR)' },
  {
    type: 'p',
    text: 'MDR pairs the monitoring above with the authority to act — isolating an infected machine or killing a malicious process in minutes rather than filing a ticket. Underwriters distinguish this from owning a SIEM, which collects logs but doesn\'t respond to anything. If your questionnaire asks "who responds to a confirmed threat, and how quickly?", it\'s asking whether you have MDR.',
  },

  { type: 'h3', text: '5. Email security beyond built-in filtering' },
  {
    type: 'p',
    text: "Business email compromise is quietly the biggest claims driver in the industry — Coalition's claims data shows email-based crime (BEC and funds transfer fraud together) accounted for 58% of all cyber incidents in 2025. Phishing started 16% of breaches per Verizon's 2025 DBIR. The default filters in Microsoft 365 catch bulk spam; they're weaker against the targeted \"wire the deposit to this new account\" email that costs a company six figures. Insurers want a dedicated email security layer on top.",
  },

  { type: 'h3', text: '6. Documented patch management' },
  {
    type: 'p',
    text: 'Underwriters don\'t just want you to patch — they want a written cadence with evidence. The common standard: critical vulnerabilities patched within 30 days, everything else within 90. "Our IT person handles updates" is not an answer; a patching report from your management tooling is. This is one of the easiest controls to fix and one of the most common to fail on documentation alone.',
  },

  // ── Mid-post CTA callout ─────────────────────────────────────────────────
  {
    type: 'callout',
    text: "**Reading this list and realizing you're missing a few?** You're not alone — most businesses we talk to are missing several of these controls when we first look at their environment. If your renewal is coming up in the next 90 days, a free 30-minute consultation with Mike Savino can map out which gaps matter most for your specific policy.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=cyber-insurance-mid',
    },
  },

  { type: 'h3', text: '7. Immutable, tested backups' },
  {
    type: 'p',
    text: 'Ransomware crews attack backups first — encrypt or delete the safety net, then demand payment. So insurers now ask three pointed questions: Are backups immutable (unable to be altered, even by an admin)? Is at least one copy offline or off-network? When did you last test a restore? The old 3-2-1 rule has grown to 3-2-1-1-0: three copies, two media types, one offsite, one immutable/offline, zero errors on restore tests. It works — Coalition found a record 86% of ransomware victims refused to pay in 2025, largely because tested backups gave them the option to walk away. [Backup and disaster recovery](/backup-disaster-recovery/) done right is what makes that possible.',
  },

  { type: 'h3', text: '8. A written, tested incident response plan' },
  {
    type: 'p',
    text: 'Not "we\'ll figure it out." A written document naming who declares an incident, who calls the insurer and attorney, who talks to customers, and in what order systems get restored. Some carriers now ask whether you\'ve tested the plan in the past 12 months — a tabletop exercise counts. They may request a copy at claim time, so it needs to actually exist.',
  },

  { type: 'h3', text: '9. Documented security awareness training' },
  {
    type: 'p',
    text: "Verizon's 2025 DBIR found the human element involved in 60% of breaches. Insurers know this, so they want recurring training — quarterly is the emerging standard — plus phishing simulations, with completion records for both. An annual slideshow nobody remembers won't satisfy the questionnaire. We've written previously about [what effective security training looks like](/blog/cyber-security-training-benefits/) and why the simulation data matters more than the course completion certificate.",
  },

  { type: 'h3', text: '10. Network segmentation and managed firewalls' },
  {
    type: 'p',
    text: "Segmentation means a compromised laptop in accounting can't reach your production servers or your building systems. Underwriters push hardest on this for manufacturers, healthcare organizations, and anyone running older equipment that can't be patched. Expect questions about whether your firewall rules are actively managed and reviewed — a firewall installed in 2019 and untouched since doesn't count.",
  },

  { type: 'h3', text: '11. Vulnerability scanning and annual penetration testing' },
  {
    type: 'p',
    text: "Vulnerability scanning is automated and ongoing; a penetration test is a skilled human attempting to break in the way a real attacker would. Carriers commonly require an annual third-party pen test for policies with limits above $1M — and they may ask for the executive summary. If you've never had a [penetration test](/penetration-testing-services/) performed, expect findings. That's the point: fix them before an attacker or an underwriter finds them first.",
  },

  { type: 'h3', text: '12. A written information security policy (WISP)' },
  {
    type: 'p',
    text: 'The governance document behind everything above: who owns security, how access gets granted and revoked, how vendors are vetted, how data is classified and retained. Underwriters ask about it because a company with no written policy usually has no consistent practice either. This is documentation work, not technology spend — which makes it the cheapest control on this list to complete.',
  },

  // ── H2 · How to Prove You Have These Controls ────────────────────────────
  { type: 'h2', text: 'How to Prove You Have These Controls' },
  {
    type: 'p',
    text: "Here's the part most articles skip: modern questionnaires demand evidence, not checkbox answers. Before your renewal, assemble a folder containing:",
  },
  {
    type: 'ul',
    items: [
      'Screenshots or admin reports showing MFA enforcement across email, admin, and remote access',
      'Your EDR/MDR provider name and a coverage report showing every endpoint enrolled',
      'Your most recent backup restore test results, with dates',
      'The written incident response plan (dated, with named roles)',
      'Training completion and phishing simulation reports from the past 12 months',
      'The executive summary from your last penetration test',
      'Your patching cadence report',
    ],
  },
  {
    type: 'p',
    text: 'One warning worth taking seriously: don\'t overstate. If you answer "yes" to a control you don\'t fully have and suffer a claim, the carrier can deny it or rescind the policy based on misrepresentation in the application. Coverage disputes over questionnaire accuracy are a growing category of litigation. An honest "no, remediation in progress" is a far better answer than a "yes" that collapses at claim time — when you need the money most.',
  },

  // ── H2 · What Happens If You Skip These ─────────────────────────────────
  { type: 'h2', text: 'What Happens If You Skip These' },
  {
    type: 'p',
    text: 'The consequences show up in a predictable order. First, your current carrier declines to renew. Then the replacement quotes come back at 2–4x your old premium — if they come back at all. Carriers may also write exclusions directly into the policy: a ransomware exclusion on a cyber policy removes the coverage you most likely bought it for.',
  },
  {
    type: 'p',
    text: "The worst case is the one described above: you keep coverage on paper, suffer an incident, and the claim gets denied because the questionnaire didn't match reality. At that point you've paid premiums for years and still absorb the full loss — an average of $116,000 per claim across Coalition's 2025 book, and $269,000 when it's ransomware.",
  },

  // ── H2 · What This Actually Costs to Implement ──────────────────────────
  { type: 'h2', text: 'What This Actually Costs to Implement' },
  {
    type: 'p',
    text: 'Using typical market pricing for a 100-person company (these are general industry benchmarks, not ITSco quotes — every environment gets scoped individually):',
  },
  {
    type: 'table',
    headers: ['Control', 'Typical market range'],
    rows: [
      ['MFA rollout', '$0–$5/user/month (often included in existing Microsoft licensing)'],
      ['EDR', '$8–$15/endpoint/month'],
      ['Managed SOC + MDR', '$30–$75/user/month all-in'],
      ['Email security', '$3–$8/user/month'],
      ['Annual penetration test', '$8K–$25K depending on scope'],
      ['Security awareness training', '$30–$60/user/year'],
    ],
  },
  {
    type: 'p',
    text: 'All-in, a complete security stack for a company this size typically lands between $100 and $200 per user per month, with the monitoring layer as the biggest line item.',
  },
  {
    type: 'p',
    text: "Now weigh it against the alternative. A $2M cyber policy for a 100-person company generally runs $8K–$25K per year. If these controls are the difference between a denial and a policy — or between a punitive premium and a standard one — the math resolves quickly. And the controls do more than satisfy an underwriter: they're the same measures that prevent the $269,000 loss in the first place. This is how we think about every security investment — measured [ROI](/maximize-roi-with-managed-it-services/), not fear.",
  },

  // ── H2 · What to Do in the Next 90 Days ─────────────────────────────────
  { type: 'h2', text: 'What to Do in the Next 90 Days' },
  {
    type: 'p',
    text: 'If your renewal is inside the next quarter, work backward from the date:',
  },
  {
    type: 'p',
    text: '**Weeks 1–2:** Get the current questionnaire from your broker — the actual document, not last year\'s. Requirements change annually.',
  },
  {
    type: 'p',
    text: '**Weeks 2–3:** Run a gap analysis against the 12 controls above. A structured [cyber risk assessment](/cyber-risk-assessment/) gives you a prioritized list instead of a vague sense of dread.',
  },
  {
    type: 'p',
    text: '**Weeks 4–8:** Close the gaps in order of underwriting weight: MFA first, then EDR and monitoring, then backups, then documentation.',
  },
  {
    type: 'p',
    text: '**Weeks 9–12:** Assemble your evidence folder, answer the questionnaire accurately, and re-quote. Businesses that show up with documentation negotiate from strength.',
  },

  // ── H2 · FAQ ─────────────────────────────────────────────────────────────
  { type: 'h2', text: 'Frequently Asked Questions' },

  { type: 'h3', text: "Do I need cyber insurance if I don't handle sensitive customer data?" },
  {
    type: 'p',
    text: "Probably yes. Ransomware doesn't care what data you hold — it monetizes your downtime. Business email compromise targets your money directly. And increasingly, your own customers' contracts require you to carry coverage as a condition of doing business.",
  },

  { type: 'h3', text: 'What if my broker just tells me to answer "yes" to everything?' },
  {
    type: 'p',
    text: 'Get a new broker. Misrepresentation on the application is grounds for claim denial or policy rescission — precisely when you need coverage most. Answer accurately, and note remediation timelines for anything in progress.',
  },

  { type: 'h3', text: 'How much cyber coverage should a small business carry?' },
  {
    type: 'p',
    text: "It depends on your revenue, data, and contractual obligations, so this is a conversation for your broker. As context, Coalition's 2026 Cyber Claims Report put the average ransomware loss at $269,000 — a useful floor when thinking about limits. Many mid-market companies carry $1M–$5M.",
  },

  { type: 'h3', text: 'Can I qualify for cyber insurance without hiring an MSP?' },
  {
    type: 'p',
    text: 'Yes — the controls matter, not who runs them. In practice, standing up 24/7 monitoring, MDR, tested backups, and documented patching in-house costs more than the managed equivalent for most companies under 500 people, which is why so many route it through a provider.',
  },

  { type: 'h3', text: "What's the difference between cyber insurance and general liability or E&O?" },
  {
    type: 'p',
    text: "General liability covers physical injury and property damage. E&O covers mistakes in your professional services. Neither covers ransomware, breach response, forensics, or funds transfer fraud — that's what a standalone cyber policy exists for. Confirm the specifics with your broker or attorney; policy language varies by carrier.",
  },

  // ── Closing ──────────────────────────────────────────────────────────────
  { type: 'h2', text: 'Get Ahead of Your Renewal' },
  {
    type: 'p',
    text: 'Most companies we assess are 60–80% of the way to qualifying — the problem is rarely everything, it\'s the three or four specific gaps that trigger a denial or a punitive premium. In 30 years serving North Carolina businesses, zero ITSco clients have experienced a serious security breach — the same controls underwriters demand are the ones we\'ve been running all along.',
  },
]
