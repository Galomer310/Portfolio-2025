import React, { useState, useEffect } from "react";

const techShowcaseData = [
  {
    tech: "React",
    description:
      "A leading JavaScript library for building dynamic and component-based user interfaces.",
    usage:
      "Developed responsive UIs for multiple projects including Stock Tracker, Recipe Finder, and Manisr. Implemented reusable components, hooks (useState, useEffect), and optimized rendering for performance.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "Redux",
    description:
      "A predictable state container commonly used for managing global state in React apps.",
    usage:
      "Integrated Redux and Redux Toolkit to manage global state across complex applications like Recipe Finder and Stock Tracker, enabling consistent data flow and easy debugging.",
    project: {
      name: "Recipe Finder",
      live: "https://recipe-finder-frontend-wzop.onrender.com",
      github: "https://github.com/Galomer310/recipe_finder_frontend",
    },
  },
  {
    tech: "HTML5",
    description:
      "The foundation for structuring content on the web, supporting semantic elements and modern APIs.",
    usage:
      "Built semantic, accessible web pages across portfolio and projects, ensuring SEO-friendly structure and compatibility with responsive CSS layouts.",
    project: {
      name: "Portfolio Website",
      live: "https://portfolio-2025-m45j.onrender.com",
      github: "https://github.com/Galomer310",
    },
  },
  {
    tech: "CSS3",
    description:
      "A styling language for creating visually appealing and responsive user interfaces.",
    usage:
      "Implemented advanced CSS features including Flexbox, Grid, animations, and dark mode. Designed visually consistent layouts for portfolio and client projects.",
    project: {
      name: "Portfolio Website",
      live: "https://portfolio-2025-m45j.onrender.com",
      github: "https://github.com/Galomer310",
    },
  },
  {
    tech: "TypeScript",
    description:
      "A superset of JavaScript that introduces strong typing for scalable application development.",
    usage:
      "Applied TypeScript in both frontend and backend projects like Stock Tracker and Story Sharing. Enhanced type safety, reduced bugs, and improved developer productivity.",
    project: {
      name: "Story Sharing Platform",
      live: "https://story-sharing-site.onrender.com",
      github: "https://github.com/Galomer310/Story_Sharing",
    },
  },
  {
    tech: "Node.js",
    description:
      "A JavaScript runtime that allows building fast and scalable server-side applications.",
    usage:
      "Developed RESTful APIs for Stock Tracker, Story Sharing, and Trivia Game using Node.js and Express.js. Implemented JWT authentication and optimized API endpoints for performance.",
    project: {
      name: "Stock Tracker Backend",
      live: "Private",
      github: "https://github.com/Galomer310/StockTrack-backend",
    },
  },
  {
    tech: "Express.js",
    description:
      "A minimal and flexible Node.js framework for building APIs and web servers.",
    usage:
      "Built secure and modular backend services for Trivia Game and Recipe Finder. Used Express middleware for validation, error handling, and CORS configuration.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "PostgreSQL",
    description:
      "A powerful, open-source relational database for handling structured data.",
    usage:
      "Designed normalized database schemas for Stock Tracker and Story Sharing. Implemented optimized queries and relationships for user accounts, watchlists, and content.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "NeonDB",
    description: "A managed PostgreSQL service for modern cloud applications.",
    usage:
      "Configured NeonDB for hosting Stock Tracker’s production database, ensuring high availability, connection pooling, and query performance.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "JWT",
    description:
      "JSON Web Tokens for stateless user authentication and secure API access.",
    usage:
      "Implemented JWT-based authentication flow in Stock Tracker and Story Sharing apps, including token generation, validation, and middleware for route protection.",
    project: {
      name: "Story Sharing Platform",
      live: "https://story-sharing-site.onrender.com",
      github: "https://github.com/Galomer310/Story_Sharing",
    },
  },
  {
    tech: "bcrypt",
    description: "A library for hashing passwords securely in Node.js apps.",
    usage:
      "Integrated bcrypt for password hashing and comparison in backend authentication logic for Stock Tracker and Story Sharing.",
    project: {
      name: "Story Sharing Platform",
      live: "https://story-sharing-site.onrender.com",
      github: "https://github.com/Galomer310/Story_Sharing",
    },
  },
  {
    tech: "Axios",
    description:
      "A promise-based HTTP client for making API requests in JavaScript and Node.js.",
    usage:
      "Fetched real-time data from APIs like Polygon.io for stock prices and Open Trivia Database for quiz content in Trivia Game.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "React Router",
    description:
      "A standard routing library for single-page React applications.",
    usage:
      "Implemented client-side routing for Recipe Finder and Story Sharing, enabling dynamic navigation without full page reload.",
    project: {
      name: "Recipe Finder",
      live: "https://recipe-finder-frontend-wzop.onrender.com",
      github: "https://github.com/Galomer310/recipe_finder_frontend",
    },
  },
  {
    tech: "Socket.IO",
    description:
      "A real-time communication library for web apps using WebSockets.",
    usage:
      "Built real-time multiplayer experience for Poker Game, allowing synchronized actions and instant updates across connected users.",
    project: {
      name: "Poker Game",
      live: "https://github.com/Galomer310/poker",
      github: "https://github.com/Galomer310/poker",
    },
  },
  {
    tech: "AWS",
    description:
      "Amazon Web Services providing compute, storage, and deployment solutions.",
    usage:
      "Configured AWS ECS for running web scraping tasks and used S3 for storing processed data and images securely.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Puppeteer",
    description:
      "A headless Chrome automation library for scraping and testing web apps.",
    usage:
      "Used Puppeteer to scrape dynamic content for TLV Tech’s Colton project, handling pagination and JavaScript-rendered data.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Selenium",
    description:
      "An automation framework for testing and data scraping in real browsers.",
    usage:
      "Automated Chrome sessions for scraping inventory data, managed sessions, and implemented error recovery strategies.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Playwright",
    description:
      "A modern automation framework supporting Chromium, Firefox, and WebKit.",
    usage:
      "Explored Playwright for bypassing CAPTCHAs and scraping JavaScript-heavy sites during TLV Tech pipeline development.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Bright Data",
    description: "Enterprise-grade residential proxies and anti-bot solutions.",
    usage:
      "Integrated Bright Data Web Unlocker to bypass IP blocks and bot detection for large-scale scraping of dealer websites.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "Polygon.io API",
    description:
      "A financial data API delivering real-time and historical stock prices.",
    usage:
      "Integrated Polygon API in Stock Tracker to display live stock updates and historical performance charts.",
    project: {
      name: "Stock Tracker",
      live: "https://stocktrack-frontend-u3br.onrender.com",
      github: "https://github.com/Galomer310/StockTrack-frontend",
    },
  },
  {
    tech: "Open Trivia Database",
    description:
      "An open API for generating trivia questions for quizzes and games.",
    usage:
      "Fetched trivia questions for the interactive Trivia Game project, handling difficulty levels and categories.",
    project: {
      name: "Trivia Game",
      live: "https://trivia-game-2025.onrender.com",
      github: "https://github.com/Galomer310/Trivia-Game-2025",
    },
  },
  {
    tech: "Exchange Rate API",
    description:
      "A currency exchange API providing real-time conversion rates.",
    usage:
      "Integrated API into Currency Converter app to calculate and display up-to-date currency conversions.",
    project: {
      name: "Currency Converter",
      live: "https://galomer310.github.io/Currency-Converter/",
      github: "https://github.com/Galomer310/Currency-Converter",
    },
  },
  {
    tech: "Docker",
    description:
      "A platform for developing, shipping, and running applications inside lightweight containers.",
    usage:
      "Containerized full-stack applications and scraping services for consistent development environments and smooth deployments. Utilized Docker Compose for orchestrating multi-service setups, ensuring portability and scalability.",
    project: {
      name: "Colton Data Pipeline",
      live: "Private Repo",
      github: "https://github.com/TLVTech/Colton",
    },
  },
  {
    tech: "EmailJS",
    description:
      "A service that allows sending emails directly from client-side applications without requiring a backend.",
    usage:
      "Integrated EmailJS in the Contact form of my portfolio to send messages securely via client-side JavaScript. Implemented template-based emails and form validation to ensure a smooth user experience without exposing sensitive credentials.",
    project: {
      name: "Portfolio Website",
      live: "https://portfolio-2025-m45j.onrender.com",
      github: "https://github.com/Galomer310",
    },
  },
  {
    tech: "Vite",
    description:
      "A next-generation frontend build tool that offers fast development and optimized builds.",
    usage:
      "Used Vite for setting up modern React applications such as Recipe Finder and Stock Tracker. Achieved lightning-fast hot module replacement (HMR) and efficient production builds for smooth development workflow.",
    project: {
      name: "Recipe Finder",
      live: "https://recipe-finder-frontend-wzop.onrender.com",
      github: "https://github.com/Galomer310/recipe_finder_frontend",
    },
  },
  {
    tech: "Git",
    description:
      "A distributed version control system for tracking changes in source code.",
    usage:
      "Utilized Git for source control across all projects. Managed branches, resolved merge conflicts, and maintained clean commit history following Git workflow best practices.",
    project: {
      name: "Portfolio & Full Stack Apps",
      live: "https://portfolio-2025-m45j.onrender.com",
      github: "https://github.com/Galomer310",
    },
  },
  {
    tech: "GitHub",
    description:
      "A cloud-based platform for hosting Git repositories with collaborative features.",
    usage:
      "Hosted and version-controlled all personal and collaborative projects on GitHub. Leveraged GitHub Actions for CI/CD pipelines and maintained organized repositories with clear README documentation.",
    project: {
      name: "Portfolio & Full Stack Apps",
      live: "https://portfolio-2025-m45j.onrender.com",
      github: "https://github.com/Galomer310",
    },
  },
  {
    tech: "Spoonacular API",
    description:
      "A comprehensive food and recipe API providing access to thousands of recipes, nutritional data, and meal planning resources.",
    usage:
      "Integrated Spoonacular API in the Recipe Finder project to allow ingredient-based recipe searches and dietary filters. Implemented dynamic API calls using Axios and displayed real-time results with pagination and responsive UI.",
    project: {
      name: "Recipe Finder",
      live: "https://recipe-finder-frontend-wzop.onrender.com",
      github: "https://github.com/Galomer310/recipe_finder_frontend",
    },
  },
];

const TechShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techShowcaseData.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = techShowcaseData[currentIndex];

  return (
    <section className="tech-showcase">
      {/* Left: Scrollable Window showing 6 items */}
      <div className="tech-scroll-window">
        <div
          className="tech-list-scroll"
          style={{
            transform: `translateY(-${currentIndex * 60}px)`, // Each item = 60px tall
          }}
        >
          {techShowcaseData.map((item, index) => (
            <div
              key={index}
              className={`tech-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {item.tech}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Details */}
      <div className="showcase-details">
        <h2>{currentItem.tech}</h2>
        <p className="description">{currentItem.description}</p>
        <p className="usage">{currentItem.usage}</p>
        <div className="project-links">
          - Example Project: {currentItem.project.name} <br />
          {currentItem.project.live !== "Private Repo" && (
            <a
              href={currentItem.project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              - Live Demo
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
