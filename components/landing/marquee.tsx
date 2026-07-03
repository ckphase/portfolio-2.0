"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const marqueeText = "UI Design • Web Development • User Experience • Digital Strategy • Problem Solving"

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const marquee = containerRef.current.querySelector(".marquee-content")
    if (!marquee) return

    // Create infinite scroll animation
    gsap.to(marquee, {
      x: -marquee.offsetWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => parseFloat(x) % (marquee.offsetWidth / 2)),
      },
    })

    return () => {
      gsap.killTweensOf(marquee)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-8 md:py-12"
      style={{ background: "#050505" }}
    >
      <div className="grid-overlay" />

      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40"
           style={{
             background: "linear-gradient(to right, #050505, transparent)",
           }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40"
           style={{
             background: "linear-gradient(to left, #050505, transparent)",
           }} />

      <div className="relative z-20 overflow-hidden">
        <div className="marquee-content flex whitespace-nowrap gap-8 md:gap-12">
          {/* First set */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-12">
              {marqueeText.split(" • ").map((text, j) => (
                <span
                  key={`${i}-${j}`}
                  className="flex-shrink-0 text-[clamp(1rem,1.8vw,1.4rem)] font-light tracking-[-0.01em]"
                  style={{
                    background: `linear-gradient(135deg, #FFFFFF, rgba(139,92,246,0.6))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle accent dots */}
      <div className="absolute top-1/2 left-0 h-1 w-1 rounded-full -translate-y-1/2"
           style={{ background: "rgba(139,92,246,0.3)" }} />
      <div className="absolute top-1/2 right-0 h-1 w-1 rounded-full -translate-y-1/2"
           style={{ background: "rgba(139,92,246,0.3)" }} />
    </section>
  )
}
