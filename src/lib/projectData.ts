// ✅ Generated following IndiBuddy project rules

import { ProjectsData, Project } from '../types/project';

/**
 * Load project data from JSON file
 * @returns Promise with project data
 */
export const loadProjectData = async (): Promise<ProjectsData> => {
  try {
    const response = await fetch('/data/projects.json');
    if (!response.ok) {
      throw new Error(`Failed to load project data: ${response.statusText}`);
    }
    const data: ProjectsData = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading project data:', error);
    // Fallback empty data
    return { projects: [] };
  }
};

/**
 * Get all projects
 * @returns Promise with array of projects
 */
export const getAllProjects = async (): Promise<Project[]> => {
  const data = await loadProjectData();
  return data.projects;
};

/**
 * Get featured projects only
 * @returns Promise with array of featured projects
 */
export const getFeaturedProjects = async (): Promise<Project[]> => {
  const data = await loadProjectData();
  return data.projects.filter(project => project.featured);
};

/**
 * Get projects by category
 * @param category - Category to filter by
 * @returns Promise with array of projects in the category
 */
export const getProjectsByCategory = async (category: string): Promise<Project[]> => {
  const data = await loadProjectData();
  return data.projects.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Get project by ID
 * @param id - Project ID
 * @returns Promise with project or undefined if not found
 */
export const getProjectById = async (id: string): Promise<Project | undefined> => {
  const data = await loadProjectData();
  return data.projects.find(project => project.id === id);
};
