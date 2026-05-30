"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

/* ─── Skills Data ─── */
const skillCategories = [
  {
    title: "Design",
    skills: [
      { name: "UI/UX Design", level: 90 },
      { name: "Design Systems", level: 85 },
      { name: "Wireframing & Prototyping", level: 88 },
      { name: "Visual Design", level: 85 },
      { name: "User Research", level: 75 },
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "HTML / CSS", level: 92 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "React / Next.js", level: 78 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe Creative Suite", level: 80 },
      { name: "Git & Version Control", level: 75 },
      { name: "Framer / Webflow", level: 70 },
      { name: "Notion & Documentation", level: 85 },
    ],
  },
]

const toolMarquee = [
  "Figma",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
  "VS Code",
  "Git",
  "Notion",
  "Webflow",
  "GSAP",
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

/* ─── Skill Bar ─── */
function SkillBar({
  name,
  level,
  delay,
}: {
  name: string
  level: number
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="py-3">
      <div className="mb-2 flex items-center justify-between">
        <span
          className="text-[13px] font-normal tracking-[0.02em]"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          {name}
        </span>
        <motion.span
          className="text-[11px] font-light tabular-nums tracking-[0.05em]"
          style={{ color: "rgba(255,255,255,0.55)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          {level}%
        </motion.span>
      </div>
      <div
        className="relative h-[2px] overflow-hidden rounded-full"
          style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.25))",
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  )
}

/* ─── Skill Category Card ─── */
function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 1,
        delay: 0.1 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative rounded-2xl border p-6 md:p-8"
      style={{
        borderColor: "rgba(255,255,255,0.1)",
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      {/* Category title */}
      <h3
        className="mb-6 text-[12px] font-semibold tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        {category.title}
      </h3>

      <div
        className="mb-6 h-[1px]"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      {/* Skills */}
      {category.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          delay={0.2 + index * 0.1 + i * 0.06}
        />
      ))}
    </motion.div>
  )
}

/* ─── Skills Section ─── */
export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

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
              Capabilities
            </p>
          </RevealText>

          <RevealText delay={0.1}>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-white">
              Skills &amp;
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <h2
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Expertise.
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

        {/* 3-column grid */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* ── Tool Marquee ── */}
        <div className="mt-24 overflow-hidden md:mt-32">
          <motion.div className="flex gap-8" style={{ x: marqueeX }}>
            {[...toolMarquee, ...toolMarquee].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="whitespace-nowrap text-[clamp(1rem,2vw,1.4rem)] font-normal tracking-[0.02em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {tool}
                {i < toolMarquee.length * 2 - 1 && (
                  <span className="ml-8" style={{ color: "rgba(255,255,255,0.15)" }}>
                    ·
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
