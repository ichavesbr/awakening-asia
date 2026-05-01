import Image from "next/image"

const VISIONS = [
  {
    id: "church-planting",
    label: "Church Planting in Tokyo",
    title: ["Church Planting", "in Tokyo"],
    image: "/vision.png",
    imageAlt: "Church Planting vision",
    reverse: false,
    description:
      "Restoring Christians to their true identity, rebuilding families within the church, and reaching out to the world with the gospel while showcasing God's creativity are essential. Revival begins within the church, and the world will come to know Christ when He is genuinely represented in our lives.",
  },
  {
    id: "leaders",
    label: "Building True Leaders",
    title: ["Building up", "true leaders"],
    image: "/leaders.png",
    imageAlt: "Leaders vision",
    reverse: true,
    description:
      "We believe that God is currently awakening Asia, which will produce many leaders who will shape societies with God's kingdom and carry the gospel into the world.",
  },
  {
    id: "stadium",
    label: "Revival at the Stadium",
    title: ["Revival Meeting", "at the Stadium"],
    image: "/stadium.png",
    imageAlt: "Stadium revival vision",
    reverse: false,
    description:
      "We have received visions from God of a great harvest of souls through a stadium. Even in Europe, which, like Japan, is often referred to as the graveyard of missions, many souls are being saved through annual stadium events. We believe that something similar will happen in Japan.",
  },
]

function VisionItem({ vision, isLast }) {
  const imageBlock = (
    <div className="relative w-full aspect-video bg-dark-700 border border-dark-600 overflow-hidden">
      <Image
        src={vision.image}
        alt={vision.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  )

  const textBlock = (
    <div className="gold-line">
      <h3 className="font-serif text-3xl text-stone-100 mb-5 font-light">
        {vision.title[0]}
        <br />
        <em>{vision.title[1]}</em>
      </h3>
      <p className="text-stone-400 leading-relaxed font-light">{vision.description}</p>
    </div>
  )

  return (
    <div className={isLast ? "" : "mb-24"}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {vision.reverse ? (
          <>
            <div className="order-2 md:order-1">{textBlock}</div>
            <div className="order-1 md:order-2">{imageBlock}</div>
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </div>
  )
}

export default function VisionSection() {
  return (
    <section className="py-24 vision-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="section-label mb-4">Direction</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">Vision</h2>
        </div>

        {VISIONS.map((vision, index) => (
          <VisionItem key={vision.id} vision={vision} isLast={index === VISIONS.length - 1} />
        ))}
      </div>
    </section>
  )
}
