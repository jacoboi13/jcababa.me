import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

export default function ProjectCardsWithCTA() {
  const { content } = useContent();

  if (!content) return null;

  const cards = content.projects.cards.map((card, index) => ({
    id: index + 1,
    title: card.title,
    description: card.description,
    bgImage: card.bgImage,
    link: card.link,
  }));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full relative overflow-visible pt-0 lg:pt-10 pb-16 md:pb-20 lg:pb-24">
      {/* Mobile/Tablet: Horizontal Scroll */}
      <div className="lg:hidden relative overflow-visible">
        {/* Scroll Me Indicator */}
        <div className="absolute top-0 right-6 z-20 animate-bounce">
          <div className="bg-black text-white text-xs font-inter font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {content.projects.scrollIndicator}
          </div>
        </div>

        <div className="max-w-7xl mx-auto pl-6 pt-4 pb-4 overflow-visible">
          <div
            className="flex overflow-x-auto gap-4 pr-6 pb-3 snap-x snap-mandatory custom-scrollbar overflow-y-visible"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {cards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[280px] md:w-[340px] snap-start">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="relative overflow-hidden rounded-2xl border border-gray-200 h-[390px] md:h-[430px] cursor-pointer group">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.bgImage})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute top-6 left-6 z-10">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2F4b852e468fea4ea2b070215e4b4ff5db%2Fe8433efd19c0435b8fb0e27c5fc96731?format=webp&width=48"
                          alt={content.projects.iconAlt}
                          className="w-7 h-7"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="font-poppins text-xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="font-inter text-sm text-white/90">
                        {card.description}
                      </p>
                    </div>
                  </Card>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 lg:px-8 overflow-visible">
        <div className="grid grid-cols-3 gap-8 overflow-visible">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="relative overflow-visible rounded-2xl border border-gray-200 min-h-[490px] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4b852e468fea4ea2b070215e4b4ff5db%2Fe8433efd19c0435b8fb0e27c5fc96731?format=webp&width=48"
                      alt={content.projects.iconAlt}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="font-poppins text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="font-inter text-sm text-white/90">
                    {card.description}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative mt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 pt-3 md:pt-4 lg:pt-5 pb-0">
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
            onClick={() => scrollToSection("hero")}
            className="rounded-full px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-medium text-sm md:text-base lg:text-lg h-auto border-2 border-[#D7D7D7] w-[80%] sm:w-auto transition-colors"
          >
            {content.cta.buttons.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
