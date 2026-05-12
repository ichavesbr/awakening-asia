"use client"

import { useState } from "react"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactForm = z.infer<typeof contactSchema>
type FormErrors = Partial<Record<keyof ContactForm, string>>

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target

    setForm(prev => ({ ...prev, [name]: value }))

    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()

    const result = contactSchema.safeParse(form)

    if (!result.success) {
      const fieldErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactForm
        if (!fieldErrors[field]) fieldErrors[field] = issue.message
      }

      setErrors(fieldErrors)

      return
    }

    setErrors({})
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const fieldClass = () =>
    "w-full bg-dark-800 border border-dark-600 text-stone-200 text-sm font-light px-4 py-3 placeholder:text-stone-700 focus:outline-none focus:border-gold-600 transition-colors duration-200"

  return (
    <main className="min-h-screen bg-dark-900">
      {/* Hero */}
      <section className="py-24 border-b border-dark-600">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl text-stone-100 font-light leading-[1.1]">
            Contact <em>Us</em>
          </h1>
          <p className="mt-6 text-stone-400 font-light max-w-lg leading-relaxed">
            We&apos;d love to hear from you. Whether you have a question about our ministry, events, or simply want to
            connect — reach out and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="border border-dark-600 p-10 text-center">
              <div className="w-10 h-px bg-gold-400 mx-auto mb-6" />
              <h3 className="font-serif text-3xl text-stone-100 font-light mb-3">
                Thank <em>You</em>
              </h3>
              <p className="text-stone-400 font-light leading-relaxed">
                Your message has been received. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="section-label block mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={fieldClass()}
                  />
                  {errors.name && <p className="mt-1.5 text-red-500 text-xs font-light">{errors.name}</p>}
                </div>
                <div>
                  <label className="section-label block mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={fieldClass()}
                  />
                  {errors.email && <p className="mt-1.5 text-red-500 text-xs font-light">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="section-label block mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={fieldClass()}
                />
                {errors.subject && <p className="mt-1.5 text-red-500 text-xs font-light">{errors.subject}</p>}
              </div>

              <div>
                <label className="section-label block mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`${fieldClass()} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-red-500 text-xs font-light">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3">
                {loading ? (
                  <>
                    <span className="w-3 h-3 border border-gold-400 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
