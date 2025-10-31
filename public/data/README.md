# Project Data Management

## How to Add New Projects

To add a new project to your portfolio, simply edit the `projects.json` file in this directory.

### Project Structure

Each project should have the following structure:

```json
{
  "id": "unique-project-identifier",
  "title": "Project Title",
  "description": "A brief description of what the project does and its key features.",
  "images": [
    { "url": "images/project-image-1.jpg", "alt": "Project description" },
    { "url": "images/project-image-2.jpg", "alt": "Project description" }
  ],
  "githubUrl": "https://github.com/username/repository-name",
  "githubLabel": "GitHub Repository",
  "liveUrl": "https://your-live-demo.com",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "linkNote": "Any additional note about the project",
  "category": "IoT|Automation|Web|Mobile|AI|etc",
  "featured": true
}
```

### Field Descriptions

- **id**: A unique identifier for the project (use kebab-case)
- **title**: The project name as it will appear on the card
- **description**: A detailed description of the project (2-3 sentences recommended)
- **images**: Array of image objects with url and alt text
  - Images should be placed in the `public/images/` directory
  - Use relative paths starting with "images/"
- **githubUrl**: Link to the GitHub repository (optional)
- **githubLabel**: Custom text for the GitHub link (optional, defaults to "GitHub Repository")
- **liveUrl**: Link to live demo/website (optional, set to `null` if none)
- **technologies**: Array of technology/tool names used in the project
- **linkNote**: Small note displayed below the links (e.g., "My own project", "Under Company Name")
- **category**: Project category for potential filtering
- **featured**: Whether to show this project prominently (boolean)

### Adding Images

1. Place your project images in the `public/images/` directory
2. Use descriptive filenames (e.g., `project-name-1.jpg`, `project-name-2.jpg`)
3. Reference them in the JSON using relative paths: `"images/your-image.jpg"`
4. Include multiple images for a carousel effect

### Example Addition

To add a new project, append it to the "projects" array in `projects.json`:

```json
{
  "projects": [
    ... existing projects ...,
    {
      "id": "my-new-project",
      "title": "My Amazing New Project",
      "description": "This project solves a specific problem using modern technology. It features real-time data processing and user-friendly interface.",
      "images": [
        { "url": "images/new-project-1.jpg", "alt": "Project main interface" },
        { "url": "images/new-project-2.jpg", "alt": "Project features" }
      ],
      "githubUrl": "https://github.com/myusername/my-new-project",
      "githubLabel": "View Source Code",
      "liveUrl": "https://my-project-demo.com",
      "technologies": ["React", "Node.js", "MongoDB", "Socket.io"],
      "linkNote": "Personal project",
      "category": "Web",
      "featured": true
    }
  ]
}
```

### Tips

- Keep descriptions concise but informative
- Use high-quality images (recommended: 800x800px for square aspect ratio)
- List technologies in order of importance
- Use consistent naming conventions for IDs
- Test your JSON syntax using a JSON validator before saving
