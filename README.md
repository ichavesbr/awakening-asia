# Awakening Asia

Institutional website for Awakening Asia, a church based in Ueno, Japan.

Complete rebuild of the previous version, which was a basic Next.js site. This new version is a fully redesigned, production-ready website built from scratch.

The rebuild focused on performance, maintainability, responsive design, and content accessibility. It centralizes the church's online presence with information about the ministry, events, livestreams, and media content through direct integration with the YouTube Data API.

---

## Stack

| Tool | Version |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Validation | Zod v4 |
| Testing | Vitest |
| Language | TypeScript |
| Analytics | Vercel Analytics + Speed Insights |

---

## Pages

### `/` — Home

- Animated hero section with parallax image
- Scroll-triggered `FadeIn` animations via `IntersectionObserver`
- Sections for vision, ministry overview, and call-to-action links

### `/about`

- Modular sections: `VisionSection`, `PastorsSection`, `StatementOfFaith`, `AboutSection`

### `/contact`

- Contact form with client-side Zod validation
- Fields: name, email, subject, message — all with inline error feedback

### `/events`

- Upcoming events listing with date, time, location, venue, and tags

### `/lives`

- Fetches and displays recent YouTube videos and completed livestreams via YouTube Data API v3
- Separate grids for `VideoCard` and `LiveCard`

### `404`

- Custom not-found page

---

## YouTube Integration

Centralized fetch layer at `app/lib/youtube.ts` using YouTube Data API v3:

- `getLatestVideos()` — 8 most recent uploads
- `getLatestLives()` — 4 most recent completed livestreams
- Caching via Next.js `cacheLife("hours")`
- Safe error handling — returns `[]` on any failure

---

## Environment Variables

Create a `.env.local` file based on `env-example`:

```env
API_KEY=key_here
CHANNEL_ID=key_here
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Tests

```bash
npm run test
```
