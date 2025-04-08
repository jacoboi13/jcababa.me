"use client"

import { useEffect } from "react"

export function PreventRightClick() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent inspect element shortcut (Ctrl+Shift+I or Cmd+Opt+I)
      if ((e.ctrlKey && e.shiftKey && e.key === "I") || (e.metaKey && e.altKey && e.key === "i")) {
        e.preventDefault()
      }

      // Prevent view source shortcut (Ctrl+U or Cmd+U)
      if ((e.ctrlKey && e.key === "u") || (e.metaKey && e.key === "u")) {
        e.preventDefault()
      }
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}

