"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ja"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, lang?: Language) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations = {
  portfolio: { en: "Portfolio 2026", ja: "ポートフォリオ 2026" },
  uiuxDev: {
    en: "UI/UX & Digital Experiences",
    ja: "UI/UX・デジタルエクスペリエンス",
  },
  name: { en: "Chandanpreet Kaur", ja: "Chandanpreet Kaur" },
  designStatement1: { en: "Design isn't decoration.", ja: "デザインは、単なる装飾ではありません。" },
  designStatement2: {
    en: "It's how people remember an experience.",
    ja: "人々の記憶に残る体験を生み出すものです。",
  },
  projectsDelivered: { en: "Projects Delivered", ja: "制作プロジェクト数" },
  shopifyStores: { en: "Shopify Stores", ja: "Shopifyストア構築実績" },
  wordpressSites: { en: "WordPress Sites", ja: "WordPressサイト制作実績" },
  codedWebsites: { en: "Coded Websites", ja: "コーディング実装サイト" },
  availableOpportunities: {
    en: "Available for Opportunities",
    ja: "新しい機会をお探ししています",
  },
  jumpToAbout: { en: "Jump to About", ja: "Aboutへジャンプ" },
  // Navigation
  about: { en: "About", ja: "について" },
  projects: { en: "Projects", ja: "プロジェクト" },
  experience: { en: "Experience", ja: "経験" },
  contact: { en: "Contact", ja: "お問い合わせ" },
  // Selected Work Section
  work: { en: "Work", ja: "制作実績" },
  selectedWork: { en: "Selected Work", ja: "主なプロジェクト" },
  selectedWorkDescription: {
    en: "A selection of projects that blend research, strategy, and visual design to solve real user problems.",
    ja: "リサーチ、戦略、そしてビジュアルデザインを融合し、実際のユーザー課題を解決するために制作したプロジェクトをご紹介します。",
  },
  viewAllProjects: { en: "View All Projects", ja: "すべてのプロジェクトを見る" },
  // Project Categories
  aiHealthTech: { en: "AI Health Tech", ja: "AIヘルステック" },
  fashionLifestyle: { en: "Fashion & Lifestyle", ja: "ファッション・ライフスタイル" },
  digitalMagazine: { en: "Digital Magazine", ja: "デジタルマガジン" },
  // Language toggle
  japanese: { en: "日本語", ja: "Japanese" },
  english: { en: "English", ja: "英語" },
} as const

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && ["en", "ja"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string, lang?: Language) => {
    const targetLang = lang || language
    const translationObj = translations[key as keyof typeof translations]
    if (!translationObj) return key
    return translationObj[targetLang] || translationObj.en
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Return a default context during SSR/hydration mismatch
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string) => key,
    }
  }
  return context
}
