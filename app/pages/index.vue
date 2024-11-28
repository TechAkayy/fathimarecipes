<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'
  const heroCaption = 'Welcome To'
  const heroTitle = 'Vue Designer'
  const heroDescription =
    'A desktop drag-and-drop editor for Mac, Windows and Linux that lets you visually design your Vue apps.'

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'Sip, Savor, and Spark Ideas at Cafe Bella Vista!',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div>
    <header
      class="bg-design-image flex items-center justify-center min-h-screen relative"
    >
      <div class="absolute inset-0 bg-black/50" />
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <p class="text-primary-200 font-serif text-xl md:text-2xl mb-4">
          {{ heroCaption }}
        </p>
        <h1 class="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
          Fathima Recipes
        </h1>
        <p
          class="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Discover the authentic flavors of Tamil cuisine, crafted with love and
          tradition by Fathima Kaja
        </p>
        <NuxtLink
          to="#recipes"
          class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-sans px-8 py-3 rounded-lg text-lg transition duration-300"
          >Explore Recipes</NuxtLink
        >
      </div>
    </header>
    <BlogPosts />
  </div>
</template>
<style scoped></style>
