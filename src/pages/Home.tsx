// Home.tsx
import React, { useEffect } from "react";
// Import icon components from react-icons.
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiPostgresql,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Home component renders the landing page with a parallax background of icons.
const Home: React.FC = () => {
  useEffect(() => {
    // Parallax effect: adjust background translation based on scroll position.
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = document.querySelector(".parallax-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Get all elements with the .syntax class (the icon containers).
    const syntaxElements = document.querySelectorAll(".syntax");
    // Define a set of colors to choose from.
    const colors = [
      "rgb(142, 22, 22, 0.5)",
      "rgb(72, 166, 167, 0.5)",
      "rgb(41, 115, 178, 0.5)",
      "rgb(162, 123, 92, 0.7)",
      "rgba(148,0,211,0.5)",
      "rgb(63, 79, 68, 0.7)",
    ];

    // Set an interval to update the color of each syntax element every 2 seconds.
    const colorInterval = setInterval(() => {
      syntaxElements.forEach((el) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        (el as HTMLElement).style.color = randomColor;
      });
    }, 2000);

    // Cleanup event listener and interval on unmount.
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div className="home">
      {/* Parallax background container for icons */}
      <div className="parallax-bg">
        {/* Each .syntax div contains an icon. Distribution is handled via CSS nth-child selectors. */}
        <div className="syntax">
          <FaReact />
        </div>
        <div className="syntax">
          <SiRedux />
        </div>
        <div className="syntax">
          <FaNodeJs />
        </div>
        <div className="syntax">
          <SiPostgresql />
        </div>
        <div className="syntax">
          <SiTypescript />
        </div>
        <div className="syntax">
          <SiHtml5 />
        </div>
        <div className="syntax">
          <SiCss3 />
        </div>
        <div className="syntax">
          <FaGithub />
        </div>
        <div className="syntax">
          <FaGitAlt />
        </div>
        {/* Additional icons can be added here if needed */}
      </div>
      {/* Main home content displayed over the parallax background */}
      <div className="home-content">
        <h1>Hello, I'm Gal Omer</h1>
        <p>Full Stack Developer</p>

        <div className="homePageImg"></div>
      </div>
    </div>
  );
};

export default Home;
