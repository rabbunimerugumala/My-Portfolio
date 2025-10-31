// ✅ Generated following IndiBuddy project rules
import React from "react";

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  return (
    <span
      className={`inline-block px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-indigo-50 text-purple-800 border border-purple-200 shadow hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 dark:text-purple-300 dark:border-purple-700 dark:hover:from-purple-900/30 dark:hover:to-indigo-900/30 ${className}`}
    >
      {name}
    </span>
  );
};

export default SkillTag;
