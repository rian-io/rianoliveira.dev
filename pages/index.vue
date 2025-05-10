<template>
  <div class="container">
    <div>
      <h1>
        Hi, I am <span class="break"> <br> </span> Rian Oliveira<span class="fancy">.</span>
      </h1>
      <a href="https://www.linkedin.com/in/rianoliveira/" target="_blank" rel="noopener"><span
          class="handle">@rianoliveira</span></a>
      <h2>A Computer Science student.</h2>
      <SocialList />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Home'
})
definePageMeta({
  pageTransition: {
    name: 'index-transition',
    mode: 'out-in'
  }
});
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 500;
}

h2 {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 2rem 0;
}

h2::before {
  content: '';
}

.container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 0 1.5rem;
}

.handle {
  display: inline-block;
  margin-top: 0.275em;
  color: var(--color-secondary);
  letter-spacing: 0.05em;
}

.fancy {
  color: var(--fancy);
}

.break {
  display: none;
}

@media (max-width: 768px) {
  .break {
    display: inline;
  }
}

@media (min-width: 960px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.25rem;
  }
}
</style>
