<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <li class="project-card">
    <article>
      <div class="project-card__header">
        <h3
          class="project-card__title"
          :title="project.name"
        >
          {{ project.name }}
        </h3>

        <img
          :src="project.image"
          :width="project.imageWidth"
          :height="project.imageHeight"
          alt=""
          aria-hidden="true"
          loading="lazy"
          class="project-card__logo"
        >
      </div>

      <div class="project-card__actions">
        <UButton
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          label="Visit live"
          color="neutral"
          variant="ghost"
          class="project-card__action"
        >
          <template #leading>
            <svg
              class="project-card__action-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </template>
        </UButton>

        <UButton
          :href="project.codeUrl"
          target="_blank"
          rel="noopener noreferrer"
          label="See code"
          color="neutral"
          variant="ghost"
          class="project-card__action"
        >
          <template #leading>
            <svg
              class="project-card__action-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m10 20 4-16m4 4 4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </template>
        </UButton>
      </div>
    </article>
  </li>
</template>

<style scoped>
.project-card {
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--bg-background-secondary);
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.12), 0 1px 2px rgb(0 0 0 / 0.24);
}

.project-card__header {
  display: flex;
  min-height: 4.9375rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;
}

.project-card__title {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-card__logo {
  max-width: 8.5rem;
  height: auto;
  flex-shrink: 0;
}

.project-card__actions {
  display: grid;
  border-top: 1px solid #edf2f7;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.project-card__action {
  min-height: 3.5625rem;
  justify-content: center;
  border-radius: 0;
  color: var(--text-copy-primary);
  font-size: 1.125rem;
  font-weight: 500;
}

.project-card__action + .project-card__action {
  border-left: 1px solid #edf2f7;
}

.project-card__action-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
