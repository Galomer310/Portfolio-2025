// portfolio/src/components/Header.tsx
import React from "react";

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
  openResumeModal: () => void; // NEW prop
}

const Header: React.FC<HeaderProps> = ({
  toggleDarkMode,
  darkMode,
  openResumeModal,
}) => {
  return (
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {/* Instead of linking to an anchor, we trigger the modal */}
        <a onClick={openResumeModal} style={{ cursor: "pointer" }}>
          C.V
        </a>
        <a className="darkModeBtn" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </a>
      </nav>
    </header>
  );
};

export default Header;
