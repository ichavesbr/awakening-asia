import type { Metadata } from "next"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./globals.css"
import "./home-sections.css"

export const metadata: Metadata = {
  title: "Awakening Asia | Tokyo",
  description:
    "We're building a new generation of dedicated leaders to share the gospel and lead Jesus movements. It's Asia's time to receive Jesus, and God is preparing leaders to make a real impact with His power.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
