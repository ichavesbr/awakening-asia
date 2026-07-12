export const metadata = { title: "Join Us | Awakening Asia Tokyo" }

const SERVICES = [
  {
    time: "11:00 - 12:30",
    label: "Morning Service",
    note: "Bilingual · Livestream Available",
  },
  {
    time: "14:00 - 15:30",
    label: "Afternoon Service",
    note: "Bilingual",
  },
]

const WHAT_TO_EXPECT = [
  {
    heading: "Worship",
    body: "Expect Spirit-filled worship in both Japanese and English, creating space for encounter with God.",
  },
  {
    heading: "The Word",
    body: "Practical, prophetic teaching rooted in Scripture — for every stage of your faith journey.",
  },
  {
    heading: "Community",
    body: "A warm, multicultural family where you are known, loved, and invited to belong.",
  },
]

export default function Join() {
  return (
    <main className="min-h-screen bg-dark-900">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,165,53,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Corner brackets */}
        <div className="absolute top-14 left-8 w-14 h-14 border-l border-t border-gold-600/25 pointer-events-none" />
        <div className="absolute top-14 right-8 w-14 h-14 border-r border-t border-gold-600/25 pointer-events-none" />
        <div className="absolute bottom-14 left-8 w-14 h-14 border-l border-b border-gold-600/25 pointer-events-none" />
        <div className="absolute bottom-14 right-8 w-14 h-14 border-r border-b border-gold-600/25 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="section-label mb-6">Tokyo, Japan · Every Sunday</p>
          <h1 className="font-serif text-6xl md:text-8xl text-stone-100 font-light leading-none mb-8">
            Join <em className="text-gold-400 italic">Us</em>
          </h1>
          <div className="w-10 h-px bg-gold-400 mx-auto mb-8" />
          <p className="text-stone-400 font-light text-lg leading-relaxed max-w-xl mx-auto">
            You are welcome here — whether you are exploring faith for the first time or looking for a church family to
            call home.
          </p>
        </div>
      </section>

      {/* ── Service Times ─────────────────────────────────────────────────── */}
      <section className="py-28 vision-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-16">
            {/* Left label */}
            <div className="md:w-48 shrink-0">
              <p className="section-label">Service Times</p>
              <div className="w-8 h-px bg-gold-600/40 mt-4" />
            </div>

            {/* Right content */}
            <div className="flex-1 space-y-8">
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 border-b border-dark-600 pb-8 last:border-0 last:pb-0">
                  <div className="font-serif text-4xl text-gold-400 font-light tabular-nums leading-none whitespace-nowrap">
                    {s.time}
                  </div>
                  <div>
                    <p className="text-stone-100 font-light text-lg">{s.label}</p>
                    <p className="text-stone-600 text-xs tracking-widest uppercase mt-1">{s.note}</p>
                  </div>
                </div>
              ))}

              {/* Notices */}
              <div className="mt-6 border-l-2 border-dark-600 pl-5 space-y-2">
                <p className="text-stone-600 text-sm font-light">
                  Service times are subject to change — please check our social media for updates.
                </p>
                <p className="text-stone-600 text-sm font-light">
                  Livestream may not be available on days when special events are held.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo + What to Expect ─────────────────────────────────────────── */}
      <section className="py-28 vision-section">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-4/5 border border-dark-600 overflow-hidden bg-dark-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ministry.png" alt="Awakening Asia congregation" className="w-full h-full object-cover" />
            </div>
            {/* Decorative offset borders */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold-600 opacity-30 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold-600 opacity-15 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="section-label mb-6">What to Expect</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light leading-tight mb-10">
              A place to <em className="text-gold-400 italic">encounter</em>
              <br />
              the living God
            </h2>
            <div className="space-y-8">
              {WHAT_TO_EXPECT.map((item, i) => (
                <div key={i} className="border-l-2 border-dark-600 pl-5">
                  <p className="text-stone-200 text-sm font-medium tracking-wide uppercase mb-1">{item.heading}</p>
                  <p className="text-stone-500 font-light leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Location & Map ────────────────────────────────────────────────── */}
      <section className="py-28 vision-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-4">Find Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light leading-tight">
              Our <em className="text-gold-400 italic">Location</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Address details */}
            <div className="space-y-8">
              <div>
                <p className="section-label mb-3">Address</p>
                <p className="text-stone-300 font-light leading-relaxed">Tokyo, Japan</p>
                <p className="text-stone-600 text-xs tracking-widest uppercase mt-1">
                  Exact address shared upon contact
                </p>
              </div>

              <div>
                <p className="section-label mb-3">Getting Here</p>
                <ul className="space-y-2 text-stone-500 font-light text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-0.5">—</span>
                    Accessible by Tokyo Metro
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-0.5">—</span>
                    Wheelchair accessible entrance available
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-0.5">—</span>
                    Children&apos;s ministry available during services
                  </li>
                </ul>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900">
                Contact Us for Directions
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Map */}
            <div className="relative border border-dark-600 overflow-hidden aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.319638307346!2d139.78158457574838!3d35.71835672793367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2a63a354cf%3A0xd90f3ae677b4d9e4!2sAwakening%20Tokyo!5e0!3m2!1sen!2sus!4v1783742019214!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                // ** referrerPolicy **
                // strict-origin-when-cross-origin (Recommended): Sends only your base domain (e.g., https://example.com/) to Google
                // no-referrer-when-downgrade (Legacy): Sends the entire URL (e.g., https://example.com/contact?user=123)
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
