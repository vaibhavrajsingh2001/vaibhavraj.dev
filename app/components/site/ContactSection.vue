<template>
  <section
    class="contact-section"
    aria-labelledby="contact"
  >
    <div class="container-inner">
      <h2
        id="contact"
        class="contact-section__title"
      >
        Contact me:
      </h2>

      <p>
        Want to chat about anything ranging from marine life to custom hooks in React? Ping me
        anytime on
        <a
          href="https://twitter.com/vrs2001"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
        >Twitter</a>.
      </p>

      <p>
        In case you prefer face-to-face discussions, do tell when by selecting a date &amp; time over
        <SiteCalLink>here</SiteCalLink>.
      </p>

      <p>
        Or, if you want to begin a formal conversation, you can easily fill up the form below and
        I'll reach out personally within 24 hours. Pinky promise.
      </p>

      <form
        action="https://formspree.io/f/xgepyjjq"
        method="POST"
        class="contact-form"
      >
        <div class="contact-form__row">
          <UFormField
            name="name"
            label="Name"
            class="contact-form__field"
          >
            <UInput
              name="name"
              type="text"
              autocomplete="name"
              placeholder="Jon Snow"
              required
              size="xl"
              class="contact-form__control"
            />
          </UFormField>

          <UFormField
            name="email"
            label="Email Address"
            class="contact-form__field"
          >
            <UInput
              name="email"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="email@example.com"
              required
              size="xl"
              class="contact-form__control"
            />
          </UFormField>
        </div>

        <UFormField
          name="message"
          label="Message"
        >
          <UTextarea
            name="message"
            :rows="5"
            placeholder="Enter your message here."
            required
            size="xl"
            class="contact-form__control"
          />
        </UFormField>

        <div class="contact-form__actions">
          <UButton
            type="submit"
            label="Submit"
            color="primary"
            size="lg"
            class="contact-form__submit"
          />
        </div>

        <p class="sr-only">
          Submitting this form sends your name, email address, and message to Formspree.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--bg-background-secondary);
  padding-top: 4rem;
  font-size: 1.25rem;
}

.contact-section__title {
  margin: 0 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.contact-section p {
  margin-block: 2rem;
}

.contact-form {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  font-size: 1.125rem;
}

.contact-form__row {
  display: grid;
  margin-bottom: 1.5rem;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1fr);
}

.contact-form__control {
  width: 100%;
}

.contact-form :deep(label) {
  margin-bottom: 0.5rem;
  color: var(--text-copy-primary);
  font-size: 1.125rem;
  font-weight: 400;
}

.contact-form :deep(input),
.contact-form :deep(textarea) {
  border: 1px solid var(--border-color-primary);
  border-radius: 0.25rem;
  background: var(--bg-background-form);
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.12), 0 1px 2px rgb(0 0 0 / 0.24);
  color: var(--text-copy-primary);
  font-size: 1.125rem;
}

.contact-form :deep(input) {
  min-height: 3.75rem;
  padding: 1rem;
}

.contact-form :deep(textarea) {
  min-height: 10.5rem;
  padding: 1rem;
}

.contact-form :deep(input:focus-visible),
.contact-form :deep(textarea:focus-visible) {
  border-color: #2f855a;
  outline: 2px solid #68d391;
  outline-offset: 2px;
}

.contact-form__actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
}

.contact-form__submit {
  min-width: 6.5rem;
  min-height: 2.75rem;
  justify-content: center;
  background: #2f855a;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.contact-form__submit:hover {
  background: #276749;
}

@media (min-width: 768px) {
  .contact-form__row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
