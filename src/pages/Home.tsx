import React, { useEffect } from "react";
// Core icons
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
// Additional technology icons
import {
  SiRedux,
  SiPostgresql,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiAmazon,
  SiMongodb,
  SiExpress,
  SiJet,
  SiPython,
  SiVite,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

// Home component renders the landing page with a parallax background of icons.
const Home: React.FC = () => {
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = document.querySelector(".parallax-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translateY(${scrollY * 0.2}px)`; // smooth parallax
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Dynamic color changing effect
    const syntaxElements = document.querySelectorAll(".syntax");
    const colors = [
      "rgb(142, 22, 22, 0.5)",
      "rgb(72, 166, 167, 0.5)",
      "rgb(41, 115, 178, 0.5)",
      "rgb(162, 123, 92, 0.7)",
      "rgb(148,0,211,0.5)",
      "rgb(63, 79, 68, 0.7)",
    ];

    const colorInterval = setInterval(() => {
      syntaxElements.forEach((el) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        (el as HTMLElement).style.color = randomColor;
      });
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div className="home">
      {/* Parallax background container */}
      <div className="parallax-bg">
        {/* Icons with animation handled via CSS */}
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
        <div className="syntax">
          <SiDocker />
        </div>
        <div className="syntax">
          <SiAmazon />
        </div>
        <div className="syntax">
          <SiMongodb />
        </div>
        <div className="syntax">
          <SiExpress />
        </div>
        <div className="syntax">
          <SiJet />
        </div>
        <div className="syntax">
          <SiPython />
        </div>
        <div className="syntax">
          <SiVite />
        </div>
        <div className="syntax">
          <SiSocketdotio />
        </div>
        <div className="syntax">
          <SiTailwindcss />
        </div>
      </div>

      {/* Foreground content */}
      <div className="home-content">
        <h1>Hello, I'm Gal Omer</h1>
        <p>Full Stack Developer</p>
        <div className="homePageImg"></div>
      </div>
    </div>
  );
};

export default Home;
