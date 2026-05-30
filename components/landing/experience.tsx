"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ─── Experience Data ─── */
const experiences = [
  {
    period: "2026",
    title: "Product Designer — Solar Tech Startup",
    location: "Dubai, UAE (Remote)",
    description:
      "Leading design for an asset management platform — defining user flows, building design systems, and collaborating with engineering teams across time zones.",
    highlights: ["Asset Dashboard", "Design System", "Remote Collaboration"],
  },
  {
    period: "2025 – 2026",
    title: "Freelance UI/UX Designer",
    location: "Remote / India",
    description:
      "Designed booking systems, community platforms, and creative tools for clients across industries. Managed end-to-end design process from research to developer handoff.",
    highlights: ["Client Projects", "Full Process", "Multi-Industry"],
  },
  {
    period: "2025",
    title: "Student Leadership & Design Lead",
    location: "College",
    description:
      "Led design initiatives for student organizations — event branding, digital platforms, and visual identity systems that served hundreds of students.",
    highlights: ["Brand Identity", "Event Design", "Community Impact"],
  },
  {
    period: "2024 – Present",
    title: "Computer Science Diploma",
    location: "India",
    description:
      "Building technical foundations in programming, data structures, and software engineering while pursuing design independently.",
    highlights: ["CS Fundamentals", "8.6 CGPA", "Self-taught Design"],
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

/* ─── Experience Card ─── */
function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: 0.1 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative border-b py-10 transition-colors duration-500 hover:border-white/[0.08] md:py-14"
      style={{ borderColor: "rgba(255,255,255,0.1)" }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-16">
        {/* Left: Period & Location */}
        <div className="md:w-[200px] md:flex-shrink-0">
          <motion.span
            className="block text-[13px] font-light tabular-nums tracking-[0.1em]"
            style={{ color: "rgba(255,255,255,0.7)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          >
            {exp.period}
          </motion.span>
          <motion.span
            className="mt-1 block text-[11px] font-light tracking-[0.08em]"
            style={{ color: "rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          >
            {exp.location}
          </motion.span>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h3 className="mb-3 text-[clamp(1rem,1.8vw,1.3rem)] font-medium tracking-[-0.01em] text-white transition-all duration-500 group-hover:translate-x-1">
            {exp.title}
          </h3>
          <p
            className="mb-5 max-w-xl text-[14px] font-normal leading-[1.85] md:text-[15px]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {exp.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {exp.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border px-3 py-1 text-[10px] font-light tracking-[0.1em] uppercase transition-colors duration-500 group-hover:border-white/[0.08]"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Animated line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent 50%)",
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 1.2,
          delay: 0.3 + index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>
  )
}

/* ─── Experience Section ─── */
export function Experience() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#050505" }}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-48">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <RevealText delay={0}>
            <p
              className="mb-6 text-[11px] font-medium tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Journey
            </p>
          </RevealText>

          <RevealText delay={0.1}>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
              Experience &amp;
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <h2
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Education.
            </h2>
          </RevealText>

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

        {/* Experience list */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
