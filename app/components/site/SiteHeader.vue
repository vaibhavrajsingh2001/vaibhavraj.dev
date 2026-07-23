<script setup lang="ts">
import { site } from '~/data/site'

const isMenuOpen = shallowRef(false)

const navigation = [
  { label: 'Projects', to: '/#projects' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Resume', to: site.resume },
] as const

function closeMenu() {
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header
    class="site-header"
    @keydown.esc="closeMenu"
  >
    <nav
      class="site-nav container-shell"
      aria-label="Primary navigation"
    >
      <NuxtLink
        to="/"
        aria-label="Vaibhav Raj Singh home"
        class="site-logo"
        @click="closeMenu"
      >
        <img
          src="/logo.png"
          width="80"
          height="72"
          alt=""
          fetchpriority="high"
        >
      </NuxtLink>

      <UButton
        class="menu-toggle"
        color="neutral"
        variant="outline"
        icon="i-lucide-menu"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-menu"
        @click="toggleMenu"
      />

      <ul
        id="primary-menu"
        class="site-menu"
        :class="{ 'site-menu--open': isMenuOpen }"
      >
        <li>
          <UColorModeButton
            color="neutral"
            variant="ghost"
            size="lg"
          />
        </li>

        <li
          v-for="item in navigation"
          :key="item.label"
        >
          <a
            :href="item.to"
            class="nav-link"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  border-top: 0.875rem solid #2f855a;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;
}

.site-logo {
  display: inline-flex;
  width: 5rem;
}

.site-logo img {
  width: 5rem;
  height: auto;
}

.menu-toggle {
  display: inline-flex;
  width: 2.375rem;
  height: 1.875rem;
  justify-content: center;
  border: 1px solid #718096;
  border-radius: 0.25rem;
  background: transparent;
}

.site-menu {
  display: none;
  width: 100%;
  margin-top: 2rem;
  flex-grow: 1;
  list-style: none;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  font-weight: 700;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.site-menu--open {
  display: flex;
}

.nav-link {
  color: var(--text-copy-primary);
  text-decoration: none;
  transition: color 150ms ease;
}

.nav-link:hover {
  color: var(--text-copy-secondary);
}

@media (min-width: 1024px) {
  .menu-toggle {
    display: none;
  }

  .site-menu,
  .site-menu--open {
    display: flex;
    width: auto;
    margin-top: 0;
    flex: initial;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
}
</style>
