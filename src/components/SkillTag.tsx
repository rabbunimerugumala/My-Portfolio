// ✅ Generated following IndiBuddy project rules
import React from "react";

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  return (
    <span
      className={`inline-block px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-violet-300 border border-violet-500/30 shadow hover:shadow-xl bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400/50 ${className}`}
    >
      {name}
    </span>
  );
};

export default SkillTag;
