import { useEffect } from "react"

export function useBgMusic() {
  useEffect(() => {
    // Create audio element
    const audio = new Audio("/bg-music.mp3")
    audio.loop = true
    audio.volume = 0.3 // Set volume to 30%
    audio.autoplay = true

    // Play audio immediately
    audio.play().catch((err) => {
      console.log("Autoplay prevented:", err)
    })

    // Cleanup
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])
}
