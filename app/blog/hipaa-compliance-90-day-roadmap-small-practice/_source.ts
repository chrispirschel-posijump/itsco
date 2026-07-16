// Post 2 of the editorial roadmap. Draft content authored July 2026 for
// August 17, 2026 publish. Stats verified against public sources at write time
// (OCR Risk Analysis Initiative enforcement actions Jan–Jul 2025).

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  // ── Intro ────────────────────────────────────────────────────────────────
  {
    type: 'p',
    text: 'A hospital system just asked your practice for proof of HIPAA compliance before renewing your referral agreement — and "we have a binder somewhere" isn\'t going to cut it. Maybe it wasn\'t a hospital. Maybe it was an acquirer\'s due diligence checklist, a cyber insurance questionnaire, or the breach at a practice two towns over that made your physicians nervous. Whatever triggered it, here\'s the uncomfortable truth: HHS\'s Office for Civil Rights (OCR) holds a 3-provider practice to the same Security Rule standard as a 300-bed hospital system. Small doesn\'t mean excused. The good news: a practice starting from almost nothing can build a defensible compliance posture in 90 days. This roadmap breaks it into three 30-day phases — administrative foundation, physical and technical controls, then testing and documentation.',
  },

  // ── H2 · Why HIPAA Is Harder for Small Practices ────────────────────────
  { type: 'h2', text: 'Why HIPAA Is Harder for Small Practices' },
  {
    type: 'p',
    text: 'Large health systems have compliance departments. Small practices have an office manager who got named "HIPAA officer" in a staff meeting years ago and never received training, budget, or protected time for the role. That\'s the first failure mode, and the others follow from it: no dedicated compliance spend, no documented policies, and a quiet assumption that the cloud EHR vendor "handles HIPAA." It doesn\'t — your vendor secures its platform, but your workstations, email, staff behavior, and vendor contracts remain your responsibility. When a receptionist\'s phished email account exposes patient correspondence, the EHR vendor\'s compliance certificate is irrelevant: the breach report, the notification costs, and the OCR inquiry all land on the practice.',
  },
  {
    type: 'p',
    text: 'The most consequential gap is the missing Security Risk Assessment. In October 2024, OCR launched a formal [Risk Analysis Initiative](https://natlawreview.com/article/2025-enforcement-trends-risk-analysis-failures-center-hhss-multimillion-dollar) targeting exactly this failure, and it has produced 12 enforcement actions since. Small providers are not being skipped: a Michigan surgical group settled for $10,000, a New York neurology practice and a small California imaging provider each settled for $25,000, and a Syracuse surgery center paid $250,000 — every one of them cited for the same thing, [no compliant risk analysis](https://www.feldesman.com/ocrs-new-security-risk-analysis-initiative-results-in-seven-enforcement-actions-in-first-six-months/). And each settlement came with a 2-year corrective action plan, which means OCR supervision long after the check clears. For practices in [healthcare-focused IT environments](/healthcare-managed-it-services/), this is the enforcement climate the next three years will be built on.',
  },

  // ── H2 · The HIPAA Framework in One Paragraph ───────────────────────────
  { type: 'h2', text: 'The HIPAA Framework in One Paragraph' },
  {
    type: 'p',
    text: 'HIPAA\'s Security Rule sorts everything into three buckets. **Administrative safeguards** (45 CFR § 164.308) are governance: who\'s responsible, what\'s been assessed, what the written policies say. **Physical safeguards** (45 CFR § 164.310) control the tangible world: facilities, workstations, and what happens to old hard drives. **Technical safeguards** (45 CFR § 164.312) are the system-level protections: access controls, audit logs, encryption. A fourth piece, the **Breach Notification Rule** (45 CFR § 164.400), governs what you must do when something goes wrong. The 90-day plan below maps to these buckets in order — because the administrative work determines what the technical work should be.',
  },

  // ── H2 · Days 1–30: Administrative Foundation ───────────────────────────
  { type: 'h2', text: 'Days 1–30: Administrative Foundation' },

  { type: 'h3', text: 'Milestone 1: Appoint Your Privacy and Security Officers (Days 1–3)' },
  {
    type: 'p',
    text: "HIPAA requires a designated Privacy Officer and Security Officer. In a small practice, one person can legally hold both roles — but the appointment must be documented in writing, and the person needs real allocated time, not a title bolted onto a full workload. This is a 1-page memo signed by practice leadership. It's also the first document OCR asks for, so don't skip the paperwork because the decision felt obvious.",
  },

  { type: 'h3', text: 'Milestone 2: Complete a Security Risk Assessment (Days 4–15)' },
  {
    type: 'p',
    text: "The SRA is the single most-enforced requirement in HIPAA — the common thread in every Risk Analysis Initiative settlement. It's an inventory of every system touching protected health information (EHR, email, backups, texting between providers, that tablet at the front desk), paired with an honest assessment of threats, likelihood, impact, and what you're doing about each. HHS publishes a free [Security Risk Assessment Tool](https://www.healthit.gov/topic/privacy-security-and-hipaa/security-risk-assessment-tool) built for small and mid-sized practices — a legitimate starting point. But OCR has specifically flagged generic, template-driven assessments as a common deficiency: the analysis must reflect your actual environment. A structured [cyber risk assessment](/cyber-risk-assessment/) performed by someone who does this weekly produces the formal, dated document OCR expects — and a prioritized fix list for the next 75 days.",
  },

  { type: 'h3', text: 'Milestone 3: Write (or Resuscitate) Your Policies (Days 16–25)' },
  {
    type: 'p',
    text: 'The Written Information Security Policy is the master document, supported by sub-policies covering access control, mobile devices, remote work, incident response, workforce sanctions, business associate management, and contingency planning — the last of which covers how you\'d restore patient data after a system failure, which is where documented [backup and disaster recovery](/backup-disaster-recovery/) procedures live. HHS templates give you the skeleton. The work is making each policy describe what your practice actually does, because a policy that says "all devices are encrypted" when the front-desk laptop isn\'t is worse than no policy — it\'s documented evidence you knew the standard and didn\'t meet it.',
  },

  { type: 'h3', text: 'Milestone 4: Inventory Your Business Associate Agreements (Days 26–30)' },
  {
    type: 'p',
    text: "Every vendor that touches PHI needs a signed Business Associate Agreement — and most practices are missing several. Work through the usual suspects: EHR vendor, IT provider, billing company, transcription service, cloud storage, answering service, imaging partners, and any marketing platform that has ever touched a patient email list. The deliverable is a simple spreadsheet: vendor, PHI access type, BAA signed date, gaps. A signed BAA does real work — it obligates the vendor to safeguard your patients' data, report breaches to you, and accept liability for its own failures. Without one, their breach is legally your breach alone. Remediation costs mostly time; reputable vendors have a standard BAA ready to sign, and a vendor that resists signing one is telling you something important.",
  },

  // ── H2 · Days 31–60: Physical and Technical Controls ────────────────────
  { type: 'h2', text: 'Days 31–60: Physical and Technical Controls' },

  { type: 'h3', text: 'Physical Safeguards (Days 31–45)' },
  {
    type: 'p',
    text: 'This phase is unglamorous and fast — most of it is a week of focused work:',
  },
  {
    type: 'ul',
    items: [
      '**Workstation security.** Auto-lock every machine after 10–15 minutes idle, and add privacy screens where monitors face waiting rooms or check-in counters. Shoulder-surfing at a front desk is one of the most common — and most preventable — PHI exposures in a small practice.',
      '**Facility access.** Restrict entry to any room with servers or unattended workstations. A keypad or badge reader is enough; the point is that you can state, in writing, who has access and how it\'s revoked when someone leaves.',
      '**Device disposal.** Write down the procedure for retiring computers, copiers, and drives that held PHI: documented sanitization or certified destruction before anything leaves the building. Office copiers deserve special attention — their internal drives store images of everything ever scanned, and they routinely go back to the leasing company unwiped.',
      '**Media reuse.** Drives being repurposed internally — an old laptop handed to a new hire — get wiped first, and the wipe gets logged. A missing disposal record for a single old server has triggered more than one breach report.',
    ],
  },

  { type: 'h3', text: 'Technical Safeguards (Days 46–60)' },
  {
    type: 'ul',
    items: [
      '**Unique logins, no exceptions.** Shared credentials make audit logs meaningless. Every staff member gets an individual account; MFA (Microsoft Authenticator, Duo, or similar) goes on email and every system holding PHI.',
      '**Audit logging turned on and retained.** You must be able to show who accessed which record and when. Microsoft 365\'s audit log and your EHR\'s access reports cover most small practices — verify they\'re enabled and retention is set.',
      '**Encryption in transit and at rest.** TLS-encrypted email for anything containing PHI, and full-disk encryption (BitLocker or FileVault) on every laptop. An encrypted lost laptop is an incident; an unencrypted one is a reportable breach.',
      '**Automatic logoff** on idle sessions, everywhere PHI is accessible.',
      '**A managed network perimeter.** Ransomware operators, per OCR, are behind a [264% increase in large reported healthcare breaches since 2018](https://www.mccarter.com/insights/season-of-enforcement-ocr-announces-its-sixth-enforcement-action-of-2025/) — and a [managed firewall](/managed-firewall/) with active rule review is the control standing between your network and that trend line.',
    ],
  },

  // ── Mid-post CTA callout ─────────────────────────────────────────────────
  {
    type: 'callout',
    text: '**Most practices we assess are missing something on this list — usually the SRA, the BAAs, or both.** If a business associate demand, insurance renewal, or acquisition timeline puts you inside 90 days, a free 30-minute consultation with Mike Savino can map out which gaps matter most for your specific situation.',
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=hipaa-90-day-mid',
    },
  },

  // ── H2 · Days 61–90: Training, Testing, Documentation ───────────────────
  { type: 'h2', text: 'Days 61–90: Training, Testing, Documentation' },

  { type: 'h3', text: 'Workforce Training (Days 61–70)' },
  {
    type: 'p',
    text: "HIPAA requires training for every workforce member — physicians included, and they're the ones who most often skip it — with new hires trained within 30 days as the defensible standard. Generic slideshows don't change behavior; scenario-based training does. Walk your team through the situations they'll actually face: a laptop left in a car, PHI accidentally sent to the wrong patient, a family member asking about a chart at the front desk.",
  },
  {
    type: 'p',
    text: 'Then document everything. A training log with names, dates, and signatures is what OCR counts as training — an honest "we covered it at a staff meeting" counts as nothing. This is also where your sanction policy from Milestone 3 becomes real: staff need to know, in writing, what happens when someone snoops on a neighbor\'s chart or shares a login. Quarterly phishing simulations through a training platform round out the program and generate their own compliance records automatically.',
  },

  { type: 'h3', text: 'Incident Response Tabletop (Days 71–80)' },
  {
    type: 'p',
    text: "A written incident response plan that's never been exercised is a theory. Run a 60–90 minute tabletop: gather leadership and your IT provider, walk through a simulated ransomware event or lost device step by step, and record where the plan broke down — who couldn't be reached, which decision had no owner, whether anyone knew the breach notification clock starts at discovery. Update the plan with the findings and file the tabletop notes. That dated record is evidence you tested, which is precisely what regulators and insurers now ask for.",
  },

  { type: 'h3', text: 'Assemble the Audit Package (Days 81–90)' },
  {
    type: 'p',
    text: 'The final 10 days convert 80 days of work into a single evidence folder: the signed officer appointments, the dated SRA, the WISP and sub-policies, the BAA inventory, training logs, the IR plan with tabletop notes, and any sanction records. Store it centrally with access for the Privacy/Security Officer and practice leadership. If assembling it exposes gaps — an unsigned policy, a vendor who never returned the BAA — that\'s the point. A [security audit and compliance review](/security-audits-compliance/) at this stage functions as a dress rehearsal, catching what an OCR investigator would catch, while it\'s still free to fix.',
  },

  // ── H2 · If OCR Comes Knocking ──────────────────────────────────────────
  { type: 'h2', text: 'If OCR Comes Knocking' },
  {
    type: 'p',
    text: 'OCR investigations rarely start with a random audit. They start with a breach report — often filed by a business associate about you — or a patient complaint. Remember the clock: the Breach Notification Rule gives you 60 days from discovery to notify affected individuals and HHS, and late notification has been an aggravating factor in multiple recent settlements. Once an inquiry opens, what investigators request is remarkably consistent:',
  },
  {
    type: 'ul',
    items: [
      'A current Security Risk Assessment, dated within the last 12 months',
      'Workforce training records with names, dates, and signatures',
      'Signed BAAs for every vendor with PHI access',
      'Your written policies — the WISP and its sub-policies',
      'A documented incident response plan, plus evidence you actually tested it',
    ],
  },
  {
    type: 'p',
    text: "The pattern across recent enforcement is blunt. Practices that produce this package quickly tend to resolve inquiries with corrective action. Practices that can't — because the SRA was never done or the policies were templates nobody implemented — become settlements with 2-year monitoring plans attached. The 90-day sprint you just read is, functionally, the difference between those two outcomes.",
  },

  // ── H2 · What This Actually Costs ───────────────────────────────────────
  { type: 'h2', text: 'What This Actually Costs' },
  {
    type: 'p',
    text: 'Typical market ranges for a small practice (general industry benchmarks — every environment is scoped individually):',
  },
  {
    type: 'table',
    headers: ['Component', 'Typical range'],
    rows: [
      ['Security Risk Assessment (external)', '$5K–$15K'],
      ['WISP + policy documentation', '$3K–$10K (or near $0 using HHS templates + internal time)'],
      ['BAA remediation', 'Mostly free (vendor cooperation + legal review)'],
      ['Employee training platform', '$5–$15 per employee/year'],
      ['Encryption tooling', '$0–$5 per device/month (often included in existing licenses)'],
      ['Incident response planning + tabletop', '$2K–$8K one-time'],
      ['Ongoing HIPAA-savvy IT management', '$75–$150 per user/month'],
    ],
    caption: 'HIPAA compliance cost benchmarks for small practices, 2026',
  },
  {
    type: 'p',
    text: "Stack that against the alternative: 5-figure settlements for even the smallest practices, 2 years of OCR supervision, breach notification costs, and the patient-trust damage no line item captures. Compliance spend isn't overhead — it's some of the highest-[ROI IT investment](/maximize-roi-with-managed-it-services/) a practice can make, because it's the spend that prevents the 6-figure event.",
  },

  // ── H2 · FAQ ─────────────────────────────────────────────────────────────
  { type: 'h2', text: 'Frequently Asked Questions' },

  { type: 'h3', text: 'Do I need a HIPAA compliance officer if I have fewer than 10 employees?' },
  {
    type: 'p',
    text: 'Yes. Every covered entity must designate a Privacy Officer and a Security Officer regardless of size. In a small practice, one person can hold both roles — but the appointment must be documented in writing and the person needs actual time allocated to the job.',
  },

  { type: 'h3', text: "Is my EHR vendor's HIPAA compliance enough to protect me?" },
  {
    type: 'p',
    text: 'No. Your EHR vendor is responsible for securing its platform, and your BAA with them covers their side. Your workstations, email, staff training, policies, other vendors, and risk assessment remain your obligation — and those are where most small-practice violations actually occur.',
  },

  { type: 'h3', text: "What's the average HIPAA fine for a small practice?" },
  {
    type: 'p',
    text: 'Recent OCR settlements with small providers have ranged from $10,000 to $250,000, nearly always paired with a 2-year corrective action plan requiring ongoing OCR supervision. Larger organizations have settled for as much as $3 million. The dollar figure is often smaller than the cost of the monitoring, remediation, and disruption that come with it.',
  },

  { type: 'h3', text: 'Can I do the Security Risk Assessment myself?' },
  {
    type: 'p',
    text: "Legally, yes — HHS publishes a free SRA Tool designed for small practices. Practically, OCR has flagged generic and template-driven assessments as a common deficiency, and a self-assessment tends to miss the risks you don't know to look for. Many practices use the HHS tool as a baseline year over year and bring in an outside assessment when the stakes rise.",
  },

  { type: 'h3', text: 'How often do I need to update my HIPAA policies?' },
  {
    type: 'p',
    text: 'Review the SRA and policies at least annually, and immediately after any material change — new EHR, new location, new telehealth workflow, or a security incident. An SRA dated more than 12 months ago is treated as stale by investigators, insurers, and acquirers alike.',
  },

  // ── Closing ──────────────────────────────────────────────────────────────
  { type: 'h2', text: 'Treat It Like a Sprint, Not a Binder' },
  {
    type: 'p',
    text: "HIPAA compliance fails when it's treated as a document-collection exercise and succeeds when it's treated as a 90-day operational project with named owners and dated deliverables. The practices that get fined aren't the ones missing a form — they're the ones that never did the risk assessment and couldn't prove anything when asked. ITSco has spent 30 years serving North Carolina businesses — including healthcare deployments like our EmergeOrtho engagement — and zero ITSco clients have experienced a serious security breach in that time. The same discipline behind that record is what a 90-day compliance sprint runs on.",
  },
]
