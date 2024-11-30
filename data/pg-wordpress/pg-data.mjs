/* eslint-disable */
/* prettier-disable */
/* @ts-nocheck */
import { $fetch } from 'ofetch'

/* Pinegrow generated Design Panel Begin */
const usePgData = async () => {
  const wordpressUrl = import.meta.env.VITE_WORDPRESS_URL
  const postsRaw = await $fetch(`${wordpressUrl}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `query allPosts {
                posts {
                    nodes {
                    comments {
                        nodes {
                            content
                            status
                            databaseId
                            id
                        }
                    }
                    content
                    databaseId
                    id
                    featuredImage {
                        node {
                            altText
                            databaseId
                            link
                            sourceUrl
                            uri
                            title
                            description
                        }
                    }
                    excerpt
                    title
                    date
                    uri
                    slug
                    }
                }
            }`,
    }),
  })

  const posts = postsRaw.data.posts.nodes.map((node) => ({
    ...node,
    dateDisplay: new Date(node.date).toDateString(),
  }))

  const getPost = (slug) => {
    return posts.find((post) => `${post.slug}/` === `${slug}/`)
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
