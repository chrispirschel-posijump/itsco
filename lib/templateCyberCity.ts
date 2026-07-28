// Templated content generator for thin "Template only" cyber-security city pages.
// Mirrors lib/templateCity.ts — same structure, cybersecurity copy, city name
// swapped in. Higher-traffic cyber cities use verbatim per-city content files.

import type { CityServiceContent } from '@/components/CityServicePage'

interface TemplateCyberCityInput {
  name: string
  slug: string
  region: string
  heroImage: { src: string; alt: string }
  whyUsImage: { src: string; alt: string }
  securityImage: { src: string; alt: string }
  // Optional headline overrides so templated pages don't read identically.
  heroAccent?: string
  positioningAccent?: string
  whyUsLead?: string
  whyUsAccent?: string
  securityLead?: string
  securityAccent?: string
}

export function makeTemplateCyberCityContent(c: TemplateCyberCityInput): CityServiceContent {
  return {
    meta: {
      title: `Cyber Security Services in ${c.name}, NC | ITSco`,
      description: `ITSco delivers cyber security services in ${c.name}, NC — SIEM, risk management, security architecture, compliance, and cloud security — from a team with zero serious client breaches. Book a free consultation.`,
      canonical: `https://www.itsco.com/${c.slug}-cyber-security-services`,
    },
    hero: {
      eyebrow: `Cyber Security Services · ${c.name}, NC`,
      headlineLead: `Cyber security services in ${c.name} that`,
      headlineAccent: c.heroAccent ?? 'stop cybercriminals in their tracks.',
      body: `Protect your ${c.name} business from ransomware, phishing, and data breaches with cyber security services from ITSco — a North Carolina security firm with a 25-year track record and zero serious client breaches.`,
      utmSuffix: `cyber-${c.slug}-hero`,
    },
    heroImage: c.heroImage,
    capabilitiesHeading: {
      eyebrow: 'Organization-Wide Protection',
      headlineLead: 'Cyber security services',
      headlineAccent: `for ${c.name}, NC businesses.`,
    },
    capabilities: [
      {
        slug: 'cyber-threat-solutions',
        title: 'Turnkey Cyber Threat Solutions',
        description:
          'Secure your systems with real-time threat monitoring, detailed incident reporting, and robust security software that detects and neutralizes dangers as they arise.',
      },
      {
        slug: 'siem-services',
        title: 'Security Information & Event Management',
        description:
          'Our SIEM solutions aggregate data across your network, delivering real-time analysis and rapid detection of potential security threats.',
      },
      {
        slug: 'risk-management',
        title: 'Risk Management',
        description:
          'Our senior security engineers identify and mitigate threats and vulnerabilities before they become costly breaches — with continuous monitoring and regular assessments.',
      },
      {
        slug: 'security-architecture',
        title: 'Security Architecture Design',
        description:
          'Deploy a customized, resilient security framework with expert policy guidance and ongoing analysis that adapts as new threats emerge.',
      },
      {
        slug: 'security-awareness-training',
        title: 'Security Awareness Training',
        description:
          'Strengthen your first line of defense — your people — with on-site and remote training that helps employees recognize and respond to threats.',
      },
      {
        slug: 'security-audits-compliance',
        title: 'Regulatory Compliance Assessments',
        description:
          'Prepare for ISO, CIS, and NIST assessments with thorough gap analyses and expert guidance that keeps your business compliant and audit-ready.',
      },
      {
        slug: 'cloud-cybersecurity',
        title: 'Cloud Security Services',
        description:
          'Protect cloud-based data and applications with 24/7 monitoring, user privilege management, and proactive cyberattack mitigation.',
      },
      {
        slug: 'strategic-security-consulting',
        title: 'Strategic Consulting',
        description:
          "Move from reactive to proactive with strategic guidance that addresses today's risks while building defenses against tomorrow's threats.",
      },
    ],
    positioning: {
      eyebrow: 'One Partner, Complete Protection',
      headlineLead: `Cyber security in ${c.name} that`,
      headlineAccent: c.positioningAccent ?? 'protects what you have built.',
      paragraphs: [
        `For your ${c.name} business, cybersecurity can't be an afterthought. A single breach can undo years of hard work — which is why a layered, proactive defense is one of the smartest investments you can make.`,
        `ITSco delivers comprehensive protection from a single trusted partner — from establishing security frameworks to remediating live threats — so you never have to juggle multiple security vendors.`,
      ],
    },
    stats: [
      { value: '60%', label: 'Of our clients have been with us for 5+ years' },
      { value: '25+', label: `Years securing ${c.region} & North Carolina` },
      { value: '0%', label: 'Of our clients have experienced a serious security breach' },
    ],
    whyUs: {
      eyebrow: 'Why ITSco',
      headlineLead: c.whyUsLead ?? 'A cyber security partner',
      headlineAccent: c.whyUsAccent ?? `${c.name} businesses trust.`,
      paragraphs: [
        `ITSco has secured North Carolina businesses since 1996. Our CISSP-certified engineers bring deep, hands-on expertise to every engagement.`,
        `We don't believe in one-size-fits-all security. We assess your systems and your risks, then design a defense tailored to what actually matters to your ${c.name} organization.`,
        `Our track record speaks for itself: in 30 years, no client under our care has experienced a serious security breach.`,
      ],
      image: c.whyUsImage,
    },
    security: {
      eyebrow: 'Reduce Your Risk',
      headlineLead: c.securityLead ?? "Don't be an easy target",
      headlineAccent: c.securityAccent ?? 'for cybercriminals.',
      paragraphs: [
        `Cybercriminals look for the path of least resistance — the organizations with the weakest defenses. Closing those gaps before they are exploited is the most effective protection there is.`,
        `Partner with ITSco to deploy proven, state-of-the-art protection for your ${c.name} business: round-the-clock monitoring, real-time alerting, vulnerability management, and managed firewall services.`,
      ],
      image: c.securityImage,
    },
    bookingUtm: `cyber-${c.slug}-bottom`,
  }
}
