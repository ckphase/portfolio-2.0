"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    quote: "Chandanpreet has a sharp eye for detail and a strong sense of user empathy. Her designs are clean, thoughtful and effective.",
    author: "Amanpreet Singh",
    role: "Product Designer",
  },
  {
    quote: "It was great working with her. She's curious, takes initiative and delivers high quality work.",
    author: "Gurleen Kaur",
    role: "Design Lead",
  },
  {
    quote: "A very dedicated and talented designer with a passion for solving real problems through design.",
    author: "Harpreet Singh",
    role: "Founder, Brewed",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [active, setActive] = useState(0)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#050505" }}
    >
      <div className="section-divider mb-16" />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.03), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em]"
          style={{ color: "rgba(139,92,246,0.7)" }}
        >
          Kind Words
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-4xl font-bold text-white md:text-5xl"
        >
          What People Say
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => setActive(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-8 transition-all duration-400 ${
                active === i ? "border-purple-500/30" : "border-white/[0.06]"
              }`}
              style={{
                background: active === i
                  ? "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(139,92,246,0.02))"
                  : "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                boxShadow: active === i
                  ? "0 20px 60px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.06)"
                  : "0 8px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              {/* Quote mark */}
              <div
                className="mb-6 text-3xl font-serif leading-none"
                style={{ color: "rgba(139,92,246,0.4)" }}
              >
                &ldquo;
              </div>

              <p className="mb-8 text-[15px] leading-[1.85] text-white/75">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="mt-1 text-[13px] text-white/40">{t.role}</p>
              </div>

              {/* Active indicator */}
              {active === i && (
                <motion.div
                  layoutId="testimonial-indicator"
                  className="absolute bottom-0 left-0 h-[2px] w-full"
                  style={{ background: "linear-gradient(to right, rgba(139,92,246,0.6), transparent)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at top, rgba(139,92,246,0.06), transparent 50%)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: active === i ? "28px" : "8px",
                background: active === i ? "rgb(139,92,246)" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
