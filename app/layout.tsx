import { Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { LenisProvider } from "@/components/landing/lenis-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chandanpreet Kaur — UI/UX & Digital Experiences",
  description:
    "Portfolio of Chandanpreet Kaur — UI/UX Designer creating premium digital experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body
        className="grain bg-[#050505] font-sans text-white"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
