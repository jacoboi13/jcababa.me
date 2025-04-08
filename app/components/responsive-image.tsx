"use client"

import type React from "react"
import Image from "next/image"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
  width?: number
  height?: number
  fetchpriority?: "high" | "low" | "auto"
}

/**
 * A wrapper component for Next.js Image that implements best practices
 * for responsive images and performance optimization
 */
export function ResponsiveImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  fill = false,
  width,
  height,
  fetchpriority,
  ...props
}: ResponsiveImageProps & Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "sizes" | "quality">) {
  // Extract image dimensions from URL if they exist (for placeholder images)
  const extractDimensions = () => {
    if (src.includes("placeholder.svg")) {
      const widthMatch = src.match(/width=(\d+)/)
      const heightMatch = src.match(/height=(\d+)/)

      const extractedWidth = widthMatch ? Number.parseInt(widthMatch[1]) : undefined
      const extractedHeight = heightMatch ? Number.parseInt(heightMatch[1]) : undefined

      return { width: extractedWidth, height: extractedHeight }
    }
    return { width: undefined, height: undefined }
  }

  const { width: extractedWidth, height: extractedHeight } = extractDimensions()

  // Use provided dimensions or extracted ones
  const finalWidth = width || extractedWidth
  const finalHeight = height || extractedHeight

  // For profile images and small icons, use higher quality
  const isSmallImage = (finalWidth && finalWidth < 200) || (finalHeight && finalHeight < 200)
  const finalQuality = isSmallImage ? 90 : quality

  // Set fetchpriority based on priority prop if not explicitly provided
  const finalFetchPriority = fetchpriority || (priority ? "high" : "auto")

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={finalQuality}
      fill={fill}
      width={fill ? undefined : finalWidth}
      height={fill ? undefined : finalHeight}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={finalFetchPriority}
      {...props}
    />
  )
}

