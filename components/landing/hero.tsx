"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import gsap from "gsap"

/* ─── Concentric Circles Background ─── */
function ConcentricCircles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const rings = containerRef.current.querySelectorAll(".circle-ring")

    gsap.to(rings, {
      rotation: (i: number) => (i % 2 === 0 ? 360 : -360),
      duration: (i: number) => 120 + i * 40,
      repeat: -1,
      ease: "none",
    })
  }, [])

  const sizes = [320, 480, 640, 800, 960]

  return (
    <div ref={containerRef} className="concentric-circles">
      {sizes.map((size, i) => (
        <div
          key={i}
          className="circle-ring"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
    </div>
  )
}

/* ─── Animated Counter ─── */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  delay = 0,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now() + delay * 1000
    const endTime = startTime + duration * 1000

    function tick() {
      const now = performance.now()
      if (now < startTime) {
        requestAnimationFrame(tick)
        return
      }
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target, duration, delay])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

/* ─── Parallax Container ─── */
function useParallax() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 2
    const y = (clientY / innerHeight - 0.5) * 2

    const layers = containerRef.current.querySelectorAll("[data-parallax]")
    layers.forEach((layer) => {
      const speed = parseFloat(
        (layer as HTMLElement).dataset.parallax || "1"
      )
      gsap.to(layer, {
        x: x * speed * 15,
        y: y * speed * 15,
        duration: 1.2,
        ease: "power3.out",
      })
    })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return containerRef
}

/* ─── Text Reveal Animation Variants ─── */
const lineReveal = {
  hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: 0.6 + i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const fadeUp = {
  hidden: { y: 30, opacity: 0, filter: "blur(6px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 1.4 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const statReveal = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 2.0 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const bottomReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

/* ─── Stats Data ─── */
const stats = [
  { value: 15, suffix: "+", label: "Projects" },
  { value: 8.6, suffix: "", label: "CGPA", isDecimal: true },
  { value: 3, suffix: "", label: "International Offers" },
  { value: 0, suffix: "", label: "Student Designer", isText: true },
]

/* ─── Hero Component ─── */
export function Hero() {
  const parallaxRef = useParallax()
  const controls = useAnimation()
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Concentric circles */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div data-parallax="0.5">
          <ConcentricCircles />
        </div>
      </div>

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex min-h-screen w-full max-w-[1400px] flex-col items-center justify-center px-6 md:px-12"
        initial="hidden"
        animate={controls}
      >
        {/* Top label */}
        <div className="overflow-hidden">
          <motion.p
            custom={0}
            variants={fadeUp}
            className="mb-8 text-[11px] font-medium tracking-[0.35em] uppercase"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Portfolio 2026
          </motion.p>
        </div>

        {/* Main heading */}
        <div className="text-center">
          <div className="overflow-hidden">
            <motion.h1
              custom={0}
              variants={lineReveal}
              className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-white"
            >
              UI/UX &amp; Digital Experiences
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              custom={1}
              variants={lineReveal}
              className="mt-1 text-[clamp(2rem,6vw,5rem)] font-normal italic leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Chandanpreet Kaur
            </motion.h2>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-10 text-center">
          <div className="overflow-hidden">
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-[clamp(0.9rem,1.3vw,1.1rem)] font-normal leading-[1.8] tracking-[0.01em]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Design isn&apos;t decoration.
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-[clamp(0.9rem,1.3vw,1.1rem)] font-normal leading-[1.8] tracking-[0.01em]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              It&apos;s how people remember an experience.
            </motion.p>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statReveal}
              className="group relative flex items-center gap-3 rounded-full border px-5 py-2.5 md:px-7 md:py-3 transition-colors duration-500 hover:border-white/[0.12]"
              style={{
                borderColor: "rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
              }}
            >
              {stat.isText ? (
                <span
                  className="text-[13px] font-normal tracking-wide md:text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Student Designer
                </span>
              ) : (
                <>
                  <span className="text-base font-light text-white md:text-lg tabular-nums">
                    {stat.isDecimal ? (
                      <DecimalCounter
                        target={stat.value}
                        delay={2.0 + i * 0.1}
                      />
                    ) : (
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        delay={2.0 + i * 0.1}
                      />
                    )}
                  </span>
                  <span
                    className="text-[11px] font-normal uppercase tracking-[0.12em] md:text-xs"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {stat.label}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between md:bottom-12 md:left-12 md:right-12">
          {/* Status indicator */}
          <motion.div
            custom={2.8}
            variants={bottomReveal}
            className="flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="status-dot absolute inline-flex h-full w-full rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              />
            </span>
            <span
              className="text-[11px] font-light tracking-[0.1em] uppercase"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Available for Opportunities
            </span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            custom={3.0}
            variants={bottomReveal}
            className="hidden items-center gap-3 md:flex"
          >
            <span
              className="text-[11px] font-light tracking-[0.15em] uppercase"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Scroll to Explore
            </span>
            <div className="scroll-indicator flex flex-col items-center">
              <div
                className="h-8 w-[1px]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── Decimal Counter (for CGPA) ─── */
function DecimalCounter({
  target,
  delay = 0,
}: {
  target: number
  delay?: number
}) {
  const [count, setCount] = useState("0.0")
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2
    const startTime = performance.now() + delay * 1000
    const endTime = startTime + duration * 1000

    function tick() {
      const now = performance.now()
      if (now < startTime) {
        requestAnimationFrame(tick)
        return
      }
      const progress = Math.min(
        (now - startTime) / (duration * 1000),
        1
      )
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount((eased * target).toFixed(1))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target, delay])

  return <span ref={ref}>{count}</span>
}
