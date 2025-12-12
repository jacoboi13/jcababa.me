import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

export default function CTASection() {
  const { content } = useContent();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!content) return null;

  return (
    <section className="w-full bg-white -mt-[3px] relative overflow-hidden pt-10 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[10px] sm:gap-3 py-6 md:py-8 lg:py-10">
          <a
            href={content.cta.buttons.primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80%] sm:w-auto"
          >
            <Button
              variant="filled"
              className="rounded-full px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-bold text-sm md:text-base lg:text-lg h-auto w-full sm:w-auto"
            >
              {content.cta.buttons.primary}
            </Button>
          </a>
          <Button
            variant="outline"
            onClick={() => scrollToSection('hero')}
            className="rounded-full px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-medium text-sm md:text-base lg:text-lg h-auto border-2 border-[#D7D7D7] w-[80%] sm:w-auto transition-colors"
          >
            {content.cta.buttons.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
