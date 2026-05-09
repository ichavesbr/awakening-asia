import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center py-24 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="section-label mb-6">Tokyo, Japan · Est. 2019</p>
          <h1 className="font-serif text-5xl md:text-7xl text-stone-100 leading-none mb-8 font-light">
            Who
            <br />
            <em className="text-gold-400 italic">we are</em>
          </h1>

          {/* Gold divider */}

          <p className="text-stone-400 leading-relaxed text-base md:text-lg max-w-lg mb-4 font-light">
            Awakening Asia (Tokyo) is a ministry launched by Masa and Esther in 2019, with the support of Ben
            Fitzgerald, founder of Awakening Europe. God has revealed to Masa and Esther that Japan will serve as a
            crucial turning point for a significant harvest in Asia.
          </p>
          <p className="text-stone-400 leading-relaxed text-base md:text-lg max-w-lg font-light">
            We believe that God is raising up a new generation of apostolic leaders across Asia to boldly share the
            gospel with the world.
          </p>
        </div>

        {/* Image */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="relative w-full aspect-5/6 border border-dark-600 overflow-hidden bg-dark-700">
              <Image
                src="/ministry.png"
                alt="Ministry"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="eager"
                className="object-fill"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold-600 opacity-40 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-gold-600 opacity-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
