import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "Awakening Asia | Tokyo",
  description:
    "We're building a new generation of dedicated leaders to share the gospel and lead Jesus movements. It's Asia's time to receive Jesus, and God is preparing leaders to make a real impact with His power.",
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
