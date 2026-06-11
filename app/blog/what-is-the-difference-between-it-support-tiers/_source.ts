// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "IT support tiers", "tier 1 tier 2 tier 3 IT support".

export const PAGE_TITLE =
  'IT Support Tiers Explained: Tier 1, Tier 2, Tier 3, and Beyond | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'When you evaluate IT support providers, you will see references to "Tier 1," "Tier 2," and "Tier 3" — sometimes "Tier 4" or "Tier 0" depending on the firm. The tiers describe how support work is organized internally: who handles what kinds of issues and how things escalate. Understanding the tier model matters when you are buying IT support because the staffing model at each tier directly affects the experience your team will have.',
  },
  {
    type: 'p',
    text: 'This guide explains the IT support tier model in plain English, walks through what work belongs at each tier, and explains why the way a provider structures tiers tells you a lot about the quality of support you will actually receive.',
  },

  { type: 'h2', text: 'The Standard IT Support Tier Model' },

  { type: 'h3', text: 'Tier 0: Self-Service' },
  {
    type: 'p',
    text: 'Knowledge base articles, password reset portals, automated troubleshooting wizards, and chatbots that resolve common issues without human intervention. Best-in-class IT support organizations invest in Tier 0 because it produces faster resolution for routine issues and frees up human capacity for higher-value work.',
  },

  { type: 'h3', text: 'Tier 1: First-Line Support' },
  {
    type: 'p',
    text: 'The first human contact for an IT issue. Tier 1 handles common, well-documented problems — password resets, basic email and account problems, printer setup, common application support — and resolves most issues at first contact. Issues that cannot be resolved quickly get escalated to Tier 2.',
  },
  {
    type: 'p',
    text: 'Quality of Tier 1 varies enormously across providers. The best operate with real engineers who can resolve most issues at first contact. The worst operate as call-handling and triage queues that simply route everything upstream.',
  },

  { type: 'h3', text: 'Tier 2: Senior Support and Specialists' },
  {
    type: 'p',
    text: 'Senior support engineers who handle issues Tier 1 cannot resolve in the first conversation — complex application problems, network connectivity issues, deeper system troubleshooting. Tier 2 also includes specialists in specific domains: Microsoft 365, network, identity, security, or specific business applications.',
  },

  { type: 'h3', text: 'Tier 3: Engineering and Architecture' },
  {
    type: 'p',
    text: 'Senior engineers and architects who handle the most complex incidents and projects. Tier 3 is where the deep expertise lives — security architecture, cloud design, network architecture, identity engineering — and where work that cannot be resolved at lower tiers gets handled.',
  },

  { type: 'h3', text: 'Tier 4: External Vendor Escalation' },
  {
    type: 'p',
    text: 'Some providers define Tier 4 as escalation to external vendors — the application vendor, the cloud provider, or a specialist firm — when the issue is in their domain rather than the IT support providers. Tier 4 work involves coordinating with those vendors on your behalf.',
  },

  { type: 'h2', text: 'How Issues Flow Through the Tiers' },
  {
    type: 'p',
    text: 'In a well-structured IT support model, issues flow in a defined pattern: user contacts Tier 1 (or self-serves through Tier 0); Tier 1 resolves what it can and escalates the rest; Tier 2 takes the escalation and resolves what it can; Tier 3 takes the most complex; Tier 4 coordinates with external vendors when needed.',
  },
  {
    type: 'p',
    text: 'Throughout the process, the ticket stays open until the issue is resolved, regardless of which tier handles it. The user gets updates and a clear closure. Reporting tracks where work happens and how the tier model is performing.',
  },

  { type: 'h2', text: 'Why the Tier Model Matters When Buying IT Support' },
  {
    type: 'p',
    text: 'The way an IT support provider structures tiers tells you a lot about the quality of experience you will have:',
  },

  { type: 'h3', text: 'Tier 1 Staffing Model' },
  {
    type: 'p',
    text: "If Tier 1 is staffed by junior call-takers who route everything to Tier 2, your first interaction with the provider will feel slow and unhelpful — most issues will require an escalation and a callback. If Tier 1 is staffed by real engineers, you get a different experience: most issues fixed in the first conversation.",
  },

  { type: 'h3', text: 'First-Call Resolution Rate' },
  {
    type: 'p',
    text: 'The percentage of issues resolved at first contact (typically at Tier 1) is one of the highest-signal metrics about IT support quality. Best-in-class organizations hit 70-85% first-call resolution. Mediocre ones run 30-50%. Below that, the provider is essentially a routing queue.',
  },

  { type: 'h3', text: 'Tier 2/3 Specialization' },
  {
    type: 'p',
    text: 'When Tier 2 and Tier 3 are staffed with real specialists across security, cloud, identity, and network domains, complex issues get resolved well. When Tier 2 is essentially "more senior generalists," complex issues get resolved slowly or incompletely.',
  },

  { type: 'h3', text: 'Tier Coordination' },
  {
    type: 'p',
    text: 'Smooth coordination between tiers — clear handoffs, complete documentation, user updates throughout — is the operational discipline that distinguishes well-run support operations. Poor coordination produces tickets that get bounced between tiers, users who lose track of where their issue stands, and resolution times that compound.',
  },

  { type: 'h2', text: 'Questions to Ask an IT Support Provider About Their Tier Model' },
  {
    type: 'ul',
    items: [
      'Who answers when I call? Real engineer or call-taker?',
      'What is your first-call resolution rate, and how do you measure it?',
      'How are Tier 2 and Tier 3 staffed? What specialties do you cover internally?',
      'How do issues escalate between tiers? Show me your process.',
      'How do users get updates as a ticket progresses through tiers?',
      'How do you measure performance at each tier?',
    ],
  },

  { type: 'h2', text: 'What This Means for You' },
  {
    type: 'p',
    text: 'The IT support tier model is invisible from outside — but the way a provider structures it shapes your experience every day. When you are evaluating providers, the questions about Tier 1 staffing and first-call resolution rates separate the providers worth working with from the ones to walk away from. Cheap providers achieve their pricing by running thin Tier 1 with heavy escalation; high-quality providers run engineering-staffed Tier 1 with high resolution rates because it produces a better outcome.',
  },
  {
    type: 'p',
    text: 'ITSco staffs its helpdesk with engineers who can resolve most issues at first contact. If you would like to talk about what IT support should look like for your business, a free scoping consultation is the right starting point.',
  },
] as const
