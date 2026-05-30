"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion"


/* ─── Timeline Data ─── */
const timelineItems = [
  {
    year: "2023",
    title: "The Spark",
    text: "Started exploring technology seriously.",
  },
  {
    year: "2024",
    title: "The Foundation",
    text: "Began Computer Science diploma journey.",
  },
  {
    year: "2025",
    title: "The Craft",
    text: "Worked on UI/UX, web projects, design systems and student leadership.",
  },
  {
    year: "2026",
    title: "The Leap",
    text: "Received international university offers and scholarships while building products.",
  },
  {
    year: "Future",
    title: "The Vision",
    text: "Building products, communities and experiences that matter.",
  },
]

/* ─── Single Timeline Entry (left-aligned, clean vertical) ─── */
function TimelineEntry({
  item,
  index,
  total,
}: {
  item: (typeof timelineItems)[0]
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const isLast = index === total - 1

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* ── Left column: Year + Dot + Vertical line ── */}
      <div className="relative flex flex-col items-center pt-1">
        {/* Year label */}
        <motion.span
          className="mb-4 min-w-[52px] text-center font-light tabular-nums"
          style={{
            fontSize: "13px",
            letterSpacing: "0.15em",
            color: isInView ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.15)",
            transition: "color 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.year}
        </motion.span>

        {/* Dot */}
        <motion.div
          className="relative z-10 flex-shrink-0"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow ring */}
          <div
            className="absolute -inset-2 rounded-full transition-opacity duration-700"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              opacity: isInView ? 1 : 0,
            }}
          />
          {/* Outer ring */}
          <div
            className="relative h-3.5 w-3.5 rounded-full border transition-all duration-700"
            style={{
              borderColor: isInView ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.08)",
              background: isInView ? "rgba(255,255,255,0.06)" : "transparent",
            }}
          >
            {/* Inner dot */}
            <div
              className="absolute inset-[3px] rounded-full transition-all duration-700"
              style={{
                backgroundColor: isInView ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)",
                boxShadow: isInView ? "0 0 10px rgba(255,255,255,0.25)" : "none",
              }}
            />
          </div>
        </motion.div>

        {/* Vertical connector line */}
        {!isLast && (
          <div className="relative mt-0 w-[1px] flex-1">
            <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.04)" }} />
            <motion.div
              className="absolute inset-x-0 top-0 origin-top"
              style={{ background: "rgba(255,255,255,0.15)" }}
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        )}
      </div>

      {/* ── Right column: Card content ── */}
      <motion.div
        className="group relative -mt-1 flex-1 pb-14 md:pb-20"
        initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
        animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Card title */}
        <motion.h4
          className="mb-2 text-[15px] font-normal tracking-[-0.01em] text-white md:text-base"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.title}
        </motion.h4>

        {/* Card body */}
        <div
          className="relative rounded-xl border px-5 py-4 transition-all duration-500 hover:border-white/[0.08] md:px-6 md:py-5"
          style={{
            borderColor: "rgba(255,255,255,0.04)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="pointer-events-none absolute -left-px -top-px h-20 w-20 rounded-tl-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: "radial-gradient(circle at top left, rgba(255,255,255,0.04), transparent 70%)",
            }}
          />
          <p
            className="text-[13px] font-light leading-[1.8] md:text-[14px]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {item.text}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

/* ─── Section Title Reveal ─── */
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
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
        animate={
          isInView
            ? { y: "0%", opacity: 1, filter: "blur(0px)" }
            : { y: "110%", opacity: 0, filter: "blur(6px)" }
        }
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

/* ─── About Section ─── */
export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  /* Parallax for background text */
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgTextY = useTransform(sectionProgress, [0, 1], ["5%", "-10%"])
  const bgTextOpacity = useTransform(sectionProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* ── Full-width background text (visible, spanning full section) ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
        style={{ y: bgTextY, opacity: bgTextOpacity }}
      >
        <div className="whitespace-nowrap text-center">
          <span
            className="block text-[clamp(4rem,14vw,13rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.035)",
            }}
          >
            Every Expert
          </span>
          <span
            className="mt-2 block text-[clamp(4rem,14vw,13rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.035)",
            }}
          >
            Was Once
          </span>
          <span
            className="mt-2 block text-[clamp(4rem,14vw,13rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.035)",
            }}
          >
            A Beginner
          </span>
        </div>
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-32 md:px-12 md:pt-48">
        {/* Section label */}
        <RevealText delay={0}>
          <p
            className="mb-6 text-[11px] font-medium tracking-[0.35em] uppercase"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            About
          </p>
        </RevealText>

        {/* Split layout: Title left, Timeline right */}
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* ── Left: Sticky title ── */}
          <div className="lg:sticky lg:top-32 lg:h-fit lg:w-[40%]">
            <RevealText delay={0.1}>
              <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">
                Built Before
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <h2
                className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                I Was Ready.
              </h2>
            </RevealText>

            {/* Decorative line */}
            <motion.div
              className="mt-10 h-[1px] max-w-[200px] origin-left"
              style={{
                background: "linear-gradient(to right, rgba(255,255,255,0.12), transparent)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            <RevealText delay={0.4}>
              <p
                className="mt-8 max-w-sm text-[14px] font-light leading-[1.9] tracking-[0.01em]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Every year taught me something I couldn&apos;t learn from a
                textbook. This is the path — messy, ambitious, and mine.
              </p>
            </RevealText>

            {/* Small hint */}
            <motion.div
              className="mt-12 flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="h-[1px] w-8" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span
                className="text-[10px] font-light tracking-[0.25em] uppercase"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Scroll to explore the journey
              </span>
            </motion.div>
          </div>

          {/* ── Right: Clean vertical timeline ── */}
          <div className="relative lg:w-[60%]">
            {timelineItems.map((item, i) => (
              <TimelineEntry
                key={item.year}
                item={item}
                index={i}
                total={timelineItems.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom: Giant closing statement ── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 pt-8 md:px-12 md:pb-48 md:pt-16">
        {/* Divider */}
        <motion.div
          className="mx-auto mb-20 h-[1px] max-w-xs origin-center md:mb-28"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="text-center">
          <RevealText delay={0}>
            <p className="text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-[1.3] tracking-[-0.02em] text-white">
              I don&apos;t just want a career.
            </p>
          </RevealText>
          <RevealText delay={0.15}>
            <p
              className="text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-[1.3] tracking-[-0.02em]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              I want to build things people remember.
            </p>
          </RevealText>
        </div>

        {/* Decorative circle */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2">
          <div
            className="h-[400px] w-[400px] rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.02)",
              background: "radial-gradient(circle, rgba(255,255,255,0.008) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
