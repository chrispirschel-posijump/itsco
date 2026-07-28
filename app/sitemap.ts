import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

// Auto-generated sitemap: walks app/ at build time, derives a route for every
// page.tsx, filters out demo/sandbox/orphan pages, and assigns a priority
// per category. Re-runs on every build, so new pages appear automatically.

const SITE_URL = 'https://www.itsco.com'

// Routes intentionally excluded from the sitemap. These either don't belong
// in Google (demo/sandbox pages, dynamic sitemap/robots) or are noindexed
// orphans that we don't want surfaced now that the global crawl gate
// is being flipped.
const EXCLUDED_ROUTES = new Set<string>([
  // Demo and sandbox pages (not promoted in nav, not for indexing)
  '/demo',
  '/demo-lite',
  '/demo-cream',
  '/demo-oat',
  '/page-a',
  '/page-a-lite',
  '/page-b',
  '/page-b-lite',
  '/page-c',
  '/page-c-lite',
  // Orphan industry pages — removed from nav/footer/hub but kept on disk
  '/construction-it-services',
  '/transportation-logistics-it-services',
  '/real-estate-it-services',
  '/marketing-it-services',
])

// Priority tiers — higher = more important. Google treats these as relative
// hints, not absolute. The homepage is 1.0; everything else cascades down.
function priorityFor(route: string): number {
  if (route === '') return 1.0
  // Core hubs and pillars
  if (
    route === '/services' ||
    route === '/industries' ||
    route === '/about-us' ||
    route === '/contact-us' ||
    route === '/managed-it-services' ||
    route === '/cybersecurity' ||
    route === '/cloud-services' ||
    route === '/microsoft-solutions' ||
    route === '/it-management-consulting' ||
    route === '/ai-automation' ||
    route === '/maximize-roi-with-managed-it-services'
  ) {
    return 0.9
  }
  // Local SEO city pages — high-value commercial intent
  if (
    route.includes('-raleigh') ||
    route.includes('-durham') ||
    route.includes('-charlotte') ||
    route.includes('-greensboro') ||
    route.includes('-winston-salem') ||
    route.includes('/raleigh-') ||
    route.includes('/charlotte-') ||
    route.startsWith('/managed-it-services-') ||
    route.startsWith('/it-support-') ||
    route.startsWith('/it-company-') ||
    route.endsWith('-cyber-security-services')
  ) {
    return 0.8
  }
  // Industry verticals + case studies + white papers + service sub-pages
  if (
    route.endsWith('-it-services') ||
    route.endsWith('-it') ||
    route.startsWith('/case-studies/') ||
    route.startsWith('/white-papers') ||
    route.startsWith('/white-paper-')
  ) {
    return 0.7
  }
  // Resources, partners, blog index
  if (
    route === '/blog' ||
    route === '/resources' ||
    route === '/case-studies' ||
    route === '/white-papers' ||
    route === '/partners' ||
    route === '/process'
  ) {
    return 0.7
  }
  // Blog posts
  if (route.startsWith('/blog/')) return 0.6
  // Everything else (legal, niche service sub-pages)
  return 0.5
}

// changeFrequency hint per category
function changeFrequencyFor(route: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (route === '') return 'weekly'
  if (route === '/blog' || route.startsWith('/blog/')) return 'monthly'
  if (route === '/case-studies' || route.startsWith('/case-studies/')) return 'monthly'
  if (route === '/white-papers' || route.startsWith('/white-paper')) return 'monthly'
  if (route === '/contact-us' || route === '/about-us') return 'yearly'
  if (route === '/privacy-policy' || route === '/terms') return 'yearly'
  return 'monthly'
}

// Walk app/ at build time and emit one URL per page.tsx encountered. Skips
// route groups (folders starting with "(" don't add a path segment but we
// just iterate top-down so any `page.tsx` we find gets its containing
// path translated 1:1 to a route — this site doesn't use route groups).
function collectRoutes(appDir: string): string[] {
  const routes: string[] = []

  function walk(absDir: string, routePath: string) {
    let entries: fs.Dirent[]
    try {
      entries = fs.readdirSync(absDir, { withFileTypes: true })
    } catch {
      return
    }

    const hasPage = entries.some(
      (e) => e.isFile() && (e.name === 'page.tsx' || e.name === 'page.ts'),
    )
    if (hasPage) {
      routes.push(routePath || '/')
    }

    for (const entry of entries) {
      // Skip dynamic segments and private folders. This codebase doesn't use
      // them today, but guard against them so the sitemap doesn't emit
      // literal `[slug]` URLs if any are added later.
      if (
        !entry.isDirectory() ||
        entry.name.startsWith('_') ||
        entry.name.startsWith('.') ||
        entry.name.startsWith('[') ||
        entry.name === 'api'
      ) {
        continue
      }
      walk(path.join(absDir, entry.name), `${routePath}/${entry.name}`)
    }
  }

  walk(appDir, '')
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')
  const lastModified = new Date()

  const routes = collectRoutes(appDir)
    .filter((r) => !EXCLUDED_ROUTES.has(r))
    // Treat empty string as the homepage
    .map((r) => (r === '/' ? '' : r))

  // Deduplicate just in case
  const unique = Array.from(new Set(routes)).sort()

  // Emit URLs WITHOUT a trailing slash (except the site root), matching
  // Next.js's default trailingSlash: false behavior. Previously appended a
  // trailing slash to every URL, which caused Google to see a 308 → no-slash
  // chain on every crawl and pick the no-slash version as canonical anyway.
  return unique.map((route) => ({
    url: route === '' ? `${SITE_URL}/` : `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: changeFrequencyFor(route),
    priority: priorityFor(route),
  }))
}
