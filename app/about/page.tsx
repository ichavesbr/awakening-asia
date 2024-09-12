import Image from "next/image"
import "./page.css"

type Employee = {
  name: string
  role?: string
  image?: string
  message?: string
  instagram?: string
  facebook?: string
}

const employees: Employee[] = [
  // {
  //   name: "Masamitsu Morishita",
  //   role: "CEO",
  //   message:
  //     "Born and raised in Tokyo, Japan. After rejecting God for many years, Masamitsu had radical encounters with Jesus in the summer of 2014, then received his calling for the great harvest of the souls in the world including Asia. He also has a passion to equip Christians with the truth, and train them to live and think like Christ.",
  //   image: "./senior-pastor-masamitsu.png",
  //   instagram: "masamitsumorishita",
  //   facebook: "masamitsumorishita",
  // },
  // {
  //   name: "Esther Morishita",
  //   role: "CEO",
  //   message:
  //     "Grew up in China, had a radical face to face encounter with Jesus when she was 6 years old. After she spent 5 years in London to study fashion and to work for Burberry, she received God's calling to lead a harvest movement in Asia, Europe and other nations. She also has a big passion in creative ministries to transform the culture of society.",
  //   image: "./senior-pastor-esther.png",
  //   instagram: "esthermorishita",
  //   facebook: "esthermorishita",
  // },
  {
    name: "Baruch van Beek",
    role: "Revival Group Pastor",
    image: "./pastor-baruch.png",
    instagram: "baruchvanbeek",
  },
  {
    name: "Alisa Rene White",
    role: "Revival Group Pastor",
    image: "./pastor-alisa.png",
    facebook: "alisarene",
  },
  {
    name: "Alisa Rene White",
    role: "Designer UX",
    image: "./pastor-alisa.png",
    facebook: "alisarene",
  },
  {
    name: "Alisa Rene White",
    role: "Designer UX",
    image: "./pastor-alisa.png",
    facebook: "alisarene",
  },
]

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
          <div className="about-img">
            <Image src="/about-us.png" alt="about us image" height={300} width={400} />
          </div>
        </div>
      </section>

      <section className="pastors">
        <div className="section-wrapper">
          <h2 className="team-title">Pastors</h2>
          <div className="grid-layout">
            {/* Primeira linha com cards grandes */}
            <div className="row1">
              {employees
                .filter(employee => employee.role === "CEO")
                .map((employee, index) => (
                  <div className="card large-card" key={index}>
                    <Image src={employee.image} alt={employee.name} className="team-image" height={300} width={400} />
                    <h3 className="team-name">{employee.name}</h3>
                    <p className="team-role">Founder & Senior Pastor</p>
                    {employee.role === "CEO" && employee.message && (
                      <p className="team-message">"{employee.message}"</p>
                    )}
                    <div className="team-socials">
                      {employee.instagram && (
                        <a href={`https://instagram.com/${employee.instagram}`} className="instagram-link"></a>
                      )}
                      {employee.facebook && (
                        <a href={`https://facebook.com/${employee.facebook}`} className="facebook-link"></a>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {/* Segunda linha com cards pequenos */}
            <div className="row2">
              {employees
                .filter(employee => employee.role !== "CEO")
                .map((employee, index) => (
                  <div className="card small-card" key={index}>
                    {/* <Image src={employee.image} alt={employee.name} className="team-image" height={300} width={400} /> */}
                    <div className="team-info-small-card">
                      <h3 className="team-name">{employee.name}</h3>
                      <p className="team-role">{employee.role}</p>
                      {employee.role === "CEO" && employee.message && (
                        <p className="team-message">"{employee.message}"</p>
                      )}
                      <div className="team-socials">
                        {employee.instagram && (
                          <a href={`https://instagram.com/${employee.instagram}`} className="instagram-link"></a>
                        )}
                        {employee.facebook && (
                          <a href={`https://facebook.com/${employee.facebook}`} className="facebook-link"></a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vision">
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
                the world with the gospel while showcasing God's creativity are essential. Revival begins within the
                church, and the world will come to know Christ when He is genuinely represented in our lives.
              </p>
            </div>
          </div>

          <div className="vision-wrapper">
            <div className="vision-txt leaders-txt">
              <h3>Building up true leaders and sending them into the world.</h3>
              <p>
                We believe that God is currently awakening Asia, which will produce many leaders who will shape
                societies with God's kingdom and carry the gospel into the world.
              </p>
            </div>
            <div className="vision-img-wrapper leaders-img">
              <Image src="/leaders.png" alt="vision image" height={300} width={400} />
            </div>
          </div>

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
        </div>
      </section>
    </>
  )
}
