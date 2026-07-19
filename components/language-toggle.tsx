"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.button
      onClick={() => setLanguage(language === "en" ? "ja" : "en")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors duration-300 hover:border-white/[0.12] hover:bg-purple-500/10"
      style={{
        borderColor: "rgba(139,92,246,0.25)",
        background: "rgba(139,92,246,0.06)",
        color: "rgba(255,255,255,0.8)",
      }}
      aria-label="Toggle language"
    >
      <span className="inline-block">
        {language === "en" ? "日本語" : "English"}
      </span>
      <div className="h-3 w-[1px] opacity-30" style={{ background: "rgba(139,92,246,0.5)" }} />
      <span className="inline-block text-[10px] opacity-70">
        {language === "en" ? "JA" : "EN"}
      </span>
    </motion.button>
  )
}
