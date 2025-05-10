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
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
}

main {
  display: flex;
  min-height: 100%;
  width: 100%;
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
