// game.ts
import React from "react";
// Import images for each skill (planet)
import mercury from "../assets/mercury.png";
import venus from "../assets/venus.png";
import earth from "../assets/earth.png";
import mars from "../assets/mars.png";
import jupiter from "../assets/jupiter.png";
import saturn from "../assets/saturn.png";
import uranus from "../assets/urenus.png";
import neptune from "../assets/neptune.png";
import planetx from "../assets/planet9.png";
import planet10 from "../assets/planet10.png";
import planet11 from "../assets/planet11.png";
import planet12 from "../assets/planet12.png";
import planet13 from "../assets/planet13.png";
import planet14 from "../assets/planet14.png";
// Import the spaceship image
import spaceshipImage from "../assets/alien-ship.png";

// The initGame function sets up and starts the canvas game.
// It receives a callback to update the skill description in React state.
export const initGame = (
  setSkillDescription: React.Dispatch<React.SetStateAction<string>>
) => {
  // Get the canvas element by its ID.
  const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
  // Get the 2D rendering context.
  const ctx = canvas.getContext("2d");
  if (!ctx) return; // Exit if context isn't available.

  // Create an image for the spaceship and set its source.
  let spaceshipImg = new Image();
  spaceshipImg.src = spaceshipImage;

  // Define the spaceship's properties.
  let spaceship = {
    x: 600,
    y: 600,
    width: 100,
    height: 100,
  };

  // Define skills with their names and associated images.
  const skills = [
    {
      name: "JavaScript - A dynamic programming language that's integral to web development, used for creating interactive effects within web browsers.",
      img: mercury,
    },
    {
      name: "React - A JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where you need a fast interface to improve user interaction.",
      img: venus,
    },
    {
      name: "Node.js - An open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript on the server side.",
      img: earth,
    },
    {
      name: "TypeScript - A superset of JavaScript that adds static types to the language, helping to catch errors during development and providing a more robust scripting experience.",
      img: mars,
    },
    {
      name: "HTML (HyperText Markup Language) is the standard markup language for creating web pages, whereas CSS (Cascading Style Sheets) is used to define styles for your web pages, including layout and design variations.",
      img: jupiter,
    },
    {
      name: "Python - A high-level, interpreted programming language known for its easy readability and robust module support.",
      img: saturn,
    },
    {
      name: "Bootstrap - A front-end framework with design templates based on HTML and CSS.",
      img: uranus,
    },
    {
      name: "Git - A distributed version-control system for tracking changes in source code.",
      img: neptune,
    },
    {
      name: "GitHub - A cloud-based hosting service for Git repositories.",
      img: planetx,
    },
    {
      name: "DOM - The Document Object Model represents the page so that programs can change the document structure, style, and content.",
      img: planet10,
    },
    {
      name: "SQL - A standard language for storing, manipulating, and retrieving data in databases.",
      img: planet11,
    },
    {
      name: "PostgreSQL - An advanced, open-source relational database management system.",
      img: planet12,
    },
    {
      name: "Redux - A predictable state container for JavaScript apps, used primarily with React.",
      img: planet13,
    },
    {
      name: "OOP - Object-Oriented Programming is based on objects containing data and code.",
      img: planet14,
    },
  ].map((skill) => ({
    ...skill,
    // For each skill, create a new Image and assign its source.
    img: (() => {
      let img = new Image();
      img.src = skill.img;
      return img;
    })(),
  }));

  // Center coordinates for the canvas.
  const cx = 600;
  const cy = 700;
  // Array of radii used to position the skill icons around a circle.
  const skillRadii = [400, 350, 500, 250, 300, 350, 400, 450, 500, 550, 500, 350, 300, 400];

  // Calculate positions for each skill icon using polar coordinates.
  const skillPositions = skills.map((skill, index) => {
    const angle = (2 * Math.PI / skills.length) * index; // Calculate angle.
    const radius = skillRadii[index]; // Get corresponding radius.
    return {
      x: cx + radius * Math.cos(angle), // Calculate x position.
      y: cy + radius * Math.sin(angle), // Calculate y position.
      img: skill.img, // Image object.
      radius: 20, // Display radius for drawing the image.
      text: skill.name, // Skill description text.
    };
  });

  // (Optional) Variable for current skill text, unused since React state is used.
  let currentSkillText = "";

  // Function to update currentSkillText (unused in final rendering).
  function setSkillText(text: string) {
    currentSkillText = text;
  }

  // Function to draw all skill icons on the canvas.
  function drawSkills() {
    if (ctx) {
      skillPositions.forEach((skill) => {
        if (skill.img.complete) {
          // Draw the image at the calculated position.
          ctx.drawImage(
            skill.img,
            skill.x - skill.radius,
            skill.y - skill.radius,
            skill.radius * 2,
            skill.radius * 2
          );
        }
      });
    }
  }

  // Function to draw the spaceship on the canvas.
  function drawSpaceship() {
    if (spaceshipImg.complete) {
      if (ctx) {
        ctx.drawImage(
          spaceshipImg,
          spaceship.x,
          spaceship.y,
          spaceship.width,
          spaceship.height
        );
      }
    } else {
      if (ctx) {
        // If spaceship image not loaded, draw a placeholder rectangle.
        ctx.fillStyle = "gray";
        ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
      }
    }
  }

  // Function to check for collisions between the spaceship and each skill icon.
  // If a collision is detected, the corresponding skill text is passed to the React state.
  function checkSkillCollision() {
    let collisionDetected = false;
    skillPositions.forEach((skill) => {
      const dx = spaceship.x + spaceship.width / 2 - skill.x;
      const dy = spaceship.y + spaceship.height / 2 - skill.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < skill.radius + Math.min(spaceship.width, spaceship.height) / 2) {
        // Update the React state with the skill text.
        setSkillDescription(skill.text);
        collisionDetected = true;
      }
    });
    if (!collisionDetected) {
      // Set a default message if no collision is detected.
      setSkillDescription("Navigate the spaceship to explore skills!");
    }
  }

  // Function to update the canvas by clearing it and redrawing skills, spaceship, and collision detection.
  function updateGameArea() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawSkills();
    drawSpaceship();
    checkSkillCollision();
  }

  // Update the game area every 20 milliseconds.
  setInterval(updateGameArea, 20);

  // Add keydown event listener to control the spaceship.
  document.addEventListener("keydown", function (event) {
    // Prevent default arrow key scrolling.
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
    }
    // Update spaceship position based on arrow key pressed.
    switch (event.key) {
      case "ArrowUp":
        spaceship.y -= 15;
        break;
      case "ArrowDown":
        spaceship.y += 15;
        break;
      case "ArrowLeft":
        spaceship.x -= 15;
        break;
      case "ArrowRight":
        spaceship.x += 15;
        break;
    }
  });
};
