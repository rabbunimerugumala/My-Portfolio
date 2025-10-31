// ✅ Generated following IndiBuddy project rules

/**
 * Project image interface for carousel functionality
 */
export interface ProjectImage {
  url: string;
  alt: string;
}

/**
 * Main project data structure
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
  githubUrl?: string;
  githubLabel?: string;
  liveUrl?: string | null;
  technologies: string[];
  linkNote?: string;
  category: string;
  featured: boolean;
}

/**
 * Project data container from JSON
 */
export interface ProjectsData {
  projects: Project[];
}

/**
 * Props for ProjectCard component
 */
export interface ProjectCardProps {
  title: string;
  description: string;
  images: ProjectImage[];
  githubUrl?: string;
  githubLabel?: string;
  liveUrl?: string;
  technologies: string[];
  linkNote?: string;
}
