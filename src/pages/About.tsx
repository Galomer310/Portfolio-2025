import React from "react";
// Import a profile picture
import ProfilePicture from "../assets/portfolioPic.png";
// Import the new TechShowcase component
import TechShowcase from "../components/TechShowcase";
const About: React.FC = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <h3>
        I’m a Full Stack Developer with hands-on experience.
        <br />
        Graduated from an intensive bootcamp, I’ve built real-world projects
        like Recipe Finder, Stock Tracker, and a Food Sharing Platform.
        <br />
        also recently completed a 2-month internship at a startup, where I
        contribute to developing automated web scrapers
        <br />
        using Python, Selenium, and BeautifulSoup, along with tools like
        brightData for proxies, Docker, and AWS.
        <br />
        I’m passionate about creating scalable, user-friendly applications and
        eager to join a team where I can make an impact.
      </h3>

      {/* Display profile picture */}
      <img src={ProfilePicture} alt="Profile" />

      <h3>
        Below you can explore my core skills and see real examples of how I used
        them in my projects:
      </h3>

      {/* Insert the new TechShowcase component */}
      <TechShowcase />
    </section>
  );
};

export default About;
