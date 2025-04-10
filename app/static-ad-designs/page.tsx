"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ZoomIn,
  ZoomOut,
  ShieldAlert,
  Info,
  AlertTriangle,
  Palette,
  Calendar,
  Wrench,
  Share2,
  Globe,
  Newspaper,
  Mountain,
  Package,
} from "lucide-react"

export default function StaticAdDesigns() {
  // State for tracking which image is being viewed in the modal
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  // State for zoom level - adjusted for better visibility
  const [zoomLevel, setZoomLevel] = useState(0.7)
  // State for security warning
  const [showSecurityWarning, setShowSecurityWarning] = useState(false)
  // Ref for the container
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // Ref for the image container
  const imageContainerRef = useRef<HTMLDivElement>(null)
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false)
  // State to track if image is loaded
  const [imageLoaded, setImageLoaded] = useState(false)
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  // State to track mobile card index
  const [mobileCardIndex, setMobileCardIndex] = useState(0)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Add this useEffect to cycle through the card content on mobile
  useEffect(() => {
    if (isMobile && selectedImage !== null) {
      const interval = setInterval(() => {
        setMobileCardIndex((prev) => (prev + 1) % 3)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isMobile, selectedImage])

  // Add a useEffect to set different zoom levels for mobile and desktop
  useEffect(() => {
    // Set different default zoom levels for mobile and desktop
    if (isMobile) {
      setZoomLevel(0.7) // Adjusted zoom level for mobile
    } else {
      setZoomLevel(0.4) // Adjusted zoom level for desktop
    }

    // Reset image loaded state when image changes
    setImageLoaded(false)
  }, [isMobile, selectedImage]) // Reset zoom when image changes or when screen size changes

  // Static ad designs with categories
  const staticAdDesigns = [
    {
      id: 1,
      title: "Social Media Banner",
      description: "Facebook cover image",
      src: "/placeholder.svg?height=1600&width=1200&text=Social+Media+Banner",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Social+Media+Banner",
      show: true,
      brand: "Example Brand",
      context:
        "This social media banner is designed for Facebook cover images with a focus on brand visibility and campaign messaging.",
      year: "2025",
      tools: ["Photoshop", "Canva"],
      type: "Social Media",
    },
    {
      id: 2,
      title: "Instagram Post",
      description: "Square format post",
      src: "/placeholder.svg?height=1600&width=1200&text=Instagram+Post",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Instagram+Post",
      show: true,
      brand: "Example Brand",
      context:
        "This Instagram post uses a square format with vibrant colors and clear messaging to stand out in users' feeds.",
      year: "2025",
      tools: ["Photoshop", "Canva"],
      type: "Social Media",
    },
    {
      id: 3,
      title: "Web Banner",
      description: "Responsive banner ad",
      src: "/placeholder.svg?height=1600&width=1200&text=Web+Banner",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Web+Banner",
      show: true,
      brand: "Example Brand",
      context:
        "This web banner is designed to be responsive across different devices while maintaining visual appeal and clear call-to-action.",
      year: "2025",
      tools: ["Photoshop", "Figma"],
      type: "Web Advertising",
    },
    {
      id: 4,
      title: "Print Advertisement",
      description: "Magazine full-page ad",
      src: "/placeholder.svg?height=1600&width=1200&text=Print+Advertisement",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Print+Advertisement",
      show: true,
      brand: "Example Brand",
      context:
        "This print advertisement is designed for magazine placement with high-resolution imagery and compelling copy.",
      year: "2025",
      tools: ["InDesign", "Photoshop"],
      type: "Print",
    },
    {
      id: 5,
      title: "Billboard Design",
      description: "Outdoor advertising",
      src: "/placeholder.svg?height=1600&width=1200&text=Billboard+Design",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Billboard+Design",
      show: true,
      brand: "Example Brand",
      context: "This billboard design uses large typography and simple imagery for maximum impact at a distance.",
      year: "2025",
      tools: ["Photoshop", "Illustrator"],
      type: "Outdoor",
    },
    {
      id: 6,
      title: "Product Packaging",
      description: "Retail packaging design",
      src: "/placeholder.svg?height=1600&width=1200&text=Product+Packaging",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Product+Packaging",
      show: true,
      brand: "Example Brand",
      context: "This product packaging design balances brand identity with practical information and shelf appeal.",
      year: "2025",
      tools: ["Illustrator", "Photoshop"],
      type: "Packaging",
    },
  ]

  // Add this function after the staticAdDesigns array and before getUniqueCategories
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Social Media":
        return Share2
      case "Web Advertising":
        return Globe
      case "Print":
        return Newspaper
      case "Outdoor":
        return Mountain
      case "Packaging":
        return Package
      default:
        return Palette
    }
  }

  // Function to get unique categories
  const getUniqueCategories = () => {
    const categories = staticAdDesigns
      .filter((design) => design.show)
      .map((design) => design.type)
      .filter((value, index, self) => self.indexOf(value) === index)
    return categories
  }

  const categories = getUniqueCategories()

  // Function to handle zoom in with limits
  const handleZoomIn = () => {
    setZoomLevel((prev) => {
      // Limit zoom to 2.0 to ensure cards remain visible
      return Math.min(prev + 0.1, 2.0)
    })
  }

  // Function to handle zoom out
  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.3))
  }

  // Function to reset zoom when closing modal
  const handleCloseModal = () => {
    setSelectedImage(null)
    setZoomLevel(isMobile ? 0.6 : 0.7) // Reset to default zoom level
    setImageLoaded(false)
  }

  // Get the current design
  const currentDesign = selectedImage ? staticAdDesigns.find((d) => d.id === selectedImage) : null

  // Enhanced security measures
  useEffect(() => {
    // Show security warning once
    setShowSecurityWarning(true)
    setTimeout(() => setShowSecurityWarning(false), 5000)

    // Prevent keyboard shortcuts for saving images
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Ctrl+P, Ctrl+Shift+I, PrtScn
      if (
        (e.ctrlKey && (e.key === "s" || e.key === "p")) ||
        (e.ctrlKey && e.shiftKey && e.key === "i") ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault()
        setShowSecurityWarning(true)
        setTimeout(() => setShowSecurityWarning(false), 3000)
        return false
      }
    }

    // Prevent drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Detect screenshot attempts (limited effectiveness)
    const detectScreenshot = () => {
      if (document.hidden) {
        setShowSecurityWarning(true)
        setTimeout(() => setShowSecurityWarning(false), 3000)
      }
    }

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("dragstart", handleDragStart)
    document.addEventListener("visibilitychange", detectScreenshot)

    // Disable browser's native image drag
    const images = document.getElementsByTagName("img")
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("draggable", "false")
    }

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("visibilitychange", detectScreenshot)
    }
  }, [])

  // Filter designs based on active category
  const filteredStaticAdDesigns = activeCategory
    ? staticAdDesigns.filter((design) => design.show && design.type === activeCategory)
    : staticAdDesigns.filter((design) => design.show)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12" ref={containerRef}>
      <h1 className="text-3xl font-bold text-center mb-4 text-purple-600 heading-special">Static Ad Designs</h1>

      {/* Security notice */}
      <div className="mb-8 p-4 bg-pink-500/10 border border-pink-500/20 rounded-lg">
        <p className="text-sm text-center text-foreground">
          These designs are protected by copyright. Unauthorized reproduction, distribution, or use is strictly
          prohibited.
          <br />© {new Date().getFullYear()} Johncarlo Ababa. All rights reserved.
        </p>
      </div>

      {/* Category filtering */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 ${
            activeCategory === null
              ? "bg-pink-500 text-black font-medium"
              : "bg-zinc-900 hover:bg-zinc-800 text-gray-200 hover:text-pink-500"
          }`}
          aria-label="Show all designs"
        >
          All Designs
        </button>
        {categories.map((category) => {
          const Icon = getCategoryIcon(category)
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 ${
                activeCategory === category
                  ? "bg-pink-500 text-black font-medium"
                  : "bg-zinc-900 hover:bg-zinc-800 text-gray-200 hover:text-pink-500"
              }`}
              aria-label={`Filter by ${category}`}
            >
              <Icon
                className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredCategory === category ? "scale-125" : ""
                }`}
                aria-hidden="true"
              />
              {category}
            </button>
          )
        })}
      </div>

      {/* Design grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStaticAdDesigns.map((design) => (
          <div
            key={design.id}
            className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-800 cursor-pointer transform hover:scale-[1.02] group"
            onClick={() => setSelectedImage(design.id)}
          >
            <div className="relative aspect-[3/4] overflow-hidden select-none">
              <div className="relative w-full h-full">
                <Image
                  src={design.thumbnail || design.src || "/placeholder.svg"}
                  alt={design.title}
                  fill
                  className="object-cover object-top select-none"
                  draggable="false"
                  unoptimized={true}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ WebkitUserDrag: "none" }}
                  priority={design.id <= 3}
                />
              </div>

              {/* Gradient overlay that shows on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Click to view</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-pink-500 group-hover:scale-105 transition-all duration-300">
                  {design.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{design.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing enlarged images */}
      <AnimatePresence>
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-start justify-center">
            {/* Backdrop with fade */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={handleCloseModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Modal with fade and slight scale */}
            <motion.div
              className="relative w-[95vw] h-[90vh] flex flex-col md:flex-row pt-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Mobile view: Cycling info card at the top */}
              {isMobile && currentDesign && (
                <div className="w-full mb-4 px-4 pt-10">
                  {/* Fixed height container to prevent layout shifts */}
                  <div className="relative h-[180px]">
                    <AnimatePresence mode="wait">
                      {mobileCardIndex === 0 && (
                        <motion.div
                          key="disclaimer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 text-white text-sm overflow-y-auto"
                        >
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Disclaimer</p>
                              <p>
                                All brand names, trademarks, and images belong to their respective owners. These designs
                                are created for demonstration and portfolio purposes only and are not affiliated with or
                                endorsed by {currentDesign.brand}.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {mobileCardIndex === 1 && (
                        <motion.div
                          key="context"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 text-white text-sm overflow-y-auto"
                        >
                          <div className="flex items-start gap-2">
                            <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium mb-1">Design Context</p>
                              <p>{currentDesign.context}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {mobileCardIndex === 2 && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 text-white text-sm overflow-y-auto"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-pink-400 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-white/70">YEAR</p>
                                <p>{currentDesign.year}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Wrench className="w-4 h-4 text-pink-400 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-white/70">TOOLS</p>
                                <p>{currentDesign.tools.join(", ")}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Palette className="w-4 h-4 text-pink-400 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-white/70">TYPE</p>
                                <p>{currentDesign.type}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Indicator dots */}
                  <div className="flex justify-center mt-1 space-x-2">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setMobileCardIndex(index)
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          mobileCardIndex === index ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`View card ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Zoom controls */}
              <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                  aria-label="Zoom out"
                  disabled={zoomLevel <= 0.3}
                >
                  <ZoomOut className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                  aria-label="Zoom in"
                  disabled={zoomLevel >= 2.0}
                >
                  <ZoomIn className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Image container with scroll */}
              <div
                ref={imageContainerRef}
                className={`${isMobile ? "w-full pt-4" : "w-[calc(100%-320px)] pt-4"} h-full overflow-auto custom-scrollbar select-none`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {selectedImage && (
                  <div
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transition: "transform 0.3s ease",
                      transformOrigin: "top center",
                      maxWidth: "100%",
                      margin: 0,
                      padding: 0,
                      display: "block",
                    }}
                  >
                    <img
                      src={staticAdDesigns.find((d) => d.id === selectedImage)?.src || ""}
                      alt={`${staticAdDesigns.find((d) => d.id === selectedImage)?.title}`}
                      className="select-none"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                      style={{
                        WebkitUserDrag: "none",
                        display: "block",
                        maxWidth: "100%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        marginBottom: 0,
                        paddingBottom: 0,
                      }}
                      onLoad={() => {
                        setImageLoaded(true)
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Desktop view: Sticky info cards on the right */}
              {!isMobile && currentDesign && (
                <div className="hidden md:block w-[320px] h-full relative">
                  <div className="absolute top-0 right-0 w-[300px] space-y-4 p-4 max-h-full overflow-y-auto custom-scrollbar">
                    {/* Disclaimer Card */}
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 text-white text-sm sticky top-4">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium mb-1">Disclaimer</p>
                          <p>
                            All brand names, trademarks, and images belong to their respective owners. These designs are
                            created for demonstration and portfolio purposes only and are not affiliated with or
                            endorsed by {currentDesign.brand}.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Context Card */}
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 text-white text-sm sticky top-[180px]">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium mb-1">Design Context</p>
                          <p>{currentDesign.context}</p>
                        </div>
                      </div>
                    </div>

                    {/* Design Details Card */}
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 text-white text-sm sticky top-[320px]">
                      <div className="space-y-3">
                        <p className="font-medium mb-1">Design Details</p>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-pink-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-white/70">YEAR</p>
                            <p>{currentDesign.year}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Wrench className="w-5 h-5 text-pink-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-white/70">TOOLS</p>
                            <p>{currentDesign.tools.join(", ")}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Palette className="w-5 h-5 text-pink-400 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-white/70">TYPE</p>
                            <p>{currentDesign.type}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Security warning toast */}
      <AnimatePresence>
        {showSecurityWarning && (
          <motion.div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <ShieldAlert className="w-5 h-5" />
            <span>These designs are protected. Copying is not permitted.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
