import React, { useState } from "react";

interface ProjectProps {
  project: {
    name: string;
    image?: string; // main image (always show as preview)
    images?: string[]; // all images (for modal/lightbox)
    description: string;
    github: string;
    live: string;
    videoDemo?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  // Lightbox modal state
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // When the preview image is clicked
  const handleImageClick = () => {
    if (project.images && project.images.length > 0) {
      setModalIndex(0); // Show the first image in array
      setShowModal(true); // Open modal
    }
  };

  // Navigation inside modal
  const nextModalImage = (e?: React.MouseEvent) => {
    if (project.images && project.images.length > 0) {
      e?.stopPropagation();
      setModalIndex((prev) => (prev + 1) % project.images!.length);
    }
  };
  const prevModalImage = (e?: React.MouseEvent) => {
    if (project.images && project.images.length > 0) {
      e?.stopPropagation();
      setModalIndex((prev) =>
        prev === 0 ? project.images!.length - 1 : prev - 1
      );
    }
  };

  // Clicking background closes modal
  const handleModalBackgroundClick = () => setShowModal(false);

  // Prevent modal image click from closing modal
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className="project-card">
      {/* Main (single) preview image */}
      {project.image &&
        (project.images && project.images.length > 0 ? (
          <img
            src={project.image}
            alt={project.name}
            style={{ cursor: "pointer" }}
            onClick={handleImageClick}
            title="Click to view gallery"
          />
        ) : (
          <img src={project.image} alt={project.name} />
        ))}

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

      {/* MODAL / LIGHTBOX */}
      {showModal && project.images && project.images.length > 0 && (
        <div className="modal-overlay" onClick={handleModalBackgroundClick}>
          <div className="modal-content" onClick={stopPropagation}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <button className="modal-arrow left" onClick={prevModalImage}>
              &lt;
            </button>
            <img
              src={project.images[modalIndex]}
              alt={`${project.name} screenshot ${modalIndex + 1}`}
              className="modal-image"
            />
            <button className="modal-arrow right" onClick={nextModalImage}>
              &gt;
            </button>
            <div className="modal-dots">
              {project.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${modalIndex === idx ? "active" : ""}`}
                  onClick={() => setModalIndex(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
