import { useContent } from "@/hooks/useContent";

export default function Ticker() {
  const { content } = useContent();

  if (!content) return null;

  const text = content.ticker.text;
  const repeatedText = text.repeat(20);

  return (
    <div className="w-full overflow-visible bg-white py-[81px] pb-[75px] lg:py-8 relative mt-0 md:mt-12 lg:mt-0 mb-[30px]">
      <div className="rotate-[-2deg] transform origin-center">
        <div className="flex whitespace-nowrap animate-ticker">
          <div className="font-inter text-lg font-medium text-black flex items-center gap-4 mb-[29px]">
            {repeatedText}
          </div>
          <div className="font-inter text-lg font-medium text-black flex items-center gap-4">
            {repeatedText}
          </div>
        </div>
      </div>
    </div>
  );
}
