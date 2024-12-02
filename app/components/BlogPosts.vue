<script setup lang="ts">
  import { usePgData } from '~~/data/pg-wordpress/pg-data.mjs'
  const pgData = await usePgData()
</script>
<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-stone-100">
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-serif text-primary-800 text-center mb-12"
      >
        Latest Culinary Stories
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="(post, index) in pgData.posts"
          :key="index"
          class="bg-white rounded-lg overflow-hidden shadow-lg"
          :to="post.slug"
          pg-cms-posts
        >
          <img
            :alt="
              post?._embedded?.['wp:featuredmedia']?.['0']?.alt || 'Post Image'
            "
            class="w-full h-64 object-cover"
            :src="
              post?._embedded?.['wp:featuredmedia']?.['0']?.source_url ||
              'https://placehold.co/600x400'
            "
          />
          <div class="p-6">
            <div class="text-secondary-600 text-sm mb-2">
              {{ post.dateDisplay }}
            </div>
            <h3 class="font-serif text-xl text-primary-900 mb-3">
              {{ post.title.rendered }}
            </h3>
            <div class="text-gray-600 mb-4" v-html="post.excerpt.rendered" />
            <span class="text-primary-600 hover:text-primary-700 font-sans"
              >Read More →</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
