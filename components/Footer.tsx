import Image from "next/image";
import Link from "next/link";

// LinkedIn glyph inlined — lucide-react no longer ships brand icons and
// pulling in a brand-icon dependency for a single SVG isn't worth it.
function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
  { label: "Accounting Firms", href: "/accounting-firm-it-services/" },
  { label: "Professional Services", href: "/professional-it-services/" },
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
              className="text-sm text-white/60 hover:text-white transition-[color] duration-150 leading-loose focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red rounded-sm active:opacity-70"
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
            <Link href="/" className="inline-block mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red rounded-sm active:opacity-80 transition-opacity duration-150">
              <Image
                src="/images/itsco-logo-white.svg"
                alt="ITSco"
                width={100}
                height={57}
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-[220px] mb-5">
              The ROI-Driven IT Services Company. Trusted managed IT, cybersecurity, and cloud solutions since 1996.
            </p>
            <a
              href="https://www.linkedin.com/company/itscotech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ITSco on LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-[color,background-color] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red active:opacity-70"
            >
              <LinkedInIcon size={18} />
            </a>
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
            <Link href="/privacy-policy/" className="text-xs text-white/35 hover:text-white/70 transition-[color] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red rounded-sm active:opacity-70">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-xs text-white/35 hover:text-white/70 transition-[color] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-itsco-red rounded-sm active:opacity-70">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
