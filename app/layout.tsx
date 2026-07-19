import { Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { LenisProvider } from "@/components/landing/lenis-provider"
import { BgMusicPlayer } from "@/components/bg-music-player"
import { Navbar } from "@/components/landing/navbar"

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

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const audio = new Audio('/bg-music.mp3');
                audio.loop = true;
                audio.volume = 0.3;
                audio.play().catch(function(e) {
                  console.log('Autoplay prevented:', e);
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className="grain bg-[#050505] font-sans text-white"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <BgMusicPlayer />
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
