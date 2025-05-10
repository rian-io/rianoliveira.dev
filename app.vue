<template>
  <NuxtLayout class="app-vue" />
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
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
}
</style>
