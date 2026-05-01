import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-dark-900 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* Gold line above */}
        <div className="flex justify-center mb-10">
          <span className="block w-10 h-px bg-gold-400" />
        </div>

        {/* Section label */}
        <p className="section-label mb-6">Error 404</p>

        {/* Large number */}
        <h1 className="font-serif text-[8rem] sm:text-[10rem] leading-none text-dark-600 select-none font-light mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-light mb-6">Page not found</h2>

        {/* Description */}
        <p className="text-stone-400 font-light leading-relaxed mb-12">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900">
          Return Home
        </Link>

        {/* Gold line below */}
        <div className="flex justify-center mt-16">
          <span className="block w-10 h-px bg-dark-600" />
        </div>
      </div>
    </section>
  )
}
