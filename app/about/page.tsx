import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faXTwitter, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Image from "next/image"
import "./page.css"
import Link from "next/link"

type Employee = {
  name: string
  role?: string
  image?: string
  message?: string
  instagram?: string
  facebook?: string
}

const employees: Employee[] = [
  {
    name: "Masamitsu Morishita",
    role: "Founder & Senior Pastor",
    message:
      "Born and raised in Tokyo, Japan. After rejecting God for many years, Masamitsu had radical encounters with Jesus in the summer of 2014, then received his calling for the great harvest of the souls in the world including Asia. He also has a passion to equip Christians with the truth, and train them to live and think like Christ.",
    image: "/senior-pastor-masamitsu.png",
    instagram: "masa.morishita",
    facebook: "profile.php?id=61554546930060",
  },
  {
    name: "Esther Morishita",
    role: "Founder & Senior Pastor",
    message:
      "Grew up in China, had a radical face to face encounter with Jesus when she was 6 years old. After she spent 5 years in London to study fashion and to work for Burberry, she received God's calling to lead a harvest movement in Asia, Europe and other nations. She also has a big passion in creative ministries to transform the culture of society.",
    image: "/senior-pastor-esther.png",
    instagram: "belovedesthermori",
    facebook: "sissi.he.1",
  },
  {
    name: "Baruch van Beek",
    role: "Revival Group Pastor",
    image: "/pastor-baruch.png",
    instagram: "baruchvanbeek",
  },
  {
    name: "Alisa Rene White",
    role: "Revival Group Pastor",
    image: "/pastor-alisa.png",
    facebook: "alisarene",
  },
  {
    name: "Alisa Rene White",
    role: "Designer UX",
    image: "/pastor-alisa.png",
    facebook: "alisarene",
  },
]

const SnsIcons = ({ employee }: { employee: Employee }) => (
  <div className="team-socials">
    {employee.instagram && (
      <a
        href={`https://instagram.com/${employee.instagram}`}
        className="instagram-link"
        aria-label={`Instagram of ${employee.name}`}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ width: "30px", height: "30px" }}
          className={`${faInstagram}-icon`}
        />
      </a>
    )}
    {employee.facebook && (
      <a
        href={`https://facebook.com/${employee.facebook}`}
        className="facebook-link"
        aria-label={`Facebook of ${employee.name}`}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faFacebookF}
          style={{ width: "30px", height: "30px" }}
          className={`${faFacebookF}-icon`}
        />
      </a>
    )}
  </div>
)

const LargeCards = () => (
  <>
    {employees
      .filter(employee => employee.role === "Founder & Senior Pastor")
      .map((employee, index) => (
        <div className="card large-card" key={index}>
          <Image src={employee.image || ""} alt={employee.name} className="team-image" height={300} width={400} />
          <h3 className="team-name">{employee.name}</h3>
          <p className="team-role">{employee.role}</p>
          <SnsIcons employee={employee} />
          {employee.message && <p className="team-message">&quot;{employee.message}&quot;</p>}
        </div>
      ))}
  </>
)

const SmallCards = () => (
  <>
    {employees
      .filter(employee => employee.role !== "Founder & Senior Pastor")
      .map((employee, index) => (
        <div className="card small-card" key={index}>
          <Image src={employee.image || ""} alt={employee.name} className="team-image" height={300} width={400} />
          <div className="team-info-small-card">
            <h3 className="team-name">{employee.name}</h3>
            <p className="team-role">{employee.role}</p>
            <SnsIcons employee={employee} />
            {employee.message && <p className="team-message">&quot;{employee.message}&quot;</p>}
          </div>
        </div>
      ))}
  </>
)

export default function About() {
  return (
    <>
      <section className="about">
        <div className="section-wrapper">
          <div className="about-txt">
            <h1>Who we are...</h1>
            <p>
              Awakening Asia (Tokyo) is a ministry launched by Masa and Esther in 2019, with the support of Ben
              Fitzgerald, founder of Awakening Europe. God has revealed to Masa and Esther that Japan will serve as a
              crucial turning point for a significant harvest in Asia. We believe that God is raising up a new
              generation of apostolic leaders across Asia to boldly share the gospel with the world.
            </p>
          </div>
        </div>
      </section>

      <section className="pastors">
        <div className="section-wrapper">
          <h2 className="team-title">Pastors</h2>
          <div className="grid-layout">
            {/* Primeira linha com cards grandes */}
            <div className="row1">
              <LargeCards />
            </div>

            {/* Segunda linha com cards pequenos */}
            <div className="row2">
              <SmallCards />
            </div>
          </div>
        </div>
      </section>

      <section className="vision church-planting">
        <div className="section-wrapper">
          <h2 className="team-title">Vision</h2>
          <div className="vision-wrapper">
            <div className="vision-img-wrapper">
              <Image src="/vision.png" alt="vision image" height={300} width={400} />
            </div>
            <div className="vision-txt">
              <h3>Church Planting in Tokyo</h3>
              <p>
                Restoring Christians to their true identity, rebuilding families within the church, and reaching out to
                the world with the gospel while showcasing God&apos;s creativity are essential. Revival begins within
                the church, and the world will come to know Christ when He is genuinely represented in our lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vision vision-leader">
        <div className="section-wrapper">
          <div className="vision-wrapper leaders-vision">
            <div className="vision-txt">
              <h3>Building up true leaders and sending them into the world.</h3>
              <p>
                We believe that God is currently awakening Asia, which will produce many leaders who will shape
                societies with God&apos;s kingdom and carry the gospel into the world.
              </p>
            </div>
            <div className="vision-img-wrapper">
              <Image src="/leaders.png" alt="vision image" height={300} width={400} />
            </div>
          </div>
        </div>
      </section>

      <section className="vision stadium">
        <div className="vision-wrapper">
          <div className="vision-img-wrapper">
            <Image src="/stadium.png" alt="vision image" height={300} width={400} />
          </div>
          <div className="vision-txt">
            <h3>Revival Meeting at the Stadium</h3>
            <p>
              We have received visions from God of a great harvest of souls through a stadium. Even in Europe, which,
              like Japan, is often referred to as the graveyard of missions, many souls are being saved through annual
              stadium events. We believe that something similar will happen in Japan.
            </p>
          </div>
        </div>
      </section>

      <section className="statement-of-faith">
        <div className="section-wrapper">
          <h2 className="team-title">Statement of Faith</h2>
          <div className="statement-of-faith-txt-wrapper">
            <p>
              We believe that Almighty God is the Creator, who made the universe and everything in it by His hand. This
              God is the Trinity: Father, Son, and Holy Spirit, each distinct yet one God (Genesis 1:1, Matthew 28:19, 2
              Corinthians 13:14).
            </p>
            <p>
              We acknowledge that there is no one righteous; we are all sinners before God, and our sin has severed our
              relationship with Him (Romans 3:10, Romans 3:23). No one can become righteous by their own deeds or
              efforts (Ephesians 2:8-9).
            </p>
            <p>
              We believe in salvation through faith in Jesus Christ alone. Jesus was born of the virgin Mary, took on
              our sins, died on the cross, and was resurrected on the third day (Matthew 1:18-25, 1 Corinthians 15:3-4).
              His sacrifice on the cross is the manifestation of God’s profound love, restoring our personal
              relationship with Him (John 3:16, 2 Corinthians 5:18-19). Through this, we have been transformed from
              slaves of sin into new creations inheriting righteousness in Christ (2 Corinthians 5:17, Romans 12:2).
              Moreover, no one can come to the Father except through Jesus (John 14:6).
            </p>
            <p>
              We believe that we are already made in the likeness of Christ as new creations, and the Holy Spirit
              empowers us to live out God's will, helping us grow towards this likeness in the flesh. Specifically, the
              Holy Spirit produces in us the fruits of love, joy, peace, patience, kindness, goodness, faithfulness,
              gentleness, and self-control (Galatians 5:22-23). The Holy Spirit also grants us gifts to accomplish God’s
              work (Acts 1:8, 1 Corinthians 12:4-11). This enables us to live humbly, obediently, and forgivingly,
              loving our neighbors, and practicing God’s will (Philippians 2:5-8, Colossians 3:12-14).
            </p>
            <p>
              While we once lived according to our fleshly desires, will, and plans, we now dedicate our lives to God,
              having been made His children. We live for God’s desires, will, and plans. Our purpose on earth is to live
              for God and to fulfill the Great Commission that Jesus commanded. Jesus will return once the Gospel has
              been proclaimed to all creation, and at that time, all people will be judged and sent either to heaven or
              hell (Matthew 28:18-20, Matthew 24:14, Revelation 20:11-15).
            </p>
            <p>
              We believe the Bible is divinely inspired and is the absolute truth. God's word is unchanging (2 Timothy
              3:16, Hebrews 13:8). God continues to speak to us today through the Holy Spirit, and these words of the
              Spirit are tested against the unchanging word of the Bible (John 16:13, 1 John 4:1).
            </p>
            <p>
              The church is designed by God and led by appointed leaders to build and guide believers in sound faith,
              godly living, and spiritual maturity. We respect the free will that God has given to each individual,
              encouraging them to make their own decisions in every situation. However, we also teach the importance of
              commitment and honor for God and spiritual authority, encouraging members to joyfully submit to God-given
              authority as they grow to be humble and faithful servants of God within this framework (Deuteronomy 30:19,
              Joshua 24:15, Hebrews 13:17).
            </p>
            <p>
              As a family of God, we support members’ physical, mental, and spiritual well-being by demonstrating God’s
              love through comforting, encouragement, and also challenging with the truth in love to overcome the
              enemy’s lies, compromises, and ungodly values (1 Thessalonians 5:14, Ephesians 4:15, Romans 12:10).
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
