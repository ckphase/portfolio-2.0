"use client"

import { useRef, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"

/* ─── Principles ─── */
const principles = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "User-Centered",
    description: "Designing with empathy and research at the core.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Detail-Oriented",
    description: "Obsessed with hierarchy, spacing and clarity.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Impact-Driven",
    description: "Creating solutions that deliver real value.",
  },
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
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[360px] w-full overflow-hidden rounded-3xl md:h-[420px]"
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 40%)" }} />
        <div className="absolute bottom-6 left-6 z-10">
          <p className="text-lg italic" style={{ color: "rgba(139,92,246,0.6)", fontFamily: "serif" }}>Chandanpreet</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── About Section ─── */
export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden py-16 md:py-24" style={{ background: "#050505" }}>
      <div className="section-divider mb-16" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:gap-16">
          <PhotoCard />
          <div>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(139,92,246,0.7)" }}>About Me</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-white">
              Designer. Thinker.<br /><span style={{ color: "rgba(255,255,255,0.4)" }}>Problem Solver.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="mt-6 text-[15px] leading-[1.85] text-white/60">
              I&apos;m a student designer passionate about crafting meaningful digital experiences. My work sits at the intersection of user needs, business goals and clean, intentional design.
            </motion.p>
            <motion.a href="#" initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="group mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
              Download Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </motion.a>
          </div>
          <div className="space-y-6">
            {principles.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="group flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300" style={{ color: "rgba(139,92,246,0.6)", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.12)" }}>{p.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/45">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
