"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { RainbowButton } from "@/components/rainbow-button"

interface NavBarProps {
  activeSection: number
  onNavigate: (index: number) => void
  className?: string
}

export function NavBar({ activeSection, onNavigate, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { name: "Home", index: 0, icon: Home },
    { name: "About Me", index: 1, icon: User },
  ]

  return (
    <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-3 sm:pt-4 md:pt-6", className)}>
      <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl border border-white/20 py-1 px-3 sm:px-3 rounded-full shadow-lg">
        {/* Navigation Items */}
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.index

          return (
            <button
              key={item.name}
              onClick={() => onNavigate(item.index)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-gray-300 hover:text-[#a78bfa]",
                isActive && "text-[#a78bfa]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/20 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#a78bfa] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#a78bfa]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#a78bfa]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#a78bfa]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}

        <RainbowButton className="px-8 py-1.5 text-xs sm:px-10 sm:py-2 sm:text-sm md:px-14 md:py-2 md:text-sm lg:px-16 h-auto text-white hover:bg-transparent hover:text-[#a78bfa] border-2 border-transparent hover:border-white transition-all duration-300 whitespace-nowrap">
          Hire Me
        </RainbowButton>
      </div>
    </div>
  )
}
