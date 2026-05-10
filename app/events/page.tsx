"use client"

import { useEffect, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────
const UPCOMING_EVENTS = [
  {
    id: 1,
    label: "Conference",
    title: "Awakening Asia Summit 2026",
    subtitle: "A gathering of apostolic leaders across the continent",
    date: "2026-08-15",
    displayDate: "August 15-17",
    year: "2026",
    time: "10:00 AM",
    location: "Tokyo, Japan",
    venue: "Shibuya Stream Hall",
    description:
      "Three days of worship, prophetic ministry, and Kingdom alignment. Leaders, intercessors, and believers from across Asia will gather to hear what God is saying to this generation.",
    featured: true,
    tags: ["Worship", "Teaching", "Leadership"],
  },
  {
    id: 2,
    label: "Worship Night",
    title: "Fire & Glory — Worship Night",
    subtitle: "An evening of encounter and intercession",
    date: "2026-06-20",
    displayDate: "June 20",
    year: "2026",
    time: "7:00 PM",
    location: "Tokyo, Japan",
    venue: "Shinjuku Chapel",
    description:
      "Come and encounter the presence of God through live worship and intercession for the nations of Asia.",
    featured: false,
    tags: ["Worship", "Prayer"],
  },
  {
    id: 3,
    label: "School",
    title: "School of the Prophets — Cohort III",
    subtitle: "Equipping the prophetic voice of this generation",
    date: "2026-07-05",
    displayDate: "July 5–6",
    year: "2026",
    time: "9:00 AM",
    location: "Online & Tokyo",
    venue: "Hybrid",
    description: "A two-day intensive training in prophetic ministry, intercession, and hearing the voice of God.",
    featured: false,
    tags: ["Training", "Prophetic"],
  },
  {
    id: 4,
    label: "Outreach",
    title: "Streets of Harajuku — Gospel Mission",
    subtitle: "Taking the Gospel to the streets",
    date: "2026-07-19",
    displayDate: "July 19",
    year: "2026",
    time: "2:00 PM",
    location: "Tokyo, Japan",
    venue: "Harajuku Station",
    description: "Join us as we take worship and the good news to the streets of Harajuku. All are welcome.",
    featured: false,
    tags: ["Outreach", "Evangelism"],
  },
]

const PAST_EVENTS = [
  {
    id: 10,
    label: "Conference",
    title: "Awakening Asia Summit 2024",
    location: "Osaka, Japan",
    displayDate: "September 2024",
    attendees: "300+",
  },
  {
    id: 11,
    label: "Worship Night",
    title: "Pentecost Gathering — Fire Night",
    location: "Tokyo, Japan",
    displayDate: "May 2024",
    attendees: "180+",
  },
  {
    id: 12,
    label: "School",
    title: "School of the Prophets — Cohort II",
    location: "Online",
    displayDate: "March 2024",
    attendees: "90+",
  },
  {
    id: 13,
    label: "Outreach",
    title: "Cherry Blossom Gospel Campaign",
    location: "Ueno Park, Tokyo",
    displayDate: "April 2024",
    attendees: "60+",
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getDaysUntil(dateStr: string): number {
  const target = new Date(dateStr)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  target.setHours(0, 0, 0, 0)
  return Math.max(0, Math.round((target.getTime() - now.getTime()) / 86_400_000))
}

const TAG_COLORS: Record<string, string> = {
  Worship: "border-gold-600/40 text-gold-400",
  Teaching: "border-stone-600/40 text-stone-400",
  Leadership: "border-stone-600/40 text-stone-400",
  Prayer: "border-gold-600/40 text-gold-400",
  Training: "border-stone-600/40 text-stone-400",
  Prophetic: "border-gold-600/40 text-gold-400",
  Outreach: "border-stone-600/40 text-stone-400",
  Evangelism: "border-stone-600/40 text-stone-400",
}

// ─── Countdown ────────────────────────────────────────────────────────────────
function Countdown({ targetDate }: { targetDate: string }) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const ms = new Date(targetDate).getTime() - Date.now()
      if (ms <= 0) return setDiff({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      const s = Math.floor(ms / 1000)
      setDiff({
        days: Math.floor(s / 86400),
        hours: Math.floor((s % 86400) / 3600),
        minutes: Math.floor((s % 3600) / 60),
        seconds: s % 60,
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { label: "Days", value: diff.days },
    { label: "Hours", value: diff.hours },
    { label: "Min", value: diff.minutes },
    { label: "Sec", value: diff.seconds },
  ]

  return (
    <div className="flex items-center gap-4">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-start gap-4">
          <div className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-gold-400 leading-none tabular-nums">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-stone-600 text-[0.55rem] tracking-[0.25em] uppercase mt-1">{label}</div>
          </div>
          {i < 3 && <span className="text-gold-600/40 text-2xl font-light self-start mt-0.5">:</span>}
        </div>
      ))}
    </div>
  )
}

// ─── MapPinIcon ───────────────────────────────────────────────────────────────
function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-3.5 h-3.5 shrink-0"
      aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-3.5 h-3.5 shrink-0"
      aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-3.5 h-3.5 shrink-0"
      aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  )
}

// ─── Featured Event Card ──────────────────────────────────────────────────────
function FeaturedCard({ event }: { event: (typeof UPCOMING_EVENTS)[number] }) {
  const days = getDaysUntil(event.date)

  return (
    <div className="relative bg-dark-800 border border-gold-600/30 overflow-hidden">
      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gold-500/40" />
      <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold-500/40" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gold-500/40" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gold-500/40" />

      {/* Background cross-hair texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #e8bb55 0px, #e8bb55 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, #e8bb55 0px, #e8bb55 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="relative p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gold-400 text-[0.6rem] tracking-[0.3em] uppercase">{event.label}</span>
            <div className="flex-1 h-px bg-gold-600/20" />
            {days > 0 && (
              <span className="text-stone-500 text-[0.6rem] tracking-widest uppercase">
                {days} day{days !== 1 ? "s" : ""} to go
              </span>
            )}
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light leading-tight mb-3">
            {event.title}
          </h2>
          <p className="text-stone-500 text-sm font-light mb-6 leading-relaxed">{event.subtitle}</p>

          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2 text-stone-400 text-xs tracking-wide">
              <CalendarIcon />
              <span>
                {event.displayDate}, {event.year} · {event.time}
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-xs tracking-wide">
              <MapPinIcon />
              <span>
                {event.venue} — {event.location}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {event.tags.map(tag => (
              <span
                key={tag}
                className={`text-[0.6rem] tracking-[0.2em] uppercase border px-2.5 py-1 ${TAG_COLORS[tag] ?? "border-stone-600/40 text-stone-400"}`}>
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gold-500 text-dark-900 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-400">
            Register Now
            <span>→</span>
          </a>
        </div>

        {/* Right — countdown */}
        <div className="flex flex-col items-start md:items-end gap-8">
          <div className="w-full md:w-auto">
            <p className="section-label mb-5">Starts In</p>
            <Countdown targetDate={event.date} />
          </div>

          <div className="w-full border-t border-dark-600 pt-8">
            <p className="text-stone-600 text-xs leading-relaxed font-light max-w-sm md:text-right">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Event Row ────────────────────────────────────────────────────────────────
function EventRow({ event, index }: { event: (typeof UPCOMING_EVENTS)[number]; index: number }) {
  const days = getDaysUntil(event.date)

  return (
    <div className="group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start py-8 border-b border-dark-600 hover:border-gold-600/30 transition-colors duration-300">
      {/* Index / Date column */}
      <div className="flex flex-col items-center w-12">
        <span className="font-serif text-3xl text-gold-600/40 leading-none font-light">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="w-px flex-1 min-h-8 bg-dark-600 mt-3 group-hover:bg-gold-600/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="text-gold-400 text-[0.58rem] tracking-[0.28em] uppercase">{event.label}</span>
        </div>
        <h3 className="font-serif text-xl md:text-2xl text-stone-100 font-light leading-snug mb-2 group-hover:text-gold-300 transition-colors duration-200">
          {event.title}
        </h3>
        <div className="flex flex-wrap gap-x-5 gap-y-1 mb-3">
          <div className="flex items-center gap-1.5 text-stone-500 text-xs">
            <CalendarIcon />
            {event.displayDate}, {event.year} · {event.time}
          </div>
          <div className="flex items-center gap-1.5 text-stone-500 text-xs">
            <MapPinIcon />
            {event.location}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {event.tags.map(tag => (
            <span
              key={tag}
              className={`text-[0.55rem] tracking-[0.18em] uppercase border px-2 py-0.5 ${TAG_COLORS[tag] ?? "border-stone-600/40 text-stone-400"}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Days badge */}
      <div className="text-right shrink-0">
        {days > 0 ? (
          <div className="inline-flex flex-col items-center bg-dark-700 border border-dark-500 group-hover:border-gold-600/20 transition-colors duration-300 px-4 py-3">
            <span className="font-serif text-2xl text-stone-200 leading-none">{days}</span>
            <span className="text-stone-600 text-[0.5rem] tracking-widest uppercase mt-0.5">
              day{days !== 1 ? "s" : ""}
            </span>
          </div>
        ) : (
          <span className="text-[0.6rem] tracking-widest uppercase text-gold-400 border border-gold-600/30 px-3 py-1.5">
            Today
          </span>
        )}
      </div>
    </div>
  )
}

// ─── Past Event Row ───────────────────────────────────────────────────────────
function PastEventRow({ event }: { event: (typeof PAST_EVENTS)[number] }) {
  return (
    <div className="flex items-center justify-between py-5 border-b border-dark-700 opacity-60 hover:opacity-90 transition-opacity duration-200">
      <div className="flex items-center gap-5 min-w-0">
        <span className="text-stone-600 text-[0.58rem] tracking-[0.22em] uppercase shrink-0">{event.label}</span>
        <span className="w-px h-4 bg-dark-600 shrink-0" />
        <span className="font-serif text-stone-300 font-light truncate">{event.title}</span>
      </div>
      <div className="flex items-center gap-6 shrink-0 ml-4">
        <div className="hidden md:flex items-center gap-1.5 text-stone-600 text-xs">
          <MapPinIcon />
          {event.location}
        </div>
        <span className="text-stone-600 text-xs tracking-wide">{event.displayDate}</span>
        <span className="text-stone-600 text-[0.6rem] tracking-widest uppercase border border-dark-500 px-2 py-0.5">
          {event.attendees}
        </span>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EventsPage() {
  const featured = UPCOMING_EVENTS.find(e => e.featured)!
  const others = UPCOMING_EVENTS.filter(e => !e.featured)

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,165,53,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Corner brackets */}
        <div className="absolute top-14 left-8 w-14 h-14 border-l border-t border-gold-600/25" />
        <div className="absolute top-14 right-8 w-14 h-14 border-r border-t border-gold-600/25" />
        <div className="absolute bottom-14 left-8 w-14 h-14 border-l border-b border-gold-600/25" />
        <div className="absolute bottom-14 right-8 w-14 h-14 border-r border-b border-gold-600/25" />

        {/* Content */}
        <div className="relative text-center max-w-3xl px-6 py-20">
          <p className="section-label mb-8">Gatherings · Conferences · Outreach</p>

          <h1 className="font-serif text-6xl md:text-8xl text-stone-100 leading-none mb-6 font-light">
            Come &amp;
            <br />
            <em className="text-gold-400 italic">Encounter</em>
          </h1>

          <p className="text-stone-600 text-xs tracking-[0.3em] uppercase mb-4">Asia · 2026</p>
          <p className="text-stone-500 text-sm font-light max-w-md mx-auto leading-relaxed">
            Gatherings designed to shift atmospheres, release the Kingdom, and unite the body of Christ across the
            nations.
          </p>
        </div>
      </section>

      {/* ── Featured Event ─────────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Featured · Next Major Gathering</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">
              Don&apos;t <em className="text-gold-400">Miss It</em>
            </h2>
          </div>

          <FeaturedCard event={featured} />
        </div>
      </section>

      {/* ── Upcoming Events ───────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Schedule · 2026</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">
              Upcoming <em className="text-gold-400">Events</em>
            </h2>
          </div>

          <div>
            {others.map((event, i) => (
              <EventRow key={event.id} event={event} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-stone-500 text-xs tracking-widest uppercase hover:text-gold-400 transition-colors duration-200">
              Interested in hosting an event?
              <span className="text-gold-600">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Past Events ───────────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Archive</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">
              Past <em className="text-gold-400">Gatherings</em>
            </h2>
          </div>

          <div>
            {PAST_EVENTS.map(event => (
              <PastEventRow key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative border border-dark-600 bg-dark-800 px-8 py-16 text-center overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-gold-600/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-gold-600/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-gold-600/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-gold-600/30" />

            <p className="section-label mb-6">Stay Connected</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light mb-4">
              Never Miss a <em className="text-gold-400">Gathering</em>
            </h2>
            <p className="text-stone-500 text-sm font-light max-w-md mx-auto mb-10 leading-relaxed">
              Get notified about upcoming events, conferences, and worship nights directly in your inbox.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900">
              Get In Touch
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
