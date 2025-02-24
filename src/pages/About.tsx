// About.tsx
import React, { useEffect, useState } from "react";
// Import a profile picture.
import ProfilePicture from "../assets/portfolioPic.png";
// Import the game initialization function.
import { initGame } from "../components/game";

// About component renders the "About Me" section.
const About: React.FC = () => {
  // State to hold the skill description updated by the game.
  const [skillDescription, setSkillDescription] = useState("...");

  // useEffect to initialize the game once after the component mounts.
  useEffect(() => {
    initGame(setSkillDescription);
  }, []);

  return (
    <section className="about">
      <h1>About Me</h1>
      <h3>
        I'm a passionate web developer skilled in React, TypeScript, and backend
        technologies.
        <br />
        Currently, I'm looking for full stack, frontend, and backend
        opportunities!
        <br />
      </h3>
      {/* Display profile picture */}
      <img src={ProfilePicture} alt="Profile" />
      <h3>
        Explore My Skills:
        <br />
        Navigate the alien spaceship by using your arrow keys to hover over any
        of the planets displayed on the screen.
        <br />
        Each planet represents a different skill set I possess.
        <br />
        When you hover over a planet with the spaceship, detailed information
        about that particular skill will be displayed.
        <br />
        Enjoy exploring the solar system of my capabilities!
      </h3>
      {/* Container for the canvas game and dynamic skill text */}
      <div className="skills-container">
        <div className="canvas-container">
          {/* Canvas for the game */}
          <canvas id="gameCanvas" width="1050" height="1500"></canvas>
        </div>
        <div className="skill-text-container">
          {/* Display the current skill description */}
          <p>{skillDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
