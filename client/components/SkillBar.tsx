interface SkillBarProps {
  skill: string;
  percentage: number;
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
      <span className="font-inter text-xs md:text-sm lg:text-base font-medium text-black min-w-[70px] md:min-w-[85px] lg:min-w-[100px]">
        {skill}
      </span>
      <div className="flex-1 h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
