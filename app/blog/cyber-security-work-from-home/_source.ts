// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "cyber security work from home", "remote work cybersecurity".

export const PAGE_TITLE =
  'Cyber Security for Work From Home: A Practical Guide for Businesses | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'Work from home is now a permanent part of how most businesses operate — and so are the cybersecurity risks that come with it. Home networks, personal devices, blended work-and-personal browsing patterns, and the absence of corporate perimeter controls have all moved threat exposure away from the office and onto endpoints scattered across hundreds of households.',
  },
  {
    type: 'p',
    text: 'This guide walks through the specific cybersecurity risks that work-from-home introduces, the controls that effectively defend against them, and the practical steps businesses should put in place to make remote work as secure as on-site work — without making it painful for the people doing the working.',
  },

  { type: 'h2', text: 'The Cybersecurity Risks Specific to Work From Home' },

  { type: 'h3', text: 'Home Network Weakness' },
  {
    type: 'p',
    text: 'Most home networks are protected by an ISP-provided router with default credentials, no segmentation, and unpatched firmware. A compromised router compromises every device on the network — including the work laptop.',
  },

  { type: 'h3', text: 'Personal-Device Cross-Contamination' },
  {
    type: 'p',
    text: 'Remote workers frequently use personal devices for some work tasks, share networks with personal devices, or store sensitive corporate data on personal cloud storage. Each interaction crosses a security boundary that the office model used to enforce automatically.',
  },

  { type: 'h3', text: 'Phishing in a Distracted Environment' },
  {
    type: 'p',
    text: 'Home environments include more interruptions, fewer colleagues to gut-check suspicious emails, and more blending of personal and professional communication. Phishing attempts that would have been caught at the office click through more often at home.',
  },

  { type: 'h3', text: 'Shadow IT and Unauthorized Tools' },
  {
    type: 'p',
    text: 'Remote workers turn to personal tools — file sharing services, communication platforms, productivity apps — to get work done. Each one is a potential data exfiltration channel that the corporate IT and security team has no visibility into.',
  },

  { type: 'h3', text: 'Theft and Physical Loss' },
  {
    type: 'p',
    text: 'A laptop in a coffee shop, a tablet in an airport, a phone left in a rideshare — the physical risk to corporate devices increases when devices travel. Without device-level encryption and remote management, a lost device becomes a data exposure incident.',
  },

  { type: 'h2', text: 'The Controls That Actually Work for Work From Home' },

  { type: 'h3', text: '1. Multifactor Authentication (MFA) Everywhere' },
  {
    type: 'p',
    text: 'The single most effective control against work-from-home compromise is MFA on every system that handles corporate data. Phishing-resistant MFA where possible. No exceptions for executives. No legacy authentication paths around it.',
  },

  { type: 'h3', text: '2. Endpoint Protection With EDR/XDR' },
  {
    type: 'p',
    text: 'Modern endpoint detection and response (EDR) tools watch what is happening on the laptop continuously — process behavior, network connections, file changes — and detect threats that signature-based antivirus would miss. EDR is the floor for remote-work endpoint security.',
  },

  { type: 'h3', text: '3. Managed Endpoints With Configuration Enforcement' },
  {
    type: 'p',
    text: 'Endpoint management platforms (Intune, Jamf, equivalent) enforce security configuration — disk encryption, screen lock, OS patch level, application controls — across every corporate device regardless of where it sits. Drift gets detected and corrected automatically.',
  },

  { type: 'h3', text: '4. Conditional Access and Identity-Led Security' },
  {
    type: 'p',
    text: 'Access policies that consider who the user is, what device they are on, where they are connecting from, and what they are trying to do — and adjust access accordingly. A user logging in from a managed device on a known network gets seamless access; the same user on an unmanaged device from an unusual location gets blocked or stepped up to additional verification.',
  },

  { type: 'h3', text: '5. Secure Remote Access' },
  {
    type: 'p',
    text: 'Modern Zero Trust Network Access (ZTNA) or well-managed VPN provides remote workers secure connectivity to internal resources without exposing those resources to the public internet. The shift from "perimeter trust" to "identity-based trust" is the architectural change that makes remote work secure.',
  },

  { type: 'h3', text: '6. Cloud Security and Data Loss Prevention' },
  {
    type: 'p',
    text: 'Most remote work happens in cloud-based tools (Microsoft 365, Google Workspace, SaaS applications). Cloud-native security controls — DLP policies, sharing restrictions, anomaly detection — are essential for keeping data from leaking out the cloud-facing side while perimeter controls focus on the network side.',
  },

  { type: 'h3', text: '7. Security Awareness Training' },
  {
    type: 'p',
    text: 'Ongoing security awareness training, including phishing simulations, keeps remote workers vigilant. The training does not eliminate user error, but it raises the threshold significantly — and produces measurable reductions in click rates over time.',
  },

  { type: 'h2', text: 'Practical Steps for Businesses' },
  {
    type: 'p',
    text: 'If your business has remote or hybrid workers and you have not deliberately updated cybersecurity controls for that reality, the priority list:',
  },
  {
    type: 'ul',
    items: [
      'Audit MFA coverage — every account, every system, no legacy bypass',
      'Deploy or modernize EDR on every corporate endpoint',
      'Stand up endpoint management with enforced security configuration',
      'Implement conditional access policies in your identity platform',
      'Replace VPN-only access with ZTNA where possible',
      'Audit cloud DLP and sharing policies in Microsoft 365 / Google Workspace',
      'Stand up an ongoing security awareness training program with phishing simulations',
    ],
  },

  { type: 'h2', text: 'The Bottom Line' },
  {
    type: 'p',
    text: "Cybersecurity for work from home is achievable and well-understood — the controls exist, the playbook is known, and the cost is reasonable. The risk is not that remote work is fundamentally insecure; the risk is that businesses still operating on a 2019 security model are exposed in ways they should not still be exposed in 2026.",
  },
  {
    type: 'p',
    text: 'If you would like an honest assessment of your remote-work cybersecurity posture, ITSco offers a free scoping consultation. We can identify the highest-leverage improvements and walk you through what an ongoing managed security operation should look like for your distributed team.',
  },
] as const
