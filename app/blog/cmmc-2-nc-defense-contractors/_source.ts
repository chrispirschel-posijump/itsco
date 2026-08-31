// Post 7 of the editorial roadmap. Draft content authored August 2026 for
// October 26, 2026 publish. Reframed around DoD's July 13, 2026 suspension
// of CMMC Phase 2 — original brief (pre-suspension) targeted a Nov 2026
// C3PAO deadline that no longer exists in the form it assumed.
//
// PRE-PUBLISH VERIFICATION REQUIRED: the CMMC Reform Task Force reports
// ~Sep 13, 2026. Re-verify the "What Actually Happened" section and FAQ 1
// against the task force outcome before flipping draft to false. The rest
// of the post (durable obligations, signature risk, 14 families, action
// list) is built to survive whatever the reform produces.

import type { BlogBlock } from '@/components/BlogPost'

export const ARTICLE: readonly BlogBlock[] = [
  {
    type: 'p',
    text: "If you run a defense contracting business in North Carolina, you've probably heard some version of \"CMMC is dead\" since mid-July. Here's what actually happened: on July 13, 2026, the Department of Defense suspended CMMC Phase 2 — the requirement, scheduled for November 10, that contractors handling Controlled Unclassified Information pass a third-party assessment before contract award. A reform task force is now reviewing the whole program. What did not happen: your cybersecurity obligations going away. The 110 security requirements still bind you, your self-assessment and affirmation obligations still stand, and your prime's contract clauses didn't read the Pentagon's press release. This post covers what changed, what didn't, and what NC contractors should do with the pause.",
  },

  { type: 'h2', text: 'What Actually Happened on July 13' },
  {
    type: 'p',
    text: "The Cybersecurity Maturity Model Certification program rolls out in phases. Phase 1 began November 10, 2025: new DoD solicitations started requiring CMMC Level 1 or Level 2 self-assessments, with scores posted to the Supplier Performance Risk System (SPRS) and an annual affirmation signed by a senior company official. Phase 2, scheduled for November 10, 2026, was the escalation — Level 2 certification by a third-party assessor (a C3PAO) as a condition of award for most contracts involving CUI. That's what got [suspended](https://www.csis.org/analysis/what-cmmc-pause-means-defense-industrial-base), along with the phases behind it.",
  },
  {
    type: 'p',
    text: "The stated reason is arithmetic. More than 100,000 defense industrial base companies would eventually need third-party assessments — from roughly 100 authorized assessment organizations. SBA data projected the coming phases could cost small and mid-size businesses over $7 billion annually, and a [March 2026 GAO report](https://www.governmentcontractslaw.com/2026/07/dod-suspends-cmmc-phase-2-what-happened-what-it-means-and-what-nobody-is-telling-you/) warned the requirements could push small businesses out of the defense industrial base entirely. DoD's CIO put it plainly: \"the math just simply doesn't math.\" The reform task force reports this fall, and officials have declined to rule out ending the certification program altogether. Which sounds like permission to stand down. It isn't — and the next section is why.",
  },

  { type: 'h2', text: "What Didn't Get Suspended" },
  {
    type: 'p',
    text: "The suspension paused one thing: the third-party certification requirement. Everything underneath it remains [in force](https://www.wiley.law/alert-DOD-Pauses-CMMC-2-0-Implementation-A-Big-Deal-with-Little-Immediate-Impact):",
  },
  {
    type: 'ul',
    items: [
      "**The 110 security requirements.** NIST SP 800-171 Rev 2 — the actual controls — has bound every contractor handling CUI since long before CMMC existed, through DFARS 252.204-7012. The certification ramp was paused; the standard wasn't.",
      "**Self-assessments and SPRS scores.** During the pause, new solicitations still require Level 1 or Level 2 self-assessment status posted in SPRS. Level 2 self-assessment is scored against all 110 requirements, with a minimum passing score of 88.",
      "**The annual affirmation.** A senior official at your company still signs an affirmation of your compliance status every year. Keep that sentence in mind — it's the center of gravity of this whole post.",
      "**Incident reporting.** DFARS 7012's 72-hour cyber incident reporting obligation is untouched.",
      "**Your prime's flow-down clauses.** Contract language already written into subcontracts doesn't evaporate because a program office in Washington paused a future milestone. If your prime wrote CMMC readiness into your renewal terms, that's a contract matter between you and them — and primes burned by supply-chain incidents have their own reasons to keep the requirement.",
    ],
  },

  { type: 'h2', text: 'The Signature Problem' },
  {
    type: 'p',
    text: "Here's the part of the suspension almost nobody is saying out loud. Under the third-party model, a C3PAO's assessment stood between your compliance claims and the government — independent verification that what you attested was true. During the pause, that layer is gone. What remains is your self-assessment score and your senior official's signature on the annual affirmation.",
  },
  {
    type: 'p',
    text: "That signature carries False Claims Act weight. The Department of Justice's Civil Cyber-Fraud Initiative pursues contractors who misrepresent their cybersecurity compliance, and an overstated affirmation — a 110 score that a breach investigation later shows was really a 70 — is exactly the fact pattern those cases are built on. The consequences run from claim exposure to contract termination to debarment. So the honest reading of the suspension is this: the paperwork burden went down, and the personal accountability went up. The companies treating the pause as a holiday from compliance are accumulating risk with their own signatures.",
  },

  { type: 'h2', text: 'The 110 Requirements, Mapped' },
  {
    type: 'p',
    text: "NIST 800-171 Rev 2 organizes its 110 requirements into 14 families. (NIST published a Revision 3 in 2024, but the current CMMC rule and assessments remain on Rev 2 — build to Rev 2.) You don't need the full checklist to scope the work; you need the map:",
  },
  {
    type: 'ul',
    items: [
      "**Access Control** — who can reach what, from where · **Awareness & Training** — documented, evidenced security training · **Audit & Accountability** — logging, review, retention",
      "**Configuration Management** — documented baselines, change control · **Identification & Authentication** — MFA on privileged access · **Incident Response** — a written plan, tested at least annually",
      "**Maintenance** — controlled procedures · **Media Protection** — data at rest, physical media · **Personnel Security** — background checks, offboarding",
      "**Physical Protection** — facility access, visitor logs · **Risk Assessment** — documented and current · **Security Assessment** — periodic evaluation of your own controls",
      "**System & Communications Protection** — segmentation, cryptography · **System & Information Integrity** — patching, malware defense, monitoring",
    ],
  },
  {
    type: 'p',
    text: "Most contractors reviewing this list recognize a lot of it — companies with reasonable IT practices are typically doing a meaningful share of these informally. The gap that fails assessments isn't usually the controls. It's the evidence. Self-assessment scoring, and any future certification, requires documented proof: the written policy, the training log, the tested restore, the MFA enforcement report. \"Yes, we do that\" scores zero without the artifact behind it.",
  },

  {
    type: 'callout',
    text: "**Not sure what your honest SPRS score is?** That's the most common answer, and it's fixable in about 45 days. A free 30-minute conversation with Mike Savino can scope what a gap analysis would cover for your environment — and what your affirmation is actually attesting to right now.",
    cta: {
      label: 'Book a Free Consultation',
      href: 'https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco?utm_source=blog&utm_medium=inline&utm_campaign=cmmc-nc-mid',
    },
  },

  { type: 'h2', text: 'The North Carolina Angle' },
  {
    type: 'p',
    text: "North Carolina's defense economy makes this more than an abstract policy story. Fort Bragg — the largest US military installation by population — anchors a Sandhills ecosystem of hundreds of contractors and suppliers. The Research Triangle hosts cybersecurity, technology, and R&D firms serving primes; the Cape Fear region supports the Camp Lejeune and Cherry Point supply chains. Across that footprint, the practical reality is set by the primes, not the Pentagon's pause: large and mid-tier primes in the NC ecosystem have been writing cybersecurity flow-down clauses into subcontracts, and a subcontractor that can't demonstrate readiness is easy to replace with one that can. The suspension changed the federal enforcement timeline. It didn't change who wins the next teaming agreement.",
  },

  { type: 'h2', text: 'What to Do This Quarter' },
  {
    type: 'p',
    text: "Three moves, in order. **First, determine what you actually handle.** If your contracts involve Federal Contract Information only, Level 1 self-assessment (15 requirements) applies. If you touch CUI — and most defense subcontractors do — Level 2 is your world. Confirm by reviewing the DFARS clauses in your current contracts (252.204-7012, -7019, -7020, -7021) with your contracting officer. **Second, get an honest gap analysis.** Know your real SPRS score before you affirm one — a structured [security audit and compliance review](/security-audits-compliance) produces the score, the gap list, and the evidence inventory, and [Compliance as a Service](/compliance-as-a-service) turns it into an ongoing operating rhythm rather than an annual scramble. Note the separation rule that survives the pause: whoever eventually certifies you can't be the one who prepared you, so prep-partner work is deliberately distinct from assessment. **Third, remediate sequentially.** MFA and access control first — historically the most common failure points. Then written policies and the evidence trail. Then the advanced tier: a [managed SOC](/managed-soc) for the monitoring and logging families, and [managed detection and response](/mdr-monitoring-and-response) for the incident response requirements that need to be real, not aspirational. If certification returns in reformed shape this fall, you're ready early. If it doesn't, you've still closed the gaps your signature was exposed to all along.",
  },
  {
    type: 'p',
    text: "Work the timeline backward and the urgency clarifies. Say your key contract renews mid-2027. A gap analysis takes 30–45 days; remediation typically runs 6–12 months depending on where you start; and whatever reformed requirement emerges from this fall's review will need lead time to meet. A contractor starting in Q4 2026 walks into that renewal with a defensible score and options. A contractor waiting for the task force to settle things starts the same clock 6 months later — against the same renewal date.",
  },

  { type: 'h2', text: 'The Pause Rewards Whoever Uses It' },
  {
    type: 'p',
    text: "CMMC's third-party machinery got suspended because the rollout math failed, not because the DoD stopped caring whether its supply chain leaks. Some version of verification is coming back — reformed, rescoped, or renamed — and the reform report lands this fall. Contractors who use the pause to close gaps and build evidence walk into whatever comes next with options: clean affirmations today, fast certification whenever it's required, and a [security posture that returns value](/maximize-roi-with-managed-it-services) well beyond the DoD contract that forced the conversation. The ones waiting for certainty will get it — in a contract clause, on someone else's timeline.",
  },

  {
    type: 'p',
    text: "Note: CMMC requirements are evolving rapidly — verify current guidance with the DoD CMMC Program Office and your contracting officer before making compliance decisions.",
  },
]
