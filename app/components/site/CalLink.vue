<script setup lang="ts">
import { site } from '~/data/site'

interface Props {
  variant?: 'button' | 'link'
}

withDefaults(defineProps<Props>(), {
  variant: 'link',
})
</script>

<template>
  <UButton
    v-if="variant === 'button'"
    :href="site.cal.url"
    target="_blank"
    rel="noopener noreferrer"
    color="neutral"
    variant="soft"
    size="lg"
    label="Lets talk!"
    :data-cal-link="site.cal.link"
    :data-cal-namespace="site.cal.namespace"
    :data-cal-config="site.cal.config"
    class="cal-button"
    @click.prevent
  />

  <a
    v-else
    :href="site.cal.url"
    target="_blank"
    rel="noopener noreferrer"
    :data-cal-link="site.cal.link"
    :data-cal-namespace="site.cal.namespace"
    :data-cal-config="site.cal.config"
    class="text-link"
    @click.prevent
  >
    <slot>here</slot>
  </a>
</template>

<style scoped>
.cal-button {
  margin-top: 2.125rem;
  color: var(--text-copy-primary);
  font-size: 1.125rem;
  font-weight: 700;
}

@media (min-width: 640px) {
  .cal-button {
    margin-top: 1.5rem;
  }
}
</style>
