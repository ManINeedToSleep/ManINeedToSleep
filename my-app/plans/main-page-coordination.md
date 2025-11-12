# Main Page Build — Coordination Plan

## Snapshot of What Exists
- `mainpage.md` outlines the full UX intent (nav → hero → projects → about → experiences → contact) and motion cues.
- `src/components/site/intro-scene.tsx` powers the Minty Bounce intro, now wrapped by `IntroGate` for storage-aware playback and soft fade into the page.
- `src/app/(site)/page.tsx` renders the complete layout: hero, featured projects, about, experiences, contact, and “Other Minty Corners”.
- `src/components/site/*.tsx` implements the hero/about/experiences/contact sections plus project cards; `project-card.tsx` pulls live MDX data.
- Content sources (`src/content/projects/*.mdx`, `src/content/blog/*.mdx`) and `src/config/site.ts` are ready for copy refresh.

## Scope: “Base of the Body” Delivery — Status
Goal for this iteration was to ship a responsive, scroll-friendly skeleton of the main page. ✅ Completed:

- Navigation bar with anchor links and sticky behavior.
- Hero panel (profile focus, copy, intro overlay compatibility).
- Featured Projects grid wired to MDX content with mint hover treatment.
- Short About Me section with overlapping imagery and highlight bullets.
- Experiences showcased via responsive card grid (timeline variant deferred).
- Contact section with mint-styled form and callout area (submission still stubbed).

## Agent Workstreams
### Artist Agent (current focus)
- Deepen styling polish: nav treatment, ambient gradients, micro-interactions, section separators.
- Provide updated imagery (hero profile, about photos, project thumbnails) and motion specs (staggered entrances, reduced-motion alternatives).

### Programmer Agent (next sprint)
- Implement Artist’s polish directives (spacing, motion, asset swaps).
- Extend functionality: project modals, interaction details, contact validation/backend stub.
- Ensure accessibility remains strong post-polish.

### SEO Agent (upcoming)
- Reassess heading structure and landmarks once styling stabilizes.
- Update `src/config/site.ts` metadata with final copy, prepare JSON-LD for person/projects.
- Coordinate with Programmer for any additional SEO hooks (structured data, sitemap refresh).

## Dependencies & Notes
- Artist & Programmer to align on final imagery/asset selection to prevent rework.
- Populate MDX content with real copy/media during styling phase for accurate previews.
- After polish sprint, consider follow-up for modals, enhanced interactions, and optional dark-mode toggle.

