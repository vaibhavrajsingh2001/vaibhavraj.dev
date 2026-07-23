# vaibhavraj.dev

Personal portfolio for Vaibhav Raj Singh, built as a statically generated Nuxt site.

## Stack

- Nuxt 4 and Vue 3
- TypeScript
- Nuxt UI
- Tailwind CSS 4
- Nuxt SEO modules and Nuxt Image

## Development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm generate
```

## Cloudflare Pages

Update the existing `vaibhavraj-dev` Pages project with:

- Build command: `pnpm generate`
- Build output directory: `.output/public`
- Environment variable: `PNPM_VERSION=11.10.0`

The `vaibhavraj.dev` and `www.vaibhavraj.dev` custom domains are already
attached. In Cloudflare, configure permanent redirects from
`www.vaibhavraj.dev` and `vaibhavraj-dev.pages.dev` to
`https://vaibhavraj.dev`, preserving the path and query string.
