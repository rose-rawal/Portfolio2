# Rose Rawal — Portfolio

The personal site of **Rose Rawal**, a software developer based in Kathmandu, Nepal.
It is a four-page portfolio for client and enterprise work, personal projects and
contact details — built as a small design system rather than a template.

**Live at [roserawal.com.np](https://roserawal.com.np).**

Live sections: **Home**, **About**, **Work**, **Contact**.

---

## What's in here

- **3D hero** — a cat model rendered with three.js that bobs and leans toward the
  pointer.
- **Page transitions** — curtain wipes and a preloader between routes.
- **Light / dark mode** — persisted in `localStorage`, applied before first paint so
  there is no flash.
- **Organic photo masks** — portraits clipped to a hand-built SVG blob that wriggles
  softly on hover, easing in and out of the rest shape.
- **Lo-fi player** — three tracks, cross-faded, auto-advancing playlist, state persisted.
- **Tactile click sound** — a short mechanical key press on primary pointer presses,
  synthesised through Web Audio (alternating samples, slight pitch variation).
- **Smooth scrolling** — Lenis, with route-aware scroll resets.
- **Responsive** — side-by-side sections on desktop; everything stacks cleanly on
  tablet and phone.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build tool | Create React App (`react-scripts` 5) |
| Routing | `react-router-dom` 6 |
| Motion | `framer-motion` + CSS |
| 3D | `three`, `@react-three/fiber`, `@react-three/drei` |
| Smooth scroll | `lenis` |
| Styling | Hand-written CSS (`src/index.css`, `src/App.css`) — no UI framework |
| Type | Playfair Display + Inter (Google Fonts) |

## Getting started

Requirements: **Node.js 18+** and npm.

```bash
# install dependencies
npm install

# run the dev server on http://localhost:3000
npm start

# production build into ./build
npm run build

# run the test runner (CRA / Jest)
npm test
```

The build output in `build/` is a static site — any static host will serve it, but it
needs an SPA fallback so client-side routes resolve.

Useful query flags while developing or reviewing:

| Flag | Effect |
| --- | --- |
| `?nopreload` | Skips the intro preloader |
| `?y=1200` | Jumps to a scroll offset after mount |

## Deployment

**Netlify** is the intended host — [`netlify.toml`](./netlify.toml) already sets:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

A [`vercel.json`](./vercel.json) rewrite is included as well, so the same build works
on Vercel without further configuration.

## Project structure

```
src/
├── App.tsx                # shell: routing, colour mode, preloader, click sound
├── data/portfolio.ts      # all copy and content — the file to edit
├── pages/                 # Home, About, Work, Contact
├── sections/              # Home sections (Hero, AboutSection, Expertise, SelectedWork…)
├── layout/                # Header, Footer, MenuOverlay, Preloader, Curtain,
│                          # SmoothScroll, Cursor, CatLayer, SoundToggle
├── components/            # ui.tsx (blob photo, parallax image, reveals…), icons
├── lib/                   # click sound engine, smooth-scroll singleton
├── model/cat/             # three.js scene for the cat
└── assets/                # portrait photographs
public/
├── cat_dispenser.glb      # 3D model
├── media/proj/            # project imagery
├── media/sfx/             # click-sound samples
└── music/                 # lo-fi tracks
```

### Editing content

Almost everything is data-driven. `src/data/portfolio.ts` holds the profile, contact
details, experience, skills, expertise cards, hosting platforms, project lists and the
footer credits. Projects are split into:

- `professional` — client and enterprise work, with an `nda` flag for the pieces that
  cannot show real screens (those carry open-source imagery instead and an “Under NDA”
  chip).
- `projects` — personal builds, numbered after the professional set.

Adding an entry updates the home page, the work page and the “next project” call to
action automatically.

## Assets and licences

Third-party assets are credited in the site footer (`credits` in
`src/data/portfolio.ts`) and are used under these licences:

- **Cat dispenser 3D model** — LeafChan, CC BY 4.0, via Sketchfab.
- **POS terminal photograph** — VulcanSphere, CC BY 4.0, via Wikimedia Commons.
- **Project photography** — CC0 (public domain) images from Wikimedia Commons used in
  place of screens for NDA work.
- **Lo-fi tracks** — CC0 recordings (OpenGameArt contributors).
- **Click sound** — cut from a CC0 mechanical-keyboard recording (Dustin Davis,
  Wikimedia Commons).
- **Fonts** — Playfair Display and Inter, SIL Open Font License, served by Google Fonts.

## Licence

The site design, copy and photographs are © Rose Rawal. The code is published for
reference — please don't republish the portfolio content as your own.
