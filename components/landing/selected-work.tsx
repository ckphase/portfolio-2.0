"use client"

import { useRef, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"

/* ─── Data ─── */
const works = [
  { num: "01", title: "Rhythm", category: "Music App Experience", color: "139,92,246" },
  { num: "02", title: "Brewed", category: "Brand Identity & Packaging", color: "168,85,247" },
  { num: "03", title: "FinDash", category: "Finance Dashboard", color: "124,58,237" },
]

/* ─── Project Card ─── */
function ProjectCard({ work, index }: { work: (typeof works)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current || !glowRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      gsap.to(glowRef.current, { x, y, duration: 0.4, ease: "power2.out" })
      gsap.to(cardRef.current, {
        rotateY: ((x / rect.width) - 0.5) * 6,
        rotateX: -((y / rect.height) - 0.5) * 6,
        duration: 0.4,
        ease: "power2.out",
      })
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" })
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.15 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group"
      style={{ perspective: "800px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer overflow-hidden rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image area */}
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(${work.color},0.15) 0%, rgba(${work.color},0.05) 50%, rgba(0,0,0,0.4) 100%)`,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Glow follower */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle, rgba(${work.color},0.25) 0%, transparent 70%)`,
            }}
          />

          {/* Number badge */}
          <div
            className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
            style={{
              background: `rgba(${work.color},0.2)`,
              color: `rgba(${work.color},1)`,
              border: `1px solid rgba(${work.color},0.3)`,
              backdropFilter: "blur(8px)",
            }}
          >
            {work.num}
          </div>

          {/* Placeholder content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-32 w-48 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, rgba(${work.color},0.3), rgba(${work.color},0.1))`,
                boxShadow: `0 0 60px rgba(${work.color},0.15)`,
              }}
            />
          </div>

          {/* Arrow icon */}
          <motion.div
            className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.div>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, rgba(${work.color},0.12), transparent 60%)`,
            }}
          />
        </div>

        {/* Card info */}
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
              {work.title}
            </h3>
            <p className="mt-1 text-sm text-white/50">{work.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Selected Work Section ─── */
export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#050505" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px]"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.04), transparent 70%)",
        }}
      />
      {/* Flowing mesh gradient */}
      <div
        className="pointer-events-none absolute -bottom-40 left-0 right-0 h-80"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.015), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header row */}
        <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_2fr]">
          {/* Left - Title */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "rgba(139,92,246,0.7)" }}
            >
              Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold text-white md:text-5xl"
            >
              Selected Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/55"
            >
              A selection of projects that blend research, strategy and visual design to solve real user problems.
            </motion.p>

            <motion.a
              href="/projects"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
            >
              View All Projects
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          </div>

          {/* Right - Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {works.map((work, i) => (
              <ProjectCard key={work.num} work={work} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
