// Nearby-city adjacency map. Drives the "Nearby cities" section on city
// service pages so each page links out to neighbor cities, building internal
// link equity for local SEO.
//
// Keys are city slugs (the lowercase, hyphenated form used in URLs).
// Values are ordered lists of 3-4 neighbors that share a metro market.

export interface NearbyCity {
  name: string
  slug: string
  href: string
}

// Master roster — city slug -> display name. Lets us look up display names
// from a slug without scattering hard-coded labels through the lib.
const CITY_NAMES: Record<string, string> = {
  raleigh: 'Raleigh',
  durham: 'Durham',
  'chapel-hill': 'Chapel Hill',
  cary: 'Cary',
  apex: 'Apex',
  garner: 'Garner',
  knightdale: 'Knightdale',
  hillsborough: 'Hillsborough',
  burlington: 'Burlington',
  'rocky-mount': 'Rocky Mount',
  charlotte: 'Charlotte',
  concord: 'Concord',
  gastonia: 'Gastonia',
  huntersville: 'Huntersville',
  greensboro: 'Greensboro',
  'winston-salem': 'Winston-Salem',
  'high-point': 'High Point',
  wilmington: 'Wilmington',
  fayetteville: 'Fayetteville',
  rtp: 'Research Triangle Park',
}

// Adjacency map. Each city points to ~3 neighbors that make sense for a
// reader weighing local IT options.
const ADJACENCY: Record<string, readonly string[]> = {
  // Triangle (Raleigh-Durham-Chapel Hill metro)
  raleigh: ['cary', 'apex', 'durham'],
  durham: ['chapel-hill', 'hillsborough', 'raleigh'],
  'chapel-hill': ['durham', 'hillsborough', 'raleigh'],
  cary: ['raleigh', 'apex', 'durham'],
  apex: ['cary', 'raleigh', 'durham'],
  garner: ['raleigh', 'cary', 'apex'],
  knightdale: ['raleigh', 'durham', 'rocky-mount'],
  hillsborough: ['chapel-hill', 'durham', 'burlington'],
  burlington: ['hillsborough', 'greensboro', 'durham'],
  'rocky-mount': ['raleigh', 'wilmington', 'durham'],
  rtp: ['durham', 'raleigh', 'chapel-hill'],

  // Charlotte metro
  charlotte: ['concord', 'gastonia', 'huntersville'],
  concord: ['charlotte', 'huntersville', 'gastonia'],
  gastonia: ['charlotte', 'concord', 'huntersville'],
  huntersville: ['charlotte', 'concord', 'gastonia'],

  // Triad
  greensboro: ['winston-salem', 'high-point', 'burlington'],
  'winston-salem': ['greensboro', 'high-point', 'burlington'],
  'high-point': ['greensboro', 'winston-salem', 'burlington'],

  // Coast / Sandhills
  wilmington: ['fayetteville', 'rocky-mount', 'raleigh'],
  fayetteville: ['wilmington', 'raleigh', 'rocky-mount'],
}

// Service-type slug variants — different city pages target different services.
// This map converts a generic city slug to the canonical managed-IT URL for
// that city, so the "Nearby cities" section can deep-link into the same
// service-class page when one exists for the neighbor city. Falls back to the
// neighbor's `/managed-it-services-<slug>/` URL.
const DEFAULT_HREF = (slug: string) => `/managed-it-services-${slug}/`

// Returns the list of nearby cities for a given slug, mapped to {name, slug, href}.
// Pass a `hrefBuilder` to point links at a service variant (e.g. cybersecurity)
// for cities that have one. Cities without a matching service page fall back
// to managed-it-services.
export function getNearbyCities(
  citySlug: string,
  hrefBuilder?: (slug: string) => string,
): NearbyCity[] {
  const neighbors = ADJACENCY[citySlug] ?? []
  const buildHref = hrefBuilder ?? DEFAULT_HREF
  const out: NearbyCity[] = []
  for (const slug of neighbors) {
    const name = CITY_NAMES[slug]
    if (!name) continue
    out.push({ name, slug, href: buildHref(slug) })
  }
  return out
}

export function getCityName(slug: string): string | undefined {
  return CITY_NAMES[slug]
}
