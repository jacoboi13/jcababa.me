"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "transition-all duration-200 px-4",
        isActive
          ? "text-pink-500 font-bold hover:text-purple-600 drop-shadow-[0_2px_2px_rgba(236,72,153,0.5)]"
          : "text-foreground hover:text-pink-500 font-normal hover:drop-shadow-[0_2px_2px_rgba(236,72,153,0.3)]",
      )}
    >
      {children}
    </Link>
  )
}
