"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services/",
    children: [
      {
        label: "Managed IT Services",
        href: "/managed-it-services/",
        children: [
          { label: "Managed Network Services", href: "/managed-network-services/" },
          { label: "HelpDesk & Service Desk", href: "/raleigh-it-helpdesk/" },
          { label: "Server Monitoring", href: "/server-monitoring-and-maintenance/" },
          { label: "Backup & Disaster Recovery", href: "/backup-disaster-recovery/" },
          { label: "Asset Lifecycle Management", href: "/asset-lifecycle-management/" },
          { label: "Remote IT Support", href: "/remote-it-support/" },
          { label: "IT Staff Augmentation", href: "/it-staff-augmentation/" },
        ],
      },
      {
        label: "Cybersecurity",
        href: "/cybersecurity/",
        children: [
          { label: "Fully Managed Cybersecurity", href: "/fully-managed-cybersecurity/" },
          { label: "Managed SOC", href: "/managed-soc/" },
          { label: "SIEM Services", href: "/siem-services/" },
          { label: "MDR Monitoring & Response", href: "/mdr-monitoring-and-response/" },
          { label: "Network & Endpoint Security", href: "/network-security/" },
          { label: "Managed Firewall + IDS/IPS", href: "/managed-firewall/" },
          { label: "Cyber Risk Assessment", href: "/cyber-risk-assessment/" },
          { label: "Penetration Testing", href: "/penetration-testing-services/" },
          { label: "Email Security", href: "/email-security/" },
          { label: "Security Audits & Compliance", href: "/security-audits-compliance/" },
          { label: "Compliance Management", href: "/compliance-management/" },
          { label: "Zero Trust Security", href: "/zero-trust-security/" },
        ],
      },
      {
        label: "Cloud Services",
        href: "/cloud-services/",
        children: [
          { label: "Managed Cloud Services", href: "/managed-cloud-services/" },
          { label: "Cloud Migration", href: "/cloud-migration/" },
          { label: "Azure Services", href: "/microsoft-azure-services/" },
          { label: "AWS Services", href: "/aws-services/" },
          { label: "Cloud Hosting (Public/Private/Hybrid)", href: "/cloud-hosting/" },
          { label: "Cloud Cybersecurity", href: "/cloud-cybersecurity/" },
          { label: "Virtualization & VDI", href: "/virtualization-services/" },
          { label: "Cloud Consulting", href: "/cloud-consulting-services/" },
        ],
      },
      {
        label: "Strategy & Consulting",
        href: "/it-management-consulting/",
        children: [
          { label: "vCIO / vCTO / vCISO", href: "/vcio-vcto-vciso-services/" },
          { label: "Fractional CTO Services", href: "/fractional-cto-services/" },
          { label: "IT Roadmap Planning", href: "/it-roadmap-planning/" },
          { label: "IT Assessments & Strategies", href: "/it-assessments-strategies/" },
          { label: "Tech Due Diligence", href: "/tech-due-diligence-for-businesses/" },
          { label: "IT Due Diligence for M&A", href: "/it-due-diligence-mergers-acquisitions/" },
          { label: "Technical Project Management", href: "/technical-project-management/" },
          { label: "IT ROI Assessment", href: "/it-roi-assessment/" },
          { label: "Business Continuity Planning", href: "/business-continuity-planning/" },
        ],
      },
      {
        label: "Microsoft Solutions",
        href: "/microsoft-solutions/",
        children: [
          { label: "Microsoft 365", href: "/microsoft-365-services/" },
          { label: "Microsoft Azure", href: "/microsoft-azure-services/" },
          { label: "Microsoft Teams", href: "/microsoft-teams-services/" },
          { label: "Microsoft Exchange", href: "/microsoft-exchange-services/" },
          { label: "SharePoint", href: "/microsoft-sharepoint-services/" },
          { label: "Microsoft Copilot", href: "/microsoft-copilot/" },
          { label: "Microsoft Sentinel", href: "/microsoft-sentinel/" },
        ],
      },
      {
        label: "Network Engineering",
        href: "/network-engineering/",
        children: [
          { label: "Network Engineering", href: "/network-engineering/" },
          { label: "Systems Engineering", href: "/systems-engineering/" },
          { label: "VoIP & Unified Communications", href: "/voip-unified-communications/" },
          { label: "Security Event Remediation", href: "/security-event-remediation-ip-protection/" },
          { label: "ITAD", href: "/itad/" },
          { label: "IT Procurement", href: "/it-procurement/" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Healthcare IT", href: "/healthcare-managed-it-services/" },
      { label: "Pharma & Med Tech", href: "/pharma-med-tech-it-services/" },
      { label: "Banking & Financial Services", href: "/banking-and-financial-services-it/" },
      { label: "Legal & Law Firms", href: "/legal-and-law-firm-it-services/" },
      { label: "Accounting Firms", href: "/accounting-firm-it-services/" },
      { label: "Manufacturing", href: "/manufacturing-it/" },
      { label: "Professional Services", href: "/professional-it-services/" },
      { label: "Construction", href: "/construction-it-services/" },
      { label: "Non-Profit", href: "/non-profit-it-services/" },
      { label: "Transportation & Logistics", href: "/transportation-logistics-it-services/" },
      { label: "Real Estate", href: "/real-estate-it-services/" },
      { label: "Marketing", href: "/marketing-it-services/" },
      {
        label: "By Size",
        href: "/it-services-by-industry/",
        children: [
          { label: "Small Business", href: "/small-business/" },
          { label: "Mid-Sized Business", href: "/mid-sized-business/" },
          { label: "Large Business", href: "/large-business-it-services/" },
          { label: "Enterprise", href: "/enterprise-managed-it-services/" },
        ],
      },
    ],
  },
  {
    label: "AI & Automation",
    href: "/ai-automation/",
    children: [
      { label: "AI Governance", href: "/ai-governance/" },
      { label: "AI Readiness Assessment", href: "/ai-readiness-assessment/" },
      { label: "AI Strategy Consulting", href: "/ai-strategy-consulting/" },
      { label: "Microsoft Copilot", href: "/microsoft-copilot-implementation/" },
      { label: "Process Automation", href: "/process-automation/" },
      { label: "Healthcare AI", href: "/healthcare-ai-services/" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "ROI Guide", href: "/maximize-roi-with-managed-it-services/" },
      { label: "Blog", href: "/blog/" },
      { label: "Case Studies", href: "/case-studies/" },
      { label: "White Papers", href: "/white-papers/" },
    ],
  },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "About ITSco", href: "/about-us/" },
      { label: "Meet the Team", href: "/about-us/meet-the-team/" },
      { label: "Our Process", href: "/process/" },
      { label: "Partners", href: "/partners/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
  },
];

type NavChild = { label: string; href: string; children?: NavChild[] };

const CALENDLY_BASE =
  "https://calendly.com/msavino-itsco/30-minute-free-consultation-with-itsco";

function FlyoutItem({ item }: { item: NavChild }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 rounded-lg transition-[color,background-color] duration-150 active:opacity-70"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center justify-between px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 rounded-lg transition-[color,background-color] duration-150 cursor-default select-none">
        <Link
          href={item.href}
          className="flex-1"
          onClick={(e) => e.stopPropagation()}
        >
          {item.label}
        </Link>
        <ChevronDown size={12} className={`ml-2 flex-shrink-0 transition-transform duration-150 ${open ? "-rotate-90" : "rotate-[-90deg]"} -rotate-90`} />
      </div>

      {/* Flyout panel */}
      <div
        className={`absolute left-full top-0 pl-1 min-w-[240px] z-50 transition-[opacity,transform] duration-150 ${
          open ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none -translate-x-1"
        }`}
      >
        <div className="rounded-xl bg-[#1C1C1C] border border-white/10 shadow-2xl p-2">
          <Link
            href={item.href}
            className="block px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#CA3C27] hover:text-white hover:bg-white/5 rounded-lg transition-[color,background-color] duration-150"
          >
            All {item.label} →
          </Link>
          <div className="my-1 border-t border-white/10" />
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 rounded-lg transition-[color,background-color] duration-150 active:opacity-70"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DropdownMenu({
  items,
  open,
}: {
  items: NavChild[];
  open: boolean;
}) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 min-w-[220px] z-50 pt-2 transition-[opacity,transform] duration-150 ${
        open
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-1"
      }`}
    >
      <div className="rounded-xl bg-[#1C1C1C] border border-white/10 shadow-2xl p-2">
        {items.map((item) => (
          <FlyoutItem key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    }
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ctaHref = `${CALENDLY_BASE}?utm_source=website&utm_medium=cta&utm_campaign=nav`;

  // Light variant: dark text + dark logo when unscrolled, flips to dark bg + white text when scrolled
  const isLight = variant === "light";
  const showDarkText = isLight && !scrolled;

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 right-0 z-40 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-8"
      >
        {/* Logo — left */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={showDarkText ? "/images/itsco-logo.svg" : "/images/itsco-logo-white.svg"}
            alt="ITSco"
            width={90}
            height={51}
            priority
          />
        </Link>

        {/* Nav items — center */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => item.children && setActiveDropdown(null)}
            >
              {item.children ? (
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeDropdown === item.label
                      ? (showDarkText ? "text-[#111111]" : "text-white")
                      : (showDarkText ? "text-[#111111]/70 hover:text-[#111111]" : "text-white/70 hover:text-white")
                  }`}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    showDarkText ? "text-[#111111]/70 hover:text-[#111111]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {item.children && (
                <DropdownMenu items={item.children} open={activeDropdown === item.label} />
              )}
            </div>
          ))}
        </div>

        {/* CTA — right */}
        <div className="hidden lg:block flex-shrink-0">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#CA3C27] rounded-lg hover:bg-[#B4311E] transition-[background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CA3C27] active:scale-[0.98]"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 -mr-1 transition-[color,opacity] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] active:opacity-70 rounded ${
            showDarkText ? "text-[#111111] hover:text-[#111111]/70" : "text-white hover:text-white/80"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#111111] z-50 flex flex-col">
          {/* Mobile header row */}
          <div className="flex items-center justify-between px-6 h-16 flex-shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/itsco-logo-white.svg"
                alt="ITSco"
                width={90}
                height={51}
                priority
              />
            </Link>
            <button
              className="p-2 text-white hover:text-white/70 transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {NAV_ITEMS.map((item) => {
              // On mobile, Services renders as a direct link to the hub page —
              // sub-hubs are reached by visiting /services/ and tapping a card.
              const flatOnMobile = item.label === "Services";
              return (
              <div key={item.label}>
                {item.children && !flatOnMobile ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 min-h-[48px] text-2xl font-bold text-white hover:text-white/70 transition-colors duration-200"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pb-2 pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2.5 min-h-[48px] flex items-center text-base text-white/60 hover:text-white transition-colors duration-200"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 min-h-[48px] flex items-center text-2xl font-bold text-white hover:text-white/70 transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 flex-shrink-0">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-4 text-base font-semibold text-white bg-[#CA3C27] rounded-lg hover:bg-[#B4311E] transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
