"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ─── Experience Data ─── */
const experiences = [
  {
    year: "2024 – Present",
    title: "Student Designer",
    subtitle: "Freelance Projects",
    description: "Working on UI/UX projects for startups and small businesses. Focused on user research, wireframing, and visual design.",
    color: "139,92,246",
  },
  {
    year: "2023",
    title: "UI/UX Design Intern",
    subtitle: "Design Studio",
    description: "Worked on end-to-end design projects including user flows, prototyping and design systems.",
    color: "168,85,247",
  },
  {
    year: "2022",
    title: "Design Explorer",
    subtitle: "Self-Initiated",
    description: "Explored product design, branding and interaction design through personal and academic projects.",
    color: "124,58,237",
  },
]

/* ─── Tools Data ─── */
const tools = [
  { name: "Figma", abbr: "F", gradient: "from-teal-500/20 to-teal-600/10", text: "text-teal-400" },
  { name: "Adobe XD", abbr: "Xd", gradient: "from-pink-500/20 to-pink-600/10", text: "text-pink-400" },
  { name: "Photoshop", abbr: "Ps", gradient: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
  { name: "Illustrator", abbr: "Ai", gradient: "from-orange-500/20 to-orange-600/10", text: "text-orange-400" },
  { name: "After Effects", abbr: "Ae", gradient: "from-indigo-500/20 to-indigo-600/10", text: "text-indigo-400" },
  { name: "Notion", abbr: "N", gradient: "from-neutral-400/20 to-neutral-500/10", text: "text-neutral-300" },
  { name: "Framer", abbr: "Fr", gradient: "from-violet-500/20 to-violet-600/10", text: "text-violet-400" },
  { name: "Principle", abbr: "Pr", gradient: "from-purple-500/20 to-purple-600/10", text: "text-purple-400" },
]

/* ─── Experience Section ─── */
export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#050505" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04), transparent 70%)" }}
      />
      {/* Left mesh */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.03), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ── Left: Timeline ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "rgba(139,92,246,0.7)" }}
            >
              Experience &amp; Growth
            </motion.p>

            {/* Timeline */}
            <div className="relative ml-4">
              {/* Animated line */}
              <motion.div
                className="absolute left-0 top-0 w-[1px]"
                style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(139,92,246,0.05))" }}
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="space-y-8 pl-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.year}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Glowing dot */}
                    <div
                      className="absolute -left-[41px] top-1 h-3 w-3 rounded-full"
                      style={{
                        background: `rgb(${exp.color})`,
                        boxShadow: `0 0 12px rgba(${exp.color},0.5), 0 0 24px rgba(${exp.color},0.2)`,
                      }}
                    />

                    <p className="text-sm font-semibold tabular-nums" style={{ color: `rgba(${exp.color},0.8)` }}>
                      {exp.year}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-sm text-white/50">{exp.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Tools ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50"
            >
              Tools I Use
            </motion.p>

            <div className="grid grid-cols-4 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.gradient} border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg`}
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                  >
                    <span className={`text-xl font-bold ${tool.text}`}>{tool.abbr}</span>
                  </div>
                  <span className="text-[11px] text-white/45">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
