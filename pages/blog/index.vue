<template>
  <main class="container">
    <section class="page-section">
      <ContentList path="/blog" :query="{
        only: ['title', 'date', '_path'],
      }">
        <template v-slot="{ list }">
          <ul>
            <li v-for="doc in list" :key="doc._path" class="article">
              <NuxtLink :to="doc._path">
                <span class="doc-publish-date">{{ doc.date }}</span>
                <h2>{{ doc.title }}</h2>
              </NuxtLink>
            </li>
          </ul>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'All Posts'
})
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
});
</script>

<style scoped>
.container {
  display: block;
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
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