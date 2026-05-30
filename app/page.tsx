import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Projects } from "@/components/landing/projects"
import { SelectedWork } from "@/components/landing/selected-work"
import { Skills } from "@/components/landing/skills"
import { Experience } from "@/components/landing/experience"
import { Contact } from "@/components/landing/contact"

function SectionDivider() {
  return <div className="section-divider" />
}

export default function Page() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <SelectedWork />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  )
}
