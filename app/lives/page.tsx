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
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Corner bracket decorators */}
        <div className="absolute top-14 left-8 w-14 h-14 border-l border-t border-gold-600/25" />
        <div className="absolute top-14 right-8 w-14 h-14 border-r border-t border-gold-600/25" />
        <div className="absolute bottom-14 left-8 w-14 h-14 border-l border-b border-gold-600/25" />
        <div className="absolute bottom-14 right-8 w-14 h-14 border-r border-b border-gold-600/25" />

        {/* Content */}
        <div className="relative text-center max-w-3xl px-6 py-20">
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
