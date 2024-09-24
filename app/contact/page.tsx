import "./page.css"

export default function Contact() {
  return (
    <section className="section-contact">
      <div className="container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We&apos;d love to hear from you. Please fill out this form.</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-image"></div>
      </div>
    </section>
  )
}
