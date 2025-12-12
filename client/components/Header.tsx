import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { content } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!content) return null;

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[90px] flex items-center justify-between bg-transparent">
        <div className="flex items-center gap-1.5">
          <img
            src={content.header.logoSrc}
            alt={content.header.logoAlt}
            className="w-[54px] h-[54px]"
          />
          <div className="font-poppins text-[19px]">
            <span className="font-semibold">{content.header.brandName.bold}</span>
            <span className="font-normal">{content.header.brandName.normal}</span>
          </div>
        </div>

        <a
          href={content.header.ctaButtonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="blued"
            className="rounded-2xl px-6 py-2 md:px-8 md:py-2.5 lg:px-10 lg:py-3 font-inter font-semibold text-sm md:text-base lg:text-lg h-auto"
          >
            {content.header.ctaButton}
          </Button>
        </a>
      </div>
    </header>
  );
}
