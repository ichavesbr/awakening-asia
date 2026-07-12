export const metadata = { title: "Give | Awakening Asia Tokyo" }

const FINANCIAL_STATEMENTS = [
  {
    period: "2022 - 2023",
    links: [
      { lang: "English", href: "https://awakeningasia.org/wp-content/uploads/2026/03/Financial-summary-1st-year.pdf" },
      {
        lang: "Japanese",
        href: "https://awakeningasia.org/wp-content/uploads/2026/03/%E5%B9%B4%E9%96%93%E4%BC%9A%E8%A8%88%E5%A0%B1%E5%91%8A1%E6%9C%9F%E7%9B%AE.pdf",
      },
      {
        lang: "Chinese",
        href: "https://awakeningasia.org/wp-content/uploads/2026/03/%E5%B9%B4%E9%96%93%E4%BC%9A%E8%A8%88%E5%A0%B1%E5%91%8A1%E6%9C%9F%E7%9B%AE%E4%B8%AD%E6%96%87.pdf",
      },
    ],
  },
  {
    period: "2023 - 2024",
    links: [
      { lang: "English", href: "https://awakeningasia.org/wp-content/uploads/2026/03/Financial-summary-2nd-year.pdf" },
      {
        lang: "Japanese",
        href: "https://awakeningasia.org/wp-content/uploads/2026/03/%E5%B9%B4%E9%96%93%E4%BC%9A%E8%A8%88%E5%A0%B1%E5%91%8A2%E6%9C%9F%E7%9B%AE.pdf",
      },
      {
        lang: "Chinese",
        href: "https://awakeningasia.org/wp-content/uploads/2026/03/%E5%B9%B4%E9%96%93%E4%BC%9A%E8%A8%88%E5%A0%B1%E5%91%8A2%E6%9C%9F%E7%9B%AE%E4%B8%AD%E6%96%87.pdf",
      },
    ],
  },
  {
    period: "2024 - 2025",
    links: [
      { lang: "English", href: "https://awakeningasia.org/wp-content/uploads/2026/03/Financial-summary-3rd-year.pdf" },
      {
        lang: "Japanese",
        href: "https://awakeningasia.org/wp-content/uploads/2026/03/%E5%B9%B4%E9%96%93%E4%BC%9A%E8%A8%88%E5%A0%B1%E5%91%8A3%E6%9C%9F%E7%9B%AE.pdf",
      },
      {
        lang: "Chinese",
        href: "https://awakeningasia.org/wp-content/uploads/2026/03/%E5%B9%B4%E9%96%93%E4%BC%9A%E8%A8%88%E5%A0%B1%E5%91%8A3%E6%9C%9F%E7%9B%AE%E4%B8%AD%E6%96%87.pdf",
      },
    ],
  },
]

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

export default function Donate() {
  return (
    <main className="min-h-screen bg-dark-900">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,165,53,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-14 left-8 w-14 h-14 border-l border-t border-gold-600/25 pointer-events-none" />
        <div className="absolute top-14 right-8 w-14 h-14 border-r border-t border-gold-600/25 pointer-events-none" />
        <div className="absolute bottom-14 left-8 w-14 h-14 border-l border-b border-gold-600/25 pointer-events-none" />
        <div className="absolute bottom-14 right-8 w-14 h-14 border-r border-b border-gold-600/25 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="section-label mb-6">Support the Mission</p>
          <h1 className="font-serif text-6xl md:text-8xl text-stone-100 font-light leading-none mb-8">
            Give <em className="text-gold-400 italic">Today</em>
          </h1>
          <div className="w-10 h-px bg-gold-400 mx-auto mb-8" />
          <p className="text-stone-400 font-light text-lg leading-relaxed max-w-xl mx-auto">
            Your generosity fuels the harvest across Asia. Every gift — large or small — advances the Kingdom and equips
            the next generation of leaders.
          </p>
        </div>
      </section>

      {/* ── Giving Options ────────────────────────────────────────────────── */}
      <section className="py-28 vision-section">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label mb-12 text-center">Choose a Method</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* ── Card ── */}
            <div className="group border border-dark-600 bg-dark-800 p-8 flex flex-col gap-6 transition-colors duration-300 hover:border-gold-600/50">
              <div>
                <div className="w-8 h-px bg-gold-400 mb-5" />
                <h2 className="font-serif text-2xl text-stone-100 font-light">Credit / Debit Card</h2>
              </div>

              <ul className="space-y-2 text-stone-500 font-light text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 mt-px">—</span>
                  One-time or recurring donations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 mt-px">—</span>
                  Visa, Mastercard, Discover, Amex
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 mt-px">—</span>
                  Google Pay supported
                </li>
              </ul>

              <a
                href="https://tithe.ly/give_new/www/#/tithely/give-one-time/2886012"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 px-6 py-3 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900 mt-auto">
                Give with Card
                <ArrowIcon />
              </a>
            </div>

            {/* ── PayPal ── */}
            <div className="group border border-dark-600 bg-dark-800 p-8 flex flex-col gap-6 transition-colors duration-300 hover:border-gold-600/50">
              <div>
                <div className="w-8 h-px bg-gold-400 mb-5" />
                <h2 className="font-serif text-2xl text-stone-100 font-light">PayPal</h2>
              </div>

              <ul className="space-y-2 text-stone-500 font-light text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 mt-px">—</span>
                  JCB, Visa, Mastercard, Discover, Amex
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 mt-px">—</span>
                  Pay with your PayPal balance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 mt-px">—</span>
                  Accepted worldwide
                </li>
              </ul>

              <a
                href="https://www.paypal.com/paypalme/awakeningasia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 px-6 py-3 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900 mt-auto">
                Give with PayPal
                <ArrowIcon />
              </a>
            </div>

            {/* ── Bank Transfer ── */}
            <div className="border border-dark-600 bg-dark-800 p-8 flex flex-col gap-6">
              <div>
                <div className="w-8 h-px bg-gold-400 mb-5" />
                <h2 className="font-serif text-2xl text-stone-100 font-light">Bank Transfer</h2>
              </div>

              <div className="flex-1 space-y-3">
                {[
                  ["Bank", "住信SBIネット銀行 (0038)"],
                  ["Branch", "法人第一支店 (106)"],
                  ["Type", "普通 (Savings)"],
                  ["Account No.", "1956105"],
                  ["Account Name", "シャ）アウェイクニングアジア"],
                ].map(([label, value]) => (
                  <div key={label} className=" border-dark-600 last:border-0 last:pb-0">
                    <p className="text-stone-600 text-[0.6rem] tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="text-stone-300 font-light text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Security Notice ── */}
          <div className="w-full mt-6 border border-gold-600/30 bg-dark-800 p-5 flex items-center gap-5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gold-500 shrink-0" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 6Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-stone-400 font-light text-xs leading-relaxed">
              We only accept donations through this official website or in person. We never solicit donations by phone,
              SMS, or unsolicited email. Verify you are on <span className="text-stone-300">awakeningasia.org</span>{" "}
              before entering payment details, and confirm any unfamiliar request directly with our office.
            </p>
          </div>
        </div>
      </section>

      {/* ── Financial Transparency ── */}
      <section className="py-28 vision-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-4">Transparency</p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light leading-tight">
              Financial <em className="text-gold-400 italic">Statement</em>
            </h2>
            <p className="mt-6 text-stone-500 font-light max-w-lg leading-relaxed text-sm">
              We are committed to full financial transparency. Annual summaries are available below in English,
              Japanese, and Chinese.
            </p>
          </div>

          <div className="space-y-0">
            {FINANCIAL_STATEMENTS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-dark-600 first:border-t">
                <div className="flex items-center gap-5">
                  <span className="text-stone-700 font-sans text-xs tracking-widest tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-xl text-stone-200 font-light">
                    Financial Summary <span className="text-gold-400">{s.period}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 pl-8 sm:pl-0">
                  {s.links.map(link => (
                    <a
                      key={link.lang}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 border border-dark-500 text-stone-500 text-[0.65rem] tracking-widest uppercase font-medium transition-all duration-200 hover:border-gold-600 hover:text-gold-400">
                      {link.lang}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
