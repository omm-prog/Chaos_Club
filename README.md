# Chaos Club 🎉 — Premium Mobile-First Party Game Web App

> **Tagline:** *“Your Secrets. Your Rules. Your Chaos.”*

Chaos Club is a modern, mobile-first local party game web application crafted for friends, couples, and groups. Players gather around one device, enter their names, choose one of six distinctive game zones, and play through provocative truths, hilarious dares, romantic chemistry prompts, deep confessions, and harmless party punishments.

---

## 🌟 Key Highlights & Features

- **📱 Mobile-First & Responsive:** Tailored for small phones, large smartphones, tablets, and desktop browsers with responsive layouts, safe area padding, and touch-optimized controls.
- **⚡ 100% Offline & PWA Installable:** Bundles all game content, prompts, styles, and a procedural Web Audio API synthesizer locally. Once cached by the Service Worker, gameplay works completely offline with zero server dependencies.
- **👥 Single-Device Local Multiplayer:** Pass-the-phone privacy screens (*"Pass the phone to [Player]"*) ensure turns remain secret until tapped to reveal.
- **🎭 Six Immersive Game Zones (312 Original Prompts):**
  1. **After Dark 🖤:** Romantic, intimate, mysterious, flirtatious, cinematic burgundy and wine red theme.
  2. **Unhinged 🤡:** Chaotic humor, absurdity, weird acting dilemmas, acid lime and electric purple theme.
  3. **Bestie Wars ⚔️:** Friendly rivalry, squad trivia, inside jokes, "Who Is Most Likely To" predictions, vibrant blue and purple theme.
  4. **Confession Room 🔐:** Honest truths, deep memories, personal growth, midnight blue and muted teal theme.
  5. **Savage Mode 🔥:** Fast-paced 5-second countdowns, reaction showdowns, harmless roasts, fiery orange and crimson theme.
  6. **Couple Chemistry ❤️:** Romance, compatibility, sweet dares, and couples quizzes in warm rose pink and champagne accents.
- **🃏 Random Punishment System:** 30 fun, harmless, consensual consequences for skipped prompts (with an unconditional option to decline without shame).
- **🔊 Procedural Web Audio API Sound Synthesizer:** Real-time synthesis for clicks, card whooshes, triumphant chimes, warning pulses, and ambient drones with zero external audio assets to load.
- **📳 Mobile Haptics:** Tactile vibrations on supported mobile devices for taps, ticks, and completions.
- **💾 Local Persistence & Session Recovery:**
  - Auto-saves party progress turn-by-turn so unexpected refreshes never lose progress.
  - Saved Player Groups (*"Weekend Crew"*, *"Date Night"*).
  - Sound, ambient, and reduced-motion preferences.
  - Safe parsing and recovery from corrupted storage.

---

## 🛠️ Technology Stack

- **Framework:** React 19 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **State Management:** Zustand
- **Storage:** LocalStorage with safe fallbacks and schema validation
- **PWA & Offline:** `vite-plugin-pwa` with Workbox Service Worker caching
- **Celebrations:** `canvas-confetti`
- **Audio:** Web Audio API Procedural Synthesizer
- **Testing:** Node.js native test runner (`node:test`, `node:assert`) + `tsx`

---

## 📂 Project Structure

```
chaos-club/
├── public/                    # PWA icons, favicon, manifest assets
│   ├── favicon.svg            # Glowing custom Chaos Club emblem
│   ├── pwa-192x192.png        # PWA 192x192 icon
│   ├── pwa-512x512.png        # PWA 512x512 icon
│   └── apple-touch-icon.png   # iOS home screen icon
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── PromptCard.tsx     # Themed prompt card with flip/slide animation
│   │   │   ├── PunishmentCard.tsx # Random punishment reveal modal
│   │   │   └── ZoneCard.tsx       # Interactive card for each game zone
│   │   ├── common/
│   │   │   ├── Button.tsx         # Tactile button with audio/haptics
│   │   │   ├── Navbar.tsx         # Brand header with offline status indicator
│   │   │   ├── ParticleBackground.tsx # Zone-adaptive atmospheric lighting
│   │   │   └── PwaInstallPrompt.tsx   # Mobile install banner for PWA
│   │   └── game/
│   │       ├── PauseModal.tsx     # In-game pause menu with rules & restart
│   │       ├── PrivacyPassModal.tsx # Pass-the-phone privacy veil
│   │       └── TimerBar.tsx       # Dynamic countdown bar with color shifts
│   ├── data/
│   │   ├── punishments.ts         # 30 harmless party consequences
│   │   └── zones/                 # 52 prompts per zone (312 total)
│   │       ├── after-dark.ts
│   │       ├── unhinged.ts
│   │       ├── bestie-wars.ts
│   │       ├── confession-room.ts
│   │       ├── savage-mode.ts
│   │       ├── couple-chemistry.ts
│   │       └── index.ts
│   ├── pages/
│   │   ├── SplashPage.tsx         # Entry landing with branding & quick start
│   │   ├── HomePage.tsx           # Hub with active session resume & 6 zones
│   │   ├── ZoneDetailPage.tsx     # Zone rules, categories, sample shuffler
│   │   ├── SetupPage.tsx          # Party configuration, players, saved groups
│   │   ├── GamePage.tsx           # Active turn loop, timer, and prompt reveal
│   │   ├── ResultsPage.tsx        # Post-game summary, accolades & share
│   │   ├── SettingsModal.tsx      # Audio, haptics, saved groups, data reset
│   │   └── RulesModal.tsx         # Party code of conduct & safety pledge
│   ├── services/
│   │   ├── audio.ts               # Web Audio API synthesizer
│   │   ├── haptics.ts             # Mobile vibration API service
│   │   └── storage.ts             # Safe LocalStorage persistence
│   ├── store/
│   │   └── gameStore.ts           # Turn manager, scoring, and session lifecycle
│   ├── types/
│   │   └── game.ts                # Shared TypeScript models
│   ├── App.tsx                    # Top-level view state coordinator
│   ├── index.css                  # Tailwind CSS v4 & theme tokens
│   └── main.tsx                   # React root mount
├── tests/
│   └── game-engine.test.ts        # Automated unit & integration test suite
├── vite.config.ts                 # Vite, Tailwind, & VitePWA config
├── package.json
└── tsconfig.app.json
```

---

## 🚀 Getting Started

### 1. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 2. Development Mode
Start the Vite local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Running Automated Tests
Run the comprehensive test suite verifying the game engine, turn rotations, prompt counts, and storage recovery:
```bash
npm test
```

### 4. Production Build
Compile and bundle the production assets with Workbox service worker precaching:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🚢 Deployment Guide

### Deploying to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or push the repository to GitHub.
2. In the Vercel dashboard, click **Add New Project**.
3. Set **Framework Preset** to `Vite`.
4. Ensure the **Build Command** is `npm run build` and the **Output Directory** is `dist`.
5. Deploy. All static assets and PWA service workers will be cached automatically on Vercel's Edge Network.

### Deploying to Netlify
1. Connect your repository to Netlify.
2. Set **Build Command:** `npm run build`.
3. Set **Publish Directory:** `dist`.
4. If using client-side sub-routes, Netlify redirects are supported out of the box.

---

## 🧪 Testing Checklist

- [x] **Add, edit, remove players:** Quick suggestions, custom names, and avatar assignment.
- [x] **Party validation:** Requires at least 1-2 players to start.
- [x] **Turn rotation fairness:** Cycles in order and preserves fairness.
- [x] **Round progression:** Round advances cleanly after all players complete a turn.
- [x] **Prompt selection:** Prompts match the selected zone and categories.
- [x] **No prompt repeats:** Session tracks `usedPromptIds` to prevent repeats.
- [x] **Pass the Phone privacy modal:** Obscures turn until active player taps to reveal.
- [x] **Timer control:** Configurable durations (Off, 15s, 30s, 45s, 60s) with audio cues.
- [x] **Random Punishments:** Optional 30 harmless consequences for skipped prompts.
- [x] **Results & Superlatives:** Summarizes completion rate, ranks players, and generates shareable text.
- [x] **Session Recovery:** Auto-saves progress; "Resume Party" banner restores exact state.
- [x] **Corrupted Storage Recovery:** Handles invalid JSON gracefully without breaking.
- [x] **PWA & Offline:** Service worker generates Workbox precache for all scripts, styles, and assets.
- [x] **Audio & Haptics:** Zero-latency Web Audio API procedural sounds with independent mute controls.

---

## 📜 Official Safety Pledge

> *“Fun is mandatory, pressure is forbidden.”*
>
> In Chaos Club, players can pass any prompt or decline any punishment at any time with zero judgment, pressure, or shame.
