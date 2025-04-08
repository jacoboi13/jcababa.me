"use client"

import { X } from "lucide-react"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ResponsiveImage } from "./responsive-image"

// Update the ProjectModalProps interface to include the new button properties
interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: number
    title: string
    category: string
    description: string
    fullDescription?: string
    image: string
    secimage: string
    thirdimage: string
    fourthimage: string
    fifthimage: string
    sixthimage: string
    seventhimage: string
    eighthimage: string
    ninthimage: string
    tenthimage: string
    year: string
    link: string
    code: string
    technologies?: string[]
    gallery?: string[]
    firstbutton?: string
    secbutton?: string
    thirdbutton?: string
    fourthbutton?: string
    firstbuttonlink?: string
    secbuttonlink?: string
    thirdbuttonlink?: string
    fourthbuttonlink?: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Project descriptions
  const getProjectOverview = (id: number) => {
    switch (id) {
      case 1:
        return "This project focuses on the development of a custom ROM, aiming to enhance performance, optimize battery life, and provide a more customizable user experience by fine-tuning the Android operating system. Through meticulous kernel modifications, debloating unnecessary system apps, implementing security patches, and integrating advanced features, the goal is to create a lightweight yet powerful firmware tailored to specific devices. Additionally, the project emphasizes stability, smooth user interactions, and ongoing updates to ensure compatibility with the latest Android versions while maintaining a balance between functionality and user control."
      case 2:
        return "This project involves creating a custom ROM for Samsung devices (SM-A705 & SM-805), focusing on delivering a clean, bloat-free Android experience with enhanced performance and battery life. The custom ROM includes carefully selected features, optimized system processes, and a streamlined interface that maintains the core Android experience while adding useful customization options. The development process includes rigorous testing to ensure stability across different usage scenarios, regular security updates, and compatibility with popular applications."
      case 3:
        return "This repository automation project streamlines the development workflow for SM6150 & SM7150 device platforms by implementing CI/CD pipelines, automated build processes, and quality assurance checks. The system automatically handles code compilation, testing, and deployment, significantly reducing manual intervention and human error. Key features include scheduled builds, dependency management, error reporting, and integration with version control systems, allowing developers to focus on code quality rather than repetitive build tasks."
      case 4:
        return "This Photoshop design project encompasses a variety of creative works including digital art, photo manipulation, and graphic design. Using advanced techniques in Adobe Photoshop, the project delivers high-quality visual assets for various purposes including marketing materials, social media content, and personal creative expression. The work demonstrates proficiency in layer management, color correction, digital compositing, and creative effects application."
      case 5:
        return "This Canva photo design project focuses on creating visually appealing graphics and layouts for social media, presentations, and marketing materials. Leveraging Canva's intuitive interface and extensive template library, the project delivers professional-looking designs that maintain brand consistency while effectively communicating key messages. The work demonstrates skills in typography, color theory, layout design, and visual storytelling."
      case 6:
        return "This Adobe  color theory, layout design, and visual storytelling."
      case 6:
        return "This Adobe Lightroom RAW image editing project involves the professional processing and enhancement of high-quality photographs. Working with RAW image files to preserve maximum detail and quality, the project demonstrates advanced skills in color grading, exposure adjustment, selective editing, and batch processing. The editing workflow is designed to maintain natural-looking results while enhancing the visual impact of each image, with particular attention to color accuracy, detail preservation, and artistic expression."
      default:
        return project.fullDescription || project.description
    }
  }

  // Get device model based on project ID
  const getDeviceModel = (id: number) => {
    switch (id) {
      case 1:
      case 2:
        return "SM-A705 & SM-805"
      case 3:
        return "SM6150 & SM7150"
      default:
        return ""
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with fade */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal with fade and slight scale */}
          <motion.div
            className="relative w-[95vw] max-w-5xl max-h-[90vh] bg-background rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button - positioned outside the scrollable area */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content - scrollable */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Header */}
              <div className="p-6 pb-0">
                <h2 className="text-2xl font-bold">{project.title}</h2>
              </div>

              {/* Main project image */}
              <div className="relative h-[300px] md:h-[400px] p-6">
                <div className="relative h-full w-full rounded-lg overflow-hidden">
                  <ResponsiveImage
                    src={project.image || "/placeholder.svg?height=600&width=1200"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
                    quality={80}
                  />
                  <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                      {project.year}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 p-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>

                  {/* Device model based on project ID */}
                  {getDeviceModel(project.id) && (
                    <p className="text-base font-medium mb-4">{getDeviceModel(project.id)}</p>
                  )}

                  {/* Project description - First paragraph */}
                  <div className="text-muted-foreground whitespace-pre-line text-sm md:text-base mb-8">
                    {getProjectOverview(project.id)}
                  </div>

                  {/* Second image - Only display if secimage exists */}
                  {project.secimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <ResponsiveImage
                          src={project.secimage || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 800px"
                          quality={75}
                        />
                        <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                            {project.year}
                          </span>
                          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Third image - Only display if thirdimage exists */}
                  {project.thirdimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <ResponsiveImage
                          src={project.thirdimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 1`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 800px"
                          quality={75}
                        />
                      </div>
                    </div>
                  )}

                  {/* Fourth image - Only display if fourthimage exists */}
                  {project.fourthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <ResponsiveImage
                          src={project.fourthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 2`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 800px"
                          quality={75}
                        />
                      </div>
                    </div>
                  )}

                  {/* Fifth image - Only display if fifthimage exists */}
                  {project.fifthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <ResponsiveImage
                          src={project.fifthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 3`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 800px"
                          quality={75}
                        />
                      </div>
                    </div>
                  )}

                  {/* Additional paragraphs - Same text repeated */}
                  <div className="space-y-6">
                    <p className="text-sm md:text-base text-muted-foreground">
                      {project.id === 1
                        ? "The Fire Kernel for the Samsung Galaxy A70 and A80 significantly enhances overall device efficiency by improving processing power, optimizing battery consumption, and refining system responsiveness. It features upgraded CPU and GPU performance, streamlined memory management, improved security measures, and extended compatibility with custom ROMs. The combination of these enhancements ensures a well-balanced and high-performing Android experience."
                        : project.id === 2
                          ? "To further enhance performance and efficiency, I integrated my custom-built Ice Kernel (formerly known as Fire Kernel) into these ROMs. This kernel is specifically designed to optimize CPU and GPU operations, improve memory management, and extend battery life. The combination of the Ice Kernel with the minimalist design of the custom ROMs results in a significantly more efficient and responsive device."
                          : project.id === 3
                            ? "This repository automation project streamlines the development workflow for SM6150 & SM7150 device platforms by implementing CI/CD pipelines, automated build processes, and quality assurance checks. The system automatically handles code compilation, testing, and deployment, significantly reducing manual intervention and human error. Key features include scheduled builds, dependency management, error reporting, and integration with version control systems, allowing developers to focus on code quality rather than repetitive build tasks."
                            : project.id === 4
                              ? "With expertise in photo enhancement and manipulation, I ensure that every design maintains a polished, professional look that captivates and resonates with its audience."
                              : project.id === 5
                                ? "This Canva photo design project focuses on creating visually appealing graphics and layouts for social media, presentations, and marketing materials. Leveraging Canva's intuitive interface and extensive template library, the project delivers professional-looking designs that maintain brand consistency while effectively communicating key messages. The work demonstrates skills in typography, color theory, layout design, and visual storytelling."
                                : project.id === 6
                                  ? "This Adobe Lightroom RAW image editing project involves the professional processing and enhancement of high-quality photographs. Working with RAW image files to preserve maximum detail and quality, the project demonstrates advanced skills in color grading, exposure adjustment, selective editing, and batch processing. The editing workflow is designed to maintain natural-looking results while enhancing the visual impact of each image, with particular attention to color accuracy, detail preservation, and artistic expression."
                                  : project.fullDescription || project.description}
                    </p>

                    <p className="text-sm md:text-base text-muted-foreground">
                      {project.id === 1
                        ? "Later on, it was rebranded into Ice Kernel which surpasses the speed and stability of Fire Kernel. It clocked 10% faster from any benchmarking apps and faster boot times than Fire Kernel. It still retain some superb security patches from CAF Sources while reducing unnecessary processes to make the device run cooler and peaceful."
                        : project.id === 2
                          ? " Overall, this project delivers a lightweight, high-performance alternative to the stock firmware, enhancing the user experience on Samsung Galaxy A70 and A80 devices."
                          : project.id === 3
                            ? "This repository automation project streamlines the development workflow for SM6150 & SM7150 device platforms by implementing CI/CD pipelines, automated build processes, and quality assurance checks. The system automatically handles code compilation, testing, and deployment, significantly reducing manual intervention and human error. Key features include scheduled builds, dependency management, error reporting, and integration with version control systems, allowing developers to focus on code quality rather than repetitive build tasks."
                            : project.id === 4
                              ? ""
                              : project.id === 5
                                ? "This Canva photo design project focuses on creating visually appealing graphics and layouts for social media, presentations, and marketing materials. Leveraging Canva's intuitive interface and extensive template library, the project delivers professional-looking designs that maintain brand consistency while effectively communicating key messages. The work demonstrates skills in typography, color theory, layout design, and visual storytelling."
                                : project.id === 6
                                  ? "This Adobe Lightroom RAW image editing project involves the professional processing and enhancement of high-quality photographs. Working with RAW image files to preserve maximum detail and quality, the project demonstrates advanced skills in color grading, exposure adjustment, selective editing, and batch processing. The editing workflow is designed to maintain natural-looking results while enhancing the visual impact of each image, with particular attention to color accuracy, detail preservation, and artistic expression."
                                  : project.fullDescription || project.description}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="bg-muted p-4 rounded-lg sticky top-4">
                    <h3 className="font-semibold mb-4">Project Details</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">YEAR</h4>
                        <p>{project.year}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">CATEGORY</h4>
                        <p className="capitalize">{project.category}</p>
                      </div>

                      {project.technologies && (
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">TECHNOLOGIES</h4>
                          <ul className="list-disc list-inside">
                            {project.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Replace the buttons section in the component with centered, conditional buttons */}
                    <div className="mt-6 space-y-3 flex flex-col items-center">
                      {project.firstbutton && (
                        <a
                          href={project.firstbuttonlink || project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.firstbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.secbutton && (
                        <a
                          href={project.secbuttonlink || project.code || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.secbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.thirdbutton && (
                        <a
                          href={project.thirdbuttonlink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.thirdbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.fourthbutton && (
                        <a
                          href={project.fourthbuttonlink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.fourthbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

