import Link from "next/link"
import { Mail, Phone, Calendar, MapPin, Facebook, Instagram, TwitterIcon as BrandTwitter } from "lucide-react"
import { ResponsiveImage } from "./components/responsive-image"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="flex flex-col">
          {/* Info Card with Profile Image - Now with sticky positioning */}
          <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 sticky top-28">
            {/* Profile Image - Optimized with fetchpriority="high" for LCP improvement */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-8 border-4 border-purple-500/20">
              <ResponsiveImage
                src="/jc.avif"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover"
                priority
                sizes="160px"
                quality={90}
                fetchpriority="high"
              />
            </div>

            {/* Name and Title with more spacing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Johncarlo Ababa</h1>
                <div className="ml-1 flex-shrink-0 relative group">
                  <svg
                    className="w-5 h-5 drop-shadow-[0_0_3px_rgba(29,161,242,0.5)] transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#1DA1F2"
                      d="M512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4C4.3 302.5 0 285.9 0 268c0-19 4.8-36.5 14.3-52.3 9.5-15.8 22.3-27.5 38.3-35.1-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1 18.3-19 40.2-28.6 65.7-28.6 11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7C221.6 5.1 238.1 0 256 0c17.9 0 34.4 5.1 49.4 15.1 15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6 18.1 19.1 27.1 42.1 27.1 69.1 0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1C507.2 231.5 512 249 512 268zm-266.9 77.1l105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"
                    />
                  </svg>

                  {/* Tooltip that appears on hover */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    <div className="bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 text-xs rounded-lg py-2 px-3 shadow-lg border border-gray-200 dark:border-zinc-700">
                      <div className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>This account has been verified using data from Vercel and OnlineJobs.ph</span>
                      </div>
                      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-white dark:bg-zinc-800 rotate-45 border-b border-r border-gray-200 dark:border-zinc-700"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-sm inline-block transition-transform duration-100 hover:scale-110 drop-shadow-[0_2px_8px_rgba(236,72,153,0.5)] hover:drop-shadow-[0_4px_12px_rgba(168,85,247,0.5)]">
                <span className="text-black font-medium">Graphic Designer | IT Technician</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 flex-grow">
              <Link href="mailto:itsmejesse@jcababa.me" className="flex items-center gap-4 group">
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-200 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-200" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">EMAIL</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-200">
                    itsmejesse@jcababa.me
                  </span>
                </div>
              </Link>

              <Link href="https://wa.me/639955264668" className="flex items-center gap-4 group">
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-150 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">PHONE</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-100">
                    +63 995 526 4668
                  </span>
                </div>
              </Link>

              <Link
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Johncarlo's+Birthday&dates=20241118/20241119&recur=RRULE:FREQ=YEARLY"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-150 group-hover:scale-110">
                  <Calendar className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">BIRTHDATE</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-100">
                    November 18, 2002
                  </span>
                </div>
              </Link>

              <Link
                href="https://maps.google.com/?q=Bohol,Philippines"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-150 group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">LOCATION</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-100">
                    Bohol, Philippines, Earth
                  </span>
                </div>
              </Link>
            </div>

            {/* Social Links - Fixed at bottom */}
            <div className="flex gap-5 justify-center pt-6 border-t border-zinc-800 mt-8">
              <Link
                href="https://www.facebook.com/firemax13"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
              >
                <Facebook
                  className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="https://www.instagram.com/jacoboi13/"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <Instagram
                  className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="https://t.me/itsmejesseme"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Profile"
              >
                <svg
                  className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
              <Link href="#" className="group" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                <BrandTwitter
                  className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* About and Skills Section */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-purple-400 heading-special">About Me</h2>
            <div className="bg-white dark:bg-zinc-900/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm a multi-disciplinary tech and creative professional based in the Philippines, seamlessly blending IT
                expertise with a passion for visual storytelling. With over 3 years of experience in custom kernel and
                ROM development for Samsung devices, I transform complex technical challenges into streamlined,
                automated solutions.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Beyond technology, I excel in graphic design and photography, crafting compelling visuals that tell
                unique stories. As a certified virtual assistant, I also provide comprehensive support that enhances
                productivity and creativity.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Let's connect to bring your ideas to life through innovative tech solutions and captivating design.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-pink-400 heading-special">What I'm Doing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Data Scraping</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Professional social media data extraction</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Photographer</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Capturing high-quality photos across various categories at a professional level
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M15.5 15.5L5 5M7.036 7.036l.707-.707a4 4 0 0 1 5.657 0l4.243 4.243a4 4 0 0 1 0 5.657l-.707.707M12 12l4.5 4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Graphic Designing</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Delivering innovative and professional designs that make a lasting impression
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Virtual Assistant</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Providing support for a wide range of tasks</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Vibe Coding</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Translating creative ideas into functional code through AI-driven development and intuitive design
                  thinking
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Automation</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Transforming repetitive workflows into seamless, efficient processes that unlock human potential
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
