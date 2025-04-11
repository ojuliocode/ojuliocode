"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-sky-500 text-white py-2 px-4 text-center relative">
      <p className="font-medium">Esta página foi criada usando ensinamentos do Magic Front</p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
