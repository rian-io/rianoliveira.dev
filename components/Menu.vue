<template>
  <div>
    <Burger :active="state.isActive" @toggle="toggle" />
    <div class="navigation">
      <transition name="slide">
        <ul v-show="!isHidden" class="menu-animation">
          <li>
            <NuxtLink to="/" @click="toggle">
              home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="toggle">
              about
            </NuxtLink>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup>
const state = reactive({ isActive: false })
const isHidden = ref(true)

function toggle() {
  state.isActive = !state.isActive
  isHidden.value = !isHidden.value
}
</script>

<style scoped>
a {
  color: var(--color-secondary);
  text-decoration: none;
}

a:hover {
  color: var(--color);
}

ul {
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

ul.hidden {
  opacity: 0;
}

li {
  margin-bottom: 1.75rem;
  font-size: 2rem;
  padding: 0 1.5rem 0 0;
}

li:last-child {
  margin-bottom: 0;
}

.navigation {
  width: 0;
  padding-top: 2rem;
}

.menu-animation {
  width: 12rem;
}

.router-link-exact-active {
  color: var(--color);
}

@media (min-width: 1080px) {
  ul {
    opacity: 1;
    width: 7rem;
    top: auto;
    display: block;
    transform: translateY(0);
  }

  ul.hidden {
    opacity: 1;
  }

  li {
    font-size: 1rem;
  }
}

@media (max-width: 1080px) {
  li {
    line-height: 3rem;
  }

  .disable ul {
    width: 100%;
  }

  .menu-animation {
    width: 100%;
  }
}
</style>
