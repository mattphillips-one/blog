import { getBlogPosts } from 'app/blog/util'

export const baseUrl = 'https://www.mattphillips.space';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.slug}`,
    lastModified: post.metadata.date,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}