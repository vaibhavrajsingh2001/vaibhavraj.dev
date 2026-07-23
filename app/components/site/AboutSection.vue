<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section
    class="about-section"
    aria-labelledby="about-title"
  >
    <div class="about-section__inner container-inner">
      <h2
        id="about-title"
        class="sr-only"
      >
        Who am I?
      </h2>

      <img
        id="about"
        src="/whoami.svg"
        width="431"
        height="104"
        alt=""
        aria-hidden="true"
        loading="lazy"
        class="about-section__heading"
      >

      <div class="about-section__content">
        <img
          src="/avatar.png"
          width="209"
          height="227"
          alt="Portrait of Vaibhav Raj Singh"
          loading="lazy"
          class="about-section__avatar"
        >

        <div class="about-section__copy">
          <p>
            By profession, I'm a full stack developer (read as "gets paid to google perfectly").
            <a
              :href="site.resume"
              class="text-link"
            >Download resume</a>
          </p>

          <p>
            By passion, I'm enthusiastic about MCU, Ukuleles, JavaScript, and always hungry for
            trivia.
          </p>

          <p>
            At present I'm working at
            <a
              href="https://konghq.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-link"
            >Kong</a>
            as a Software Engineer on the Core UI team.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  border-bottom: 1px solid #edf2f7;
  padding-block: 4rem;
}

.about-section__inner {
  padding-bottom: 4rem;
}

.about-section__heading {
  display: block;
  width: min(100%, 26.9375rem);
  height: auto;
  margin-block: 4rem;
}

.about-section__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.about-section__avatar {
  width: 16rem;
  height: 16rem;
  margin-bottom: 2rem;
  object-fit: contain;
  transform: scale(1.08);
}

.about-section__copy {
  flex: 1;
  margin-left: 1.5rem;
  font-size: 1.125rem;
}

.about-section__copy p {
  margin: 2rem;
}

@media (min-width: 640px) {
  .about-section__content {
    flex-direction: row;
  }

  .about-section__avatar {
    margin-bottom: 0;
  }

  .about-section__copy {
    font-size: 1.25rem;
  }
}
</style>
