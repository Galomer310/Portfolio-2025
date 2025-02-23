import React from "react";

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          &times;
        </button>
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          width="100%"
          height="500px"
          style={{ border: "none" }}
        />
        <a href="/resume.pdf" download className="download-resume">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
