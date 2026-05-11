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
    source:      '/services/itad/',
    destination: '/itad/',
    permanent:   true,
    // Note: flatten from nested /services/managed-it-services/itad/ path
  },
  {
    source:      '/services/managed-it-services/asset-lifecycle-management/',
    destination: '/asset-lifecycle-management/',
    permanent:   true,
    // Note: flatten from deeply nested path
  },

  // ── 2. MICRO-GEO CLEANUP ─────────────────────────────────────────────────
  // Thin local pages with awkward URLs and zero/minimal traffic.
  // Redirected to the nearest active city page to consolidate authority.

  {
    source:      '/it-solutions-company-managed-it-services-chapel-hill/',
    destination: '/managed-it-services-chapel-hill/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-garner/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-fayetteville/',
    destination: '/managed-it-services-fayetteville/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-erwin/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-morrisville/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-graham/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-mebane/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-knightdale/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-butner/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-bathesda/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-carpenter/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-cary/',
    destination: '/managed-it-services-cary/',
    permanent:   true,
  },
  {
    source:      '/it-solutions-company-managed-it-services-apex/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
    // Note: 2 clicks — monitor post-launch
  },
  {
    source:      '/it-solutions-company-managed-it-services-burlington/',
    destination: '/managed-it-services-burlington/',
    permanent:   true,
    // Note: 1 click remaining
  },
  {
    source:      '/it-solutions-company-managed-it-services-hillsborough/',
    destination: '/managed-it-services-raleigh/',
    permanent:   true,
    // Note: 2 clicks — monitor post-launch
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
