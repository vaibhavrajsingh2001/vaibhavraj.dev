<template>
  <section
    class="hero container-inner"
    aria-labelledby="hero-title"
  >
    <div class="hero__copy">
      <h1
        id="hero-title"
        class="hero__title"
      >
        Vaibhav Raj Singh
      </h1>

      <p class="hero__tagline">
        Powered by Coffee, Cookies &amp; Code
      </p>

      <SiteCalLink variant="button" />
    </div>

    <img
      src="/developer.svg"
      width="460"
      height="357"
      alt="Developer working at a laptop"
      class="hero__image"
      fetchpriority="high"
    >
  </section>

  <img
    src="/arrow1.svg"
    alt=""
    aria-hidden="true"
    class="section-arrow section-arrow--projects"
  >
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 4rem;
}

.hero__copy {
  width: 100%;
  margin-top: 4rem;
  text-align: center;
}

.hero__title {
  margin: 0;
  font-size: clamp(2.75rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.25;
}

.hero__tagline {
  margin: 0;
  padding-top: 0.5rem;
  color: #3c92d6;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
}

.hero__image {
  width: min(100%, 28.75rem);
  height: auto;
  margin-inline: auto;
  margin-top: 0.375rem;
}

.section-arrow {
  display: block;
  height: auto;
  margin-inline: auto;
}

.section-arrow--projects {
  width: 7.0625rem;
  max-height: 25.5rem;
}

@media (min-width: 640px) {
  .hero {
    flex-direction: row;
  }

  .hero__copy {
    width: 60%;
    text-align: left;
  }

  .hero__image {
    margin-inline: 0;
    margin-top: 3rem;
    align-self: center;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding-block: 6rem;
  }

  .hero__copy {
    margin-top: 6rem;
  }
}
</style>
