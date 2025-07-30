import React, { useState, useEffect } from "react";

// Data structure: Each item contains a technology, its usage, and a project example
const techShowcaseData = [
  {
    tech: "React",
    description:
      "A popular JavaScript library for building user interfaces, especially single-page applications.",
    usage:
      "Built dynamic, responsive frontends for Stock Tracker, Recipe Finder, and Manisr.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "Redux",
    description:
      "A predictable state container for JavaScript apps, often used with React.",
    usage:
      "Implemented global state management for Recipe Finder and Stock Tracker.",
    project: {
      name: "Recipe Finder",
      live: "https://recipe-finder-frontend-wzop.onrender.com",
      github: "https://github.com/Galomer310/recipe_finder_frontend",
    },
  },
  {
    tech: "HTML5",
    description:
      "The standard markup language for creating web pages and applications.",
    usage:
      "Structured web pages across all projects including portfolio and interactive UI components.",
    project: {
      name: "Portfolio Website",
      live: "https://portfolio-2025-m45j.onrender.com",
      github: "https://github.com/Galomer310",
    },
  },
  {
    tech: "CSS3",
    description:
      "A stylesheet language for describing the presentation of HTML documents.",
    usage:
      "Styled responsive layouts and dark mode functionality across portfolio and projects.",
    project: {
      name: "Portfolio Website",
      live: "https://portfolio-2025-m45j.onrender.com",
      github: "https://github.com/Galomer310",
    },
  },
  {
    tech: "Puppeteer",
    description:
      "A Node.js library that provides a high-level API to control Chrome or Chromium browsers.",
    usage:
      "Used in TLV Tech scrapers for automating data extraction from dynamic pages.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Selenium",
    description:
      "An open-source tool for automating browsers, commonly used for testing and scraping.",
    usage:
      "Automated vehicle data scraping in TLV Tech project using Python + Selenium.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Chromium & ChromeDriver",
    description:
      "Chromium is an open-source browser, and ChromeDriver allows automation for Chrome browsers.",
    usage:
      "Integrated with Selenium to control Chrome-based browsers in scraping pipeline.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Playwright",
    description:
      "A Node.js library for browser automation supporting multiple browsers.",
    usage:
      "Explored for bypassing CAPTCHA and scraping JS-heavy sites in TLV Tech project.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Bright Data Proxies & Web Unlocker",
    description:
      "Residential proxies and an advanced anti-bot solution for web scraping.",
    usage:
      "Implemented to bypass IP restrictions and captchas when scraping protected websites.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Socket.IO",
    description:
      "A library for real-time, bidirectional communication between web clients and servers.",
    usage:
      "Integrated into multiplayer poker game project for live updates between players.",
    project: {
      name: "Poker Game",
      live: "https://github.com/Galomer310/poker",
      github: "https://github.com/Galomer310/poker",
    },
  },
  {
    tech: "AWS",
    description:
      "Amazon Web Services – a cloud platform providing hosting, compute, and storage solutions.",
    usage:
      "Deployed scrapers using AWS ECS and managed outputs in S3 buckets for TLV Tech.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "React",
    description: "A JavaScript library for building dynamic user interfaces.",
    usage:
      "Used in Stock Tracker, Recipe Finder, Story Sharing, and Trivia Game for creating responsive UIs.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "Redux Toolkit",
    description:
      "A library for managing and centralizing application state in React apps.",
    usage:
      "Implemented in Recipe Finder and Story Sharing to manage global state efficiently.",
    project: {
      name: "Recipe Finder",
      live: "https://recipe-finder-frontend-wzop.onrender.com",
      github: "https://github.com/Galomer310/recipe_finder_frontend",
    },
  },
  {
    tech: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript.",
    usage:
      "Applied across all major projects for type safety in both frontend and backend code.",
    project: {
      name: "Story Sharing Platform",
      live: "https://story-sharing-site.onrender.com",
      github: "https://github.com/Galomer310/Story_Sharing",
    },
  },
  {
    tech: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for server-side programming.",
    usage:
      "Developed backend APIs for Stock Tracker, Story Sharing, and Trivia Game.",
    project: {
      name: "Stock Tracker Backend",
      live: "Private",
      github: "https://github.com/Galomer310/StockTrack-backend",
    },
  },
  {
    tech: "Express.js",
    description:
      "A minimal and flexible Node.js framework for building web APIs.",
    usage: "Created RESTful APIs for Stock Tracker and Trivia Game backends.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "PostgreSQL",
    description: "A powerful open-source relational database system.",
    usage:
      "Implemented for user management and data storage in Stock Tracker, Story Sharing, and Trivia Game.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "NeonDB",
    description:
      "A managed PostgreSQL service optimized for modern cloud applications.",
    usage:
      "Used to host Stock Tracker’s relational database for scalability and reliability.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "JWT",
    description:
      "JSON Web Tokens are used for secure user authentication and authorization.",
    usage:
      "Implemented user authentication in Stock Tracker and Story Sharing Platform.",
    project: {
      name: "Story Sharing Platform",
      live: "https://story-sharing-site.onrender.com",
      github: "https://github.com/Galomer310/Story_Sharing",
    },
  },
  {
    tech: "bcrypt",
    description: "A password-hashing library used for secure password storage.",
    usage:
      "Used in backend for hashing passwords in Story Sharing and Stock Tracker.",
    project: {
      name: "Story Sharing Platform",
      live: "https://story-sharing-site.onrender.com",
      github: "https://github.com/Galomer310/Story_Sharing",
    },
  },
  {
    tech: "Axios",
    description:
      "A promise-based HTTP client for making API requests from the browser or Node.js.",
    usage:
      "Used for fetching data from external APIs like Open Trivia Database and Exchange Rate API.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "dotenv",
    description:
      "Loads environment variables from a .env file into Node.js process.env.",
    usage:
      "Secured API keys and database credentials in Trivia Game and Stock Tracker backend.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "cors",
    description:
      "A Node.js package that provides a Connect/Express middleware for enabling CORS.",
    usage: "Enabled cross-origin requests in Trivia Game backend.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "React Router",
    description: "A standard library for routing in React applications.",
    usage:
      "Implemented client-side routing for Recipe Finder and Story Sharing frontend.",
    project: {
      name: "Recipe Finder",
      live: "https://recipe-finder-frontend-wzop.onrender.com",
      github: "https://github.com/Galomer310/recipe_finder_frontend",
    },
  },
  {
    tech: "Exchange Rate API",
    description: "A REST API that provides real-time currency exchange rates.",
    usage:
      "Integrated to fetch and display real-time currency conversions in Currency Converter app.",
    project: {
      name: "Currency Converter",
      live: "https://galomer310.github.io/Currency-Converter/",
      github: "https://github.com/Galomer310/Currency-Converter",
    },
  },
  {
    tech: "Open Trivia Database",
    description: "A free-to-use API for trivia questions.",
    usage: "Used to provide questions for Trivia Game.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "Polygon.io API",
    description:
      "A market data API for real-time stock prices and financial information.",
    usage: "Used to fetch real-time stock prices for Stock Tracker app.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
];

const TechShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through tech items every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techShowcaseData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = techShowcaseData.findIndex(
      (item) => item.tech === e.target.value
    );
    setCurrentIndex(index);
  };

  const currentItem = techShowcaseData[currentIndex];

  return (
    <section className="tech-showcase">
      {/* Left side: Dropdown menu */}
      <div className="dropdown-section">
        <h3>
          Select a technology to see how I’ve applied it in real projects.
        </h3>
        <select value={currentItem.tech} onChange={handleChange}>
          {techShowcaseData.map((item, index) => (
            <option key={index} value={item.tech}>
              {item.tech}
            </option>
          ))}
        </select>
      </div>

      {/* Right side: Dynamic showcase */}
      <div className="showcase-details">
        {/* <h2>{currentItem.tech}</h2> */}
        <h2>{currentItem.description}</h2>
        <h3>{currentItem.usage}</h3>
        <div className="project-links">
          <strong>Project:</strong> {currentItem.project.name} <br />
          {currentItem.project.live !== "Private Repo" && (
            <a
              href={currentItem.project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {" | "}
          <a
            href={currentItem.project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
