# Design QA

## Evidence

- Source visual truth: `.codex-artifacts/source/`
- Implementation screenshots: `.codex-artifacts/implementation/`
- Combined comparisons, source on the left and implementation on the right:
  - `.codex-artifacts/comparisons/desktop-final.png`
  - `.codex-artifacts/comparisons/mobile-final.png`
- Desktop viewport: `1440 × 900` CSS pixels at device scale factor `1`
  - Focused screenshot pixels: source `1425 × 891`; implementation `1425 × 891`
  - Full-page pixels: source `1425 × 3839`; implementation `1425 × 3870`
- Mobile viewport: `390 × 844` CSS pixels at device scale factor `1`
  - Focused screenshot pixels: source `375 × 812`; implementation `375 × 812`
  - Full-page pixels: source `375 × 5394`; implementation `375 × 5380`
- Density normalization: none required; source and implementation captures use the same
  device scale factor and matching pixel dimensions for each focused comparison.
- State: homepage, dark theme, signed-out/public content, identical source content.
  Additional evidence covers the open mobile navigation, light-theme toggle, and Calendly popup.

## Findings

- No actionable P0, P1, or P2 visual differences remain.
- [P3] The Nuxt UI keyboard focus ring is blue while the legacy mobile menu capture used an
  orange browser focus outline. The new ring is intentionally retained because it is clear,
  consistent, and meets the accessibility goal without changing the resting visual state.

## Required Fidelity Surfaces

- Fonts and typography: the local variable Nunito Sans family matches the source hierarchy,
  weights, wrapping, line heights, and project-card truncation. No remote font request is made.
- Spacing and layout rhythm: hero alignment, section anchors, project grid, card density,
  about layout, contact form, footer, radii, borders, and responsive stacking match the source
  captures. Full-page height differs by less than one percent at both viewports.
- Colors and visual tokens: the original light/dark backgrounds, green accents, blue tagline,
  project cards, form surfaces, borders, and footer palette are preserved as shared CSS tokens.
- Image quality and asset fidelity: all original logo, hero, project, arrow, heading, portrait,
  and social assets are reused without raster substitution or placeholder artwork.
- Copy and content: hero, six projects, biography, contact text, form labels, links, resume,
  copyright, RSS, and sitemap content match the source.

## Focused Region Evidence

- Desktop: hero/header, project cards, biography, and contact form/footer are compared as
  separate matched `1425 × 891` rows in `desktop-final.png`.
- Mobile: closed header, open navigation, project cards, biography, and contact form are
  compared as separate matched `375 × 812` rows in `mobile-final.png`.
- Full-view evidence: `desktop-full-dark.png` and `mobile-full-dark.png` in both source and
  implementation folders were used to verify overall section order, vertical rhythm, and
  responsive composition.

## Comparison History

1. Initial implementation: P0 — the page body was empty because nested Nuxt components used
   unprefixed names. Fixed by using the generated `Site*` component names. The post-fix browser
   snapshot contains the hero, six projects, biography, contact form, and footer.
2. Desktop pass: P2 — project cards were taller than the source and fragment navigation aligned
   the section padding instead of the visible headings. Fixed card header/action heights and moved
   fragment IDs to the source-equivalent visible elements. Verified in `desktop-final.png`.
3. Desktop form pass: P2 — Nuxt UI defaults made inputs shorter, labels smaller, and the submit
   color too bright. Added scoped Nuxt UI overrides using the original tokens and dimensions.
   Verified in the contact row of `desktop-final.png`.
4. Mobile pass: P2 — the fixed decorative background was sized against the page instead of the
   viewport. Moved the fixed theme background to `body`; the concentric rings now match in every
   mobile state. Verified in `mobile-final.png`.
5. Accessibility pass: P2 — explicit input IDs did not match Nuxt UI's generated label targets.
   Removed the conflicting IDs. All three labels now resolve to their controls, and browser
   inspection reports one H1, three H2s, named controls, and no unnamed links or buttons.

## Functional Checks

- Mobile menu opens and closes with a unique accessible button, `aria-expanded`, and Escape support.
- Theme control switches between dark and light states and exposes the correct accessible name.
- Calendly loads lazily on activation and renders its scheduling popup.
- Contact fields are required, use appropriate autocomplete/input modes, and have associated labels.
  The external Formspree submission itself was not sent during QA.
- Clean initial load: no browser console errors or warnings, and no external scripts or styles.
  Calendly's embedded third-party code emitted one non-blocking storage warning in the sandbox.
- Static output contains the canonical URL, title/description, Open Graph and Twitter metadata,
  JSON-LD, robots.txt, sitemap.xml, RSS, resume redirect, favicon, and resume PDF.

## Implementation Checklist

- [x] Match source desktop and mobile composition.
- [x] Verify primary interactions and responsive states.
- [x] Verify semantic structure and form-label associations.
- [x] Verify clean initial console and lazy third-party loading.
- [x] Pass type checking, linting, static generation, and whitespace validation.

final result: passed
