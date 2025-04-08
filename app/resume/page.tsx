import { ResponsiveImage } from "../components/responsive-image"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 heading-special bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        Resume
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105 sticky top-24">
            <ResponsiveImage
              src="/jca.avif"
              alt="Johncarlo Ababa"
              width={300}
              height={300}
              className="rounded-lg mx-auto mb-4"
              priority
              sizes="(max-width: 768px) 300px, 300px"
              quality={85}
              fetchpriority="high"
            />
            <h2 className="text-2xl font-bold mt-4 mb-2 heading-special text-purple-600">Who I Am</h2>
            <p className="text-muted-foreground mb-4">
              Passionate about technology and driven by a vision to reset humanity for a better future.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="/Jc_Ababa_Resume_&_Portfolio_2025.pdf"
                download="Jc_Ababa_Resume_&_Portfolio_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#000000] text-white rounded-full font-medium text-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-pink-500/50"
              >
                <span className="inline-block transition-transform duration-300 hover:scale-110 hover:text-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Download Resume & Portfolio
                </span>
              </a>
              <Link
                href="/certificate"
                className="inline-block px-4 py-2 bg-[#000000] text-white rounded-full font-medium text-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-pink-500/50"
              >
                <span className="inline-block transition-transform duration-300 hover:scale-110 hover:text-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  VA Certificate
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-block px-4 py-2 bg-[#000000] text-white rounded-full font-medium text-center transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-pink-500/50"
              >
                <span className="inline-block transition-transform duration-300 hover:scale-110 hover:text-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  View Portfolio
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Specialties:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Graphic Design</li>
                <li>Automation</li>
                <li>Photography</li>
                <li>Vibe Coding</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Languages:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>English</li>
                <li>Filipino</li>
                <li>Cebuano</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Tools & Software:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>Canva</li>
                <li>GitHub</li>
                <li>Figma</li>
                <li>Microsoft Office Suite</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Virtual Assistant Training (Philippines)</h3>
              <ul className="space-y-2 text-foreground">
                <li className="font-bold">Specialization:</li>
                <li className="list-disc list-inside">General Virtual Assistant</li>
                <li className="list-disc list-inside">Social Media Management</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 heading-special text-violet-400">Education</h2>
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 space-y-4 transition-transform duration-300 hover:scale-105">
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Science in Information Technology</h3>
              <p className="text-muted-foreground">Cebu Institute of Technology - University (2020-2024)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 heading-special text-pink-400">Open-Source Work</h2>
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 space-y-4 transition-transform duration-300 hover:scale-105">
            <div>
              <h3 className="text-lg font-semibold">Custom Device Kernel Development (Samsung SM-A705/A805)</h3>
              <p className="text-muted-foreground">Junior Developer, Contributor & Lead Tester (2019-2021)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Custom Device ROM Development (Samsung SM-A705/A805)</h3>
              <p className="text-muted-foreground">Contributor, Builder & Automator; Lead Tester (2019-2021)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Repository Automation Development (Samsung SM6150/7150)</h3>
              <p className="text-muted-foreground">Junior Developer (2019-2021)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 heading-special text-purple-400">Graphic Design Work</h2>
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 space-y-4 transition-transform duration-300 hover:scale-105">
            <div>
              <h3 className="text-lg font-semibold">Photoshop (MyInk Printing Shop)</h3>
              <p className="text-muted-foreground">Entry Level Graphic Designer (2016-2017)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Photoshop (Self Projectss)</h3>
              <p className="text-muted-foreground">Graphic Designer & Consultant (2017-2025)</p>
              <p className="text-muted-foreground">Image Enhancer & Manipulator (2020-2025)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Canva (Self Projects)</h3>
              <p className="text-muted-foreground">Photo Enhancer & Retoucher (2023-2025)</p>
              <p className="text-muted-foreground">Graphic Designer (2024-2025)</p>
              <p className="text-muted-foreground">Email Designer (2024-2025)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Figma (Self Projects)</h3>
              <p className="text-muted-foreground">Email Designer (2024-2025)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 heading-special text-pink-400">Photography & Visual Arts</h2>
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 space-y-4 transition-transform duration-300 hover:scale-105">
            <div>
              <h3 className="text-lg font-semibold">Portrait & Nature Photography (Self Projects)</h3>
              <p className="text-muted-foreground">Photographer & Photography Consultant (2019-2025)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Event & Creative Shoots (Self Projects)</h3>
              <p className="text-muted-foreground">Photographer & Creative Director (2020-2025)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Photo Retouching (Adobe Lightroom, Photoshop & Canva)</h3>
              <p className="text-muted-foreground">Photo Editor & Retouching Consultant (2021-2025)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 heading-special text-purple-400">IT Technician Work</h2>
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 space-y-4 transition-transform duration-300 hover:scale-105">
            <div>
              <h3 className="text-lg font-semibold">IT System Troubleshooting (Wetland Transport Solutions)</h3>
              <p className="text-muted-foreground">Lead Technical Support (2021-2024)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Hardware & Software Maintenance (Wetland Transport Solutions)</h3>
              <p className="text-muted-foreground">Lead IT Technician (2021-2024)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                PC Building & Hardware Optimization (Wetland Transport Solutions)
              </h3>
              <p className="text-muted-foreground">System Builder & Optimization Expert (2021-2024)</p>
            </div>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  )
}

