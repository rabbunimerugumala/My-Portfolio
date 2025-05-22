import React from "react";

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-md text-sm font-semibold text-white
        filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] ${className}`}
      style={{
        backgroundColor: "transparent",
        textShadow: "0 0 8px rgba(11, 22, 234, 0.94), 0 0 15px rgba(223, 13, 13, 0.5)",
      }}
    >
      {name}
    </span>
  );
};

export default SkillTag;
