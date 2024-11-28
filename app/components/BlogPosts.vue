<script setup lang="ts">
  const { recipes: posts } = await useRecipes()
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
          v-for="(node, index) in posts"
          :key="index"
          class="bg-white rounded-lg overflow-hidden shadow-lg"
          :to="node.uri"
        >
          <img
            alt="Traditional Tamil Cooking Methods"
            class="w-full h-64 object-cover"
            :src="node.featuredImage.node.sourceUrl"
          />
          <div class="p-6">
            <div class="text-secondary-600 text-sm mb-2">
              {{ new Date(node.date).toDateString() }}
            </div>
            <h3 class="font-serif text-xl text-primary-900 mb-3">
              {{ node.title }}
            </h3>
            <div class="text-gray-600 mb-4" v-html="node.excerpt" />
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
