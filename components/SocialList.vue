<template>
  <div>
    <a title="GitHub" href="https://github.com/rian-io" target="_blank" rel="noopener">
      <IconGitHubAlt class="icon" />
    </a>
    <a v-if="route.name !== 'index'" title="LinkedIn" href="https://www.linkedin.com/in/rianoliveira/" target="_blank"
      rel="noopener">
      <IconLinkedinAlt class="icon" />
    </a>
    <a title="Behance" href="https://www.behance.net/r_io" target="_blank" rel="noopener">
      <IconBehanceAlt class="icon" />
    </a>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
a {
  display: inline-block;
}

a:not(:last-child) {
  margin-right: 2em;
}

.icon {
  color: var(--color);
  width: 24px;
  height: 24px;
}
</style>
