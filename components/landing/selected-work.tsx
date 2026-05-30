"use client"

import { useRef, useCallback } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"

/* ─── Work Data ─── */
const works = [
  {
    title: "Solar Asset Dashboard",
    category: "UI/UX Design · Dashboard",
    description:
      "A comprehensive monitoring interface for solar energy infrastructure — real-time performance metrics, predictive maintenance alerts, and fleet-wide analytics for operations teams in Dubai.",
    year: "2026",
    role: "Lead Designer",
  },
  {
    title: "Sports Booking Platform",
    category: "Product Design · Plugin",
    description:
      "Full booking experience for a multi-facility sports complex — court scheduling, membership tiers, payment flows, and admin tools built as a modular plugin system.",
    year: "2025–26",
    role: "UI/UX Designer",
  },
  {
    title: "Design System",
    category: "Systems Design · Components",
    description:
      "A scalable component library with tokens, accessibility patterns, and documentation — built to maintain consistency across multiple product verticals.",
    year: "2025",
    role: "Design Engineer",
  },
  {
    title: "Student Leadership Portal",
    category: "Web Design · Community",
    description:
      "Digital platform for student organizations — event coordination, resource sharing, and community engagement tools designed for scale.",
    year: "2025",
    role: "Designer & Developer",
  },
]

/* ─── Reveal ─── */
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
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ─── Work Row (expandable list item) ─── */
function WorkRow({
  work,
  index,
}: {
  work: (typeof works)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const contentRef = useRef<HTMLDivElement>(null)

  const handleEnter = useCallback(() => {
    if (!contentRef.current) return
    gsap.to(contentRef.current, {
      height: "auto",
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    })
  }, [])

  const handleLeave = useCallback(() => {
    if (!contentRef.current) return
    gsap.to(contentRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power3.inOut",
    })
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-b transition-colors duration-500 hover:border-white/[0.1]"
      style={{ borderColor: "rgba(255,255,255,0.1)" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="flex cursor-default items-center justify-between px-1 py-7 md:py-9">
        {/* Left: Number + Title */}
        <div className="flex items-center gap-6 md:gap-10">
          <span
            className="text-[13px] tabular-nums font-light tracking-[0.1em] transition-colors duration-500 group-hover:text-white/60"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            0{index + 1}
          </span>
          <div>
            <h3 className="text-[clamp(1.1rem,2.2vw,1.6rem)] font-medium tracking-[-0.02em] text-white transition-all duration-500 group-hover:translate-x-2">
              {work.title}
            </h3>
            <p
              className="mt-1 text-[12px] font-light tracking-[0.06em] uppercase"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {work.category}
            </p>
          </div>
        </div>

        {/* Right: Year + Role */}
        <div className="hidden items-center gap-8 md:flex">
          <span
            className="text-[12px] font-light tracking-[0.1em]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {work.role}
          </span>
          <span
            className="text-[13px] font-light tabular-nums tracking-[0.05em]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {work.year}
          </span>

          {/* Arrow */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </div>

      {/* Expandable description */}
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-1 pb-7 pl-[calc(1.5rem+40px)] md:pl-[calc(2.5rem+56px)]">
          <p
            className="max-w-xl text-[14px] font-normal leading-[1.85] md:text-[15px]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {work.description}
          </p>
          <div className="mt-3 flex gap-2 md:hidden">
            <span className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.35)" }}>
              {work.role}
            </span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.3)" }}>
              {work.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Selected Work Section ─── */
export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-48">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <RevealText delay={0}>
            <p
              className="mb-6 text-[11px] font-medium tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Portfolio
            </p>
          </RevealText>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <RevealText delay={0.1}>
                <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
                  Selected
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <h2
                  className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light italic leading-[1.05] tracking-[-0.03em]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Work.
                </h2>
              </RevealText>
            </div>

            <RevealText delay={0.3}>
              <p
                className="max-w-xs pb-2 text-[13px] font-light leading-[1.7]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                A curated selection of projects that shaped my craft.
              </p>
            </RevealText>
          </div>

          <motion.div
            className="mt-10 h-[1px] origin-left"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,0.1), transparent 60%)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Work list */}
        <div>
          {works.map((work, i) => (
            <WorkRow key={work.title} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
