import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Projects } from "@/components/landing/projects"
import { SelectedWork } from "@/components/landing/selected-work"
import { Skills } from "@/components/landing/skills"
import { Experience } from "@/components/landing/experience"
import { Contact } from "@/components/landing/contact"

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <SelectedWork />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
