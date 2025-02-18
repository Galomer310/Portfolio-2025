import React from "react";
import mercury from "../assets/mercury.png";
import venus from '../assets/venus.png';
import earth from '../assets/earth.png';
import mars from "../assets/mars.png";
import jupiter from "../assets/jupiter.png"
import saturn from "../assets/saturn.png"
import uranus from "../assets/urenus.png"
import neptune from "../assets/neptune.png"
import planetx from "../assets/planet9.png"
import planet10 from "../assets/planet10.png"
import planet11 from "../assets/planet11.png"
import planet12 from "../assets/planet12.png"
import planet13 from "../assets/planet13.png"
import planet14 from "../assets/planet14.png"
import spaceshipImage from '../assets/alien-ship.png';

export const initGame = (setSkillDescription: React.Dispatch<React.SetStateAction<string>>) => {
  const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let spaceshipImg = new Image();
  spaceshipImg.src = spaceshipImage;

  let spaceship = {
    x: 700,
    y: 800,
    width: 100,
    height: 100
  };

  const skills = [
    { name: "JavaScript - A dynamic programming language that's integral to web development, used for creating interactive effects within web browsers.", img: mercury },
    { name: "React - A JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where you need a fast interface to improve user interaction.", img: venus },
    { name: "Node.js - An open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript on the server side.", img: earth },
    { name: "TypeScript - A superset of JavaScript that adds static types to the language, helping to catch errors during development and providing a more robust scripting experience.", img: mars },
    { name: "HTML (HyperText Markup Language) is the standard markup language for creating web pages, whereas CSS (Cascading Style Sheets) is used to define styles for your web pages, including the layout, design, and variations in display for different devices and screen sizes."  , img: jupiter },
    { name: "Python - A high-level, interpreted programming language known for its easy readability with great support for modules and packages, which facilitates modular programming and reuse of code.", img: saturn },
    { name: "Bootstrap - A free and open-source front-end framework for designing websites and web applications which contains design templates based on HTML and CSS, as well as optional JavaScript extensions.", img: uranus },
    { name: "Git - A distributed version-control system for tracking changes in source code during software development, designed to handle everything from small to very large projects with speed and efficiency.", img: neptune },
    { name: "GitHub - A cloud-based hosting service that lets you manage Git repositories. It provides a source code management (SCM) functionality of Git, plus its own features.", img: planetx },
    { name: "DOM - (Document Object Model): A programming interface for web documents; it represents the page so that programs can change the document structure, style, and content.", img: planet10 },
    { name: "SQL - (Structured Query Language): A standard language for storing, manipulating, and retrieving data in databases.", img: planet11 },
    { name: "PostgreSQL - An advanced, open-source relational database management system that supports both SQL (relational) and JSON (non-relational) querying.", img: planet12 },
    { name: "Redux - A predictable state container for JavaScript apps, used primarily with React to manage the state of an app in a single immutable state object.", img: planet13 },
    { name: "OOP - (Object-Oriented Programming): A programming paradigm based on the concept of 'objects', which can contain data and code: data in the form of fields (often known as attributes), and code, in the form of procedures (often known as methods)", img: planet14 }
  ].map(skill => ({
    ...skill,
    img: (() => {
      let img = new Image();
      img.src = skill.img;
      return img;
    })(),
  }));

  const cx = 800;
  const cy = 800;
  const skillRadii = [250, 280, 340, 550, 450, 650, 640, 480, 470, 450, 633, 350, 790, 550];

  const skillPositions = skills.map((skill, index) => {
    const angle = (2 * Math.PI / skills.length) * index;
    const radius = skillRadii[index];
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
      img: skill.img,
      radius: 50,
      text: skill.name
    };
  });

  let currentSkillText = "";

  function setSkillText(text: string) {
    currentSkillText = text;
  }

  function drawSkills() {
    if (ctx) {
      skillPositions.forEach(skill => {
        if (skill.img.complete) {
          ctx.drawImage(skill.img, skill.x - skill.radius, skill.y - skill.radius, skill.radius * 2, skill.radius * 2);
        }
      });
    }
  }

  function drawSpaceship() {
    if (spaceshipImg.complete) {
      if (ctx) {
        ctx.drawImage(spaceshipImg, spaceship.x, spaceship.y, spaceship.width, spaceship.height);
      }
    } else {
      if (ctx) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
      }
    }
  }

  function drawSkillText() {
    if (ctx) {
      ctx.fillStyle = "white";
      ctx.font = "45px Arial";
      const lineHeight = 54; // Line height approximately matching the font size
      const x = 10; // Left padding of the text
      const y = 50; // Top padding of the text where the first line will start
      const maxWidth = canvas.width - 20; // Maximum width of text allowed
  
      // Function to handle text wrapping
      function wrapText(text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
        const words = text.split(' ');
        let line = '';
  
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + ' ';
          const metrics = ctx ? ctx.measureText(testLine) : { width: 0 };
          const testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            if (ctx) {
              if (ctx) {
                if (ctx) {
                  if (ctx) {
                    if (ctx) {
                      ctx.fillText(line, x, y);
                    }
                  }
                }
              }
            }
            line = words[n] + ' ';
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx?.fillText(line, x, y);
      }
  
      // Call the wrapText function to draw and wrap text
      wrapText(currentSkillText, x, y, maxWidth, lineHeight);
    }
  }
  

  function checkSkillCollision() {
    let collisionDetected = false;
    skillPositions.forEach(skill => {
      const dx = spaceship.x + spaceship.width / 2 - skill.x;
      const dy = spaceship.y + spaceship.height / 2 - skill.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < skill.radius + Math.min(spaceship.width, spaceship.height) / 2) {
        setSkillText(skill.text); // Update the text via callback
        collisionDetected = true;
      }
    });
    if (!collisionDetected) {
      setSkillText("Navigate the spaceship to explore skills!"); // Default text or empty
    }
  }
  function updateGameArea() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawSkills();
    drawSpaceship();
    checkSkillCollision();
    drawSkillText();
  }

  setInterval(updateGameArea, 20);

  document.addEventListener('keydown', function(event) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
    }
    switch(event.key) {
      case 'ArrowUp': spaceship.y -= 15; break;
      case 'ArrowDown': spaceship.y += 15; break;
      case 'ArrowLeft': spaceship.x -= 15; break;
      case 'ArrowRight': spaceship.x += 15; break;
    }
  });
}
