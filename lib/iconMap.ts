// /lib/iconMap.ts
// Maps page slugs and service slugs to Lucide React icon names.
// Used by DynamicIcon component — never hardcode icon names in page files.
// Fallback icon: 'Cpu' renders if slug not found.

export const iconMap: Record<string, string> = {

  // ── Managed IT ─────────────────────────────────────────────────────────────
  'managed-it-services':                        'Server',
  'managed-network-services':                   'Network',
  'helpdesk':                                   'Headphones',
  'raleigh-it-helpdesk':                        'Headphones',
  'server-monitoring-and-maintenance':          'Activity',
  'backup-disaster-recovery':                   'HardDrive',
  'asset-lifecycle-management':                 'Package',
  'remote-it-support':                          'MonitorSmartphone',
  'it-staff-augmentation':                      'Users',
  'employee-onboarding-offboarding':            'UserPlus',
  'it-procurement':                             'ShoppingCart',

  // ── Cybersecurity ───────────────────────────────────────────────────────────
  'cybersecurity':                              'Shield',
  'fully-managed-cybersecurity':                'ShieldCheck',
  'managed-soc':                                'Eye',
  'siem-services':                              'Radio',
  'mdr-monitoring-and-response':                'ScanEye',
  'network-security':                           'Lock',
  'endpoint-security':                          'Laptop',
  'managed-firewall':                           'Flame',
  'ids-ips':                                    'Radar',
  'email-security':                             'MailWarning',
  'cyber-risk-assessment':                      'TriangleAlert',
  'penetration-testing-services':               'Bug',
  'security-audits-compliance':                 'ClipboardCheck',
  'compliance-management':                      'BadgeCheck',
  'zero-trust-security':                        'KeyRound',
  'cloud-cybersecurity':                        'CloudLock',
  'security-event-remediation-ip-protection':   'ShieldAlert',
  'it-security-assessment':                     'ScanSearch',

  // ── Cloud ───────────────────────────────────────────────────────────────────
  'cloud-services':                             'Cloud',
  'managed-cloud-services':                     'CloudCog',
  'cloud-migration':                            'CloudUpload',
  'cloud-hosting':                              'Server',
  'public-hybrid-cloud-services':               'Layers',
  'private-cloud-services':                     'Lock',
  'aws-services':                               'Boxes',
  'virtualization-services':                    'Copy',
  'managed-desktop-vdi':                        'Monitor',
  'cloud-consulting-services':                  'CloudSun',

  // ── Strategy & Consulting ───────────────────────────────────────────────────
  'it-management-consulting':                   'BarChart3',
  'vcio-vcto-vciso-services':                   'BarChart3',
  'fractional-cto-services':                    'Compass',
  'it-roadmap-planning':                        'Map',
  'it-assessments-strategies':                  'ClipboardList',
  'it-audits-and-assessments':                  'ClipboardList',
  'tech-due-diligence-for-businesses':          'SearchCheck',
  'it-due-diligence-mergers-acquisitions':      'GitMerge',
  'technical-project-management':               'Kanban',
  'it-roi-assessment':                          'TrendingUp',
  'business-continuity-planning':               'RefreshCw',
  'it-strategy-services':                       'Compass',
  'maximize-roi-with-managed-it-services':      'TrendingUp',

  // ── Microsoft Solutions ─────────────────────────────────────────────────────
  'microsoft-solutions':                        'Layout',
  'services-for-the-microsoft-suite':           'Layout',
  'microsoft-365-services':                     'Grid3X3',
  'microsoft-azure-services':                   'Layers',
  'microsoft-teams-services':                   'MessageSquare',
  'microsoft-exchange-services':                'Mail',
  'microsoft-sharepoint-services':              'FolderOpen',
  'microsoft-copilot':                          'Sparkles',
  'microsoft-copilot-implementation':           'Sparkles',
  'microsoft-sentinel':                         'ScanSearch',

  // ── Engineering ─────────────────────────────────────────────────────────────
  'network-engineering':                        'Cable',
  'systems-engineering':                        'Cpu',
  'voip-unified-communications':                'Phone',
  'itad':                                       'Recycle',
  'services-itad':                              'Recycle',

  // ── AI & Automation ─────────────────────────────────────────────────────────
  'ai-automation':                              'Brain',
  'ai-readiness-assessment':                    'Brain',
  'ai-strategy-consulting':                     'Lightbulb',
  'process-automation':                         'Workflow',
  'roi-calculator':                             'Calculator',
  'compare-msps':                               'BarChart2',

  // ── Industries — by vertical ────────────────────────────────────────────────
  'healthcare-managed-it-services':             'Stethoscope',
  'custom-it-network-services-healthcare-institutions': 'Stethoscope',
  'pharma-med-tech-it-services':                'Flask',
  'banking-and-financial-services-it':          'Landmark',
  'legal-and-law-firm-it-services':             'Scale',
  'accounting-firm-it-services':                'Receipt',
  'manufacturing-it':                           'Factory',
  'education-it-services':                      'GraduationCap',
  'professional-it-services':                   'Briefcase',
  'construction-it-services':                   'HardHat',
  'non-profit-it-services':                     'Heart',
  'transportation-logistics-it-services':       'Truck',
  'real-estate-it-services':                    'Building2',
  'marketing-it-services':                      'Megaphone',
  'government-it-services':                     'Building',
  'government-contractor-it-services':          'Building',
  'private-equity-it-services':                 'TrendingUp',
  'dealership-and-automotive-it-services':      'Car',
  'retail-it-services':                         'Store',

  // ── Industries — by size ────────────────────────────────────────────────────
  'small-business':                             'Store',
  'mid-sized-business':                         'Building',
  'large-business-it-services':                 'Building2',
  'enterprise-managed-it-services':             'Landmark',

  // ── Resources ───────────────────────────────────────────────────────────────
  'resource-center':                            'BookOpen',
  'white-papers':                               'FileText',
  'case-studies':                               'Award',
  'blog':                                       'Rss',

  // ── About ────────────────────────────────────────────────────────────────────
  'about-us':                                   'Users',
  'process':                                    'GitBranch',
  'partners':                                   'Handshake',
  'contact-us':                                 'Phone',
  'request-our-pricing-guide':                  'FileText',

};
