import AboutSection from "../../components/AboutSection"
import PastorsSection from "../../components/PastorsSection"
import VisionSection from "../../components/VisionSection"
import StatementOfFaith from "../../components/StatementOfFaith"

export const metadata = { title: "About | Awakening Asia Tokyo" }

export default function About() {
  return (
    <>
      <AboutSection />
      <PastorsSection />
      <VisionSection />
      <StatementOfFaith />
    </>
  )
}
