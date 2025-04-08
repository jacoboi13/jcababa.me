import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, ExternalLink, Tag } from "lucide-react"
import Image from "next/image"

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
    year: string
    link: string
    technologies?: string[]
    gallery?: string[]
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[85vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {/* Main project image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg?height=600&width=1200"}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 flex gap-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                <Tag className="w-4 h-4" />
                {project.category}
              </span>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>

              {getDeviceModel(project.id) && <p className="text-base font-medium mb-4">{getDeviceModel(project.id)}</p>}

              <div className="text-muted-foreground whitespace-pre-line text-sm md:text-base mb-8">
                {getProjectOverview(project.id)}
              </div>

              {/* Second image */}
              <div className="mt-8 mb-8">
                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Additional project view"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                      <Tag className="w-4 h-4" />
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional paragraphs */}
              <div className="space-y-6">
                <p className="text-sm md:text-base text-muted-foreground">{getProjectOverview(project.id)}</p>

                <p className="text-sm md:text-base text-muted-foreground">{getProjectOverview(project.id)}</p>
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

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  View Live Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

