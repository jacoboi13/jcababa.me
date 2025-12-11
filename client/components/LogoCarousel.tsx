import { useContent } from "@/hooks/useContent"

export default function LogoCarousel() {
  const { content } = useContent()

  if (!content) return null

  const tripleLogos = [...content.logoCarousel.logos, ...content.logoCarousel.logos, ...content.logoCarousel.logos]

  return (
    <section className="w-full bg-white shadow-sm py-8 md:py-10 lg:py-12">
      <div className="relative overflow-hidden">
        <div className="flex animate-carousel-mobile md:animate-carousel-tablet lg:animate-carousel-desktop gap-6 md:gap-12 lg:gap-16 w-fit">
          {tripleLogos.map((logo, index) => (
            <div key={index} className="inline-flex items-center justify-center flex-shrink-0">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="object-contain h-[36px] md:h-[40px] lg:h-[44px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
