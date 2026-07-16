import type { Metadata } from 'next'
import BlogPost, { type BlogBlock } from '@/components/BlogPost'
import { getPost } from '@/lib/blogPosts'
import { ARTICLE } from './_source'

const post = getPost('the-black-box-is-dead-why-business-leaders-can-no-longer-sit-on-the-sidelines')!

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: `https://www.itsco.com/blog/${post.slug}/` },
}

export default function Page() {
  return <BlogPost post={post} article={ARTICLE as readonly BlogBlock[]} />
}
