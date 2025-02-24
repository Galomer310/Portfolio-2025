// Header.tsx
import React from "react";

// Define the interface for Header props.
interface HeaderProps {
  // Function to toggle dark mode.
  toggleDarkMode: () => void;
  // Boolean indicating whether dark mode is active.
  darkMode: boolean;
}

// Header component displays the navigation bar.
const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
  return (
    <header>
      <nav>
        {/* Navigation links that scroll to respective sections */}
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#cv">C.V</a>
        {/* Dark mode toggle button */}
        <a className="darkModeBtn" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </a>
      </nav>
    </header>
  );
};

export default Header;
