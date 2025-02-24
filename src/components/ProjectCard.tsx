// ProjectCard.tsx
// Define the interface for a project's properties.
interface ProjectProps {
  project: {
    name: string;
    image: string;
    description: string;
    github: string;
    live: string;
  };
}

// ProjectCard component renders individual project details.
const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card">
      {/* Display the project image */}
      <img src={project.image} alt={project.name} />
      {/* Project name */}
      <h3>{project.name}</h3>
      {/* Project description */}
      <p>{project.description}</p>
      {/* Link to GitHub repository */}
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      {/* Link to live demo */}
      <a href={project.live} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  );
};

export default ProjectCard;
