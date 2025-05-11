<template>
  <div class="root">
    <header>
      <ColorModePicker />
    </header>
    <nav>
      <Menu />
    </nav>
    <NuxtPage />
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

@media (max-width: 769px) {
  .root {
    display: flex;
    flex: 1 0 auto;
  }
}
</style>
