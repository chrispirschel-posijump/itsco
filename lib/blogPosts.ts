// Central registry for blog posts. Read by the /blog/ index, each post page,
// and the related-posts module. Add an entry here when a new post is built.

export interface BlogPost {
  slug: string
  title: string
  category: string
  excerpt: string
  heroImage: string
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'raleigh-industries',
    title: 'The 7 Biggest, Most Important Industries in Raleigh',
    category: 'Business Insights',
    excerpt:
      'From tech and healthcare to finance and education — a closer look at the seven industries powering Raleigh’s economy.',
    heroImage: '/images/hero/blog/steven-cordes-EZmOa2Mv0nc-unsplash.jpg',
  },
  {
    slug: 'cost-of-it-support-for-small-business',
    title: 'What is the Average Cost of IT Support for Small Businesses?',
    category: 'Managed IT',
    excerpt:
      'In-house IT team or outsourced MSP? A practical breakdown of what IT support actually costs a small business.',
    heroImage: '/images/hero/blog/cardmapr-nl-AWOcmWKnOR8-unsplash.jpg',
  },
  {
    slug: 'why-is-network-security-important',
    title: '10 Reasons Why Network Security is Important for Businesses',
    category: 'Cybersecurity',
    excerpt:
      'Ten concrete reasons network security is mission-critical for businesses of every size — and what’s at stake without it.',
    heroImage: '/images/hero/blog/redd-francisco-5U_28ojjgms-unsplash.jpg',
  },
  {
    slug: 'types-of-cloud-computing',
    title: '6 Types of Cloud Computing',
    category: 'Cloud',
    excerpt:
      'IaaS, PaaS, SaaS, and beyond — the six models of cloud computing and how to know which fits your business.',
    heroImage: '/images/hero/blog/compagnons-psXNymQI7Pk-unsplash.jpg',
  },
  {
    slug: 'infrastructure-outsource',
    title: '5 Reasons Why Businesses Outsource Their Infrastructure',
    category: 'Managed IT',
    excerpt:
      'Five reasons growing businesses hand their IT infrastructure to a managed services partner.',
    heroImage: '/images/hero/blog/claudio-schwarz-08dyHxddcKc-unsplash.jpg',
  },
  {
    slug: 'what-is-cyber-vandalism',
    title: 'What is Cyber Vandalism?',
    category: 'Cybersecurity',
    excerpt:
      'Cyber vandalism defaces and destroys rather than steals — what it is, its common forms, and how to defend against it.',
    heroImage: '/images/hero/blog/shamin-haky-RIk-i9rXPao-unsplash.jpg',
  },
  {
    slug: 'best-remote-support-software-for-small-business',
    title: 'The Best Remote IT Support Software for Small Business',
    category: 'Managed IT',
    excerpt:
      'The remote IT support tools that let support teams diagnose and fix problems fast — without leaving the office.',
    heroImage: '/images/hero/blog/pexels-edmond-dantes-8068258.jpg',
  },
  {
    slug: 'types-of-network-security',
    title: 'The 15 Types of Network Security',
    category: 'Cybersecurity',
    excerpt:
      'From firewalls to zero trust — fifteen types of network security and the role each plays in protecting your business.',
    heroImage: '/images/hero/blog/redd-francisco-5U_28ojjgms-unsplash.jpg',
  },
  {
    slug: 'network-security-plan',
    title: 'How to Plan & Implement a Network Security Plan',
    category: 'Cybersecurity',
    excerpt:
      'A step-by-step guide to building and implementing a network security plan that actually protects your business.',
    heroImage: '/images/hero/blog/shamin-haky-RIk-i9rXPao-unsplash.jpg',
  },
  {
    slug: 'cloud-migration-challenges',
    title: 'The 10 Most Common Cloud Migration Challenges',
    category: 'Cloud',
    excerpt:
      'The ten challenges that derail cloud migrations most often — and how to plan around each one.',
    heroImage: '/images/hero/blog/compagnons-psXNymQI7Pk-unsplash.jpg',
  },
  {
    slug: 'staff-augmentation-vs-managed-services',
    title: 'Staff Augmentation vs. Managed Services: A Comparison',
    category: 'Managed IT',
    excerpt:
      'Staff augmentation or managed services? A clear comparison to help you choose the right IT support model.',
    heroImage: '/images/hero/blog/claudio-schwarz-08dyHxddcKc-unsplash.jpg',
  },
  {
    slug: 'it-cost-reduction',
    title: 'How to Reduce Technology Costs: An IT Cost Reduction Guide',
    category: 'Managed IT',
    excerpt:
      'Practical ways to cut technology costs without sacrificing performance, security, or your ability to scale.',
    heroImage: '/images/hero/blog/cardmapr-nl-AWOcmWKnOR8-unsplash.jpg',
  },
  {
    slug: 'cyber-security-training-benefits',
    title: 'Eight Benefits of Cyber Security Training for Your Business',
    category: 'Cybersecurity',
    excerpt:
      'Eight ways cybersecurity training strengthens your defenses — because your employees are your first line of defense.',
    heroImage: '/images/hero/blog/pexels-edmond-dantes-8068258.jpg',
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

// Related posts: same category first, then top up with others to reach `count`.
export function relatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPost(slug)
  if (!current) return BLOG_POSTS.slice(0, count) as BlogPost[]
  const sameCategory = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === current.category)
  const others = BLOG_POSTS.filter((p) => p.slug !== slug && p.category !== current.category)
  return [...sameCategory, ...others].slice(0, count)
}
