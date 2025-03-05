<template>
  <content class="container">
    <article>
      <ContentDoc />
    </article>
    <Footer />
  </content>
</template>

<script setup>
useHead({
  title: 'About'
})
definePageMeta({
  pageTransition: { name: 'about-transition', mode: 'out-in' }
});
</script>

<style scoped>
.container {
  display: block;
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
  z-index: 0;
}
</style>
