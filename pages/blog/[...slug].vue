<template>
  <main class="container">
    <article>
      <ContentDoc v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <span class="doc-publish-date">{{ doc.date }}</span>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
    <Footer />
  </main>
</template>

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

.metadata div {
  display: inline-block;
  margin-right: 0.5rem;
}
article {
  flex: 1 0 auto;
}
h1 {
  margin: 0 0 0.5rem;
  font-size: 2.25rem;
}
.tag-list {
  list-style: none;
  text-align: right;
  margin: 1.75rem 0 0 0;
  padding: 0;
}
.tag-list li {
  display: inline-block;
  margin-left: 0.5rem;
}
.footer {
  margin-top: 3rem;
  text-align: center;
}
@media (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
