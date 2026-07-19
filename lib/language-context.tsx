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
  // How I Work Section
  process: { en: "Process", ja: "プロセス" },
  howIWork: { en: "How I Work", ja: "制作プロセス" },
  howIWorkDescription: {
    en: "My design process is collaborative, iterative, and focused on delivering results that matter.",
    ja: "デザインは、対話・改善・成果を重視したプロセスです。お客様と協力しながら、価値のある体験を形にしていきます。",
  },
  researchDiscovery: { en: "Research & Discovery", ja: "リサーチ・課題分析" },
  researchDescription: {
    en: "I dive deep into understanding your goals, target audience, and market dynamics. This foundation guides every design decision.",
    ja: "プロジェクトの目標、ターゲットユーザー、市場環境を深く理解することから始めます。この調査をもとに、すべてのデザイン判断を行います。",
  },
  strategyPlanning: { en: "Strategy & Planning", ja: "戦略立案・設計" },
  strategyDescription: {
    en: "Crafting a strategic roadmap with wireframes, user flows, and information architecture. Clear planning prevents costly revisions.",
    ja: "ワイヤーフレーム、ユーザーフロー、情報設計（IA）を通じて、最適な戦略を構築します。綿密な計画により、後工程での大きな修正を防ぎます。",
  },
  designIteration: { en: "Design & Iteration", ja: "デザイン・改善" },
  designDescription: {
    en: "Creating beautiful, functional designs with multiple iterations. Feedback loops ensure the final product exceeds expectations.",
    ja: "美しさと使いやすさを兼ね備えたデザインを制作し、フィードバックを反映しながら繰り返し改善します。期待を超える成果を目指します。",
  },
  deliverySupport: { en: "Delivery & Support", ja: "納品・サポート" },
  deliveryDescription: {
    en: "Polished deliverables with handoff documentation. I stay engaged through launch and beyond for continuous optimization.",
    ja: "完成した成果物と必要なドキュメントを提供し、公開後も継続的な改善とサポートを行います。長期的な価値を生み出せるよう伴走します。",
  },
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
