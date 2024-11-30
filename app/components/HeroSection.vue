<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }

  import { usePgData } from '~~/data/pg-wordpress/pg-data.mjs'
  const pgData = await usePgData()
</script>
<template>
  <header
    class="bg-design-image flex items-center justify-center min-h-screen relative"
  >
    <div class="absolute inset-0 bg-black/50" />
    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
      <p class="text-primary-200 font-serif text-xl md:text-2xl mb-4">
        {{ heroCaption }}
      </p>
      <h1
        class="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
        pg-cms-site-name
      >
        {{ pgData.siteName }}
      </h1>
      <p
        class="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8"
        pg-cms-site-description
      >
        {{ pgData.siteDescription }}
      </p>
      <NuxtLink
        to="#recipes"
        class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-sans px-8 py-3 rounded-lg text-lg transition duration-300"
        >Explore Recipes</NuxtLink
      >
    </div>
  </header>
</template>
<style scoped></style>
