import type { Metadata } from 'next'
import BlogPost, { type BlogBlock } from '@/components/BlogPost'
import { getPost } from '@/lib/blogPosts'
import { ARTICLE } from './_source'

const post = getPost('7-ways-businesses-can-maximize-roi-with-their-managed-services-provider')!

export const metadata: Metadata = {
  title: `${post.title} | ITSco`,
  description: post.excerpt,
  alternates: { canonical: `https://www.itsco.com/blog/${post.slug}/` },
}

export default function Page() {
  return <BlogPost post={post} article={ARTICLE as readonly BlogBlock[]} />
}
