"use client"

import { useState } from "react"
import { Camera, Code, ExternalLink, Paintbrush, PencilRuler } from "lucide-react"
import { ProjectModal } from "../components/project-modal"
import { ResponsiveImage } from "../components/responsive-image"
import Head from "next/head"

export default function Portfolio() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = [
    { id: "graphic design", name: "Graphic Design", icon: Paintbrush },
    { id: "development", name: "Development", icon: Code },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "va training", name: "VA Training", icon: PencilRuler },
  ]

  // Add the new button link properties to each project
  const projects = [
    {
      id: 1,
      title: "Custom Device Kernel Development",
      category: "development",
      description: "Samsung a70q and r1q development",
      image: "/kernel.avif",
      secimage: "/kern.avif",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2020",
      link: "https://xdaforums.com/t/kernel-fire_kernel-official-custom-extreme-kernel-for-galaxy-a70.4174819/",
      code: "https://github.com/sm7150/a70qkernel",
      technologies: ["Android", "Linux Kernel", "C/C++", "Git", "Shell Scripting"],
      show: true,
      firstbutton: "View Live Project",
      secbutton: "View Source Code",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink:
        "https://xdaforums.com/t/kernel-fire_kernel-official-custom-extreme-kernel-for-galaxy-a70.4174819/",
      secbuttonlink: "https://github.com/sm7150/a70qkernel",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 2,
      title: "Custom Device ROM Development",
      category: "development",
      description: "Samsung a70q and r1q development",
      image: "/AOSP.avif",
      secimage: "/cr.avif",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2020",
      link: "https://xdaforums.com/t/rom-stable-crdroidandroid-unofficial-6-13-10-0-2021-01-01.4209323/",
      code: "https://github.com/sm7150",
      technologies: ["Android", "ASOP", "Java", "XML", "Gradle", "Git"],
      show: true,
      firstbutton: "View Live Project",
      secbutton: "View Source Code",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "https://xdaforums.com/t/rom-stable-crdroidandroid-unofficial-6-13-10-0-2021-01-01.4209323/",
      secbuttonlink: "https://github.com/sm7150",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 3,
      title: "Repository Automation Development",
      category: "development",
      description: "Samsung SM6150/SM7150 repositories",
      image: "/placeholder.svg?height=300&width=400",
      secimage: "",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2020",
      link: "https://github.com/sm7150",
      github: "https://github.com/sm7150",
      technologies: ["Python", "Shell Scripting", "CI/CD", "Jenkins", "GitHub Actions", "BuildKite"],
      show: false,
      firstbutton: "View Repository",
      secbutton: "View Documentation",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "https://github.com/sm7150",
      secbuttonlink: "https://github.com/sm7150",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 4,
      title: "Email Designing",
      category: "graphic design",
      description: "Various email design projects",
      image: "/EMAILPROJ.avif",
      secimage: "/EMAILPROJ2.avif",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2025",
      link: "/email-designs",
      technologies: ["Adobe Photoshop", "Email Design", "Canva", "Figma"],
      show: true,
      firstbutton: "View Designs",
      secbutton: "",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "/email-designs",
      secbuttonlink: "",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 5,
      title: "Adobe Photoshop Designing",
      category: "graphic design",
      description: "Various design projects",
      image: "/placeholder.svg?height=300&width=400",
      secimage: "",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2020",
      link: "#",
      github: "https://github.com",
      technologies: ["Adobe Photoshop", "Digital Art", "Photo Manipulation", "Graphic Design"],
      show: false,
      firstbutton: "View Gallery",
      secbutton: "",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "#",
      secbuttonlink: "https://github.com",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 6,
      title: "Canva Designing",
      category: "graphic design",
      description: "Various design projects",
      image: "/placeholder.svg?height=300&width=400",
      secimage: "",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2022",
      link: "#",
      technologies: ["Canva", "Social Media Graphics", "Marketing Materials", "Brand Design"],
      show: false,
      firstbutton: "View Designs",
      secbutton: "",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "#",
      secbuttonlink: "",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 7,
      title: "Adobe Lightroom",
      category: "photography",
      description: "Photo retouching projects",
      image: "/placeholder.svg?height=300&width=400",
      secimage: "",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2021",
      link: "#",
      technologies: ["Adobe Lightroom", "RAW Processing", "Color Grading", "Photo Retouching"],
      show: false,
      firstbutton: "View Portfolio",
      secbutton: "",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "#",
      secbuttonlink: "",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 8,
      title: "Photographs",
      category: "photography",
      description: "Various of shots",
      image: "/placeholder.svg?height=300&width=400",
      secimage: "",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2021",
      link: "#",
      technologies: ["Sony", "Image Hunting", "Portrait", "Landscape"],
      show: false,
      firstbutton: "View Gallery",
      secbutton: "",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "#",
      secbuttonlink: "",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
    {
      id: 9,
      title: "VA/SMM Training",
      category: "va training",
      description: "Various of learnings",
      image: "/placeholder.svg?height=300&width=400",
      secimage: "",
      thirdimage: "",
      fourthimage: "",
      fifthimage: "",
      sixthimage: "",
      seventhimage: "",
      eighthimage: "",
      ninthimage: "",
      tenthimage: "",
      year: "2025",
      link: "#",
      technologies: ["Virtual Assitant", "Social Media Marketing", "Training", "Live"],
      show: false,
      firstbutton: "View Certificate",
      secbutton: "",
      thirdbutton: "",
      fourthbutton: "",
      firstbuttonlink: "#",
      secbuttonlink: "",
      thirdbuttonlink: "",
      fourthbuttonlink: "",
    },
  ]

  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  // Modified filtering logic to only show projects where show is true
  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category === activeCategory && project.show)
    : projects.filter((project) => project.show)

  return (
    <>
      {/* Preload critical images for LCP improvement */}
      <Head>
        <link rel="preload" href="/kernel.avif" as="image" fetchpriority="high" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2 heading-special bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          My Portfolio
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-12"></div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 ${
              activeCategory === null
                ? "bg-pink-500 text-black font-medium"
                : "bg-zinc-900 hover:bg-zinc-800 text-gray-200 hover:text-pink-500"
            }`}
            aria-label="Show all projects"
          >
            All Projects
          </button>
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 ${
                  activeCategory === category.id
                    ? "bg-pink-500 text-black font-medium"
                    : "bg-zinc-900 hover:bg-zinc-800 text-gray-200 hover:text-pink-500"
                }`}
                aria-label={`Filter by ${category.name}`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    hoveredCategory === category.id ? "scale-125" : ""
                  }`}
                  aria-hidden="true"
                />
                {category.name}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-800 cursor-pointer transform hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <ResponsiveImage
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={`w-full h-64 object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? "scale-110" : ""
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0} // Only prioritize the first image
                  fetchpriority={index === 0 ? "high" : "auto"} // Set high fetchpriority for the first image
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="p-4 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  {categories.find((cat) => cat.id === project.category) && (
                    <span className="px-3 py-1 bg-muted text-foreground rounded-full text-sm">
                      {categories.find((cat) => cat.id === project.category)?.name}
                    </span>
                  )}
                  <span className="text-pink-500 hover:text-purple-500 font-medium flex items-center gap-1 transition-colors duration-300">
                    View Details
                    <ExternalLink
                      className={`w-4 h-4 transition-transform duration-300 ${
                        hoveredProject === project.id ? "translate-x-1" : ""
                      }`}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={projects.find((p) => p.id === selectedProject)!}
          />
        )}
      </div>
    </>
  )
}

