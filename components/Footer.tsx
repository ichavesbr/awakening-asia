import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faXTwitter, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Image from "next/image"

const schoolLinks = ["What is AASM?", "Instructors", "Testimonies", "Study with us"]
const usefulLinks = ["Home", "About us", "School", "Contact"]
const snsIcons = [
  {
    sns: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/awakeningasia",
  },
  {
    sns: "x",
    icon: faXTwitter,
    link: "https://x.com/awakeningasia",
  },
  {
    sns: "facebook",
    icon: faFacebookF,
    link: "https://www.facebook.com/awakeningasia.tokyo",
  },
  {
    sns: "youtube",
    icon: faYoutube,
    link: "https://www.youtube.com/@AwakeningAsiaTV",
  },
]

const LogoCard = () => {
  return (
    <>
      <div className="card">
        <div>
          <Image src="/logo-flag.png" alt="logo flag footer" width={80} height={80} />
          <Image src="/logo-text.png" alt="logo text footer" width={226} height={70} />
        </div>
        <p>Spreading the light of Jesus Christ across Asia.</p>
        <p>Join us in our mission of love, faith, and hope.</p>
      </div>
    </>
  )
}

const SchoolLinks = () => {
  return (
    <div className="card">
      <h2>SCHOOL - AASM</h2>
      <ul>
        {schoolLinks.map(link => (
          <li>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const UsefulLinks = () => {
  return (
    <div className="card">
      <h2>USEFUL LINKS</h2>
      <ul>
        {usefulLinks.map(link => (
          <li>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SocialMediaLinks = () => {
  return (
    <>
      <h2>SOCIAL MEDIA</h2>
      <div className="followUsWrapper">
        {snsIcons.map(({ sns, icon, link }) => (
          <a href={link} aria-label={`${sns} link`}>
            <FontAwesomeIcon icon={icon} style={{ width: "25px", height: "25px" }} className={`${sns}-icon`} />
          </a>
        ))}
      </div>
    </>
  )
}

const AddressAndSocialMediaLinks = () => {
  return (
    <>
      <div className="card">
        <h2 className="address">OUR ADDRESS</h2>
        <span>イチロービル 4F, 2-23-9</span>
        <span>Kita-Ueno, Taito-ku, Tokyo</span>

        <h2 className="contactH2">CONTACT US</h2>
        <span className="contact">general@awakeningasia.org</span>

        <SocialMediaLinks />
      </div>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <LogoCard />
          <UsefulLinks />
          <SchoolLinks />
          <AddressAndSocialMediaLinks />
        </div>
      </footer>

      <aside>
        <div className="copyright">
          <p>&copy; 2024 Copyright - Created by Igor Chaves Donega</p>
        </div>
      </aside>
    </>
  )
}
export default Footer
