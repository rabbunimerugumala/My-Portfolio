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
  linkNote, // ✅ Receive linkNote here
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
    <div className="group h-full flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:shadow-gray-900/20">
      {/* Image carousel - Square aspect ratio */}
      <div
        className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900"
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
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
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
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 sm:line-clamp-1 min-h-[3.5rem] sm:min-h-[1.75rem]">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 sm:line-clamp-2 text-sm leading-relaxed h-[3.8rem] sm:h-[2.5rem] overflow-hidden">
          {description}
        </p>

        {/* Tech stack */}
        <div className="mb-4 h-[3rem] overflow-hidden">
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                +{technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={16} className="mr-2" />
              <span className="truncate">
                {githubLabel || "GitHub Repository"}
              </span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="Live preview"
            >
              <ExternalLink size={16} className="mr-2" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* ✅ Custom Note Text Below Links */}
        {linkNote && (
          <p className="mt-2 text-xs italic text-gray-500 dark:text-gray-400 text-center min-h-[1rem]">
            {linkNote}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
