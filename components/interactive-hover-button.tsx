import React from "react"
import { ArrowRight, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string
  icon?: "phone" | "arrow"
  variant?: "primary" | "outline" | "green"
  asButton?: boolean
}

const InteractiveHoverButton = React.forwardRef<HTMLAnchorElement, InteractiveHoverButtonProps>(
  ({ text = "Button", icon = "arrow", variant = "primary", className, asButton = false, ...props }, ref) => {
    const Icon = icon === "phone" ? Phone : ArrowRight

    const isPrimary = variant === "primary"
    const isGreen = variant === "green"

    const classes = cn(
      "group relative cursor-pointer overflow-hidden rounded-full px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-center font-semibold transition-all duration-300 min-w-[140px] sm:min-w-[180px] md:min-w-[200px] text-sm sm:text-base inline-block",
      isGreen && "bg-green-600 text-white hover:bg-transparent hover:text-green-600 border-2 border-green-600",
      isPrimary && "border-2 border-white bg-white text-[#7c3aed] hover:bg-transparent hover:text-white",
      !isPrimary && !isGreen && "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#7c3aed]",
      className,
    )

    if (asButton) {
      return (
        <button ref={ref as any} className={classes} {...(props as any)}>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {text}
          </span>
          <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 sm:gap-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <span>{text}</span>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </button>
      )
    }

    return (
      <a ref={ref} className={classes} {...props}>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 sm:gap-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <span>{text}</span>
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </a>
    )
  },
)

InteractiveHoverButton.displayName = "InteractiveHoverButton"

export { InteractiveHoverButton }
