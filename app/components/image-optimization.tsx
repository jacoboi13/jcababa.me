"use client"

import { useEffect } from "react"

/**
 * This component adds various image optimization techniques
 * to improve loading performance across the site
 */
export default function ImageOptimization() {
  useEffect(() => {
    // Add support for native lazy loading in browsers that support it
    if ("loading" in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]')
      images.forEach((img) => {
        img.setAttribute("loading", "lazy")
      })
    }

    // Add support for native image decoding in browsers that support it
    if ("decoding" in HTMLImageElement.prototype) {
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        if (img.hasAttribute("priority")) {
          img.setAttribute("decoding", "sync")
        } else {
          img.setAttribute("decoding", "async")
        }
      })
    }

    // Preload critical images
    const preloadImages = () => {
      const criticalImages = ["/ZLogo60.png", "/jc.avif"]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        document.head.appendChild(link)
      })
    }

    preloadImages()
  }, [])

  return null
}

