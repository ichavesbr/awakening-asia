## Project

Modern institutional website developed for the Ueno-based church Awakening Asia.

The project was rebuilt from scratch with a focus on performance, maintainability, responsive design, and content accessibility. It centralizes the church’s online presence by providing information about the ministry, events, livestreams, and media content through direct integration with the YouTube Data API.

The website was designed with a component-based architecture using the Next.js App Router, emphasizing scalability, clean UI composition, and production-ready frontend practices.

## Overview

Complete rebuild of the Awakening Asia website from scratch. The previous version was a basic Next.js site. This new version is a fully redesigned, production-ready website with a modern stack, YouTube API integration, form validation, unit tests, and a componentized architecture.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Validation | Zod v4 |
| Testing | Vitest |
| Language | TypeScript |

## Pages

### `/` — Home
- Animated hero section with parallax image
- Scroll-triggered `FadeIn` animations via `IntersectionObserver`
- Sections for vision, ministry overview and call-to-action links

### `/about`
- Modular sections: `VisionSection`, `PastorsSection`, `StatementOfFaith`, `AboutSection`

### `/contact`
- Contact form with **client-side Zod validation**
- Fields: name, email, subject, message — all with inline error feedback

### `/events`
- Upcoming events listing with date, time, location, venue and tags

### `/lives`
- Fetches and displays recent YouTube videos and completed livestreams via YouTube Data API v3
- Separate grids for videos (`VideoCard`) and lives (`LiveCard`)

### `404`
- Custom not-found page

## YouTube Integration (`app/lib/youtube.ts`)

Centralized fetch layer for the YouTube Data API v3:

- `getLatestVideos()` — 8 most recent uploads
- `getLatestLives()` — 4 most recent completed livestreams
- ISR caching with `revalidate: 3600` (1 hour)
- Safe error handling — returns `[]` on any failure

Environment variables required (see `env-example`):
