import ContactPage from "./ContactPage"

export const metadata = { title: "Contact | Awakening Asia Tokyo" }

export default function Page() {
  // ContactPage component was created because "metadata" can't be together with "use client"
  return <ContactPage />
}
