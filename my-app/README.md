# 🌿 Bryan Gunawan’s Minty Portfolio — In-flight Build Log

This repository hosts Bryan Gunawan’s personal portfolio, crafted with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX-content**.  
The project is actively evolving; this README captures the current status, implemented features, and what’s next.

---

## ✅ Completed So Far

### 1. Base Architecture
- Next.js App Router scaffolding under `src/app/(site)`.
- MDX-driven content system (`src/content/projects`, `src/content/blog`) wired via `lib/mdx.ts` and Zod schemas in `lib/content.ts`.
- Tailwind v3 setup with minty theme extensions and custom utilities.
- Global typography, SEO metadata, and font configuration (`Nunito`, `Geist Mono`).

### 2. Intro Experience
- `IntroOverlay` component (`src/components/site/intro-scene.tsx`) delivers the Minty Bounce greeting with typing wave animation and reduced-motion respect.
- `IntroGate` client wrapper gating the site, persisting completion in storage and smoothly fading into the main page.

### 3. Main Page Sections *(implemented skeleton + styling)*
- **Hero**: Center-aligned profile focus with layered mint gradients and decorative orbs (`HeroSection`).
- **Featured Projects**: Responsive card grid pulling MDX frontmatter, hover states, and accent blooms (`ProjectsSection`, `ProjectCard`).
- **About**: Overlapping photo stack plus narrative card with highlight chips (`AboutSection`).
- **Experiences**: Card-based 2×3 grid summarizing roles with optional detail bullets (`ExperiencesSection`).
- **Contact**: Mint-tinted form + social badges (implemented earlier in the cycle).

### 4. Styling Foundation
- Body-wide gradient wash, ambient blur layers, and consistent mint palette usage.
- Section spacing rhythm (`py-24/28/32`, `max-w-6xl`, `px-6/10/16`).
- Accessibility: semantic headings, focus-visible rings, ARIA tweaks for intro overlay.

---

## 📋 Updated Coordination Plan Highlights
See `plans/main-page-coordination.md` for full detail. Latest updates:
- **Status snapshot** now reflects the implemented hero, projects, about, experiences, contact, and intro gate.
- **Next focus**: deep styling polish, motion refinements, and content overlays before enabling further functionality (e.g., project modal, contact backend).

---

## 🎯 Next Steps (Design & Implementation)
1. **Styling polish phase (in progress with Artist)**
   - Refine navigation, section separators, and micro-interactions.
   - Finalize imagery replacements (hero profile, about photos, project thumbnails).
   - Introduce depth cues (shadow tuning, parallax hints) per wireframe.
2. **Programmer follow-up**
   - Implement design refinements once specs are locked.
   - Extend project modals and timeline interactions if approved.
   - Hook up contact form logic and add content guardrails.
3. **SEO / Content sweep**
   - Update `config/site.ts` and structured metadata once copy is final.
   - Populate real MDX entries and media assets.

---

## 🗂 Current Project Structure (Key Files)
```
src/
  app/
    (site)/
      layout.tsx        # Global layout, fonts, IntroGate
      page.tsx          # Main page composition
      projects/[slug]/  # MDX-powered detail pages
      blog/[slug]/      # Blog detail pages (placeholder content)
  components/site/
    intro-scene.tsx     # Minty intro overlay
    intro-gate.tsx      # Storage-aware intro wrapper
    hero-section.tsx    # Hero layout
    projects-section.tsx / project-card.tsx
    about-section.tsx
    experiences-section.tsx
    contact-section.tsx
  content/
    projects/           # MDX project entries
  lib/
    mdx.ts              # MDX compilation helpers
    content.ts          # Zod schemas (projects/posts)
```

---

## 🛠 Commands
```bash
pnpm install   # install dependencies
pnpm dev       # run dev server (http://localhost:3000)
pnpm build     # production build
pnpm start     # serve built app
```

---

## 📌 Notes for Collaborators
- The intro overlay plays once per browser storage entry; clear storage to re-run the experience during testing.
- Tailwind classes rely on the custom theme defined in `tailwind.config.ts`; stick to these tokens when extending styles.
- Content updates should happen via MDX files so frontmatter validation stays intact.
- Keep accessibility in mind when introducing new motion (respect `prefers-reduced-motion`).

---

## 🧭 Roadmap Snapshot
| Phase | Owner | Focus |
| ----- | ----- | ----- |
| Styling polish | Artist → Programmer | Fine-tune hero background, section transitions, visual density |
| Interaction upgrades | Programmer | Project modals, timeline hover details, contact form validation |
| Content populate | All | Replace placeholders with real copy, imagery, and MDX entries |
| SEO pass | SEO agent | Metadata tuning, Open Graph images, performance verification |

---

## 🧾 License
Personal/educational use. Attribution appreciated. 🌿
