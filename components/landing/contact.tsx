"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"

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
    <div ref={orbRef} className="relative h-48 w-48 md:h-56 md:w-56">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "rgba(139,92,246,0.15)" }}
      />
      {/* Inner orb */}
      <div
        className="absolute inset-4 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(99,102,241,0.2), rgba(139,92,246,0.1))",
          border: "1px solid rgba(139,92,246,0.2)",
          boxShadow: "0 0 60px rgba(139,92,246,0.2), inset 0 0 40px rgba(139,92,246,0.1)",
        }}
      />
      {/* Highlight */}
      <div
        className="absolute left-1/4 top-1/4 h-1/3 w-1/3 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  )
}

/* ─── Contact Section ─── */
export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#050505" }}
    >
      {/* CTA Card */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] px-8 py-12 md:px-16 md:py-16"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.04), rgba(0,0,0,0.3))",
            border: "1px solid rgba(139,92,246,0.15)",
            boxShadow: "0 30px 80px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Background gradient */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(139,92,246,0.08), transparent 70%)" }}
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr_auto]">
            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "rgba(139,92,246,0.7)" }}
              >
                Let&apos;s Work Together
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-white"
              >
                Have a project<br />in mind?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/55"
              >
                I&apos;m currently available for freelance work, collaborations and full-time opportunities.
              </motion.p>
            </div>

            {/* Center - Info + CTA */}
            <div className="space-y-6">
              <motion.a
                href="mailto:chandanpreetkaur1317@gmail.com"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
              >
                Let&apos;s Connect
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                  <span className="text-sm text-white/60">chandanpreetkaur1317@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span className="text-sm text-white/60">India</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <FloatingOrb />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          {/* Logo + Copyright */}
          <div className="flex items-center gap-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
              style={{
                border: "1px solid rgba(139,92,246,0.2)",
                background: "rgba(139,92,246,0.06)",
                color: "rgba(139,92,246,0.7)",
              }}
            >
              N
            </div>
            <div>
              <p className="text-sm text-white/50">© 2026 Chandanpreet Kaur.</p>
              <p className="text-[12px] text-white/30">All rights reserved.</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex gap-8">
            {["About", "Work", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {["in", "ig", "dr", "be"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10"
                style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
              >
                <span className="text-[11px] font-bold uppercase">{icon}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
