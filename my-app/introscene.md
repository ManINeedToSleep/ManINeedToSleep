# 🌿 Minty Bounce Intro — Animated Portfolio Welcome Scene

A friendly, wave-text intro animation designed to welcome visitors to your portfolio or website. Built with **React + TypeScript + Framer Motion**, it features a smooth, minty aesthetic and a short human-like dialogue sequence that adapts between first-time and returning visitors.

---

## 🎬 Overview
The **Minty Bounce Intro** serves as an animated entrance to your website. When a user visits your page, they are greeted with a short, friendly conversation paired with a soft breathing animation. After the dialogue finishes, the intro fades smoothly into your main page.

### 💡 Goals
- Humanized and soft intro for visitors.
- Create a warm and welcoming first impression.
- Keep it short (< 5 seconds total runtime).
- Subtle motion, wave text, and rounded typography.

---

## 🧩 Features
- **Wave-like text animation** – Each character appears with a gentle bounce in sequence.
- **Dynamic dialogue** – Customizable message sequences for first-time and returning visitors.
- **Soft transitions** – The intro fades out naturally into the main content.
- **Breathing animation** – Optional mint circle animation to enhance visual life.
- **Accessibility-aware** – Honors the user’s `prefers-reduced-motion` setting unless overridden.
- **Fully typed (TypeScript)** – With clear prop definitions for easy integration.

---

## 🧠 Animation Ruleset
1. Wave-like text appearance for each line.
2. Small delay between dialogue transitions (human conversation pacing).
3. Keep total duration under **5 seconds**.
4. Must feel welcoming — warm tone and phrasing.
5. Smooth fade transition after intro scene.
6. Font style should be rounded, soft, and friendly.

---

## 🗣️ Dialogue Design
### First-Time Visitor
```
Oh? A visitor?!
I didn’t even hear you come in!
Welcome—feel free to take a look around.
This little space is yours to explore.
```

### Returning Visitor
```
Oh? It’s you?!
Back again already?
You’re always welcome back here!
Take your time and wander as you like…
It’s good to see you again, friend.
```

---

## 🧱 Component Breakdown

### 1. `TypingWave`
Animates each letter of a string with a bounce effect.
```tsx
<TypingWave text="Hello there!" waveGap={0.06} />
```

### 2. `DialogueSequence`
Displays multiple lines sequentially and calls a callback once finished.
```tsx
<DialogueSequence lines={["Line one", "Line two"]} onComplete={() => ...} />
```

### 3. `IntroOverlay`
The main exported component — a full-screen intro overlay that plays the dialogue, animates the mint circle, and fades out when done.
```tsx
<IntroOverlay
  lines={["Oh? A visitor?!", "Welcome—feel free to take a look around."]}
  onFinish={() => setIntroDone(true)}
/>
```

### 4. `IntroOverlayDemo`
A simple example harness that shows the intro before revealing the main content.

---

## ⚙️ Props (IntroOverlay)
| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `lines` | `string[]` | `["Oh? Hey there!", "Welcome to my portfolio — take a look around!"]` | The dialogue lines to display. |
| `showBall` | `boolean` | `true` | Toggles the mint breathing ball. |
| `gradientFrom` | `string` | `from-[#e6fff7]` | Tailwind color for gradient start. |
| `gradientTo` | `string` | `to-white` | Tailwind color for gradient end. |
| `forceAnimations` | `boolean` | `false` | Forces animation regardless of reduced motion preference. |
| `respectReducedMotion` | `boolean` | `true` | Honors system motion preferences. |
| `enterDuration` | `number` | `0.0` | Duration of the intro fade-in. |
| `exitDuration` | `number` | `0.6` | Duration of the outro fade-out. |
| `waveGap` | `number` | `0.06` | Delay between each letter’s animation. |
| `onFinish` | `() => void` | `undefined` | Called once the fade-out completes. |

---

## 🎨 Suggested Visual Style
- **Typography:** Rounded sans-serif (e.g., *Nunito*, *Quicksand*, *Baloo 2*).
- **Color Palette:** Mint (#2ED7C4), White, and Light Teal gradients.
- **Background:** `bg-gradient-to-b from-[#e6fff7] to-white`
- **Text:** Mint-accented with slight drop shadow.

---

## 🧭 Implementation Flow
1. **User enters website.**
2. **IntroOverlay** triggers and displays dialogue + animation.
3. After the final line, the overlay fades out.
4. The main website content fades smoothly in.

---

## 🖼️ Wireframe Reference
![Wireframe](./wireframe.png)

**Animation Flow:**
- Opening animation: wave-text + breathing circle.
- Dialogue sequence: human-like pacing.
- Fade transition: intro → website.

---

## 🧩 Example Integration
```tsx
const [introDone, setIntroDone] = useState(false);

return (
  <>
    {!introDone && (
      <IntroOverlay
        lines={["Oh? A visitor?!", "Welcome—feel free to take a look around."]}
        onFinish={() => setIntroDone(true)}
      />
    )}
    <MainPage />
  </>
);
```

---

## 🪶 Notes
- Keep dialogue warm, brief, and genuine.
- Avoid overlong intros—focus on a graceful greeting.
- For returning visitors, detect via `localStorage` or cookies and load alternate dialogue.

---

**Created for Bryan Gunawan’s Portfolio** — blending personality, interactivity, and softness into a single welcoming experience 🌸
