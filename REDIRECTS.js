/**
 * ITSco Website Rebuild — Redirect Map
 *
 * Source: ITSco Site Inventory spreadsheet, Redirect Map tab
 * All redirects are permanent 301s — implemented at launch via next.config.js
 *
 * Usage in next.config.js:
 *
 *   const { redirects } = require('./REDIRECTS.js')
 *   module.exports = { async redirects() { return redirects } }
 *
 * Sections:
 *   1. URL flattening — nested WordPress URLs simplified on rebuild
 *   2. Micro-geo cleanup — thin local pages redirected to nearest city page
 *   3. Pages to delete — off-topic blog posts, remove from WordPress entirely
 */

const redirects = [

  // ── 1. URL FLATTENING ────────────────────────────────────────────────────
  // Nested WordPress URLs simplified during rebuild.
  // Old content is preserved — only the URL structure changes.

  {
    source:      '/services/itad',
    destination: '/itad/',
    permanent:   true,
    // Note: flatten from nested /services/managed-it-services/itad/ path
  },
  {
    source:      '/services/managed-it-services/asset-lifecycle-management',
    destination: '/asset-lifecycle-management/',
    permanent:   true,
    // Note: flatten from deeply nested path
  },
  {
    source:      '/it-asset-management-services',
    destination: '/asset-lifecycle-management/',
    permanent:   true,
    // Note: near-duplicate of asset-lifecycle-management with no GSC data —
    // consolidated to avoid keyword cannibalization (INVENTORY: "Template only").
  },
  {
    source:      '/cyber-security-consulting',
    destination: '/cybersecurity-consulting-services/',
    permanent:   true,
    // Note: INVENTORY "Redirect only" — consolidated to the canonical
    // /cybersecurity-consulting-services/ page.
  },
  {
    source:      '/cloud-consulting',
    destination: '/cloud-consulting-services/',
    permanent:   true,
    // Note: INVENTORY "Redirect only" — consolidated to /cloud-consulting-services/.
  },
  {
    source:      '/virtualization',
    destination: '/virtualization-services/',
    permanent:   true,
    // Note: INVENTORY "Redirect only" — /virtualization-services/ is canonical.
  },
  {
    source:      '/microsoft-azure-services-1',
    destination: '/microsoft-azure-services/',
    permanent:   true,
    // Note: duplicate/test page — consolidated to /microsoft-azure-services/.
  },
  {
    source:      '/services-for-the-microsoft-suite',
    destination: '/microsoft-solutions/',
    permanent:   true,
    // Note: INVENTORY URL rename — Microsoft pillar moved to /microsoft-solutions/.
  },
  {
    source:      '/share-point-services',
    destination: '/microsoft-sharepoint-services/',
    permanent:   true,
    // Note: INVENTORY "Redirect only" — 20 clicks; consolidated to the canonical page.
  },
  {
    source:      '/skype-for-business-services',
    destination: '/microsoft-teams-services/',
    permanent:   true,
    // Note: INVENTORY "Redirect only" — Skype for Business retired; Teams is the successor.
  },
  {
    source:      '/microsoft-teams-services-1',
    destination: '/microsoft-teams-services/',
    permanent:   true,
    // Note: duplicate/test page — consolidated to /microsoft-teams-services/.
  },
  {
    source:      '/microsoft-365-services-1',
    destination: '/microsoft-365-services/',
    permanent:   true,
    // Note: duplicate/test page — consolidated to /microsoft-365-services/.
  },
  {
    source:      '/microsoft-exchange-services-1',
    destination: '/microsoft-exchange-services/',
    permanent:   true,
    // Note: duplicate/test page — consolidated to /microsoft-exchange-services/.
  },
  {
    source:      '/vcio-services',
    destination: '/vcio-vcto-vciso-services/',
    permanent:   true,
    // Note: INVENTORY "Redirect only" — 11.7k impr; consolidated to the combined page.
  },
  {
    source:      '/it-audits-and-assessments',
    destination: '/it-assessments-strategies/',
    permanent:   true,
    // Note: INVENTORY "Template only", flagged as overlapping it-assessments-strategies.
  },
  {
    source:      '/it-strategy-services',
    destination: '/it-roadmap-planning/',
    permanent:   true,
    // Note: INVENTORY "Template only", flagged as overlapping it-roadmap-planning.
  },
  {
    source:      '/services/itad',
    destination: '/itad/',
    permanent:   true,
    // Note: INVENTORY "Flatten URL" — ITAD moved out of the /services/ path.
  },
  {
    source:      '/voip-services',
    destination: '/voip-unified-communications/',
    permanent:   true,
    // Note: INVENTORY "Redirect only" — consolidated to /voip-unified-communications/.
  },

  // ── 2. MICRO-GEO CLEANUP ─────────────────────────────────────────────────
  // Thin local pages with awkward URLs and zero/minimal traffic.
  // Redirected to the nearest active city page to consolidate authority.

  {
    source:      '/it-solutions-company-managed-it-services-chapel-hill',
    destination: '/managed-it-services-chapel-hill/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-garner',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-fayetteville',
    destination: '/managed-it-services-fayetteville/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-erwin',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-morrisville',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-graham',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-mebane',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-knightdale',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-butner',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-bathesda',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-carpenter',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-cary',
    destination: '/managed-it-services-cary/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-apex',
    destination: '/managed-it-services-apex/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-burlington',
    destination: '/managed-it-services-burlington/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-hillsborough',
    destination: '/managed-it-services-hillsborough/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-rocky-mount',
    destination: '/managed-it-services-rocky-mount/',
    permanent:   true,
  },

  // Nav-only stub: /about/ never had a published page, but the nav and
  // some internal links pointed at it. Redirect to the canonical About hub.
  // Source has no trailing slash because Next.js strips it (308) before
  // evaluating redirects(), so the rule must match the post-strip path.
  {
    source:      '/about',
    destination: '/about-us/',
    permanent:   true,
  },

  // Industries rename — "Banking & Financial Services" -> "Financial Services"
  // (stakeholder request). Preserve any organic equity from the legacy URL.
  {
    source:      '/banking-and-financial-services-it',
    destination: '/financial-services-it/',
    permanent:   true,
  },

]

/**
 * PAGES TO DELETE AT LAUNCH
 *
 * These off-topic blog posts should be deleted from WordPress entirely.
 * No redirect is needed — they have no ranking equity worth preserving.
 * Remove them from the WordPress admin before or at launch.
 *
 * - /blog/should-students-learn-how-to-code/        (off-topic)
 * - /blog/selenium-vs-human-testing/                (off-topic)
 * - /blog/missing-icon-overlays-office-365-one-drive/ (old, low value)
 * - /blog/microsoft-removes-storage-limit-for-cloud-365/ (superseded)
 */

module.exports = { redirects }
