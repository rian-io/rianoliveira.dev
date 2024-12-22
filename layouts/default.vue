<template>
  <main class="root">
    <NuxtPage />
  </main>
</template>

<style scoped>
.root {
  display: block;
  padding: 4rem 0;
  box-sizing: border-box;
  height: 100%;
}

main {
  display: flex;
  min-height: 100%;
}

@media (min-width: 769px) {
  .root {
    display: flex;
    flex: 1 0 auto;
  }

  main {
    flex: 1 0 auto;
  }
}
</style>
