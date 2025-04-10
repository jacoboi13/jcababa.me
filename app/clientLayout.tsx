"use client"

import type React from "react"
import { Poppins, Oswald, Azeret_Mono } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeToggle } from "./components/theme-toggle"
import { ThemeProvider } from "./components/theme-provider"
import { PageTransition } from "./components/page-transition"
import { NavLink } from "./components/nav-link"
import { PreventRightClick } from "./components/prevent-right-click"
import { SocialIcon } from "./components/social-icon"
import { ResponsiveImage } from "./components/responsive-image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import ImageOptimizer from "./components/image-optimizer"
import PerformanceOptimization from "./components/performance-optimization"
import CssOptimizer from "./components/css-optimizer"
import { VercelAnalytics } from "./components/analytics"

// Font for the logo
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-oswald",
})

// Main font for content
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

// Logo
const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["300"], // Adjust weight as needed
  style: ["italic"],
  display: "swap",
  variable: "--font-azeret-mono",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${poppins.variable} ${azeretMono.variable} font-sans min-h-screen flex flex-col select-none`}
      >
        <ThemeProvider>
          <PreventRightClick />
          <ImageOptimizer />
          <PerformanceOptimization />
          <CssOptimizer />
          <header className="sticky top-0 z-50 py-3 md:py-6 px-4 md:px-6 bg-background/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <Link
                href="/"
                className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_4px_8px_rgba(236,72,153,0.5)]"
              >
                <ResponsiveImage
                  src="/ZLogo.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                  priority
                  sizes="(max-width: 768px) 40px, 60px"
                  quality={90}
                />
              </Link>

              {/* Mobile Navigation */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <button className="p-2 hover:bg-accent rounded-lg">
                    <Menu className="w-5 h-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/65 backdrop-blur-sm">
                  <nav className="flex flex-col space-y-4 mt-6">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/resume">Resume</NavLink>
                    <NavLink href="/portfolio">Portfolio</NavLink>
                    <div className="mt-2">
                      <ThemeToggle />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 items-center">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/resume">Resume</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <ThemeToggle />
              </nav>
            </div>
          </header>

          <PageTransition>
            <main className="flex-1 bg-background">{children}</main>
          </PageTransition>

          <footer className="py-6 px-4 md:px-6 bg-background">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <p className="text-purple dark:text-pink mb-4 md:mb-0">
                © 2025 by <span className="font-oswald italic">SnowRainX</span>
              </p>
              <div className="flex space-x-6">
                {/* Social Icons */}
                <SocialIcon
                  href="https://www.facebook.com/firemax13"
                  label="Facebook"
                  aria-label="Visit my Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-black dark:text-white group-hover:text-pink-500 transition-all duration-50 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SocialIcon>
                <SocialIcon
                  href="https://www.instagram.com/jacoboi13/"
                  label="Instagram"
                  aria-label="Visit my Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-black dark:text-white group-hover:text-pink-500 transition-all duration-50 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    loading="lazy"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SocialIcon>
                <SocialIcon
                  href="https://t.me/itsmejesseme"
                  label="Telegram"
                  aria-label="Message me tru Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-black dark:text-white group-hover:text-pink-500 transition-all duration-50 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    loading="lazy"
                    width="24"
                    height="24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </SocialIcon>
                <SocialIcon
                  href="https://wa.me/639955264668"
                  label="WhatsApp"
                  aria-label="Message me tru WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-black dark:text-white group-hover:text-pink-500 transition-all duration-50 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    loading="lazy"
                    width="24"
                    height="24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </SocialIcon>
                <SocialIcon
                  href="https://www.onlinejobs.ph/jobseekers/info/3775723"
                  label="Online Jobs PH"
                  aria-label="Visit my Online Jobs PH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="font-bold text-sm px-2 py-1 border border-black dark:border-white text-black dark:text-white group-hover:text-pink-500 group-hover:border-pink-500 transition-all duration-50 rounded-md group-hover:scale-110"
                    loading="lazy"
                  >
                    OJ.ph
                  </span>
                </SocialIcon>
              </div>
            </div>
          </footer>
          <VercelAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
