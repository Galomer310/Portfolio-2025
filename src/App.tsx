// App.tsx
import React, { useState } from "react";
// Import all main components.
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./public/style.css"; // Global CSS import

// Main App component.
const App: React.FC = () => {
  // State for dark mode.
  const [darkMode, setDarkMode] = useState(false);
  // Function to toggle dark mode.
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // State to control the visibility of the CV (resume) section.
  const [showCV, setShowCV] = useState(false);
  // Function to toggle CV visibility.
  const toggleCV = () => setShowCV((prev) => !prev);

  return (
    // Apply "dark-mode" class if darkMode state is true.
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Header component with dark mode toggle */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        {/* Home section */}
        <section id="home">
          <Home />
        </section>
        {/* About section */}
        <section id="about">
          <About />
        </section>
        {/* Projects section */}
        <section id="projects">
          <Projects />
        </section>
        {/* Contact section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
