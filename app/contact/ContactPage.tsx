"use client"

import { useActionState } from "react"
import { formAction } from "./actions"

export default function ContactPage() {
  const [data, action, isPending] = useActionState(formAction, null)

  const fieldClass =
    "w-full bg-dark-800 border border-dark-600 text-stone-200 text-sm font-light px-4 py-3 placeholder:text-stone-700 focus:outline-none focus:border-gold-600 transition-colors duration-200"

  return (
    <main className="min-h-screen bg-dark-900">
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

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <form action={action} className="space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="section-label block mb-2" htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" type="text" placeholder="Your name" className={fieldClass} />
                {data?.errors?.name && <p className="text-red-500 text-xs mt-1">{data?.errors?.name[0]}</p>}
              </div>

              <div>
                <label className="section-label block mb-2" htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="your@email.com" className={fieldClass} />
                {data?.errors?.email && <p className="text-red-500 text-xs mt-1">{data?.errors?.email[0]}</p>}
              </div>
            </div>

            <div>
              <label className="section-label block mb-2" htmlFor="subject">
                Subject
              </label>
              <input id="subject" name="subject" type="text" placeholder="How can we help?" className={fieldClass} />
              {data?.errors?.subject && <p className="text-red-500 text-xs mt-1">{data?.errors?.subject[0]}</p>}
            </div>

            <div>
              <label className="section-label block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                placeholder="Write your message here..."
                className={`${fieldClass} resize-none`}
              />
              {data?.errors?.message && <p className="text-red-500 text-xs mt-1">{data?.errors?.message[0]}</p>}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-3 border border-gold-600 text-gold-400 text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:bg-gold-500 hover:text-dark-900 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3">
              {isPending ? "Sending..." : "Send Message"}
            </button>
            {data?.status === "success" && <p className="text-green-500 text-sm">{data.message}</p>}
            {data?.status === "error" && <p className="text-red-500 text-sm">{data.message}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}
