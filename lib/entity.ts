// Shared organization identity for JSON-LD (homepage, About, city pages).
// These help Google and AI engines tell ITSco apart from unrelated
// organizations with similar names (a Singapore "ITSCO", a PwC program).
// Add a profile only once its URL is confirmed live and current.

/** External profiles for `sameAs`. */
export const SAME_AS_PROFILES: readonly string[] = [
  'https://www.linkedin.com/company/itscotech/',
  'https://clutch.co/profile/infotec-i-dba-itsco',
  'https://www.cloudtango.net/providers/11516/itsco',
  // Google Business Profiles as stable CID links (from Chris's share links,
  // Nov 10, 2026): Durham, then Raleigh.
  'https://maps.google.com/?cid=11143399456859058559',
  'https://maps.google.com/?cid=12048062351076683708',
]

/** Other names the company is known by, for `alternateName`. */
export const ALTERNATE_NAMES: readonly string[] = ['ITS co', 'Integrated Technical Services']

// legalName is deliberately not set yet. Clutch lists the company as
// "INFOTEC I, Inc., DBA ITSco"; confirm the registered name with ITSco first.
