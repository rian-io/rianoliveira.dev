<template>
  <div class="picker glass">
    <ul>
      <li v-for="mode in Object.keys(modes)" :key="mode"
        :class="{ preferred: !$colorMode.unknown && mode === $colorMode.preference }"
        @click="$colorMode.preference = mode" @mouseenter="hoveredMode = mode" @mouseleave="hoveredMode = null">
        <component :is="modes[mode]" />
        <span v-if="hoveredMode === mode" class="tooltip">Switch to {{ tooltips[mode] }} mode</span>
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
};

const tooltips = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
  sepia: 'Sepia',
};

const hoveredMode = ref(null);
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  position: relative;
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

li:last-child .tooltip {
  left: -1.25rem;
}

.picker {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  z-index: 2;
  padding: 6px 12px;
}

.preferred {
  color: var(--color);
}

.tooltip {
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--background);
  color: var(--color);
  padding: 0px 8px;
  font-size: 0.65rem;
  white-space: nowrap;
  box-shadow: 0 2px 2px var(--shadow);
  pointer-events: none;
  border: 0.1px solid var(--color-secondary);
  border-radius: 4px;
}

@media screen and (max-width: 1080px) {
  .picker {
    display: none;
  }
}
</style>
