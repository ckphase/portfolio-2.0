"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide on scroll down, show on scroll up
    if (latest > lastY.current && latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    lastY.current = latest
    setScrolled(latest > 20)
  })

  function isActive(href: string) {
    if (href === "/projects") return pathname === "/projects"
    if (href === "/experience") return pathname === "/experience"
    if (href === "/about") return pathname === "/about"
    return false
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100]"
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5,5,5,0.8)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          {/* Left — Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/10"
              style={{
                border: "1px solid rgba(139,92,246,0.25)",
                background: "rgba(139,92,246,0.06)",
                color: "rgba(139,92,246,0.8)",
              }}
            >
              N
            </div>
            <span className="text-[13px] font-semibold tracking-[0.12em] uppercase text-white/80">
              Chandanpreet Kaur
            </span>
          </Link>

          {/* Center — Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300"
                  style={{
                    color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {link.label}
                  {/* Active underline dot */}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full"
                      style={{ background: "rgba(139,92,246,0.8)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right — Portfolio Year */}
          <p
            className="hidden md:block text-[11px] font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Portfolio 2026
          </p>

          {/* Mobile menu button */}
          <button
            className="flex md:hidden h-8 w-8 items-center justify-center"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <div className="h-[1.5px] w-5 rounded-full bg-white/60" />
              <div className="h-[1.5px] w-3.5 rounded-full bg-white/40" />
            </div>
          </button>
        </nav>
      </div>
    </motion.header>
  )
}
