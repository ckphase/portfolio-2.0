"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"

/* ─── Animated Counter ─── */
function AnimatedStat({
  value,
  suffix = "",
  label,
  delay = 0,
  isDecimal = false,
}: {
  value: number
  suffix?: string
  label: string
  delay?: number
  isDecimal?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(isDecimal ? "0.0" : "0")
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const dur = 2000
    const start = performance.now() + delay * 1000

    function tick() {
      const now = performance.now()
      if (now < start) return requestAnimationFrame(tick)
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(
        isDecimal
          ? (eased * value).toFixed(1)
          : String(Math.round(eased * value))
      )
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value, delay, isDecimal])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-[clamp(2rem,4vw,3rem)] font-bold tabular-nums tracking-[-0.04em] text-white">
          {display}
        </span>
        {suffix && (
          <span className="text-[clamp(1rem,2vw,1.5rem)] font-light text-white/40">
            {suffix}
          </span>
        )}
      </div>
      <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
        {label}
      </span>
    </motion.div>
  )
}

/* ─── Floating Label ─── */
function FloatingLabel({
  text,
  x,
  y,
  delay,
}: {
  text: string
  x: string
  y: string
  delay: number
}) {
  return (
    <motion.div
      className="absolute hidden md:block"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md"
        style={{
          borderColor: "rgba(125,211,252,0.15)",
          background: "rgba(125,211,252,0.06)",
          color: "rgba(125,211,252,0.7)",
          boxShadow: "0 0 20px rgba(125,211,252,0.05)",
        }}
      >
        {text}
      </div>
    </motion.div>
  )
}

/* ─── Reveal Text ─── */
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
  const isInView = useInView(ref, { once: true, margin: "-60px" })

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

/* ─── 3D Glassmorphism Showcase Card ─── */
function ShowcaseCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(wrapperRef, { once: true, margin: "-80px" })

  /* 3D tilt on mouse */
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !glowRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(cardRef.current, {
      rotateY: x * 12,
      rotateX: -y * 12,
      duration: 0.6,
      ease: "power2.out",
    })

    gsap.to(glowRef.current, {
      x: x * 60,
      y: y * 60,
      duration: 0.6,
      ease: "power2.out",
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !glowRef.current) return
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 1,
      ease: "power3.out",
    })
    gsap.to(glowRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  /* Floating animation */
  useEffect(() => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  /* Showcase images — simulated design screens */
  const screens = [
    { label: "Dashboard UI", color: "rgba(125,211,252,0.08)" },
    { label: "Design System", color: "rgba(147,197,253,0.08)" },
    { label: "Mobile App", color: "rgba(165,180,252,0.08)" },
    { label: "Brand Identity", color: "rgba(186,230,253,0.08)" },
  ]

  return (
    <motion.div
      ref={wrapperRef}
      className="relative"
      style={{ perspective: "1200px" }}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : {}
      }
      transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Floating labels */}
      <FloatingLabel text="UI/UX" x="-10%" y="10%" delay={0.8} />
      <FloatingLabel text="Frontend" x="95%" y="15%" delay={1.0} />
      <FloatingLabel text="Design Systems" x="-5%" y="75%" delay={1.2} />
      <FloatingLabel text="Prototyping" x="90%" y="80%" delay={1.4} />

      {/* Ambient glow behind card */}
      <div
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(125,211,252,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Main card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-3xl"
        style={{
          transformStyle: "preserve-3d",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.2) 100%)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.4), 0 0 40px rgba(125,211,252,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Dynamic lighting glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute -inset-10 z-0"
          style={{
            background:
              "radial-gradient(circle 300px, rgba(125,211,252,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top bezel bar */}
        <div
          className="relative z-10 flex items-center gap-2 border-b px-5 py-3"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div
            className="mx-auto rounded-md px-8 py-0.5 text-[9px] font-medium tracking-[0.15em] uppercase"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            chandanpreet.design
          </div>
        </div>

        {/* Showcase content — grid of design screens */}
        <div className="relative z-10 grid grid-cols-2 gap-3 p-4 md:p-5">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              className="group relative overflow-hidden rounded-xl"
              style={{
                background: screen.color,
                border: "1px solid rgba(255,255,255,0.04)",
                aspectRatio: "4/3",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Simulated UI elements */}
              <div className="flex h-full flex-col justify-between p-3 md:p-4">
                {/* Top bar */}
                <div className="flex items-center gap-2">
                  <div
                    className="h-1.5 w-8 rounded-full"
                    style={{ background: "rgba(125,211,252,0.2)" }}
                  />
                  <div className="h-1.5 w-4 rounded-full bg-white/5" />
                </div>

                {/* Content lines */}
                <div className="space-y-1.5">
                  <div className="h-1 w-full rounded-full bg-white/[0.06]" />
                  <div className="h-1 w-3/4 rounded-full bg-white/[0.04]" />
                  <div className="h-1 w-1/2 rounded-full bg-white/[0.03]" />
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/20">
                    {screen.label}
                  </span>
                  <div
                    className="h-4 w-4 rounded-md"
                    style={{ background: "rgba(125,211,252,0.1)" }}
                  />
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(125,211,252,0.06) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom status bar */}
        <div
          className="relative z-10 flex items-center justify-between border-t px-5 py-2.5"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "rgba(125,211,252,0.8)",
                boxShadow: "0 0 6px rgba(125,211,252,0.4)",
              }}
            />
            <span className="text-[9px] font-medium text-white/30">
              Live workspace
            </span>
          </div>
          <span className="text-[9px] font-medium tabular-nums text-white/20">
            4 projects · 2026
          </span>
        </div>
      </div>

      {/* Reflection underneath */}
      <div
        className="pointer-events-none mx-auto mt-1 hidden md:block"
        style={{
          width: "85%",
          height: "60px",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)",
          borderRadius: "0 0 24px 24px",
          filter: "blur(8px)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
    </motion.div>
  )
}

/* ─── Particle Effect ─── */
function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `rgba(125,211,252,${0.15 + (i % 3) * 0.1})`,
            boxShadow: `0 0 8px rgba(125,211,252,${0.1 + (i % 3) * 0.05})`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════
   ─── ABOUT SECTION ───
   ═══════════════════════════════════════════════ */
export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-48">
        {/* Two-column layout */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* ── LEFT SIDE (40%) ── */}
          <div className="lg:w-[40%]">
            {/* Section label */}
            <RevealText delay={0}>
              <p
                className="mb-8 text-[11px] font-semibold tracking-[0.35em] uppercase"
                style={{ color: "rgba(125,211,252,0.6)" }}
              >
                About
              </p>
            </RevealText>

            {/* Heading */}
            <RevealText delay={0.1}>
              <h2 className="text-[clamp(2.5rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                Built Before
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <h2
                className="text-[clamp(2.5rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.03em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                I Was Ready.
              </h2>
            </RevealText>

            {/* Decorative line */}
            <motion.div
              className="mt-8 h-[1px] max-w-[120px] origin-left"
              style={{
                background: "linear-gradient(to right, rgba(125,211,252,0.3), transparent)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Paragraph */}
            <RevealText delay={0.4}>
              <p className="mt-8 max-w-sm text-[15px] font-normal leading-[1.85] text-white/60">
                Every project taught me something no classroom could.
                From development and design to leadership and problem solving,
                I learned by creating, failing, improving, and building again.
              </p>
            </RevealText>

            {/* Signature */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="h-[1px] w-6"
                style={{ background: "rgba(255,255,255,0.15)" }}
              />
              <span
                className="text-[13px] italic text-white/30"
              >
                Chandanpreet Kaur
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT SIDE (60%) ── */}
          <div className="relative lg:w-[60%]">
            <ShowcaseCard />
          </div>
        </div>

        {/* ── METRICS ROW ── */}
        <div className="mt-24 md:mt-32">
          <motion.div
            className="mx-auto h-[1px] max-w-3xl origin-center"
            style={{
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 md:mt-16 md:grid-cols-4 md:gap-4">
            <AnimatedStat value={15} suffix="+" label="Projects Built" delay={0.1} />
            <AnimatedStat value={8.6} label="Current CGPA" delay={0.2} isDecimal />
            <AnimatedStat value={3} label="International Offers" delay={0.3} />
            <AnimatedStat value={100} suffix="+" label="Hours Designing" delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  )
}
