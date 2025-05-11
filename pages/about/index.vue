<template>
  <main class="container">
    <article>
      <ContentRenderer :value="about" />
    </article>
    <Footer />
  </main>
</template>

<script setup>
useHead({
  title: 'About'
})

definePageMeta({
  pageTransition: {
    name: 'about-transition',
    mode: 'out-in'
  }
})

const { data: about } = await useAsyncData(() => queryCollection('about').path('/about').first())

useSeoMeta({
  title: about.value?.title,
  description: about.value?.description
})
</script>

<style scoped>
.container {
  display: block;
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem 0 1.5rem;
  box-sizing: border-box;
  z-index: 0;
}
</style>
