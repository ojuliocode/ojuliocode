"use client"

import { useState, useEffect } from "react"
import { AlertTriangle } from "lucide-react"

export function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-sky-200 py-3 px-4 z-50 backdrop-blur-sm bg-opacity-90 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 text-sky-500 mr-2" />
          <p className="text-sm font-medium">⚠️ Oferta limitada. Torne-se um desenvolvedor frontend hoje mesmo</p>
        </div>
        <a
          href="https://pay.hotmart.com/Y88783634B"
          className="px-4 py-2 bg-sky-500 text-white rounded-md text-sm font-medium hover:bg-sky-600 transition-colors whitespace-nowrap"
        >
          Quero garantir a oferta
        </a>
      </div>
    </div>
  )
}
