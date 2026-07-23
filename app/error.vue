<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page Not Found',
  robots: 'noindex, follow',
})
</script>

<template>
  <NuxtLayout>
    <main
      id="main-content"
      class="error-page container-inner"
    >
      <h1 class="sr-only">
        Page not found
      </h1>

      <img
        src="/404.svg"
        width="545"
        height="532"
        alt="404 — page not found"
        class="error-page__image"
      >

      <UButton
        to="/"
        label="Back to home"
        color="primary"
        size="lg"
      />
    </main>
  </NuxtLayout>
</template>

<style scoped>
.error-page {
  display: grid;
  min-height: 62vh;
  place-items: center;
  gap: 1.5rem;
  padding-block: 4rem;
}

.error-page__image {
  width: min(100%, 34rem);
  height: auto;
}
</style>
