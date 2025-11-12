# Main Page Build — Coordination Plan

## Snapshot of What Exists
- `mainpage.md` documents the full UX intent for the main page sections (nav → hero → projects → about → experiences → contact) and desired motion cues.
- `src/components/site/intro-scene.tsx` delivers the Minty Bounce intro overlay with dialogue sequencing, already wired for integration.
- `src/app/(site)/page.tsx` still serves a minimal text-only placeholder; none of the documented sections are implemented yet.
- `src/components/site/project-card.tsx` and `post-card.tsx` are empty stubs, so project/about/experience UI primitives still need to be created.
- Content sources (`src/content/projects/*.mdx`, `src/content/blog/*.mdx`) and global config (`src/config/site.ts`) are ready for wiring into the new layout.

## Scope: “Base of the Body” Delivery
Goal for this iteration: ship a responsive, scroll-friendly skeleton of the main page that matches the documented section order, with placeholder data where needed but production-ready structure, semantics, and spacing.

- Persistent navigation bar with anchor links and active-section styling hooks.
- Hero panel with profile image slot, name/title copy, and short blurb; ensure intro overlay can fade onto this section cleanly.
- Featured Projects grid pulling from MDX content (start with three cards, graceful fallback if fewer exist).
- Short About Me block with overlapping imagery containers and paragraph copy.
- Featured Experiences timeline scaffold (nodes + text slots, horizontal on desktop, stacked fallback on mobile).
- Contact section containing form inputs and space for social/profile callouts (submission can be stubbed but markup + validation hooks should exist).

## Agent Workstreams
### Artist Agent
- Finalize visual references for each section: colors, spacing rhythm, hover/scroll states (tie back to mint palette in `mainpage.md`).
- Provide component-level guidance for project cards, timeline nodes, and contact form styling so Programmer can translate directly.
- Define motion guidelines for section entrances (thresholds, directions, reduced-motion alternatives).

### Programmer Agent
- Implement the new main page layout inside `src/app/(site)/page.tsx`, honoring the section order and semantics described above.
- Build reusable UI pieces in `src/components/site/` (e.g., `HeroSection`, `ProjectsSection`, `ExperienceTimeline`, `ContactForm`) and wire them to MDX content where applicable.
- Ensure smooth handoff with `IntroOverlay`: allow page content to render beneath and animate in once intro completes.
- Add Tailwind utility classes or extracted components to match Artist specifications; keep accessibility in mind (headings hierarchy, ARIA for timeline).

### SEO Agent
- Review the updated layout for proper heading structure, landmark roles, and link text.
- Prepare meta copy updates (`src/config/site.ts`) once new hero/about content lands.
- Draft structured data (JSON-LD for person + projects) to add after Programmer exposes the necessary fields.

## Dependencies & Notes
- Programmer and Artist should agree on placeholder assets (profile image leaf icons) to avoid rework.
- Consider creating mock project/about data files this sprint so sections render with real content during development.
- Once the base body is stable, plan a follow-up cycle for micro-interactions, modal flow for projects, and dark-mode toggle.

