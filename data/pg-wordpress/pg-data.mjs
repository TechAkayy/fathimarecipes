/* eslint-disable */
/* prettier-disable */
/* @ts-nocheck */
import { $fetch } from 'ofetch'

/* Pinegrow generated Design Panel Begin */
const usePgData = async () => {
  const wordpressUrl = import.meta.env.VITE_WORDPRESS_URL
  const postsRaw = await $fetch(`${wordpressUrl}/wp-json/wp/v2/posts?_embed`)

  const posts = postsRaw.map((node) => ({
    ...node,
    dateDisplay: new Date(node.date).toDateString(),
  }))

  const getPost = (slug) => {
    const _post = posts.find((post) => `${post.slug}/` === `${slug}/`)
    return _post || posts[0]
  }

  const { name: siteName, description: siteDescription } = await $fetch(
    `${wordpressUrl}/wp-json`,
  )

  return {
    siteName,
    siteDescription,
    posts,
    getPost,
  }
}
/* Pinegrow generated Design Panel End */

export { usePgData }
