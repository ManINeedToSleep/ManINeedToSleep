# Portfolio Website Plan: Fubuki Theme

## I. Project Overview
*   **Goal**: Create a modern, responsive, and lightweight personal portfolio website.
*   **Inspiration**: `https://github.com/AD-Archer/AD-Archer` (Clean, modern, single-page feel, good sectioning). The live site is `www.antonioarcher.com/`.
*   **Theme**: Hololive - Shirakami Fubuki. This includes her color palette, motifs, and overall friendly/energetic vibe. User will provide custom assets.
*   **Key Features**:
    *   Landing/Home Section
    *   About Me Section
    *   Projects Section (Card-based)
    *   Contact Section
    *   Responsive Design
    *   Lightweight and Performant
*   **Bonus Features**:
    *   Animated transitions or scroll effects.
    *   Dark mode toggle.

## II. Tech Stack
*   **Frontend Framework**: Next.js (Aligns with the inspirational repo and good for modern features/performance)
*   **Styling**: Tailwind CSS (For utility-first styling and responsiveness, also used in inspirational repo)
*   **Animations (Optional but Desired)**:
    *   Framer Motion (Integrates well with React/Next.js for complex animations)
    *   AOS (Animate On Scroll) library (Simpler for scroll-based reveal animations)
    *   Tailwind CSS built-in transitions/animations for simpler effects.

## III. Design & Theme Details (Fubuki Theme)
*   **Color Palette (Initial)**:
    *   Primary: White (#FFFFFF)
    *   Secondary: Light Blue (e.g., #ADD8E6, #A0D2DB), Grey (e.g., #E5E7EB, #D1D5DB for backgrounds/accents)
    *   Accent: Darker Blue/Charcoal for text (e.g., #1F2937, #374151), Orange/Red for Fubuki-specific highlights if needed later.
    *   *Note: User will provide custom Figma assets. These are initial suggestions. The overall feel should be soft and clean, with soft shadowed cards.*
*   **Typography**:
    *   Headings (Display): Consider fonts like Zen Kurenaido (soft JP-style, as suggested by user).
    *   Body: Poppins or Nunito (as suggested by user for readability).
    *   Flair/Accent Text: Sarina or Yomogi (as suggested by user for specific highlights).
    *   (Selection to be finalized, sourced from Google Fonts or similar for ease of use).
*   **Imagery/Motifs**:
    *   User will provide custom images and assets (e.g., chibis, emotes) designed in Figma.
    *   Placeholder areas will be designated for later integration of Fubuki illustrations or motifs.
    *   Fox-themed flourishes (e.g., subtle ear/tail shapes in dividers, icons).
    *   Optional: Floating corn icon, subtle background particles (e.g., paw prints, pixel hearts) – can be implemented with lightweight JS/CSS.
*   **Overall Feel**:
    *   Clean, modern, and professional, with a clear infusion of Fubuki's cheerful, energetic personality.
    *   Playful hover effects.
    *   The AD-Archer site has a professional but slightly techy/gamer feel which can be adapted.

## IV. Site Structure & Content (Placeholders for User Input)

*   **A. Global Elements**
    *   **Navbar**:
        *   Logo (Optional: Could be username "ManINeedToSleep" stylized, or a simple Fubuki-themed icon placeholder).
        *   Links: Home, About, Projects, Contact
        *   Fubuki-themed hover effects or active state indicators.
    *   **Footer**:
        *   Copyright: `© [Current Year] Bryan Willson Gunawan`
        *   Social Media Links (GitHub, LinkedIn, Twitter, etc. - if provided by user, use placeholders for now)
        *   Optional: Small Fubuki-themed graphic placeholder or "Otsukon!" message.

*   **B. Landing/Home Page (`/`)**
    *   **Content**:
        *   **Name**: `Bryan Willson Gunawan` (Consider displaying `ManINeedToSleep` as well or instead, per user preference later)
        *   **Headline**: `Foxcore Developer: Powered by Coffee and Anime` (Alternative: "Full Stack Developer")
        *   Short intro blurb or call to action (e.g., "Scroll down to learn more about me and my projects!").
    *   **Design**:
        *   Prominent display of name and headline.
        *   Background: Could be a subtle Fubuki-themed pattern, a gradient of her key colors, or a high-quality, blurred abstract image related to her themes (e.g., a starry night, a fox den).
        *   Possible animation: Text reveal, particle effects (e.g., floating corn kernels, foxfire-like embers), or a parallax scrolling background.
        *   Inspired by AD-Archer's hero section but with Fubuki elements.

*   **C. About Me Page/Section (`/about` or `#about`)**
    *   **Content**:
        *   **Brief Introduction**: "As a Full Stack Engineer at Launchpad Philly, I design and develop full-stack applications using modern frameworks like React, Next.js, Firebase, TypeScript, and PostgreSQL. I've delivered real-world solutions through sprint-based collaboration and creative problem solving. A standout project of mine is the Doki Doki Productivity Companion, an anime-themed AI tool that supports Pomodoro timing, goal tracking, and real-time analytics via virtual companions. Previously, I contributed to Bentley Systems, improving interaction with 3D model data in enterprise-grade internal apps. I'm passionate about combining functionality with aesthetic flair and am constantly exploring new stacks and technologies. I'm also certified in React and Python, and a proud graduate of Furness Horace High School."
        *   **Skills Overview**:
            *   **Languages**: Python, JavaScript, TypeScript, HTML5, CSS3, Markdown
            *   **Frontend**: React, Next.js, Tailwind CSS
            *   **Backend**: Flask, Node.js
            *   **Tools & Platforms**: Git, GitHub, Firebase, VS Code, Vercel
            *   **Design**: Figma, Adobe Photoshop, Canva
        *   Optional: A small section on hobbies/interests if the user wants to add more personality (could tie into gaming/Hololive fandom, like the "Doki Doki Productivity Companion" already hints at).
    *   **Design**:
        *   Clean layout.
        *   Placeholder for a user avatar or a Fubuki-themed illustration representing the user.
        *   Skill display could be tags or simple lists with icons (to match the provided skill categories).

*   **D. Projects Page/Section (`/projects` or `#projects`)**
    *   **Structure**: Modular section, easy to add/edit/remove project cards. Start with 1-2 placeholder projects.
    *   **Content (for each project card - placeholders for now)**:
        *   Project Title
        *   Short Description
        *   Technologies Used (tags or icons)
        *   Link to Live Demo (optional)
        *   Link to Source Code (e.g., GitHub) (optional)
        *   Image thumbnail (optional, placeholder for now)
    *   **Design**:
        *   Card-based layout (2-3 cards per row on desktop, responsive stacking on mobile) with soft shadows.
        *   Each card should have a consistent design.
        *   Hover effects on cards (e.g., slight lift, border highlight, Fubuki-themed accent).

*   **E. Contact Page/Section (`/contact` or `#contact`)**
    *   **Content**:
        *   **Contact Methods**:
            *   Email: `mailto:bryanwillsonbwg@gmail.com`
            *   Phone: `215-892-0211` (displayed on site)
        *   **Message**: (e.g., "Let's Connect!", "Get in Touch!", "Want to build something kon-mazing together?")
        *   Social media links (placeholders, to be added if provided).
    *   **Design**: Simple, clear call to action. Placeholder for a Fubuki-themed illustration or icon nearby.

## V. Responsiveness & Performance
*   **Breakpoints**: Design for mobile-first, then adapt for tablet and desktop using Tailwind CSS's responsive prefixes.
*   **Optimization**:
    *   Next.js Image component for image optimization.
    *   Code splitting (handled by Next.js).
    *   Minimize custom CSS where Tailwind can be used.
    *   Lazy loading for images and potentially for sections below the fold.

## VI. Bonus Features (To Investigate)
*   **Page Transitions**: If using Next.js routing for separate pages, implement smooth transitions (e.g., fade, slide) using Framer Motion.
*   **Scroll Effects**:
    *   Elements fade/slide in as they enter the viewport (AOS library, Intersection Observer API, or Framer Motion).
    *   Parallax effects on background images.
    *   Subtle animations on Fubuki-themed decorative elements on scroll (e.g., floating corn icon, background particles like paw prints/pixel hearts).
*   **Dark Mode Toggle**: Optional but appreciated. Will require a secondary color scheme and a toggle mechanism.

## VII. Development Steps (High-Level)
1.  **Setup**: Initialize Next.js project, integrate Tailwind CSS.
2.  **Theme Definition**:
    *   Finalize Fubuki color palette, choose fonts.
    *   Create/source any Fubuki-themed icons or small graphical assets (user will provide Figma assets, prepare placeholders).
3.  **Layout & Components**:
    *   Build global Navbar and Footer components.
    *   Create reusable components (e.g., Project Card, Section Heading).
4.  **Page/Section Building**:
    *   Develop Landing/Home section.
    *   Develop About Me section.
    *   Develop Projects section.
    *   Develop Contact section.
5.  **Content Integration**: Populate with user-provided text and project details.
6.  **Responsiveness**: Thoroughly test and refine layout across different screen sizes.
7.  **Animations & Effects**: Implement chosen animations and scroll effects.
8.  **Testing**: Cross-browser testing, performance checks (Lighthouse).
9.  **Deployment**: Deploy to a platform like Vercel (recommended for Next.js). Ensure the repository is structured for easy Vercel deployment (this is standard for Next.js).

## VIII. Questions for User (You!) - Updated
Most questions have been answered! Remaining/Clarifying points:

1.  **Social Media Links**: Please provide links for GitHub, LinkedIn, Twitter, etc., if you want them in the footer/contact section.
2.  **Project Details (Placeholders)**: For the initial 1-2 placeholder projects, do you have any quick details (even if vague for now, like "Placeholder Project 1 - A cool web app") or should I use generic lorem ipsum?
3.  **Fubuki Asset Placeholders**: Any specific dimensions or types of areas you envision for the custom Fubuki illustrations (e.g., a banner on the home page, small icons next to section titles)? This will help in creating appropriate placeholder spaces.
4.  **Avatar/Personal Image**: Would you like a placeholder for a personal photo/avatar in the "About Me" section, or would you prefer to use a Fubuki-themed illustration there (which you'll provide)?

This plan should give us a solid foundation. Please review it and provide the information requested in **Section VIII** when you're ready. We can then start diving into the actual build!
