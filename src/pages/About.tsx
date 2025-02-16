import React, { useEffect, useState } from "react";
import ProfilePicture from "../assets/portfolioPic.png";
import { initGame } from "../components/game";

const About: React.FC = () => {
  const [skillDescription, setSkillDescription] = useState(
    "I'm a passionate web developer skilled in React, TypeScript, and backend technologies. Currently, I'm looking for full stack, frontend, and backend opportunities! Explore My Skills: Navigate the alien spaceship by using your arrow keys to hover over any of the planets displayed on the screen. Each planet represents a different skill set I possess. When you hover over a planet with the spaceship, detailed information about that particular skill will be displayed. Enjoy exploring the solar system of my capabilities!"
  );

  useEffect(() => {
    initGame(setSkillDescription);
  }, []);

  return (
    <section className="about">
      <h2>About Me</h2>
      <img src={ProfilePicture} alt="Profile" />
      <p>{skillDescription}</p>
      <h3>Skills</h3>
      <canvas id="gameCanvas" width="1500" height="1500"></canvas>
    </section>
  );
};

export default About;
