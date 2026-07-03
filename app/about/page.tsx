import { AboutPage } from "@/components/about/about-page"

export const metadata = {
  title: "About — Chandanpreet Kaur",
  description:
    "Learn about Chandanpreet Kaur — achievements, research, projects, skills, and resume.",
}

export default function Page() {
  return (
    <main className="relative min-h-screen" style={{ background: "#050505" }}>
      {/* Persistent grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent)",
        }}
      />
      <AboutPage />
    </main>
  )
}
