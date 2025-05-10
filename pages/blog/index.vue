<template>
  <div class="container">
    <ul v-if="data">
      <li v-for="doc in data" :key="doc.path" class="article">
        <NuxtLink :to="doc.path">
          <span class="doc-publish-date">{{ doc.date }}</span>
          <h2>{{ doc.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
useHead({
  title: 'All Posts'
})

/*definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})*/

const { data: data } = await useAsyncData('blog', () => {
  return queryCollection('blog')
    .limit(5)
    .all()
})
</script>

<style scoped>
.container {
  display: block;
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem 0 1.5rem;
  box-sizing: border-box;
  z-index: 0;
}

a {
  color: var(--color);
  display: inline-block;
  text-decoration: none;
}

h2 {
  margin: 0;
  font-weight: 500;
}

h2::before {
  content: '';
}

ul {
  margin: 0;
  list-style: none;
}
</style>