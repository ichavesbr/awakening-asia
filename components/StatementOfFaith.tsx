interface StatementsType {
  text: string
  refs: string
}

const STATEMENTS = [
  {
    text: "We believe that Almighty God is the Creator, who made the universe and everything in it by His hand. This God is the Trinity: Father, Son, and Holy Spirit, each distinct yet one God.",
    refs: "Genesis 1:1, Matthew 28:19, 2 Corinthians 13:14",
  },
  {
    text: "We acknowledge that there is no one righteous; we are all sinners before God, and our sin has severed our relationship with Him. No one can become righteous by their own deeds or efforts.",
    refs: "Romans 3:10, 3:23, Ephesians 2:8-9",
  },
  {
    text: "We believe in salvation through faith in Jesus Christ alone. Jesus was born of the virgin Mary, took on our sins, died on the cross, and was resurrected on the third day. His sacrifice on the cross is the manifestation of God's profound love, restoring our personal relationship with Him. Moreover, no one can come to the Father except through Jesus.",
    refs: "Matthew 1:18-25, 1 Corinthians 15:3-4, John 3:16, John 14:6",
  },
  {
    text: "We believe that we are already made in the likeness of Christ as new creations, and the Holy Spirit empowers us to live out God's will. The Holy Spirit produces in us the fruits of love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. The Holy Spirit also grants us gifts to accomplish God's work.",
    refs: "Galatians 5:22-23, Acts 1:8, 1 Corinthians 12:4-11",
  },
  {
    text: "We now dedicate our lives to God, having been made His children. Our purpose on earth is to live for God and to fulfill the Great Commission that Jesus commanded. Jesus will return once the Gospel has been proclaimed to all creation, and at that time, all people will be judged and sent either to heaven or hell.",
    refs: "Matthew 28:18-20, Matthew 24:14, Revelation 20:11-15",
  },
  {
    text: "We believe the Bible is divinely inspired and is the absolute truth. God's word is unchanging. God continues to speak to us today through the Holy Spirit, and these words of the Spirit are tested against the unchanging word of the Bible.",
    refs: "2 Timothy 3:16, Hebrews 13:8, John 16:13, 1 John 4:1",
  },
  {
    text: "The church is designed by God and led by appointed leaders to build and guide believers in sound faith, godly living, and spiritual maturity. We encourage members to joyfully submit to God-given authority as they grow to be humble and faithful servants of God.",
    refs: "Deuteronomy 30:19, Joshua 24:15, Hebrews 13:17",
  },
  {
    text: "As a family of God, we support members' physical, mental, and spiritual well-being by demonstrating God's love through comforting, encouragement, and challenging with the truth in love to overcome the enemy's lies, compromises, and ungodly values.",
    refs: "1 Thessalonians 5:14, Ephesians 4:15, Romans 12:10",
  },
]

function FaithParagraph({ text, refs }: StatementsType) {
  return (
    <div className="faith-paragraph">
      <p className="text-stone-400 leading-relaxed font-light">
        {text} <span className="text-stone-600 text-sm">({refs})</span>
      </p>
    </div>
  )
}

export default function StatementOfFaith() {
  return (
    <section className="py-24 bg-dark-800 vision-section">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-4">Doctrine</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">Statement of Faith</h2>
        </div>

        <div className="space-y-8">
          {STATEMENTS.map((s, i) => (
            <FaithParagraph key={i} text={s.text} refs={s.refs} />
          ))}
        </div>
      </div>
    </section>
  )
}
