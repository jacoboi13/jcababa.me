"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [rippleActive, setRippleActive] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRippleActive(true)

    // Start theme transition after a brief delay to show ripple
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
    }, 100)

    // Reset ripple after animation completes
    setTimeout(() => {
      setRippleActive(false)
    }, 1000)
  }

  if (!mounted) {
    return (
      <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200 animate-pulse" aria-label="Loading theme" />
    )
  }

  return (
    <>
      {rippleActive && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background: theme === "dark" ? "white" : "black",
            animation: "ripple-expand 1s ease-out forwards",
            mixBlendMode: "difference",
          }}
        />
      )}

      <button
        onClick={handleThemeToggle}
        className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] dark:bg-[#a78bfa] dark:hover:bg-[#9333ea] flex items-center justify-center transition-all duration-300 overflow-hidden focus:outline-none focus:ring-0"
        aria-label="Toggle theme"
      >
        <Sun className="absolute w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
        <Moon className="absolute w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </button>
    </>
  )
}
