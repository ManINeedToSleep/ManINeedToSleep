# Main Page — Artist Playbook

This guide translates the coordination plan into concrete visual + motion direction for the base body build. Use it as the single source of truth while implementing the first pass.

## Global Styling References
- **Typography Stack:** `"Nunito", "Quicksand", "system-ui"`; default weight `400`, hero headings use `700`, section titles `600`.
- **Color Palette**
  - `mint-500` `#2ED7C4` (primary accent)
  - `mint-300` `#6CE8D9` (hover/gradients)
  - `mint-100` `#E6FFF7` (background wash)
  - `ink-900` `#1C2A27` (primary text)
  - `ink-500` `#4D6B65` (muted copy)
  - `cloud-50` `#F7FBFA` (card backgrounds)
- **Shadows:** `shadow-[0_12px_30px_-20px_rgba(46,215,196,0.45)]` for hero elements, `shadow-sm` elsewhere.
- **Corner Radius:** default `rounded-2xl`; buttons/forms `rounded-full`.
- **Spacing Rhythm:** base vertical spacing `py-24` per major section desktop (`py-16` tablet, `py-12` mobile). Container max width `max-w-6xl` with `px-6` mobile, `px-10` tablet, `px-16` desktop.

## Section Design Guidance

### Navigation Bar
- Layout: sticky bar with `backdrop-blur-md bg-white/70 border-b border-[#e4f8f3]`.
- Height `h-16`, items aligned center with `justify-between`.
- Active link indicator: `after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#2ED7C4] after:rounded-full after:scale-x-0 group-hover:after:scale-x-100 transition`.
- Scroll state: add `shadow-[0_6px_12px_-10px_rgba(28,42,39,0.35)]` once hero top is passed.

### Hero Section
- Background: `bg-gradient-to-b from-[#E6FFF7] to-white`.
- Layout: `grid md:grid-cols-[1fr_auto] items-center gap-12`.
- Profile image: circular frame `w-48 h-48 rounded-full border-4 border-white shadow-[0_16px_40px_-20px_rgba(46,215,196,0.65)]` with optional mint leaf SVG badge positioned top-left (`absolute -top-3 -left-3`).
- Text block: use `text-5xl md:text-6xl font-bold text-ink-900` for name; tagline `text-lg text-ink-500 mt-4 max-w-xl`.
- CTA row (optional future): `flex gap-4 mt-8`, buttons `bg-[#2ED7C4] text-ink-900 hover:bg-[#26b6a6]`.
- Decorative leaves: low-opacity outline placed at corners, `opacity-30 md:block hidden`.

### Featured Projects
- Section heading: `text-3xl font-semibold text-ink-900`, subcopy `text-ink-500`.
- Container: `grid gap-8 sm:grid-cols-2 xl:grid-cols-3`.
- Card styling:
  - Wrapper `rounded-2xl bg-cloud-50 shadow-[0_18px_45px_-35px_rgba(28,42,39,0.65)] border border-white/60 hover:border-[#2ED7C4]/60 transition`.
  - Thumbnail: `aspect-[4/3] rounded-t-2xl overflow-hidden bg-gradient-to-tr from-[#d9faf3] to-white`.
  - Content: `p-6 flex flex-col gap-3`.
  - Title `text-xl font-semibold`, last updated `text-sm uppercase tracking-[0.12em] text-mint-500`.
  - Description `text-sm text-ink-500`.
  - Footer chips `flex flex-wrap gap-2 text-xs bg-[#eefdf9] text-mint-500 rounded-full px-3 py-1`.
- Interaction: on hover, `translate-y-[-6px]` + `shadow-[0_22px_55px_-40px_rgba(46,215,196,0.75)]`.

### Short About Me
- Layout: `grid md:grid-cols-[minmax(0,0.85fr)_1fr] gap-12 md:items-center`.
- Image stack: two frames `w-40 h-48` and `w-48 h-56` with `rounded-3xl` and `border-4 border-white`. Lower image `translate-x-6 translate-y-6` behind upper; add `ring-8 ring-[#E6FFF7]`.
- Copy panel: `bg-white shadow-sm rounded-3xl p-8 md:p-10`.
  - Headline `text-2xl font-semibold`.
  - Body `text-base text-ink-500 leading-relaxed`.
- Accent elements: small mint dots `w-3 h-3 rounded-full bg-[#2ED7C4]` bridging image and text.

### Featured Experiences Timeline
- Desktop: horizontal timeline `relative flex flex-col gap-10`.
  - Base line: pseudo-element `before:absolute before:left-0 before:right-0 before:top-1/2 before:h-[2px] before:bg-gradient-to-r before:from-[#d6f7ef] before:to-[#2ED7C4]`.
  - Nodes: `flex justify-between items-start gap-6`.
  - Each node container `group relative flex flex-col items-center text-center`.
  - Node badge: `w-14 h-14 rounded-full bg-white border-2 border-[#2ED7C4] shadow-sm flex items-center justify-center text-mint-500 font-semibold`.
  - Tooltip card below line: `mt-6 bg-white rounded-2xl border border-[#e4f8f3] p-4 shadow-[0_14px_30px_-28px_rgba(28,42,39,0.8)]`.
- Mobile fallback: stack vertically `space-y-8` with left accent line `border-l-2 border-[#d6f7ef] pl-6`.
- Text styling: role `text-base font-semibold`, organization `text-sm uppercase tracking-[0.2em] text-mint-500`, summary `text-sm text-ink-500`.

### Contact Section
- Layout: split `grid md:grid-cols-[1.2fr_auto] gap-12 items-center`.
- Form container: `bg-cloud-50 rounded-3xl p-10 shadow-[0_16px_44px_-36px_rgba(28,42,39,0.7)]`.
  - Inputs: `rounded-2xl border border-[#d6f7ef] focus:border-[#2ED7C4] focus:ring-2 focus:ring-[#BDF4EB] bg-white text-ink-900`.
  - Submit button: `rounded-full bg-[#2ED7C4] text-ink-900 font-semibold px-6 py-3 hover:bg-[#27c2b2] transition`.
  - Validation hint text `text-xs text-ink-500 mt-2`.
- Side panel: circular profile badge `w-40 h-40 rounded-full bg-gradient-to-br from-[#2ED7C4] to-[#6CE8D9] shadow-lg flex items-center justify-center text-white text-xl font-semibold`.
- Include row for social chips `flex flex-wrap gap-3 mt-6` with `bg-white rounded-full px-4 py-2 text-sm text-mint-500`.

## Motion & Interaction Cues
- Use `framer-motion` or tailwind-powered transitions; respect `prefers-reduced-motion`.
- Section entrance: triggered at ~35% viewport, `initial: { opacity: 0, y: 40 } → animate: { opacity: 1, y: 0 }` with `duration: 0.6` and `ease: "easeOut"`.
- Hero profile image breathing: `scale` oscillation `1 → 1.035 → 1` over `4s`.
- Navigation scroll indicator: fade in background + shadow when hero leaves viewport.
- Timeline nodes: hover `scale-105` + glow `shadow-[0_18px_35px_-30px_rgba(46,215,196,0.85)]`.
- Project modal (future): plan for `scale-[0.96→1]` + `backdrop-blur`.

## Assets & Placeholders
- Temporary profile art: use `public/images/profile-placeholder.png` (create simple mint gradient circle if absent).
- Leaf illustrations: light-line SVG exported at `stroke-[#2ED7C4]`, `opacity-40`.
- About section photos: abstract textures or candid grayscale; apply `filter saturate-[0.85]`.

## Hand-off Checklist
- [ ] All section headings use `<h2>` with consistent margin.
- [ ] Container widths + spacing match rhythm notes.
- [ ] Primary CTA + form button share the same visual language.
- [ ] Reduced-motion path removes non-essential translations but keeps fades.
- [ ] Color contrast ≥ 4.5:1 for body text on backgrounds.
- [ ] Provide `alt` text guidance for imagery (hero profile, project thumbnails, about photos).

When Programmer begins implementation, share this playbook plus component-specific class snippets to reduce guesswork. Iterate together as section markup lands. Mint stays minty 🌿.

