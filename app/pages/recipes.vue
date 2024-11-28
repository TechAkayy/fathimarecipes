<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'recipes',
    // alias: 'recipes',
    title: 'Recipes',
    description: 'Recipes',
    // hidden: true,
    navOrder: '2',
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>

<template>
  <div><BlogPosts /></div>
</template>

<style scoped></style>
