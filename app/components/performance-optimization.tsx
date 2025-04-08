"use client"

import { useEffect } from "react"

/**
 * This component adds various performance optimizations
 * to improve loading and rendering across the site
 */
export default function PerformanceOptimization() {
  useEffect(() => {
    // Detect if the browser supports IntersectionObserver
    if ("IntersectionObserver" in window) {
      // Lazy load below-the-fold content
      const lazyLoadContent = () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // If the element is visible, load any deferred resources
                const target = entry.target as HTMLElement
                if (target.dataset.src) {
                  target.setAttribute("src", target.dataset.src)
                  target.removeAttribute("data-src")
                }
                observer.unobserve(target)
              }
            })
          },
          {
            rootMargin: "200px", // Start loading when within 200px of viewport
            threshold: 0.01,
          },
        )

        // Observe all elements with data-src attribute
        document.querySelectorAll("[data-src]").forEach((el) => {
          observer.observe(el)
        })
      }

      lazyLoadContent()
    }

    // Optimize third-party script loading
    const optimizeThirdPartyScripts = () => {
      // Find all third-party scripts
      const scripts = document.querySelectorAll('script[src^="https://"]')
      scripts.forEach((script) => {
        // Add async attribute to non-critical third-party scripts
        if (!script.hasAttribute("async") && !script.hasAttribute("defer")) {
          script.setAttribute("async", "")
        }
      })
    }

    // Run after a short delay to ensure DOM is fully loaded
    setTimeout(optimizeThirdPartyScripts, 1000)
  }, [])

  return null
}

