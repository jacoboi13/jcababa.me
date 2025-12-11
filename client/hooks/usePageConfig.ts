"use client"

import { useEffect, useState } from "react"

interface PageConfig {
  pageTitle: string
  // Add other config types as needed
}

export const usePageConfig = () => {
  const [config, setConfig] = useState<PageConfig | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/content.json")
        const data = await response.json()
        setConfig(data)
        document.title = data.pageTitle || "JC | Email Designer"
      } catch (error) {
        console.error("Failed to load page config:", error)
        // Fallback title if config fails to load
        document.title = "JC | Email Designer"
      } finally {
        setIsLoading(false)
      }
    }

    fetchConfig()
  }, [])

  return { config, isLoading }
}
