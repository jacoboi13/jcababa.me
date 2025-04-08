"use client"

import { useEffect } from "react"

/**
 * This component optimizes images across the site
 * to improve loading performance and address PageSpeed issues
 */
export default function ImageOptimizer() {
  useEffect(() => {
    // Preload critical images for LCP improvement
    const preloadCriticalImages = () => {
      const criticalImages = [
        "/ZLogo.svg", // Logo
        "/jc.avif", // Profile image
        "/jca.avif", // Profile resume image
        "/kernel.avif", // First portfolio image
      ]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        link.fetchPriority = "high"
        document.head.appendChild(link)
      })
    }

    // Create a responsive image loader function
    const optimizeImages = () => {
      // Find all images that need optimization
      const images = document.querySelectorAll('img:not([data-optimized="true"])')

      images.forEach((img) => {
        // Mark as optimized to avoid reprocessing
        img.setAttribute("data-optimized", "true")

        // Add loading="lazy" for images below the fold
        if (!img.hasAttribute("loading") && !img.hasAttribute("priority")) {
          img.setAttribute("loading", "lazy")
        }

        // Add decoding="async" for non-critical images
        if (!img.hasAttribute("decoding") && !img.hasAttribute("priority")) {
          img.setAttribute("decoding", "async")
        }

        // Add fetchpriority attribute for important images
        if (img.hasAttribute("priority")) {
          img.setAttribute("fetchpriority", "high")
        } else {
          img.setAttribute("fetchpriority", "auto")
        }

        // Ensure all images have explicit width and height to prevent layout shifts
        if (!img.hasAttribute("width") && !img.hasAttribute("height")) {
          // Only set default dimensions if none are specified
          // This helps prevent layout shifts while maintaining aspect ratio
          if (img.style.width === "" && img.style.height === "") {
            img.style.aspectRatio = "auto"
          }
        }
      })
    }

    // Run preload immediately
    preloadCriticalImages()

    // Run optimization immediately
    optimizeImages()

    // Also run after content loads (for dynamically added images)
    window.addEventListener("load", optimizeImages)

    // Clean up event listener
    return () => {
      window.removeEventListener("load", optimizeImages)
    }
  }, [])

  return null
}

