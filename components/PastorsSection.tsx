import Image from "next/image"
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons"

interface SocialLinks {
  instagram?: string
  facebook?: string
  youtube?: string
}

interface Pastor {
  name: string
  role: string
  image: string
  socials: SocialLinks
}

interface SeniorPastor extends Pastor {
  quote: string
}

const SENIOR_PASTORS: SeniorPastor[] = [
  {
    name: "Masamitsu Morishita",
    role: "Founder & Senior Pastor",
    image: "/senior-pastor-masamitsu.png",
    socials: {
      instagram: "https://instagram.com/masa.morishita",
      facebook: "https://facebook.com/profile.php?id=61554546930060",
    },
    quote:
      "Born and raised in Tokyo, Japan. After rejecting God for many years, Masamitsu had radical encounters with Jesus in the summer of 2014, then received his calling for the great harvest of the souls in the world including Asia. He also has a passion to equip Christians with the truth, and train them to live and think like Christ.",
  },
  {
    name: "Esther Morishita",
    role: "Founder & Senior Pastor",
    image: "/senior-pastor-esther.png",
    socials: {
      instagram: "https://instagram.com/belovedesthermori",
      facebook: "https://facebook.com/sissi.he.1",
    },
    quote:
      "Grew up in China, had a radical face to face encounter with Jesus when she was 6 years old. After she spent 5 years in London to study fashion and to work for Burberry, she received God's calling to lead a harvest movement in Asia, Europe and other nations. She also has a big passion in creative ministries to transform the culture of society.",
  },
]

const REVIVAL_PASTORS: Pastor[] = [
  {
    name: "Baruch van Beek",
    role: "Revival Group Pastor",
    image: "/pastor-baruch.png",
    socials: {
      instagram: "https://instagram.com/baruchvanbeek",
      facebook: "https://facebook.com/baruchvanbeek",
      youtube: "https://youtube.com/baruchvanbeek",
    },
  },
  {
    name: "Alisa Rene White",
    role: "Revival Group Pastor",
    image: "/pastor-alisa.png",
    socials: {
      facebook: "https://facebook.com/alisarene",
    },
  },
]

function SeniorPastorCard({ pastor }: { pastor: SeniorPastor }) {
  return (
    <div className="pastor-card p-8">
      {/* Image */}
      <div className="relative w-full aspect-video mb-6 bg-dark-700 border border-dark-600 overflow-hidden">
        <Image
          src={pastor.image}
          alt={pastor.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <h3 className="font-serif text-2xl text-stone-100 mb-1 font-normal">{pastor.name}</h3>
      <p className="section-label mb-4">{pastor.role}</p>

      {/* Socials */}
      <div className="flex gap-2 mb-6">
        {pastor.socials.instagram && (
          <a
            href={pastor.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={`Instagram of ${pastor.name}`}>
            <InstagramIcon />
          </a>
        )}
        {pastor.socials.facebook && (
          <a
            href={pastor.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={`Facebook of ${pastor.name}`}>
            <FacebookIcon />
          </a>
        )}
      </div>

      <blockquote className="border-l border-dark-500 pl-4 text-stone-500 leading-relaxed italic font-serif text-[0.95rem]">
        &ldquo;{pastor.quote}&rdquo;
      </blockquote>
    </div>
  )
}

function RevivalPastorCard({ pastor }: { pastor: Pastor }) {
  return (
    <div className="pastor-card p-6 flex gap-5 items-start">
      {/* Thumbnail */}
      <div className="relative w-20 h-20 shrink-0 bg-dark-700 border border-dark-600 overflow-hidden">
        <Image src={pastor.image} alt={pastor.name} fill sizes="80px" className="object-cover" />
      </div>

      <div>
        <h3 className="font-serif text-xl text-stone-100 mb-0.5 font-normal">{pastor.name}</h3>
        <p className="section-label mb-3">{pastor.role}</p>

        <div className="flex gap-2">
          {pastor.socials.instagram && (
            <a
              href={pastor.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-sm"
              aria-label={`Instagram of ${pastor.name}`}>
              <InstagramIcon size="sm" />
            </a>
          )}
          {pastor.socials.facebook && (
            <a
              href={pastor.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-sm"
              aria-label={`Facebook of ${pastor.name}`}>
              <FacebookIcon size="sm" />
            </a>
          )}
          {pastor.socials.youtube && (
            <a
              href={pastor.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-sm"
              aria-label={`YouTube of ${pastor.name}`}>
              <YouTubeIcon size="sm" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PastorsSection() {
  return (
    <section className="py-24 bg-dark-800 vision-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-4">Leadership</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">Pastors</h2>
        </div>

        {/* Senior Pastors */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {SENIOR_PASTORS.map(pastor => (
            <SeniorPastorCard key={pastor.name} pastor={pastor} />
          ))}
        </div>

        {/* Revival Group Pastors */}
        <div className="grid md:grid-cols-2 gap-6">
          {REVIVAL_PASTORS.map(pastor => (
            <RevivalPastorCard key={pastor.name} pastor={pastor} />
          ))}
        </div>
      </div>
    </section>
  )
}
