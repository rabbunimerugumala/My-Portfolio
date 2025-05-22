interface SkillTagProps {
  name: string;
}

const SkillTag = ({ name }: SkillTagProps) => {
  return (
    <div className="relative group">
      <div className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium text-sm transition-all duration-300 hover:shadow-md hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
        {name}
      </div>
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
    </div>
  );
};

export default SkillTag;