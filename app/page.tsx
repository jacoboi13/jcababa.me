"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, MessageCircle } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { InteractiveHoverButton } from "@/components/interactive-hover-button"
import { FrostedCard } from "@/components/frosted-card"
import Prism from "@/components/prism"
import ProfileCard from "@/components/profile-card"
import RotatingText from "@/components/rotating-text"
import { AwardBadge } from "@/components/ui/award-badge"

export default function PortfolioPage() {
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const [currentSection, setCurrentSection] = useState(0)
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isTransitioningRef = useRef(false)
  const rotatingTextContainerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (index: number) => {
    setCurrentSection(index)
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  const changeBrand = (index: number) => {
    if (isTransitioningRef.current || index === currentBrandIndex) return

    isTransitioningRef.current = true
    setIsVisible(false)

    setTimeout(() => {
      setCurrentBrandIndex(index)
      setIsVisible(true)
      isTransitioningRef.current = false

      // Restart the interval after manual change
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        if (isTransitioningRef.current) return

        isTransitioningRef.current = true
        setIsVisible(false)

        setTimeout(() => {
          setCurrentBrandIndex((prev) => (prev + 1) % brandLogos.length)
          setIsVisible(true)
          isTransitioningRef.current = false
        }, 100)
      }, 4000)
    }, 100)
  }

  const textPrimary = "text-white"
  const textSecondary = "text-gray-200"
  const textTertiary = "text-gray-100"
  const borderColor = "border-gray-400"
  const borderColorAlt = "border-gray-500"

  const brandLogos = [
    { name: "Brand 1", logo: "/brand-logo-1.png" },
    { name: "Brand 2", logo: "/brand-logo-2.png" },
    { name: "Brand 3", logo: "/brand-logo-3.png" },
    { name: "Brand 4", logo: "/brand-logo-4.png" },
    { name: "Brand 5", logo: "/brand-logo-5.png" },
    { name: "Brand 6", logo: "/brand-logo-6.png" },
    { name: "Brand 7", logo: "/brand-logo-7.png" },
    { name: "Brand 8", logo: "/brand-logo-8.png" },
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Section is active when 50% visible
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setCurrentSection(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = brandLogos.map((brand) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = brand.logo
          img.onload = resolve
          img.onerror = resolve // Resolve even on error to not block the carousel
        })
      })

      await Promise.all(imagePromises)
      setImagesLoaded(true)
    }

    preloadImages()
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return

    const startCarousel = () => {
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      intervalRef.current = setInterval(() => {
        // Prevent overlapping transitions
        if (isTransitioningRef.current) return

        isTransitioningRef.current = true
        setIsVisible(false)

        setTimeout(() => {
          setCurrentBrandIndex((prev) => (prev + 1) % brandLogos.length)
          setIsVisible(true)
          isTransitioningRef.current = false
        }, 100)
      }, 4000) // 4 seconds: 100ms fade out + 1000ms fade in + 2900ms display time
    }

    startCarousel()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [imagesLoaded])

  const handleProfileContact = () => {
    window.location.href = "mailto:jcababa.sn0w@gmail.com"
  }

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory select-none relative">
      <div className="fixed inset-0 z-0">
        <Prism
          height={3.5}
          baseWidth={5.5}
          animationType="rotate"
          glow={1}
          offset={{ x: 0, y: 0 }}
          noise={0.5}
          transparent={true}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          hoverStrength={2}
          inertia={0.05}
          bloom={1}
          suspendWhenOffscreen={false}
          timeScale={0.5}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <NavBar activeSection={currentSection} onNavigate={scrollToSection} />

      {/* Hero Section */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current[0] = el
        }}
        className="min-h-screen relative overflow-hidden snap-start"
      >
        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-36 pb-16 sm:pb-20 md:pb-24">
          <div className="flex flex-col lg:flex-row items-start justify-center w-full max-w-[1200px] mx-auto gap-8 md:gap-10">
            <div className="w-full lg:w-auto lg:flex-shrink-0 flex flex-col items-center gap-6 md:gap-8">
              <ProfileCard
                name="Johncarlo Ababa"
                title="Email Graphics Designer"
                handle="jcababa"
                status="Available for Work"
                contactText="Contact Me"
                avatarUrl="/images/design-mode/b3c173b1-aefe-472b-b012-da91305109ce-cover.png"
                miniAvatarUrl="/images/design-mode/b3c173b1-aefe-472b-b012-da91305109ce-cover.png"
                showUserInfo={true}
                enableTilt={false}
                enableMobileTilt={false}
                onContactClick={handleProfileContact}
              />
            </div>

            <div className="flex flex-col w-full lg:w-[400px] gap-6 md:gap-8 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-visible">
              {/* Social Icons and Button Card */}
              <FrostedCard className="w-full">
                {/* Social Icons */}
                <div className="flex gap-3 sm:gap-4 justify-center mb-6">
                  <a
                    href="https://www.linkedin.com/in/jcababame/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${borderColor} flex items-center justify-center hover:bg-[#a78bfa] hover:border-[#a78bfa] transition-all duration-300 hover:scale-110 group`}
                  >
                    <Linkedin
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${textSecondary} group-hover:text-white transition-colors duration-300`}
                    />
                  </a>
                  <a
                    href="https://www.onlinejobs.ph/jobseekers/info/3775723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${borderColor} flex items-center justify-center hover:bg-[#a78bfa] hover:border-[#a78bfa] transition-all duration-300 hover:scale-110 group`}
                  >
                    <span
                      className={`text-[10px] sm:text-xs font-bold ${textSecondary} group-hover:text-white transition-colors duration-300`}
                    >
                      OLJ
                    </span>
                  </a>
                  <a
                    href="https://wa.me/639397811597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${borderColor} flex items-center justify-center hover:bg-[#a78bfa] hover:border-[#a78bfa] transition-all duration-300 hover:scale-110 group`}
                  >
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${textSecondary} group-hover:text-white transition-colors duration-300`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-1.14 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.com/users/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${borderColor} flex items-center justify-center hover:bg-[#a78bfa] hover:border-[#a78bfa] transition-all duration-300 hover:scale-110 group`}
                  >
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${textSecondary} group-hover:text-white transition-colors duration-300`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 6.002 3.03a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${borderColor} flex items-center justify-center hover:bg-[#a78bfa] hover:border-[#a78bfa] transition-all duration-300 hover:scale-110 group`}
                  >
                    <MessageCircle
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${textSecondary} group-hover:text-white transition-colors duration-300`}
                    />
                  </a>
                </div>

                {/* Button */}
                <InteractiveHoverButton
                  text="View Resume and Portfolio"
                  icon="arrow"
                  variant="outline"
                  className="w-full"
                  href="https://www.jcababa.me/JC_Ababa_EmailGraphicDesigner_Resume_&_Portfolio_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </FrostedCard>

              {/* Metrics Card */}
              <FrostedCard className="w-full">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-[#a78bfa] text-2xl sm:text-3xl md:text-4xl font-bold mb-1">5+</div>
                    <div className={`${textSecondary} text-[10px] sm:text-xs whitespace-nowrap`}>Experiences</div>
                  </div>
                  <div className="flex flex-col items-center text-center border-l border-r border-gray-500 px-2">
                    <div className="text-[#a78bfa] text-2xl sm:text-3xl md:text-4xl font-bold mb-1">20+</div>
                    <div className={`${textSecondary} text-[10px] sm:text-xs whitespace-nowrap`}>Projects</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="text-[#a78bfa] text-2xl sm:text-3xl md:text-4xl font-bold mb-1">8+</div>
                    <div className={`${textSecondary} text-[10px] sm:text-xs whitespace-nowrap`}>Clients</div>
                  </div>
                </div>
              </FrostedCard>

              <FrostedCard className="w-full p-6">
                <div
                  ref={rotatingTextContainerRef}
                  className="relative flex flex-col items-center justify-center gap-2"
                >
                  <div className="flex items-center justify-center">
                    <RotatingText
                      texts={[
                        "Creative",
                        "Minimalistic",
                        "Futuristic",
                        "Modern",
                        "Professional",
                        "Innovative",
                        "Dynamic",
                        "Bold",
                        "Elegant",
                      ]}
                      mainClassName="text-lg sm:text-xl md:text-2xl font-bold text-[#a78bfa]"
                      staggerFrom="first"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-120%", opacity: 0 }}
                      staggerDuration={0.015}
                      splitLevelClassName="overflow-hidden"
                      transition={{ type: "spring", damping: 35, stiffness: 350 }}
                      rotationInterval={3000}
                      containerRef={rotatingTextContainerRef}
                    />
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Graphic Designer</span>
                </div>
              </FrostedCard>

              <div className="w-full flex items-center justify-center">
                <AwardBadge
                  type="golden-kitty"
                  customTopText="CAREER HUNT"
                  customBottomText="Email Designer Awards"
                  link="#"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current[1] = el
        }}
        className={`min-h-screen flex flex-col snap-start relative overflow-hidden pt-32 pb-16 px-4 sm:px-8 md:px-12`}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <h2 className="text-[#a78bfa] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="col-span-1 md:col-span-2">
              <FrostedCard className="p-4 sm:p-5 md:p-6">
                <h3 className={`${textPrimary} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3`}>
                  Profile
                </h3>
                <p className={`${textSecondary} leading-relaxed text-xs sm:text-sm md:text-base mb-3`}>
                  I'm a passionate Email Graphic Designer with over a year of experience creating minimalistic, clean,
                  responsive, and impactful designs for email marketing campaigns. I specialize in turning copy into
                  visuals that not only look professional but also drive engagement and conversions. I also incorporate
                  AI for image generation—helping me adjust hero images, product visuals, and creative assets quickly
                  while keeping designs polished and consistent.
                </p>
                <p className={`${textSecondary} leading-relaxed text-xs sm:text-sm md:text-base`}>
                  With a strong focus on brand identity and adaptability across industries, I ensure every campaign
                  delivers a seamless experience on all devices.
                </p>
              </FrostedCard>
            </div>
            <div>
              <FrostedCard className="p-4 sm:p-5 md:p-6">
                <h3 className={`${textPrimary} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3`}>
                  Skills
                </h3>
                <ul className="space-y-2">
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    Email Campaign Design
                  </li>
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    AI Image Generation
                  </li>
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    Graphic Design
                  </li>
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    Layout Design
                  </li>
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    Responsive Design
                  </li>
                </ul>
              </FrostedCard>
            </div>
            <div>
              <FrostedCard className="p-4 sm:p-5 md:p-6">
                <h3 className={`${textPrimary} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3`}>
                  Tools
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    Adobe Photoshop
                  </li>
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    Canva
                  </li>
                  <li className={`${textTertiary} flex items-center gap-3 text-xs sm:text-sm md:text-base`}>
                    <span className="w-2 h-2 bg-[#a78bfa] rounded-full flex-shrink-0" />
                    Figma
                  </li>
                </ul>
                <InteractiveHoverButton
                  text="View Resume and Portfolio"
                  icon="arrow"
                  variant="outline"
                  className="w-full"
                  href="https://www.jcababa.me/JC_Ababa_EmailGraphicDesigner_Resume_&_Portfolio_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </FrostedCard>
            </div>
          </div>
        </div>

        <div className={`w-full py-6 md:py-8 mt-auto`}>
          <FrostedCard className="max-w-[900px] mx-auto p-4 sm:p-5 md:p-6">
            <h3
              className={`${textPrimary} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4 md:mb-6`}
            >
              Worked with these brands
            </h3>
            <div className="relative h-[70px] md:h-[80px] flex items-center justify-center">
              <div
                className={`flex items-center justify-center transition-opacity ${
                  isVisible ? "duration-1000 opacity-100" : "duration-100 opacity-0"
                }`}
              >
                <img
                  src={brandLogos[currentBrandIndex].logo || "/placeholder.svg"}
                  alt={brandLogos[currentBrandIndex].name}
                  className="w-[180px] h-[60px] md:w-[220px] md:h-[70px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<span class="${textSecondary} text-xl md:text-2xl font-bold">${brandLogos[currentBrandIndex].name}</span>`
                    }
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {brandLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeBrand(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentBrandIndex ? "bg-[#a78bfa] w-6" : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to ${brandLogos[index].name}`}
                />
              ))}
            </div>
          </FrostedCard>
        </div>
      </section>
    </div>
  )
}
