import React, { useEffect, useState } from "react";
import ProfilePicture from "../assets/portfolioPic.png";
import { initGame } from "../components/game";

const About: React.FC = () => {
  const [skillDescription, setSkillDescription] = useState("...");

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
        Enjoy exploring the solar system of my capabilities!"
      </h3>
      <div className="skills-container">
        <div className="canvas-container">
          <canvas id="gameCanvas" width="1050" height="1500"></canvas>
        </div>
        <div className="skill-text-container">
          <p>{skillDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
