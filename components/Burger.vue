<template>
  <div :class="{ 'active': active }" class="burger glass" @click="$emit('toggle')">
    <div class="meat meat-1" />
    <div class="meat meat-2" />
    <div class="meat meat-3" />
  </div>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    required: true,
    default: true
  }
})
</script>

<style scoped>
.burger {
  position: fixed;
  width: 38px;
  height: 38px;
  cursor: pointer;
  top: 1rem;
  left: 1.25rem;
  z-index: 2;
  background-color: var(--bg-glass);
}

.meat {
  position: absolute;
  width: 28px;
  height: 2px;
  background: var(--color);
  top: calc(50% - 2px / 2);
  left: calc(50% - 28px / 2);
  transition: all 150ms ease-in;
}

.meat-1 {
  transform: translateY(-10px);
}

.meat-2 {
  width: calc(28px - 6px);
}

.meat-3 {
  transform: translateY(10px);
}

.active .meat-1 {
  transform: rotate(45deg);
}

.active .meat-2 {
  opacity: 0;
}

.active .meat-3 {
  transform: rotate(-45deg);
}

@media (min-width: 1080px) {
  .burger {
    display: none;
  }
}
</style>