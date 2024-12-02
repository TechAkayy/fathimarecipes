/* eslint-disable */
/* prettier-disable */
/* @ts-nocheck */
import { $fetch } from 'ofetch'
import type { WP_REST_API_Posts, WP_REST_API_Post } from 'wp-types'

/* Pinegrow generated Design Panel Begin */
const usePgData = async () => {
  const wordpressUrl: string = import.meta.env.VITE_WORDPRESS_URL

  const {
    name: siteName,
    description: siteDescription,
  }: { name: string; description: string } = await $fetch(
    `${wordpressUrl}/wp-json`,
  )

  const postsRaw: WP_REST_API_Posts = await $fetch(
    `${wordpressUrl}/wp-json/wp/v2/posts?_embed`,
  )

  const posts = postsRaw.map((post) => ({
    ...post,
    dateDisplay: new Date(post.date).toDateString(),
  }))

  const getPost = (slug: string): WP_REST_API_Post => {
    const _post = posts.find((post) => `${post.slug}/` === `${slug}/`)
    return _post || posts[0]
  }

  return {
    siteName,
    siteDescription,
    posts,
    getPost,
  }
}
/* Pinegrow generated Design Panel End */

export { usePgData }
