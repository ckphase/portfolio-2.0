"use client"

import { useRef, useCallback, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"

/* ─── Project Data ─── */
const projects = [
  {
    number: "01",
    title: "Asset Management Platform",
    description:
      "End-to-end asset tracking and management system for a solar energy company based in Dubai. Real-time monitoring, maintenance scheduling, and performance analytics.",
    tags: ["UI/UX Design", "Dashboard", "Enterprise"],
    status: "In Progress",
  },
  {
    number: "02",
    title: "Sports Complex Booking System",
    description:
      "A custom booking system plugin for a sports complex — court reservations, membership management, and automated scheduling with a seamless user experience.",
    tags: ["Plugin Development", "Booking UX", "System Design"],
    status: "In Progress",
  },
  {
    number: "03",
    title: "Music & Creative Projects",
    description:
      "Exploring the intersection of sound, visuals and digital art. Building tools and experiences that merge creativity with technology.",
    tags: ["Creative Direction", "Audio-Visual", "Experiments"],
    status: "Ongoing",
  },
  {
    number: "04",
    title: "International Study Journey",
    description:
      "Preparing for the next chapter — international university transition, building new networks, and continuing to create across borders.",
    tags: ["Personal Growth", "Global", "2026–2027"],
    status: "Upcoming",
  },
]

/* ─── Reveal wrapper ─── */
function RevealText({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
        animate={isInView ? { y: "0%", opacity: 1, filter: "blur(0px)" } : {}}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ─── Single Project Card ─── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const cardRef = useRef<HTMLDivElement>(null)

  /* Subtle hover tilt */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(cardRef.current, {
      rotateY: x * 4,
      rotateX: -y * 4,
      duration: 0.5,
      ease: "power2.out",
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power2.out",
    })
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 1,
        delay: 0.1 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-2xl border transition-all duration-700 hover:border-white/[0.08]"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
          backdropFilter: "blur(12px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top gradient glow on hover */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)",
          }}
        />

        {/* Corner accent */}
        <div
          className="pointer-events-none absolute -right-px -top-px h-24 w-24 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.04), transparent 70%)",
          }}
        />

        <div className="relative p-6 md:p-8">
          {/* Top row: Number + Status */}
          <div className="mb-6 flex items-start justify-between">
            {/* Large number */}
            <span
              className="text-[clamp(3rem,5vw,4.5rem)] font-extralight leading-none tabular-nums tracking-[-0.04em] transition-colors duration-700 group-hover:text-white/30"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              {project.number}
            </span>

            {/* Status badge */}
            <div
              className="mt-2 flex items-center gap-2 rounded-full border px-3 py-1"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor:
                    project.status === "In Progress"
                      ? "rgba(255,255,255,0.6)"
                      : project.status === "Ongoing"
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(255,255,255,0.2)",
                  boxShadow:
                    project.status === "In Progress"
                      ? "0 0 8px rgba(255,255,255,0.2)"
                      : "none",
                }}
              />
              <span
                className="text-[10px] font-light tracking-[0.15em] uppercase"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3 text-[clamp(1.2rem,2vw,1.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="mb-6 max-w-lg text-[13px] font-normal leading-[1.8] md:text-[14px]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-[10px] font-light tracking-[0.08em] uppercase transition-colors duration-500 group-hover:border-white/[0.08]"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom line accent */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.06), transparent 60%)",
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.4 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Projects Section ─── */
export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* ── Horizontal scrolling background text ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center select-none overflow-hidden"
        style={{ x: bgTextX, opacity: bgOpacity }}
      >
        <div className="whitespace-nowrap">
          <span
            className="text-[clamp(5rem,16vw,15rem)] font-bold uppercase leading-none tracking-[-0.03em]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.06)",
            }}
          >
            Currently Building&nbsp;&nbsp;·&nbsp;&nbsp;Currently Building&nbsp;&nbsp;·&nbsp;&nbsp;Currently Building
          </span>
        </div>
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-48">
        {/* Section header */}
        <div className="mb-20 md:mb-28">
          <RevealText delay={0}>
            <p
              className="mb-6 text-[11px] font-medium tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Work
            </p>
          </RevealText>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <RevealText delay={0.1}>
                <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
                  Currently
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <h2
                  className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Building.
                </h2>
              </RevealText>
            </div>

            {/* Project count */}
            <RevealText delay={0.35}>
              <div className="flex items-center gap-3 pb-2">
                <div
                  className="h-[1px] w-8"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <span
                  className="text-[12px] font-light tracking-[0.15em] uppercase"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {projects.length} Active Projects
                </span>
              </div>
            </RevealText>
          </div>

          {/* Decorative line */}
          <motion.div
            className="mt-10 h-[1px] origin-left"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.1), transparent 60%)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        {/* ── Project Grid: 2-column on desktop ── */}
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3 md:mt-24"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="h-[1px] w-6"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <span
            className="text-[10px] font-light tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            More projects coming soon
          </span>
          <div
            className="h-[1px] w-6"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
