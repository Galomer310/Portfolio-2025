import React, { useState } from "react";
import ResumeModal from "./ResumeModel";

const ResumeButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button className="resume-btn" onClick={openModal}>
        View Resume
      </button>
      {isModalOpen && <ResumeModal onClose={closeModal} />}
    </>
  );
};

export default ResumeButton;
