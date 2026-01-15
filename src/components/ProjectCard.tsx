// ✅ Generated following IndiBuddy project rules

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { ProjectCardProps } from "../types/project";

const ProjectCard = ({
  title,
  description,
  images,
  githubUrl,
  githubLabel,
  liveUrl,
  technologies,

}: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (images.length > 1 && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 2000); // 2 seconds interval
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, isHovered]);

  // Handle mouse hover to pause auto-scroll
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="glass-habit glass-habit-hover group h-full flex flex-col rounded-xl overflow-hidden border border-white/5 transition-all duration-300 transform hover:-translate-y-1">
      {/* Image carousel - Square aspect ratio */}
      <div
        className="relative aspect-video overflow-hidden bg-[#0d0c22]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${currentImage === index ? "bg-white" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold mb-1 text-white line-clamp-2 sm:line-clamp-1 min-h-[1.75rem] group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-2 sm:mb-4 line-clamp-2 text-sm leading-relaxed h-[3rem] overflow-hidden">
          {description}
        </p>

        {/* Tech stack */}
        <div className="mb-1 min-h-[2rem] overflow-hidden">
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}

          </div>
        </div>

        {/* Links */}
        <div className="flex flex-row justify-between mt-1 pt-3 border-t border-white/5">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
              aria-label="GitHub repository"
            >
              <Github size={16} className="mr-2 group-hover/link:text-white transition-colors" />
              <span className="truncate">
                {githubLabel || "GitHub"}
              </span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/live"
              aria-label="Live preview"
            >
              <ExternalLink size={16} className="mr-2 group-hover/live:scale-110 transition-transform" />
              <span>Live Demo</span>
            </a>
          )}
        </div>


      </div>
    </div>
  );
};

export default ProjectCard;
