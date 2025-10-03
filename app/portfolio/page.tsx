"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [isAnimating, setIsAnimating] = useState(false)
  const [rippleOrigin, setRippleOrigin] = useState({ x: 0, y: 0 })

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    setRippleOrigin({ x, y })
    setIsAnimating(true)

    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
      setTimeout(() => setIsAnimating(false), 800)
    }, 100)
  }

  const bgPrimary = theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#f5f1e8]"
  const textPrimary = theme === "dark" ? "text-white" : "text-gray-900"

  return (
    <div className={`min-h-screen ${bgPrimary} select-none relative ${theme} transition-colors duration-300`}>
      {isAnimating && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${rippleOrigin.x}px ${rippleOrigin.y}px, ${
              theme === "dark" ? "#f5f1e8" : "#1a1a1a"
            } 0%, transparent 0%)`,
            animation: "ripple 0.8s ease-out forwards",
          }}
        />
      )}

      <header className="relative z-10 flex items-center justify-between px-12 py-6">
        <Link href="/">
          <Button
            variant="outline"
            className="border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white px-6 rounded-lg bg-transparent transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
        <button
          onClick={toggleTheme}
          className={`w-12 h-12 rounded-full ${
            theme === "dark" ? "bg-[#2a2a2a]" : "bg-white"
          } flex items-center justify-center hover:scale-110 transition-all duration-300`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-[#7c3aed] transition-transform duration-300" />
          ) : (
            <Moon className="w-5 h-5 text-[#7c3aed] transition-transform duration-300" />
          )}
        </button>
      </header>

      <div className="max-w-[1200px] mx-auto px-12 py-12">
        <h1 className="text-[#7c3aed] text-6xl font-bold mb-4 transition-colors duration-300">Portfolio</h1>
        <p className={`${textPrimary} text-xl mb-12 transition-colors duration-300`}>
          This page is under construction. Check back soon for my latest work!
        </p>

        <div className="grid grid-cols-4 gap-6">
          {[
            { name: "Nike", url: "#" },
            { name: "Apple", url: "#" },
            { name: "Google", url: "#" },
            { name: "Amazon", url: "#" },
            { name: "Microsoft", url: "#" },
            { name: "Tesla", url: "#" },
            { name: "Meta", url: "#" },
            { name: "Netflix", url: "#" },
          ].map((brand, index) => (
            <a
              key={index}
              href={brand.url}
              className="group relative aspect-square bg-transparent cursor-pointer transition-all flex items-center justify-center p-12 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative z-10 text-center">
                <div
                  className={`${textPrimary} text-2xl font-bold group-hover:text-[#7c3aed] transition-colors duration-300`}
                >
                  {brand.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
