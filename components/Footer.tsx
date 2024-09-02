import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="card">
            <div>
              <img
                src="https://awakeningasia.org/wp-content/uploads/2023/07/cropped-AWAKENINGTOKYOwhite.png"
                alt="awakening tokyo logo 1"
                width="70px"
              />
              <img
                src="https://awakeningasia.org/wp-content/uploads/2023/07/Awakening-Logo-300x93.png"
                alt="awakening tokyo logo 2"
                width="215px"
              />
            </div>
            <p>Spreading the light of Jesus Christ across Asia.</p>
            <p>Join us in our mission of love, faith, and hope.</p>
          </div>

          <div className="card">
            <h2>USEFUL LINKS</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/school">School</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2>SCHOOL - AASM</h2>
            <ul>
              <li>
                <Link href="#">What is AASM?</Link>
              </li>
              <li>
                <Link href="#">Instructors</Link>
              </li>
              <li>
                <Link href="#">Testimonies</Link>
              </li>
              <li>
                <Link href="#">Study with us</Link>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="address">OUR ADDRESS</h2>
            <ul>
              <span>イチロービル 4F, 2-23-9</span>
              <p>Kita-Ueno, Taito-ku, Tokyo</p>
            </ul>

            <h2 className="contactH2">CONTACT US</h2>
            <ul>
              <li className="contact">general@awakeningasia.org</li>
            </ul>

            <h2>SOCIAL MEDIA</h2>
            <div className="followUsWrapper">
              <ul>
                <a href="https://www.instagram.com/awakeningasia">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    aria-label="instagram link"
                    style={{ width: "25px", height: "25px" }}
                    className="instagram-icon"
                  />
                </a>
                <a href="https://twitter.com/awakeningasia">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    aria-label="x link"
                    style={{ width: "25px", height: "25px" }}
                    className="twitter-icon"
                  />
                </a>
                <a href="https://www.facebook.com/awakeningasia.tokyo">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    aria-label="facebook link"
                    style={{ width: "25px", height: "25px" }}
                    className="facebook-icon"
                  />
                </a>
                <a href="https://www.youtube.com/@AwakeningAsiaTV">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    aria-label="youtube link"
                    style={{ width: "25px", height: "25px" }}
                    className="youtube-icon"
                  />
                </a>
              </ul>
            </div>
          </div>
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
