import { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface ProjectImage {
  url: string;
  alt: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  images: ProjectImage[];
  githubUrl?: string;
  githubLabel?: string;
  liveUrl?: string;
  technologies: string[];
  linkNote?: string; // ✅ Custom text below links like "My own project" etc.
}

const ProjectCard = ({
  title,
  description,
  images,
  githubUrl,
  githubLabel,
  liveUrl,
  technologies,
  linkNote // ✅ Receive linkNote here
}: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:shadow-gray-900/20">
      {/* Image carousel */}
      <div className="relative aspect-video overflow-hidden">
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
                  className={`w-1.5 h-1.5 rounded-full ${
                    currentImage === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={16} className="mr-1" />
              <span>{githubLabel || 'GitHub Repository'}</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="Live preview"
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Live</span>
            </a>
          )}
        </div>

        {/* ✅ Custom Note Text Below Links */}
        {linkNote && (
          <p className="mt-3 text-xs italic text-gray-500 dark:text-gray-400 text-center">
             {linkNote}
          </p>
        )}
      </div>
    </div>
  );
};


export default ProjectCard;
