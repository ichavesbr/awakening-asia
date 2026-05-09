"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────
const RECENT_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "The Fire of Revival — Sunday Service",
    date: "April 27, 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Building True Identity in Christ",
    date: "April 20, 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Worship Night — Presence of God",
    date: "April 13, 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Apostolic Leadership in Asia",
    date: "April 6, 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Intercession — Praying for Japan",
    date: "March 30, 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Kingdom Culture & the Gospel",
    date: "March 23, 2025",
  },
]

const RECENT_LIVES = [
  {
    id: "dQw4w9WgXcQ",
    title: "Sunday Gathering — Live from Tokyo",
    date: "April 27, 2025",
    duration: "1h 42min",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Revival Night Live",
    date: "April 18, 2025",
    duration: "2h 15min",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Prayer & Worship Stream",
    date: "April 11, 2025",
    duration: "58min",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Mid-Week Service — Live",
    date: "April 2, 2025",
    duration: "1h 10min",
  },
]

// ─── Icons ────────────────────────────────────────────────────────────────────
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface Video {
  id: string
  title: string
  date: string
}

interface Live extends Video {
  duration: string
}

// ─── Get videos functions ────────────────────────────────────────────────────────────────────
async function getLastestLives() {
  try {
    const urlBase = "https://www.googleapis.com/youtube/v3/search?"
    const urlQueries = `key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=snippet&order=date&maxResults=4&type=video&eventType=completed`
    const res = await fetch(urlBase + urlQueries)

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)

    const data = await res.json()

    return data.items
  } catch (error) {
    console.log(error)
    return []
  }
}

async function getLastestVideos() {
  try {
    const urlBase = "https://www.googleapis.com/youtube/v3/search?"
    const urlQueries = `key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=snippet&order=date&maxResults=8&type=video`
    const res = await fetch(urlBase + urlQueries)

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)

    const data = await res.json()

    return data.items
  } catch (error) {
    console.log(error)
    return []
  }
}

// ─── Video Card ───────────────────────────────────────────────────────────────
function VideoCard({ video }) {
  const id = video.id.videoId
  const title = video.snippet.title
  const date = video.snippet.publishedAt

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-dark-800 border border-dark-600 hover:border-gold-600 transition-colors duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-dark-700">
        <Image
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-gold-400">
            <PlayIcon />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg text-stone-100 font-light leading-snug mb-2 group-hover:text-gold-300 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-stone-600 text-xs tracking-widest uppercase font-light mt-auto">{date}</p>
      </div>
    </a>
  )
}

// ─── Live Card ────────────────────────────────────────────────────────────────
function LiveCard({ live }) {
  const id = live.id.videoId
  const title = live.snippet.title
  const date = live.snippet.publishedAt

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-dark-800 border border-dark-600 hover:border-gold-600 transition-colors duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-dark-700">
        <Image
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-gold-400">
            <PlayIcon />
          </div>
        </div>
        {/* Duration */}
        <span className="absolute bottom-3 right-3 bg-dark-900/85 text-stone-300 text-[0.65rem] tracking-wide px-2 py-0.5">
          {/* {duration} */}
          {/* ARRUMAR AGORA */}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg text-stone-100 font-light leading-snug mb-2 group-hover:text-gold-300 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-stone-600 text-xs tracking-widest uppercase font-light mt-auto">{date}</p>
      </div>
    </a>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Lives() {
  const [videos, setVideos] = useState([])
  const [lives, setLives] = useState([])

  useEffect(() => {
    async function fetchData() {
      const dataVideos = await getLastestVideos()
      const dataLives = await getLastestLives()

      setVideos(dataVideos)
      setLives(dataLives)
    }

    fetchData()
  }, [])

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden">
        {/* SVG texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Vertical gold line */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-72 bg-linear-to-b from-transparent via-gold-600/15 to-transparent" />
        </div>
        {/* Horizontal gold line */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-px w-72 bg-linear-to-r from-transparent via-gold-600/15 to-transparent" />
        </div>

        {/* Corner bracket decorators */}
        <div className="absolute top-20 left-8 w-14 h-14 border-l border-t border-gold-600/20" />
        <div className="absolute top-20 right-8 w-14 h-14 border-r border-t border-gold-600/20" />
        <div className="absolute bottom-8 left-8 w-14 h-14 border-l border-b border-gold-600/20" />
        <div className="absolute bottom-8 right-8 w-14 h-14 border-r border-b border-gold-600/20" />

        {/* Content */}
        <div className="relative text-center max-w-3xl px-6">
          <p className="section-label mb-8">YouTube · Teachings &amp; Worship</p>

          <h1 className="font-serif text-6xl md:text-8xl text-stone-100 leading-none mb-6 font-light">
            Watch &amp;
            <br />
            <em className="text-gold-400 italic">Worship</em>
          </h1>

          <p className="text-stone-600 text-xs tracking-[0.3em] uppercase mb-10">Videos · Livestreams · Teachings</p>

          <a
            href="https://www.youtube.com/AwakeningAsiaTV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900">
            <YouTubeIcon />
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* ── Recent Videos ────────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Latest Content</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">
              Recent <em className="text-gold-400">Videos</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id.videoId + video.snippet.title}
                className={`h-full${index >= 4 ? " hidden md:block" : ""}`}>
                <VideoCard video={video} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/AwakeningAsiaTV/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-500 text-xs tracking-widest uppercase hover:text-gold-400 transition-colors duration-200">
              View all videos
              <span className="text-gold-600">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Recent Livestreams ───────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Livestreams</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">
              Recent <em className="text-gold-400">Lives</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {lives.map(live => (
              <div key={live.id.videoId + live.snippet.title} className="h-full">
                <LiveCard live={live} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/AwakeningAsiaTV/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-500 text-xs tracking-widest uppercase hover:text-gold-400 transition-colors duration-200">
              View all livestreams
              <span className="text-gold-600">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
