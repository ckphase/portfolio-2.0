"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import gsap from "gsap"

/* ─── Ease ─── */
const ease = [0.22, 1, 0.36, 1] as const

/* ─── Achievements ─── */
const achievements = [
  {
    title: "Design Competition Winner",
    event: "National UI Challenge 2024",
    description: "Secured 1st place among 200+ participants for designing an accessible health-tech dashboard.",
    year: "2024",
    color: "234,179,8",
  },
  {
    title: "Best Student Designer",
    event: "College Annual Awards",
    description: "Recognized for outstanding contributions to design projects and mentoring junior designers.",
    year: "2024",
    color: "139,92,246",
  },
  {
    title: "Hackathon Finalist",
    event: "DesignHack 2023",
    description: "Built a complete fintech app prototype in 48 hours, finishing in the top 5 out of 80 teams.",
    year: "2023",
    color: "236,72,153",
  },
  {
    title: "Google UX Certified",
    event: "Google UX Design Certificate",
    description: "Completed the full Google UX Design Professional Certificate covering the end-to-end design process.",
    year: "2023",
    color: "59,130,246",
  },
]

/* ─── Research ─── */
const research = [
  {
    title: "Impact of Micro-interactions on User Retention in Mobile Apps",
    journal: "Design Research Quarterly",
    abstract:
      "A study examining how subtle UI animations and micro-interactions influence user engagement metrics, session duration, and 30-day retention rates across 12 mobile applications.",
    tags: ["UX Research", "Mobile", "Micro-interactions", "Retention"],
    year: "2024",
    status: "Published",
    color: "139,92,246",
  },
  {
    title: "Accessibility-First Design Systems: A Framework for Inclusive Digital Products",
    journal: "International Conference on HCI",
    abstract:
      "Proposed a modular design system framework that embeds WCAG 2.2 AA compliance at the component level, reducing accessibility remediation costs by 60%.",
    tags: ["Accessibility", "Design Systems", "WCAG", "Inclusive Design"],
    year: "2024",
    status: "Under Review",
    color: "168,85,247",
  },
  {
    title: "Color Psychology in E-commerce: Conversion Patterns Across Demographics",
    journal: "UX Research Journal",
    abstract:
      "Analyzed A/B test data from 8 e-commerce platforms to identify how color palette choices affect conversion rates across different age groups and cultural backgrounds.",
    tags: ["Color Theory", "E-commerce", "A/B Testing", "Psychology"],
    year: "2023",
    status: "Published",
    color: "99,102,241",
  },
]

/* ─── Featured Projects ─── */
const featuredProjects = [
  {
    title: "FemoraAI — Women's Health Intelligence",
    category: "Web Development",
    description: "An AI-powered women's health platform with cycle tracking, mood & energy pattern analysis, and personalized insights — coded with React, TypeScript, and shadcn/ui.",
    metrics: { users: "5K+", improvement: "75%", screens: "5+" },
    gradient: ["180,60,80", "120,40,60"],
    tags: ["React", "TypeScript", "shadcn/ui", "Health Tech"],
  },
  {
    title: "HealthDash — Patient Portal Redesign",
    category: "UI/UX Design",
    description: "End-to-end redesign of a patient portal serving 50K+ users, improving task completion rate by 42%.",
    metrics: { users: "50K+", improvement: "42%", screens: "35+" },
    gradient: ["139,92,246", "168,85,247"],
    tags: ["Healthcare", "Dashboard", "Design System"],
  },
  {
    title: "ShopWave — E-commerce Experience",
    category: "E-commerce Design",
    description: "Mobile-first shopping experience with personalized recommendations and seamless checkout flow.",
    metrics: { users: "20K+", improvement: "28%", screens: "24+" },
    gradient: ["236,72,153", "244,63,94"],
    tags: ["E-commerce", "Mobile", "Personalization"],
  },
  {
    title: "EduLearn — Learning Platform",
    category: "Product Design",
    description: "Gamified learning platform with progress tracking, interactive quizzes, and social features.",
    metrics: { users: "15K+", improvement: "55%", screens: "40+" },
    gradient: ["59,130,246", "99,102,241"],
    tags: ["EdTech", "Gamification", "Social"],
  },
]

/* ─── Skills ─── */
const skillCategories = [
  {
    title: "Design",
    skills: [
      { name: "UI Design", level: 95 },
      { name: "UX Research", level: 90 },
      { name: "Wireframing", level: 92 },
      { name: "Prototyping", level: 88 },
      { name: "Design Systems", level: 85 },
      { name: "Visual Design", level: 90 },
    ],
    color: "139,92,246",
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 85 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "After Effects", level: 70 },
      { name: "Framer", level: 80 },
    ],
    color: "168,85,247",
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 92 },
      { name: "Team Leadership", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "User Empathy", level: 95 },
      { name: "Presentation", level: 88 },
      { name: "Time Management", level: 82 },
    ],
    color: "99,102,241",
  },
]

/* ─── Resume Timeline ─── */
const education = [
  {
    year: "2022 – 2026",
    title: "Bachelor of Design",
    institution: "Design University",
    description: "Specialization in UI/UX and Interaction Design. Dean's List — CGPA 9.1/10.",
    color: "139,92,246",
  },
  {
    year: "2020 – 2022",
    title: "Higher Secondary (XII)",
    institution: "Arts & Design Academy",
    description: "Graduated with distinction. Focused on Fine Arts, Digital Media, and Computer Science.",
    color: "168,85,247",
  },
]

const certifications = [
  { name: "Google UX Design Professional Certificate", issuer: "Google / Coursera", year: "2023" },
  { name: "Interaction Design Specialization", issuer: "UC San Diego / Coursera", year: "2023" },
  { name: "Advanced Figma Masterclass", issuer: "Design+Code", year: "2024" },
  { name: "Design Thinking & Innovation", issuer: "University of Virginia", year: "2022" },
]

/* ─── Interests / Fun Facts ─── */
const funFacts = [
  { text: "I sketch ideas on paper before opening Figma" },
  { text: "I read 2+ design books every month" },
  { text: "Powered by chai and curiosity" },
  { text: "Fascinated by cross-cultural design patterns" },
  { text: "I design better with lo-fi beats playing" },
  { text: "I see every problem as a design puzzle" },
]

/* ─── Stats ─── */
const heroStats = [
  { value: "25+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "3+", label: "Publications" },
  { value: "9.1", label: "CGPA" },
]

/* ─── Photo Card with 3D tilt ─── */
function PhotoCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(wrapperRef, { once: true, margin: "-80px" })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !glowRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(cardRef.current, { rotateY: x * 8, rotateX: -y * 8, duration: 0.5, ease: "power2.out" })
    gsap.to(glowRef.current, { x: x * 40, y: y * 40, duration: 0.5, ease: "power2.out" })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !glowRef.current) return
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "power3.out" })
    gsap.to(glowRef.current, { x: 0, y: 0, duration: 0.8, ease: "power3.out" })
  }, [])

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.3, ease }}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[400px] w-full overflow-hidden rounded-3xl md:h-[480px]"
        style={{
          transformStyle: "preserve-3d",
          border: "1px solid rgba(139,92,246,0.15)",
          background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(0,0,0,0.4))",
          boxShadow: "0 25px 80px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }}
        />
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "brightness(0.85) saturate(0.9)", opacity: 0.9 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)" }}
        />
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <p className="text-xl font-bold text-white">Chandanpreet Kaur</p>
          <p className="mt-1 text-sm text-white/50">UI/UX Designer &amp; Creative Thinker</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="status-dot h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-emerald-400/70">Available for work</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Section Tab Navigation ─── */
const sections = [
  { id: "achievements", label: "Achievements" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
]

/* ─── Achievement Card ─── */
function AchievementCard({ item, index }: { item: (typeof achievements)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all duration-500 hover:border-white/10"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, rgba(${item.color},0.1), transparent 70%)` }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
            style={{
              background: `rgba(${item.color},0.1)`,
              color: `rgba(${item.color},0.8)`,
              border: `1px solid rgba(${item.color},0.15)`,
            }}
          >
            {item.year}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
        <p className="mt-1 text-[12px] font-medium" style={{ color: `rgba(${item.color},0.7)` }}>
          {item.event}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/45">{item.description}</p>
      </div>
    </motion.div>
  )
}

/* ─── Research Card ─── */
function ResearchCard({ item, index }: { item: (typeof research)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500 hover:border-white/10"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Top accent bar */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(to right, rgba(${item.color},0.5), rgba(${item.color},0.1), transparent)`,
        }}
      />

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
              style={{
                background: `rgba(${item.color},0.08)`,
                border: `1px solid rgba(${item.color},0.12)`,
              }}
            >
              📄
            </div>
            <div>
              <span className="text-[11px] text-white/30 uppercase tracking-wider">{item.journal}</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-white/25">{item.year}</span>
                <span
                  className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                  style={{
                    background: item.status === "Published" ? "rgba(52,211,153,0.1)" : "rgba(251,191,36,0.1)",
                    color: item.status === "Published" ? "rgba(52,211,153,0.8)" : "rgba(251,191,36,0.8)",
                    border: `1px solid ${item.status === "Published" ? "rgba(52,211,153,0.15)" : "rgba(251,191,36,0.15)"}`,
                  }}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>

        <AnimatePresence>
          {expanded && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mt-3 text-sm leading-relaxed text-white/45 overflow-hidden"
            >
              {item.abstract}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300"
          style={{ color: `rgba(${item.color},0.7)` }}
        >
          {expanded ? "Show Less" : "Read Abstract →"}
        </button>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 text-[10px] font-medium text-white/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Project Card ─── */
function ProjectCard({ project, index }: { project: (typeof featuredProjects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500 hover:border-white/10"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Gradient header */}
      <div
        className="relative h-40 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(${project.gradient[0]},0.15), rgba(${project.gradient[1]},0.08))`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 70% 30%, rgba(${project.gradient[0]},0.2), transparent 60%)`,
          }}
        />
        {/* Floating badge */}
        <div className="absolute top-4 right-4">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/80"
            style={{
              background: `rgba(${project.gradient[0]},0.2)`,
              border: `1px solid rgba(${project.gradient[0]},0.3)`,
              backdropFilter: "blur(8px)",
            }}
          >
            {project.category}
          </span>
        </div>
        {/* Decorative shapes */}
        <div
          className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl rotate-12 opacity-10"
          style={{ background: `rgba(${project.gradient[0]},0.5)` }}
        />
        <div
          className="absolute top-8 left-6 h-16 w-16 rounded-xl -rotate-6 opacity-10"
          style={{ background: `rgba(${project.gradient[1]},0.5)` }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/45">{project.description}</p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {Object.entries(project.metrics).map(([key, val]) => (
            <div
              key={key}
              className="rounded-xl p-3 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <p className="text-lg font-bold text-white">{val}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/30 capitalize">{key}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 text-[10px] font-medium text-white/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Skill Category ─── */
function SkillCategory({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease }}
      className="rounded-2xl border border-white/[0.06] p-6 md:p-8"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-white/60">{skill.name}</span>
              <span
                className="text-[11px] font-semibold tabular-nums"
                style={{ color: `rgba(${category.color},0.7)` }}
              >
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, rgba(${category.color},0.4), rgba(${category.color},0.9))`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Main About Page ─── */
export function AboutPage() {
  const [activeTab, setActiveTab] = useState("achievements")
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentRef = useRef<HTMLDivElement>(null)
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "#050505" }}>
      {/* ─── Background ambient ─── */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute -right-40 top-0 h-[700px] w-[700px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.035), transparent 60%)" }}
        />
        <div
          className="absolute -left-40 bottom-20 h-[500px] w-[500px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.025), transparent 60%)" }}
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 top-1/2 h-[300px] w-[300px]"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.02), transparent 60%)" }}
        />
      </div>

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-8 md:pt-40 md:pb-12">
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
            <span style={{ color: "rgba(139,92,246,0.7)" }}>About</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20 items-start">
            {/* Left — Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "rgba(139,92,246,0.7)" }}
              >
                About Me
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              >
                <span className="text-white">Designer.</span>
                <br />
                <span className="text-white/40">Thinker.</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Creator.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/45"
              >
                I&apos;m a student designer passionate about crafting meaningful digital
                experiences. My work sits at the intersection of user needs, business
                goals and clean, intentional design — transforming complex problems
                into elegant, user-centered solutions.
              </motion.p>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="mt-8 flex flex-wrap gap-6"
              >
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Resume button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7, ease }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.8), rgba(168,85,247,0.8))",
                    boxShadow: "0 4px 30px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)",
                  }}
                >
                  Download Resume
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-y-0.5"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            {/* Right — Photo */}
            <PhotoCard />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FUN FACTS MARQUEE
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-10 overflow-hidden">
        <div
          className="flex gap-8 animate-marquee"
          style={{
            width: "max-content",
            animation: "marquee-scroll 30s linear infinite",
          }}
        >
          {[...funFacts, ...funFacts].map((fact, i) => (
            <div
              key={i}
              className="rounded-full border border-white/[0.06] px-5 py-2.5 shrink-0"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span className="text-[12px] text-white/50 whitespace-nowrap">{fact.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TABBED CONTENT
      ═══════════════════════════════════════════ */}
      <section ref={contentRef} className="relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Tab navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="mb-12 flex flex-wrap gap-2 rounded-2xl border border-white/[0.06] p-2"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className="relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
                style={{
                  background: activeTab === sec.id ? "rgba(139,92,246,0.12)" : "transparent",
                  color: activeTab === sec.id ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                  border: activeTab === sec.id ? "1px solid rgba(139,92,246,0.2)" : "1px solid transparent",
                }}
              >
                <span className="hidden sm:inline">{sec.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {/* ── Achievements ── */}
            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Achievements &amp; Awards
                  </h2>
                  <p className="mt-3 text-base text-white/40 max-w-2xl">
                    Milestones that mark my journey — recognition for pushing creative boundaries
                    and delivering impactful design solutions.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {achievements.map((item, i) => (
                    <AchievementCard key={item.title} item={item} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Research ── */}
            {activeTab === "research" && (
              <motion.div
                key="research"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Research &amp; Publications
                  </h2>
                  <p className="mt-3 text-base text-white/40 max-w-2xl">
                    Academic contributions exploring design patterns, accessibility, and user behavior —
                    bridging theory and practice.
                  </p>
                </div>
                <div className="space-y-5">
                  {research.map((item, i) => (
                    <ResearchCard key={item.title} item={item} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Projects ── */}
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      Featured Projects
                    </h2>
                    <p className="mt-3 text-base text-white/40 max-w-2xl">
                      A selection of projects that showcase my design process, problem-solving abilities,
                      and commitment to measurable outcomes.
                    </p>
                  </div>
                  <Link
                    href="/projects"
                    className="hidden md:inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/40 hover:text-white/60 transition-colors"
                  >
                    View All
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {featuredProjects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Skills ── */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Skills &amp; Expertise
                  </h2>
                  <p className="mt-3 text-base text-white/40 max-w-2xl">
                    A comprehensive view of my design capabilities, technical proficiencies,
                    and the soft skills that fuel effective collaboration.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {skillCategories.map((cat, i) => (
                    <SkillCategory key={cat.title} category={cat} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Resume ── */}
            {activeTab === "resume" && (
              <motion.div
                key="resume"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Resume &amp; Education
                  </h2>
                  <p className="mt-3 text-base text-white/40 max-w-2xl">
                    My academic background, certifications, and the learning path that
                    built my design foundation.
                  </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
                  {/* Education */}
                  <div>
                    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                      Education
                    </p>
                    <div className="relative pl-6 space-y-6">
                      {/* Timeline line */}
                      <div
                        className="absolute left-0 top-2 bottom-2 w-[1px]"
                        style={{
                          background: "linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(139,92,246,0.05))",
                        }}
                      />
                      {education.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.15, ease }}
                          className="relative"
                        >
                          <div
                            className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full"
                            style={{
                              background: `rgb(${item.color})`,
                              boxShadow: `0 0 12px rgba(${item.color},0.5)`,
                            }}
                          />
                          <p className="text-[12px] font-semibold tabular-nums" style={{ color: `rgba(${item.color},0.7)` }}>
                            {item.year}
                          </p>
                          <h4 className="mt-1 text-base font-bold text-white">{item.title}</h4>
                          <p className="text-sm text-white/40">{item.institution}</p>
                          <p className="mt-2 text-[13px] leading-relaxed text-white/35">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                      Certifications
                    </p>
                    <div className="space-y-3">
                      {certifications.map((cert, i) => (
                        <motion.div
                          key={cert.name}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1, ease }}
                          className="group flex items-start gap-4 rounded-xl border border-white/[0.06] p-4 transition-all duration-300 hover:border-white/10"
                          style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                            style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.12)" }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="rgba(139,92,246,0.7)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-white/80">{cert.name}</h4>
                            <div className="mt-1 flex items-center gap-2">
                              <span className="text-[11px] text-white/35">{cert.issuer}</span>
                              <span className="text-white/10">·</span>
                              <span className="text-[11px] text-white/25">{cert.year}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Download CTA */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 rounded-xl border border-white/[0.06] p-5 text-center"
                      style={{ background: "rgba(139,92,246,0.03)" }}
                    >
                      <p className="text-sm text-white/50">Want the full picture?</p>
                      <a
                        href="#"
                        className="mt-3 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-105"
                        style={{
                          background: "linear-gradient(135deg, rgba(139,92,246,0.7), rgba(168,85,247,0.7))",
                          boxShadow: "0 4px 20px rgba(139,92,246,0.25)",
                        }}
                      >
                        Download Full Resume
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════ */}
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
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2"
              style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08), transparent 70%)" }}
            />
            <p
              className="relative mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "rgba(139,92,246,0.7)" }}
            >
              Let&apos;s Connect
            </p>
            <h2 className="relative text-3xl md:text-5xl font-bold tracking-tight text-white">
              Interested in working together?
            </h2>
            <p className="relative mt-4 text-base text-white/40 max-w-lg mx-auto">
              Whether it&apos;s a design project, research collaboration, or just a creative conversation —
              I&apos;d love to hear from you.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-500 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.8), rgba(168,85,247,0.8))",
                  boxShadow: "0 4px 30px rgba(139,92,246,0.3)",
                }}
              >
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 rounded-full border px-8 py-3 text-sm font-semibold transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-16" />
    </div>
  )
}
