# 🌿 Minty Fresh Portfolio Website

A jumpy, welcoming portfolio website with a refreshing mint flavor! Built with Next.js and lots of love. ✨

---

## 📝 PRE-BUILD QUESTIONNAIRE
**Fill this out before we start building! Then pass it back to get started~** 💚

### 🎨 Design & Assets
- **Profile Photo/Avatar**: Do you have one ready? Or use placeholder for now?
  - [ ] Answer:  

- **Logo or Branding**: Any personal logo or branding elements?
  - [ ] Answer: 

- **Project Screenshots**: Ready or use placeholders?
  - [ ] Answer: 

### ✍️ Content to Prepare

#### About Section
- **Short Bio** (2-3 sentences about you):
  - [ ] Answer: 

- **Skills** (Technologies/tools to showcase - list them!):
  - [ ] Answer: 

#### Projects Section
- **Do you have 3-5 projects to feature?** If yes, list them below:
  - [ ] Project 1: (title, description, tech stack, live link, github link)
  - [ ] Project 2: 
  - [ ] Project 3: 
  - [ ] Project 4: (optional)
  - [ ] Project 5: (optional)

#### Contact Info
- **Email**: 
  - [ ] Answer: 

- **Social Media Links** (GitHub, LinkedIn, Twitter, etc.):
  - [ ] GitHub: 
  - [ ] LinkedIn: 
  - [ ] Twitter/X: 
  - [ ] Other: 

### 🏗️ Design Decisions

- **Fonts**: Want to pick fonts now or use system fonts to start?
  - [ ] Answer: 

- **Section Order**: Hero → About → Projects → Contact? Or different?
  - [ ] Answer: 

- **Navigation**: Sticky header with smooth scroll links?
  - [ ] Answer: 

- **Mobile Menu**: Hamburger menu or something else?
  - [ ] Answer: 

### 🎯 Build Strategy

- **Where to start?**
  - [ ] Option 1: Build splash screen first (see animations right away!)
  - [ ] Option 2: Color system + layout foundation first (structured approach)
  - [ ] Option 3: Your idea: 

- **Design approach**: Desktop-first or mobile-first?
  - [ ] Answer: 

### 🎬 Splash Screen Details

- **Duration**: How long should splash screen show? (3-4 seconds? 5-6 seconds?)
  - [ ] Answer: 

- **Skip Button**: Add skip button for returning visitors?
  - [ ] Answer: 

- **Sound Effects**: Want subtle sound effects? (can be toggled off)
  - [ ] Answer: 

### 🌙 Features

- **Dark Mode**: Add from the start or later?
  - [ ] Answer: 

- **Any other features/ideas you want to mention?**
  - [ ] Answer: 

---

## 🎨 Design Vision

### Color Palette (Minty Fresh!)
- **Primary Mint**: `#98FF98` (Mint Green)
- **Deep Mint**: `#5FD68A` (Darker Mint)
- **Soft Mint**: `#C5F5D8` (Light Mint Background)
- **Cream**: `#FFFEF7` (Warm White)
- **Charcoal**: `#2C3E3D` (Dark Text)
- **Accent Coral**: `#FF9B9B` (For CTAs and highlights)

### Personality & Feel
- **Jumpy**: Smooth bounce animations, spring transitions, playful micro-interactions
- **Welcoming**: Warm copy, friendly typography, inviting CTAs
- **Fresh**: Clean layouts, breathing room, modern design
- **Fun**: Subtle hover effects, animated icons, delightful surprises

## ✅ Development Checklist

### Phase 1: Foundation & Setup
- [ ] Set up color system in globals.css
- [ ] Choose and configure fonts (fun but readable!)
- [ ] Create base layout structure
- [ ] Install and set up React Spring (@react-spring/web)

### Phase 2: Welcome Experience & Core Sections
- [ ] **Intro Splash Screen / Welcome Monologue** ⭐
  - [ ] Minty blank background with subtle gradient
  - [ ] Animated text sequence with pop/bounce effects
  - [ ] Welcoming phrases like:
    - "Hey, Stranger!" *pop!*
    - "Never seen you around here!" *bounce!*
    - "Welcome to my minty corner of the web~" *fade in*
  - [ ] Smooth transition to main portfolio after sequence
  - [ ] Optional: Skip button for returning visitors
  - [ ] Playful sound effects? (optional, with mute toggle)

- [ ] **Hero Section**
  - [ ] Animated greeting with bouncy entrance
  - [ ] Tagline/intro with typewriter effect
  - [ ] CTA buttons with hover animations
  - [ ] Floating mint leaves or bubbles background effect
  
- [ ] **About Section**
  - [ ] Personal bio with welcoming tone
  - [ ] Skills showcase (animated pill badges?)
  - [ ] Fun facts or interests
  - [ ] Profile image with creative border/frame

- [ ] **Projects Section**
  - [ ] Project cards with hover lift effect
  - [ ] Project images/previews
  - [ ] Tech stack tags
  - [ ] Live demo & GitHub links
  - [ ] Filter by technology (optional)

- [ ] **Contact Section**
  - [ ] Email/social links with bouncy icons
  - [ ] Optional contact form
  - [ ] Fun "Let's create together!" CTA

### Phase 3: Polish & Interactions
- [ ] Smooth scroll animations (elements fade/slide in on scroll)
- [ ] Cursor trail effect or custom cursor (minty theme!)
- [ ] Loading animations
- [ ] Page transitions
- [ ] Mobile responsive design
- [ ] Dark mode toggle (minty dark theme?)

### Phase 4: Content & Details
- [ ] Write engaging copy for all sections
- [ ] Add real projects with descriptions
- [ ] Create/add project screenshots
- [ ] Add social media links
- [ ] Create favicon (mint leaf? 🌿)

### Phase 5: Optimization & Launch
- [ ] Optimize images
- [ ] Add meta tags for SEO
- [ ] Test cross-browser compatibility
- [ ] Test mobile responsiveness
- [ ] Deploy to Vercel
- [ ] Set up custom domain (optional)

## 💡 Feature Ideas

### Must-Haves
- **Intro splash screen with welcoming monologue** ⭐
- Smooth scroll navigation
- Animated section reveals
- Responsive mobile design
- Fast loading times
- Accessible keyboard navigation

### Nice-to-Haves
- Easter eggs (Konami code? Secret minty surprise?)
- Project filtering/search
- Blog section
- Testimonials carousel
- Skills progress bars with animations
- "Currently listening to" widget (Spotify API?)
- 3D elements or parallax effects

### Animations Inspiration
- **Intro Splash**: Words pop in with spring bounce, staggered timing, fade transitions between phrases
- **Entrance**: Bounce in from bottom, fade + scale
- **Hover**: Lift + shadow, gentle rotation
- **Scroll**: Parallax layers, reveal on scroll
- **Micro**: Button ripples, icon wiggles, badge pops

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: React Spring (@react-spring/web) - Spring physics for natural, bouncy animations!
- **Deployment**: Vercel
- **Optional**: Three.js for 3D elements

### Why React Spring?
- 🌊 **Spring physics** = Perfect for jumpy, natural animations
- 🚀 **High performance** - Animates without re-rendering
- ✨ **Great for splash screen** - Easy text staggering with useTrail
- 💚 **Matches our vibe** - Natural bounce and fluid motion

## 🚀 Getting Started

First, install React Spring:

```bash
npm install @react-spring/web
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the magic happen!

## 📝 Notes & Ideas

- Keep it lightweight and fast
- Mobile-first approach
- Accessibility matters!
- Add personal touches and humor
- Test with friends for feedback
- Keep the minty vibe consistent throughout

### Intro Monologue Ideas (mix & match!)
- "Hey, Stranger! 👋"
- "Never seen you around here before!"
- "Welcome to my minty corner of the web~"
- "Let me show you around! 🌿"
- "Thanks for stopping by, friend!"

### React Spring Quick Example (Splash Screen)
```typescript
import { useTrail, animated } from '@react-spring/web'

const phrases = ["Hey, Stranger! 👋", "Never seen you around here!"]

const trail = useTrail(phrases.length, {
  from: { opacity: 0, transform: 'scale(0.5)' },
  to: { opacity: 1, transform: 'scale(1)' },
  config: { tension: 300, friction: 10 } // Bouncy!
})

return trail.map((style, i) => (
  <animated.div style={style}>{phrases[i]}</animated.div>
))
```

---

**Let's make something fresh! 🌿✨**
