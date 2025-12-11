import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

export default function HeroSection() {
  const { content } = useContent();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!content) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-0 pb-8 md:pb-20 lg:pb-20 -mb-px lg:mb-0">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mt-9">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-5 lg:gap-8">
          {/* Heading */}
          <h1 className="font-poppins text-3xl sm:text-5xl lg:text-[58px] leading-tight italic font-black -mb-[3px]">
            <span className="font-medium text-black not-italic">{content.hero.heading.part1}</span>
            <span className="font-bold text-[#4D576C] not-italic">{content.hero.heading.name}</span>
            <span className="font-medium text-black not-italic">{content.hero.heading.part2}</span>
            <br />
            <span className="font-black text-black">{content.hero.heading.title}</span>
          </h1>

          {/* Subheading */}
          <p className="font-inter text-base sm:text-xl text-[#4D576C] max-w-[612px] -mt-px">
            <span className="font-medium text-[14px] sm:text-base">
              {content.hero.subheading.intro}
            </span>
            <span className="font-bold text-[14px] sm:text-base">{content.hero.subheading.emphasis}</span>
            <span className="font-medium text-[14px] sm:text-base">{content.hero.subheading.conclusion}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[10px] sm:gap-4">
            <a
              href={content.hero.buttons.primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[80%] sm:w-auto"
            >
              <Button
                variant="filled"
                className="rounded-full px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-bold text-sm md:text-base lg:text-lg h-auto w-full sm:w-auto"
              >
                {content.hero.buttons.primary}
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={() => scrollToSection('stats')}
              className="rounded-full px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-medium text-sm md:text-base lg:text-lg h-auto border-2 border-[#D7D7D7] w-[80%] sm:w-auto transition-colors"
            >
              {content.hero.buttons.secondary}
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-4">
            <p className="font-inter text-sm text-[#4D576C] font-medium">
              {content.hero.trustBadge}
            </p>
            <div className="flex items-center -space-x-2">
              {content.hero.brandPersonas.map((persona, index) => (
                <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={persona.src}
                    alt={persona.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full lg:w-auto relative h-[380px] md:h-[450px] lg:h-[596px] flex items-center justify-center">
          {/* Gradient Background - doesn't scale on hover */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[400px] h-[400px] lg:w-[528px] lg:h-[528px] rounded-full opacity-50 blur-[100px]"
              style={{
                background: `linear-gradient(90deg, ${content.hero.gradient?.colorLeft || '#00C2FF'} 0%, ${content.hero.gradient?.colorRight || '#FF00E5'} 100%)`,
              }}
            />
          </div>

          {/* Hero Image - scales on hover */}
          <img
            src={content.hero.imageSrc}
            alt={content.hero.imageAlt}
            className="relative z-10 w-full max-w-[500px] lg:max-w-[622px] h-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
