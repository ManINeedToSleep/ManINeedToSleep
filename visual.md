# Visual System: Fonts, CSS, and Animations

This document explains how styling works in this codebase, with a focus on
fonts, global CSS, Tailwind usage, and the animated UI elements like the
moving polka‑dot background.

## CSS Entry Points

### Global stylesheet
- `src/app/globals.css` is the only global stylesheet.
- It defines root color variables, default body styling, custom `@font-face`
  declarations, and a global polka‑dot animation.

Key points:
- `body` uses `Arial, Helvetica, sans-serif` as the default fallback font.
- `overflow: hidden` prevents page‑level scrolling; most scrolling happens
  inside components.

### Tailwind
- Tailwind is configured in `tailwind.config.ts`.
- It defines custom `background`/`foreground` colors from CSS variables.
- It also defines a `fall` keyframe and `polkadot-fall` animations.

Note: there is **also** a `fall` keyframe and `.animate-polkadot-fall` class
defined in `globals.css`. Since `globals.css` loads after Tailwind’s base,
the global class wins in the cascade.

## Fonts

### Where fonts live
All font files are stored in `public/fonts`.

### How fonts are loaded
Fonts are loaded via `@font-face` declarations in `src/app/globals.css`:
- `Riffic` -> `/fonts/RifficFree-Bold.ttf`
- `Halogen` -> `/fonts/Halogen.ttf`
- `s1` -> `/fonts/s1.ttf`
- `y1` -> `/fonts/y1.ttf`
- `n1` -> `/fonts/n1.ttf`
- `m1` -> `/fonts/m1.ttf`

Only `s1`, `y1`, `n1`, `m1` use `font-display: swap`. `Riffic` and `Halogen`
do not, so those will block until loaded.

### “Main” font usage
There are two practical “main” fonts depending on context:
- **App baseline / fallback**: `Arial, Helvetica, sans-serif` on `body`
  in `globals.css`.
- **Brand / UI headings**: `Riffic` appears repeatedly in hero text,
  navigation tabs, menu options, and call‑to‑action buttons via
  Tailwind’s arbitrary class `font-[Riffic]`.

### Character‑specific fonts
Character‑themed content uses the “letter” fonts:
- **Sayori**: `s1`
- **Yuri**: `y1`
- **Natsuki**: `n1`
- **Monika**: `m1`

These are used for:
- The “Testaments” content in `Landing/MenuContent/Options.tsx`.
- Dialogue notifications in `Common/Notifications/DialogueNotification.tsx`.

### Where fonts are applied
Common usage patterns:
- **Tailwind arbitrary font class**: `font-[Riffic]`, `font-[Halogen]`
- **Inline style**: `style={{ fontFamily: "s1" }}` (for character letters)

Key references:
- Menu UI and headings: `src/components/Landing/MenuOption.tsx`,
  `src/components/Landing/CharacterInfo.tsx`, `src/app/page.tsx`.
- Character messages: `src/components/Common/Notifications/DialogueNotification.tsx`.
- Character “testaments”: `src/components/Landing/MenuContent/Options.tsx`.

### Known mismatch
`CompanionDisplay.tsx` uses `font-[RifficFree-Bold]`, but the defined font
name is `Riffic`. This class won’t match the loaded font name and will
fall back to the default font stack.

## Animations

There are three layers of animation:

### 1) Global CSS keyframes
Defined in `globals.css`:
- `@keyframes fall` + `.animate-polkadot-fall` (30s linear loop)

This is the animation used for the moving polka‑dot background.

### 2) Tailwind animation utilities
Defined in `tailwind.config.ts`:
- `fall` keyframes (translate Y from `-100%` to `100%`)
- `animate-polkadot-fall`
- `animate-polkadot-fall-delayed`

Because `globals.css` defines `.animate-polkadot-fall` too, the global class
overrides the Tailwind version for that class name.

### 3) Framer Motion + Tailwind transitions
Most component‑level animations are handled by Framer Motion:
- `AnimatePresence` for enter/exit transitions.
- `motion.div` / `motion.button` for hover and fade effects.

Tailwind utility transitions (`transition-all`, `duration-*`, `ease-*`) are
used alongside Framer Motion for hover/focus affordances.

## Moving Polka‑Dot Background

The polka‑dot background is implemented in
`src/components/Common/BackgroundCustom/PolkadotBackground.tsx`.

How it works:
- Uses JS to calculate a repeated dot grid based on window size.
- Renders dots into a container with a `300%` height.
- Applies `.animate-polkadot-fall` to translate the dot layer vertically.
- The global `fall` keyframes move the layer by `33.33%`, giving a seamless
  loop.

Relevant styling:
- `globals.css` defines the `fall` animation and class.
- Tailwind config also defines a `fall` keyframe, but the global class wins.

## Glitch Effect

The glitch effect is implemented in
`src/components/Common/BackgroundCustom/GlitchEffect.tsx`.

Highlights:
- Uses random transforms (translate + skew) and `filter: hue-rotate`.
- Adds RGB split layers (`mix-blend-screen`).
- Uses Framer Motion to flicker glitch text overlays.
- Contains scanline overlay using a repeating linear gradient.

## Quick Reference Map

Fonts:
- `Riffic` (brand headings): `Landing/MenuOption.tsx`, `Landing/CharacterInfo.tsx`,
  `app/page.tsx`
- `Halogen` (body/labels): `Landing/CharacterInfo.tsx`, `Goals/GoalForm.tsx`
- `s1/y1/n1/m1` (character letters): `Landing/MenuContent/Options.tsx`,
  `Common/Notifications/DialogueNotification.tsx`

Animations:
- Polka‑dot scroll: `Common/BackgroundCustom/PolkadotBackground.tsx`
- Glitch: `Common/BackgroundCustom/GlitchEffect.tsx`
- Typing cursors / spinners: `DialogueNotification.tsx`, `Chat` components
- UI transitions: widespread `transition-*` classes + Framer Motion

## File Index

- `src/app/globals.css` — fonts, base styles, global animations
- `tailwind.config.ts` — Tailwind extensions (colors + animations)
- `public/fonts/` — all font assets
- `src/components/Common/BackgroundCustom/PolkadotBackground.tsx` — animated
  background implementation
- `src/components/Common/BackgroundCustom/GlitchEffect.tsx` — glitch visuals
