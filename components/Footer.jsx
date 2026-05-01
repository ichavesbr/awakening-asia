import Link from "next/link"
import { InstagramIcon, FacebookIcon, YouTubeIcon, XIcon } from "./SocialIcons"

const USEFUL_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/school", label: "School" },
  { href: "/contact", label: "Contact" },
]

const SCHOOL_LINKS = [
  { href: "/school#about", label: "What is AASM?" },
  { href: "/school#instructors", label: "Instructors" },
  { href: "/school#testimonies", label: "Testimonies" },
  { href: "/school#apply", label: "Study with us" },
]

const SOCIALS = [
  { href: "https://www.instagram.com/awakeningasia", label: "Instagram", Icon: InstagramIcon },
  { href: "https://x.com/awakeningasia", label: "X", Icon: XIcon },
  { href: "https://www.facebook.com/awakeningasia.tokyo", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.youtube.com/@AwakeningAsiaTV", label: "YouTube", Icon: YouTubeIcon },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 md:gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-gold-600 flex items-center justify-center">
                <div className="w-3 h-3 bg-gold-500" />
              </div>
              <span className="font-serif uppercase text-stone-200 tracking-[0.22em] text-[0.75rem]">
                Awakening Asia
              </span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-1 font-light">
              Spreading the light of Jesus Christ across Asia.
            </p>
            <p className="text-stone-600 text-sm font-light">Join us in our mission of love, faith, and hope.</p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="section-label mb-5">Useful Links</h4>
            <ul className="space-y-3">
              {USEFUL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-stone-500 text-sm font-light hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School Links */}
          <div>
            <h4 className="section-label mb-5">School — AASM</h4>
            <ul className="space-y-3">
              {SCHOOL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-stone-500 text-sm font-light hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="section-label mb-3">Our Address</h4>
            <p className="text-stone-500 text-sm mb-0.5 font-light">イチロービル 4F, 2-23-9</p>
            <p className="text-stone-500 text-sm mb-6 font-light">Kita-Ueno, Taito-ku, Tokyo</p>

            <h4 className="section-label mb-3">Contact Us</h4>
            <a
              href="mailto:general@awakeningasia.org"
              className="block mb-6 text-stone-500 text-sm font-light hover:text-gold-400 transition-colors">
              general@awakeningasia.org
            </a>

            <h4 className="section-label mb-4">Social Media</h4>
            <div className="flex gap-2 flex-wrap">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-stone-700 uppercase tracking-[0.15em] text-[0.65rem]">© 2026 Awakening Asia Tokyo</p>
          <p className="text-stone-700 text-[0.65rem]">Created by Igor Chaves Donega</p>
        </div>
      </div>
    </footer>
  )
}
