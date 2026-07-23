<script setup lang="ts">
import { projects } from '~/data/projects'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Vaibhav Raj Singh — Full Stack Developer',
  description: site.description,
  ogTitle: 'Vaibhav Raj Singh — Full Stack Developer',
  ogDescription: site.description,
  ogType: 'website',
  ogUrl: site.url,
  ogImage: `${site.url}/avatar.png`,
  ogImageAlt: 'Portrait of Vaibhav Raj Singh',
  twitterCard: 'summary',
  twitterTitle: 'Vaibhav Raj Singh — Full Stack Developer',
  twitterDescription: site.description,
  twitterImage: `${site.url}/avatar.png`,
  twitterCreator: '@vrs2001',
  robots: 'index, follow',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: site.url,
    },
  ],
  meta: [
    { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#091a28' },
    { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${site.url}/#website`,
            name: site.name,
            url: site.url,
            description: site.description,
          },
          {
            '@type': 'Person',
            '@id': `${site.url}/#person`,
            name: site.name,
            url: site.url,
            image: `${site.url}/avatar.png`,
            jobTitle: 'Software Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'Kong',
              url: 'https://konghq.com/',
            },
            sameAs: Object.values(site.social),
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <main id="main-content">
    <SiteHeroSection />
    <SiteProjectsSection :projects="projects" />
    <SiteAboutSection />
    <SiteContactSection />
  </main>
</template>
