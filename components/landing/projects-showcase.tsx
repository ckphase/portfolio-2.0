"use client"

import { useRef, useCallback, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import gsap from "gsap"

/* ─── Projects Data ─── */
const projects = [
  {
    id: 1,
    num: "01",
    title: "Business Website",
    platform: "WordPress",
    platformIcon: "wordpress",
    category: "Web Design",
    description:
      "A clean, conversion-focused website built on WordPress with custom design, responsive layout, and optimized performance.",
    tags: ["UI/UX Design", "WordPress", "Responsive", "SEO"],
    mockupGradient: ["139,92,246", "99,102,241"],
    mockupTitle: "We build digital experiences that drive results",
    mockupSubtitle: "Helping brands grow with strategy, design and technology.",
  },
  {
    id: 2,
    num: "02",
    title: "E-commerce Store",
    platform: "Shopify",
    platformIcon: "shopify",
    category: "E-commerce",
    description:
      "A modern Shopify store with a seamless shopping experience, product filters, and secure checkout flow.",
    tags: ["UI/UX Design", "Shopify", "E-commerce", "Optimization"],
    mockupGradient: ["168,85,247", "124,58,237"],
    mockupTitle: "New Arrivals",
    mockupSubtitle: "Discover our latest collection with timeless luxury and premium materials.",
  },
  {
    id: 3,
    num: "03",
    title: "Custom Web App",
    platform: "Coded",
    platformIcon: "code",
    category: "Web App",
    description:
      "A fully custom-coded web application with a powerful admin panel, user authentication, and real-time functionality.",
    tags: ["UI/UX Design", "Full Stack", "Web App", "API Integration"],
    mockupGradient: ["59,130,246", "99,102,241"],
    mockupTitle: "Dashboard",
    mockupSubtitle: "Total Users: 2,543 · Revenue: $32,485 · Orders: 1,246",
  },
]

const categories = ["All Projects", "UI/UX Design", "Web Design", "E-commerce", "Web App"]

/* ─── Platform Icon ─── */
function PlatformIcon({ type }: { type: string }) {
  switch (type) {
    case "wordpress":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
            W
          </text>
        </svg>
      )
    case "shopify":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80">
          <path
            d="M15.5 3.5L14 9h-3.5l-1 3.5L12 17l4.5-8.5L15.5 3.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="20" r="1" fill="currentColor" />
        </svg>
      )
    case "code":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/80">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    default:
      return null
  }
}

/* ─── Floating 3D Orb ─── */
function FloatingOrb() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!orbRef.current) return
    gsap.to(orbRef.current, {
      y: -15,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    <div ref={orbRef} className="relative h-44 w-44 md:h-52 md:w-52">
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "rgba(139,92,246,0.2)" }}
      />
      <div
        className="absolute inset-4 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(99,102,241,0.25), rgba(139,92,246,0.15))",
          border: "1px solid rgba(139,92,246,0.25)",
          boxShadow:
            "0 0 80px rgba(139,92,246,0.25), inset 0 0 60px rgba(139,92,246,0.1)",
        }}
      />
      <div
        className="absolute left-1/4 top-1/4 h-1/3 w-1/3 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  )
}

/* ─── Project Mockup ─── */
function ProjectMockup({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="relative h-full min-h-[280px] overflow-hidden rounded-2xl md:min-h-[340px]"
      style={{
        background: `linear-gradient(145deg, rgba(${project.mockupGradient[0]},0.12) 0%, rgba(${project.mockupGradient[1]},0.06) 50%, rgba(0,0,0,0.4) 100%)`,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Fake browser chrome */}
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div
          className="mx-auto h-5 w-40 rounded-md"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />
      </div>

      {/* Mockup content */}
      <div className="p-6 md:p-8">
        {project.platformIcon === "code" ? (
          /* Dashboard style for coded app */
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="h-7 w-7 rounded-lg"
                style={{ background: `rgba(${project.mockupGradient[0]},0.3)` }}
              />
              <span className="text-sm font-semibold text-white/80">{project.mockupTitle}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Total Users", value: "2,543", change: "+12%" },
                { label: "Revenue", value: "$32,485", change: "+8.5%" },
                { label: "Orders", value: "1,246", change: "+15%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-[10px] text-white/40">{stat.label}</p>
                  <p className="mt-1 text-base font-bold text-white/90">{stat.value}</p>
                  <p className="text-[10px] text-emerald-400/70">{stat.change}</p>
                </div>
              ))}
            </div>
            {/* Chart placeholder */}
            <div
              className="h-20 rounded-xl"
              style={{
                background: `linear-gradient(to right, rgba(${project.mockupGradient[0]},0.08), rgba(${project.mockupGradient[0]},0.02))`,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          </div>
        ) : project.platformIcon === "shopify" ? (
          /* E-commerce style for Shopify */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white/90">{project.mockupTitle}</span>
              <div className="flex gap-2">
                {["Shop", "Collections", "About"].map((l) => (
                  <span key={l} className="text-[10px] text-white/30">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <p className="max-w-[200px] text-[11px] leading-relaxed text-white/50">
              {project.mockupSubtitle}
            </p>
            <div
              className="inline-block rounded-md px-3 py-1.5 text-[10px] font-semibold"
              style={{
                background: `rgba(${project.mockupGradient[0]},0.3)`,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Shop Now
            </div>
            {/* Product cards */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(${project.mockupGradient[0]},${0.15 - i * 0.03}), rgba(${project.mockupGradient[1]},0.05))`,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Business website style for WordPress */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="h-5 w-5 rounded"
                  style={{ background: `rgba(${project.mockupGradient[0]},0.4)` }}
                />
                <span className="text-[11px] font-semibold text-white/60">Rometheme</span>
              </div>
              <div className="flex gap-3">
                {["Home", "Work", "Services", "About", "Blog", "Contact"].map((l) => (
                  <span key={l} className="text-[9px] text-white/30">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <h4 className="max-w-[260px] text-xl font-bold leading-tight text-white/90">
                {project.mockupTitle}
              </h4>
              <p className="mt-3 max-w-[200px] text-[11px] leading-relaxed text-white/50">
                {project.mockupSubtitle}
              </p>
              <div
                className="mt-4 inline-block rounded-md px-3 py-1.5 text-[10px] font-semibold"
                style={{
                  background: `rgba(${project.mockupGradient[0]},0.3)`,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Get in Touch
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Arrow button bottom-right */}
      <div
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="opacity-60"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </div>
  )
}

/* ─── Project Card ─── */
function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !glowRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    gsap.to(glowRef.current, { x, y, duration: 0.4, ease: "power2.out" })
    gsap.to(cardRef.current, {
      rotateY: ((x / rect.width) - 0.5) * 4,
      rotateX: -((y / rect.height) - 0.5) * 4,
      duration: 0.4,
      ease: "power2.out",
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" })
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      {/* Decorative side dot */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:block">
        <div
          className="h-2.5 w-2.5 rounded-full"
          style={{
            background: `rgba(${project.mockupGradient[0]},0.4)`,
            boxShadow: `0 0 12px rgba(${project.mockupGradient[0]},0.3)`,
          }}
        />
      </div>

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-3xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow follower */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(${project.mockupGradient[0]},0.2) 0%, transparent 70%)`,
          }}
        />

        <div
          className="relative grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:gap-10 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "24px",
          }}
        >
          {/* ── Left Column: Info ── */}
          <div className="relative z-10 flex flex-col justify-between gap-6">
            {/* Number */}
            <span
              className="text-[48px] font-bold leading-none md:text-[56px]"
              style={{ color: "rgba(255,255,255,0.06)" }}
            >
              {project.num}
            </span>

            {/* Platform badge */}
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  background: `rgba(${project.mockupGradient[0]},0.15)`,
                  border: `1px solid rgba(${project.mockupGradient[0]},0.25)`,
                }}
              >
                <PlatformIcon type={project.platformIcon} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                {project.platform}
              </span>
            </div>

            {/* Title + Description */}
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-white md:text-[2.5rem] md:leading-[1.1]">
                {project.title}
              </h3>
              <p className="max-w-sm text-[15px] leading-relaxed text-white/55">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3.5 py-1.5 text-[11px] font-medium text-white/50 transition-colors duration-300 hover:border-white/15 hover:text-white/70"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Case Study link */}
            <a
              href="#"
              className="group/link inline-flex items-center gap-2 text-[13px] font-semibold text-white/70 transition-colors duration-300 hover:text-white"
            >
              View Case Study
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* ── Right Column: Mockup ── */}
          <div className="relative z-10">
            <ProjectMockup project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Hero Section ─── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* MY WORK label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2.5"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="status-dot absolute inline-flex h-full w-full rounded-full"
                  style={{ backgroundColor: "rgba(34,197,94,0.4)" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                My Work
              </span>
            </motion.div>

            {/* Main heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white"
              >
                Projects that
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold italic leading-[1.05] tracking-[-0.02em]"
                style={{ color: "rgba(139,92,246,0.7)" }}
              >
                create impact.
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-md text-[15px] leading-relaxed text-white/50"
            >
              A collection of UI/UX and digital experiences designed and built with purpose.
            </motion.p>
          </div>

          {/* Right: Orb + Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <FloatingOrb />

            {/* Floating quote badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -right-4 top-4 max-w-[180px] rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              <p className="text-[11px] leading-relaxed text-white/50 italic">
                &ldquo;Design is not decoration. It&apos;s how people remember an experience.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Category Filter ─── */
function CategoryFilter({
  active,
  onChange,
}: {
  active: string
  onChange: (cat: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 px-6 pb-12 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => onChange(cat)}
                className="relative rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300"
                style={{
                  background: isActive
                    ? "rgba(139,92,246,0.2)"
                    : "rgba(255,255,255,0.03)",
                  border: isActive
                    ? "1px solid rgba(139,92,246,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: isActive
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.45)",
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── CTA Section ─── */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-[32px] px-8 py-14 md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.03), rgba(0,0,0,0.3))",
            border: "1px solid rgba(139,92,246,0.12)",
            boxShadow: "0 30px 80px rgba(139,92,246,0.06)",
          }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(139,92,246,0.06), transparent 70%)",
            }}
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_auto]">
            <div className="space-y-4">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "rgba(139,92,246,0.7)" }}
              >
                Let&apos;s Work Together
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.15] text-white">
                Have a project in mind?
                <br />
                <span className="italic" style={{ color: "rgba(139,92,246,0.6)" }}>
                  Let&apos;s create something amazing.
                </span>
              </h2>
              <p className="max-w-md text-[15px] text-white/50">
                I&apos;m currently available for freelance opportunities and exciting collaborations.
              </p>
            </div>

            <a
              href="/#contact"
              className="group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(139,92,246,0.2)",
                border: "1px solid rgba(139,92,246,0.4)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Get In Touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <div
      className="relative z-10 border-t px-6 py-8 md:px-12"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
            style={{
              border: "1px solid rgba(139,92,246,0.2)",
              background: "rgba(139,92,246,0.06)",
              color: "rgba(139,92,246,0.7)",
            }}
          >
            N
          </div>
          <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white/60">
            Chandanpreet Kaur
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[12px] italic text-white/30">
          Design isn&apos;t decoration. It&apos;s how people remember an experience.
        </p>

        {/* Copyright */}
        <p className="text-[12px] text-white/30">© 2026 All Rights Reserved</p>
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.tags.includes(activeCategory) || p.category === activeCategory)

  return (
    <div className="relative">
      {/* SCROLL TO EXPLORE — vertical side text */}
      <div className="fixed bottom-8 left-6 z-50 hidden lg:block">
        <p
          className="text-[10px] font-medium uppercase tracking-[0.25em]"
          style={{
            writingMode: "vertical-lr",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Scroll to Explore
        </p>
      </div>

      <HeroSection />
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* Projects List */}
      <div className="relative z-10 space-y-10 px-6 pb-8 md:space-y-14 md:px-12">
        <div className="mx-auto max-w-7xl space-y-10 md:space-y-14 pl-4 md:pl-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-white/40"
            >
              No projects found in this category.
            </motion.p>
          )}
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  )
}
