"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

interface FrostedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function FrostedCard({ children, className, ...props }: FrostedCardProps) {
  return (
    <div
      className={cn(
        "bg-black/30 border border-white/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
