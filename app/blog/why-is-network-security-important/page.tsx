import type { Metadata } from 'next'
import BlogPost, { type BlogBlock } from '@/components/BlogPost'
import { getPost } from '@/lib/blogPosts'
import { ARTICLE } from './_source'

const post = getPost('why-is-network-security-important')!

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: `https://www.itsco.com/blog/${post.slug}/` },
}

export default function Page() {
  return <BlogPost post={post} article={ARTICLE as readonly BlogBlock[]} />
}
