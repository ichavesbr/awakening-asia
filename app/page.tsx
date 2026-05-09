"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ─── FadeIn ───────────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}>
      {children}
    </div>
  )
}

// ─── ParallaxImage ────────────────────────────────────────────────────────────
function ParallaxImage({
  src,
  alt,
  sizes,
  speed = 0.3,
  imgClassName = "",
}: {
  src: string
  alt: string
  sizes: string
  speed?: number
  imgClassName?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calc = () => {
      if (!containerRef.current || !innerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // How far is the centre of the element from centre of viewport
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      innerRef.current.style.transform = `translateY(${offset * speed}px)`
    }
    calc()
    window.addEventListener("scroll", calc, { passive: true })
    window.addEventListener("resize", calc, { passive: true })
    return () => {
      window.removeEventListener("scroll", calc)
      window.removeEventListener("resize", calc)
    }
  }, [speed])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        ref={innerRef}
        style={{
          position: "absolute",
          // Extra 40% top/bottom = 180% total height → plenty of room to drift
          top: "-40%",
          bottom: "-40%",
          left: 0,
          right: 0,
          willChange: "transform",
        }}>
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${imgClassName}`} />
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "2019", label: "Founded" },
  { value: "Tokyo", label: "Base" },
  { value: "8+", label: "Nations Reached" },
  { value: "300+", label: "Lives Changed" },
]

const NEXT_EVENT = {
  label: "Conference",
  title: "Awakening Asia Summit 2025",
  date: "2025-08-15",
  displayDate: "August 15–17, 2025",
  location: "Shibuya Stream Hall · Tokyo",
}

const VISION_PREVIEW = {
  label: "Our Calling",
  headline: ["The harvest", "is here."],
  body: "God is raising up a new generation of apostolic leaders across Asia. Japan will serve as a pivotal gateway for the greatest revival this continent has ever seen.",
  image: "/stadium.png",
}

// ─── Countdown ────────────────────────────────────────────────────────────────
function Countdown({ targetDate }: { targetDate: string }) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    function calc() {
      const ms = new Date(targetDate).getTime() - Date.now()
      if (ms <= 0) return setDiff({ days: 0, hours: 0, minutes: 0 })
      const s = Math.floor(ms / 1000)
      setDiff({
        days: Math.floor(s / 86400),
        hours: Math.floor((s % 86400) / 3600),
        minutes: Math.floor((s % 3600) / 60),
      })
    }
    calc()
    const id = setInterval(calc, 60_000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { label: "Days", value: diff.days },
    { label: "Hours", value: diff.hours },
    { label: "Min", value: diff.minutes },
  ]

  return (
    <div className="flex items-center gap-3">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-start gap-3">
          <div className="text-center">
            <div className="font-serif text-2xl text-gold-400 leading-none tabular-nums">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-stone-600 text-[0.5rem] tracking-[0.2em] uppercase mt-0.5">{label}</div>
          </div>
          {i < 2 && <span className="text-gold-600/30 text-xl font-light self-start">:</span>}
        </div>
      ))}
    </div>
  )
}

// ─── Arrow Icon ───────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden">
        {/* ── Layer 0 (furthest): static noise texture ── */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* ── Layer 1: large watermark ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-serif uppercase tracking-[0.35em] text-gold-400 leading-none"
            style={{ fontSize: "clamp(5rem, 22vw, 20rem)", opacity: 0.04 }}>
            Asia
          </span>
        </div>

        {/* Radial gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(212,165,53,0.08) 0%, transparent 70%)",
          }}
        />

        {/* ── Crosshair lines ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-px h-96 bg-linear-to-b from-transparent via-gold-600/25 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="h-px w-96 bg-linear-to-r from-transparent via-gold-600/25 to-transparent" />
        </div>

        {/* ── Corner brackets ── */}
        <div className="absolute pointer-events-none" style={{ top: "5rem", left: 0, right: 0 }}>
          <div className="absolute left-6 md:left-12 w-16 h-16 border-l border-t border-gold-600/30" />
          <div className="absolute right-6 md:right-12 w-16 h-16 border-r border-t border-gold-600/30" />
        </div>
        <div className="absolute pointer-events-none" style={{ bottom: "2.5rem", left: 0, right: 0 }}>
          <div className="absolute left-6 md:left-12 w-16 h-16 border-l border-b border-gold-600/30" />
          <div className="absolute right-6 md:right-12 w-16 h-16 border-r border-b border-gold-600/30" />
        </div>

        <div className="relative text-center max-w-5xl px-6 flex flex-col items-center gap-8">
          <p className="section-label">Tokyo, Japan · Est. 2019</p>

          <h1 className="font-serif text-[clamp(3.5rem,12vw,9rem)] text-stone-100 leading-[0.9] font-light tracking-tight">
            Asia is
            <br />
            <em className="text-gold-400 italic">Awakening</em>
          </h1>

          <p className="text-stone-500 text-sm md:text-base font-light max-w-md leading-relaxed">
            A movement of worship, prayer, and apostolic mission — bringing the Kingdom of God to the nations of Asia,
            starting from Tokyo.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/about"
              className="px-8 py-3.5 bg-gold-500 text-dark-900 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-400">
              Our Story
            </Link>
            <Link
              href="/lives"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-dark-500 text-stone-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:border-gold-600 hover:text-gold-400">
              Watch Lives
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-stone-500 text-[0.55rem] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-stone-500 to-transparent" />
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────────────────────── */}
      <section className="border-y border-dark-600 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-dark-600">
          {STATS.map(({ value, label }, i) => (
            <FadeIn key={label} delay={i * 80} className="flex flex-col items-center py-4 gap-1">
              <span className="font-serif text-3xl md:text-4xl text-gold-400 font-light">{value}</span>
              <span className="text-stone-600 text-[0.6rem] tracking-[0.25em] uppercase">{label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── About Teaser ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 vision-section">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Image with parallax */}
          <FadeIn>
            <div className="relative">
              <div className="relative w-full aspect-5/6 border border-dark-600 overflow-hidden bg-dark-700">
                <Image
                  src="/ministry.png"
                  alt="Awakening Asia Ministry"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-dark-900/90 to-transparent px-6 py-5 z-10">
                  <p className="text-stone-400 text-[0.6rem] tracking-[0.28em] uppercase">Tokyo · Japan</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-gold-600/20 pointer-events-none" />
              <div className="absolute -top-5 -left-5 w-16 h-16 border border-gold-600/10 pointer-events-none" />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={150}>
            <div>
              <p className="section-label mb-6">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-6xl text-stone-100 leading-tight font-light mb-8">
                A mission
                <br />
                <em className="text-gold-400 italic">born in Tokyo</em>
              </h2>

              <div className="w-10 h-px bg-gold-500 mb-8" />

              <p className="text-stone-400 leading-relaxed font-light mb-5">
                Awakening Asia was launched by Masa and Esther Morishita in 2019, with the support of Ben Fitzgerald,
                founder of Awakening Europe. God has revealed that Japan will serve as a crucial turning point for a
                significant harvest across Asia.
              </p>
              <p className="text-stone-500 leading-relaxed font-light mb-10">
                We believe God is raising up a new generation of apostolic leaders — bold, Spirit-filled, and willing to
                go wherever He sends them.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-widest uppercase hover:gap-3 transition-all duration-200">
                Discover more
                <ArrowIcon />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Next Event ────────────────────────────────────────────────────── */}
      <section className="py-16 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="relative bg-dark-800 border border-dark-600 hover:border-gold-600/30 transition-colors duration-500 overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-gold-500/30" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-gold-500/30" />

              <div className="px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold-400 text-[0.58rem] tracking-[0.28em] uppercase">{NEXT_EVENT.label}</span>
                    <div className="h-px w-8 bg-gold-600/30" />
                    <span className="text-stone-600 text-[0.58rem] tracking-widest uppercase">Next Gathering</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl text-stone-100 font-light mb-3">{NEXT_EVENT.title}</h3>
                  <p className="text-stone-500 text-sm font-light">
                    {NEXT_EVENT.displayDate} · {NEXT_EVENT.location}
                  </p>
                </div>

                <div className="flex flex-col md:items-end gap-6">
                  <div>
                    <p className="text-stone-600 text-[0.58rem] tracking-widest uppercase mb-3">Starts In</p>
                    <Countdown targetDate={NEXT_EVENT.date} />
                  </div>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900">
                    View Events
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Vision Teaser ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 vision-section">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <FadeIn delay={100} className="order-2 md:order-1">
            <div>
              <p className="section-label mb-6">{VISION_PREVIEW.label}</p>
              <h2 className="font-serif text-5xl md:text-7xl text-stone-100 leading-none font-light mb-8">
                {VISION_PREVIEW.headline[0]}
                <br />
                <em className="text-gold-400 italic">{VISION_PREVIEW.headline[1]}</em>
              </h2>

              <div className="w-10 h-px bg-gold-500 mb-8" />

              <p className="text-stone-400 leading-relaxed font-light max-w-md mb-10">{VISION_PREVIEW.body}</p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-widest uppercase hover:gap-3 transition-all duration-200">
                Read our vision
                <ArrowIcon />
              </Link>
            </div>
          </FadeIn>

          {/* Image with parallax */}
          <FadeIn className="order-1 md:order-2">
            <div className="relative">
              <div className="relative w-full aspect-video border border-dark-600 overflow-hidden bg-dark-700">
                <Image
                  src={VISION_PREVIEW.image}
                  alt="Revival at the Stadium"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-900/30 z-10" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-gold-600/20 pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Scripture Parallax Banner ─────────────────────────────────────── */}
      <section className="relative h-[55vh] overflow-hidden flex items-center justify-center">
        <ParallaxImage src="/leaders.png" alt="Leaders gathering" sizes="100vw" speed={0.4} />
        <div className="absolute inset-0 bg-dark-900/40 z-10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-dark-900 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-dark-900 to-transparent z-10" />
        <FadeIn className="relative z-20 text-center max-w-3xl px-6">
          <div>
            <p className="section-label mb-8">Scripture</p>
            <blockquote className="font-serif text-3xl md:text-5xl text-stone-100 font-light leading-tight italic mb-6">
              &ldquo;Ask of me, and I will give you the nations as your inheritance, and the ends of the earth as your
              possession.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-gold-600/40" />
              <p className="text-gold-500 text-[0.65rem] tracking-[0.3em] uppercase">Psalm 2:8</p>
              <div className="h-px w-8 bg-gold-600/40" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Pastors Strip ─────────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="section-label mb-4">Leadership</p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">
                Meet our <em className="text-gold-400">Founders</em>
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-stone-500 text-xs tracking-widest uppercase hover:text-gold-400 transition-colors duration-200 self-start md:self-auto">
              Full team
              <ArrowIcon />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Masamitsu Morishita",
                role: "Founder & Senior Pastor",
                image: "/senior-pastor-masamitsu.png",
                quote: "Born in Tokyo, called to ignite a revival that will shake the nations.",
              },
              {
                name: "Esther Morishita",
                role: "Founder & Senior Pastor",
                image: "/senior-pastor-esther.png",
                quote: "From China to the nations — carrying God's fire wherever He sends.",
              },
            ].map((pastor, i) => (
              <FadeIn key={pastor.name} delay={i * 120}>
                <div className="group pastor-card overflow-hidden">
                  <div className="relative w-full aspect-video bg-dark-700 overflow-hidden">
                    <Image
                      src={pastor.image}
                      alt={pastor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-900/80 via-dark-900/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl text-stone-100 font-light">{pastor.name}</h3>
                      <p className="section-label mt-1">{pastor.role}</p>
                    </div>
                  </div>
                  <div className="p-6 border-t border-dark-600">
                    <p className="text-stone-500 text-sm font-light italic font-serif leading-relaxed">
                      &ldquo;{pastor.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Watch Section ─────────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-2xl">
            <p className="section-label mb-6">YouTube · Live & Teachings</p>
            <h2 className="font-serif text-4xl md:text-6xl text-stone-100 leading-tight font-light mb-8">
              Watch &amp;
              <br />
              <em className="text-gold-400 italic">Be Transformed</em>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed mb-10 max-w-sm">
              Weekly teachings, worship nights, and live services — all available on our YouTube channel and right here
              on the site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/lives"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gold-500 text-dark-900 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-400">
                Watch Now
                <ArrowIcon />
              </Link>
              <a
                href="https://www.youtube.com/@AwakeningAsiaTV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-dark-500 text-stone-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:border-gold-600 hover:text-gold-400">
                Subscribe
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="relative border border-dark-600 bg-dark-800 px-8 py-20 md:py-28 text-center overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-l border-t border-gold-600/25" />
              <div className="absolute top-0 right-0 w-10 h-10 border-r border-t border-gold-600/25" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-l border-b border-gold-600/25" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-gold-600/25" />

              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,165,53,0.05) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <p className="section-label mb-6">Join the Movement</p>
                <h2 className="font-serif text-4xl md:text-6xl text-stone-100 font-light mb-6 leading-tight">
                  Are you ready to
                  <br />
                  <em className="text-gold-400 italic">answer the call?</em>
                </h2>
                <p className="text-stone-500 font-light max-w-md mx-auto mb-12 leading-relaxed">
                  Whether you feel called to pray, give, serve, or go — there is a place for you in what God is building
                  in Asia.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-gold-500 text-dark-900 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-400">
                    Get Connected
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-10 py-4 border border-dark-500 text-stone-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:border-gold-600 hover:text-gold-400">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
