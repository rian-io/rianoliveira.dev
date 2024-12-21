<template>
  <div>
    <Burger :active="state.isActive" @toggle="toggle" />
    <div :class="{ 'active': state.isActive, 'disable': !state.isActive }" class="navigation">
      <ul class="menu-animation">
        <li>
          <NuxtLink to="/" @click="toggle">
            home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :class="{ 'router-link-exact-active': isExact }" to="/blog" @click="toggle">
            blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click="toggle">
            about
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const state = reactive({ isActive: false })

const route = useRoute()
const isExact = computed(() => route.path.includes('blog'))

function toggle() {
  state.isActive = !state.isActive
}
</script>

<style scoped>
.navigation {
  width: 0;
}

a {
  color: var(--color-secondary);
  text-decoration: none;
}

a:active,
a:hover {
  color: var(--color);
}

ul {
  opacity: 0;
  width: 100%;
  height: 100vh;
  text-align: right;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
}

li {
  margin-bottom: 1.75rem;
  font-size: 2rem;
  padding: 0 1.5rem 0 0;
}

li:last-child {
  margin-bottom: 0;
}

.router-link-exact-active {
  color: var(--color);
}

@media (min-width: 769px) {
  ul {
    opacity: 1;
    width: 7rem;
    top: auto;
    display: block;
    transform: translateY(0);
  }

  li {
    font-size: 1rem;
  }
}

@media (max-width: 769px) {
  .disable ul {
    transform: translateX(100%);
    transition-duration: 400ms;
  }

  .active ul {
    opacity: 1;
    transform: translateX(0);
    transition-duration: 400ms;
  }
}
</style>
