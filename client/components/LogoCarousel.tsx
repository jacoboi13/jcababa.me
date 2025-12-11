import { useContent } from "@/hooks/useContent";

export default function LogoCarousel() {
  const { content } = useContent();

  if (!content) return null;

  return (
    <section className="w-full bg-white shadow-sm py-8 md:py-10 lg:py-12">
      <div className="overflow-hidden">
        <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap min-h-[60px] items-center">
          {/* First set of logos */}
          {content.logoCarousel.logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="inline-flex items-center justify-center mx-6 md:mx-12 lg:mx-16 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain h-[36px] md:h-[40px] lg:h-[44px]"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {content.logoCarousel.logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="inline-flex items-center justify-center mx-6 md:mx-12 lg:mx-16 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain h-[36px] md:h-[40px] lg:h-[44px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
