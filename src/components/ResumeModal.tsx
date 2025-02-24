// portfolio/src/components/ResumeModal.tsx
import React from "react";
import resumeImage from "../assets/resume.png"; // adjust the path if needed

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={resumeImage} alt="Resume" className="resume-image" />
      </div>
    </div>
  );
};

export default ResumeModal;
