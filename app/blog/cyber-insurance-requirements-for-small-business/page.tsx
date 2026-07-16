import type { Metadata } from 'next'
import BlogPost, { type BlogBlock } from '@/components/BlogPost'
import { getPost } from '@/lib/blogPosts'
import { ARTICLE } from './_source'

const post = getPost('cyber-insurance-requirements-for-small-business')!

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: {
    canonical: `https://www.itsco.com/blog/${post.slug}/`,
  },
  // Draft posts (scheduled or explicitly flagged) should not be indexed
  // even if a search engine finds their URL directly. Once the post ships,
  // the draft flag comes off in blogPosts.ts and this collapses to a
  // standard indexable post.
  ...(post.draft
    ? { robots: { index: false, follow: false } }
    : {}),
}

export default function Page() {
  return <BlogPost post={post} article={ARTICLE as readonly BlogBlock[]} />
}
