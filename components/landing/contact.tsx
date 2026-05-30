"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

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

/* ─── Contact Links ─── */
const links = [
  { label: "Email", value: "hello@chandanpreet.com", href: "mailto:hello@chandanpreet.com" },
  { label: "LinkedIn", value: "linkedin.com/in/chandanpreet", href: "#" },
  { label: "Behance", value: "behance.net/chandanpreet", href: "#" },
  { label: "GitHub", value: "github.com/chandanpreet", href: "#" },
]

/* ─── Contact Section ─── */
export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const circleScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1.1])
  const circleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 0.5, 0.5, 0])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Decorative circles */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ scale: circleScale, opacity: circleOpacity }}
      >
        <div
          className="h-[600px] w-[600px] rounded-full"
          style={{ border: "1px solid rgba(255,255,255,0.03)" }}
        />
        <div
          className="absolute h-[450px] w-[450px] rounded-full"
          style={{ border: "1px solid rgba(255,255,255,0.04)" }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full"
          style={{
            border: "1px solid rgba(255,255,255,0.05)",
            background: "radial-gradient(circle, rgba(255,255,255,0.01) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-48">
        {/* Header */}
        <div className="mb-20 text-center md:mb-28">
          <RevealText delay={0}>
            <p
              className="mb-8 text-[11px] font-medium tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Contact
            </p>
          </RevealText>

          <RevealText delay={0.1}>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">
              Let&apos;s Create
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-light italic leading-[1.05] tracking-[-0.03em]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Together.
            </h2>
          </RevealText>

          <RevealText delay={0.35}>
            <p
              className="mx-auto mt-8 max-w-md text-[14px] font-light leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Whether it&apos;s a project, an opportunity, or just a conversation
              about design — I&apos;d love to hear from you.
            </p>
          </RevealText>
        </div>

        {/* Contact grid */}
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="mb-10 h-[1px] origin-center"
            style={{
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3 }}
          />

          {links.map((link, i) => (
            <ContactRow key={link.label} link={link} index={i} />
          ))}

          <motion.div
            className="mt-10 h-[1px] origin-center"
            style={{
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6 }}
          />
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="mailto:hello@chandanpreet.com"
            className="group relative flex items-center gap-3 rounded-full border px-8 py-4 transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.03]"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <span
              className="text-[13px] font-light tracking-[0.15em] uppercase transition-colors duration-500 group-hover:text-white"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Send a Message
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* ── Footer ── */}
        <div className="mt-32 flex flex-col items-center gap-6 md:mt-40 md:flex-row md:justify-between">
          {/* Status */}
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="status-dot absolute inline-flex h-full w-full rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              />
            </span>
            <span
              className="text-[11px] font-light tracking-[0.1em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Available for Opportunities
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-[11px] font-light tracking-[0.05em]"
            style={{ color: "rgba(255,255,255,0.25)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            © 2026 Chandanpreet Kaur. Designed with intention.
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 transition-colors duration-500 hover:text-white/60"
            style={{ color: "rgba(255,255,255,0.3)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <span className="text-[11px] font-light tracking-[0.15em] uppercase">
              Back to Top
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Row ─── */
function ContactRow({
  link,
  index,
}: {
  link: (typeof links)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex items-center justify-between border-b py-5 transition-colors duration-500 hover:border-white/[0.08]"
      style={{ borderColor: "rgba(255,255,255,0.04)" }}
    >
      <span
        className="text-[11px] font-medium tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {link.label}
      </span>
      <div className="flex items-center gap-3">
        <span
          className="text-[13px] font-light transition-colors duration-500 group-hover:text-white"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {link.value}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          className="opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0.5"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </motion.a>
  )
}
