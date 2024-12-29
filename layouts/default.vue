<template>
  <main class="root">
    <Transition>
      <NuxtPage />
    </Transition>
  </main>
</template>

<style scoped>
.root {
  display: flex;
  flex: 1 0 auto;
  padding: 4rem 0;
  box-sizing: border-box;
  height: 100%;
}

main {
  display: flex;
  min-height: 100%;
}

@media (max-width: 769px) {
  main {
    flex: 1 0 auto;
  }
}
</style>
