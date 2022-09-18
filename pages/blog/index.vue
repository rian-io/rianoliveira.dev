<template>
  <main class="container">
    <section class="page-section">
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fields in the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'date', '_path'],
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul>
            <li v-for="article in list" :key="article._path" class="article">
              <NuxtLink :to="article._path">
                  <span>{{ article.date}}</span>
                  <h2>{{ article.title }}</h2>
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
  list-style: none;
}
span {
  color: var(--color-secondary)
}
</style>