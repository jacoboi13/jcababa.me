"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, ZoomOut, ShieldAlert, Info, AlertTriangle, Palette, Calendar, Wrench } from "lucide-react"

export default function EmailDesigns() {
  // State for tracking which image is being viewed in the modal
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  // State for zoom level - adjusted for better visibility
  const [zoomLevel, setZoomLevel] = useState(0.7)
  // State for security warning
  const [showSecurityWarning, setShowSecurityWarning] = useState(false)
  // Ref for the container
  const containerRef = useRef<HTMLDivElement>(null)
  // Ref for the image container
  const imageContainerRef = useRef<HTMLDivElement>(null)
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false)
  // State to track if image is loaded
  const [imageLoaded, setImageLoaded] = useState(false)

  // Add this new state near the other state declarations
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

  // Replace the emailDesigns array with this updated version that includes 9 items with show property
  const emailDesigns = [
    {
      id: 1,
      title: "JCABABA.ME Website",
      description: "Website launch showcase",
      src: "/jcababame.png?height=7185&width=1200&text=BMW+M4CSL",
      thumbnail: "/jcababamethumbnail.png", // New thumbnail property
      show: true,
      brand: "JCABABA.ME",
      context:
        "This website showcases my work with a sleek, ultra-lightweight design, built for speed, performance, and interactivity.",
      year: "2025",
      tools: ["Figma", "Canva", "Photoshop"],
      type: "Website Launch Email",
    },
    {
      id: 2,
      title: "BMW M4 CSL",
      description: "Product showcase",
      src: "/m4highlight.png?height=7185&width=1200&text=BMW+M4CSL",
      thumbnail: "/m4thumbnail.png", // New thumbnail property
      show: true,
      brand: "BMW",
      context:
        "This email campaign concept focuses on luxury automotive promotion with a sleek, modern layout that highlights the performance features of the BMW M4 CSL.",
      year: "2024",
      tools: ["Figma", "Photoshop"],
      type: "Product Launch Email",
    },
    {
      id: 3,
      title: "Abandoned BMW M4",
      description: "Follow-up email",
      src: "/m4abandoned.png?height=5982&width=1200&text=Product+Announcement",
      thumbnail: "/m4abandonedthumbnail.png", // New thumbnail property
      show: true,
      brand: "BMW",
      context:
        "This abandoned cart email design uses dramatic imagery and minimalist typography to create urgency and reconnect potential customers with the BMW M4 they were considering.",
      year: "2024",
      tools: ["Figma", "Photoshop"],
      type: "Abandoned Cart Recovery Email",
    },
    {
      id: 4,
      title: "Lollipop Brushes",
      description: "Promotional campaign",
      src: "/lollipopbrushes.png?height=6250&width=1200&text=Event+Invitation",
      thumbnail: "/lollipopbrushesthumbnail.png", // New thumbnail property
      show: true,
      brand: "Lollipop Brushes",
      context:
        "This vibrant promotional email for Lollipop Brushes uses playful colors and clean product photography to showcase the makeup brush collection in an engaging, visually appealing way.",
      year: "2024",
      tools: ["Figma", "Canva", "Photoshop"],
      type: "Promotional Email",
    },
    {
      id: 5,
      title: "Shea Terra Organics",
      description: "Promotional campaign",
      src: "/SheaTerra.png?height=6250&width=1200&text=Welcome+Email",
      thumbnail: "/SheaTerrathumbnail.png", // New thumbnail property
      show: true,
      brand: "Shea Terra Organics",
      context:
        "This Shea Terra promotional email emphasizes natural ingredients and sustainability through earthy tones and organic imagery, connecting customers with the brand's eco-friendly values.",
      year: "2024",
      tools: ["Figma", "Canva"],
      type: "Welcome Email",
    },
    {
      id: 6,
      title: "Lollipop Brushes",
      description: "Promotional campaign",
      src: "/lollipopbrushesv2.png?height=5130&width=1200&text=Promotional+Campaign",
      thumbnail: "/lollipopbrushesv2th.png", // New thumbnail property
      show: true,
      brand: "Lollipop Brushes",
      context:
        "This promotional campaign template uses a balanced layout with strong visual hierarchy to guide readers through product offerings and special deals.",
      year: "2024",
      tools: ["Figma", "Canva", "Photoshop"],
      type: "Promotional Email",
    },
    {
      id: 7,
      title: "Splitflask Tumbler",
      description: "Welcome email",
      src: "/Splitflask.png?height=7197&width=1200&text=Welcome+Email",
      thumbnail: "/Splitflaskth.png", // New thumbnail property
      show: true,
      brand: "Splitflask",
      context:
        "This welcome email template creates a sense of importance for customer who recently purchased this beautiful tumbler, perfect for customers who don't know anything about this brand.",
      year: "2024",
      tools: ["Figma", "Canva", "Photoshop"],
      type: "Welcome Email",
    },
    {
      id: 8,
      title: "Pinkbike",
      description: "Newsletter",
      src: "/pb.png?height=4370&width=1200&text=Newsletter",
      thumbnail: "/pbth.png", // New thumbnail property
      show: true,
      brand: "Pinkbike",
      context:
        "This newsletter template balances content blocks with imagery to create an engaging reading experience that keeps subscribers informed about brand updates.",
      year: "2024",
      tools: ["Figma", "Canva", "Photoshop"],
      type: "Newsletter Email",
    },
    {
      id: 9,
      title: "Email Design 8",
      description: "Transactional email template",
      src: "/placeholder.svg?height=1600&width=1200&text=Transactional+Email",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Transactional+Email", // New thumbnail property
      show: false,
      brand: "Generic Brand",
      context:
        "This transactional email template provides clear order information while maintaining brand identity, ensuring customers feel confident about their purchase.",
      year: "2024",
      tools: ["Figma"],
      type: "Transactional Email",
    },
    {
      id: 10,
      title: "Email Design 9",
      description: "Welcome series template",
      src: "/placeholder.svg?height=1600&width=1200&text=Welcome+Series",
      thumbnail: "/placeholder.svg?height=400&width=300&text=Welcome+Series", // New thumbnail property
      show: false,
      brand: "Generic Brand",
      context:
        "This welcome series email introduces new subscribers to the brand with a clean, approachable design that encourages further engagement.",
      year: "2024",
      tools: ["Figma", "Photoshop"],
      type: "Welcome Series Email",
    },
  ]

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
  const currentDesign = selectedImage ? emailDesigns.find((d) => d.id === selectedImage) : null

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

  // Add this line right before the return statement to filter the displayed cards
  const filteredEmailDesigns = emailDesigns.filter((design) => design.show)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12" ref={containerRef}>
      <h1 className="text-3xl font-bold text-center mb-4 text-purple-600 heading-special">Email Designs</h1>

      {/* Security notice */}
      <div className="mb-8 p-4 bg-pink-500/10 border border-pink-500/20 rounded-lg">
        <p className="text-sm text-center text-foreground">
          These designs are protected by copyright. Unauthorized reproduction, distribution, or use is strictly
          prohibited.
          <br />© {new Date().getFullYear()} Johncarlo Ababa. All rights reserved.
        </p>
      </div>

      {/* Then replace the mapping in the grid with this: */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEmailDesigns.map((design) => (
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

              {/* Image container with scroll - COMPLETELY REDESIGNED */}
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
                      src={emailDesigns.find((d) => d.id === selectedImage)?.src || ""}
                      alt={`${emailDesigns.find((d) => d.id === selectedImage)?.title}`}
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

              {/* Desktop view: Sticky info cards on the right - adjusted size */}
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

