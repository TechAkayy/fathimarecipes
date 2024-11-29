<script setup lang="ts">
  // will open 'https://nuxt.com' in a new tab
  await navigateTo('https://admin.fathimarecipes.com/wp-admin/', {
    external: true,
    open: {
      target: '_blank',
      windowFeatures: {
        width: 500,
        height: 500,
      },
    },
  })
</script>

<template>
  <div>Redirecting...</div>
</template>

<style scoped></style>
