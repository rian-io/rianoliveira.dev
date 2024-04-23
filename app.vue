<template>
  <div class="app-vue">
    <header>
      <ColorModePicker />
    </header>
    <nav>
      <Menu />
    </nav>
    <NuxtLayout />
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return `${titleChunk} | Rian Oliveira`;
    }
  })
</script>

<style scoped>
.app-vue {
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
