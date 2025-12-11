import React from "react";
import { Button } from "@/components/ui/button";
import SkillBar from "./SkillBar";
import { useContent } from "@/hooks/useContent";

export default function StatsSection() {
  const { content } = useContent();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!content) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-0 pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 mt-8 md:mt-12 lg:mt-0">
      {/* Hero Image - Shows first on mobile, left column on desktop */}
      <div className="flex-1 w-full lg:w-auto relative h-[400px] md:h-[565px] lg:h-[753px] flex items-center justify-center lg:hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[400px] h-[400px] lg:w-[528px] lg:h-[528px] rounded-full opacity-50 blur-[100px] pointer-events-none"
            style={{
              background: `linear-gradient(90deg, ${content.stats.gradient?.colorLeft || '#00C2FF'} 0%, ${content.stats.gradient?.colorRight || '#FF00E5'} 100%)`,
            }}
          />
        </div>

        {/* Hero Image */}
        <img
          src={content.stats.imageSrc}
          alt={content.stats.imageAlt}
          className="relative z-10 w-full max-w-[500px] lg:max-w-[622px] h-auto object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-[25px]">
        {/* Left Column - Hero Image (Desktop only) */}
        <div className="hidden lg:flex flex-1 w-full lg:w-auto relative h-[400px] md:h-[500px] lg:h-[753px] items-center justify-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[400px] h-[400px] lg:w-[528px] lg:h-[528px] rounded-full opacity-50 blur-[100px]"
              style={{
                background: `linear-gradient(90deg, ${content.stats.gradient?.colorLeft || '#00C2FF'} 0%, ${content.stats.gradient?.colorRight || '#FF00E5'} 100%)`,
              }}
            />
          </div>

          {/* Hero Image */}
          <img
            src={content.stats.imageSrc}
            alt={content.stats.imageAlt}
            className="relative z-10 w-full max-w-[500px] lg:max-w-[622px] h-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Column - Stats & Skills */}
        <div className="flex-1 flex flex-col gap-[15px]">
          {/* Stats Cards */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6 lg:p-6 flex items-center justify-around transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            {content.stats.metrics.map((metric, index) => (
              <React.Fragment key={metric.label}>
                {index > 0 && <div className="w-px h-10 md:h-12 bg-gray-200 flex-shrink-0" />}
                <div className="text-center flex-shrink-0">
                  <div className="font-poppins text-2xl md:text-4xl lg:text-4xl font-black">{metric.value}</div>
                  <div className="font-inter text-xs md:text-sm text-[#4D576C] whitespace-nowrap">{metric.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-[30px] py-4 md:p-6 lg:px-8 lg:pr-[51px] lg:py-8 flex flex-col gap-2 md:gap-[6px] -mt-[5px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            {content.stats.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          {/* Awards Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-[40px] py-5 md:p-6 lg:p-8 flex items-center gap-3 md:gap-4 lg:gap-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4b852e468fea4ea2b070215e4b4ff5db%2Fa6ccf5729f314bf9b2e21b1171250226?format=webp&width=100"
              alt={content.stats.awards.imageAlt}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="font-inter text-xs md:text-sm text-[#4D576C]">{content.stats.awards.organization}</div>
              <div className="font-poppins text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">{content.stats.awards.title}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[10px] sm:gap-4">
            <a
              href={content.stats.buttons.primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[80%] sm:w-auto"
            >
              <Button
                variant="filled"
                className="rounded-full px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-bold text-sm md:text-base lg:text-lg h-auto w-full sm:w-auto"
              >
                {content.stats.buttons.primary}
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="rounded-full px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-medium text-sm md:text-base lg:text-lg h-auto border-2 border-[#D7D7D7] w-[80%] sm:w-auto transition-colors"
            >
              {content.stats.buttons.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
