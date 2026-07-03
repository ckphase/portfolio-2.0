"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"

/* ─── Experience Data ─── */
const experiences = [
  {
    id: 1,
    year: "2024 – Present",
    period: "1+ Year",
    title: "Student Designer",
    company: "Freelance Projects",
    location: "Remote",
    type: "Freelance",
    description:
      "Working on UI/UX projects for startups and small businesses. Focused on user research, wireframing, and visual design. Delivering end-to-end design solutions that drive user engagement and business growth.",
    highlights: [
      "Designed 10+ responsive web & mobile interfaces",
      "Conducted user research with 50+ participants",
      "Created comprehensive design systems",
      "Improved client conversion rates by 35%",
    ],
    skills: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Figma"],
    color: "139,92,246",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    year: "2023",
    period: "6 Months",
    title: "UI/UX Design Intern",
    company: "Design Studio",
    location: "On-site",
    type: "Internship",
    description:
      "Worked on end-to-end design projects including user flows, prototyping and design systems. Collaborated with cross-functional teams to deliver pixel-perfect designs that met business objectives.",
    highlights: [
      "Redesigned core product workflows",
      "Built reusable component library with 80+ components",
      "Reduced user drop-off by 28% through UX improvements",
      "Presented designs to stakeholders weekly",
    ],
    skills: ["UI Design", "UX Flows", "Design Systems", "Collaboration", "Presentations"],
    color: "168,85,247",
    gradient: "from-purple-500 to-fuchsia-600",
  },
  {
    id: 3,
    year: "2022",
    period: "1 Year",
    title: "Design Explorer",
    company: "Self-Initiated",
    location: "Personal Projects",
    type: "Self-Learning",
    description:
      "Explored product design, branding and interaction design through personal and academic projects. Built a strong foundation in design thinking methodology and visual storytelling.",
    highlights: [
      "Completed 15+ personal design projects",
      "Mastered core design tools & principles",
      "Built portfolio from scratch",
      "Won 2 college-level design competitions",
    ],
    skills: ["Branding", "Visual Design", "Interaction Design", "Design Thinking", "Typography"],
    color: "124,58,237",
    gradient: "from-indigo-500 to-violet-600",
  },
]

/* ─── Tools Data ─── */
const tools = [
  {
    name: "Figma",
    abbr: "F",
    gradient: "from-teal-500/20 to-teal-600/10",
    text: "text-teal-400",
    border: "border-teal-500/20",
    description: "UI Design & Prototyping",
    proficiency: 95,
    color: "20,184,166",
  },
  {
    name: "Adobe XD",
    abbr: "Xd",
    gradient: "from-pink-500/20 to-pink-600/10",
    text: "text-pink-400",
    border: "border-pink-500/20",
    description: "Interface Design",
    proficiency: 85,
    color: "236,72,153",
  },
  {
    name: "Photoshop",
    abbr: "Ps",
    gradient: "from-blue-500/20 to-blue-600/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    description: "Photo Editing & Assets",
    proficiency: 80,
    color: "59,130,246",
  },
  {
    name: "Illustrator",
    abbr: "Ai",
    gradient: "from-orange-500/20 to-orange-600/10",
    text: "text-orange-400",
    border: "border-orange-500/20",
    description: "Vector Graphics",
    proficiency: 75,
    color: "249,115,22",
  },
  {
    name: "After Effects",
    abbr: "Ae",
    gradient: "from-indigo-500/20 to-indigo-600/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    description: "Motion Design",
    proficiency: 70,
    color: "99,102,241",
  },
  {
    name: "Notion",
    abbr: "N",
    gradient: "from-neutral-400/20 to-neutral-500/10",
    text: "text-neutral-300",
    border: "border-neutral-400/20",
    description: "Project Management",
    proficiency: 90,
    color: "163,163,163",
  },
  {
    name: "Framer",
    abbr: "Fr",
    gradient: "from-violet-500/20 to-violet-600/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
    description: "Interactive Prototypes",
    proficiency: 80,
    color: "139,92,246",
  },
  {
    name: "Principle",
    abbr: "Pr",
    gradient: "from-purple-500/20 to-purple-600/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    description: "Animation Design",
    proficiency: 65,
    color: "168,85,247",
  },
]

/* ─── Stats ─── */
const stats = [
  { label: "Projects Completed", value: "25+", icon: "◆" },
  { label: "Happy Clients", value: "10+", icon: "★" },
  { label: "Design Hours", value: "2K+", icon: "◎" },
  { label: "Tools Mastered", value: "8+", icon: "⬡" },
]

/* ─── Ease curve ─── */
const ease = [0.22, 1, 0.36, 1] as const

/* ─── Experience Card ─── */
function ExperienceCard({
  exp,
  index,
  isActive,
  onSelect,
}: {
  exp: (typeof experiences)[0]
  index: number
  isActive: boolean
  onSelect: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease }}
      onClick={onSelect}
      className="group relative cursor-pointer"
    >
      {/* Timeline connector */}
      <div className="absolute -left-[33px] top-0 bottom-0 flex flex-col items-center">
        {/* Dot */}
        <motion.div
          animate={{
            scale: isActive ? 1.3 : 1,
            boxShadow: isActive
              ? `0 0 20px rgba(${exp.color},0.6), 0 0 40px rgba(${exp.color},0.3)`
              : `0 0 8px rgba(${exp.color},0.3)`,
          }}
          transition={{ duration: 0.4, ease }}
          className="relative z-10 h-4 w-4 rounded-full border-2"
          style={{
            borderColor: `rgba(${exp.color},0.8)`,
            background: isActive ? `rgb(${exp.color})` : `rgba(${exp.color},0.3)`,
          }}
        >
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ background: `rgba(${exp.color},0.4)` }}
            />
          )}
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        animate={{
          borderColor: isActive ? `rgba(${exp.color},0.3)` : "rgba(255,255,255,0.06)",
          background: isActive ? `rgba(${exp.color},0.04)` : "rgba(255,255,255,0.02)",
        }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:border-white/10"
      >
        {/* Glow effect on active */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60"
            style={{
              background: `radial-gradient(circle, rgba(${exp.color},0.08), transparent 70%)`,
            }}
          />
        )}

        {/* Header */}
        <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{
                  background: `rgba(${exp.color},0.12)`,
                  color: `rgba(${exp.color},0.9)`,
                  border: `1px solid rgba(${exp.color},0.15)`,
                }}
              >
                {exp.type}
              </span>
              <span className="text-[11px] text-white/30 tracking-wider">{exp.location}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
            <p className="mt-1 text-sm text-white/50">{exp.company}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold tabular-nums" style={{ color: `rgba(${exp.color},0.8)` }}>
              {exp.year}
            </p>
            <p className="text-[11px] text-white/30">{exp.period}</p>
          </div>
        </div>

        {/* Description */}
        <p className="relative z-10 mt-5 text-sm leading-relaxed text-white/50">{exp.description}</p>

        {/* Expandable content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="overflow-hidden"
            >
              {/* Highlights */}
              <div className="mt-6 pt-6" style={{ borderTop: `1px solid rgba(${exp.color},0.1)` }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-3">
                  Key Highlights
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {exp.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-2"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: `rgba(${exp.color},0.6)` }}
                      />
                      <span className="text-[13px] text-white/55">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-3">
                  Skills Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="rounded-full px-3 py-1 text-[11px] font-medium"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand indicator */}
        <motion.div
          className="mt-4 flex items-center gap-2"
          animate={{ opacity: isActive ? 0 : 0.4 }}
        >
          <div className="h-[1px] w-4" style={{ background: `rgba(${exp.color},0.4)` }} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            {isActive ? "" : "Click to expand"}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Tool Card ─── */
function ToolCard({ tool, index }: { tool: (typeof tools)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br ${tool.gradient} p-5 backdrop-blur-sm transition-all duration-500 hover:border-white/15`}
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle, rgba(${tool.color},0.15), transparent 70%)` }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <span className={`text-lg font-bold ${tool.text}`}>{tool.abbr}</span>
            </div>
          </div>

          <h4 className="text-sm font-semibold text-white/90">{tool.name}</h4>
          <p className="mt-0.5 text-[11px] text-white/35">{tool.description}</p>

          {/* Proficiency bar */}
          <div className="mt-3">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] text-white/30 uppercase tracking-wider">Proficiency</span>
              <span className="text-[10px] font-semibold" style={{ color: `rgba(${tool.color},0.8)` }}>
                {tool.proficiency}%
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${tool.proficiency}%` } : {}}
                transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, rgba(${tool.color},0.6), rgba(${tool.color},0.9))`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Experience Page ─── */
export function ExperiencePage() {
  const [activeId, setActiveId] = useState(1)
  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" })

  const { scrollYProgress } = useScroll()
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "#050505" }}>
      {/* ─── Background elements ─── */}
      <div className="pointer-events-none fixed inset-0">
        {/* Top-right orb */}
        <div
          className="absolute -right-40 top-20 h-[600px] w-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.04), transparent 60%)",
          }}
        />
        {/* Bottom-left orb */}
        <div
          className="absolute -left-40 bottom-0 h-[500px] w-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.03), transparent 60%)",
          }}
        />
        {/* Center floating orb */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.025), transparent 60%)",
          }}
        />
      </div>

      {/* ─── Hero Section ─── */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="mb-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]"
          >
            <Link href="/" className="text-white/30 hover:text-white/50 transition-colors">
              Home
            </Link>
            <span className="text-white/15">/</span>
            <span style={{ color: "rgba(139,92,246,0.7)" }}>Experience</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
            <div>
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "rgba(139,92,246,0.7)" }}
              >
                My Journey
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="text-white">Experience</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  &amp; Expertise
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/40"
              >
                A timeline of my design journey — from curious explorer to dedicated
                creator. Each chapter shaped my craft and vision.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease }}
                  className="group rounded-2xl border border-white/[0.06] p-5 transition-all duration-500 hover:border-white/10"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-lg opacity-40 group-hover:opacity-60 transition-opacity" style={{ color: "rgba(139,92,246,0.8)" }}>
                    {stat.icon}
                  </span>
                  <p className="mt-2 text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/30">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8, ease }}
            className="mt-16 h-[1px] origin-left"
            style={{
              background: "linear-gradient(to right, rgba(139,92,246,0.3), rgba(139,92,246,0.05), transparent)",
            }}
          />
        </div>
      </section>

      {/* ─── Timeline Section ─── */}
      <section ref={timelineRef} className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            {/* Left sidebar — sticky nav */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 mb-6">
                  Timeline
                </p>
                <div className="space-y-2">
                  {experiences.map((exp) => (
                    <motion.button
                      key={exp.id}
                      onClick={() => setActiveId(exp.id)}
                      className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300"
                      animate={{
                        background: activeId === exp.id ? `rgba(${exp.color},0.08)` : "transparent",
                        borderColor: activeId === exp.id ? `rgba(${exp.color},0.15)` : "transparent",
                      }}
                      style={{ border: "1px solid transparent" }}
                    >
                      <div
                        className="h-2 w-2 rounded-full transition-all duration-300"
                        style={{
                          background: activeId === exp.id ? `rgb(${exp.color})` : "rgba(255,255,255,0.15)",
                          boxShadow: activeId === exp.id ? `0 0 10px rgba(${exp.color},0.5)` : "none",
                        }}
                      />
                      <div>
                        <p
                          className="text-sm font-medium transition-colors duration-300"
                          style={{
                            color: activeId === exp.id ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                          }}
                        >
                          {exp.title}
                        </p>
                        <p className="text-[11px] text-white/25">{exp.year}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="mt-8 rounded-xl border border-white/[0.04] p-4" style={{ background: "rgba(139,92,246,0.03)" }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 mb-2">Currently</p>
                  <p className="text-sm text-white/60">Open to new design opportunities & collaborations</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="status-dot h-2 w-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] text-emerald-400/60">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Timeline cards */}
            <div className="relative pl-8">
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.04]">
                <motion.div
                  className="w-full origin-top"
                  style={{
                    height: lineHeight,
                    background: "linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(168,85,247,0.3), rgba(124,58,237,0.1))",
                  }}
                />
              </div>

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <ExperienceCard
                    key={exp.id}
                    exp={exp}
                    index={i}
                    isActive={activeId === exp.id}
                    onSelect={() => setActiveId(exp.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tools & Skills Section ─── */}
      <section ref={toolsRef} className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Section header */}
          <div className="mb-12 md:mb-16 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={toolsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "rgba(139,92,246,0.7)" }}
            >
              Arsenal
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={toolsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white"
            >
              Tools &amp; Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={toolsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-4 text-base text-white/40 leading-relaxed"
            >
              The creative toolkit I rely on daily to bring ideas to life — from concept to pixel-perfect execution.
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={toolsInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="mb-12 h-[1px] origin-left"
            style={{
              background: "linear-gradient(to right, rgba(139,92,246,0.2), transparent 80%)",
            }}
          />

          {/* Tool cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.06] p-10 md:p-16 text-center"
            style={{ background: "rgba(139,92,246,0.03)" }}
          >
            {/* Background glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2"
              style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08), transparent 70%)" }}
            />

            <p
              className="relative mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "rgba(139,92,246,0.7)" }}
            >
              Let&apos;s Collaborate
            </p>
            <h2 className="relative text-3xl md:text-5xl font-bold tracking-tight text-white">
              Got a project in mind?
            </h2>
            <p className="relative mt-4 text-base text-white/40 max-w-lg mx-auto">
              I&apos;m always excited to work on new challenges. Let&apos;s create something extraordinary together.
            </p>
            <Link
              href="/#contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-500 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.8), rgba(168,85,247,0.8))",
                boxShadow: "0 4px 30px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)",
              }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-16" />
    </div>
  )
}
