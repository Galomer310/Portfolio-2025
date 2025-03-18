// ResumeModal.tsx
import React from "react";
import resumeImage from "../assets/resume.png";
import resumePDF from "../assets/resume.pdf"; // <— This is the PDF for download

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  return (
    <>
      <div className="resume-modal-overlay">
        <div className="resume-modal-content">
          {/* download button */}
          <a
            href={resumePDF}
            download="GalOmer_CV.pdf"
            className="download-button"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 20px",
              background: "green",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Download
          </a>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>

          {/* Display resume image (preview) */}
          <img src={resumeImage} alt="Resume" className="resume-image" />
        </div>
      </div>
    </>
  );
};

export default ResumeModal;
