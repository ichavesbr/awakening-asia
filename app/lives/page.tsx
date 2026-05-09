import { getLatestLives, getLatestVideos } from "../lib/youtube"
import { VideoCard } from "@/components/VideoCard"
import { LiveCard } from "@/components/LiveCard"
import { YouTubeIcon } from "@/components/YouTubeIcon"
import { YoutubeItem } from "../lib/types"

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function Lives() {
  const videos = await getLatestVideos()
  const lives = await getLatestLives()

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
            {videos.map((video: YoutubeItem, index: number) => (
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
            {lives.map((live: YoutubeItem) => (
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
