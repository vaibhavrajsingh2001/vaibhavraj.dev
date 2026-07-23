<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  projects: readonly Project[]
}>()
</script>

<template>
  <section
    class="projects container-inner"
    aria-labelledby="projects-title"
  >
    <h2
      id="projects-title"
      class="sr-only"
    >
      Projects
    </h2>

    <img
      id="projects"
      src="/projects.svg"
      width="306"
      height="105"
      alt=""
      aria-hidden="true"
      class="projects__heading"
      loading="lazy"
    >

    <ul class="projects__grid">
      <SiteProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </ul>
  </section>

  <img
    src="/arrow2.svg"
    width="113"
    height="408"
    alt=""
    aria-hidden="true"
    loading="lazy"
    class="projects__arrow"
  >
</template>

<style scoped>
.projects {
  position: relative;
  padding-block: 6rem;
  font-size: 1.25rem;
}

.projects__heading {
  display: block;
  width: min(100%, 19.125rem);
  height: auto;
  margin-inline: auto;
  margin-bottom: 3rem;
}

.projects__grid {
  display: grid;
  margin: 0;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  grid-template-columns: minmax(0, 1fr);
}

.projects__arrow {
  display: block;
  width: 7.0625rem;
  height: auto;
  margin-inline: auto;
}

@media (min-width: 640px) {
  .projects__heading {
    margin-left: 0;
  }

  .projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
