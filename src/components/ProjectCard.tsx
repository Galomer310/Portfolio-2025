interface ProjectProps {
  project: {
    name: string;
    image: string;
    description: string;
    github: string;
    live: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={project.live} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  );
};

export default ProjectCard;
