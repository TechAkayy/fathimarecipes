<script setup lang="ts">
  import { usePgData } from '~~/data/pg-wordpress/pg-data'

  const route = useRoute()

  definePageMeta({
    // layout: 'default',
    // name: 'slug',
    // alias: 'slug',
    title: 'Slug',
    description: 'Slug',
    // hidden: true,
    navOrder: '3',
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  // import { computed } from 'vue'
  // import { useArticles } from '~/composables/articles'

  // const articleId = useRoute().params.id

  // const { data: article } = await useAsyncData('articles', async () => {
  // 	const { getArticle } = useArticles()
  // 	return await getArticle(+articleId)
  // })

  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''
  useServerSeoMeta({
    description: () => capitalize(route.params.slug),
  })
  useHead({
    title: () => capitalize(route.params.slug),
  })
  const title = capitalize(route.params.slug).replaceAll('-', ' ')
  const pgData = await usePgData()
  const pgPost = pgData.getPost(useRoute().params.slug)
</script>
<template layout="default">
  <div v-if="pgPost" pg-cms-post>
    <article class="max-w-4xl mx-auto px-4 py-12">
      <div class="mb-8">
        <img
          :alt="
            pgPost?._embedded?.['wp:featuredmedia']?.['0']?.alt || 'Post Image'
          "
          class="w-full h-64 object-cover"
          :src="
            pgPost?._embedded?.['wp:featuredmedia']?.['0']?.source_url ||
            'https://placehold.co/600x400'
          "
        />
      </div>
      <div class="space-y-6">
        <div class="flex items-center gap-4 text-primary-600">
          <time datetime="2024-01-15"
            >{{ new Date(pgPost.date).toDateString() }} </time
          ><span>•</span><span>Tamil Cuisine</span>
        </div>
        <h1 class="font-serif text-4xl md:text-5xl text-primary-800 mb-4">
          {{ pgPost.title.rendered }}
        </h1>
        <div
          class="p-10 dark:prose-invert dark:prose-gray-100 flex flex-col heading-offset max-w-none prose prose-gray-800 rounded-lg"
        >
          <div v-html="pgPost.content.rendered" />
        </div>
        <div class="flex flex-wrap gap-2 mt-8">
          <span
            class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full"
            >#TamilCuisine</span
          ><span
            class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full"
            >#TraditionalCooking</span
          ><span
            class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full"
            >#CulinaryHeritage</span
          >
        </div>
      </div>
    </article>
  </div>
</template>
<style scoped></style>
