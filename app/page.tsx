import { SchoolAASM } from "@/components/school-aasm"
import { DonationCards } from "@/components/donation-cards"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <DonationCards />
      <SchoolAASM />

      {/* <section className="home-section a1">
        <div className="section-wrapper">
          <div className="home-title">
            <h1>AWAKENING</h1>
            <h3>ASIA/TOKYO</h3>
          </div>
          <div className="home-sub-title">
            <p>THE HARVEST IS RIPE IN JAPAN AND ASIA</p>
            <p>THE WAIT IS OVER</p>
          </div>
          <div className="home-btns">
            <a href="#">Check our service</a>
            <a href="#">Who is Jesus?</a>
          </div>
        </div>
      </section> */}

      {/* <section className="home-section a2">
        <div className="home-section2-outer-wrapper">
          <div className="home-section2-inner-wrapper-title">
            <h3>God is Awakening His People in Asia</h3>
          </div>
          <div className="home-section2-inner-wrapper">
            <div className="home-section2-img-wrapper">
              <Image src="/home1.png" alt="home image" height={300} width={400} />
            </div>
            <div className="home-section2-txt-wrapper">
              <p>
                We&apos;re an organization that&apos;s raising up the generations of life surrendered revivalists,
                who&apos;ll radically bring the gospel to the nations and lead Jesus movements. We believe harvest is
                ripe now in Asia and he is raising up heathy pioneering leaders, churches and ministries that&apos;ll
                transform and impact the societies with the power of the gospel.
              </p>
              <div className="home-section2-btns-wrapper">
                <a href="">link1</a>
                <a href="">link2</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section a3">ONLINE SERVICE</section>
      <section className="home-section a4">SCHOOL</section> */}
    </>
  )
}
