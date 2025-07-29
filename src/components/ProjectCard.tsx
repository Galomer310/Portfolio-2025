// // ProjectCard.tsx
// // Define the interface for a project's properties.
// interface ProjectProps {
//   project: {
//     name: string;
//     image: string;
//     description: string;
//     github: string;
//     live: string;
//     videoDemo?: string;
//   };
// }

// // ProjectCard component renders individual project details.
// const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
//   return (
//     <div className="project-card">
//       {/* Display the project image */}
//       <img src={project.image} alt={project.name} />
//       {/* Project name */}
//       <h3>{project.name}</h3>
//       {/* Project description */}
//       <p>{project.description}</p>
//       {/* Link to GitHub repository */}
//       <a href={project.github} target="_blank" rel="noopener noreferrer">
//         GitHub
//       </a>
//       {/* Link to live demo */}
//       <a href={project.live} target="_blank" rel="noopener noreferrer">
//         Live Demo
//       </a>
//       {/* LINK for video demonstration */}
//       {project.videoDemo && (
//         <a href={project.videoDemo} target="_blank" rel="noopener noreferrer">
//           Watch Video
//         </a>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useState } from "react";

interface ProjectProps {
  project: {
    name: string;
    image?: string; // Single image
    images?: string[]; // Multiple images
    description: string;
    github: string;
    live: string;
    videoDemo?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (project.images) {
      setCurrentIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentIndex((prev) =>
        prev === 0 ? project.images!.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    if (project.images) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="project-card">
      {/* Carousel if multiple images */}
      {project.images && project.images.length > 0 ? (
        <div className="carousel">
          <button className="arrow left" onClick={prevImage}>
            &lt;
          </button>
          <img src={project.images[currentIndex]} alt={project.name} />
          <button className="arrow right" onClick={nextImage}>
            &gt;
          </button>

          {/* Dots navigation */}
          <div className="dots">
            {project.images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToImage(index)}
              ></span>
            ))}
          </div>
        </div>
      ) : (
        project.image && <img src={project.image} alt={project.name} />
      )}

      {/* Project details */}
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      {/* Links */}
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
      {project.videoDemo && (
        <a href={project.videoDemo} target="_blank" rel="noopener noreferrer">
          Watch Video
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
