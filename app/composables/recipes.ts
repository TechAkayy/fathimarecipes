import { $fetch } from 'ofetch'

export const useRecipes = async () => {
  const wordpressUrl = import.meta.env.VITE_WORDPRESS_URL
  const recipesRaw = await $fetch(`${wordpressUrl}/graphql`, {
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

  const recipes = recipesRaw.data.posts.nodes

  const getRecipe = (slug) => {
    return recipes.find((recipe) => `${recipe.slug}/` === slug)
  }

  return {
    recipes,
    getRecipe,
  }
}
