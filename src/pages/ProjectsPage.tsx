// ✅ Generated following IndiBuddy project rules

import { useState, useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../types/project";
import { getAllProjects } from "../lib/projectData";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectData = await getAllProjects();
        setProjects(projectData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load projects"
        );
        console.error("Error loading projects:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Projects
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded mb-12 mx-auto"></div>
        </AnimatedSection>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-gray-600 dark:text-gray-400">
              Loading projects...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <div className="text-red-500 dark:text-red-400 mb-4">
              <p className="text-lg font-semibold">Failed to load projects</p>
              <p className="text-sm">{error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={200 + index * 100}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  images={project.images}
                  githubUrl={project.githubUrl}
                  githubLabel={project.githubLabel}
                  liveUrl={project.liveUrl || undefined}
                  technologies={project.technologies}
                  linkNote={project.linkNote}
                />
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
