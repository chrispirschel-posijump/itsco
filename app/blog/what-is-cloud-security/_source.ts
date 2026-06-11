// Rewrite. Fresh ROI-focused content from the ITSco team.
// Target keywords: "what is cloud security", "cloud security explained".

export const PAGE_TITLE =
  'What is Cloud Security? A Plain-English Guide for Business Leaders | ITSco'

export const ARTICLE = [
  {
    type: 'p',
    text: 'Cloud security is the set of policies, controls, technologies, and operational practices that protect cloud-based systems, applications, and data from compromise. Said more practically: cloud security is the work of making sure your business does not lose money, customers, or its reputation because something in your cloud environment was misconfigured, attacked, or mishandled.',
  },
  {
    type: 'p',
    text: 'This guide explains what cloud security actually involves, walks through the controls that matter most, and addresses the question most business leaders are quietly asking — is our cloud secure?',
  },

  { type: 'h2', text: 'Why Cloud Security Is Different From Traditional IT Security' },
  {
    type: 'p',
    text: "In a traditional data center, you control the physical building, the network perimeter, the hardware, and everything running on it. Cloud security flips most of that around. The provider controls the physical layer; you control the configuration, identity, data, and application layers. The boundaries — what you are responsible for vs. what the provider is responsible for — are defined by the shared responsibility model.",
  },
  {
    type: 'p',
    text: "Most cloud security incidents do not happen because the cloud provider was breached. They happen because the customer misconfigured something, exposed credentials, or did not implement controls that were available but not enabled by default.",
  },

  { type: 'h2', text: 'The Shared Responsibility Model' },
  {
    type: 'p',
    text: 'The shared responsibility model defines what the cloud provider secures vs. what the customer secures. The boundary shifts depending on the service model:',
  },

  { type: 'h3', text: 'In Infrastructure as a Service (IaaS)' },
  {
    type: 'p',
    text: 'Provider secures: physical data center, hardware, hypervisor, network infrastructure. Customer secures: operating system, applications, identity and access, data, and configuration.',
  },

  { type: 'h3', text: 'In Platform as a Service (PaaS)' },
  {
    type: 'p',
    text: 'Provider secures: everything in IaaS plus the operating system and runtime platform. Customer secures: applications, identity and access, data, and configuration.',
  },

  { type: 'h3', text: 'In Software as a Service (SaaS)' },
  {
    type: 'p',
    text: 'Provider secures: the entire application stack. Customer secures: identity and access, data, and how users interact with the application.',
  },
  {
    type: 'p',
    text: 'The common thread: in every cloud service model, the customer is always responsible for identity and access and for data. Most cloud breaches happen on the customer side of the line — usually through identity compromise or misconfigured access.',
  },

  { type: 'h2', text: 'The Core Components of a Cloud Security Program' },

  { type: 'h3', text: '1. Identity and Access Management (IAM)' },
  {
    type: 'p',
    text: 'Who can access what, from where, and under what conditions. Multifactor authentication (MFA), conditional access policies, least-privilege access, and identity governance are the foundation of cloud security. If IAM is weak, nothing else matters much.',
  },

  { type: 'h3', text: '2. Data Protection' },
  {
    type: 'p',
    text: 'Encryption at rest and in transit, data classification, data loss prevention (DLP), and backup. Data is the asset; everything else is a means of protecting it.',
  },

  { type: 'h3', text: '3. Configuration and Posture Management' },
  {
    type: 'p',
    text: "Cloud Security Posture Management (CSPM) tools continuously scan cloud environments for misconfigurations — exposed storage buckets, overly permissive IAM roles, unencrypted databases. Most cloud breaches are misconfiguration breaches, and CSPM is the discipline that prevents them.",
  },

  { type: 'h3', text: '4. Network Security' },
  {
    type: 'p',
    text: 'Virtual network design, security groups, web application firewalls (WAFs), DDoS protection, and private connectivity between on-premises and cloud. Network is no longer the perimeter, but network controls still matter as defense in depth.',
  },

  { type: 'h3', text: '5. Threat Detection and Response' },
  {
    type: 'p',
    text: "24/7 monitoring of cloud workloads, identities, and APIs for anomalous behavior. Cloud-native tools (Microsoft Defender for Cloud, AWS GuardDuty) integrated into a Security Operations Center (SOC) with Managed Detection and Response (MDR) capabilities. Detection only matters if response is fast.",
  },

  { type: 'h3', text: '6. Compliance and Governance' },
  {
    type: 'p',
    text: 'Continuous evidence collection against the frameworks you answer to — SOC 2, HIPAA, PCI DSS, NIST 800-171, GDPR, state privacy laws. Cloud compliance is easier than on-premises compliance if you operate the controls deliberately; harder if you treat compliance as a point-in-time project.',
  },

  { type: 'h2', text: 'Common Cloud Security Mistakes' },
  {
    type: 'p',
    text: 'The patterns that produce most cloud security incidents:',
  },
  {
    type: 'ul',
    items: [
      'Storage buckets or databases left publicly accessible',
      'IAM roles with overly broad permissions ("admin everywhere")',
      'No MFA on privileged accounts',
      'Hardcoded credentials checked into source code or configuration files',
      'No continuous configuration scanning',
      'Cloud logs not centralized or monitored',
      'No incident response plan for cloud-specific scenarios',
    ],
  },

  { type: 'h2', text: 'How to Know If Your Cloud Is Secure' },
  {
    type: 'p',
    text: 'Most business leaders cannot answer this question because they have no visibility into how their cloud environment is actually configured. A cloud security assessment — either internal or external — produces an honest baseline:',
  },
  {
    type: 'ul',
    items: [
      'Are misconfigurations actively monitored and fixed?',
      'Is MFA enforced on every privileged identity?',
      'Are cloud logs centralized, monitored, and acted on?',
      'Is data encrypted at rest and in transit, with documented key management?',
      'Are there documented incident response procedures specific to cloud scenarios?',
      'Can we produce compliance evidence on demand for the frameworks we answer to?',
    ],
  },

  { type: 'h2', text: 'The Bottom Line' },
  {
    type: 'p',
    text: 'Cloud security is achievable and well-understood, but it requires deliberate operation. The cloud does not secure itself; it gives you the tools to secure it. Most cloud security incidents are preventable through standard practices: strong IAM, configuration scanning, monitoring, encryption, and incident response readiness.',
  },
  {
    type: 'p',
    text: "If you are not sure how secure your cloud environment is today, ITSco offers a free cloud security scoping consultation. We can walk you through where the highest-impact improvements likely live, and what an ongoing cloud security operation should look like for your specific environment.",
  },
] as const
