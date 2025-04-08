"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Tag, ExternalLink } from "lucide-react"
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[85vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>

              {project.gallery && (
                <>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">YEAR</h4>
                    <p>{project.year}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">CATEGORY</h4>
                    <p>{project.category}</p>
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
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
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

