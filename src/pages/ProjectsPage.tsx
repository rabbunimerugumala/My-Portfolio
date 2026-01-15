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
  const [activeCategory, setActiveCategory] = useState<'All' | 'Software' | 'IoT'>('All');

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

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Software') return project.category === 'Software';
    return project.category !== 'Software'; // Groups IoT, Automation, Electronics
  });

  const categories: ('All' | 'Software' | 'IoT')[] = ['All', 'Software', 'IoT'];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              Featured Projects
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mb-8 mx-auto"></div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm transform scale-105"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                >
                  {cat === 'IoT' ? 'Hardware & IoT' : cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <div className="glass-panel inline-block p-8 rounded-2xl">
              <p className="text-red-500 font-medium mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
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
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
