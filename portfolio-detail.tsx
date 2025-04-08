import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react"

export default function PortfolioDetail() {
  // This would typically come from a database or API
  const project = {
    id: 1,
    title: "Nature Photography Collection",
    category: "photography",
    description: "A collection of high-quality nature photographs showcasing the beauty of Bohol landscapes.",
    fullDescription: `This photography project captures the stunning natural beauty of Bohol, Philippines. From the iconic Chocolate Hills to pristine beaches and lush forests, this collection showcases the diverse landscapes that make Bohol a photographer's paradise.

Each photograph is carefully composed and edited to highlight the natural colors and textures of the environment. The project aims to promote eco-tourism in the region while documenting the natural wonders that need preservation.

The collection includes sunrise and sunset shots, macro photography of local flora and fauna, and aerial perspectives of the island's unique geological formations.`,
    image: "/placeholder.svg?height=600&width=1200",
    year: "2023",
    link: "#",
    technologies: ["Sony Alpha a7 III", "Adobe Lightroom", "Adobe Photoshop", "DJI Mavic Air 2"],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
        >
          SnowRainX
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-pink-500 transition-colors duration-300">
            Home
          </Link>
          <Link href="/resume" className="text-gray-800 hover:text-pink-500 transition-colors duration-300">
            Resume
          </Link>
          <Link href="/portfolio" className="text-pink-500 font-medium">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-pink-500 transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>

      <Link
        href="/portfolio"
        className="inline-flex items-center text-gray-600 hover:text-pink-500 mb-8 group transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
        Back to Portfolio
      </Link>

      <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg mb-12">
        <div className="relative h-[400px] md:h-[500px]">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  Photography
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-white/80 max-w-3xl">{project.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Project Overview</h2>
            <div className="prose max-w-none text-gray-300">
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-100">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg aspect-square"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredImage === index ? "scale-110" : ""
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredImage === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-zinc-900 rounded-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Project Details</h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">YEAR</h4>
                <p className="text-gray-200">{project.year}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">CATEGORY</h4>
                <p className="text-gray-200">Photography</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">TOOLS & TECHNOLOGIES</h4>
                <ul className="space-y-1">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="text-gray-200">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                View Live Project
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to collaborate on a project?</h2>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>

      <footer className="mt-20 flex flex-col md:flex-row justify-between items-center border-t pt-8">
        <p className="text-gray-500">© 2025 by SnowRainX</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
            onMouseEnter={(e) => e.currentTarget.classList.add("animate-pulse")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("animate-pulse")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
            onMouseEnter={(e) => e.currentTarget.classList.add("animate-pulse")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("animate-pulse")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
            onMouseEnter={(e) => e.currentTarget.classList.add("animate-pulse")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("animate-pulse")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
            onMouseEnter={(e) => e.currentTarget.classList.add("animate-pulse")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("animate-pulse")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

