"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

const processSteps = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "I dive deep into understanding your goals, target audience, and market dynamics. This foundation guides every design decision.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Crafting a strategic roadmap with wireframes, user flows, and information architecture. Clear planning prevents costly revisions.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Design & Iteration",
    description:
      "Creating beautiful, functional designs with multiple iterations. Feedback loops ensure the final product exceeds expectations.",
    icon: "🎨",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description:
      "Polished deliverables with handoff documentation. I stay engaged through launch and beyond for continuous optimization.",
    icon: "🚀",
  },
]

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 md:py-24 md:px-12"
      style={{ background: "#050505" }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1400px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section heading */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white"
          >
            How I Work
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-normal leading-[1.7] tracking-[0.01em]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            My design process is collaborative, iterative, and focused on delivering results that matter.
          </motion.p>
        </div>

        {/* Process steps grid */}
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="group relative rounded-2xl border p-6 md:p-8 transition-all duration-500"
              style={{
                borderColor: "rgba(139,92,246,0.2)",
                background: "rgba(139,92,246,0.03)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                borderColor: "rgba(139,92,246,0.4)",
                background: "rgba(139,92,246,0.08)",
              }}
            >
              {/* Step number */}
              <div className="mb-6 text-[3.5rem] font-light tracking-[-0.02em]" 
                   style={{ color: "rgba(139,92,246,0.4)" }}>
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4 text-3xl">{step.icon}</div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-normal leading-[1.3] tracking-[-0.01em] text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm font-normal leading-[1.6] tracking-[0.005em]"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {step.description}
              </p>

              {/* Accent line on hover */}
              <div
                className="absolute top-0 left-0 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-12"
                style={{ background: "rgba(139,92,246,0.5)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
