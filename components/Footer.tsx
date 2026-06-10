import Link from "next/link";

const SERVICES_LINKS = [
  { label: "Managed IT Services", href: "/managed-it-services/" },
  { label: "Cybersecurity & Compliance", href: "/cybersecurity/" },
  { label: "Cloud Services", href: "/cloud-services/" },
  { label: "Strategy & Consulting", href: "/it-management-consulting/" },
  { label: "Microsoft Solutions", href: "/microsoft-solutions/" },
  { label: "Network Engineering", href: "/network-engineering/" },
  { label: "AI & Automation", href: "/ai-automation/" },
];

const INDUSTRIES_LINKS = [
  { label: "Healthcare", href: "/healthcare-managed-it-services/" },
  { label: "Financial Services", href: "/financial-services-it/" },
  { label: "Legal", href: "/legal-and-law-firm-it-services/" },
  { label: "Manufacturing", href: "/manufacturing-it/" },
  { label: "Education", href: "/education-it-services/" },
  { label: "Government", href: "/government-it-services/" },
  { label: "Non-Profit", href: "/non-profit-it-services/" },
];

const LOCAL_LINKS = [
  { label: "Raleigh", href: "/managed-it-services-raleigh/" },
  { label: "Durham", href: "/managed-it-services-durham/" },
  { label: "Chapel Hill", href: "/managed-it-services-chapel-hill/" },
  { label: "Cary", href: "/managed-it-services-cary/" },
  { label: "Charlotte", href: "/managed-it-services-charlotte/" },
  { label: "Greensboro", href: "/managed-it-services-greensboro/" },
  { label: "Burlington", href: "/managed-it-services-burlington/" },
  { label: "Fayetteville", href: "/managed-it-services-fayetteville/" },
];

const COMPANY_LINKS = [
  { label: "About ITSco", href: "/about-us/" },
  { label: "Our Process", href: "/process/" },
  { label: "Partners", href: "/partners/" },
  { label: "Resource Center", href: "/resources/" },
  { label: "Blog", href: "/blog/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Contact Us", href: "/contact-us/" },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
        {heading}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-[color] duration-150 leading-loose focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] rounded-sm active:opacity-70"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="text-xl font-bold tracking-tight leading-none mb-4 select-none">
              <span className="text-white">ITS</span>
              <span className="text-[#CA3C27]">co</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
              The ROI-Driven IT Services Company. Trusted managed IT, cybersecurity, and cloud solutions since 1996.
            </p>
          </div>

          <FooterColumn heading="Services" links={SERVICES_LINKS} />
          <FooterColumn heading="Industries" links={INDUSTRIES_LINKS} />
          <FooterColumn heading="Service Area" links={LOCAL_LINKS} />
          <FooterColumn heading="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-white/35">
            <span>&copy; {new Date().getFullYear()} ITSco. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>(919) 674-0044 Support &nbsp;·&nbsp; (919) 249-9556 Sales</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex flex-col leading-snug">
              <span>Durham: 4601 Creekstone Drive, Suite 102, Durham, NC 27703</span>
              <span>Raleigh: 8480 Honeycutt Rd #200-V700, Raleigh, NC 27615</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy/" className="text-xs text-white/35 hover:text-white/70 transition-[color] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] rounded-sm active:opacity-70">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-xs text-white/35 hover:text-white/70 transition-[color] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CA3C27] rounded-sm active:opacity-70">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
