import { Card } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";

export default function ProjectCards() {
  const { content } = useContent();

  if (!content) return null;

  const cards = content.projects.cards.map((card, index) => ({
    id: index + 1,
    title: card.title,
    description: card.description,
    bgImage: card.bgImage,
    link: card.link,
  }));

  return (
    <section className="w-full -mt-px mb-0 pt-0 lg:pt-10 pb-0 lg:pb-[19px]">
      {/* Mobile/Tablet: Horizontal Scroll */}
      <div className="lg:hidden relative">
        {/* Scroll Me Indicator */}
        <div className="absolute top-0 right-6 z-20 animate-bounce">
          <div className="bg-black text-white text-xs font-inter font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {content.projects.scrollIndicator}
          </div>
        </div>

        <div className="max-w-7xl mx-auto pl-6 pt-4 pb-4 -mb-px lg:mb-0">
          <div
            className="flex overflow-x-auto gap-4 pr-6 pb-3 snap-x snap-mandatory custom-scrollbar overflow-y-visible"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {cards.map((card, index) => (
              <div key={card.id} className={`flex-shrink-0 w-[280px] md:w-[340px] snap-start ${index === 0 ? '' : ''}`}>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    className="relative overflow-hidden border border-gray-200 h-[380px] md:h-[420px] cursor-pointer group"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${card.bgImage})`,
                      }}
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* Figma Icon - Top Left */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2F4b852e468fea4ea2b070215e4b4ff5db%2Fe8433efd19c0435b8fb0e27c5fc96731?format=webp&width=48"
                          alt={content.projects.iconAlt}
                          className="w-7 h-7"
                        />
                      </div>
                    </div>

                    {/* Text Content - Always visible on mobile/tablet */}
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

      {/* Desktop: Grid Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="relative overflow-hidden border border-gray-200 min-h-[480px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${card.bgImage})`,
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Figma Icon - Top Left */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4b852e468fea4ea2b070215e4b4ff5db%2Fe8433efd19c0435b8fb0e27c5fc96731?format=webp&width=48"
                      alt={content.projects.iconAlt}
                      className="w-7 h-7"
                    />
                  </div>
                </div>

                {/* Text Content - Hidden by default, shows on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
    </section>
  );
}
