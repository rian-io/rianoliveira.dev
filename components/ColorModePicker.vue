<template>
  <div class="picker glass">
    <ul>
      <li v-for="mode in Object.keys(modes)" :key="mode"
        :class="{ preferred: !$colorMode.unknown && mode === $colorMode.preference }"
        @click="$colorMode.preference = mode">
        <component :is="modes[mode]" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const modes = {
  'system': resolveComponent('IconDesktop'),
  'light': resolveComponent('IconSun'),
  'dark': resolveComponent('IconMoon'),
  'sepia': resolveComponent('IconCoffee')
}
</script>

<style scoped>
.picker {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  z-index: 1;
  padding: 6px 12px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  width: 24px;
  height: 24px;
  display: inline-block;
  color: var(--color-secondary);
  cursor: pointer;
}

li:not(:first-child) {
  margin-left: 1em;
}

li:hover {
  color: var(--color);
  transform: scale(1.1);
}

.preferred {
  color: var(--color);
}
</style>
